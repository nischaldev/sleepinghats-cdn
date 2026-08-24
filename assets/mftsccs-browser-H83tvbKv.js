var ts={};/*! For license information please see main.bundle.js.LICENSE.txt */var ca={38:J=>{class P{constructor(_,N={}){if(this.type="warning",this.text=_,N.node&&N.node.source){let i=N.node.rangeBy(N);this.line=i.start.line,this.column=i.start.column,this.endLine=i.end.line,this.endColumn=i.end.column}for(let i in N)this[i]=N[i]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}}J.exports=P,P.default=P},71:(J,P)=>{P.__esModule=!0,P.word=P.tilde=P.tab=P.str=P.space=P.slash=P.singleQuote=P.semicolon=P.plus=P.pipe=P.openSquare=P.openParenthesis=P.newline=P.greaterThan=P.feed=P.equals=P.doubleQuote=P.dollar=P.cr=P.comment=P.comma=P.combinator=P.colon=P.closeSquare=P.closeParenthesis=P.caret=P.bang=P.backslash=P.at=P.asterisk=P.ampersand=void 0,P.ampersand=38,P.asterisk=42,P.at=64,P.comma=44,P.colon=58,P.semicolon=59,P.openParenthesis=40,P.closeParenthesis=41,P.openSquare=91,P.closeSquare=93,P.dollar=36,P.tilde=126,P.caret=94,P.plus=43,P.equals=61,P.pipe=124,P.greaterThan=62,P.space=32,P.singleQuote=39,P.doubleQuote=34,P.slash=47,P.bang=33,P.backslash=92,P.cr=13,P.feed=12,P.newline=10,P.tab=9,P.str=39,P.comment=-1,P.word=-2,P.combinator=-3},127:(J,P,v)=>{v.d(P,{NK:()=>c,Ve:()=>p,cf:()=>e,vw:()=>C,y8:()=>o});var _=v(8635),N=v(6931),i=v(8429),f=v(5760),w=v(3246),k=v(3076),h=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,a||[])).next())})};function e(T){var a=arguments;return h(this,arguments,void 0,function*(s,n="",d=null,g=N.y0){var y,b,L,S,E,R,U,F;const M=i.Logger.logfunction("SearchLinkMultipleAll",a)||{};try{try{if(i.serviceWorker){M.serviceWorker=!0;const he=yield(0,i.sendMessage)("SearchLinkMultipleAll",{searchQuery:s,token:n,caller:d,format:g});return i.Logger.logUpdate(M),he.data}}catch(he){(0,f.ey)(M,"SearchLinkMultipleAll",he),(0,i.handleServiceWorkerException)(he)}let W=[],j=[],q=[],X=[],Z=s[0].composition,ae={},H={};d?.isDataLoaded?(ae.compositionIds=(y=d.conceptIds)===null||y===void 0?void 0:y.slice(),ae.internalConnections=(b=d.internalConnections)===null||b===void 0?void 0:b.slice(),ae.linkers=(L=d.linkers)===null||L===void 0?void 0:L.slice(),ae.reverse=(S=d.reverse)===null||S===void 0?void 0:S.slice(),H=ae,W=H.compositionIds,q=H.internalConnections,j=H.linkers,X=H.reverse):(ae=yield(0,_.j)(s,n),d&&(d.conceptIds=(E=ae.compositionIds)===null||E===void 0?void 0:E.slice(),d.internalConnections=(R=ae.internalConnections)===null||R===void 0?void 0:R.slice(),d.linkers=(U=ae.linkers)===null||U===void 0?void 0:U.slice(),d.reverse=(F=ae.reverse)===null||F===void 0?void 0:F.slice(),d.isDataLoaded=!0),H=ae,W=H.compositionIds,q=H.internalConnections,j=H.linkers,X=H.reverse);let ie=yield function(he,ne,Q,oe,ee,$){return h(this,arguments,void 0,function*(re,fe,ce,de,we,me,ye=N.y0){try{let Ae,Le,ve=yield(0,w.QL)(re);return ye==N.ZJ?(Ae=yield(0,w.MT)(fe,ce),Le=yield C(re,Ae,we,de)):ye==N.yv?(Ae=yield(0,w.D)(fe,ce),Le=yield C(re,Ae,we,de)):ye==100?(Ae=yield(0,w.nr)(fe,ce),Le=yield o(ve,Ae,we,de)):ye==N.SL?Le=yield(0,k._W)(re,fe,ce,me.ofCompositions,de):(Ae=yield(0,w.rv)(fe,ce),Le=yield o(ve,Ae,we,de)),Le}catch{return}})}(j,W,q,X,Z,s[0],g);return i.Logger.logUpdate(M),ie}catch(W){throw(0,f.ey)(M,"SearchLinkMultipleAll",W),W}})}function o(T,a,s){return h(this,arguments,void 0,function*(n,d,g,y=[]){new Date().getTime();let b={},L=[];for(let S=0;S<n.length;S++)L.push(n[S].toTheConceptId),L.push(n[S].ofTheConceptId),L.push(n[S].typeId);n.sort(function(S,E){return E.id-S.id});for(let S=0;S<n.length;S++){let E=!1;if(y.includes(n[S].id)&&(E=!0),E==1){if(d[n[S].ofTheConceptId]&&d[n[S].toTheConceptId]){let R=d[n[S].toTheConceptId],U=yield(0,i.GetTheConcept)(n[S].typeId),F=R?.data,M=Object.keys(F)[0];try{let W=U.characterValue+"_reverse";typeof F=="string"&&(F={}),Array.isArray(F[M][W])||(typeof F[M]=="string"&&(F[M]={}),F[M][W]=[]),F[M][W].push(d[n[S].ofTheConceptId])}catch{}}}else if(d[n[S].ofTheConceptId]&&d[n[S].toTheConceptId]){let R=d[n[S].ofTheConceptId],U=yield(0,i.GetTheConcept)(n[S].typeId),F=R?.data,M=Object.keys(F)[0];try{typeof F=="string"&&(F={}),Array.isArray(F[M][U.characterValue])||(typeof F[M]=="string"&&(F[M]={}),F[M][U.characterValue]=[]),F[M][U.characterValue].push(d[n[S].toTheConceptId])}catch{}}}return b=d[g],b})}function c(T,a,s){return h(this,arguments,void 0,function*(n,d,g,y=[]){let b=[],L=[];for(let S=0;S<n.length;S++)L.push(n[S].toTheConceptId),L.push(n[S].ofTheConceptId),L.push(n[S].typeId);n.sort(function(S,E){return E.id-S.id});for(let S=0;S<n.length;S++){let E=!1;if(y.includes(n[S].id)&&(E=!0),E==1){if(d[n[S].ofTheConceptId]&&d[n[S].toTheConceptId]){let R=d[n[S].toTheConceptId],U=yield(0,i.GetTheConcept)(n[S].typeId),F=Object.keys(R)[0];try{let M=U.characterValue+"_reverse";typeof R=="string"&&(R={}),Array.isArray(R[F][M])||(typeof R[F]=="string"&&(R[F]={}),R[F][M]=[]),R[F][M].push(d[n[S].ofTheConceptId])}catch{}}}else if(d[n[S].ofTheConceptId]&&d[n[S].toTheConceptId]){let R=d[n[S].ofTheConceptId],U=yield(0,i.GetTheConcept)(n[S].typeId),F=Object.keys(R)[0];try{typeof R=="string"&&(R={}),Array.isArray(R[F][U.characterValue])||(typeof R[F]=="string"&&(R[F]={}),R[F][U.characterValue]=[]),R[F][U.characterValue].push(d[n[S].toTheConceptId])}catch{}}}for(let S=0;S<g.length;S++){let E=d[g[S]];E&&b.push(E)}return b})}function p(T,a,s,n){return h(this,arguments,void 0,function*(d,g,y,b,L=[]){new Date().getTime();let S=[],E=[];for(let R=0;R<d.length;R++)E.push(d[R].toTheConceptId),E.push(d[R].ofTheConceptId),E.push(d[R].typeId);d.sort(function(R,U){return U.id-R.id});for(let R=0;R<d.length;R++){let U=!1;if(L.includes(d[R].id)&&(U=!0),U==1){if(g[d[R].ofTheConceptId]&&g[d[R].toTheConceptId]){let F=g[d[R].toTheConceptId],M=yield(0,i.GetTheConcept)(d[R].typeId),W=F?.data,j=Object.keys(W)[0];try{let q=M.characterValue+"_reverse";typeof W=="string"&&(W={}),Array.isArray(W[j][q])||(typeof W[j]=="string"&&(W[j]={}),W[j][q]=[]),W[j][q].push(g[d[R].ofTheConceptId])}catch{}}}else if(g[d[R].ofTheConceptId]&&g[d[R].toTheConceptId]){let F=g[d[R].ofTheConceptId],M=yield(0,i.GetTheConcept)(d[R].typeId),W=F?.data,j=Object.keys(W)[0];try{typeof W=="string"&&(W={}),Array.isArray(W[j][M.characterValue])||(typeof W[j]=="string"&&(W[j]={}),W[j][M.characterValue]=[]),W[j][M.characterValue].push(g[d[R].toTheConceptId])}catch{}}}for(let R=0;R<b.length;R++){let U=g[b[R]];U&&S.push(U)}return S})}function C(T,a,s){return h(this,arguments,void 0,function*(n,d,g,y=[]){let b={},L=yield(0,i.GetConnectionBulk)(n),S=[];for(let E=0;E<L.length;E++)S.push(L[E].toTheConceptId),S.push(L[E].ofTheConceptId),S.push(L[E].typeId);yield(0,i.GetConceptBulk)(S),L.sort(function(E,R){return R.id-E.id});for(let E=0;E<L.length;E++){let R=!1;if(y.includes(L[E].id)&&(R=!0),R==1){if(d[L[E].ofTheConceptId]&&d[L[E].toTheConceptId]){let U=d[L[E].toTheConceptId],F=yield(0,i.GetTheConcept)(L[E].typeId),M=U,W=Object.keys(M)[0];try{let j=F.characterValue+"_reverse";typeof M=="string"&&(M={}),Array.isArray(M[W][j])||(typeof M[W]=="string"&&(M[W]={}),M[W][j]=[]),M[W][j].push(d[L[E].ofTheConceptId])}catch{}}}else if(d[L[E].ofTheConceptId]&&d[L[E].toTheConceptId]){let U=d[L[E].ofTheConceptId],F=yield(0,i.GetTheConcept)(L[E].typeId),M=U,W=Object.keys(M)[0];try{typeof M=="string"&&(M={}),Array.isArray(M[W][F.characterValue])||(typeof M[W]=="string"&&(M[W]={}),M[W][F.characterValue]=[]),M[W][F.characterValue].push(d[L[E].toTheConceptId])}catch{}}}return b=d[g],b})}},145:(J,P,v)=>{let _,N,i=v(7793);class f extends i{constructor(k){super({type:"document",...k}),this.nodes||(this.nodes=[])}toResult(k={}){return new _(new N,this,k).stringify()}}f.registerLazyResult=w=>{_=w},f.registerProcessor=w=>{N=w},J.exports=f,f.default=f},197:()=>{},198:(J,P,v)=>{v.d(P,{R:()=>f});var _=v(7258),N=v(6580),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};class f{static AddConceptId(k){this.localId=k.value,(0,_.kH)("localid",k)}static getConceptId(){return i(this,void 0,void 0,function*(){try{if(this.localId){if(this.ReservedLocalId.length<5){yield(0,N.EO)().then(()=>{let h=this.localId;for(let e=1;e<10;e++){let o=this.localId-e;this.ReservedLocalId.push(o),h=o}this.AddConceptId({id:0,value:h})}).catch(h=>-Math.floor(1e8*Math.random()));let k=this.ReservedLocalId[0];return this.ReservedLocalId.shift(),k}{let k=this.ReservedLocalId[0];return this.ReservedLocalId.shift(),k}}return yield(0,N.EO)().then(()=>{let k=this.localId;for(let h=1;h<10;h++){let e=this.localId-h;this.ReservedLocalId.push(e),k=e}this.AddConceptId({id:0,value:k})}),this.getConceptId()}catch{return-Math.floor(1e8*Math.random())}})}static AddConnectionId(k){this.localConnectionId=k.value}static getConnectionId(){return i(this,void 0,void 0,function*(){try{if(this.localConnectionId){if(this.ReservedConnectionId.length<5){yield(0,N.xd)().then(()=>{let h=this.localConnectionId;for(let e=1;e<10;e++){let o=this.localConnectionId-e;this.ReservedConnectionId.push(o),h=o}}).catch(h=>-Math.floor(1e8*Math.random()));let k=this.ReservedConnectionId[0];return this.ReservedConnectionId.shift(),k}{let k=this.ReservedConnectionId[0];return this.ReservedConnectionId.shift(),k}}return yield(0,N.xd)().then(()=>{let k=this.localConnectionId;for(let h=1;h<10;h++){let e=this.localConnectionId-h;this.ReservedConnectionId.push(e),k=e}this.AddConnectionId({id:1,value:k})}),this.getConnectionId()}catch{return-Math.floor(1e8*Math.random())}})}}f.ReservedLocalId=[],f.ReservedConnectionId=[]},263:(J,P)=>{P.__esModule=!0,P.default=function(v){return v.sort(function(_,N){return _-N})},J.exports=P.default},339:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(3631))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.SELECTOR,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},370:(J,P,v)=>{v.d(P,{B:()=>_});class _{static setRandomizer(i){this.BASE_RANDOMIZER=i}static getRandomizer(){return this.BASE_RANDOMIZER}static GetConceptUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/getConcept":this.NODE_CACHE_URL+"/api/getConcept"}static GetConnectionUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get-connection-by-id":this.NODE_CACHE_URL+"/api/get-connection-by-id"}static GetConceptBulkUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get_concept_bulk":this.NODE_CACHE_URL+"/api/get_concept_bulk"}static GetConnectionBulkUrl(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get_connection_bulk":this.NODE_CACHE_URL+"/api/get_connection_bulk"}static GetAllConceptsOfUserUrl(){return this.BASE_URL+"/api/get_all_concepts_of_user"}static GetAllConnectionsOfUserUrl(){return this.BASE_URL+"/api/get_all_connections_of_user"}static GetAllConnectionsOfCompositionUrl(){return this.BASE_URL+"/api/get_all_connections_of_composition"}static GetAllConnectionsOfCompositionBulkUrl(){return this.BASE_URL+"/api/get_all_connections_of_composition_bulk"}static GetConceptByCharacterValueUrl(){return this.BASE_URL+"/api/get_concept_by_character_value"}static GetConceptByCharacterAndTypeUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_type"}static GetConceptByCharacterAndCategoryUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_category"}static GetConceptByCharacterAndCategoryDirectUrl(){return this.BASE_URL+"/api/get_concept_by_character_and_category_direct"}static GetCharacterByCharacterUrl(){return this.BASE_URL+"/api/get_character_by_character"}static GetAllConceptsByTypeUrl(){return this.BASE_URL+"/api/get_all_concepts_by_type"}static GetAllConnectionsOfConceptUrl(){return this.BASE_URL+"/api/get-link-connections"}static GetAllConnectionsToConceptUrl(){return this.BASE_URL+"/api/get-link-reverse-connections"}static GetAllAiData(){return this.BASE_URL+"/api/get-preloaded-concepts"}static getAppConfig(){return this.NODE_URL+"/api/v1/config"}static PostPrefetchConceptConnections(){return this.NODE_URL+"/api/v1/access-tracker/sync-access-tracker"}static GetSuggestedConcepts(){return this.NODE_URL+"/api/v1/access-tracker/list-concepts-file"}static GetSuggestedConnections(){return this.NODE_URL+"/api/v1/access-tracker/list-connections-file"}static PostLogger(){return this.LOG_SERVER+"/api/logger"}static LogHealth(){return this.LOG_SERVER+"/api/check"}static GetAllPrefetchConnectionsUrl(){return this.BASE_URL+"/api/get_all_connections_of_user?inpage=500"}static GetAllLinkerConnectionOfConceptUrl(){return this.BASE_URL+"/api/get-all-linkers-from-concept"}static GetAllLinkerConnectionToConceptUrl(){return this.BASE_URL+"/api/get-all-linkers-to-concept"}static DeleteConceptUrl(){return this.BASE_URL+"/api/delete_concept"}static DeleteUserUrl(){return this.BASE_URL+"/api/deleteuser"}static RecursiveSearchUrl(){return this.BASE_URL+"/api/recursivesearch-concept-connection"}static SearchLinkMultipleAllApiUrl(){return this.BASE_URL+"/api/Connection/search-link-multiple-all-ccs"}static MakeTheNameInBackendUrl(){return this.BASE_URL+"/api/make-name-from-frontend"}static SearchAllTypeWithLinker(i=!0){return i?this.BASE_URL+"/api/search-all-with-linker-ccs":this.BASE_URL+"/api-search-compositions-internal-clean-ccs"}static LoginUrl(){return this.BASE_URL+"/api/auth/login"}static SignupUrl(){return this.BASE_URL+"/api/auth/signup"}static GetCompositionConnectionBetweenTwoConceptsUrl(){return this.BASE_URL+"/api/get-composition-connection-between-two-concepts"}static SearchCompositionsUrl(){return this.BASE_URL+"/api/search-compositions"}static SearchLinkMultipleAll(){return this.BASE_URL+"/api/Connection/search-link-multiple-all"}static CreateSessionId(){return this.BASE_URL+"/api/create-session-id-remote"}static CreateSessionVisitUrl(){return this.BASE_URL+"/api/create-remote-session-visit"}static ViewInternalDataUrl(){return this.BASE_URL+"/api/view-api-internal-data-ccs-id-bulk"}static SearchInternalWithAuthenticatedCcsUrl(){return this.BASE_URL+"/api/search-composition-internal-authenticated-ccs"}static SearchInternalWithCcsUrl(){return this.BASE_URL+"/api-search-compositions-internal-clean-ccs"}static CreateGhostConceptApiUrl(i=!0){return i?_.NODE_URL+"/api/v1/local-concepts":_.NODE_URL+"/api/v1/local-concepts-without-auth"}static CreateGhostConnectionApiUrl(){return _.NODE_URL+"/api/v1/local-connections"}static GetRealConceptById(){return _.NODE_URL+"/api/v1/local-concepts-translate"}static GetReservedIdUrl(){return this.BASE_URL+"/api/get_reserved_ids"}static GetReservedConnectionIdUrl(){return this.BASE_URL+"/api/get_reserved_connection_ids"}static CreateTheTextDataUrl(){return this.BASE_URL+"/api/create_text_data"}static CreateTheCharacterDataUrl(){return this.BASE_URL+"/api/create_character_data"}static CreateTheConceptUrl(){return this.BASE_URL+"/api/create_the_concept"}static CreateTheConnectionUrl(){return this.BASE_URL+"/api/create_the_connection"}static CreateTheConnectionNewUrl(){return this.BASE_URL+"/api/create_the_connection_new"}static MakeTheTypeConceptUrl(){return this.BASE_URL+"/api/make_the_type_concept"}static DeleteTheConnectionUrl(){return this.BASE_URL+"/api/delete_connection"}static DeleteTheConnectionBulkUrl(){return this.BASE_URL+"/api/delete_connection_bulk"}static GetTypeConceptBulk(){return this.BASE_URL+"/api/get_type_concept_by_character_bulk"}static UploadFileLimitUrl(){return this.BASE_URL+"/api/upload/limit"}static FreeschemaQueryUrl(){return this.BASE_URL+"/api/freeschema-query"}static uploadImageUrl(){return this.BASE_URL+"/api/Image/UploadImage"}static uploadImageUrlWithSmall(){return this.BASE_URL+"/api/Image/UploadImageV2"}static uploadFileUrl(){return this.BASE_URL+"/api/Image/UploadFile"}static sendMail(){return this.BASE_URL+"/api/sendmail"}static sendBulkMail(){return this.BASE_URL+"/api/sendmail/bulk"}static getWidgetData(){return this.BASE_URL+"/api/get-widget"}static getLatestWidgetData(){return!this.NODE_CACHE_URL||this.NODE_CACHE_URL&&typeof this.NODE_CACHE_URL=="string"&&this.NODE_CACHE_URL.trim()===""?this.BASE_URL+"/api/get-latest-widget":this.NODE_CACHE_URL+"/api/get-latest-widget"}static getRecentWidgetData(){return this.BASE_URL+"/api/get-recent-widget"}static getConnectionsByTypes(){return this.BASE_URL+"/api/get-connection-by-types"}static GetConnectionsBetweenUrl(){return this.BASE_URL+"/api/get-connection-between"}static CreatePrototypeUrl(){return this.BASE_URL+"/api/create-prototype"}static GetCachedImage(i){return"https://cdn.boomconcole.com/freeschema/"+i}}_.BASE_URL="https://localhost:7053/",_.NODE_CACHE_URL="",_.AI_URL="https://ai.freeschema.com",_.MQTT_URL="192.168.1.249",_.NODE_URL="http://localhost:5001",_.LOG_SERVER="https://logdev.freeschema.com",_.BASE_APPLICATION="",_.DOCUMENTATION_WIDGET=0,_.isNearestCache=!0,_.ACCESS_CONTROL_BASE_URL="http://localhost:5001",_.isPwa=!1,_.FLAGS={logApplication:!1,logPackage:!1,accessTracker:!1,isTest:!1},_.BASE_RANDOMIZER=999},388:(J,P,v)=>{v.d(P,{gt:()=>f,nm:()=>N,vo:()=>_,wS:()=>i}),v(4990),v(6047);function _(w=[],k){var h,e;let o=[],c=(h=k.type)===null||h===void 0?void 0:h.characterValue;if(c?.startsWith("the_")||(c="the_"+c),Array.isArray(w))for(let p=0;p<w.length;p++){let C=(e=w[p].type)===null||e===void 0?void 0:e.characterValue;C?.startsWith("the_")||(C="the_"+C),k.typeId!=w[p].typeId&&c!=C||o.push(w[p])}return o}function N(w=[],k){let h=[],e=k.typeCharacter;if(e?.startsWith("the_")||(e="the_"+e),Array.isArray(w))for(let o=0;o<w.length;o++){let c=w[o].typeCharacter;c?.startsWith("the_")||(c="the_"+c),k.typeId!=w[o].typeId&&e!=c||h.push(w[o])}return h}function i(w=[],k){let h=[];if(Array.isArray(w)){const e=w.find(c=>c.toTheConceptId==k);e&&h.push(e);const o=w.find(c=>c.ofTheConceptId==k);o&&h.push(o)}return h}function f(w=[],k){let h=[];if(Array.isArray(w)){const e=w.find(c=>c.toTheConceptId==k);e&&h.push(e);const o=w.find(c=>c.ofTheConceptId==k);o&&h.push(o)}return h}},396:(J,P,v)=>{let _=v(7793);class N extends _{constructor(f){super(f),this.type="atrule"}append(...f){return this.proxyOf.nodes||(this.nodes=[]),super.append(...f)}prepend(...f){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...f)}}J.exports=N,N.default=N,_.registerAtRule(N)},413:(J,P,v)=>{v.d(P,{O:()=>w});var _=v(830),N=v(8429);class i{constructor(h,e,o,c){this.leftNode=null,this.rightNode=null,this.variants=[],this.height=1,this.key=h,this.value=e,this.leftNode=o,this.rightNode=c,this.currentNode=null}addCurrentNode(h,e){return e==null?e=h:(h.value.typeId!=e.value.typeId&&(e.currentNode=this.addCurrentNode(h,e.currentNode)),e)}addCurrentNodeType(h,e){if(e==null)return e=h;let o=!1;h.value.id==e.value.id&&(o=!0);for(let c=0;c<e.variants.length;c++)e.variants[c].value.id==h.value.id&&(o=!0);return o||e.variants.push(h),e}getMax(h,e){return h>e?h:e}addNode(h,e,o){if(e==null)return(0,N.dispatchIdEvent)(h.value.ofTheConceptId),h;let c=e.leftNode,p=e.rightNode;if(h.key<e.key)e.leftNode=this.addNode(h,c,o);else{if(!(h.key>e.key))return e;e.rightNode=this.addNode(h,p,o)}e.height=1+this.getMax(this.getHeight(e.leftNode),this.getHeight(e.rightNode));let C=this.getBalanceFactor(e);if(C>1&&e.leftNode){if(this.getBalanceFactor(e.leftNode)>=0)return this.rightRotate(e);if(this.getBalanceFactor(e.leftNode)<0)return e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)}if(C<-1&&e.rightNode){if(this.getBalanceFactor(e.rightNode)<=0)return this.leftRotate(e);if(this.getBalanceFactor(e.rightNode)>0)return e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)}return e}addTypeNode(h,e,o){if(h.value.typeId!=0){if(e==null)return e=h;let c=e.leftNode,p=e.rightNode;if(e.key>h.key)e.leftNode=this.addTypeNode(h,c,o);else{if(!(e.key<h.key))return e.key==h.key&&e.key!=0&&e.addCurrentNodeType(h,e),e;e.rightNode=this.addTypeNode(h,p,o)}e.height=1+this.getMax(this.getHeight(e.leftNode),this.getHeight(e.rightNode));let C=this.getBalanceFactor(e);if(C>1&&e.leftNode){if(h.key<e.leftNode.key)return this.rightRotate(e);if(h.key>e.leftNode.key)return e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)}if(C<-1&&e.rightNode){if(h.key>e.rightNode.key)return this.leftRotate(e);if(h.key<e.rightNode.key)return e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)}}return e}rightRotate(h){if(h){let e=h.leftNode;if(e){let o=e.rightNode;return h.leftNode=o,e.rightNode=h,h.height=this.getMax(this.getHeight(h.leftNode),this.getHeight(h.rightNode))+1,e.height=this.getMax(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1,e}throw new Error("Cannot perform right rotation: left node is null.")}return h}leftRotate(h){if(h){let e=h.rightNode;if(e){let o=e.leftNode;return e.leftNode=h,h.rightNode=o,h.height=this.getMax(this.getHeight(h.leftNode),this.getHeight(h.rightNode))+1,e.height=this.getMax(this.getHeight(e.leftNode),this.getHeight(h.rightNode))+1,e}throw new Error("Cannot perform left rotation: right node is null.")}return h}getHeight(h){return h?h.height:0}getBalanceFactor(h){return h==null?0:this.getHeight(h.leftNode)-this.getHeight(h.rightNode)}getFromNode(h,e){try{if(e)return h==e.key?(e.value.count?e.value.count++:e.value.count=1,e):h<e.key?this.getFromNode(h,e.leftNode):h>e.key?this.getFromNode(h,e.rightNode):e}catch{}return e}getCharacterFromNode(h,e){return e&&(h==e.key?e:h<e.key?this.getCharacterFromNode(h,e.leftNode):h>e.key?this.getCharacterFromNode(h,e.rightNode):e)}checkIfIdsInNode(h,e,o,c){if(h){if(e.includes(h.key)){o.push(h.value);let p=e.indexOf(h.key);e.splice(p,1)}h.leftNode&&this.checkIfIdsInNode(h.leftNode,e,o,c),h.rightNode&&this.checkIfIdsInNode(h.rightNode,e,o,c)}}traverse(h){let e=0;return h&&(e+=1,h?.leftNode&&(e+=this.traverse(h.leftNode)),h.rightNode&&(e+=this.traverse(h.rightNode))),e}removeNode(h,e){if(h==null)return h;if(h.key>e)return h.leftNode=this.removeNode(h.leftNode,e),h;if(h.key<e)return h.rightNode=this.removeNode(h.rightNode,e),h;if(new Event(`${h.value.ofTheConceptId}`),(0,N.dispatchIdEvent)(h.value.ofTheConceptId),h.leftNode==null){let o=h.rightNode;return h=null,o}if(h.rightNode==null){let o=h.leftNode;return h=null,o}{let o=this.inOrderSuccessor(h.rightNode);return h.value=o.value,h.key=o.key,h.variants=o.variants,h.currentNode=o.currentNode,h.rightNode=this.removeNode(h.rightNode,o.key),h}}removeNodeWithVariants(h,e,o){if(h==null)return h;if(h.key>e)return h.leftNode=this.removeNodeWithVariants(h.leftNode,e,o),h;if(h.key<e)return h.rightNode=this.removeNodeWithVariants(h.rightNode,e,o),h;if(h.variants.length>0){if(h.value.id==o){let c=h.variants[0];if(c)return h.value=c.value,h.key=c.key,h.currentNode=c.currentNode,h.variants.splice(0,1),h}else for(let c=0;c<h.variants.length;c++)if(o==h.variants[c].value.id)return h.variants.splice(c,1),h}if(h.leftNode==null){let c=h.rightNode;return h=null,c}if(h.rightNode==null){let c=h.leftNode;return h=null,c}{let c=this.inOrderSuccessor(h.rightNode);return h.value=c.value,h.key=c.key,h.variants=c.variants,h.currentNode=c.currentNode,h.rightNode=this.removeNodeWithVariants(h.rightNode,c.key,o),h}}inOrderSuccessor(h){for(;h.leftNode!=null;)h=h.leftNode;return h}}var f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};class w{static addNodeToTree(h){try{this.connectionMap.set(h.key,h.value),this.connectionroot===null&&(this.connectionroot=h)}catch(e){throw e}}static addConnectionToTree(h){this.connectionMap.has(h.id)||(0,N.dispatchIdEvent)(h.ofTheConceptId),this.connectionMap.set(h.id,h),this.connectionroot===null&&(this.connectionroot=new i(h.id,h,null,null))}static traverse(){return this.connectionMap.size}static waitForDataToLoad(){return f(this,void 0,void 0,function*(){return new Promise((h,e)=>{this.checkFlag(h),setTimeout(()=>{e("not")},25e3)})})}static checkFlag(h){if(_.B.isConnectionLoaded)return h("done");setTimeout(w.checkFlag,1e3,h)}static removeNodeFromTree(h){return f(this,void 0,void 0,function*(){const e=this.connectionMap.get(h);e&&((0,N.dispatchIdEvent)(e.ofTheConceptId),this.connectionMap.delete(h),this.connectionMap.size===0&&(this.connectionroot=null))})}static getNodeFromTree(h){return f(this,void 0,void 0,function*(){try{const e=this.connectionMap.get(h);return e?(e.count?e.count++:e.count=1,{key:h,value:e}):null}catch{return}})}static getConnectionListFromIds(h,e,o){return f(this,void 0,void 0,function*(){for(let c=h.length-1;c>=0;c--){const p=this.connectionMap.get(h[c]);p&&(e.push(p),h.splice(c,1))}})}}w.connectionroot=null,w.connectionMap=new Map},425:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.COMMENT,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},507:(J,P,v)=>{v.d(P,{_:()=>T,A:()=>C});var _=v(370),N=v(1833),i=v(5760),f=v(1317),w=v(8429),k=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})},h=v(6812);class e{}e.isUpdated=!1,e.isOnlineSync=!1;var o=v(6948),c=v(7258),p=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,s||[])).next())})};function C(){return p(this,arguments,void 0,function*(a=!0){try{if(yield(0,o.qI)("concepts"),yield(0,c.qI)("concepts"),a){if((yield(0,o.b8)()).isOnlineSync)return!0;yield function(){return k(this,void 0,void 0,function*(){const s=w.Logger.logfunction("GetAiData");try{new Date().getTime();var n=(0,f.ab)("application/x-www-form-urlencoded");const g=yield fetch(_.B.GetAllAiData(),{method:"GET",headers:n});g.ok||(0,i.ry)(g);const y=yield g.json();for(var d=0;d<y.length;d++)N.I.AddConcept(y[d]);T(),new Date().getTime(),w.Logger.logUpdate(s)}catch(g){(0,i.Mb)(g,_.B.GetAllAiData())}})}()}return!0}catch{return!0}})}function T(){return p(this,void 0,void 0,function*(){e.isOnlineSync=!0;var a=new h.B(e.isOnlineSync);(0,o.El)(a)})}},518:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(3631))&&_.__esModule?_:{default:_},i=v(1581);function f(h,e){for(var o=0;o<e.length;o++){var c=e[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,c.key,c)}}function w(h,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},w(h,e)}var k=function(h){var e,o;function c(a){var s;return(s=h.call(this,a)||this).type=i.ROOT,s}o=h,(e=c).prototype=Object.create(o.prototype),e.prototype.constructor=e,w(e,o);var p,C,T=c.prototype;return T.toString=function(){var a=this.reduce(function(s,n){return s.push(String(n)),s},[]).join(",");return this.trailingComma?a+",":a},T.error=function(a,s){return this._error?this._error(a,s):new Error(a)},p=c,(C=[{key:"errorGenerator",set:function(a){this._error=a}}])&&f(p.prototype,C),Object.defineProperty(p,"prototype",{writable:!1}),c}(N.default);P.default=k,J.exports=P.default},592:(J,P,v)=>{v.d(P,{h:()=>w});var _=v(8429),N=v(9097),i=v(5760),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,h||[])).next())})};function w(k,h,e){var o=arguments;return f(this,arguments,void 0,function*(c,p,C,T=!1,a={concepts:[],connections:[]}){var s,n,d,g,y,b;const L=N.V.logfunction("CreateConnectionBetweenTwoConceptsLocal",o)||{};let S=performance.now();try{if(_.serviceWorker){L.serviceWorker=!0;try{const M=yield(0,_.sendMessage)("CreateConnectionBetweenTwoConceptsLocal",{ofTheConcept:c,toTheConcept:p,linker:C,both:T,actions:a});return!((n=(s=M?.actions)===null||s===void 0?void 0:s.concepts)===null||n===void 0)&&n.length&&(a.concepts=JSON.parse(JSON.stringify(M.actions.concepts))),!((g=(d=M?.actions)===null||d===void 0?void 0:d.connections)===null||g===void 0)&&g.length&&(a.connections=JSON.parse(JSON.stringify(M.actions.connections))),N.V.logUpdate(L),M.data}catch(M){(0,i.ey)(L,"CreateConnectionBetweenTwoConceptsLocal",M),(0,_.handleServiceWorkerException)(M)}}if(c.userId,T){let M=((y=p.type)===null||y===void 0?void 0:y.characterValue)+"_s_"+(C+"_by");var E=yield(0,_.MakeTheInstanceConceptLocal)("connection",M,!1,999,999,999,0,a);yield(0,_.CreateTheConnectionLocal)(p.id,c.id,E.id,1e3,void 0,void 0,a)}let U=((b=c.type)===null||b===void 0?void 0:b.characterValue)+"_s_"+(C+"_s");var R=yield(0,_.MakeTheInstanceConceptLocal)("connection",U,!1,999,999,999,void 0,a);let F=yield(0,_.CreateTheConnectionLocal)(c.id,p.id,R.id,1e3,void 0,void 0,a);return N.V.logUpdate(L),F}catch(U){throw N.V.logError(S,c.userId,"create",void 0,void 0,500,U,"CreateConnectionBetweenTwoConceptsLocal",[c,p,C,T],void 0,void 0),(0,i.ey)(L,"CreateConnectionBetweenTwoConceptsLocal",U),U}})}},680:(J,P,v)=>{P.__esModule=!0;var _=v(1581);Object.keys(_).forEach(function(f){f!=="default"&&f!=="__esModule"&&(f in P&&P[f]===_[f]||(P[f]=_[f]))});var N=v(4451);Object.keys(N).forEach(function(f){f!=="default"&&f!=="__esModule"&&(f in P&&P[f]===N[f]||(P[f]=N[f]))});var i=v(8500);Object.keys(i).forEach(function(f){f!=="default"&&f!=="__esModule"&&(f in P&&P[f]===i[f]||(P[f]=i[f]))})},830:(J,P,v)=>{v.d(P,{B:()=>_});class _{}_.isTypeLoaded=!1,_.isCharacterLoaded=!1,_.isDataLoaded=!1,_.isLocalDataLoaded=!1,_.isLocalCharacterLoaded=!1,_.isLocalTypeLoaded=!1,_.isConnectionLoaded=!1,_.isConnectionTypeLoaded=!1,_.isLocalConnectionLoaded=!1},838:(J,P,v)=>{v.d(P,{l:()=>w});var _=v(5760),N=v(1317),i=v(8429),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};function w(k){var h=arguments;return f(this,void 0,void 0,function*(){i.Logger.logfunction("GetAllLinkerConnectionsFromTheConcept",h);var e=[];try{new Date().getTime();var o=(0,N.Xr)("application/x-www-form-urlencoded");const C=yield fetch(i.BaseUrl.GetAllLinkerConnectionOfConceptUrl()+`?conceptId=${k}`,{method:"GET",headers:o});if(C.ok){const T=yield C.json();for(var c=0;c<T.length;c++){var p=T[c];e.push(p)}}else(0,_.ry)(C)}catch(C){(0,_.Mb)(C,i.BaseUrl.GetAllLinkerConnectionOfConceptUrl())}return e})}},903:(J,P,v)=>{v.d(P,{W:()=>k});var _=v(1804),N=v(8278),i=v(830),f=v(8429),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,[])).next())})};class k{static addNodeToTree(e){this.conceptMap.set(e.key,e.value),this.root===null&&(this.root=e)}static waitForDataToLoad(){return w(this,void 0,void 0,function*(){return new Promise((e,o)=>{this.checkFlag(e),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(e){if(i.B.isDataLoaded)return e("done");setTimeout(k.checkFlag,1e3,e)}static addConceptToTree(e){let o=new N.b(e.characterValue,e,null,null);_.f.addNodeToTree(o),this.conceptMap.set(e.id,e),this.root===null&&(this.root=new N.b(e.id,e,null,null))}static getNodeFromTree(e){return w(this,void 0,void 0,function*(){const o=this.conceptMap.get(e);return o?{key:e,value:o}:null})}static removeNodeFromTree(e){return w(this,void 0,void 0,function*(){this.conceptMap.has(e)&&((0,f.dispatchIdEvent)(e),this.conceptMap.delete(e),this.conceptMap.size===0&&(this.root=null))})}static getConceptListFromIds(e,o,c){return w(this,void 0,void 0,function*(){for(let p=e.length-1;p>=0;p--){const C=this.conceptMap.get(e[p]);C&&(o.push(C),e.splice(p,1))}})}static countNumberOfNodes(){return this.conceptMap.size}}k.root=null,k.conceptMap=new Map},939:(J,P,v)=>{v.d(P,{y:()=>_});class _{constructor(){this.conceptId=0,this.connectionTypeId=0,this.connectionType="",this.count=0}}},957:(J,P,v)=>{v.d(P,{A:()=>o});var _=v(8429),N=v(6948),i=v(370),f=v(1833),w=v(830),k=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};const h=500;function e(){return new Promise(c=>setTimeout(c,0))}function o(){return k(this,void 0,void 0,function*(){try{let c=[];if(i.B.isPwa&&(c=yield(0,N.D3)("concept")),Array.isArray(c))for(let p=0;p<c.length;p++)f.I.AddConceptToMemory(c[p]),p>0&&p%h===0&&(yield e());w.B.isDataLoaded=!0,w.B.isCharacterLoaded=!0,w.B.isTypeLoaded=!0}catch(c){throw yield(0,_.DelayFunctionExecution)(2e3,o()),{message:"Cannot create Binary Tree Concept",ok:!1,status:400,data:c}}})}},993:(J,P,v)=>{v.d(P,{Ay:()=>h,N:()=>e});var _=v(6700),N=v(3008),i=v(9775),f=v(7015),w=v(8429),k=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,[])).next())})};function h(o,c,p,C,T,a,s){return k(this,void 0,void 0,function*(){let n=yield i.B.getId(),d=new Date,g=new Date,y=new N.j(n,c,C,p,T,o,a,!0,d,g,s);return y.isTemp=!1,f.Y.AddConcept(y),y})}function e(o,c,p,C,T,a,s){return k(this,void 0,void 0,function*(){let n=yield i.B.getId(),d=new Date,g=new Date,y=new N.j(n,c,C,p,T,o,a,!1,d,g,s);return w.ConceptsData.AddConcept(y),(0,_.Y)([y]),y})}},1106:(J,P,v)=>{let{nanoid:_}=v(5042),{isAbsolute:N,resolve:i}=v(197),{SourceMapConsumer:f,SourceMapGenerator:w}=v(1866),{fileURLToPath:k,pathToFileURL:h}=v(2739),e=v(3614),o=v(3878),c=v(9746),p=Symbol("lineToIndexCache"),C=!!(f&&w),T=!!(i&&N);function a(n){if(n[p])return n[p];let d=n.css.split(`
`),g=new Array(d.length),y=0;for(let b=0,L=d.length;b<L;b++)g[b]=y,y+=d[b].length+1;return n[p]=g,g}class s{get from(){return this.file||this.id}constructor(d,g={}){if(d==null||typeof d=="object"&&!d.toString)throw new Error(`PostCSS received ${d} instead of CSS string`);if(this.css=d.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,this.document=this.css,g.document&&(this.document=g.document.toString()),g.from&&(!T||/^\w+:\/\//.test(g.from)||N(g.from)?this.file=g.from:this.file=i(g.from)),T&&C){let y=new o(this.css,g);if(y.text){this.map=y;let b=y.consumer().file;!this.file&&b&&(this.file=this.mapResolve(b))}}this.file||(this.id="<input css "+_(6)+">"),this.map&&(this.map.file=this.from)}error(d,g,y,b={}){let L,S,E,R,U;if(g&&typeof g=="object"){let M=g,W=y;if(typeof M.offset=="number"){R=M.offset;let j=this.fromOffset(R);g=j.line,y=j.col}else g=M.line,y=M.column,R=this.fromLineAndColumn(g,y);if(typeof W.offset=="number"){E=W.offset;let j=this.fromOffset(E);S=j.line,L=j.col}else S=W.line,L=W.column,E=this.fromLineAndColumn(W.line,W.column)}else if(y)R=this.fromLineAndColumn(g,y);else{R=g;let M=this.fromOffset(R);g=M.line,y=M.col}let F=this.origin(g,y,S,L);return U=F?new e(d,F.endLine===void 0?F.line:{column:F.column,line:F.line},F.endLine===void 0?F.column:{column:F.endColumn,line:F.endLine},F.source,F.file,b.plugin):new e(d,S===void 0?g:{column:y,line:g},S===void 0?y:{column:L,line:S},this.css,this.file,b.plugin),U.input={column:y,endColumn:L,endLine:S,endOffset:E,line:g,offset:R,source:this.css},this.file&&(h&&(U.input.url=h(this.file).toString()),U.input.file=this.file),U}fromLineAndColumn(d,g){return a(this)[d-1]+g-1}fromOffset(d){let g=a(this),y=0;if(d>=g[g.length-1])y=g.length-1;else{let b,L=g.length-2;for(;y<L;)if(b=y+(L-y>>1),d<g[b])L=b-1;else{if(!(d>=g[b+1])){y=b;break}y=b+1}}return{col:d-g[y]+1,line:y+1}}mapResolve(d){return/^\w+:\/\//.test(d)?d:i(this.map.consumer().sourceRoot||this.map.root||".",d)}origin(d,g,y,b){if(!this.map)return!1;let L,S,E=this.map.consumer(),R=E.originalPositionFor({column:g,line:d});if(!R.source)return!1;typeof y=="number"&&(L=E.originalPositionFor({column:b,line:y})),S=N(R.source)?h(R.source):new URL(R.source,this.map.consumer().sourceRoot||h(this.map.mapFile));let U={column:R.column,endColumn:L&&L.column,endLine:L&&L.line,line:R.line,url:S.toString()};if(S.protocol==="file:"){if(!k)throw new Error("file: protocol is not available in this PostCSS build");U.file=k(S)}let F=E.sourceContentFor(R.source);return F&&(U.source=F),U}toJSON(){let d={};for(let g of["hasBOM","css","file","id"])this[g]!=null&&(d[g]=this[g]);return this.map&&(d.map={...this.map},d.map.consumerCache&&(d.map.consumerCache=void 0)),d}}J.exports=s,s.default=s,c&&c.registerInput&&c.registerInput(s)},1317:(J,P,v)=>{v.d(P,{BZ:()=>w,Xr:()=>i,ab:()=>f});var _=v(8444),N=v(5893);function i(k="application/json",h="application/json"){var e;const o={},c=_.b.BearerAccessToken,p=(e=_.b.sessionId)===null||e===void 0?void 0:e.toString();return c&&(o.Authorization=`Bearer ${c}`),k&&(o["Content-Type"]=k),h&&(o.Accept=h),o["X-Session-id"]=p,o}function f(k="application/json",h="",e="application/json"){var o;h==""&&(h=_.b.BearerAccessToken);let c={},p=(o=_.b.sessionId)===null||o===void 0?void 0:o.toString();return c=h!=""?{"Content-Type":k,Authorization:"Bearer "+h,Accept:e,"X-Session-id":p}:{"Content-Type":k,Accept:e,"X-Session-id":p},c}function w(){var k;let h=_.b.BearerAccessToken,e=(k=_.b.sessionId)===null||k===void 0?void 0:k.toString();if(h==""){let c=(0,N.s)();c.token!=""&&(_.b.BearerAccessToken=c.token,h=c.token)}let o=new Headers;return o.append("Authorization","Bearer "+h),o.append("X-Session-Id",e),o}},1402:(J,P,v)=>{v.d(P,{J:()=>w});var _,N=v(8429),i=v(8444),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};class w{static incrementConcept(h){try{h&&(this.conceptsData[h]=(this.conceptsData[h]||0)+1)}catch{}}static incrementConnection(h){try{h&&(this.connectionsData[h]=(this.connectionsData[h]||0)+1)}catch{}}static getTopConcepts(h){return Object.entries(this.conceptsData).map(([e,o])=>[parseInt(e),o]).sort((e,o)=>o[1]-e[1]).slice(0,h)}static getTopConnections(h){return Object.entries(this.connectionsData).map(([e,o])=>[parseInt(e),o]).sort((e,o)=>o[1]-e[1]).slice(0,h)}static saveDataToLocalStorage(){const h={concepts:this.conceptsData,connections:this.connectionsData};localStorage?.setItem(this.accessData,JSON.stringify(h))}static loadDataFromLocalStorage(){const h=localStorage==null?void 0:localStorage.getItem(this.accessData);if(h){const e=JSON.parse(h);this.conceptsData=e.concepts||{},this.connectionsData=e.connections||{}}}static sendToServer(){return f(this,void 0,void 0,function*(){try{yield this.syncToServer()}catch{}})}static syncToServer(){return f(this,void 0,void 0,function*(){try{if(!Object.keys(this.conceptsData).length&&!Object.keys(this.connectionsData).length)return;const h=i.b.BearerAccessToken;if(!h)return;const e=this.conceptsData&&Object.keys(this.conceptsData).length>0?this.conceptsData:{},o=this.connectionsData&&Object.keys(this.connectionsData).length>0?this.connectionsData:{},c=yield fetch(N.BaseUrl.PostPrefetchConceptConnections(),{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({concepts:e,connections:o})});if(!c.ok)throw new Error("Failed to sync data to the server.");yield c.json(),this.conceptsData={},this.connectionsData={},this.setNextSyncTime()}catch{}})}static setNextSyncTime(){this.nextSyncTime=Date.now()+this.SYNC_INTERVAL_MS}static startAutoSync(){setInterval(()=>{const h=Date.now();this.nextSyncTime&&h>=this.nextSyncTime&&this.syncNow().catch(console.error)},6e4)}static syncNow(){return f(this,void 0,void 0,function*(){try{this.activateStatus&&(yield this.syncToServer())}catch{}})}static GetSuggestedConcepts(h){return f(this,void 0,void 0,function*(){try{const e=i.b.BearerAccessToken,o=new URL(N.BaseUrl.GetSuggestedConcepts());h!==void 0&&o.searchParams.append("top",h.toString());const c=yield fetch(o.toString(),{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(!c.ok){const C=yield c.text();throw new Error(`Failed to load concepts: ${c.status} ${c.statusText}. Details: ${C}`)}const p=(yield c.json())||[];return yield this.addConceptToBinaryTree(p.data),p}catch(e){throw e instanceof Error?new Error("Unable to fetch suggested concepts. Please try again later."):new Error("An unexpected error occurred while fetching suggested concepts.")}})}static GetSuggestedConnections(h){return f(this,void 0,void 0,function*(){try{const e=i.b.BearerAccessToken,o=new URL(N.BaseUrl.GetSuggestedConnections());h!==void 0&&o.searchParams.append("top",h.toString());const c=yield fetch(o.toString(),{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(!c.ok){const C=yield c.text();throw new Error(`Failed to load connections: ${c.status} ${c.statusText}. Details: ${C}`)}const p=(yield c.json())||[];return yield this.addConnectionToBinaryTree(p.data),p}catch(e){throw e instanceof Error?new Error("Unable to fetch suggested connections. Please try again later."):new Error("An unexpected error occurred while fetching suggested Connections.")}})}static addConceptToBinaryTree(h){return f(this,void 0,void 0,function*(){try{h.forEach(e=>{N.ConceptsData.AddConcept(e)})}catch{}})}static addConnectionToBinaryTree(h){return f(this,void 0,void 0,function*(){try{h.forEach(e=>{N.ConnectionData.AddConnection(e)})}catch{}})}}_=w,w.conceptsData={},w.connectionsData={},w.SYNC_INTERVAL_MS=12e4,w.nextSyncTime=Date.now(),w.activateStatus=!1,w.accessData="Access Data",_.startAutoSync()},1534:(J,P,v)=>{let _=v(7793),N=v(1752);class i extends _{get selectors(){return N.comma(this.selector)}set selectors(w){let k=this.selector?this.selector.match(/,\s*/):null,h=k?k[0]:","+this.raw("between","beforeOpen");this.selector=w.join(h)}constructor(w){super(w),this.type="rule",this.nodes||(this.nodes=[])}}J.exports=i,i.default=i,_.registerRule(i)},1549:(J,P,v)=>{v.d(P,{G:()=>f});var _=v(830),N=v(9196),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};class f{static addNodeToTree(k){if(this.root==null)return this.root=k,this.root;this.root=this.root.addNode(k,this.root,this.root.height)}static addConceptToTree(k){var h=new N.x(k.ghostId,k,null,null);this.addNodeToTree(h)}static waitForDataToLoad(){return i(this,void 0,void 0,function*(){return new Promise((k,h)=>{this.checkFlag(k),setTimeout(()=>{h("not")},25e3)})})}static checkFlag(k){if(_.B.isLocalDataLoaded)return k("done");setTimeout(f.checkFlag,1e3,k)}static getNodeFromTree(k){return i(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(k,this.root):null})}static removeNodeFromTree(k){return i(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,k))})}}f.root=null},1557:(J,P)=>{P.__esModule=!0,P.default=function(v){for(var _=arguments.length,N=new Array(_>1?_-1:0),i=1;i<_;i++)N[i-1]=arguments[i];for(;N.length>0;){var f=N.shift();v[f]||(v[f]={}),v=v[f]}},J.exports=P.default},1581:(J,P)=>{P.__esModule=!0,P.UNIVERSAL=P.TAG=P.STRING=P.SELECTOR=P.ROOT=P.PSEUDO=P.NESTING=P.ID=P.COMMENT=P.COMBINATOR=P.CLASS=P.ATTRIBUTE=void 0,P.TAG="tag",P.STRING="string",P.SELECTOR="selector",P.ROOT="root",P.PSEUDO="pseudo",P.NESTING="nesting",P.ID="id",P.COMMENT="comment",P.COMBINATOR="combinator",P.CLASS="class",P.ATTRIBUTE="attribute",P.UNIVERSAL="universal"},1669:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(3295))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.UNIVERSAL,p.value="*",p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},1704:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.COMBINATOR,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},1752:J=>{let P={comma:v=>P.split(v,[","],!0),space:v=>P.split(v,[" ",`
`,"	"]),split(v,_,N){let i=[],f="",w=!1,k=0,h=!1,e="",o=!1;for(let c of v)o?o=!1:c==="\\"?o=!0:h?c===e&&(h=!1):c==='"'||c==="'"?(h=!0,e=c):c==="("?k+=1:c===")"?k>0&&(k-=1):k===0&&_.includes(c)&&(w=!0),w?(f!==""&&i.push(f.trim()),f="",w=!1):f+=c;return(N||f!=="")&&i.push(f.trim()),i}};J.exports=P,P.default=P},1804:(J,P,v)=>{v.d(P,{f:()=>f});var _=v(830),N=v(8278),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};class f{static waitForDataToLoad(){return i(this,void 0,void 0,function*(){return new Promise((k,h)=>{this.checkFlag(k),setTimeout(()=>{h("not")},25e3)})})}static checkFlag(k){if(_.B.isCharacterLoaded)return k("done");setTimeout(f.checkFlag,1e3,k)}static addNodeToTree(k){return i(this,void 0,void 0,function*(){return this.characterRoot==null?(this.characterRoot=k,this.characterRoot):(this.characterRoot=this.characterRoot.addCharacterNode(k,this.characterRoot,this.characterRoot.height),this.characterRoot)})}static removeNodeByCharacter(k,h){return i(this,void 0,void 0,function*(){this.characterRoot&&this.characterRoot.removeNodeWithVariants(this.characterRoot,k,h)})}static countNumberOfNodes(){return this.characterRoot?this.characterRoot.countNodeBelow(this.characterRoot):0}static addConceptToTree(k){if(k.characterValue!=""){var h=new N.b(k.characterValue,k,null,null);this.addNodeToTree(h)}}static getNodeFromTree(k){return this.characterRoot?this.characterRoot.getCharacterFromNode(k,this.characterRoot):this.characterRoot}static getNodeFromTreeUpdated(k){return this.characterRoot?this.characterRoot.getCharacterFromNode(k,this.characterRoot):this.characterRoot}static getCharacterAndTypeFromTree(k,h){return i(this,void 0,void 0,function*(){return this.characterRoot?this.characterRoot.getFromNodeWithCharacterAndType(k,h,this.characterRoot):this.characterRoot})}static getCharacterAndCategoryFromTree(k,h){return i(this,void 0,void 0,function*(){return this.characterRoot?this.characterRoot.getFromNodeWithCharacterAndCategory(k,h,this.characterRoot):this.characterRoot})}static removeConceptCharacter(k){this.characterRoot&&(this.characterRoot=this.characterRoot.removeNode(this.characterRoot,k))}}f.characterRoot=null},1833:(J,P,v)=>{v.d(P,{I:()=>C});var _=v(6948),N=v(903),i=v(1804),f=v(3796),w=v(6047),k=v(8429);class h{constructor(a,s,n,d){this.height=1,this.key=a,this.value=s,this.leftNode=n,this.rightNode=d}addNode(a,s,n){if(s==null)return s=a;let d=s.leftNode,g=s.rightNode;if(s.key>a.key)s.leftNode=this.addNode(a,d,n);else{if(!(s.key<a.key))return s;s.rightNode=this.addNode(a,g,n)}s.height=1+Math.max(this.getHeight(s.leftNode),this.getHeight(s.rightNode));let y=this.getBalanceFactor(s);if(y>1&&s.leftNode){if(a.key<s.leftNode.key)return this.rightRotate(s);if(a.key>s.leftNode.key)return s.leftNode=this.leftRotate(s.leftNode),this.rightRotate(s)}if(y<-1&&s.rightNode){if(a.key>s.rightNode.key)return this.leftRotate(s);if(a.key<s.rightNode.key)return s.rightNode=this.rightRotate(s.rightNode),this.leftRotate(s)}return s}rightRotate(a){if(a){let s=a.leftNode;if(s){let n=s.rightNode;return a.leftNode=n,s.rightNode=a,a.height=Math.max(this.getHeight(a.leftNode),this.getHeight(a.rightNode))+1,s.height=Math.max(this.getHeight(s.leftNode),this.getHeight(s.rightNode))+1,s}}return a}leftRotate(a){if(a){let s=a.rightNode;if(s){let n=s.leftNode;return s.leftNode=a,a.rightNode=n,a.height=Math.max(this.getHeight(a.leftNode),this.getHeight(a.rightNode))+1,s.height=Math.max(this.getHeight(s.leftNode),this.getHeight(a.rightNode))+1,s}}return a}getHeight(a){return a?a.height:0}getBalanceFactor(a){return a==null?0:this.getHeight(a.leftNode)-this.getHeight(a.rightNode)}getFromNode(a,s){return s&&(a==s.key?s:a<s.key?this.getFromNode(a,s.leftNode):a>s.key?this.getFromNode(a,s.rightNode):s)}removeNode(a,s){if(a==null)return a;if(a.key>s)return a.leftNode=this.removeNode(a.leftNode,s),a;if(a.key<s)return a.rightNode=this.removeNode(a.rightNode,s),a;if(a.leftNode==null){let n=a.rightNode;return a=null,n}if(a.rightNode==null){let n=a.leftNode;return a=null,n}{let n=this.inOrderSuccessor(a.rightNode);return a.value=n.value,a.key=n.key,a.rightNode=this.removeNode(a.rightNode,n.key),a}}countNodeBelow(a){return a==null?0:1+this.countNodeBelow(a.leftNode)+this.countNodeBelow(a.rightNode)}inOrderSuccessor(a){for(;a.leftNode!=null;)a=a.leftNode;return a}}var e=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})};class o{static addNodeToTree(a){if(this.root==null)return this.root=a,this.root;this.root=this.root.addNode(a,this.root,this.root.height)}static addWidgetToTree(a){let s=new h(a.widgetId,a,null,null);this.addNodeToTree(s)}static getNodeFromTree(a){return e(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(a,this.root):null})}static removeNodeFromTree(a){return e(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,a))})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}o.root=null;class c{constructor(){this.widgetId=0,this.mainId=0,this.conceptIds=[],this.linkers=[],this.reverse=[],this.mainCompositionIds=[],this.countinfo=[]}}var p=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})};class C{constructor(){this.name="conceptsArray"}static CheckContains(a){for(var s=!1,n=0;n<this.conceptsArray.length;n++)this.conceptsArray[n].id==a.id&&(s=!0);return s}static AddNpc(a){this.NPC.includes(a)||(this.NPC.length>10&&(this.NPC=[]),this.NPC.push(a))}static GetNpc(a){return!!this.NPC.includes(a)}static AddConceptToStorage(a){a.id>0&&(0,_.kH)("concept",a)}static GetConceptBulkData(a,s,n){return p(this,void 0,void 0,function*(){yield N.W.getConceptListFromIds(a,s,n)})}static AddWidget(a){if(k.serviceWorker)try{(0,k.sendMessage)("ConceptsData__AddWidget",{widgetDetails:a})}catch(s){(0,k.handleServiceWorkerException)(s)}a.widgetId>0&&o.addWidgetToTree(a)}static AddConcept(a){if(k.serviceWorker)try{(0,k.sendMessage)("ConceptsData__AddConcept",{concept:a})}catch(s){(0,k.handleServiceWorkerException)(s)}a.id>0&&(N.W.addConceptToTree(a),f.c.addConceptToTree(a))}static AddConceptToMemory(a){a.id>0&&(N.W.addConceptToTree(a),f.c.addConceptToTree(a))}static AddConceptTemporary(a){var s=this.CheckContains(a);this.conceptDictionary[a.id]=a,s&&this.RemoveConcept(a),this.conceptsArray.push(a)}static RemoveConcept(a){for(var s=0;s<this.conceptsArray.length;s++)this.conceptsArray[s].id==a.id&&this.conceptsArray.splice(s,1);(0,_.wh)("concept",a.id)}static GetWidget(a){return p(this,void 0,void 0,function*(){let s=new c;if(k.serviceWorker)try{return(yield(0,k.sendMessage)("ConceptsData__GetWidget",{id:a})).data}catch(d){(0,k.handleServiceWorkerException)(d)}let n=yield o.getNodeFromTree(a);return n!=null&&(s=n.value),s})}static RemoveWidget(a){return p(this,void 0,void 0,function*(){if(k.serviceWorker)try{return(yield(0,k.sendMessage)("ConceptsData__RemoveWidget",{id:a})).data}catch(s){(0,k.handleServiceWorkerException)(s)}yield o.removeNodeFromTree(a)})}static GetConcept(a){return p(this,void 0,void 0,function*(){if(k.serviceWorker)try{return(yield(0,k.sendMessage)("ConceptsData__GetConcept",{id:a})).data}catch(g){(0,k.handleServiceWorkerException)(g)}if(a==0||a==null||a==null)return(0,w.o)();var s=(0,w.o)(),n=yield N.W.getNodeFromTree(a);if(n?.value){var d=n.value;d&&(s=d)}return s})}static GetConceptByCharacter(a){return p(this,void 0,void 0,function*(){var s=(0,w.o)(),n=i.f.getNodeFromTree(a);return n&&(s=n.value),s})}static GetConceptByCharacterUpdated(a){return p(this,void 0,void 0,function*(){var s=(0,w.o)(),n=i.f.getNodeFromTree(a);return n&&(s=n.value),s})}static GetConceptByCharacterAndTypeLocal(a,s){return p(this,void 0,void 0,function*(){return(0,w.o)(),yield f.c.getTypeVariantsWithCharacterValueNew(a,s)})}static GetConceptByCharacterAndCategoryLocal(a,s){return p(this,void 0,void 0,function*(){var n=(0,w.o)(),d=yield i.f.getCharacterAndCategoryFromTree(a,s);return d&&(n=d.value),n})}static GetConceptsByTypeId(a){let s=[];for(var n=0;n<this.conceptsArray.length;n++)this.conceptsArray[n].typeId==a&&s.push(this.conceptsArray[n]);return s}static GetConceptsByTypeIdAndUser(a,s){var n=arguments;return p(this,void 0,void 0,function*(){if(k.Logger.logfunction("ConceptsData.GetConceptsByTypeIdAndUser",n),k.serviceWorker)try{return(yield(0,k.sendMessage)("ConceptsData__GetConceptsByTypeIdAndUser",{typeId:a,userId:s})).data}catch(g){(0,k.handleServiceWorkerException)(g)}let d=[];return d=yield f.c.getTypeVariantsFromTreeWithUserIdNew(a,s),d})}static GetBinaryCharacterTree(){return i.f.characterRoot}getName(){return this.name}}C.conceptsArray=[],C.NPC=[],C.conceptDictionary=[]},1866:()=>{},1974:(J,P,v)=>{v.d(P,{z:()=>N});var _=v(370);class N{constructor(f,w,k,h){this.url=_.B.BASE_URL,this.message=f,this.ok=w,this.status=k,this.data=h}getMessage(){return this.message}setMessage(f){return this.message=f,this}getStatus(){return this.status}setStatus(f){return this.status=f,this}getData(){return this.data}setData(f){return this.data=f,this}getOk(){return this.ok}setOk(f){return this.ok=f,this}getUrl(){return this.url}setUrl(f){return this.url=f,this}}},2051:(J,P,v)=>{v.d(P,{k:()=>h});var _=v(3890),N=v(3424),i=v(7154),f=v(8429),w=v(5760),k=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,o||[])).next())})};function h(e,o){var c=arguments;return k(this,arguments,void 0,function*(p,C,T=!1,a,s,n=999,d=0,g={concepts:[],connections:[]}){var y,b,L,S;T==0&&(a=999);const E=f.Logger.logfunction("MakeTheInstanceConceptLocal",c)||{};if(f.serviceWorker){E.serviceWorker=!0;try{const R=yield(0,f.sendMessage)("MakeTheInstanceConceptLocal",{type:p,referent:C,composition:T,userId:a,accessId:s,sessionInformationId:n,referentId:d,actions:g});return!((b=(y=R?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(R.actions.concepts))),!((S=(L=R?.actions)===null||L===void 0?void 0:L.connections)===null||S===void 0)&&S.length&&(g.connections=JSON.parse(JSON.stringify(R.actions.connections))),f.Logger.logUpdate(E),R.data}catch(R){(0,w.ey)(E,"MakeTheInstanceConceptLocal",R),(0,f.handleServiceWorkerException)(R)}}try{let R,U,F=999,M=4,W=a,j=4,q="",X=C.length;if(q=p.startsWith("the_")?p:"the_"+p,T)R=yield(0,N.$)(p,F,a,a,g),U=yield(0,_.A)(C,p,a,M,R.id,j,!0,d,g);else if(X>255)R=yield(0,N.$)(q,F,W,a,g),U=yield(0,_.A)(C,q,a,M,R.id,j,void 0,void 0,g);else{R=yield(0,N.$)(q,F,W,a,g);let Z=yield i.v.GetConceptByCharacterAndTypeLocal(C,R.id);U=Z,Z.id==0&&Z.userId==0&&(U=yield(0,_.A)(C,q,a,M,R.id,j,void 0,void 0,g))}return U.type=R,f.LocalSyncData.AddConcept(U),g.concepts.push(U),f.Logger.logUpdate(E),U}catch(R){throw(0,w.ey)(E,"MakeTheInstanceConceptLocal",R),R}})}},2110:(J,P,v)=>{const{AtRule:_,Rule:N}=v(2895);let i=v(7149);function f(s,n){let d;try{i(g=>{d=g}).processSync(s)}catch(g){throw s.includes(":")?n?n.error("Missed semicolon"):g:n?n.error(g.message):g}return d.at(0)}function w(s,n){let d=!1;return s.each(g=>{if(g.type==="nesting"){let y=n.clone({});g.value!=="&"?g.replaceWith(f(g.value.replace("&",y.toString()))):g.replaceWith(y),d=!0}else"nodes"in g&&g.nodes&&w(g,n)&&(d=!0)}),d}function k(s,n){let d=[];for(let g of s.selectors){let y=f(g,s);for(let b of n.selectors){if(!b)continue;let L=f(b,n);w(L,y)||(L.prepend(i.combinator({value:" "})),L.prepend(y.clone({}))),d.push(L.toString())}}return d}function h(s,n){if(s.prev()?.type!=="comment")return n.after(s),s;let d=s.prev();return s.parent.toString().match(/[*]\/ *\n.*{/)?n.after(s).after(d):n.after(s),s}function e(s,n,d,g=!0){return n.length?(d=function(y,b,L){let S=new N({nodes:[],selector:y});return S.append(b),L.after(S),S}(s,n,d),g&&(n=[]),[d,n]):[d,n]}function o(s,n=""){let d=s.concat(n),g={};for(let y of d)g[y.replace(/^@/,"")]=!0;return g}function c(s){let n=s[C];if(n){let d,g,y,b,L=s.nodes,S=-1,E=function(R){let U=[],F=R.parent;for(;F&&F instanceof _;)U.push(F),F=F.parent;return U}(s);if(E.forEach((R,U)=>{if(n(R.name))d=R,S=U,y=b;else{let F=b;b=R.clone({nodes:[]}),F&&b.append(F),g=g||b}}),d?y?(g.append(L),d.after(y)):d.after(L):s.after(L),s.next()&&d){let R;E.slice(0,S+1).forEach((U,F,M)=>{let W=R;R=U.clone({nodes:[]}),W&&R.append(W);let j=[],q=(M[F-1]||s).next();for(;q;)j.push(q),q=q.next();R.append(j)}),R&&(y||L[L.length-1]).after(R)}}else s.after(s.nodes);s.remove()}const p=Symbol("rootRuleMergeSel"),C=Symbol("rootRuleEscapes");function T(s){let{params:n}=s,{escapes:d,selector:g,type:y}=function(b){let L=(b=b.trim()).match(/^\((.*)\)$/);if(!L)return{selector:b,type:"basic"};let S=L[1].match(/^(with(?:out)?):(.+)$/);if(S){let E=S[1]==="with",R=Object.fromEntries(S[2].trim().split(/\s+/).map(F=>[F,!0]));if(E&&R.all)return{type:"noop"};let U=F=>!!R[F];return R.all?U=()=>!0:E&&(U=F=>F!=="all"&&!R[F]),{escapes:U,type:"withrules"}}return{type:"unknown"}}(n);if(y==="unknown")throw s.error(`Unknown @${s.name} parameter ${JSON.stringify(n)}`);if(y==="basic"&&g){let b=new N({nodes:s.nodes,selector:g});s.removeAll(),s.append(b)}s[C]=d,s[p]=d?!d("all"):y==="noop"}const a=Symbol("hasRootRule");J.exports=(s={})=>{let n=o(["media","supports","layer","container","starting-style"],s.bubble),d=function(L){return function S(E,R,U,F=U){let M=[];if(R.each(W=>{W.type==="rule"&&U?F&&(W.selectors=k(E,W)):W.type==="atrule"&&W.nodes?L[W.name]?S(E,W,F):R[p]!==!1&&M.push(W):M.push(W)}),U&&M.length){let W=E.clone({nodes:[]});for(let j of M)W.append(j);R.prepend(W)}}}(n),g=o(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],s.unwrap),y=(s.rootRuleName||"at-root").replace(/^@/,""),b=s.preserveEmpty;return{Once(L){L.walkAtRules(y,S=>{T(S),L[a]=!0})},postcssPlugin:"postcss-nested",RootExit(L){L[a]&&(L.walkAtRules(y,c),L[a]=!1)},Rule(L){let S=!1,E=L,R=!1,U=[];L.each(F=>{switch(F.type){case"atrule":[E,U]=e(L.selector,U,E),F.name===y?(S=!0,d(L,F,!0,F[p]),E=h(F,E)):n[F.name]?(R=!0,S=!0,d(L,F,!0),E=h(F,E)):g[F.name]?(R=!0,S=!0,d(L,F,!1),E=h(F,E)):R&&U.push(F);break;case"decl":R&&U.push(F);break;case"rule":[E,U]=e(L.selector,U,E),R=!0,S=!0,F.selectors=k(L,F),E=h(F,E)}}),e(L.selector,U,E,!1),S&&b!==!0&&(L.raws.semicolon=!0,L.nodes.length===0&&L.remove())}}},J.exports.postcss=!0},2371:(J,P,v)=>{v.d(P,{s:()=>f});var _=v(9368),N=v(8429),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,k||[])).next())})};function f(){return i(this,arguments,void 0,function*(w=[]){const k=N.Logger.logfunction("FindConceptsFromConnections",[w.length]);let h=[];if(w.length>0){for(let e=0;e<w.length;e++)h.includes(w[e].ofTheConceptId)||h.push(w[e].ofTheConceptId),h.includes(w[e].toTheConceptId)||h.push(w[e].toTheConceptId),h.includes(w[e].typeId)||h.push(w[e].typeId);yield(0,_.r)(h)}N.Logger.logUpdate(k)})}},2404:(J,P,v)=>{v.d(P,{A:()=>C});var _=v(370),N=v(1317),i=v(5760),f=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})},w=v(6297),k=v(8429),h=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})};class e{constructor(a,s,n,d,g,y,b,L,S,E){this.id=0,this.userId=a,this.data=s,this.securityId=n,this.securityUserId=d,this.accessId=g,this.accessUserId=y,this.sessionId=b,this.sessionUserId=L,this.entryTimestamp=S,this.isNew=E}}var o=v(6047),c=v(993),p=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,a||[])).next())})};function C(T,a){var s=arguments;return p(this,arguments,void 0,function*(n,d,g=!1,y,b=4,L=999,S=0){y=g?y:999;const E=k.Logger.logfunction("MakeTheInstanceConcept",s)||{};if(k.serviceWorker){E.serviceWorker=!0;try{const ae=yield(0,k.sendMessage)("MakeTheInstanceConcept",{type:n,referent:d,composition:g,userId:y,passedAccessId:b,passedSessionId:L,referentId:S});return k.Logger.logUpdate(E),ae.data}catch(ae){(0,i.ey)(E,"MakeTheInstanceConcept",ae),(0,k.handleServiceWorkerException)(ae)}}let R,U=L,F=y,M=y,W=b,j=y,q="",X=d.length,Z=(0,o.o)();if(q=n.startsWith("the_")?n:"the_"+n,g)Z=yield(0,k.MakeTheTypeConceptApi)(n,y),R=yield(0,c.Ay)(d,y,4,Z.id,S,W,n);else if(X>255)Z=yield(0,k.MakeTheTypeConceptApi)(q,y),R=yield(0,c.Ay)(d,y,4,Z.id,S,W,q),function(ae){f(this,void 0,void 0,function*(){try{var H=(0,N.Xr)();const ie=yield fetch(_.B.CreateTheTextDataUrl(),{method:"POST",headers:H,body:JSON.stringify(ae)});if(!ie.ok)throw(0,i.ry)(ie),new Error(`Error! status: ${ie.status}`);return yield ie.json()}catch(ie){throw ie}})}(new e(y,d,999,F,W,j,U,M,Date.now().toString(),!0));else{Z=yield(0,k.MakeTheTypeConceptApi)(q,y);let ae=yield(0,w.A)(d,Z.id);R=ae,ae.id==0&&ae.userId==0&&(R=yield(0,c.N)(d,y,4,Z.id,12,W,q),function(H,ie,he,ne){var Q=arguments;h(this,void 0,void 0,function*(){const oe=k.Logger.logfunction("MakeTheNameInBackend",Q);try{let ee={newConceptId:H,referent:ie,typeId:he,typeUserId:ne},$=(0,N.Xr)(),re=JSON.stringify(ee);const fe=yield fetch(_.B.MakeTheNameInBackendUrl(),{method:"POST",headers:$,body:re});k.Logger.logUpdate(oe),fe.ok||(0,i.ry)(fe)}catch(ee){(0,i.Mb)(ee,_.B.MakeTheNameInBackendUrl()),(0,i.ey)(oe,"MakeTheNameInBackend",ee)}})}(R.id,`${d}`,Z.id,y))}return R.type=Z,k.Logger.logUpdate(E),R})}},2617:(J,P,v)=>{v.d(P,{i:()=>_});class _{constructor(i,f,w,k){this.key="",this.value=[],this.height=1,this.key=i,this.value=f,this.leftNode=w,this.rightNode=k}getFromNode(i,f){return f&&(i==f.key?f:i<f.key?this.getFromNode(i,f.leftNode):i>f.key?this.getFromNode(i,f.rightNode):f)}rightRotate(i){if(i){let f=i.leftNode;if(f){let w=f.rightNode;return i.leftNode=w,f.rightNode=i,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode))+1,f}}return i}leftRotate(i){if(i){let f=i.rightNode;if(f){let w=f.leftNode;return f.leftNode=i,i.rightNode=w,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(i.rightNode))+1,f}}return i}getHeight(i){return i?i.height:0}getBalanceFactor(i){return i==null?0:this.getHeight(i.leftNode)-this.getHeight(i.rightNode)}removeNode(i,f){if(i==null)return i;if(i.key>f)return i.leftNode=this.removeNode(i.leftNode,f),i;if(i.key<f)return i.rightNode=this.removeNode(i.rightNode,f),i;if(i.leftNode==null){let w=i.rightNode;return i=null,w}if(i.rightNode==null){let w=i.leftNode;return i=null,w}{let w=this.inOrderSuccessor(i.rightNode);return i.value=w.value,i.key=w.key,i.variants=w.variants,i.currentNode=w.currentNode,i.rightNode=this.removeNode(i.rightNode,w.key),i}}inOrderSuccessor(i){for(;i.leftNode!=null;)i=i.leftNode;return i}}},2625:(J,P,v)=>{v.d(P,{F4:()=>f,P6:()=>k,dp:()=>w});var _=v(4990),N=v(6047),i=v(9911);function f(h){var e,o;const c=(0,i.u)();return c.id=h.id,c.ghostId=h.ghostId,c.userId=h.userId,c.accessId=h.accessId,c.categoryId=h.categoryId,c.characterValue=h.characterValue,c.entryTimeStamp=h.entryTimeStamp,c.typeId=h.typeId,c.type=h.type,c.isTemp=!1,c.typeCharacter=(o=(e=h?.type)===null||e===void 0?void 0:e.characterValue)!==null&&o!==void 0?o:"",c}function w(h){const e=(0,N.o)();return e.id=h.id,e.ghostId=h.ghostId,e.userId=h.userId,e.accessId=h.accessId,e.entryTimeStamp=h.entryTimeStamp,e.typeId=h.typeId,e.categoryId=h.categoryId,e}function k(h){const e=new _.N(0,0,0,0,0,0,0);return e.id=h.id,e.ghostId=h.ghostId,e.accessId=h.accessId,e.ofTheConceptId=h.ofTheConceptId,e.toTheConceptId=h.toTheConceptId,e.entryTimeStamp=h.entryTimeStamp,e.typeId=h.typeId,e.isTemp=!1,e}},2635:(J,P,v)=>{v.d(P,{V:()=>k,w:()=>w});var _=v(9536),N=v(8429),i=v(939),f=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,[])).next())})};function w(e=[]){let o=[];if(e.length>0)for(let c=0;c<e.length;c++){let p=h(e[c]);o.push(p)}return o}function k(e){var o=arguments;return f(this,void 0,void 0,function*(){const c=N.Logger.logfunction("GetConnectionTypeForCount",o);let p={};for(let C=0;C<e.length;C++){let T=yield(0,_.r)(e[C].connectionTypeId);e[C].connectionType=T.characterValue,p[e[C].conceptId]=e[C]}return N.Logger.logUpdate(c),p})}function h(e){const o=e.split("_");if(o.length===3){let c=new i.y;return c.conceptId=Number(o[0]),c.connectionTypeId=Number(o[1]),c.count=Number(o[2]),c}throw new Error("Input string must contain exactly three parts separated by underscores.")}},2648:(J,P,v)=>{P.__esModule=!0,P.FIELDS=void 0,P.default=function(C){var T,a,s,n,d,g,y,b,L,S,E,R,U=[],F=C.css.valueOf(),M=F.length,W=-1,j=1,q=0,X=0;function Z(ae,H){if(!C.safe)throw C.error("Unclosed "+ae,j,q-W,q);b=(F+=H).length-1}for(;q<M;){switch((T=F.charCodeAt(q))===i.newline&&(W=q,j+=1),T){case i.space:case i.tab:case i.newline:case i.cr:case i.feed:b=q;do b+=1,(T=F.charCodeAt(b))===i.newline&&(W=b,j+=1);while(T===i.space||T===i.newline||T===i.tab||T===i.cr||T===i.feed);R=i.space,s=j,a=b-W-1,X=b;break;case i.plus:case i.greaterThan:case i.tilde:case i.pipe:b=q;do b+=1,T=F.charCodeAt(b);while(T===i.plus||T===i.greaterThan||T===i.tilde||T===i.pipe);R=i.combinator,s=j,a=q-W,X=b;break;case i.asterisk:case i.ampersand:case i.bang:case i.comma:case i.equals:case i.dollar:case i.caret:case i.openSquare:case i.closeSquare:case i.colon:case i.semicolon:case i.openParenthesis:case i.closeParenthesis:R=T,s=j,a=q-W,X=(b=q)+1;break;case i.singleQuote:case i.doubleQuote:E=T===i.singleQuote?"'":'"',b=q;do for(n=!1,(b=F.indexOf(E,b+1))===-1&&Z("quote",E),d=b;F.charCodeAt(d-1)===i.backslash;)d-=1,n=!n;while(n);R=i.str,s=j,a=q-W,X=b+1;break;default:T===i.slash&&F.charCodeAt(q+1)===i.asterisk?((b=F.indexOf("*/",q+2)+1)===0&&Z("comment","*/"),(g=(y=F.slice(q,b+1).split(`
`)).length-1)>0?(L=j+g,S=b-y[g].length):(L=j,S=W),R=i.comment,j=L,s=L,a=b-S):T===i.slash?(R=T,s=j,a=q-W,X=(b=q)+1):(b=c(F,q),R=i.word,s=j,a=b-W),X=b+1}U.push([R,j,q-W,s,a,q,X]),S&&(W=S,S=null),q=X}return U};var _,N,i=function(C,T){if(C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var a=f(T);if(a&&a.has(C))return a.get(C);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in C)if(d!=="default"&&Object.prototype.hasOwnProperty.call(C,d)){var g=n?Object.getOwnPropertyDescriptor(C,d):null;g&&(g.get||g.set)?Object.defineProperty(s,d,g):s[d]=C[d]}return s.default=C,a&&a.set(C,s),s}(v(71));function f(C){if(typeof WeakMap!="function")return null;var T=new WeakMap,a=new WeakMap;return(f=function(s){return s?a:T})(C)}for(var w=((_={})[i.tab]=!0,_[i.newline]=!0,_[i.cr]=!0,_[i.feed]=!0,_),k=((N={})[i.space]=!0,N[i.tab]=!0,N[i.newline]=!0,N[i.cr]=!0,N[i.feed]=!0,N[i.ampersand]=!0,N[i.asterisk]=!0,N[i.bang]=!0,N[i.comma]=!0,N[i.colon]=!0,N[i.semicolon]=!0,N[i.openParenthesis]=!0,N[i.closeParenthesis]=!0,N[i.openSquare]=!0,N[i.closeSquare]=!0,N[i.singleQuote]=!0,N[i.doubleQuote]=!0,N[i.plus]=!0,N[i.pipe]=!0,N[i.tilde]=!0,N[i.greaterThan]=!0,N[i.equals]=!0,N[i.dollar]=!0,N[i.caret]=!0,N[i.slash]=!0,N),h={},e="0123456789abcdefABCDEF",o=0;o<22;o++)h[e.charCodeAt(o)]=!0;function c(C,T){var a,s=T;do{if(a=C.charCodeAt(s),k[a])return s-1;a===i.backslash?s=p(C,s)+1:s++}while(s<C.length);return s-1}function p(C,T){var a=T,s=C.charCodeAt(a+1);if(!w[s])if(h[s]){var n=0;do a++,n++,s=C.charCodeAt(a+1);while(h[s]&&n<6);n<6&&s===i.space&&a++}else a++;return a}P.FIELDS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6}},2739:()=>{},2801:(J,P,v)=>{function _(N,i){return N.indexOf(i)===-1&&N.push(i),N}v.d(P,{A:()=>_})},2814:(J,P,v)=>{v.d(P,{A:()=>k,w:()=>h});var _=v(6397),N=v(8429),i=v(1833),f=v(5760),w=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,[])).next())})};function k(e){var o=arguments;return w(this,void 0,void 0,function*(){const c=N.Logger.logfunction("GetConceptByCharacter",o)||{};if(N.serviceWorker){c.serviceWorker=!0;try{const T=yield(0,N.sendMessage)("GetConceptByCharacter",{characterValue:e});return N.Logger.logUpdate(c),T.data}catch(T){(0,f.ey)(c,"GetConceptByCharacter",T),(0,N.handleServiceWorkerException)(T)}}let p=yield i.I.GetConceptByCharacter(e),C=`${e}`;return p!=null&&p?.id!=0||!C||(yield(0,_.Y)(e),p=yield i.I.GetConceptByCharacterAndTypeLocal(e,51),p.id==0&&(p=yield i.I.GetConceptByCharacter(e))),N.Logger.logUpdate(c),p})}function h(e){var o=arguments;return w(this,void 0,void 0,function*(){const c=N.Logger.logfunction("GetConceptByCharacterUpdated",o)||{};if(N.serviceWorker){c.serviceWorker=!0;try{const T=yield(0,N.sendMessage)("GetConceptByCharacterUpdated",{characterValue:e});return N.Logger.logUpdate(c),T.data}catch(T){(0,f.ey)(c,"GetConceptByCharacterUpdated",T),(0,N.handleServiceWorkerException)(T)}}let p=yield i.I.GetConceptByCharacter(e),C=`${e}`;return p!=null&&p?.id!=0||!C||(yield(0,_.Y)(e),p=yield i.I.GetConceptByCharacter(e)),N.Logger.logUpdate(c),p})}},2895:(J,P,v)=>{let _=v(396),N=v(9371),i=v(7793),f=v(3614),w=v(5238),k=v(145),h=v(3438),e=v(1106),o=v(6966),c=v(1752),p=v(3152),C=v(9577),T=v(6846),a=v(3717),s=v(5644),n=v(1534),d=v(3303),g=v(38);function y(...b){return b.length===1&&Array.isArray(b[0])&&(b=b[0]),new T(b)}y.plugin=function(b,L){let S,E=!1;function R(...U){console&&console.warn&&!E&&(E=!0,ts.LANG&&ts.LANG.startsWith("cn"));let F=L(...U);return F.postcssPlugin=b,F.postcssVersion=new T().version,F}return Object.defineProperty(R,"postcss",{get:()=>(S||(S=R()),S)}),R.process=function(U,F,M){return y([R(M)]).process(U,F)},R},y.stringify=d,y.parse=C,y.fromJSON=h,y.list=c,y.comment=b=>new N(b),y.atRule=b=>new _(b),y.decl=b=>new w(b),y.rule=b=>new n(b),y.root=b=>new s(b),y.document=b=>new k(b),y.CssSyntaxError=f,y.Declaration=w,y.Container=i,y.Processor=T,y.Document=k,y.Comment=N,y.Warning=g,y.AtRule=_,y.Result=a,y.Input=e,y.Rule=n,y.Root=s,y.Node=p,o.registerPostcss(y),J.exports=y,y.default=y},2918:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.NESTING,p.value="&",p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},3008:(J,P,v)=>{v.d(P,{j:()=>N});var _=v(8429);class N{constructor(f,w,k,h,e,o,c,p=!1,C,T,a){this.count=0,this.typeCharacter="",this.referent=null,this.isComposition=!1,this.isTemp=!1,this.isSynced=!1,this.applicationId=_.BaseUrl.getRandomizer(),this.x=0,this.y=0,this.id=f,this.userId=w,this.typeId=k,this.ghostId=f,this.categoryId=h,this.referentId=e,this.characterValue=`${o}`,this.accessId=c,this.typeCharacter=a,this.type=null,this.isNew=p,this.entryTimeStamp=C,this.updatedTimeStamp=T}getType(){}}},3076:(J,P,v)=>{v.d(P,{zl:()=>s,b6:()=>g,e$:()=>b,y6:()=>y,rq:()=>L,yV:()=>n,_W:()=>d});var _=v(8429),N=v(3246);function i(S){return S.startsWith("the_")?S.slice(4):S}var f=function(S,E,R,U){return new(R||(R=Promise))(function(F,M){function W(X){try{q(U.next(X))}catch(Z){M(Z)}}function j(X){try{q(U.throw(X))}catch(Z){M(Z)}}function q(X){var Z;X.done?F(X.value):(Z=X.value,Z instanceof R?Z:new R(function(ae){ae(Z)})).then(W,j)}q((U=U.apply(S,E||[])).next())})};function w(S,E,R){return f(this,void 0,void 0,function*(){var U,F,M,W,j,q,X,Z;let ae=[];for(let H=0;H<S.length;H++)ae.push(S[H].toTheConceptId),ae.push(S[H].ofTheConceptId),ae.push(S[H].typeId);for(let H=0;H<S.length;H++){let ie=!1;R.includes(S[H].id)&&(ie=!0);let he=yield(0,_.GetTheConcept)(S[H].ofTheConceptId),ne=yield(0,_.GetTheConcept)(S[H].toTheConceptId);if(ie==1&&he.id!=0&&ne.id!=0){let Q,oe=(F=(U=ne.type)===null||U===void 0?void 0:U.characterValue)!==null&&F!==void 0?F:"self";S[H].toTheConceptId in E?Q=E[S[H].toTheConceptId]:(Q={},Q[oe]={},E[S[H].toTheConceptId]=Q);let ee=yield(0,_.GetTheConcept)(S[H].typeId);try{let $=(W=(M=he?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:"none",re=he.characterValue;ee.characterValue,ee.characterValue.includes("_s_")&&(he.id in E||(E[he.id]={}),E[he.id][$]=re),E[ne.id]={}}catch{}}if(he.id!=0&&ne.id!=0){let Q,oe=(q=(j=he.type)===null||j===void 0?void 0:j.characterValue)!==null&&q!==void 0?q:"self";S[H].ofTheConceptId in E?Q=E[S[H].ofTheConceptId]:(Q={},Q[oe]={},E[S[H].ofTheConceptId]=Q);let ee=yield(0,_.GetTheConcept)(S[H].typeId);try{let $=(Z=(X=ne?.type)===null||X===void 0?void 0:X.characterValue)!==null&&Z!==void 0?Z:"none",re=ne.characterValue;ee.characterValue.includes("_s_")&&(ne.id in E||(E[ne.id]={}),E[ne.id][$]=re),E[he.id]={}}catch{}}}return E})}var k=v(127),h=v(5747),e=function(S,E,R,U){return new(R||(R=Promise))(function(F,M){function W(X){try{q(U.next(X))}catch(Z){M(Z)}}function j(X){try{q(U.throw(X))}catch(Z){M(Z)}}function q(X){var Z;X.done?F(X.value):(Z=X.value,Z instanceof R?Z:new R(function(ae){ae(Z)})).then(W,j)}q((U=U.apply(S,E||[])).next())})};function o(S,E,R){if(S in E){let U=E[S];U&&(R[U.connectionType+"_count"]=U.count)}}var c=function(S,E,R,U){return new(R||(R=Promise))(function(F,M){function W(X){try{q(U.next(X))}catch(Z){M(Z)}}function j(X){try{q(U.throw(X))}catch(Z){M(Z)}}function q(X){var Z;X.done?F(X.value):(Z=X.value,Z instanceof R?Z:new R(function(ae){ae(Z)})).then(W,j)}q((U=U.apply(S,E||[])).next())})},p=v(2635),C=v(7762),T=function(S,E,R,U){return new(R||(R=Promise))(function(F,M){function W(X){try{q(U.next(X))}catch(Z){M(Z)}}function j(X){try{q(U.throw(X))}catch(Z){M(Z)}}function q(X){var Z;X.done?F(X.value):(Z=X.value,Z instanceof R?Z:new R(function(ae){ae(Z)})).then(W,j)}q((U=U.apply(S,E||[])).next())})},a=function(S,E,R,U){return new(R||(R=Promise))(function(F,M){function W(X){try{q(U.next(X))}catch(Z){M(Z)}}function j(X){try{q(U.throw(X))}catch(Z){M(Z)}}function q(X){var Z;X.done?F(X.value):(Z=X.value,Z instanceof R?Z:new R(function(ae){ae(Z)})).then(W,j)}q((U=U.apply(S,E||[])).next())})};function s(S,E){return a(this,arguments,void 0,function*(R,U,F=""){let M=yield(0,_.SearchWithTypeAndLinkerApi)(R,U,F),W=M.compositionIds,j=M.internalConnections,q=M.linkers,X=M.reverse,Z=M.mainCompositionIds,ae=yield(0,N.QL)(q),H=yield(0,N.MT)(W,j);return yield(0,k.NK)(ae,H,Z,X)})}function n(S,E,R,U,F){return a(this,void 0,void 0,function*(){let M=yield(0,N.QL)(S),W=yield(0,N.rv)(E,R);return yield(0,k.Ve)(M,W,E,U,F)})}function d(S,E,R,U,F){return a(this,void 0,void 0,function*(){let M=yield(0,N.QL)(S),W=yield(0,N.D)(E,R);return yield(0,k.NK)(M,W,U,F)})}function g(S,E,R,U,F){return a(this,void 0,void 0,function*(){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnections",{linkers:S,conceptIds:E,mainCompositionIds:R,reverse:U,countInfos:F})).data}catch(q){(0,_.handleServiceWorkerException)(q)}let M=yield(0,N.QL)(S);M=(0,C.X)(M);let W=[];return W=yield w(M,W,U),W=yield function(q,X,Z){return f(this,void 0,void 0,function*(){var ae,H,ie,he,ne,Q,oe,ee;let $=[];for(let re=0;re<q.length;re++)$.push(q[re].toTheConceptId),$.push(q[re].ofTheConceptId),$.push(q[re].typeId);q.sort(function(re,fe){return fe.id-re.id});for(let re=0;re<q.length;re++){let fe=!1;Z.includes(q[re].id)&&(fe=!0);let ce=yield(0,_.GetTheConcept)(q[re].ofTheConceptId),de=yield(0,_.GetTheConcept)(q[re].toTheConceptId);if(fe==1&&ce.id!=0&&de.id!=0){let we,me=(H=(ae=de.type)===null||ae===void 0?void 0:ae.characterValue)!==null&&H!==void 0?H:"self";q[re].toTheConceptId in X?(we=X[q[re].toTheConceptId],me in we||(we[me]={})):(we={},we[me]={},X[q[re].toTheConceptId]=we);let ye=yield(0,_.GetTheConcept)(q[re].typeId);try{let Ae=(he=(ie=ce?.type)===null||ie===void 0?void 0:ie.characterValue)!==null&&he!==void 0?he:"none",Le=ce.characterValue,ve=ye.characterValue;ve==""&&(ve=Ae,ve=i(ve));let De={[Ae]:Le},Te=ve+"_reverse";ye.characterValue.includes("_s_")||(typeof we[me]=="string"&&(we[me]={}),we[me][Te]=De)}catch{}}if(ce.id!=0&&de.id!=0){let we,me=(Q=(ne=ce.type)===null||ne===void 0?void 0:ne.characterValue)!==null&&Q!==void 0?Q:"self";q[re].ofTheConceptId in X?(we=X[q[re].ofTheConceptId],me in we||(we[me]={})):(we={},we[me]={},X[q[re].ofTheConceptId]=we);let ye=yield(0,_.GetTheConcept)(q[re].typeId);try{let Ae=(ee=(oe=de?.type)===null||oe===void 0?void 0:oe.characterValue)!==null&&ee!==void 0?ee:"none",Le=de.characterValue,ve=ye.characterValue,De=(ye.characterValue,!1);ve==""&&(ve=Ae,ve=i(ve),De=!0);let Te={[Ae]:Le};isNaN(Number(ve))?ye.characterValue.includes("_s_")||(typeof we[me]=="string"&&(we[me]={}),we[me][ve]=De?Le:Te):(Array.isArray(we[me])||(we[me]=[]),we[me].push(Le))}catch{}}}return X})}(M,W,U),yield function(q,X,Z,ae){return f(this,arguments,void 0,function*(H,ie,he,ne,Q=[]){var oe,ee,$,re,fe,ce;let de=[],we=[];for(let me=0;me<H.length;me++)we.push(H[me].toTheConceptId),we.push(H[me].ofTheConceptId),we.push(H[me].typeId);H.sort(function(me,ye){return ye.id-me.id});for(let me=0;me<H.length;me++){let ye=!1;Q.includes(H[me].id)&&(ye=!0);let Ae=yield(0,_.GetTheConcept)(H[me].ofTheConceptId),Le=yield(0,_.GetTheConcept)(H[me].toTheConceptId);if(ye==1&&Ae.id!=0&&Le.id!=0&&Le.id in ie){let ve,De=(ee=(oe=Le.type)===null||oe===void 0?void 0:oe.characterValue)!==null&&ee!==void 0?ee:"self";H[me].toTheConceptId in ie?ve=ie[H[me].toTheConceptId]:(ve={},ve[De]={},ie[H[me].toTheConceptId]=ve);let Te=yield(0,_.GetTheConcept)(H[me].typeId);try{let pe=Te.characterValue+"_reverse",ke=ie[H[me].ofTheConceptId];ke&&(Array.isArray(ve[De][pe])?ve[De][pe].push(ke):Te.characterValue.includes("_s_")?(ve[De][pe]=[],ve[De][pe].push(ke)):ve[De][pe]=ke)}catch{}}if(Ae.id!=0&&Le.id!=0&&Ae.id in ie){let ve,De=(re=($=Ae.type)===null||$===void 0?void 0:$.characterValue)!==null&&re!==void 0?re:"self";H[me].ofTheConceptId in ie?(ve=ie[H[me].ofTheConceptId],typeof ve[De]=="string"&&(ve[De]={})):(ve={},ve[De]={},ie[H[me].ofTheConceptId]=ve);let Te=!1,pe=(yield(0,_.GetTheConcept)(H[me].typeId)).characterValue;pe==""&&(pe=Le.characterValue,Te=!0),pe==""&&(pe=(ce=(fe=Le?.type)===null||fe===void 0?void 0:fe.characterValue)!==null&&ce!==void 0?ce:"");try{let ke=ie[H[me].toTheConceptId];ke&&(Array.isArray(ve[De])?Te?ve[De].push(ke[pe]):ve[De].push(ke):Array.isArray(ve[De][pe])?ve[De][pe].push(ke):pe.includes("_s_")?(ve[De][pe]=[],Te?ve[De][pe].push(ke[pe]):ve[De][pe].push(ke)):ve[De][pe]=Te?ke[pe]:ke)}catch{}}}for(let me=0;me<he.length;me++){let ye=ie[he[me]];ye?(ye.id=he[me],de.push(ye)):(yield _.ConceptsData.GetConcept(he[me])).id!=0&&(ye={},ye.id=he[me],de.push(ye))}return de})}(M,W,R,[],U)})}function y(S,E,R,U,F){return a(this,arguments,void 0,function*(M,W,j,q,X,Z="DESC"){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsJustId",{linkers:M,conceptIds:W,mainCompositionIds:j,reverse:q,countInfos:X,order:Z})).data}catch(ne){(0,_.handleServiceWorkerException)(ne)}let ae=yield(0,N.QL)(M),H=yield(0,p.V)(X);ae=(0,C.X)(ae,Z);let ie=[];return ie=yield w(ae,ie,q),ie=yield function(ne,Q){return e(this,arguments,void 0,function*(oe,ee,$=[]){var re,fe,ce,de,we,me,ye,Ae;let Le=[];for(let ve=0;ve<oe.length;ve++)Le.push(oe[ve].toTheConceptId),Le.push(oe[ve].ofTheConceptId),Le.push(oe[ve].typeId);for(let ve=0;ve<oe.length;ve++){let De=!1,Te=yield(0,h.A)(oe[ve].ofTheConceptId),pe=yield(0,h.A)(oe[ve].toTheConceptId);if($.includes(oe[ve].id)&&(De=!0),De==1&&Te.id!=0&&pe.id!=0){let ke,Ee=yield(0,h.A)(oe[ve].typeId),Ne=(fe=(re=pe.type)===null||re===void 0?void 0:re.characterValue)!==null&&fe!==void 0?fe:"self";oe[ve].toTheConceptId in ee?(ke=ee[oe[ve].toTheConceptId],Ne in ke||(ke[Ne]={})):(ke={},ke[Ne]={},ee[oe[ve].toTheConceptId]=ke);try{let be=(de=(ce=Te?.type)===null||ce===void 0?void 0:ce.characterValue)!==null&&de!==void 0?de:"none",Be=Te.characterValue,Re=Ee.characterValue;Re==""&&(Re=be,Re=i(Re));let Fe={id:Te.id,[be]:Be,created_on:oe[ve].entryTimeStamp},xe=Re+"_reverse";xe.includes("_s_")||(typeof ke[Ne]=="string"&&(ke[Ne]={}),ke[Ne][xe]=Fe)}catch{}}if(Te.id!=0&&pe.id!=0){let ke,Ee=yield(0,h.A)(oe[ve].typeId),Ne=(me=(we=Te.type)===null||we===void 0?void 0:we.characterValue)!==null&&me!==void 0?me:"self";oe[ve].ofTheConceptId in ee?(ke=ee[oe[ve].ofTheConceptId],Ne in ke||(ke[Ne]={})):(ke={},ke[Ne]={},ee[oe[ve].ofTheConceptId]=ke);try{let be=(Ae=(ye=pe?.type)===null||ye===void 0?void 0:ye.characterValue)!==null&&Ae!==void 0?Ae:"none",Be=pe.characterValue,Re=Ee.characterValue,Fe=!1;Re==""&&(Re=be,Re=i(Re),Fe=!0);let xe={};xe[be]={id:pe.id,data:Be,created_on:oe[ve].entryTimeStamp},isNaN(Number(Re))?Re.includes("_s_")||(typeof ke[Ne]=="string"&&(ke[Ne]={}),ke[Ne][Re]=Fe?xe[be]:xe):(Array.isArray(ke[Ne])||(ke[Ne]=[]),ke[Ne].push(xe[be]))}catch{}}}return ee})}(ae,ie,q),yield function(ne,Q,oe){return e(this,arguments,void 0,function*(ee,$,re,fe=[],ce){var de,we,me,ye,Ae,Le,ve;new Date().getTime();let De=[],Te=[];for(let pe=0;pe<ee.length;pe++)Te.push(ee[pe].toTheConceptId),Te.push(ee[pe].ofTheConceptId),Te.push(ee[pe].typeId);for(let pe=0;pe<ee.length;pe++){let ke=!1,Ee=yield(0,h.A)(ee[pe].ofTheConceptId),Ne=yield(0,h.A)(ee[pe].toTheConceptId);if(fe.includes(ee[pe].id)&&(ke=!0),ke==1&&Ee.id!=0&&Ne.id!=0&&Ne.id in $){let be,Be=yield(0,h.A)(ee[pe].typeId),Re=(we=(de=Ne.type)===null||de===void 0?void 0:de.characterValue)!==null&&we!==void 0?we:"self";ee[pe].toTheConceptId in $,ee[pe].toTheConceptId in $?(be=$[ee[pe].toTheConceptId],typeof be[Re]=="string"&&(be[Re]={})):(be={},be[Re]={},$[ee[pe].toTheConceptId]=be);try{if($[ee[pe].ofTheConceptId]){let Fe=$[ee[pe].ofTheConceptId];Fe&&(Fe.id=Ee.id,Fe.created_on=Ee.entryTimeStamp);let xe=Be.characterValue+"_reverse";Array.isArray(be[Re][xe])?be[Re][xe].push(Fe):xe.includes("_s_")?(be[Re][xe]=[],be[Re][xe].push(Fe)):be[Re][xe]=Fe}}catch{}}if(Ee.id!=0&&Ne.id!=0&&Ee.id in $){let be,Be=yield(0,h.A)(ee[pe].typeId),Re=(ye=(me=Ee.type)===null||me===void 0?void 0:me.characterValue)!==null&&ye!==void 0?ye:"self";ee[pe].toTheConceptId in $,ee[pe].ofTheConceptId in $?(be=$[ee[pe].ofTheConceptId],typeof be[Re]=="string"&&(be[Re]={})):(be={},be[Re]={},$[ee[pe].ofTheConceptId]=be),o(Ee.id,ce,be);let Fe=!1,xe=Be.characterValue;xe==""&&(xe=Ne.characterValue,Fe=!0),xe==""&&(xe=((Ae=Ne?.type)===null||Ae===void 0?void 0:Ae.characterValue)||"");try{let $e=(ve=(Le=Ne?.type)===null||Le===void 0?void 0:Le.characterValue)!==null&&ve!==void 0?ve:"none",He=$[ee[pe].toTheConceptId];if(He){let ht={};ht[$e]={data:He[$e],id:Ne.id,created_on:ee[pe].entryTimeStamp},Array.isArray(be[Re])?Fe?be[Re].push(He[xe]):be[Re].push(He):Array.isArray(be[Re][xe])?be[Re][xe].push(ht):xe.includes("_s_")?(be[Re][xe]=[],Fe?be[Re][xe].push(ht[$e]):be[Re][xe].push(ht)):be[Re][xe]=Fe?ht[$e]:ht,o(Ne.id,ce,ht)}}catch{}}}for(let pe=0;pe<re.length;pe++){let ke={};ke=$[re[pe]],ke?ke.id=re[pe]:(yield _.ConceptsData.GetConcept(re[pe])).id!=0&&(ke={},ke.id=re[pe]),De.push(ke)}return De})}(ae,ie,j,q,H)})}function b(S,E,R,U,F){return a(this,arguments,void 0,function*(M,W,j,q,X,Z="DESC"){try{if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsDataId",{linkers:M,conceptIds:W,mainCompositionIds:j,reverse:q,countInfos:X,order:Z})).data}catch(Q){(0,_.handleServiceWorkerException)(Q)}let ae,H;try{ae=yield(0,N.QL)(M)}catch(Q){throw new Error(`Failed to prefetch connections: ${Q instanceof Error?Q.message:String(Q)}`)}try{H=yield(0,p.V)(X)}catch(Q){throw new Error(`Failed to get connection type for count: ${Q instanceof Error?Q.message:String(Q)}`)}try{ae=(0,C.X)(ae,Z)}catch(Q){throw new Error(`Failed to order connections: ${Q instanceof Error?Q.message:String(Q)}`)}let ie,he=[],ne=[];try{he=yield function(Q,oe){var ee=arguments;return c(this,arguments,void 0,function*($,re,fe=[]){var ce,de,we,me,ye,Ae,Le,ve;try{const De=_.Logger.logfunction("FormatFunctionData",ee);let Te=[];for(let pe=0;pe<$.length;pe++)Te.push($[pe].toTheConceptId),Te.push($[pe].ofTheConceptId),Te.push($[pe].typeId);for(let pe=0;pe<$.length;pe++)try{let ke=!1,Ee=yield(0,_.GetTheConcept)($[pe].ofTheConceptId),Ne=yield(0,_.GetTheConcept)($[pe].toTheConceptId);if(fe.includes($[pe].id)&&(ke=!0),ke==1&&Ee.id!=0&&Ne.id!=0){let be,Be=yield(0,_.GetTheConcept)($[pe].typeId),Re=(de=(ce=Ne.type)===null||ce===void 0?void 0:ce.characterValue)!==null&&de!==void 0?de:"self";$[pe].toTheConceptId in re?be=re[$[pe].toTheConceptId]:(be={},be[Re]={},re[$[pe].toTheConceptId]=be);try{let Fe=(me=(we=Ee?.type)===null||we===void 0?void 0:we.characterValue)!==null&&me!==void 0?me:"none",xe=Ee.characterValue;(Be.characterValue+"_reverse").includes("_s_")&&(Ee.id in re||(re[Ee.id]={}),re[Ee.id][Fe]=xe),re[Ne.id]={}}catch{}}if(Ee.id!=0&&Ne.id!=0){let be,Be=yield(0,_.GetTheConcept)($[pe].typeId),Re=(Ae=(ye=Ee.type)===null||ye===void 0?void 0:ye.characterValue)!==null&&Ae!==void 0?Ae:"self";$[pe].ofTheConceptId in re?be=re[$[pe].ofTheConceptId]:(be={},be[Re]={},re[$[pe].ofTheConceptId]=be);try{let Fe=(ve=(Le=Ne?.type)===null||Le===void 0?void 0:Le.characterValue)!==null&&ve!==void 0?ve:"none",xe=Ne.characterValue;Be.characterValue.includes("_s_")&&(Ne.id in re||(re[Ne.id]={}),re[Ne.id][Fe]=xe),re[Ee.id]={}}catch{}}}catch{}return _.Logger.logUpdate(De),re}catch(De){throw De}})}(ae,he,q)}catch(Q){throw new Error(`Failed to format function data: ${Q instanceof Error?Q.message:String(Q)}`)}try{he=yield function(Q){var oe=arguments;return c(this,arguments,void 0,function*(ee,$=[],re=[]){var fe,ce,de,we,me,ye,Ae,Le;try{const ve=_.Logger.logfunction("FormatFunctionDataForData",oe);let De=[];for(let Te=0;Te<ee.length;Te++)De.push(ee[Te].toTheConceptId),De.push(ee[Te].ofTheConceptId),De.push(ee[Te].typeId);for(let Te=0;Te<ee.length;Te++)try{let pe=!1,ke=yield(0,_.GetTheConcept)(ee[Te].ofTheConceptId),Ee=yield(0,_.GetTheConcept)(ee[Te].toTheConceptId);if(re.includes(ee[Te].id)&&(pe=!0),pe==1&&ke.id!=0&&Ee.id!=0){let Ne,be=yield(0,_.GetTheConcept)(ee[Te].typeId),Be=(ce=(fe=Ee.type)===null||fe===void 0?void 0:fe.characterValue)!==null&&ce!==void 0?ce:"self";ee[Te].toTheConceptId in $?(Ne=$[ee[Te].toTheConceptId],Be in Ne||(Ne[Be]={})):(Ne={},Ne[Be]={},$[ee[Te].toTheConceptId]=Ne);try{let Re=(we=(de=ke?.type)===null||de===void 0?void 0:de.characterValue)!==null&&we!==void 0?we:"none",Fe=ke.characterValue,xe=be.characterValue;xe==""&&(xe=Re,xe=i(xe));let $e={id:ke.id,data:{[Re]:Fe}},He=xe+"_reverse";He.includes("_s_")||(typeof Ne[Be]=="string"&&(Ne[Be]={}),Ne[Be][He]=$e)}catch{}}if(ke.id!=0&&Ee.id!=0){let Ne,be=yield(0,_.GetTheConcept)(ee[Te].typeId),Be=(ye=(me=ke.type)===null||me===void 0?void 0:me.characterValue)!==null&&ye!==void 0?ye:"self";ee[Te].ofTheConceptId in $?(Ne=$[ee[Te].ofTheConceptId],Be in Ne||(Ne[Be]={})):(Ne={},Ne[Be]={},$[ee[Te].ofTheConceptId]=Ne);try{let Re=(Le=(Ae=Ee?.type)===null||Ae===void 0?void 0:Ae.characterValue)!==null&&Le!==void 0?Le:"none",Fe=Ee.characterValue,xe=be.characterValue,$e=!1;xe==""&&(xe=Re,xe=i(xe),$e=!0);let He={id:Ee.id,data:{[Re]:Fe}};isNaN(Number(xe))?xe.includes("_s_")||(typeof Ne[Be]=="string"&&(Ne[Be]={}),Ne[Be][xe]=He):(Array.isArray(Ne[Be])||(Ne[Be]=[]),Ne[Be].push(He))}catch{}}}catch{}return _.Logger.logUpdate(ve),$}catch(ve){throw ve}})}(ae,he,q)}catch(Q){throw new Error(`Failed to format function data for data: ${Q instanceof Error?Q.message:String(Q)}`)}try{ie=yield function(Q,oe,ee,$){var re=arguments;return c(this,arguments,void 0,function*(fe,ce,de,we,me=[],ye){var Ae,Le,ve,De,Te,pe;try{const ke=_.Logger.logfunction("FormatFromConnectionsAlteredArrayExternal",re);let Ee=[],Ne=[];for(let be=0;be<fe.length;be++)Ne.push(fe[be].toTheConceptId),Ne.push(fe[be].ofTheConceptId),Ne.push(fe[be].typeId);for(let be=0;be<fe.length;be++)try{let Be=!1,Re=yield(0,_.GetTheConcept)(fe[be].ofTheConceptId),Fe=yield(0,_.GetTheConcept)(fe[be].toTheConceptId);if(me.includes(fe[be].id)&&(Be=!0),Be==1&&Re.id!=0&&Fe.id!=0&&Fe.id in ce){let xe,$e=yield(0,_.GetTheConcept)(fe[be].typeId),He=(Le=(Ae=Fe.type)===null||Ae===void 0?void 0:Ae.characterValue)!==null&&Le!==void 0?Le:"self",ht=!1;fe[be].toTheConceptId in ce&&(ht=!0),fe[be].toTheConceptId in ce?(xe=ce[fe[be].toTheConceptId],typeof xe[He]=="string"&&(xe[He]={})):(xe={},xe[He]={},ce[fe[be].toTheConceptId]=xe),o(Fe.id,ye,xe);try{if(ce[fe[be].ofTheConceptId]){let xt={id:Re.id,data:ce[fe[be].ofTheConceptId],created_on:fe[be].entryTimeStamp},lt=$e.characterValue+"_reverse";Array.isArray(xe[He][lt])?xe[He][lt].push(xt):lt.includes("_s_")?(xe[He][lt]=[],xe[He][lt].push(xt)):xe[He][lt]=xt}}catch{}}if(Re.id!=0&&Fe.id!=0&&Re.id in ce){let xe,$e=yield(0,_.GetTheConcept)(fe[be].typeId),He=(De=(ve=Re.type)===null||ve===void 0?void 0:ve.characterValue)!==null&&De!==void 0?De:"self",ht=!1;fe[be].toTheConceptId in ce&&(ht=!0),fe[be].ofTheConceptId in ce?(xe=ce[fe[be].ofTheConceptId],typeof xe[He]=="string"&&(xe[He]={})):(xe={},xe[He]={},ce[fe[be].ofTheConceptId]=xe),o(Re.id,ye,xe);let xt=!0,lt=$e.characterValue;lt==""&&(lt=Fe.characterValue,xt=!0),lt==""&&(lt=((Te=Fe?.type)===null||Te===void 0?void 0:Te.characterValue)||"");try{(pe=Fe?.type)===null||pe===void 0||pe.characterValue;let Ft=ce[fe[be].toTheConceptId];if(Ft){let yn={id:Fe.id,data:ce[fe[be].toTheConceptId],created_on:fe[be].entryTimeStamp};Array.isArray(xe[He])?xe[He].push(Ft):Array.isArray(xe[He][lt])?xe[He][$e.characterValue].push(yn):lt.includes("_s_")?(xe[He][lt]=[],xe[He][lt].push(yn)):xe[He][lt]=yn,o(Fe.id,ye,yn)}}catch{}}}catch{}for(let be=0;be<we.length;be++)try{let Be={};Be.id=we[be];let Re=yield(0,_.GetTheConcept)(Be.id);Be.data=ce[we[be]],Be.created_on=Re.entryTimeStamp,Ee.push(Be)}catch{}return _.Logger.logUpdate(ke),Ee}catch(ke){throw ke}})}(ae,he,ne,j,q,H)}catch(Q){throw new Error(`Failed to format from connections altered array external: ${Q instanceof Error?Q.message:String(Q)}`)}return ie}catch(ae){throw ae}})}function L(S,E,R,U,F){return a(this,arguments,void 0,function*(M,W,j,q,X,Z="DESC"){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("formatConnectionsV2",{linkers:M,conceptIds:W,mainCompositionIds:j,reverse:q,countInfos:X,order:Z})).data}catch(ne){(0,_.handleServiceWorkerException)(ne)}let ae=yield(0,N.QL)(M),H=yield(0,p.V)(X);ae=(0,C.X)(ae,Z);let ie={};return ie=yield function(ne){var Q=arguments;return T(this,arguments,void 0,function*(oe,ee={},$=[]){var re,fe,ce,de,we;const me=_.Logger.logfunction("FormatFunctionDataV2",Q);for(const ye of oe){const Ae=$.includes(ye.id),Le=yield(0,_.GetTheConcept)(ye.ofTheConceptId),ve=yield(0,_.GetTheConcept)(ye.toTheConceptId),De=yield(0,_.GetTheConcept)(ye.typeId);if(Le.id===0||ve.id===0)continue;const Te=Ae?ve:Le,pe=Ae?Le:ve,ke=(fe=(re=Te.type)===null||re===void 0?void 0:re.characterValue)!==null&&fe!==void 0?fe:"self",Ee=(de=(ce=pe.type)===null||ce===void 0?void 0:ce.characterValue)!==null&&de!==void 0?de:"none",Ne=pe.characterValue;(we=De.characterValue)===null||we===void 0||we.includes("_s_"),ee[Te.id]||(ee[Te.id]={}),ee[Te.id][ke]||(ee[Te.id][ke]={}),ee[pe.id]||(ee[pe.id]={}),ee[pe.id][Ee]=Ne}return _.Logger.logUpdate(me),ee})}(ae,ie,q),ie=yield function(ne){var Q=arguments;return T(this,arguments,void 0,function*(oe,ee={},$=[]){var re,fe,ce,de,we;const me=_.Logger.logfunction("FormatFunctionDataForDataV2",Q);for(const ye of oe){const Ae=$.includes(ye.id),Le=yield(0,_.GetTheConcept)(ye.ofTheConceptId),ve=yield(0,_.GetTheConcept)(ye.toTheConceptId),De=yield(0,_.GetTheConcept)(ye.typeId);if(Le.id===0||ve.id===0)continue;const Te=Ae?ve:Le,pe=Ae?Le:ve,ke=(fe=(re=Te.type)===null||re===void 0?void 0:re.characterValue)!==null&&fe!==void 0?fe:"self",Ee=(de=(ce=pe.type)===null||ce===void 0?void 0:ce.characterValue)!==null&&de!==void 0?de:"none",Ne=pe.characterValue,be=(we=De.characterValue)!==null&&we!==void 0?we:"";let Be=be===""?i(Ee):be;const Re=Be.includes("_s_"),Fe=!isNaN(Number(Be)),xe={id:pe.id,data:{[Ee]:Ne}};ee[Te.id]||(ee[Te.id]={}),ke in ee[Te.id]&&typeof ee[Te.id][ke]!="string"||(ee[Te.id][ke]=Fe?[]:{});try{if(Re)continue;Fe?ee[Te.id][ke].push(xe):ee[Te.id][ke][Ae?`${Be}_reverse`:Be]=xe}catch{}}return _.Logger.logUpdate(me),ee})}(ae,ie,q),yield function(ne,Q,oe){var ee=arguments;return T(this,arguments,void 0,function*($,re,fe,ce=[],de){var we,me,ye;const Ae=_.Logger.logfunction("FormatFromConnectionsAlteredArrayExternal",ee),Le=[];for(const ve of $){const De=ce.includes(ve.id),Te=yield(0,_.GetTheConcept)(ve.ofTheConceptId),pe=yield(0,_.GetTheConcept)(ve.toTheConceptId),ke=yield(0,_.GetTheConcept)(ve.typeId);if(Te.id===0||pe.id===0)continue;const Ee=De?pe:Te,Ne=De?Te:pe,be=Ee.id,Be=Ne.id,Re=(me=(we=Ee.type)===null||we===void 0?void 0:we.characterValue)!==null&&me!==void 0?me:"self",Fe=ke.characterValue+"_reverse",xe=ke.characterValue||Ne.characterValue||((ye=Ne.type)===null||ye===void 0?void 0:ye.characterValue)||"";if(re[be]){const $e=re[be][Re],He=re[Be],ht={id:Ne.id,data:He,created_on:ve.entryTimeStamp};o(be,de,re[be]);try{De?Array.isArray($e[Fe])?$e[Fe].push(ht):$e[Fe]=[ht]:Array.isArray($e)?$e.push(He):Array.isArray($e[xe])?$e[xe].push(ht):xe.includes("_s_")?($e[xe]=[],$e[xe].push(ht)):$e[xe]=[ht],o(Be,de,ht)}catch{}}}for(const ve of fe){const De=yield(0,_.GetTheConcept)(ve);Le.push({id:ve,data:re[ve],created_on:De.entryTimeStamp})}return _.Logger.logUpdate(Ae),Le})}(ae,ie,j,q,H)})}},3152:(J,P,v)=>{let _=v(3614),N=v(7668),i=v(3303),{isClean:f,my:w}=v(4151);function k(o,c){let p=new o.constructor;for(let C in o){if(!Object.prototype.hasOwnProperty.call(o,C)||C==="proxyCache")continue;let T=o[C],a=typeof T;C==="parent"&&a==="object"?c&&(p[C]=c):C==="source"?p[C]=T:Array.isArray(T)?p[C]=T.map(s=>k(s,p)):(a==="object"&&T!==null&&(T=k(T)),p[C]=T)}return p}function h(o,c){if(c&&c.offset!==void 0)return c.offset;let p=1,C=1,T=0;for(let a=0;a<o.length;a++){if(C===c.line&&p===c.column){T=a;break}o[a]===`
`?(p=1,C+=1):p+=1}return T}class e{get proxyOf(){return this}constructor(c={}){this.raws={},this[f]=!1,this[w]=!0;for(let p in c)if(p==="nodes"){this.nodes=[];for(let C of c[p])typeof C.clone=="function"?this.append(C.clone()):this.append(C)}else this[p]=c[p]}addToError(c){if(c.postcssNode=this,c.stack&&this.source&&/\n\s{4}at /.test(c.stack)){let p=this.source;c.stack=c.stack.replace(/\n\s{4}at /,`$&${p.input.from}:${p.start.line}:${p.start.column}$&`)}return c}after(c){return this.parent.insertAfter(this,c),this}assign(c={}){for(let p in c)this[p]=c[p];return this}before(c){return this.parent.insertBefore(this,c),this}cleanRaws(c){delete this.raws.before,delete this.raws.after,c||delete this.raws.between}clone(c={}){let p=k(this);for(let C in c)p[C]=c[C];return p}cloneAfter(c={}){let p=this.clone(c);return this.parent.insertAfter(this,p),p}cloneBefore(c={}){let p=this.clone(c);return this.parent.insertBefore(this,p),p}error(c,p={}){if(this.source){let{end:C,start:T}=this.rangeBy(p);return this.source.input.error(c,{column:T.column,line:T.line},{column:C.column,line:C.line},p)}return new _(c)}getProxyProcessor(){return{get:(c,p)=>p==="proxyOf"?c:p==="root"?()=>c.root().toProxy():c[p],set:(c,p,C)=>(c[p]===C||(c[p]=C,p!=="prop"&&p!=="value"&&p!=="name"&&p!=="params"&&p!=="important"&&p!=="text"||c.markDirty()),!0)}}markClean(){this[f]=!0}markDirty(){if(this[f]){this[f]=!1;let c=this;for(;c=c.parent;)c[f]=!1}}next(){if(!this.parent)return;let c=this.parent.index(this);return this.parent.nodes[c+1]}positionBy(c={}){let p=this.source.start;if(c.index)p=this.positionInside(c.index);else if(c.word){let C="document"in this.source.input?this.source.input.document:this.source.input.css,T=C.slice(h(C,this.source.start),h(C,this.source.end)).indexOf(c.word);T!==-1&&(p=this.positionInside(T))}return p}positionInside(c){let p=this.source.start.column,C=this.source.start.line,T="document"in this.source.input?this.source.input.document:this.source.input.css,a=h(T,this.source.start),s=a+c;for(let n=a;n<s;n++)T[n]===`
`?(p=1,C+=1):p+=1;return{column:p,line:C,offset:s}}prev(){if(!this.parent)return;let c=this.parent.index(this);return this.parent.nodes[c-1]}rangeBy(c={}){let p="document"in this.source.input?this.source.input.document:this.source.input.css,C={column:this.source.start.column,line:this.source.start.line,offset:h(p,this.source.start)},T=this.source.end?{column:this.source.end.column+1,line:this.source.end.line,offset:typeof this.source.end.offset=="number"?this.source.end.offset:h(p,this.source.end)+1}:{column:C.column+1,line:C.line,offset:C.offset+1};if(c.word){let a=p.slice(h(p,this.source.start),h(p,this.source.end)).indexOf(c.word);a!==-1&&(C=this.positionInside(a),T=this.positionInside(a+c.word.length))}else c.start?C={column:c.start.column,line:c.start.line,offset:h(p,c.start)}:c.index&&(C=this.positionInside(c.index)),c.end?T={column:c.end.column,line:c.end.line,offset:h(p,c.end)}:typeof c.endIndex=="number"?T=this.positionInside(c.endIndex):c.index&&(T=this.positionInside(c.index+1));return(T.line<C.line||T.line===C.line&&T.column<=C.column)&&(T={column:C.column+1,line:C.line,offset:C.offset+1}),{end:T,start:C}}raw(c,p){return new N().raw(this,c,p)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...c){if(this.parent){let p=this,C=!1;for(let T of c)T===this?C=!0:C?(this.parent.insertAfter(p,T),p=T):this.parent.insertBefore(p,T);C||this.remove()}return this}root(){let c=this;for(;c.parent&&c.parent.type!=="document";)c=c.parent;return c}toJSON(c,p){let C={},T=p==null;p=p||new Map;let a=0;for(let s in this){if(!Object.prototype.hasOwnProperty.call(this,s)||s==="parent"||s==="proxyCache")continue;let n=this[s];if(Array.isArray(n))C[s]=n.map(d=>typeof d=="object"&&d.toJSON?d.toJSON(null,p):d);else if(typeof n=="object"&&n.toJSON)C[s]=n.toJSON(null,p);else if(s==="source"){if(n==null)continue;let d=p.get(n.input);d==null&&(d=a,p.set(n.input,a),a++),C[s]={end:n.end,inputId:d,start:n.start}}else C[s]=n}return T&&(C.inputs=[...p.keys()].map(s=>s.toJSON())),C}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(c=i){c.stringify&&(c=c.stringify);let p="";return c(this,C=>{p+=C}),p}warn(c,p,C={}){let T={node:this};for(let a in C)T[a]=C[a];return c.warn(p,T)}}J.exports=e,e.default=e},3229:(J,P,v)=>{v.d(P,{q:()=>f});var _=v(4990),N=v(7015),i=v(5760);function f(w,k,h,e){var o=k,c=new _.N(0,w,h,o,e,1,4);if(w==h)return c.ofTheConceptId=0,c.toTheConceptId=1,c;try{c.isTemp=!0,c.id=Math.floor(1e8*Math.random()),N.Y.AddConnection(c)}catch(p){(0,i.Mb)(p)}return c}},3246:(J,P,v)=>{v.d(P,{D:()=>y,MT:()=>g,Nt:()=>C,QL:()=>s,as:()=>T,cw:()=>o,dF:()=>e,hG:()=>a,km:()=>p,nr:()=>d,p8:()=>c,rv:()=>n});var _=v(6797),N=v(4622),i=v(8429),f=v(5760),w=v(4437),k=v(4174),h=function(b,L,S,E){return new(S||(S=Promise))(function(R,U){function F(j){try{W(E.next(j))}catch(q){U(q)}}function M(j){try{W(E.throw(j))}catch(q){U(q)}}function W(j){var q;j.done?R(j.value):(q=j.value,q instanceof S?q:new S(function(X){X(q)})).then(F,M)}W((E=E.apply(b,L||[])).next())})};function e(){return h(this,arguments,void 0,function*(b=[]){yield(0,_.Y)(b);let L=[];for(let S=0;S<b.length;S++){let E=yield(0,k.kx)(b[S]);L.push(E)}return L})}function o(){return h(this,arguments,void 0,function*(b=[]){yield(0,_.Y)(b);let L=[];for(let S=0;S<b.length;S++){let E=yield(0,k.RW)(b[S]);L.push(E)}return L})}function c(){return h(this,arguments,void 0,function*(b=[],L=[]){const S=i.Logger.logfunction("GetCompositionFromConnectionsWithDataId",[b])||{};if(i.serviceWorker){S.serviceWorker=!0;try{const R=yield(0,i.sendMessage)("GetCompositionFromConnectionsWithDataId",{conceptIds:b,connectionIds:L});return i.Logger.logUpdate(S),R.data}catch(R){(0,f.ey)(S,"GetCompositionFromConnectionsWithDataId",R),(0,i.handleServiceWorkerException)(R)}}let E=[];for(let R=0;R<b.length;R++){let U=yield(0,k.RW)(b[R]);E.push(U)}return i.Logger.logUpdate(S),E})}function p(){var b=arguments;return h(this,arguments,void 0,function*(L=[],S=[]){const E=i.Logger.logfunction("GetCompositionFromConnectionsWithDataIdFromConnections",b)||{};if(i.serviceWorker){E.serviceWorker=!0;try{const F=yield(0,i.sendMessage)("GetCompositionFromConnectionsWithDataIdFromConnections",{conceptIds:L,connectionIds:S});return i.Logger.logUpdate(E),F.data}catch(F){(0,f.ey)(E,"GetCompositionFromConnectionsWithDataIdFromConnections",F),(0,i.handleServiceWorkerException)(F)}}let R=yield(0,N.j)(S),U=[];for(let F=0;F<L.length;F++){let M=yield(0,k.PT)(L[F],R);U.push(M)}return i.Logger.logUpdate(E),U})}function C(){var b=arguments;return h(this,arguments,void 0,function*(L=[],S=[]){const E=i.Logger.logfunction("GetCompositionFromConnectionsWithDataIdIndex",b)||{};if(i.serviceWorker){E.serviceWorker=!0;try{const U=yield(0,i.sendMessage)("GetCompositionFromConnectionsWithDataIdIndex",{conceptIds:L,connectionIds:S});return i.Logger.logUpdate(E),U.data}catch(U){(0,f.ey)(E,"GetCompositionFromConnectionsWithDataIdIndex",U),(0,i.handleServiceWorkerException)(U)}}yield(0,N.j)(S),yield(0,w.B)(L);let R={};for(let U=0;U<L.length;U++){let F=yield(0,k.RW)(L[U]);R[L[U]]=F}return i.Logger.logUpdate(E),R})}function T(){return h(this,arguments,void 0,function*(b=[],L=[]){yield(0,N.j)(L),yield(0,w.B)(b);let S={};for(let E=0;E<b.length;E++){let R=yield(0,k.kx)(b[E]);S[b[E]]=R}return S})}function a(){return h(this,arguments,void 0,function*(b=[],L=[]){if(i.serviceWorker)try{return(yield(0,i.sendMessage)("GetCompositionFromConnectionsWithIndexFromConnections",{conceptIds:b,connectionIds:L})).data}catch(R){(0,i.handleServiceWorkerException)(R)}let S=yield(0,N.j)(L),E=[];for(let R=0;R<b.length;R++){let U=yield(0,k.JA)(b[R],S);E[b[R]]=U}return E})}function s(b){var L=arguments;return h(this,void 0,void 0,function*(){const S=i.Logger.logfunction("GetConnectionDataPrefetch",L)||{};if(i.serviceWorker){S.serviceWorker=!0;try{const j=yield(0,i.sendMessage)("GetConnectionDataPrefetch",{connectionIds:b});return i.Logger.logUpdate(S),j.data}catch(j){(0,f.ey)(S,"GetConnectionDataPrefetch",j),(0,i.handleServiceWorkerException)(j)}}const E=yield Promise.all(b.map(j=>i.ConnectionData.GetConnection(j))),R=[],U=[];for(let j=0;j<E.length;j++){const q=E[j];q?.id===0?U.push(b[j]):R.push(q)}const F=yield(0,N.j)(U),M=[...R,...F],W=new Set;for(const j of M)W.add(j.ofTheConceptId),W.add(j.toTheConceptId),W.add(j.typeId);return yield(0,i.GetConceptBulk)([...W]),i.Logger.logUpdate(S),M})}function n(){var b=arguments;return h(this,arguments,void 0,function*(L=[],S=[]){const E=i.Logger.logfunction("GetCompositionFromConnectionsWithDataIdInObject",b);yield(0,N.j)(S);let R={};for(let U=0;U<L.length;U++){let F=yield(0,k.RW)(L[U]);R[L[U]]=F}return i.Logger.logUpdate(E),R})}function d(){return h(this,arguments,void 0,function*(b=[],L=[]){yield(0,N.j)(L);let S={};for(let E=0;E<b.length;E++){let R=yield(0,k.$N)(b[E]);S[b[E]]=R}return S})}function g(){return h(this,arguments,void 0,function*(b=[],L=[]){yield(0,N.j)(L);let S={};for(let E=0;E<b.length;E++){let R=yield(0,k.kx)(b[E]);S[b[E]]=R}return S})}function y(){return h(this,arguments,void 0,function*(b=[],L=[]){yield(0,N.j)(L);let S={};for(let E=0;E<b.length;E++){let R=yield(0,k.XI)(b[E]);S[b[E]]=R}return S})}},3295:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _=i(v(8937)),N=v(9606);function i(h){return h&&h.__esModule?h:{default:h}}function f(h,e){for(var o=0;o<e.length;o++){var c=e[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(h,c.key,c)}}function w(h,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},w(h,e)}var k=function(h){var e,o;function c(){return h.apply(this,arguments)||this}o=h,(e=c).prototype=Object.create(o.prototype),e.prototype.constructor=e,w(e,o);var p,C,T=c.prototype;return T.qualifiedName=function(a){return this.namespace?this.namespaceString+"|"+a:a},T.valueToString=function(){return this.qualifiedName(h.prototype.valueToString.call(this))},p=c,(C=[{key:"namespace",get:function(){return this._namespace},set:function(a){if(a===!0||a==="*"||a==="&")return this._namespace=a,void(this.raws&&delete this.raws.namespace);var s=(0,_.default)(a,{isIdentifier:!0});this._namespace=a,s!==a?((0,N.ensureObject)(this,"raws"),this.raws.namespace=s):this.raws&&delete this.raws.namespace}},{key:"ns",get:function(){return this._namespace},set:function(a){this.namespace=a}},{key:"namespaceString",get:function(){if(this.namespace){var a=this.stringifyProperty("namespace");return a===!0?"":a}return""}}])&&f(p.prototype,C),Object.defineProperty(p,"prototype",{writable:!1}),c}(i(v(4646)).default);P.default=k,J.exports=P.default},3303:(J,P,v)=>{let _=v(7668);function N(i,f){new _(f).stringify(i)}J.exports=N,N.default=N},3379:(J,P,v)=>{v.d(P,{$I:()=>w,Ay:()=>f});var _=v(7154),N=(v(370),v(1317),v(8429));v(5760);var i=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};function f(k){return i(this,void 0,void 0,function*(){return yield _.v.GetConceptByCharacterAndTypeLocal(k,51)})}function w(k){return i(this,void 0,void 0,function*(){if(N.serviceWorker)try{return(yield(0,N.sendMessage)("GetConceptByCharacterAndCategoryLocal",{character:k})).data}catch(o){(0,N.handleServiceWorkerException)(o)}let h=(0,N.CreateDefaultLConcept)();if(k=="the")return h.id=1,h.typeId=5,h.characterValue="the",h;let e=(0,N.SplitStrings)(k);if(e.length>1){let o=1,c=yield w(e[0]);c.id!=0&&(o=c.id),h=yield function(p,C){return i(this,void 0,void 0,function*(){return _.v.GetConceptByCharacterAndCategoryLocal(p,C)})}(k,o)}else e[0]==k&&(h=yield f(k));return h})}},3424:(J,P,v)=>{v.d(P,{$:()=>e});var _=v(3890),N=v(3379),i=v(8206),f=v(6832),w=v(8429),k=v(5760),h=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,c||[])).next())})};function e(o,c,p,C){var T=arguments;return h(this,arguments,void 0,function*(a,s,n,d,g={concepts:[],connections:[]}){var y,b,L,S;const E=w.Logger.logfunction("MakeTheTypeConceptLocal",T)||{};if(w.serviceWorker){E.serviceWorker=!0;try{const U=yield(0,w.sendMessage)("MakeTheTypeConceptLocal",{typeString:a,sessionId:s,sessionUserId:n,userId:d,actions:g});return!((b=(y=U?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(U.actions.concepts))),!((S=(L=U?.actions)===null||L===void 0?void 0:L.connections)===null||S===void 0)&&S.length&&(g.connections=JSON.parse(JSON.stringify(U.actions.connections))),w.Logger.logUpdate(E),U.data}catch(U){(0,k.ey)(E,"MakeTheTypeConceptLocal",U),(0,w.handleServiceWorkerException)(U)}}let R=yield(0,N.$I)(a);if(R&&(R.id==0||R.userId==0)){let U=(0,i.f)(a);if(U[0]==a)R=yield(0,f.A)(a,"the",d,1,51,g);else{let F=yield e(U[0],s,n,d,g),M=yield e(U[1],s,n,d,g);R=yield(0,_.A)(a,U[1],d,F.id,M.id,4,void 0,null,g)}}return w.Logger.logUpdate(E),R})}},3438:(J,P,v)=>{let _=v(396),N=v(9371),i=v(5238),f=v(1106),w=v(3878),k=v(5644),h=v(1534);function e(o,c){if(Array.isArray(o))return o.map(T=>e(T));let{inputs:p,...C}=o;if(p){c=[];for(let T of p){let a={...T,__proto__:f.prototype};a.map&&(a.map={...a.map,__proto__:w.prototype}),c.push(a)}}if(C.nodes&&(C.nodes=o.nodes.map(T=>e(T,c))),C.source){let{inputId:T,...a}=C.source;C.source=a,T!=null&&(C.source.input=c[T])}if(C.type==="root")return new k(C);if(C.type==="decl")return new i(C);if(C.type==="rule")return new h(C);if(C.type==="comment")return new N(C);if(C.type==="atrule")return new _(C);throw new Error("Unknown node type: "+o.type)}J.exports=e,e.default=e},3604:(J,P,v)=>{let{dirname:_,relative:N,resolve:i,sep:f}=v(197),{SourceMapConsumer:w,SourceMapGenerator:k}=v(1866),{pathToFileURL:h}=v(2739),e=v(1106),o=!!(w&&k),c=!!(_&&i&&N&&f);J.exports=class{constructor(p,C,T,a){this.stringify=p,this.mapOpts=T.map||{},this.root=C,this.opts=T,this.css=a,this.originalCSS=a,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let p;p=this.isInline()?"data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?this.mapOpts.annotation(this.opts.to,this.root):this.outputFile()+".map";let C=`
`;this.css.includes(`\r
`)&&(C=`\r
`),this.css+=C+"/*# sourceMappingURL="+p+" */"}applyPrevMaps(){for(let p of this.previous()){let C,T=this.toUrl(this.path(p.file)),a=p.root||_(p.file);this.mapOpts.sourcesContent===!1?(C=new w(p.text),C.sourcesContent&&(C.sourcesContent=null)):C=p.consumer(),this.map.applySourceMap(C,T,this.toUrl(this.path(a)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let p;for(let C=this.root.nodes.length-1;C>=0;C--)p=this.root.nodes[C],p.type==="comment"&&p.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(C)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),c&&o&&this.isMap())return this.generateMap();{let p="";return this.stringify(this.root,C=>{p+=C}),[p]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let p=this.previous()[0].consumer();p.file=this.outputFile(),this.map=k.fromSourceMap(p,{ignoreInvalidMapping:!0})}else this.map=new k({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new k({file:this.outputFile(),ignoreInvalidMapping:!0});let p,C,T=1,a=1,s="<no source>",n={generated:{column:0,line:0},original:{column:0,line:0},source:""};this.stringify(this.root,(d,g,y)=>{if(this.css+=d,g&&y!=="end"&&(n.generated.line=T,n.generated.column=a-1,g.source&&g.source.start?(n.source=this.sourcePath(g),n.original.line=g.source.start.line,n.original.column=g.source.start.column-1,this.map.addMapping(n)):(n.source=s,n.original.line=1,n.original.column=0,this.map.addMapping(n))),C=d.match(/\n/g),C?(T+=C.length,p=d.lastIndexOf(`
`),a=d.length-p):a+=d.length,g&&y!=="start"){let b=g.parent||{raws:{}};(g.type==="decl"||g.type==="atrule"&&!g.nodes)&&g===b.last&&!b.raws.semicolon||(g.source&&g.source.end?(n.source=this.sourcePath(g),n.original.line=g.source.end.line,n.original.column=g.source.end.column-1,n.generated.line=T,n.generated.column=a-2,this.map.addMapping(n)):(n.source=s,n.original.line=1,n.original.column=0,n.generated.line=T,n.generated.column=a-1,this.map.addMapping(n)))}})}isAnnotation(){return!!this.isInline()||(this.mapOpts.annotation!==void 0?this.mapOpts.annotation:!this.previous().length||this.previous().some(p=>p.annotation))}isInline(){if(this.mapOpts.inline!==void 0)return this.mapOpts.inline;let p=this.mapOpts.annotation;return(p===void 0||p===!0)&&(!this.previous().length||this.previous().some(C=>C.inline))}isMap(){return this.opts.map!==void 0?!!this.opts.map:this.previous().length>0}isSourcesContent(){return this.mapOpts.sourcesContent!==void 0?this.mapOpts.sourcesContent:!this.previous().length||this.previous().some(p=>p.withContent())}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(p){if(this.mapOpts.absolute||p.charCodeAt(0)===60||/^\w+:\/\//.test(p))return p;let C=this.memoizedPaths.get(p);if(C)return C;let T=this.opts.to?_(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(T=_(i(T,this.mapOpts.annotation)));let a=N(T,p);return this.memoizedPaths.set(p,a),a}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(p=>{if(p.source&&p.source.input.map){let C=p.source.input.map;this.previousMaps.includes(C)||this.previousMaps.push(C)}});else{let p=new e(this.originalCSS,this.opts);p.map&&this.previousMaps.push(p.map)}return this.previousMaps}setSourcesContent(){let p={};if(this.root)this.root.walk(C=>{if(C.source){let T=C.source.input.from;if(T&&!p[T]){p[T]=!0;let a=this.usesFileUrls?this.toFileUrl(T):this.toUrl(this.path(T));this.map.setSourceContent(a,C.source.input.css)}}});else if(this.css){let C=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(C,this.css)}}sourcePath(p){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(p.source.input.from):this.toUrl(this.path(p.source.input.from))}toBase64(p){return Buffer?Buffer.from(p).toString("base64"):window.btoa(unescape(encodeURIComponent(p)))}toFileUrl(p){let C=this.memoizedFileURLs.get(p);if(C)return C;if(h){let T=h(p).toString();return this.memoizedFileURLs.set(p,T),T}throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(p){let C=this.memoizedURLs.get(p);if(C)return C;f==="\\"&&(p=p.replace(/\\/g,"/"));let T=encodeURI(p).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(p,T),T}}},3614:(J,P,v)=>{let _=v(8633),N=v(9746);class i extends Error{constructor(w,k,h,e,o,c){super(w),this.name="CssSyntaxError",this.reason=w,o&&(this.file=o),e&&(this.source=e),c&&(this.plugin=c),k!==void 0&&h!==void 0&&(typeof k=="number"?(this.line=k,this.column=h):(this.line=k.line,this.column=k.column,this.endLine=h.line,this.endColumn=h.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,i)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",this.line!==void 0&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(w){if(!this.source)return"";let k=this.source;w==null&&(w=_.isColorSupported);let h=a=>a,e=a=>a,o=a=>a;if(w){let{bold:a,gray:s,red:n}=_.createColors(!0);e=d=>a(n(d)),h=d=>s(d),N&&(o=d=>N(d))}let c=k.split(/\r?\n/),p=Math.max(this.line-3,0),C=Math.min(this.line+2,c.length),T=String(C).length;return c.slice(p,C).map((a,s)=>{let n=p+1+s,d=" "+(" "+n).slice(-T)+" | ";if(n===this.line){if(a.length>160){let y=20,b=Math.max(0,this.column-y),L=Math.max(this.column+y,this.endColumn+y),S=a.slice(b,L),E=h(d.replace(/\d/g," "))+a.slice(0,Math.min(this.column-1,y-1)).replace(/[^\t]/g," ");return e(">")+h(d)+o(S)+`
 `+E+e("^")}let g=h(d.replace(/\d/g," "))+a.slice(0,this.column-1).replace(/[^\t]/g," ");return e(">")+h(d)+o(a)+`
 `+g+e("^")}return" "+h(d)+o(a)}).join(`
`)}toString(){let w=this.showSourceCode();return w&&(w=`

`+w+`
`),this.name+": "+this.message+w}}J.exports=i,i.default=i},3631:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=function(c,p){if(c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var C=f(p);if(C&&C.has(c))return C.get(c);var T={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in c)if(s!=="default"&&Object.prototype.hasOwnProperty.call(c,s)){var n=a?Object.getOwnPropertyDescriptor(c,s):null;n&&(n.get||n.set)?Object.defineProperty(T,s,n):T[s]=c[s]}return T.default=c,C&&C.set(c,T),T}(v(1581));function f(c){if(typeof WeakMap!="function")return null;var p=new WeakMap,C=new WeakMap;return(f=function(T){return T?C:p})(c)}function w(c,p){var C=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(C)return(C=C.call(c)).next.bind(C);if(Array.isArray(c)||(C=function(a,s){if(a){if(typeof a=="string")return k(a,s);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(a,s)}}(c))||p){C&&(c=C);var T=0;return function(){return T>=c.length?{done:!0}:{done:!1,value:c[T++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(c,p){(p==null||p>c.length)&&(p=c.length);for(var C=0,T=new Array(p);C<p;C++)T[C]=c[C];return T}function h(c,p){for(var C=0;C<p.length;C++){var T=p[C];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(c,T.key,T)}}function e(c,p){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,T){return C.__proto__=T,C},e(c,p)}var o=function(c){var p,C;function T(d){var g;return(g=c.call(this,d)||this).nodes||(g.nodes=[]),g}C=c,(p=T).prototype=Object.create(C.prototype),p.prototype.constructor=p,e(p,C);var a,s,n=T.prototype;return n.append=function(d){return d.parent=this,this.nodes.push(d),this},n.prepend=function(d){for(var g in d.parent=this,this.nodes.unshift(d),this.indexes)this.indexes[g]++;return this},n.at=function(d){return this.nodes[d]},n.index=function(d){return typeof d=="number"?d:this.nodes.indexOf(d)},n.removeChild=function(d){var g;for(var y in d=this.index(d),this.at(d).parent=void 0,this.nodes.splice(d,1),this.indexes)(g=this.indexes[y])>=d&&(this.indexes[y]=g-1);return this},n.removeAll=function(){for(var d,g=w(this.nodes);!(d=g()).done;)d.value.parent=void 0;return this.nodes=[],this},n.empty=function(){return this.removeAll()},n.insertAfter=function(d,g){var y;g.parent=this;for(var b,L=this.index(d),S=[],E=2;E<arguments.length;E++)S.push(arguments[E]);for(var R in(y=this.nodes).splice.apply(y,[L+1,0,g].concat(S)),g.parent=this,this.indexes)L<(b=this.indexes[R])&&(this.indexes[R]=b+arguments.length-1);return this},n.insertBefore=function(d,g){var y;g.parent=this;for(var b,L=this.index(d),S=[],E=2;E<arguments.length;E++)S.push(arguments[E]);for(var R in(y=this.nodes).splice.apply(y,[L,0,g].concat(S)),g.parent=this,this.indexes)(b=this.indexes[R])>=L&&(this.indexes[R]=b+arguments.length-1);return this},n._findChildAtPosition=function(d,g){var y=void 0;return this.each(function(b){if(b.atPosition){var L=b.atPosition(d,g);if(L)return y=L,!1}else if(b.isAtPosition(d,g))return y=b,!1}),y},n.atPosition=function(d,g){return this.isAtPosition(d,g)?this._findChildAtPosition(d,g)||this:void 0},n._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},n.each=function(d){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var g=this.lastEach;if(this.indexes[g]=0,this.length){for(var y,b;this.indexes[g]<this.length&&(y=this.indexes[g],(b=d(this.at(y),y))!==!1);)this.indexes[g]+=1;return delete this.indexes[g],b!==!1&&void 0}},n.walk=function(d){return this.each(function(g,y){var b=d(g,y);if(b!==!1&&g.length&&(b=g.walk(d)),b===!1)return!1})},n.walkAttributes=function(d){var g=this;return this.walk(function(y){if(y.type===i.ATTRIBUTE)return d.call(g,y)})},n.walkClasses=function(d){var g=this;return this.walk(function(y){if(y.type===i.CLASS)return d.call(g,y)})},n.walkCombinators=function(d){var g=this;return this.walk(function(y){if(y.type===i.COMBINATOR)return d.call(g,y)})},n.walkComments=function(d){var g=this;return this.walk(function(y){if(y.type===i.COMMENT)return d.call(g,y)})},n.walkIds=function(d){var g=this;return this.walk(function(y){if(y.type===i.ID)return d.call(g,y)})},n.walkNesting=function(d){var g=this;return this.walk(function(y){if(y.type===i.NESTING)return d.call(g,y)})},n.walkPseudos=function(d){var g=this;return this.walk(function(y){if(y.type===i.PSEUDO)return d.call(g,y)})},n.walkTags=function(d){var g=this;return this.walk(function(y){if(y.type===i.TAG)return d.call(g,y)})},n.walkUniversals=function(d){var g=this;return this.walk(function(y){if(y.type===i.UNIVERSAL)return d.call(g,y)})},n.split=function(d){var g=this,y=[];return this.reduce(function(b,L,S){var E=d.call(g,L);return y.push(L),E?(b.push(y),y=[]):S===g.length-1&&b.push(y),b},[])},n.map=function(d){return this.nodes.map(d)},n.reduce=function(d,g){return this.nodes.reduce(d,g)},n.every=function(d){return this.nodes.every(d)},n.some=function(d){return this.nodes.some(d)},n.filter=function(d){return this.nodes.filter(d)},n.sort=function(d){return this.nodes.sort(d)},n.toString=function(){return this.map(String).join("")},a=T,(s=[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}])&&h(a.prototype,s),Object.defineProperty(a,"prototype",{writable:!1}),T}(N.default);P.default=o,J.exports=P.default},3693:(J,P,v)=>{v.d(P,{g:()=>f});var _=v(8429),N=v(8444),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};function f(w,k){return i(this,void 0,void 0,function*(){if(typeof self<"u"&&typeof ServiceWorkerGlobalScope<"u"&&self instanceof ServiceWorkerGlobalScope)throw new Error("Cannot switch server from service worker");try{(function(){const h=_.BaseUrl.NODE_CACHE_URL;let e=_.BaseUrl.BASE_APPLICATION+"_cacheServers";if(h===_.BaseUrl.BASE_URL)throw new Error("Base Server Down");let o=sessionStorage.getItem(e);o=JSON.parse(o);const c=o.indexOf(h);if(_.BaseUrl.isNearestCache=!1,o.includes(h)&&c!==-1&&o.splice(c,1),sessionStorage.setItem(e,JSON.stringify(o)),o.length){const p=o[0];_.BaseUrl.NODE_CACHE_URL=p}else _.BaseUrl.NODE_CACHE_URL=_.BaseUrl.BASE_URL;navigator.serviceWorker&&navigator.serviceWorker.controller&&(0,_.sendMessage)("SESSION_DATA",{type:"SESSION_DATA",data:_.BaseUrl.NODE_CACHE_URL,session:N.b.sessionId})})();try{return yield fetch(`${_.BaseUrl.NODE_CACHE_URL}${k}`,w)}catch{return yield f(w,k)}}catch(h){throw h}})}},3717:(J,P,v)=>{let _=v(38);class N{get content(){return this.css}constructor(f,w,k){this.processor=f,this.messages=[],this.root=w,this.opts=k,this.css="",this.map=void 0}toString(){return this.css}warn(f,w={}){w.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(w.plugin=this.lastPlugin.postcssPlugin);let k=new _(f,w);return this.messages.push(k),k}warnings(){return this.messages.filter(f=>f.type==="warning")}}J.exports=N,N.default=N},3726:(J,P,v)=>{v.d(P,{F:()=>h,d:()=>e});var _=v(4990),N=v(3967),i=v(198),f=v(9097),w=v(8429),k=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,c||[])).next())})};function h(o,c,p){return k(this,arguments,void 0,function*(C,T,a,s=1,n="",d=999,g={concepts:[],connections:[]}){var y,b,L,S;let E=performance.now();if(w.serviceWorker)try{const R=yield(0,w.sendMessage)("CreateTheConnectionLocal",{ofTheConceptId:C,toTheConceptId:T,typeId:a,orderId:s,typeString:n,userId:d,actions:g});return!((b=(y=R?.actions)===null||y===void 0?void 0:y.concepts)===null||b===void 0)&&b.length&&(g.concepts=JSON.parse(JSON.stringify(R.actions.concepts))),!((S=(L=R?.actions)===null||L===void 0?void 0:L.connections)===null||S===void 0)&&S.length&&(g.connections=JSON.parse(JSON.stringify(R.actions.connections))),R.data}catch(R){(0,w.handleServiceWorkerException)(R)}try{let R=4,U=yield i.R.getConnectionId(),F=0,M=0,W=0;F=C,M=T,W=a;let j=new _.N(0,0,0,0,0,0,0);return C!=T&&(j=new _.N(U,F,M,d,a,s,R),j.isTemp=!0,j.typeCharacter=n,w.LocalSyncData.AddConnection(j),N.G.AddConnection(j),g.connections.push(j)),j}catch(R){throw f.V.logError(E,d,"create","Unknown","Unknown",500,void 0,"CreateTheConnectionLocal",[C,T,a,s,n,d],"UnknownUserAgent",[]),R}})}function e(o,c,p){return k(this,arguments,void 0,function*(C,T,a,s={concepts:[],connections:[]}){var n,d,g,y;if(w.serviceWorker)try{const S=yield(0,w.sendMessage)("CreateConnection",{ofTheConcept:C,toTheConcept:T,connectionTypeString:a,actions:s});return!((d=(n=S?.actions)===null||n===void 0?void 0:n.concepts)===null||d===void 0)&&d.length&&(s.concepts=JSON.parse(JSON.stringify(S.actions.concepts))),!((y=(g=S?.actions)===null||g===void 0?void 0:g.connections)===null||y===void 0)&&y.length&&(s.connections=JSON.parse(JSON.stringify(S.actions.connections))),S.data}catch(S){(0,w.handleServiceWorkerException)(S)}let b=yield(0,w.MakeTheTypeConceptLocal)(a,999,999,999),L=C.userId;return yield h(C.id,T.id,b.id,1e3,a,L,s)})}},3796:(J,P,v)=>{v.d(P,{c:()=>k});var _=v(8429),N=v(6047),i=v(830);class f{constructor(e,o){this.value=[],this.height=1,this.key=e,this.value.push(o),this.leftNode=null,this.rightNode=null,this.currentNode=null}addType(e,o,c){var p,C,T,a;if(e==null)return(0,_.dispatchIdEvent)(o,{detail:c}),new f(o,c);if(o<e.key)e.leftNode=this.addType(e.leftNode,o,c);else{if(!(o>e.key))return e.value.includes(c)||((0,_.dispatchIdEvent)(o,{detail:c}),e.value.push(c)),e;e.rightNode=this.addType(e.rightNode,o,c)}e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1;const s=this.getBalanceFactor(e);return s>1&&o<((p=e.leftNode)===null||p===void 0?void 0:p.key)?this.rightRotate(e):s<-1&&o>((C=e.rightNode)===null||C===void 0?void 0:C.key)?this.leftRotate(e):s>1&&o>((T=e.leftNode)===null||T===void 0?void 0:T.key)?(e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)):s<-1&&o<((a=e.rightNode)===null||a===void 0?void 0:a.key)?(e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)):e}rightRotate(e){if(e){let o=e.leftNode;if(o){let c=o.rightNode;return e.leftNode=c,o.rightNode=e,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1,o.height=Math.max(this.getHeight(o.leftNode),this.getHeight(o.rightNode))+1,o}}return e}leftRotate(e){if(e){let o=e.rightNode;if(o){let c=o.leftNode;return o.leftNode=e,e.rightNode=c,e.height=Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode))+1,o.height=Math.max(this.getHeight(o.leftNode),this.getHeight(e.rightNode))+1,o}}return e}getHeight(e){return e?e.height:0}getBalanceFactor(e){return e==null?0:this.getHeight(e.leftNode)-this.getHeight(e.rightNode)}getFromNode(e,o){return o&&(e==o.key?o:e<o.key?this.getFromNode(e,o.leftNode):e>o.key?this.getFromNode(e,o.rightNode):o)}removeNodeWithVariants(e,o,c){if(e==null)return e;if(e.key>o)return e.leftNode=this.removeNodeWithVariants(e.leftNode,o,c),e;if(e.key<o)return e.rightNode=this.removeNodeWithVariants(e.rightNode,o,c),e;if(e.value.length>0){for(let p=0;p<e.value.length;p++)if(c==e.value[p])return e.value.splice(p,1),e}if(e.leftNode==null){let p=e.rightNode;return e=null,p}if(e.rightNode==null){let p=e.leftNode;return e=null,p}{let p=this.inOrderSuccessor(e.rightNode);return e.value=p.value,e.key=p.key,e.currentNode=p.currentNode,e.rightNode=this.removeNodeWithVariants(e.rightNode,p.key,c),e}}countNodeBelow(e){return e==null?0:1+this.countNodeBelow(e.leftNode)+this.countNodeBelow(e.rightNode)}inOrderSuccessor(e){for(;e.leftNode!=null;)e=e.leftNode;return e}}var w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,[])).next())})};class k{static addType(e){return w(this,void 0,void 0,function*(){return this.root==null?(this.root=e,new CustomEvent(`${e.key}`,{detail:e.value[0]}),(0,_.dispatchIdEvent)(e.key,{detail:e.value[0]}),this.root):(this.root=this.root.addType(this.root,e.key,e.value[0]),this.root)})}static addConceptToTree(e){if(e.typeId!=0){let o=new f(e.typeId,e.id);this.addType(o)}}static removeTypeConcept(e,o){this.root&&(this.root=this.root.removeNodeWithVariants(this.root,e,o))}static getNodeFromTreeNew(e){return this.root?this.root.getFromNode(e,this.root):this.root}static getTypeVariantsFromTreeNew(e){return w(this,void 0,void 0,function*(){let o=this.getNodeFromTreeNew(e),c=[],p=[];if(o){c=o.value;for(let C=0;C<c.length;C++){let T=!1;for(let a=0;a<p.length;a++)p[a].id==c[C]&&(T=!0);T||p.push(yield(0,_.GetTheConcept)(c[C]))}}return p})}static waitForDataToLoad(){return w(this,void 0,void 0,function*(){return new Promise((e,o)=>{this.checkFlag(e),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(e){if(i.B.isTypeLoaded)return e("done");setTimeout(k.checkFlag,1e3,e)}static getTypeVariantsFromTreeWithUserIdNew(e,o){return w(this,void 0,void 0,function*(){let c=[],p=yield this.getTypeVariantsFromTreeNew(e);for(let C=0;C<p.length;C++)p[C].userId==o&&c.push(p[C]);return c})}static getTypeVariantsWithCharacterValueNew(e,o){return w(this,void 0,void 0,function*(){let c=yield this.getTypeVariantsFromTreeNew(o),p=(0,N.o)();for(let C=0;C<c.length;C++)c[C].characterValue==e&&(p=c[C]);return p})}static countNumberOfNodes(){return this.typeRoot?this.typeRoot.countNodeBelow(this.typeRoot):0}}k.typeRoot=null,k.root=null},3878:(J,P,v)=>{let{existsSync:_,readFileSync:N}=v(9977),{dirname:i,join:f}=v(197),{SourceMapConsumer:w,SourceMapGenerator:k}=v(1866);class h{constructor(o,c){if(c.map===!1)return;this.loadAnnotation(o),this.inline=this.startWith(this.annotation,"data:");let p=c.map?c.map.prev:void 0,C=this.loadMap(c.from,p);!this.mapFile&&c.from&&(this.mapFile=c.from),this.mapFile&&(this.root=i(this.mapFile)),C&&(this.text=C)}consumer(){return this.consumerCache||(this.consumerCache=new w(this.text)),this.consumerCache}decodeInline(o){let c=o.match(/^data:application\/json;charset=utf-?8,/)||o.match(/^data:application\/json,/);if(c)return decodeURIComponent(o.substr(c[0].length));let p=o.match(/^data:application\/json;charset=utf-?8;base64,/)||o.match(/^data:application\/json;base64,/);if(p)return C=o.substr(p[0].length),Buffer?Buffer.from(C,"base64").toString():window.atob(C);var C;let T=o.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+T)}getAnnotationURL(o){return o.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(o){return typeof o=="object"&&(typeof o.mappings=="string"||typeof o._mappings=="string"||Array.isArray(o.sections))}loadAnnotation(o){let c=o.match(/\/\*\s*# sourceMappingURL=/g);if(!c)return;let p=o.lastIndexOf(c.pop()),C=o.indexOf("*/",p);p>-1&&C>-1&&(this.annotation=this.getAnnotationURL(o.substring(p,C)))}loadFile(o){if(this.root=i(o),_(o))return this.mapFile=o,N(o,"utf-8").toString().trim()}loadMap(o,c){if(c===!1)return!1;if(c){if(typeof c=="string")return c;if(typeof c!="function"){if(c instanceof w)return k.fromSourceMap(c).toString();if(c instanceof k)return c.toString();if(this.isMap(c))return JSON.stringify(c);throw new Error("Unsupported previous source map format: "+c.toString())}{let p=c(o);if(p){let C=this.loadFile(p);if(!C)throw new Error("Unable to load previous source map: "+p.toString());return C}}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let p=this.annotation;return o&&(p=f(i(o),p)),this.loadFile(p)}}}startWith(o,c){return!!o&&o.substr(0,c.length)===c}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}}J.exports=h,h.default=h},3890:(J,P,v)=>{v.d(P,{A:()=>h});var _=v(8429),N=v(3008),i=v(7154),f=v(198),w=v(9097),k=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,o||[])).next())})};function h(e,o,c,p,C,T){return k(this,arguments,void 0,function*(a,s,n,d,g,y,b=!1,L=0,S={concepts:[],connections:[]}){var E,R,U,F;let M=performance.now();try{if(_.serviceWorker)try{const ae=yield(0,_.sendMessage)("CreateTheConceptLocal",{referent:a,typecharacter:s,userId:n,categoryId:d,typeId:g,accessId:y,isComposition:b,referentId:L});return!((R=(E=ae?.actions)===null||E===void 0?void 0:E.concepts)===null||R===void 0)&&R.length&&(S.concepts=JSON.parse(JSON.stringify(ae.actions.concepts))),!((F=(U=ae?.actions)===null||U===void 0?void 0:U.connections)===null||F===void 0)&&F.length&&(S.connections=JSON.parse(JSON.stringify(ae.actions.connections))),ae.data}catch(ae){(0,_.handleServiceWorkerException)(ae)}let W=yield f.R.getConceptId(),j=!0,q=new Date,X=new Date;if(a=="the")return new N.j(1,999,5,5,L,a,y,j,q,X,s);let Z=new N.j(W,n,g,d,L,a,y,j,q,X,s);return Z.isTemp=!0,Z.isComposition=b,i.v.AddConcept(Z),S.concepts.push(Z),Z}catch(W){throw w.V.logError(M,n,"create","unknown","unknown",500,void 0,"createTheConceptLocal",[a,s,n,d,g,y,b],void 0),W}})}},3967:(J,P,v)=>{v.d(P,{G:()=>k});var _=v(4990),N=v(6715),i=v(830),f=v(7580),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,[])).next())})};class k{constructor(){this.name="Connection Array"}static CheckContains(e){for(var o=!1,c=0;c<this.connectionArray.length;c++)this.connectionArray[c].id==e.id&&(o=!0);return o}static AddConnection(e){this.CheckContains(e)&&this.RemoveConnection(e),e.id,this.connectionArray.push(e)}static AddConnectionToMemory(e){this.CheckContains(e)&&this.RemoveConnection(e),this.connectionArray.push(e)}static AddToDictionary(e){this.connectionDictionary[e.id]=e}static RemoveConnection(e){for(var o=0;o<this.connectionArray.length;o++)this.connectionArray[o].id==e.id&&this.connectionArray.splice(o,1);e.id}static RemoveConnectionById(e){for(var o=0;o<this.connectionArray.length;o++)this.connectionArray[o].id==e&&this.connectionArray.splice(o,1);f.H.RemoveConnectionById(e)}static AddPermanentConnection(e){e.id>0&&N.d.AddConnection(function(o){let c=new _.N(0,0,0,0,0,0,0);return c.ofTheConceptId=o.ofTheConceptId,c.toTheConceptId=o.toTheConceptId,c.typeId=o.typeId,c.orderId=o.orderId,c.id=o.id,c}(e))}static GetConnection(e){var o;o=null;for(var c=0;c<this.connectionArray.length;c++)this.connectionArray[c].id==e&&(o=this.connectionArray[c]);return o}static waitForDataToLoad(){return w(this,void 0,void 0,function*(){return new Promise((e,o)=>{this.checkFlag(e),setTimeout(()=>{o("not")},25e3)})})}static checkFlag(e){if(i.B.isLocalConnectionLoaded)return e("done");setTimeout(k.checkFlag,1e3,e)}static GetConnectionsOfCompositionLocal(e){return w(this,void 0,void 0,function*(){var o=[];try{for(var c=0;c<this.connectionArray.length;c++)this.connectionArray[c].typeId==e&&o.push(this.connectionArray[c]);return o}catch{return o}})}static GetConnectionOfCompositionAndTypeLocal(e,o){return w(this,void 0,void 0,function*(){var c=[];try{for(var p=0;p<this.connectionArray.length;p++)this.connectionArray[p].typeId==e&&this.connectionArray[p].ofTheConceptId==o&&c.push(this.connectionArray[p]);return c}catch{return c}})}getName(){return this.name}}k.connectionArray=[],k.connectionDictionary=[]},4151:J=>{J.exports.isClean=Symbol("isClean"),J.exports.my=Symbol("my")},4174:(J,P,v)=>{v.d(P,{$N:()=>y,$V:()=>c,Ez:()=>b,JA:()=>d,Mb:()=>T,Nj:()=>C,PT:()=>g,RW:()=>n,XI:()=>s,ay:()=>o,hL:()=>e,kx:()=>a,re:()=>p,yz:()=>L,zN:()=>R});var _=v(9536),N=v(5793),i=v(1833),f=v(6715),w=v(8429),k=v(5760),h=function(F,M,W,j){return new(W||(W=Promise))(function(q,X){function Z(ie){try{H(j.next(ie))}catch(he){X(he)}}function ae(ie){try{H(j.throw(ie))}catch(he){X(he)}}function H(ie){var he;ie.done?q(ie.value):(he=ie.value,he instanceof W?he:new W(function(ne){ne(he)})).then(Z,ae)}H((j=j.apply(F,M||[])).next())})};function e(F){return h(this,void 0,void 0,function*(){let M={connectionList:[],compositionList:[]};try{if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetCompositionById",{id:F})).data}catch(j){(0,w.handleServiceWorkerException)(j)}let W=yield(0,N.s)(F);M.connectionList=W;for(let j=0;j<M.connectionList.length;j++)M.compositionList.includes(M.connectionList[j].ofTheConceptId)||M.compositionList.push(M.connectionList[j].ofTheConceptId);return M}catch{return M}})}function o(F,M,W){return h(this,void 0,void 0,function*(){var j,q;let X={},Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield R(F,M,W);return X[(q=(j=Z?.type)===null||j===void 0?void 0:j.characterValue)!==null&&q!==void 0?q:""]=ae,X})}function c(F,M,W){return h(this,void 0,void 0,function*(){var j,q;let X={},Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield R(F,M,W);X[(q=(j=Z?.type)===null||j===void 0?void 0:j.characterValue)!==null&&q!==void 0?q:""]=ae;let H={};return H.created_at=Z.entryTimeStamp,H.data=X,H.id=F,H})}function p(F,M,W){return h(this,void 0,void 0,function*(){var j,q;let X={},Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield E(Z,M,W);return X[(q=(j=Z?.type)===null||j===void 0?void 0:j.characterValue)!==null&&q!==void 0?q:""]=ae,X})}function C(F){return h(this,void 0,void 0,function*(){var M,W;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetComposition",{id:F})).data}catch(H){(0,w.handleServiceWorkerException)(H)}let j=[],q={};j=yield(0,N.s)(F);let X=[];for(let H=0;H<j.length;H++)X.includes(j[H].ofTheConceptId)||X.push(j[H].ofTheConceptId);let Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield R(F,j,X);return q[(W=(M=Z?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:""]=ae,q})}function T(F){return h(this,void 0,void 0,function*(){var M,W;let j=[],q={};j=yield(0,N.s)(F);let X=[];for(let H=0;H<j.length;H++)X.includes(j[H].ofTheConceptId)||X.push(j[H].ofTheConceptId);let Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield U(F,j,X);return q[(W=(M=Z?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:""]=ae,q})}function a(F){return h(this,void 0,void 0,function*(){var M,W;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetCompositionFromMemory",{id:F})).data}catch(H){(0,w.handleServiceWorkerException)(H)}let j=[],q={};j=yield f.d.GetConnectionsOfCompositionLocal(F);let X=[];for(let H=0;H<j.length;H++)X.includes(j[H].ofTheConceptId)||X.push(j[H].ofTheConceptId);let Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield S(Z,j,X);return q[(W=(M=Z?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:""]=ae,q})}function s(F){return h(this,void 0,void 0,function*(){var M,W;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetCompositionFromMemoryNormal",{id:F})).data}catch(H){(0,w.handleServiceWorkerException)(H)}let j=[],q={};j=yield f.d.GetConnectionsOfCompositionLocal(F);let X=[];for(let H=0;H<j.length;H++)X.includes(j[H].ofTheConceptId)||X.push(j[H].ofTheConceptId);let Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield E(Z,j,X);return q[(W=(M=Z?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:""]=ae,q})}function n(F){var M=arguments;return h(this,void 0,void 0,function*(){var W,j;const q=w.Logger.logfunction("GetCompositionWithIdFromMemory",M)||{};if(w.serviceWorker){q.serviceWorker=!0;try{const H=yield(0,w.sendMessage)("GetCompositionWithIdFromMemory",{id:F});return w.Logger.logUpdate(q),H.data}catch(H){(0,k.ey)(q,"GetCompositionWithIdFromMemory",H),(0,w.handleServiceWorkerException)(H)}}let X={},Z=[],ae={};try{Z=yield f.d.GetConnectionsOfCompositionLocal(F);let H=[];for(let ne=0;ne<Z.length;ne++)H.includes(Z[ne].ofTheConceptId)||H.push(Z[ne].ofTheConceptId);let ie=yield i.I.GetConcept(F);ie.id==0&&F!=null&&F!=null&&(ie=yield(0,_.r)(F));let he=yield S(ie,Z,H);ae[(j=(W=ie?.type)===null||W===void 0?void 0:W.characterValue)!==null&&j!==void 0?j:""]=he,X.created_at=ie.entryTimeStamp,X.data=ae,X.id=F}catch(H){(0,k.ey)(q,"GetCompositionWithIdFromMemory",H)}return w.Logger.logUpdate(q),X})}function d(F,M){var W=arguments;return h(this,void 0,void 0,function*(){var j,q;const X=w.Logger.logfunction("GetCompositionFromMemoryWithConnections",W)||{};if(w.serviceWorker){X.serviceWorker=!0;try{const ne=yield(0,w.sendMessage)("GetCompositionFromMemoryWithConnections",{id:F,connectionList:M});return w.Logger.logUpdate(X),ne.data}catch(ne){(0,k.ey)(X,"GetCompositionFromMemoryWithConnections",ne),(0,w.handleServiceWorkerException)(ne)}}let Z={},ae=[];for(let ne=0;ne<M.length;ne++)ae.includes(M[ne].ofTheConceptId)||ae.push(M[ne].ofTheConceptId);let H=yield i.I.GetConcept(F);H.id==0&&F!=null&&F!=null&&(H=yield(0,_.r)(F));let ie=yield S(H,M,ae);Z[(q=(j=H?.type)===null||j===void 0?void 0:j.characterValue)!==null&&q!==void 0?q:""]=ie;let he={};return he.created_at=H.entryTimeStamp,he.data=Z,he.id=F,w.Logger.logUpdate(X),he})}function g(F,M){return h(this,void 0,void 0,function*(){var W,j;const q=w.Logger.logfunction("GetCompositionWithIdFromMemoryFromConnection",[F])||{};if(w.serviceWorker){q.serviceWorker=!0;try{const he=yield(0,w.sendMessage)("GetCompositionWithIdFromMemory",{id:F});return w.Logger.logUpdate(q),he.data}catch(he){(0,k.ey)(q,"GetCompositionWithIdFromMemoryFromConnection",he),(0,w.handleServiceWorkerException)(he)}}let X={},Z=[];for(let he=0;he<M.length;he++)Z.includes(M[he].ofTheConceptId)||Z.push(M[he].ofTheConceptId);let ae=yield i.I.GetConcept(F);ae.id==0&&F!=null&&F!=null&&(ae=yield(0,_.r)(F));let H=yield S(ae,M,Z);X[(j=(W=ae?.type)===null||W===void 0?void 0:W.characterValue)!==null&&j!==void 0?j:""]=H;let ie={};return ie.created_at=ae.entryTimeStamp,ie.data=X,ie.id=F,w.Logger.logUpdate(q),ie})}function y(F){return h(this,void 0,void 0,function*(){var M;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetCompositionWithIdFromMemoryNew",{id:F})).data}catch(H){(0,w.handleServiceWorkerException)(H)}let W=[],j={};W=yield f.d.GetConnectionsOfCompositionLocal(F);let q=[];for(let H=0;H<W.length;H++)q.includes(W[H].ofTheConceptId)||q.push(W[H].ofTheConceptId);let X=yield i.I.GetConcept(F);X.id==0&&F!=null&&F!=null&&(X=yield(0,_.r)(F)),new Date().getTime();let Z=yield function(H,ie,he){return h(this,arguments,void 0,function*(ne,Q,oe,ee=[]){var $,re,fe,ce,de,we,me,ye;let Ae={},Le=ne.id,ve=(new Date().getTime(),(re=($=ne?.type)===null||$===void 0?void 0:$.characterValue)!==null&&re!==void 0?re:"");if(!oe.includes(Le))return{[ve]:ne?.characterValue};if(ee.includes(Le))return"";ee.push(Le);for(let Te=0;Te<Q.length;Te++){let pe=yield(0,w.GetTheConcept)(Q[Te].ofTheConceptId),ke=yield(0,w.GetTheConcept)(Q[Te].toTheConceptId);Q[Te].ofConcept=pe,Q[Te].toConcept=ke;let Ee=pe.id,Ne="the_",be=((ce=(fe=ke?.type)===null||fe===void 0?void 0:fe.characterValue)!==null&&ce!==void 0?ce:"").replace(Ne,"");Ae[Ee]!=null&&Ae[Ee]!=null||(Ae[Ee]={}),Ae[Ee][be]=ke.characterValue}let De={};for(let Te=0;Te<Q.length;Te++){let pe=Q[Te].ofConcept,ke=Q[Te].toConcept,Ee=(we=(de=pe?.type)===null||de===void 0?void 0:de.characterValue)!==null&&we!==void 0?we:"",Ne="the_",be=((ye=(me=ke?.type)===null||me===void 0?void 0:me.characterValue)!==null&&ye!==void 0?ye:"").replace(Ne,"");De[pe.id]!=null&&De[pe.id]!=null||(De[pe.id]={});let Be=De[pe.id];Be[Ee]!=null&&Be[Ee]!=null||(Be[Ee]={}),Ae[Q[Te].ofTheConceptId]!=null&&Ae[Q[Te].toTheConceptId]!=null?Be[Ee][be]=Ae[ke.id]:Be[Ee][be]=ke.characterValue}return De[ne.id]})}(X,W,q);(M=X?.type)===null||M===void 0||M.characterValue,j=Z;let ae={};return ae.created_at=X.entryTimeStamp,ae.data=j,ae.id=F,ae})}function b(F){return h(this,void 0,void 0,function*(){var M,W;if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetCompositionWithIdAndDateFromMemory",{id:F})).data}catch(ie){(0,w.handleServiceWorkerException)(ie)}let j=[],q={};j=yield f.d.GetConnectionsOfCompositionLocal(F);let X=[];for(let ie=0;ie<j.length;ie++)X.includes(j[ie].ofTheConceptId)||X.push(j[ie].ofTheConceptId);let Z=yield i.I.GetConcept(F);Z.id==0&&F!=null&&F!=null&&(Z=yield(0,_.r)(F));let ae=yield R(F,j,X);q[(W=(M=Z?.type)===null||M===void 0?void 0:M.characterValue)!==null&&W!==void 0?W:""]=ae;let H={};return H.data=q,H.id=F,H.created_at=Z.entryTimeStamp,H})}function L(F){var M=arguments;return h(this,void 0,void 0,function*(){var W,j;const q=w.Logger.logfunction("GetCompositionWithId",M)||{};if(w.serviceWorker){q.serviceWorker=!0;try{const ne=yield(0,w.sendMessage)("GetCompositionWithId",{id:F});return w.Logger.logUpdate(q),ne.data}catch(ne){(0,k.ey)(q,"GetCompositionWithId",ne),(0,w.handleServiceWorkerException)(ne)}}let X=[],Z={};X=yield(0,N.s)(F);let ae=[];for(let ne=0;ne<X.length;ne++)ae.includes(X[ne].ofTheConceptId)||ae.push(X[ne].ofTheConceptId);let H=yield i.I.GetConcept(F);H.id==0&&F!=null&&F!=null&&(H=yield(0,_.r)(F));let ie=yield R(F,X,ae);Z[(j=(W=H?.type)===null||W===void 0?void 0:W.characterValue)!==null&&j!==void 0?j:""]=ie;let he={};return he.data=Z,he.id=F,w.Logger.logUpdate(q),he})}function S(F,M,W){return h(this,arguments,void 0,function*(j,q,X,Z=[]){var ae,H,ie;let he={},ne=[],Q=j.id;if((ae=j?.type)===null||ae===void 0||ae.characterValue,!X.includes(Q))return j?.characterValue;if(Z.includes(Q))return"";Z.push(Q);for(let oe=0;oe<q.length;oe++)if(q[oe].ofTheConceptId==Q&&Q!=q[oe].toTheConceptId){let ee=q[oe].toTheConceptId,$=yield i.I.GetConcept(ee);if(($==null||$.id==0)&&ee!=null&&ee!=null&&($=yield(0,_.r)(ee)),$.id!=0&&$?.type==null){let ce=$.typeId,de=yield i.I.GetConcept(ce);$.type=de,de==null&&ce!=null&&ce!=null&&(de=yield(0,_.r)(ce),$.type=de)}let re="the_",fe=((ie=(H=$?.type)===null||H===void 0?void 0:H.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(fe))){if(fe){const ce=yield S($,q,X,Z);he[fe]=ce}}else{const ce=yield S($,q,X,Z);ne[fe]=ce,he=ne}}return he})}function E(F,M,W){return h(this,arguments,void 0,function*(j,q,X,Z=[]){var ae,H,ie;const he=w.Logger.logfunction("recursiveFetchConceptNormal",[j]);new Date().getTime();let ne={},Q=[],oe=j.id;if(ne.id=oe,(ae=j?.type)===null||ae===void 0||ae.characterValue,!X.includes(oe))return j?.characterValue;if(Z.includes(oe))return"";Z.push(oe);for(let ee=0;ee<q.length;ee++)if(q[ee].ofTheConceptId==oe&&oe!=q[ee].toTheConceptId){let $=q[ee].toTheConceptId,re=yield i.I.GetConcept($);if((re==null||re.id==0)&&$!=null&&$!=null&&(re=yield(0,_.r)($)),re.id!=0&&re?.type==null){let de=re.typeId,we=yield i.I.GetConcept(de);re.type=we,we==null&&de!=null&&de!=null&&(we=yield(0,_.r)(de),re.type=we)}let fe="the_",ce=((ie=(H=re?.type)===null||H===void 0?void 0:H.characterValue)!==null&&ie!==void 0?ie:"").replace(fe,"");if(isNaN(Number(ce))){if(ce){const de=yield S(re,q,X,Z);ne[ce]=de}}else{const de=yield S(re,q,X,Z);Q[ce]=de,ne=Q}}return w.Logger.logUpdate(he),ne})}function R(F,M,W){return h(this,arguments,void 0,function*(j,q,X,Z=[]){var ae,H,ie;let he={},ne=[];if(j==0)return null;let Q=yield i.I.GetConcept(j);if((Q==null||Q.id==0)&&j!=null&&j!=null&&(Q=yield(0,_.r)(j)),Q.id!=0&&Q.type==null){let oe=Q.typeId,ee=yield i.I.GetConcept(oe);Q.type=ee,ee==null&&oe!=null&&oe!=null&&(ee=yield(0,_.r)(oe),Q.type=ee)}if((ae=Q?.type)===null||ae===void 0||ae.characterValue,!X.includes(j))return Q?.characterValue;if(Z.includes(j))return"";Z.push(j);for(let oe=0;oe<q.length;oe++)if(new Date().getTime(),q[oe].ofTheConceptId==j&&j!=q[oe].toTheConceptId){let ee=q[oe].toTheConceptId,$=yield i.I.GetConcept(ee);if(($==null||$.id==0)&&ee!=null&&ee!=null&&($=yield(0,_.r)(ee)),$.id!=0&&$?.type==null){let ce=$.typeId,de=yield i.I.GetConcept(ce);$.type=de,de==null&&ce!=null&&ce!=null&&(de=yield(0,_.r)(ce),$.type=de)}let re="the_",fe=((ie=(H=$?.type)===null||H===void 0?void 0:H.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(fe))){if(fe){const ce=yield R(ee,q,X,Z);he[fe]=ce}}else{const ce=yield R(ee,q,X,Z);ne[fe]=ce,he=ne}}return he})}function U(F,M,W){return h(this,arguments,void 0,function*(j,q,X,Z=[]){var ae,H,ie;let he={},ne=[];if(j==0)return null;let Q=yield i.I.GetConcept(j);if((Q==null||Q.id==0)&&j!=null&&j!=null&&(Q=yield(0,_.r)(j)),Q.id!=0&&Q.type==null){let oe=Q.typeId,ee=yield i.I.GetConcept(oe);Q.type=ee,ee==null&&oe!=null&&oe!=null&&(ee=yield(0,_.r)(oe),Q.type=ee)}if((ae=Q?.type)===null||ae===void 0||ae.characterValue,!X.includes(j))return Q?.characterValue;if(Z.includes(j))return"";Z.push(j),he.id=j;for(let oe=0;oe<q.length;oe++)if(q[oe].ofTheConceptId==j){let ee=q[oe].toTheConceptId,$=yield i.I.GetConcept(ee);if(($==null||$.id==0)&&ee!=null&&ee!=null&&($=yield(0,_.r)(ee)),$&&$?.type==null){let ce=$.typeId,de=yield i.I.GetConcept(ce);$.type=de,de==null&&ce!=null&&ce!=null&&(de=yield(0,_.r)(ce),$.type=de)}let re="the_",fe=((ie=(H=$?.type)===null||H===void 0?void 0:H.characterValue)!==null&&ie!==void 0?ie:"").replace(re,"");if(isNaN(Number(fe))){if(fe){const ce=yield U(ee,q,X);he[fe]=ce}}else{const ce=yield U(ee,q,X);ne[fe]=ce,he=ne}}return he})}},4195:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _=w(v(8937)),N=v(9606),i=w(v(4646)),f=v(1581);function w(o){return o&&o.__esModule?o:{default:o}}function k(o,c){for(var p=0;p<c.length;p++){var C=c[p];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(o,C.key,C)}}function h(o,c){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,C){return p.__proto__=C,p},h(o,c)}var e=function(o){var c,p,C,T;function a(s){var n;return(n=o.call(this,s)||this).type=f.CLASS,n._constructed=!0,n}return p=o,(c=a).prototype=Object.create(p.prototype),c.prototype.constructor=c,h(c,p),a.prototype.valueToString=function(){return"."+o.prototype.valueToString.call(this)},C=a,(T=[{key:"value",get:function(){return this._value},set:function(s){if(this._constructed){var n=(0,_.default)(s,{isIdentifier:!0});n!==s?((0,N.ensureObject)(this,"raws"),this.raws.value=n):this.raws&&delete this.raws.value}this._value=s}}])&&k(C.prototype,T),Object.defineProperty(C,"prototype",{writable:!1}),a}(i.default);P.default=e,J.exports=P.default},4211:(J,P,v)=>{let _=v(3604),N=v(9577);const i=v(3717);let f=v(3303);v(6156);class w{get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let h,e=N;try{h=e(this._css,this._opts)}catch(o){this.error=o}if(this.error)throw this.error;return this._root=h,h}get[Symbol.toStringTag](){return"NoWorkResult"}constructor(h,e,o){let c;e=e.toString(),this.stringified=!1,this._processor=h,this._css=e,this._opts=o,this._map=void 0;let p=f;this.result=new i(this._processor,c,this._opts),this.result.css=e;let C=this;Object.defineProperty(this.result,"root",{get:()=>C.root});let T=new _(p,c,this._opts,e);if(T.isMap()){let[a,s]=T.generate();a&&(this.result.css=a),s&&(this.result.map=s)}else T.clearAnnotation(),this.result.css=T.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(h){return this.async().catch(h)}finally(h){return this.async().then(h,h)}sync(){if(this.error)throw this.error;return this.result}then(h,e){return this.async().then(h,e)}toString(){return this._css}warnings(){return[]}}J.exports=w,w.default=w},4238:(J,P,v)=>{v.d(P,{i:()=>w});var _=v(6288),N=v(9789),i=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})},f=function(k,h){var e={};for(var o in k)Object.prototype.hasOwnProperty.call(k,o)&&h.indexOf(o)<0&&(e[o]=k[o]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(o=Object.getOwnPropertySymbols(k);c<o.length;c++)h.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(k,o[c])&&(e[o[c]]=k[o[c]])}return e};class w{static init(){return i(this,void 0,void 0,function*(){if(N.B.getValue("enableCache",!0))try{const[h,e,o]=yield Promise.all([(0,_.ou)(_.L2),(0,_.ou)(_.Ou),(0,_.ou)(_.cL)]);for(const c of h)if(c&&c.id!=null){const{id:p}=c,C=f(c,["id"]);this.widgetMap.set(p,C)}for(const c of e)if(c&&c.id!=null){const{id:p}=c,C=f(c,["id"]);this.latestMap.set(p,C)}for(const c of o)if(c&&c.id!=null){const{id:p}=c,C=f(c,["id"]);this.recentMap.set(p,C)}}catch{}})}static getWidget(h){var e;return N.B.getValue("enableCache",!0)&&(e=this.widgetMap.get(h))!==null&&e!==void 0?e:null}static setWidget(h,e){N.B.getValue("enableCache",!0)&&(this._isDuplicate(this.widgetMap,h,e)||(this.widgetMap.set(h,e),(0,_.eH)(_.L2,Object.assign({id:h},e)).catch(()=>{})))}static removeWidget(h){this.widgetMap.delete(h),(0,_.kM)(_.L2,h).catch(()=>{})}static getLatest(h){var e;return N.B.getValue("enableCache",!0)&&(e=this.latestMap.get(h))!==null&&e!==void 0?e:null}static setLatest(h,e){N.B.getValue("enableCache",!0)&&(this._isDuplicate(this.latestMap,h,e)||(this.latestMap.set(h,e),(0,_.eH)(_.Ou,Object.assign({id:h},e)).catch(()=>{})))}static removeLatest(h){this.latestMap.delete(h),(0,_.kM)(_.Ou,h).catch(()=>{})}static getRecent(h){var e;return N.B.getValue("enableCache",!0)&&(e=this.recentMap.get(h))!==null&&e!==void 0?e:null}static setRecent(h,e){N.B.getValue("enableCache",!0)&&(this._isDuplicate(this.recentMap,h,e)||(this.recentMap.set(h,e),(0,_.eH)(_.cL,Object.assign({id:h},e)).catch(()=>{})))}static removeRecent(h){this.recentMap.delete(h),(0,_.kM)(_.cL,h).catch(()=>{})}static clearAll(){this.widgetMap.clear(),this.latestMap.clear(),this.recentMap.clear(),Promise.all([(0,_.sg)(_.L2),(0,_.sg)(_.Ou),(0,_.sg)(_.cL)]).catch(()=>{})}static _isDuplicate(h,e,o){const c=h.get(e);return!!c&&JSON.stringify(c)===JSON.stringify(o)}}w.widgetMap=new Map,w.latestMap=new Map,w.recentMap=new Map},4437:(J,P,v)=>{v.d(P,{B:()=>w});var _=v(8429),N=v(6715),i=v(5760),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,h||[])).next())})};function w(){return f(this,arguments,void 0,function*(k=[]){const h=_.Logger.logfunction("FindConnectionsOfCompositionsBulkInMemory",[k.length])||{};let e=[];try{if(_.serviceWorker){h.serviceWorker=!0;try{const o=yield(0,_.sendMessage)("FindConnectionsOfCompositionsBulkInMemory",{composition_ids:k});return _.Logger.logUpdate(h),o.data}catch(o){(0,i.ey)(h,"FindConnectionsOfCompositionsBulkInMemory",o),(0,_.handleServiceWorkerException)(o)}}for(let o=0;o<k.length;o++){let c=yield N.d.GetConnectionsOfConcept(k[o]);e.push(...c)}return _.Logger.logUpdate(h),e}catch(o){return(0,i.ey)(h,"FindConnectionsOfCompositionsBulkInMemory",o),e}})}},4451:(J,P,v)=>{P.__esModule=!0,P.universal=P.tag=P.string=P.selector=P.root=P.pseudo=P.nesting=P.id=P.comment=P.combinator=P.className=P.attribute=void 0;var _=T(v(5588)),N=T(v(4195)),i=T(v(1704)),f=T(v(425)),w=T(v(7071)),k=T(v(2918)),h=T(v(7324)),e=T(v(518)),o=T(v(339)),c=T(v(5799)),p=T(v(9720)),C=T(v(1669));function T(a){return a&&a.__esModule?a:{default:a}}P.attribute=function(a){return new _.default(a)},P.className=function(a){return new N.default(a)},P.combinator=function(a){return new i.default(a)},P.comment=function(a){return new f.default(a)},P.id=function(a){return new w.default(a)},P.nesting=function(a){return new k.default(a)},P.pseudo=function(a){return new h.default(a)},P.root=function(a){return new e.default(a)},P.selector=function(a){return new o.default(a)},P.string=function(a){return new c.default(a)},P.tag=function(a){return new p.default(a)},P.universal=function(a){return new C.default(a)}},4622:(J,P,v)=>{v.d(P,{j:()=>o});var _=v(6715),N=v(370),i=v(2371),f=v(1317),w=v(5760),k=v(8429),h=v(3693),e=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,p||[])).next())})};function o(){return e(this,arguments,void 0,function*(c=[]){const p=k.Logger.logfunction("GetConnectionBulk",c.length)||{};let C=[];try{if(k.serviceWorker){p.serviceWorker=!0;try{const T=yield(0,k.sendMessage)("GetConnectionBulk",{connectionIds:c});return k.Logger.logUpdate(p),T.data}catch(T){(0,w.ey)(p,"GetConnectionBulk",T),(0,k.handleServiceWorkerException)(T)}}if(c.length>0){let T=[];for(let a=0;a<c.length;a++)if(!_.d.GetNpConn(c[a])){let s=yield _.d.GetConnection(c[a]);s.id==0?T.push(c[a]):C.push(s)}if(T.length==0)return k.Logger.logUpdate(p),C;{let a;const s={method:"POST",headers:(0,f.Xr)("application/json"),body:JSON.stringify(T)};try{a=yield fetch(N.B.GetConnectionBulkUrl(),s)}catch{a=yield(0,h.g)(s,"/api/get_connection_bulk")}yield function(n,d,g){return e(this,void 0,void 0,function*(){if(n.ok){const y=yield n.json();if(y.length>0)for(let b=0;b<y.length;b++){let L=y[b];d.push(L),_.d.AddConnection(L)}}else(0,w.ey)(g,"GetConnectionBulk",n.status),(0,w.ry)(n)})}(a,C,p),k.Logger.logUpdate(p)}}}catch(T){(0,w.ey)(p,"GetConnectionBulk",T),(0,w.Mb)(T,N.B.GetConnectionBulkUrl())}return yield(0,i.s)(C),C})}},4643:(J,P,v)=>{function _(N){try{if(!v.g.localStorage)return!1}catch{return!1}var i=v.g.localStorage[N];return i!=null&&String(i).toLowerCase()==="true"}J.exports=function(N,i){if(_("noDeprecation"))return N;var f=!1;return function(){if(!f){if(_("throwDeprecation"))throw new Error(i);_("traceDeprecation"),f=!0}return N.apply(this,arguments)}}},4646:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _=v(9606);function N(w,k){for(var h=0;h<k.length;h++){var e=k[h];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(w,e.key,e)}}var i=function w(k,h){if(typeof k!="object"||k===null)return k;var e=new k.constructor;for(var o in k)if(k.hasOwnProperty(o)){var c=k[o];o==="parent"&&typeof c=="object"?h&&(e[o]=h):e[o]=c instanceof Array?c.map(function(p){return w(p,e)}):w(c,e)}return e},f=function(){function w(o){o===void 0&&(o={}),Object.assign(this,o),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var k,h,e=w.prototype;return e.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},e.replaceWith=function(){if(this.parent){for(var o in arguments)this.parent.insertBefore(this,arguments[o]);this.remove()}return this},e.next=function(){return this.parent.at(this.parent.index(this)+1)},e.prev=function(){return this.parent.at(this.parent.index(this)-1)},e.clone=function(o){o===void 0&&(o={});var c=i(this);for(var p in o)c[p]=o[p];return c},e.appendToPropertyAndEscape=function(o,c,p){this.raws||(this.raws={});var C=this[o],T=this.raws[o];this[o]=C+c,T||p!==c?this.raws[o]=(T||C)+p:delete this.raws[o]},e.setPropertyAndEscape=function(o,c,p){this.raws||(this.raws={}),this[o]=c,this.raws[o]=p},e.setPropertyWithoutEscape=function(o,c){this[o]=c,this.raws&&delete this.raws[o]},e.isAtPosition=function(o,c){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>o)&&!(this.source.end.line<o)&&!(this.source.start.line===o&&this.source.start.column>c)&&!(this.source.end.line===o&&this.source.end.column<c)},e.stringifyProperty=function(o){return this.raws&&this.raws[o]||this[o]},e.valueToString=function(){return String(this.stringifyProperty("value"))},e.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},k=w,(h=[{key:"rawSpaceBefore",get:function(){var o=this.raws&&this.raws.spaces&&this.raws.spaces.before;return o===void 0&&(o=this.spaces&&this.spaces.before),o||""},set:function(o){(0,_.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=o}},{key:"rawSpaceAfter",get:function(){var o=this.raws&&this.raws.spaces&&this.raws.spaces.after;return o===void 0&&(o=this.spaces.after),o||""},set:function(o){(0,_.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=o}}])&&N(k.prototype,h),Object.defineProperty(k,"prototype",{writable:!1}),w}();P.default=f,J.exports=P.default},4647:(J,P,v)=>{v.d(P,{W:()=>w});var _=v(5760),N=v(1317),i=v(8429),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};function w(k){var h=arguments;return f(this,void 0,void 0,function*(){const e=i.Logger.logfunction("GetAllLinkerConnectionsToTheConcept",h);var o=[];try{new Date().getTime();var c=(0,N.Xr)("application/x-www-form-urlencoded");const T=yield fetch(i.BaseUrl.GetAllLinkerConnectionToConceptUrl()+`?conceptId=${k}`,{method:"GET",headers:c});if(T.ok){const a=yield T.json();for(var p=0;p<a.length;p++){var C=a[p];o.push(C)}i.Logger.logUpdate(e)}else(0,_.ry)(T)}catch(T){(0,_.Mb)(T,i.BaseUrl.GetAllLinkerConnectionToConceptUrl()),(0,_.ey)(e,"GetAllLinkerConnectionsToTheConcept",T)}return o})}},4990:(J,P,v)=>{v.d(P,{N:()=>i});var _=v(6047),N=v(370);class i{constructor(w=0,k,h,e,o,c,p){this.count=0,this.isTemp=!1,this.toUpdate=!1,this.applicationId=N.B.getRandomizer(),this.type=(0,_.o)(),this.ofConcept=(0,_.o)(),this.toConcept=(0,_.o)(),this.id=w,this.ofTheConceptId=k,this.toTheConceptId=h,this.userId=e,this.typeId=o,this.ghostId=w,this.orderId=c,this.accessId=p,this.entryTimeStamp=(0,_.Y)(new Date),this.terminationDateTime=new Date,this.localSyncTime=new Date,this.typeCharacter=""}}},5042:J=>{J.exports={nanoid:(P=21)=>{let v="",_=0|P;for(;_--;)v+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return v},customAlphabet:(P,v=21)=>(_=v)=>{let N="",i=0|_;for(;i--;)N+=P[Math.random()*P.length|0];return N}}},5170:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N,i=S(v(518)),f=S(v(339)),w=S(v(4195)),k=S(v(425)),h=S(v(7071)),e=S(v(9720)),o=S(v(5799)),c=S(v(7324)),p=L(v(5588)),C=S(v(1669)),T=S(v(1704)),a=S(v(2918)),s=S(v(263)),n=L(v(2648)),d=L(v(71)),g=L(v(1581)),y=v(9606);function b(H){if(typeof WeakMap!="function")return null;var ie=new WeakMap,he=new WeakMap;return(b=function(ne){return ne?he:ie})(H)}function L(H,ie){if(H&&H.__esModule)return H;if(H===null||typeof H!="object"&&typeof H!="function")return{default:H};var he=b(ie);if(he&&he.has(H))return he.get(H);var ne={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var oe in H)if(oe!=="default"&&Object.prototype.hasOwnProperty.call(H,oe)){var ee=Q?Object.getOwnPropertyDescriptor(H,oe):null;ee&&(ee.get||ee.set)?Object.defineProperty(ne,oe,ee):ne[oe]=H[oe]}return ne.default=H,he&&he.set(H,ne),ne}function S(H){return H&&H.__esModule?H:{default:H}}function E(H,ie){for(var he=0;he<ie.length;he++){var ne=ie[he];ne.enumerable=ne.enumerable||!1,ne.configurable=!0,"value"in ne&&(ne.writable=!0),Object.defineProperty(H,ne.key,ne)}}var R=((_={})[d.space]=!0,_[d.cr]=!0,_[d.feed]=!0,_[d.newline]=!0,_[d.tab]=!0,_),U=Object.assign({},R,((N={})[d.comment]=!0,N));function F(H){return{line:H[n.FIELDS.START_LINE],column:H[n.FIELDS.START_COL]}}function M(H){return{line:H[n.FIELDS.END_LINE],column:H[n.FIELDS.END_COL]}}function W(H,ie,he,ne){return{start:{line:H,column:ie},end:{line:he,column:ne}}}function j(H){return W(H[n.FIELDS.START_LINE],H[n.FIELDS.START_COL],H[n.FIELDS.END_LINE],H[n.FIELDS.END_COL])}function q(H,ie){if(H)return W(H[n.FIELDS.START_LINE],H[n.FIELDS.START_COL],ie[n.FIELDS.END_LINE],ie[n.FIELDS.END_COL])}function X(H,ie){var he=H[ie];if(typeof he=="string")return he.indexOf("\\")!==-1&&((0,y.ensureObject)(H,"raws"),H[ie]=(0,y.unesc)(he),H.raws[ie]===void 0&&(H.raws[ie]=he)),H}function Z(H,ie){for(var he=-1,ne=[];(he=H.indexOf(ie,he+1))!==-1;)ne.push(he);return ne}var ae=function(){function H(Q,oe){oe===void 0&&(oe={}),this.rule=Q,this.options=Object.assign({lossy:!1,safe:!1},oe),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,n.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var ee=q(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new i.default({source:ee}),this.root.errorGenerator=this._errorGenerator();var $=new f.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append($),this.current=$,this.loop()}var ie,he,ne=H.prototype;return ne._errorGenerator=function(){var Q=this;return function(oe,ee){return typeof Q.rule=="string"?new Error(oe):Q.rule.error(oe,ee)}},ne.attribute=function(){var Q=[],oe=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[n.FIELDS.TYPE]!==d.closeSquare;)Q.push(this.currToken),this.position++;if(this.currToken[n.FIELDS.TYPE]!==d.closeSquare)return this.expected("closing square bracket",this.currToken[n.FIELDS.START_POS]);var ee=Q.length,$={source:W(oe[1],oe[2],this.currToken[3],this.currToken[4]),sourceIndex:oe[n.FIELDS.START_POS]};if(ee===1&&!~[d.word].indexOf(Q[0][n.FIELDS.TYPE]))return this.expected("attribute",Q[0][n.FIELDS.START_POS]);for(var re=0,fe="",ce="",de=null,we=!1;re<ee;){var me=Q[re],ye=this.content(me),Ae=Q[re+1];switch(me[n.FIELDS.TYPE]){case d.space:if(we=!0,this.options.lossy)break;if(de){(0,y.ensureObject)($,"spaces",de);var Le=$.spaces[de].after||"";$.spaces[de].after=Le+ye;var ve=(0,y.getProp)($,"raws","spaces",de,"after")||null;ve&&($.raws.spaces[de].after=ve+ye)}else fe+=ye,ce+=ye;break;case d.asterisk:Ae[n.FIELDS.TYPE]===d.equals?($.operator=ye,de="operator"):(!$.namespace||de==="namespace"&&!we)&&Ae&&(fe&&((0,y.ensureObject)($,"spaces","attribute"),$.spaces.attribute.before=fe,fe=""),ce&&((0,y.ensureObject)($,"raws","spaces","attribute"),$.raws.spaces.attribute.before=fe,ce=""),$.namespace=($.namespace||"")+ye,(0,y.getProp)($,"raws","namespace")&&($.raws.namespace+=ye),de="namespace"),we=!1;break;case d.dollar:if(de==="value"){var De=(0,y.getProp)($,"raws","value");$.value+="$",De&&($.raws.value=De+"$");break}case d.caret:Ae[n.FIELDS.TYPE]===d.equals&&($.operator=ye,de="operator"),we=!1;break;case d.combinator:if(ye==="~"&&Ae[n.FIELDS.TYPE]===d.equals&&($.operator=ye,de="operator"),ye!=="|"){we=!1;break}Ae[n.FIELDS.TYPE]===d.equals?($.operator=ye,de="operator"):$.namespace||$.attribute||($.namespace=!0),we=!1;break;case d.word:if(Ae&&this.content(Ae)==="|"&&Q[re+2]&&Q[re+2][n.FIELDS.TYPE]!==d.equals&&!$.operator&&!$.namespace)$.namespace=ye,de="namespace";else if(!$.attribute||de==="attribute"&&!we)fe&&((0,y.ensureObject)($,"spaces","attribute"),$.spaces.attribute.before=fe,fe=""),ce&&((0,y.ensureObject)($,"raws","spaces","attribute"),$.raws.spaces.attribute.before=ce,ce=""),$.attribute=($.attribute||"")+ye,(0,y.getProp)($,"raws","attribute")&&($.raws.attribute+=ye),de="attribute";else if(!$.value&&$.value!==""||de==="value"&&!we&&!$.quoteMark){var Te=(0,y.unesc)(ye),pe=(0,y.getProp)($,"raws","value")||"",ke=$.value||"";$.value=ke+Te,$.quoteMark=null,(Te!==ye||pe)&&((0,y.ensureObject)($,"raws"),$.raws.value=(pe||ke)+ye),de="value"}else{var Ee=ye==="i"||ye==="I";!$.value&&$.value!==""||!$.quoteMark&&!we?($.value||$.value==="")&&(de="value",$.value+=ye,$.raws.value&&($.raws.value+=ye)):($.insensitive=Ee,Ee&&ye!=="I"||((0,y.ensureObject)($,"raws"),$.raws.insensitiveFlag=ye),de="insensitive",fe&&((0,y.ensureObject)($,"spaces","insensitive"),$.spaces.insensitive.before=fe,fe=""),ce&&((0,y.ensureObject)($,"raws","spaces","insensitive"),$.raws.spaces.insensitive.before=ce,ce=""))}we=!1;break;case d.str:if(!$.attribute||!$.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:me[n.FIELDS.START_POS]});var Ne=(0,p.unescapeValue)(ye),be=Ne.unescaped,Be=Ne.quoteMark;$.value=be,$.quoteMark=Be,de="value",(0,y.ensureObject)($,"raws"),$.raws.value=ye,we=!1;break;case d.equals:if(!$.attribute)return this.expected("attribute",me[n.FIELDS.START_POS],ye);if($.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:me[n.FIELDS.START_POS]});$.operator=$.operator?$.operator+ye:ye,de="operator",we=!1;break;case d.comment:if(de)if(we||Ae&&Ae[n.FIELDS.TYPE]===d.space||de==="insensitive"){var Re=(0,y.getProp)($,"spaces",de,"after")||"",Fe=(0,y.getProp)($,"raws","spaces",de,"after")||Re;(0,y.ensureObject)($,"raws","spaces",de),$.raws.spaces[de].after=Fe+ye}else{var xe=$[de]||"",$e=(0,y.getProp)($,"raws",de)||xe;(0,y.ensureObject)($,"raws"),$.raws[de]=$e+ye}else ce+=ye;break;default:return this.error('Unexpected "'+ye+'" found.',{index:me[n.FIELDS.START_POS]})}re++}X($,"attribute"),X($,"namespace"),this.newNode(new p.default($)),this.position++},ne.parseWhitespaceEquivalentTokens=function(Q){Q<0&&(Q=this.tokens.length);var oe=this.position,ee=[],$="",re=void 0;do if(R[this.currToken[n.FIELDS.TYPE]])this.options.lossy||($+=this.content());else if(this.currToken[n.FIELDS.TYPE]===d.comment){var fe={};$&&(fe.before=$,$=""),re=new k.default({value:this.content(),source:j(this.currToken),sourceIndex:this.currToken[n.FIELDS.START_POS],spaces:fe}),ee.push(re)}while(++this.position<Q);if($){if(re)re.spaces.after=$;else if(!this.options.lossy){var ce=this.tokens[oe],de=this.tokens[this.position-1];ee.push(new o.default({value:"",source:W(ce[n.FIELDS.START_LINE],ce[n.FIELDS.START_COL],de[n.FIELDS.END_LINE],de[n.FIELDS.END_COL]),sourceIndex:ce[n.FIELDS.START_POS],spaces:{before:$,after:""}}))}}return ee},ne.convertWhitespaceNodesToSpace=function(Q,oe){var ee=this;oe===void 0&&(oe=!1);var $="",re="";return Q.forEach(function(fe){var ce=ee.lossySpace(fe.spaces.before,oe),de=ee.lossySpace(fe.rawSpaceBefore,oe);$+=ce+ee.lossySpace(fe.spaces.after,oe&&ce.length===0),re+=ce+fe.value+ee.lossySpace(fe.rawSpaceAfter,oe&&de.length===0)}),re===$&&(re=void 0),{space:$,rawSpace:re}},ne.isNamedCombinator=function(Q){return Q===void 0&&(Q=this.position),this.tokens[Q+0]&&this.tokens[Q+0][n.FIELDS.TYPE]===d.slash&&this.tokens[Q+1]&&this.tokens[Q+1][n.FIELDS.TYPE]===d.word&&this.tokens[Q+2]&&this.tokens[Q+2][n.FIELDS.TYPE]===d.slash},ne.namedCombinator=function(){if(this.isNamedCombinator()){var Q=this.content(this.tokens[this.position+1]),oe=(0,y.unesc)(Q).toLowerCase(),ee={};oe!==Q&&(ee.value="/"+Q+"/");var $=new T.default({value:"/"+oe+"/",source:W(this.currToken[n.FIELDS.START_LINE],this.currToken[n.FIELDS.START_COL],this.tokens[this.position+2][n.FIELDS.END_LINE],this.tokens[this.position+2][n.FIELDS.END_COL]),sourceIndex:this.currToken[n.FIELDS.START_POS],raws:ee});return this.position=this.position+3,$}this.unexpected()},ne.combinator=function(){var Q=this;if(this.content()==="|")return this.namespace();var oe=this.locateNextMeaningfulToken(this.position);if(!(oe<0||this.tokens[oe][n.FIELDS.TYPE]===d.comma||this.tokens[oe][n.FIELDS.TYPE]===d.closeParenthesis)){var ee,$=this.currToken,re=void 0;if(oe>this.position&&(re=this.parseWhitespaceEquivalentTokens(oe)),this.isNamedCombinator()?ee=this.namedCombinator():this.currToken[n.FIELDS.TYPE]===d.combinator?(ee=new T.default({value:this.content(),source:j(this.currToken),sourceIndex:this.currToken[n.FIELDS.START_POS]}),this.position++):R[this.currToken[n.FIELDS.TYPE]]||re||this.unexpected(),ee){if(re){var fe=this.convertWhitespaceNodesToSpace(re),ce=fe.space,de=fe.rawSpace;ee.spaces.before=ce,ee.rawSpaceBefore=de}}else{var we=this.convertWhitespaceNodesToSpace(re,!0),me=we.space,ye=we.rawSpace;ye||(ye=me);var Ae={},Le={spaces:{}};me.endsWith(" ")&&ye.endsWith(" ")?(Ae.before=me.slice(0,me.length-1),Le.spaces.before=ye.slice(0,ye.length-1)):me.startsWith(" ")&&ye.startsWith(" ")?(Ae.after=me.slice(1),Le.spaces.after=ye.slice(1)):Le.value=ye,ee=new T.default({value:" ",source:q($,this.tokens[this.position-1]),sourceIndex:$[n.FIELDS.START_POS],spaces:Ae,raws:Le})}return this.currToken&&this.currToken[n.FIELDS.TYPE]===d.space&&(ee.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(ee)}var ve=this.parseWhitespaceEquivalentTokens(oe);if(ve.length>0){var De=this.current.last;if(De){var Te=this.convertWhitespaceNodesToSpace(ve),pe=Te.space,ke=Te.rawSpace;ke!==void 0&&(De.rawSpaceAfter+=ke),De.spaces.after+=pe}else ve.forEach(function(Ee){return Q.newNode(Ee)})}},ne.comma=function(){if(this.position===this.tokens.length-1)return this.root.trailingComma=!0,void this.position++;this.current._inferEndPosition();var Q=new f.default({source:{start:F(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][n.FIELDS.START_POS]});this.current.parent.append(Q),this.current=Q,this.position++},ne.comment=function(){var Q=this.currToken;this.newNode(new k.default({value:this.content(),source:j(Q),sourceIndex:Q[n.FIELDS.START_POS]})),this.position++},ne.error=function(Q,oe){throw this.root.error(Q,oe)},ne.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[n.FIELDS.START_POS]})},ne.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[n.FIELDS.START_POS])},ne.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[n.FIELDS.START_POS])},ne.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[n.FIELDS.START_POS])},ne.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[n.FIELDS.START_POS])},ne.namespace=function(){var Q=this.prevToken&&this.content(this.prevToken)||!0;return this.nextToken[n.FIELDS.TYPE]===d.word?(this.position++,this.word(Q)):this.nextToken[n.FIELDS.TYPE]===d.asterisk?(this.position++,this.universal(Q)):void this.unexpectedPipe()},ne.nesting=function(){if(this.nextToken&&this.content(this.nextToken)==="|")return void this.position++;var Q=this.currToken;this.newNode(new a.default({value:this.content(),source:j(Q),sourceIndex:Q[n.FIELDS.START_POS]})),this.position++},ne.parentheses=function(){var Q=this.current.last,oe=1;if(this.position++,Q&&Q.type===g.PSEUDO){var ee=new f.default({source:{start:F(this.tokens[this.position])},sourceIndex:this.tokens[this.position][n.FIELDS.START_POS]}),$=this.current;for(Q.append(ee),this.current=ee;this.position<this.tokens.length&&oe;)this.currToken[n.FIELDS.TYPE]===d.openParenthesis&&oe++,this.currToken[n.FIELDS.TYPE]===d.closeParenthesis&&oe--,oe?this.parse():(this.current.source.end=M(this.currToken),this.current.parent.source.end=M(this.currToken),this.position++);this.current=$}else{for(var re,fe=this.currToken,ce="(";this.position<this.tokens.length&&oe;)this.currToken[n.FIELDS.TYPE]===d.openParenthesis&&oe++,this.currToken[n.FIELDS.TYPE]===d.closeParenthesis&&oe--,re=this.currToken,ce+=this.parseParenthesisToken(this.currToken),this.position++;Q?Q.appendToPropertyAndEscape("value",ce,ce):this.newNode(new o.default({value:ce,source:W(fe[n.FIELDS.START_LINE],fe[n.FIELDS.START_COL],re[n.FIELDS.END_LINE],re[n.FIELDS.END_COL]),sourceIndex:fe[n.FIELDS.START_POS]}))}if(oe)return this.expected("closing parenthesis",this.currToken[n.FIELDS.START_POS])},ne.pseudo=function(){for(var Q=this,oe="",ee=this.currToken;this.currToken&&this.currToken[n.FIELDS.TYPE]===d.colon;)oe+=this.content(),this.position++;return this.currToken?this.currToken[n.FIELDS.TYPE]!==d.word?this.expected(["pseudo-class","pseudo-element"],this.currToken[n.FIELDS.START_POS]):void this.splitWord(!1,function($,re){oe+=$,Q.newNode(new c.default({value:oe,source:q(ee,Q.currToken),sourceIndex:ee[n.FIELDS.START_POS]})),re>1&&Q.nextToken&&Q.nextToken[n.FIELDS.TYPE]===d.openParenthesis&&Q.error("Misplaced parenthesis.",{index:Q.nextToken[n.FIELDS.START_POS]})}):this.expected(["pseudo-class","pseudo-element"],this.position-1)},ne.space=function(){var Q=this.content();this.position===0||this.prevToken[n.FIELDS.TYPE]===d.comma||this.prevToken[n.FIELDS.TYPE]===d.openParenthesis||this.current.nodes.every(function(oe){return oe.type==="comment"})?(this.spaces=this.optionalSpace(Q),this.position++):this.position===this.tokens.length-1||this.nextToken[n.FIELDS.TYPE]===d.comma||this.nextToken[n.FIELDS.TYPE]===d.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(Q),this.position++):this.combinator()},ne.string=function(){var Q=this.currToken;this.newNode(new o.default({value:this.content(),source:j(Q),sourceIndex:Q[n.FIELDS.START_POS]})),this.position++},ne.universal=function(Q){var oe=this.nextToken;if(oe&&this.content(oe)==="|")return this.position++,this.namespace();var ee=this.currToken;this.newNode(new C.default({value:this.content(),source:j(ee),sourceIndex:ee[n.FIELDS.START_POS]}),Q),this.position++},ne.splitWord=function(Q,oe){for(var ee=this,$=this.nextToken,re=this.content();$&&~[d.dollar,d.caret,d.equals,d.word].indexOf($[n.FIELDS.TYPE]);){this.position++;var fe=this.content();if(re+=fe,fe.lastIndexOf("\\")===fe.length-1){var ce=this.nextToken;ce&&ce[n.FIELDS.TYPE]===d.space&&(re+=this.requiredSpace(this.content(ce)),this.position++)}$=this.nextToken}var de=Z(re,".").filter(function(Ae){var Le=re[Ae-1]==="\\",ve=/^\d+\.\d+%$/.test(re);return!Le&&!ve}),we=Z(re,"#").filter(function(Ae){return re[Ae-1]!=="\\"}),me=Z(re,"#{");me.length&&(we=we.filter(function(Ae){return!~me.indexOf(Ae)}));var ye=(0,s.default)(function(){var Ae=Array.prototype.concat.apply([],arguments);return Ae.filter(function(Le,ve){return ve===Ae.indexOf(Le)})}([0].concat(de,we)));ye.forEach(function(Ae,Le){var ve,De=ye[Le+1]||re.length,Te=re.slice(Ae,De);if(Le===0&&oe)return oe.call(ee,Te,ye.length);var pe=ee.currToken,ke=pe[n.FIELDS.START_POS]+ye[Le],Ee=W(pe[1],pe[2]+Ae,pe[3],pe[2]+(De-1));if(~de.indexOf(Ae)){var Ne={value:Te.slice(1),source:Ee,sourceIndex:ke};ve=new w.default(X(Ne,"value"))}else if(~we.indexOf(Ae)){var be={value:Te.slice(1),source:Ee,sourceIndex:ke};ve=new h.default(X(be,"value"))}else{var Be={value:Te,source:Ee,sourceIndex:ke};X(Be,"value"),ve=new e.default(Be)}ee.newNode(ve,Q),Q=null}),this.position++},ne.word=function(Q){var oe=this.nextToken;return oe&&this.content(oe)==="|"?(this.position++,this.namespace()):this.splitWord(Q)},ne.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},ne.parse=function(Q){switch(this.currToken[n.FIELDS.TYPE]){case d.space:this.space();break;case d.comment:this.comment();break;case d.openParenthesis:this.parentheses();break;case d.closeParenthesis:Q&&this.missingParenthesis();break;case d.openSquare:this.attribute();break;case d.dollar:case d.caret:case d.equals:case d.word:this.word();break;case d.colon:this.pseudo();break;case d.comma:this.comma();break;case d.asterisk:this.universal();break;case d.ampersand:this.nesting();break;case d.slash:case d.combinator:this.combinator();break;case d.str:this.string();break;case d.closeSquare:this.missingSquareBracket();case d.semicolon:this.missingBackslash();default:this.unexpected()}},ne.expected=function(Q,oe,ee){if(Array.isArray(Q)){var $=Q.pop();Q=Q.join(", ")+" or "+$}var re=/^[aeiou]/.test(Q[0])?"an":"a";return ee?this.error("Expected "+re+" "+Q+', found "'+ee+'" instead.',{index:oe}):this.error("Expected "+re+" "+Q+".",{index:oe})},ne.requiredSpace=function(Q){return this.options.lossy?" ":Q},ne.optionalSpace=function(Q){return this.options.lossy?"":Q},ne.lossySpace=function(Q,oe){return this.options.lossy?oe?" ":"":Q},ne.parseParenthesisToken=function(Q){var oe=this.content(Q);return Q[n.FIELDS.TYPE]===d.space?this.requiredSpace(oe):oe},ne.newNode=function(Q,oe){return oe&&(/^ +$/.test(oe)&&(this.options.lossy||(this.spaces=(this.spaces||"")+oe),oe=!0),Q.namespace=oe,X(Q,"namespace")),this.spaces&&(Q.spaces.before=this.spaces,this.spaces=""),this.current.append(Q)},ne.content=function(Q){return Q===void 0&&(Q=this.currToken),this.css.slice(Q[n.FIELDS.START_POS],Q[n.FIELDS.END_POS])},ne.locateNextMeaningfulToken=function(Q){Q===void 0&&(Q=this.position+1);for(var oe=Q;oe<this.tokens.length;){if(!U[this.tokens[oe][n.FIELDS.TYPE]])return oe;oe++}return-1},ie=H,(he=[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}])&&E(ie.prototype,he),Object.defineProperty(ie,"prototype",{writable:!1}),H}();P.default=ae,J.exports=P.default},5238:(J,P,v)=>{let _=v(3152);class N extends _{get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}constructor(f){f&&f.value!==void 0&&typeof f.value!="string"&&(f={...f,value:String(f.value)}),super(f),this.type="decl"}}J.exports=N,N.default=N},5286:(J,P)=>{function v(N){for(var i=N.toLowerCase(),f="",w=!1,k=0;k<6&&i[k]!==void 0;k++){var h=i.charCodeAt(k);if(w=h===32,!(h>=97&&h<=102||h>=48&&h<=57))break;f+=i[k]}if(f.length!==0){var e=parseInt(f,16);return e>=55296&&e<=57343||e===0||e>1114111?["�",f.length+(w?1:0)]:[String.fromCodePoint(e),f.length+(w?1:0)]}}P.__esModule=!0,P.default=function(N){if(!_.test(N))return N;for(var i="",f=0;f<N.length;f++)if(N[f]!=="\\")i+=N[f];else{var w=v(N.slice(f+1,f+7));if(w!==void 0){i+=w[0],f+=w[1];continue}if(N[f+1]==="\\"){i+="\\",f++;continue}N.length===f+1&&(i+=N[f])}return i};var _=/\\/;J.exports=P.default},5330:(J,P,v)=>{v.d(P,{x:()=>_});const _=new BroadcastChannel("Freeschema_mftsccs_browser_channel")},5588:(J,P,v)=>{P.__esModule=!0,P.default=void 0,P.unescapeValue=a;var _,N=k(v(8937)),i=k(v(5286)),f=k(v(3295)),w=v(1581);function k(g){return g&&g.__esModule?g:{default:g}}function h(g,y){for(var b=0;b<y.length;b++){var L=y[b];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(g,L.key,L)}}function e(g,y){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,L){return b.__proto__=L,b},e(g,y)}var o=v(4643),c=/^('|")([^]*)\1$/,p=o(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),C=o(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),T=o(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function a(g){var y=!1,b=null,L=g,S=L.match(c);return S&&(b=S[1],L=S[2]),(L=(0,i.default)(L))!==g&&(y=!0),{deprecatedUsage:y,unescaped:L,quoteMark:b}}var s=function(g){var y,b;function L(U){var F;return U===void 0&&(U={}),F=g.call(this,function(M){if(M.quoteMark!==void 0||M.value===void 0)return M;T();var W=a(M.value),j=W.quoteMark,q=W.unescaped;return M.raws||(M.raws={}),M.raws.value===void 0&&(M.raws.value=M.value),M.value=q,M.quoteMark=j,M}(U))||this,F.type=w.ATTRIBUTE,F.raws=F.raws||{},Object.defineProperty(F.raws,"unquoted",{get:o(function(){return F.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:o(function(){return F.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),F._constructed=!0,F}b=g,(y=L).prototype=Object.create(b.prototype),y.prototype.constructor=y,e(y,b);var S,E,R=L.prototype;return R.getQuotedValue=function(U){U===void 0&&(U={});var F=this._determineQuoteMark(U),M=n[F];return(0,N.default)(this._value,M)},R._determineQuoteMark=function(U){return U.smart?this.smartQuoteMark(U):this.preferredQuoteMark(U)},R.setValue=function(U,F){F===void 0&&(F={}),this._value=U,this._quoteMark=this._determineQuoteMark(F),this._syncRawValue()},R.smartQuoteMark=function(U){var F=this.value,M=F.replace(/[^']/g,"").length,W=F.replace(/[^"]/g,"").length;if(M+W===0){var j=(0,N.default)(F,{isIdentifier:!0});if(j===F)return L.NO_QUOTE;var q=this.preferredQuoteMark(U);if(q===L.NO_QUOTE){var X=this.quoteMark||U.quoteMark||L.DOUBLE_QUOTE,Z=n[X];if((0,N.default)(F,Z).length<j.length)return X}return q}return W===M?this.preferredQuoteMark(U):W<M?L.DOUBLE_QUOTE:L.SINGLE_QUOTE},R.preferredQuoteMark=function(U){var F=U.preferCurrentQuoteMark?this.quoteMark:U.quoteMark;return F===void 0&&(F=U.preferCurrentQuoteMark?U.quoteMark:this.quoteMark),F===void 0&&(F=L.DOUBLE_QUOTE),F},R._syncRawValue=function(){var U=(0,N.default)(this._value,n[this.quoteMark]);U===this._value?this.raws&&delete this.raws.value:this.raws.value=U},R._handleEscapes=function(U,F){if(this._constructed){var M=(0,N.default)(F,{isIdentifier:!0});M!==F?this.raws[U]=M:delete this.raws[U]}},R._spacesFor=function(U){var F=this.spaces[U]||{},M=this.raws.spaces&&this.raws.spaces[U]||{};return Object.assign({before:"",after:""},F,M)},R._stringFor=function(U,F,M){F===void 0&&(F=U),M===void 0&&(M=d);var W=this._spacesFor(F);return M(this.stringifyProperty(U),W)},R.offsetOf=function(U){var F=1,M=this._spacesFor("attribute");if(F+=M.before.length,U==="namespace"||U==="ns")return this.namespace?F:-1;if(U==="attributeNS"||(F+=this.namespaceString.length,this.namespace&&(F+=1),U==="attribute"))return F;F+=this.stringifyProperty("attribute").length,F+=M.after.length;var W=this._spacesFor("operator");F+=W.before.length;var j=this.stringifyProperty("operator");if(U==="operator")return j?F:-1;F+=j.length,F+=W.after.length;var q=this._spacesFor("value");F+=q.before.length;var X=this.stringifyProperty("value");return U==="value"?X?F:-1:(F+=X.length,F+=q.after.length,F+=this._spacesFor("insensitive").before.length,U==="insensitive"&&this.insensitive?F:-1)},R.toString=function(){var U=this,F=[this.rawSpaceBefore,"["];return F.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(F.push(this._stringFor("operator")),F.push(this._stringFor("value")),F.push(this._stringFor("insensitiveFlag","insensitive",function(M,W){return!(M.length>0)||U.quoted||W.before.length!==0||U.spaces.value&&U.spaces.value.after||(W.before=" "),d(M,W)}))),F.push("]"),F.push(this.rawSpaceAfter),F.join("")},S=L,(E=[{key:"quoted",get:function(){var U=this.quoteMark;return U==="'"||U==='"'},set:function(U){C()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(U){this._constructed?this._quoteMark!==U&&(this._quoteMark=U,this._syncRawValue()):this._quoteMark=U}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(U){if(this._constructed){var F=a(U),M=F.deprecatedUsage,W=F.unescaped,j=F.quoteMark;if(M&&p(),W===this._value&&j===this._quoteMark)return;this._value=W,this._quoteMark=j,this._syncRawValue()}else this._value=U}},{key:"insensitive",get:function(){return this._insensitive},set:function(U){U||(this._insensitive=!1,!this.raws||this.raws.insensitiveFlag!=="I"&&this.raws.insensitiveFlag!=="i"||(this.raws.insensitiveFlag=void 0)),this._insensitive=U}},{key:"attribute",get:function(){return this._attribute},set:function(U){this._handleEscapes("attribute",U),this._attribute=U}}])&&h(S.prototype,E),Object.defineProperty(S,"prototype",{writable:!1}),L}(f.default);P.default=s,s.NO_QUOTE=null,s.SINGLE_QUOTE="'",s.DOUBLE_QUOTE='"';var n=((_={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}}).null={isIdentifier:!0},_);function d(g,y){return""+y.before+g+y.after}},5644:(J,P,v)=>{let _,N,i=v(7793);class f extends i{constructor(k){super(k),this.type="root",this.nodes||(this.nodes=[])}normalize(k,h,e){let o=super.normalize(k);if(h){if(e==="prepend")this.nodes.length>1?h.raws.before=this.nodes[1].raws.before:delete h.raws.before;else if(this.first!==h)for(let c of o)c.raws.before=h.raws.before}return o}removeChild(k,h){let e=this.index(k);return!h&&e===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[e].raws.before),super.removeChild(k)}toResult(k={}){return new _(new N,this,k).stringify()}}f.registerLazyResult=w=>{_=w},f.registerProcessor=w=>{N=w},J.exports=f,f.default=f,i.registerRoot(f)},5747:(J,P,v)=>{v.d(P,{A:()=>e,K:()=>o});var _=v(1402),N=v(9536),i=v(8429),f=v(1833),w=v(6047),k=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,p||[])).next())})};const h=new Map;function e(c){return k(this,arguments,void 0,function*(p,C=999){p=Number(p);let T=performance.now();if(_.J.activateStatus)try{_.J.incrementConcept(p)}catch{i.Logger.log("ERROR","Error Adding Connection")}if(p>0){const n=yield i.BinaryTree.getNodeFromTree(p);if(n?.value&&n.value.id>0)return n.value}if(i.serviceWorker)try{const n=(yield(0,i.sendMessage)("GetTheConcept",{id:p,userId:C})).data;return n&&n.id>0&&f.I.AddConceptToMemory(n),n}catch(n){(0,i.handleServiceWorkerException)(n)}let a=(0,w.o)();if(h.has(p))return h.get(p)||a;const s=k(this,void 0,void 0,function*(){try{if(p<0)return yield i.LocalConceptsData.GetConceptByGhostId(p);if(a=yield f.I.GetConcept(p),(a==null||a.id==0)&&p!=null&&p!=null&&(a=yield(0,N.r)(p)),a.id!=0&&a.type==null&&(yield f.I.GetConcept(a.typeId))==null&&a.typeId!=null&&a.typeId!=null){let n=yield(0,N.r)(a.typeId);a.type=n}return a}catch(n){throw i.Logger.logError(T,C,"read","unknown",void 0,500,n,"GetTheConcept",[p,C],"unknown",void 0),n}finally{h.delete(p)}});return h.set(p,s),s})}function o(c){return k(this,void 0,void 0,function*(){if(i.serviceWorker)try{return(yield(0,i.sendMessage)("AddTypeConcept",{concept:c})).data}catch(p){(0,i.handleServiceWorkerException)(p)}if(c.type==null){let p=yield f.I.GetConcept(c.typeId);if(p.id==0&&c.typeId!=0&&c.typeId!=999){let C=yield(0,N.r)(c.typeId);c.type=C}else c.type=p}})}},5760:(J,P,v)=>{v.d(P,{ER:()=>f,Mb:()=>w,ey:()=>k,ry:()=>i});var _=v(8429),N=v(1974);function i(h){if(_.Logger.log("ERROR",h.statusText,{code:h.status,data:h.statusText}),h.status==401||h.status==406){let e=new N.z(h.statusText,!1,h.status,"");throw e.setUrl(h.url),e}if(h.status==500){let e=new N.z(h.statusText,!1,h.status,"");throw e.setUrl(h.url),e}}function f(h,e={}){if(_.Logger.log("ERROR",e.statusText,{code:h.status,data:h.status}),h.status==401||h.status==406){let o=new N.z(e.statusText,!1,h.status,"");throw o.setUrl(h.url),o}if(h.status==500){let o=new N.z(e.statusText,!1,h.status,"");throw o.setUrl(h.url),o}}function w(h,e=""){if(_.Logger.log("ERROR",h.message,{code:h.status,data:h.stack}),h.status){let o=new N.z(h.message,!1,h.status,h.stack);throw o.setUrl(e),o}{let o=new N.z(h.message,!1,500,h.stack);throw o.setUrl(e),o}}function k(h,e,o){var c;try{if(!h)return;const p=Date.now();h.startTime=(c=h.startTime)!==null&&c!==void 0?c:p,h.responseTime=p-h.startTime+" ms",h.level="ERROR",h.errorMessage=o?.message||"Unknown error occurred"}catch{}}},5781:J=>{const g=/[\t\n\f\r "#'()/;[\\\]{}]/g,y=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,b=/.[\r\n"'(/\\]/,L=/[\da-f]/i;J.exports=function(S,E={}){let R,U,F,M,W,j,q,X,Z,ae,H=S.css.valueOf(),ie=E.ignoreErrors,he=H.length,ne=0,Q=[],oe=[];function ee($){throw S.error("Unclosed "+$,ne)}return{back:function($){oe.push($)},endOfFile:function(){return oe.length===0&&ne>=he},nextToken:function($){if(oe.length)return oe.pop();if(ne>=he)return;let re=!!$&&$.ignoreUnclosed;switch(R=H.charCodeAt(ne),R){case 10:case 32:case 9:case 13:case 12:M=ne;do M+=1,R=H.charCodeAt(M);while(R===32||R===10||R===9||R===13||R===12);j=["space",H.slice(ne,M)],ne=M-1;break;case 91:case 93:case 123:case 125:case 58:case 59:case 41:{let fe=String.fromCharCode(R);j=[fe,fe,ne];break}case 40:if(ae=Q.length?Q.pop()[1]:"",Z=H.charCodeAt(ne+1),ae==="url"&&Z!==39&&Z!==34&&Z!==32&&Z!==10&&Z!==9&&Z!==12&&Z!==13){M=ne;do{if(q=!1,M=H.indexOf(")",M+1),M===-1){if(ie||re){M=ne;break}ee("bracket")}for(X=M;H.charCodeAt(X-1)===92;)X-=1,q=!q}while(q);j=["brackets",H.slice(ne,M+1),ne,M],ne=M}else M=H.indexOf(")",ne+1),U=H.slice(ne,M+1),M===-1||b.test(U)?j=["(","(",ne]:(j=["brackets",U,ne,M],ne=M);break;case 39:case 34:W=R===39?"'":'"',M=ne;do{if(q=!1,M=H.indexOf(W,M+1),M===-1){if(ie||re){M=ne+1;break}ee("string")}for(X=M;H.charCodeAt(X-1)===92;)X-=1,q=!q}while(q);j=["string",H.slice(ne,M+1),ne,M],ne=M;break;case 64:g.lastIndex=ne+1,g.test(H),M=g.lastIndex===0?H.length-1:g.lastIndex-2,j=["at-word",H.slice(ne,M+1),ne,M],ne=M;break;case 92:for(M=ne,F=!0;H.charCodeAt(M+1)===92;)M+=1,F=!F;if(R=H.charCodeAt(M+1),F&&R!==47&&R!==32&&R!==10&&R!==9&&R!==13&&R!==12&&(M+=1,L.test(H.charAt(M)))){for(;L.test(H.charAt(M+1));)M+=1;H.charCodeAt(M+1)===32&&(M+=1)}j=["word",H.slice(ne,M+1),ne,M],ne=M;break;default:R===47&&H.charCodeAt(ne+1)===42?(M=H.indexOf("*/",ne+2)+1,M===0&&(ie||re?M=H.length:ee("comment")),j=["comment",H.slice(ne,M+1),ne,M],ne=M):(y.lastIndex=ne+1,y.test(H),M=y.lastIndex===0?H.length-1:y.lastIndex-2,j=["word",H.slice(ne,M+1),ne,M],Q.push(j),ne=M)}return ne++,j},position:function(){return ne}}}},5793:(J,P,v)=>{v.d(P,{s:()=>e});var _=v(6715),N=v(370),i=v(6089),f=v(1317),w=v(5760),k=v(8429),h=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};function e(c){var p=arguments;return h(this,void 0,void 0,function*(){const C=k.Logger.logfunction("GetAllConnectionsOfComposition",p);var T=[];if((T=yield _.d.GetConnectionsOfConcept(c)).length==0)T=yield o(c);else{var a=yield o(c);(0,i.e)(a,T),T=a}return k.Logger.logUpdate(C),T})}function o(c){var p=arguments;return h(this,void 0,void 0,function*(){const C=k.Logger.logfunction("GetAllConnectionsOfCompositionOnline",p);var T=[];try{const s=new FormData;s.append("composition_id",c.toString());const n=yield(0,f.Xr)("","application/json"),d=yield fetch(N.B.GetAllConnectionsOfCompositionUrl(),{method:"POST",headers:n,body:s});if(!d.ok)throw(0,w.ry)(d),new Error(`Error! status: ${d.status}`);const g=yield d.json();for(var a=0;a<g.length;a++)_.d.AddConnection(g[a]),T.push(g[a]);return k.Logger.logUpdate(C),T}catch(s){(0,w.Mb)(s,N.B.GetAllConnectionsOfCompositionUrl()),(0,w.ey)(C,"GetAllConnectionsOfCompositionOnline",s)}})}},5799:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.STRING,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},5893:(J,P,v)=>{v.d(P,{s:()=>N});var _=v(8444);function N(){var i,f,w,k,h,e,o,c,p,C,T,a;let s={entity:0,userConcept:0,userId:0,token:_.b.BearerAccessToken,email:"",amcode:"",roles:[]};const n=_.b.profileCache;if(n)return s.entity=(i=n.entityId)!==null&&i!==void 0?i:0,s.userConcept=(f=n.userConcept)!==null&&f!==void 0?f:0,s.userId=(w=n.userId)!==null&&w!==void 0?w:0,s.email=(k=n.email)!==null&&k!==void 0?k:"",s.amcode=(h=n.amcode)!==null&&h!==void 0?h:"",s.roles=(e=n.roles)!==null&&e!==void 0?e:[],s;try{const d=(localStorage==null?void 0:localStorage.getItem("profile"))||"";if(d){const g=JSON.parse(d);s.entity=(o=g?.entityId)!==null&&o!==void 0?o:0,s.userConcept=(c=g?.userConcept)!==null&&c!==void 0?c:0,s.userId=(p=g?.userId)!==null&&p!==void 0?p:0,s.email=(C=g?.email)!==null&&C!==void 0?C:"",s.amcode=(T=g?.amcode)!==null&&T!==void 0?T:"",s.token||(s.token=(a=g?.token)!==null&&a!==void 0?a:"")}}catch{}return s}},5978:(J,P,v)=>{v.d(P,{H:()=>w});var _=v(8429),N=v(2617);class i extends N.i{constructor(h,e,o,c){super(h,e,o,c),this.key="",this.value=[],this.height=1,this.key=h,this.value=e,this.leftNode=o,this.rightNode=c}addNode(h,e,o){if(e==null)return h;let c=e.leftNode,p=e.rightNode;if(e.key>h.key)e.leftNode=this.addNode(h,c,o);else{if(!(e.key<h.key))return e;e.rightNode=this.addNode(h,p,o)}e.height=1+Math.max(this.getHeight(e.leftNode),this.getHeight(e.rightNode));let C=this.getBalanceFactor(e);if(C>1&&e.leftNode){if(this.getBalanceFactor(e.leftNode)>=0)return this.rightRotate(e);if(this.getBalanceFactor(e.leftNode)<0)return e.leftNode=this.leftRotate(e.leftNode),this.rightRotate(e)}if(C<-1&&e.rightNode){if(this.getBalanceFactor(e.rightNode)<=0)return this.leftRotate(e);if(this.getBalanceFactor(e.rightNode)>0)return e.rightNode=this.rightRotate(e.rightNode),this.leftRotate(e)}return e}}var f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,[])).next())})};class w{static CreateCompositionKey(h,e){return h}static GetConnectionByOfTheConceptAndTypeId(h,e){let o=this.CreateCompositionKey(h,e);if(this.node){let c=this.node.getFromNode(o,this.node);if(c)return c.value}return null}static addConnection(h){if(h.id>0){let e=this.CreateCompositionKey(h.ofTheConceptId,h.typeId);if(this.node){let o=this.node.getFromNode(e,this.node);if(o){let c=o?.value;c.length==0&&(o.value=[]),c.includes(h.id)||c.push(h.id)}else{let c=[];c.push(h.id);let p=new i(e,c,null,null);this.addNodeToTree(p)}}else{let o=[];o.push(h.id);let c=new i(e,o,null,null);this.addNodeToTree(c)}new Event(`${e}`)}}static addNodeToTree(h){return f(this,void 0,void 0,function*(){return this.node==null?(this.node=h,(0,_.dispatchIdEvent)(h.key),this.node):(this.node=this.node.addNode(h,this.node,this.node.height),this.node)})}static removeNodeFromTree(h){return f(this,void 0,void 0,function*(){this.node&&(this.node=this.node.removeNode(this.node,h))})}}w.node=null},6047:(J,P,v)=>{v.d(P,{Y:()=>i,o:()=>N});var _=v(3008);function N(){let f=i(new Date),w=i(new Date);return new _.j(0,0,0,0,0,"0",0,!1,f,w,"0")}function i(f){const w=f.getMonth()+1,k=f.getDate(),h=f.getFullYear();let e=f.getHours();const o=f.getMinutes(),c=f.getSeconds(),p=e>=12?"PM":"AM";e%=12,e=e||12;const C=T=>T.toString().padStart(2,"0");return`${w}/${k}/${h} ${e}:${C(o)}:${C(c)} ${p}`}},6089:(J,P,v)=>{function _(N=[],i=[]){}v.d(P,{e:()=>_})},6156:J=>{let P={};J.exports=function(v){P[v]||(P[v]=!0,typeof console<"u")}},6288:(J,P,v)=>{v.d(P,{Al:()=>o,L2:()=>f,Ou:()=>w,cL:()=>k,eH:()=>c,kM:()=>p,l8:()=>h,ou:()=>T,sg:()=>C});var _=v(370),N=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})};const i=1,f="widgetCache",w="latestWidgetCache",k="recentWidgetCache",h="queryCache";let e=null;function o(){return new Promise((a,s)=>{if(e)return void a(e);const n=_.B.BASE_URL+"_CacheStore"+_.B.BASE_APPLICATION,d=indexedDB.open(n,i);d.onupgradeneeded=g=>{const y=g.target.result;y.objectStoreNames.contains(f)||y.createObjectStore(f,{keyPath:"id"}),y.objectStoreNames.contains(w)||y.createObjectStore(w,{keyPath:"id"}),y.objectStoreNames.contains(k)||y.createObjectStore(k,{keyPath:"id"}),y.objectStoreNames.contains(h)||y.createObjectStore(h)},d.onsuccess=g=>{e=g.target.result,a(e)},d.onerror=g=>{s(g)}})}function c(a,s,n){return N(this,void 0,void 0,function*(){const d=yield o();return new Promise((g,y)=>{const b=d.transaction(a,"readwrite").objectStore(a),L=n!==void 0?b.put(s,n):b.put(s);L.onsuccess=()=>g(),L.onerror=S=>{y(S)}})})}function p(a,s){return N(this,void 0,void 0,function*(){const n=yield o();return new Promise((d,g)=>{const y=n.transaction(a,"readwrite").objectStore(a).delete(s);y.onsuccess=()=>d(),y.onerror=b=>{g(b)}})})}function C(a){return N(this,void 0,void 0,function*(){const s=yield o();return new Promise((n,d)=>{const g=s.transaction(a,"readwrite").objectStore(a).clear();g.onsuccess=()=>n(),g.onerror=y=>{d(y)}})})}function T(a){return N(this,void 0,void 0,function*(){const s=yield o();return new Promise((n,d)=>{const g=s.transaction(a,"readonly").objectStore(a).getAll();g.onsuccess=()=>{var y;n((y=g.result)!==null&&y!==void 0?y:[])},g.onerror=y=>{d(y)}})})}},6291:(J,P)=>{P.__esModule=!0,P.default=function(v){for(var _=arguments.length,N=new Array(_>1?_-1:0),i=1;i<_;i++)N[i-1]=arguments[i];for(;N.length>0;){var f=N.shift();if(!v[f])return;v=v[f]}return v},J.exports=P.default},6297:(J,P,v)=>{v.d(P,{A:()=>e});var _=v(1833),N=v(370),i=v(1317),f=v(5760),w=v(8429),k=v(5747),h=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,[])).next())})};function e(o,c){var p=arguments;return h(this,void 0,void 0,function*(){const C=w.Logger.logfunction("GetConceptByCharacterAndType",p);try{if(w.serviceWorker)try{return(yield(0,w.sendMessage)("GetConceptByCharacterAndType",{characterValue:o,typeId:c})).data}catch(d){(0,w.handleServiceWorkerException)(d)}let n=yield _.I.GetConceptByCharacterAndTypeLocal(o,c);if(n==null||n.id==0){var T={character_value:`${o}`,type_id:c},a=JSON.stringify(T),s=(0,i.Xr)("application/json");const d=yield fetch(N.B.GetConceptByCharacterAndTypeUrl(),{method:"POST",headers:s,body:a});d.ok?(n=yield d.json(),(0,k.K)(n).then(y=>{_.I.AddConcept(n)})):(0,f.ry)(d)}return w.Logger.logUpdate(C),n}catch(n){(0,f.Mb)(n,N.B.GetConceptByCharacterAndTypeUrl()),(0,f.ey)(C,"GetConceptByCharacterAndType",n)}})}},6397:(J,P,v)=>{v.d(P,{Y:()=>e});var _=v(1833),N=v(370),i=v(1317),f=v(8429),w=v(5760),k=v(5747),h=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,[])).next())})};function e(o){var c=arguments;return h(this,void 0,void 0,function*(){const p=f.Logger.logfunction("GetConceptByCharacterValue",c);let C=(0,f.CreateDefaultConcept)();try{const T=(0,i.Xr)("","application/json"),a=new FormData;a.append("character_value",o);const s=yield fetch(N.B.GetConceptByCharacterValueUrl(),{method:"POST",headers:T,body:a});s.ok?(C=yield s.json(),C.id>0&&(0,k.K)(C).then(n=>{_.I.AddConcept(C)}),f.Logger.logUpdate(p)):(0,w.ry)(s)}catch(T){(0,w.Mb)(T,N.B.GetConceptByCharacterValueUrl()),(0,w.ey)(p,"GetConceptByCharacterValue",T)}return C})}},6443:(J,P,v)=>{v.d(P,{Cp:()=>a,ix:()=>d,ml:()=>n,qj:()=>s});var _=v(8429),N=v(6948),i=v(3693),f=v(2635),w=v(5760),k=v(3076),h=v(1317),e=v(4238),o=function(g,y,b,L){return new(b||(b=Promise))(function(S,E){function R(M){try{F(L.next(M))}catch(W){E(W)}}function U(M){try{F(L.throw(M))}catch(W){E(W)}}function F(M){var W;M.done?S(M.value):(W=M.value,W instanceof b?W:new b(function(j){j(W)})).then(R,U)}F((L=L.apply(g,[])).next())})};const c=new Map,p=new Map,C=new Map;function T(g,y){_.BaseUrl.isPwa&&o(this,void 0,void 0,function*(){const b=new Set(y);for(const L of g){const S=yield _.ConnectionData.GetConnection(L);S&&S?.id>0&&(b.add(S.ofTheConceptId),b.add(S.toTheConceptId),b.add(S.typeId),(0,N.kH)("connection",S))}for(const L of b)if(L>0){const S=yield _.ConceptsData.GetConcept(L);S&&S.id>0&&(0,N.kH)("concept",S)}}).catch(()=>{})}function a(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromId",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromId",{id:g})).data}catch(U){(0,_.handleServiceWorkerException)(U)}let b={};if(c.has(g))return c.get(g)||b;let L=(0,h.Xr)("application/json"),S=_.BaseUrl.getWidgetData()+"?id="+g;const E=e.i.getWidget(g);if(E){fetch(S,{method:"GET",headers:L}).then(M=>o(this,void 0,void 0,function*(){if(M.ok){const W=yield M.json();e.i.setWidget(g,W)}else(0,w.ry)(M)})).catch(()=>{});let U=(0,f.w)(E.countinfo),F=yield(0,k.e$)(E.linkers,E.conceptIds,E.mainCompositionIds,E.reverse,U,"DESC");return T(E.linkers,E.conceptIds),F}const R=o(this,void 0,void 0,function*(){try{const U=yield fetch(S,{method:"GET",headers:L});if(U.ok){let F=yield U.json();e.i.setWidget(g,F);let M=(0,f.w)(F.countinfo);return b=yield(0,k.e$)(F.linkers,F.conceptIds,F.mainCompositionIds,F.reverse,M,"DESC"),T(F.linkers,F.conceptIds),b}return(0,w.ry)(U),[]}catch(U){throw U}finally{c.delete(g)}});return c.set(g,R),R})}function s(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromIdForLatest",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromIdForLatest",{id:g})).data}catch(R){(0,_.handleServiceWorkerException)(R)}let b={};if(p.has(g))return p.get(g)||b;let L=(0,h.Xr)("application/json");const S=e.i.getLatest(g);if(S){o(this,void 0,void 0,function*(){let F;try{let M=_.BaseUrl.getLatestWidgetData()+"?id="+g;F=yield fetch(M,{method:"GET",headers:L})}catch{F=yield(0,i.g)({method:"GET",headers:L},"?id="+g)}if(F.ok){const M=yield F.json();e.i.setLatest(g,M)}else(0,w.ry)(F)}).catch(()=>{});let R=(0,f.w)(S.countinfo),U=yield(0,k.e$)(S.linkers,S.conceptIds,S.mainCompositionIds,S.reverse,R,"DESC");return T(S.linkers,S.conceptIds),{data:U,mainId:S.mainId}}const E=o(this,void 0,void 0,function*(){try{let R;try{let U=_.BaseUrl.getLatestWidgetData()+"?id="+g;R=yield fetch(U,{method:"GET",headers:L})}catch{R=yield(0,i.g)({method:"GET",headers:L},"?id="+g)}if(R.ok){let U=yield R.json();e.i.setLatest(g,U);let F=(0,f.w)(U.countinfo);return b=yield(0,k.e$)(U.linkers,U.conceptIds,U.mainCompositionIds,U.reverse,F,"DESC"),T(U.linkers,U.conceptIds),{data:b,mainId:U.mainId}}return(0,w.ry)(R),[]}catch(R){throw R}finally{p.delete(g)}});return p.set(g,E),E})}function n(g){var y=arguments;return o(this,void 0,void 0,function*(){_.Logger.logfunction("BuildWidgetFromIdForRecent",y);try{if(_.serviceWorker)return(yield(0,_.sendMessage)("BuildWidgetFromIdForRecent",{id:g})).data}catch(R){(0,_.handleServiceWorkerException)(R)}let b={};if(C.has(g))return C.get(g)||b;let L=(0,h.Xr)("application/json");const S=e.i.getRecent(g);if(S){o(this,void 0,void 0,function*(){let F;try{let M=_.BaseUrl.getRecentWidgetData()+"?id="+g;F=yield fetch(M,{method:"GET",headers:L})}catch{F=yield(0,i.g)({method:"GET",headers:L},"?id="+g)}if(F.ok){const M=yield F.json();e.i.setRecent(g,M)}else(0,w.ry)(F)}).catch(()=>{});let R=(0,f.w)(S.countinfo),U=yield(0,k.e$)(S.linkers,S.conceptIds,S.mainCompositionIds,S.reverse,R,"DESC");return T(S.linkers,S.conceptIds),{data:U,mainId:S.mainId}}const E=o(this,void 0,void 0,function*(){try{let R;try{let U=_.BaseUrl.getRecentWidgetData()+"?id="+g;R=yield fetch(U,{method:"GET",headers:L})}catch{R=yield(0,i.g)({method:"GET",headers:L},"?id="+g)}if(R.ok){let U=yield R.json();e.i.setRecent(g,U);let F=(0,f.w)(U.countinfo);return b=yield(0,k.e$)(U.linkers,U.conceptIds,U.mainCompositionIds,U.reverse,F,"DESC"),T(U.linkers,U.conceptIds),{data:b,mainId:U.mainId}}return(0,w.ry)(R),[]}catch(R){throw R}finally{C.delete(g)}});return C.set(g,E),E})}function d(g,y){for(let b=0;b<g.length;b++)if(g[b].id==y)return g[b]}},6580:(J,P,v)=>{v.d(P,{Ay:()=>e,EO:()=>o,xd:()=>c});var _=v(830),N=v(7154),i=v(198),f=v(7258),w=v(8429),k=v(5760),h=function(p,C,T,a){return new(T||(T=Promise))(function(s,n){function d(b){try{y(a.next(b))}catch(L){n(L)}}function g(b){try{y(a.throw(b))}catch(L){n(L)}}function y(b){var L;b.done?s(b.value):(L=b.value,L instanceof T?L:new T(function(S){S(L)})).then(d,g)}y((a=a.apply(p,[])).next())})};function e(){return h(this,void 0,void 0,function*(){const p=w.Logger.logfunction("CreateLocalBinaryTreeFromIndexDb");try{let C=[];if(Array.isArray(C))for(let T=0;T<C.length;T++){let a=C[T];N.v.AddConceptToMemory(a)}_.B.isLocalDataLoaded=!0,_.B.isLocalTypeLoaded=!0,_.B.isLocalCharacterLoaded=!0,w.Logger.logUpdate(p)}catch(C){yield(0,w.DelayFunctionExecution)(2e3,e());let T={message:"Cannot create local binary tree from index db",data:C,ok:!1,status:400};throw(0,k.ey)(p,"CreateLocalBinaryTreeFromIndexDb",C),T}})}function o(){return h(this,void 0,void 0,function*(){var p;const C=w.Logger.logfunction("PopulateTheLocalConceptsToMemory");try{yield(p=navigator.locks)===null||p===void 0?void 0:p.request("dblock",T=>h(this,void 0,void 0,function*(){let a=yield(0,f.S5)("localid");if(Array.isArray(a)){if(a[0]){let s=a[0].value;if(s)i.R.AddConceptId(a[0]),yield(0,f.kH)("localid",{id:0,value:s-10});else{s=-Math.floor(1e8*Math.random());let n={id:0,value:s},d={id:0,value:s-10};i.R.AddConceptId(n),yield(0,f.kH)("localid",d)}}a[2]}})),w.Logger.logUpdate(C)}catch(T){let a={message:"Cannot populate Local Ids from the Index Db",data:T,ok:!1,status:400};throw(0,k.ey)(C,"PopulateTheLocalConceptsToMemory",T),a}})}function c(){return h(this,void 0,void 0,function*(){var p;const C=w.Logger.logfunction("PopulateTheLocalConnectionToMemory");try{yield(p=navigator.locks)===null||p===void 0?void 0:p.request("dblock",T=>h(this,void 0,void 0,function*(){let a=yield(0,f.S5)("localid");if(Array.isArray(a)){if(a[1]){let s=a[1].value;if(s)i.R.AddConnectionId(a[1]),yield(0,f.kH)("localid",{id:1,value:s-10});else{s=-Math.floor(1e8*Math.random());let n={id:0,value:s},d={id:0,value:s-10};i.R.AddConnectionId(n),yield(0,f.kH)("localid",d)}}a[2]}})),w.Logger.logUpdate(C)}catch(T){let a={message:"Cannot populate Local Ids from the Index Db",data:T,ok:!1,status:400};throw(0,k.ey)(C,"PopulateTheLocalConnectionToMemory",T),a}})}},6700:(J,P,v)=>{v.d(P,{Y:()=>k});var _=v(370),N=v(1317),i=v(8429),f=v(5760),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,[])).next())})};function k(h){return w(this,void 0,void 0,function*(){const e=i.Logger.logfunction("CreateTheConceptApi",h);let o=(0,i.CreateDefaultConcept)();try{var c=(0,N.Xr)();const p=yield fetch(_.B.CreateTheConceptUrl(),{method:"POST",headers:c,body:JSON.stringify(h)});if(!p.ok)throw(0,f.ry)(p),new Error(`Error! status: ${p.status}`);return o=yield p.json(),i.Logger.logUpdate(e),o}catch(p){(0,f.Mb)(p,_.B.CreateTheConceptUrl()),(0,f.ey)(e,"CreateTheConceptApi",p)}})}},6715:(J,P,v)=>{v.d(P,{d:()=>T});var _=v(1402),N=v(8429),i=v(6948),f=v(5760),w=v(4990),k=v(413),h=v(5978),e=v(2617);class o extends e.i{constructor(s,n,d,g){super(s,n,d,g),this.key="",this.value=[],this.height=1,this.key=s,this.value=n,this.leftNode=d,this.rightNode=g}addNode(s,n,d){if(n==null)return n=s;let g=n.leftNode,y=n.rightNode;if(n.key>s.key)n.leftNode=this.addNode(s,g,d);else{if(!(n.key<s.key))return n;n.rightNode=this.addNode(s,y,d)}n.height=1+Math.max(this.getHeight(n.leftNode),this.getHeight(n.rightNode));let b=this.getBalanceFactor(n);if(b>1&&n.leftNode){if(s.key<n.leftNode.key)return this.rightRotate(n);if(s.key>n.leftNode.key)return n.leftNode=this.leftRotate(n.leftNode),this.rightRotate(n)}if(b<-1&&n.rightNode){if(s.key>n.rightNode.key)return this.leftRotate(n);if(s.key<n.rightNode.key)return n.rightNode=this.rightRotate(n.rightNode),this.leftRotate(n)}return n}}var c=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})};class p{static CreateCompositionKey(s){return s}static addNodeToTree(s){return c(this,void 0,void 0,function*(){return this.connectionTypeRoot==null?(this.connectionTypeRoot=s,this.connectionTypeRoot):(this.connectionTypeRoot=this.connectionTypeRoot.addNode(s,this.connectionTypeRoot,this.connectionTypeRoot.height),this.connectionTypeRoot)})}static addConnectionToTree(s){if(s.id>0){let n=this.CreateCompositionKey(s.typeId);if(this.connectionTypeRoot){let d=this.connectionTypeRoot.getFromNode(n,this.connectionTypeRoot);if(d){let g=d?.value;g.length==0&&(d.value=[]),g.includes(s.id)||g.push(s.id)}else{let g=[];g.push(s.id);let y=new o(n,g,null,null);this.addNodeToTree(y)}}else{let d=[];d.push(s.id);let g=new o(n,d,null,null);this.addNodeToTree(g)}}}static GetConnectionByOfTheConceptAndTypeId(s,n){let d=this.CreateCompositionKey(n);if(this.connectionTypeRoot){let g=this.connectionTypeRoot.getFromNode(d,this.connectionTypeRoot);if(g)return g.value}return null}}p.connectionTypeRoot=null;var C=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})};class T{constructor(){this.name="Connection Array"}static CheckContains(s){let n=!1;for(let d=0;d<this.connectionArray.length;d++)this.connectionArray[d].id==s.id&&(n=!0);return n}static AddConnectionToStorage(s){(0,i.kH)("connection",s)}static AddNpConn(s){this.deletedConnections.includes(s)||this.deletedConnections.push(s)}static GetNpConn(s){return!!this.deletedConnections.includes(s)}static AddConnection(s){try{k.O.addConnectionToTree(s),p.addConnectionToTree(s),h.H.addConnection(s)}catch(n){throw n}}static AddConnectionToMemory(s){s.isTemp||(k.O.addConnectionToTree(s),p.addConnectionToTree(s),h.H.addConnection(s))}static AddToDictionary(s){this.connectionDictionary[s.id]=s}static RemoveConnection(s){s.id!=0&&((0,i.wh)("connection",s.id),k.O.removeNodeFromTree(s.id),h.H.removeNodeFromTree(s.id))}static GetConnectionTypeOfTree(){h.H.node}static GetConnectionByOfTheConceptAndType(s,n){return C(this,void 0,void 0,function*(){try{if(N.serviceWorker)try{return(yield(0,N.sendMessage)("ConnectionData__GetConnectionByOfTheConceptAndType",{ofTheConceptId:s,typeId:n})).data}catch(g){(0,N.handleServiceWorkerException)(g)}return h.H.GetConnectionByOfTheConceptAndTypeId(s,n)||[]}catch{return[]}})}static GetConnectionByOfType(s,n){const d=N.Logger.logfunction("ConnectionData.GetConnectionByOfType",arguments);let g=p.GetConnectionByOfTheConceptAndTypeId(s,n);return g?(N.Logger.logUpdate(d),g):(N.Logger.logUpdate(d),[])}static GetConnectionTree(){return k.O.connectionroot}static GetConnectionTypeTree(){return p.connectionTypeRoot}static GetConnectionBulkData(s,n,d){return C(this,void 0,void 0,function*(){yield k.O.getConnectionListFromIds(s,n,d)})}static GetConnection(s){return C(this,void 0,void 0,function*(){_.J.incrementConnection(s);let n=new w.N(0,0,0,0,0,0,0);try{if(N.serviceWorker)try{return(yield(0,N.sendMessage)("ConnectionData__GetConnection",{id:s})).data}catch(g){(0,N.handleServiceWorkerException)(g)}let d=yield k.O.getNodeFromTree(s);if(d?.value){let g=d.value;g&&(n=g)}return n}catch{return n}})}static GetConnectionsOfCompositionLocal(s){var n=arguments;return C(this,void 0,void 0,function*(){const d=N.Logger.logfunction("ConnectionData.GetConnectionsOfCompositionLocal",n)||{};let g=[];try{if(N.serviceWorker){d.serviceWorker=!0;try{const b=yield(0,N.sendMessage)("ConnectionData__GetConnectionsOfCompositionLocal",{id:s});return N.Logger.logUpdate(d),b.data}catch(b){(0,f.ey)(d,"GetConnectionsOfCompositionLocal",b),(0,N.handleServiceWorkerException)(b)}}let y=[];y=T.GetConnectionByOfType(s,s);for(let b=0;b<y.length;b++){let L=yield k.O.getNodeFromTree(y[b]);L&&g.push(L.value),N.Logger.logUpdate(d)}}catch(y){(0,f.ey)(d,"ConnectionData.GetConnectionsOfCompositionLocal",y)}return g})}static GetConnectionsOfConcept(s){return C(this,void 0,void 0,function*(){let n=[],d=[];try{if(N.serviceWorker)try{return(yield(0,N.sendMessage)("ConnectionData__GetConnectionsOfConcept",{id:s})).data}catch(g){(0,N.handleServiceWorkerException)(g)}n=yield T.GetConnectionByOfTheConceptAndType(s,s);for(let g=0;g<n.length;g++){let y=yield k.O.getNodeFromTree(n[g]);y&&d.push(y.value)}return d}catch{return d}})}getName(){return this.name}}T.deletedConnections=[],T.connectionArray=[],T.connectionDictionary=[]},6750:(J,P,v)=>{v.d(P,{a:()=>e,p:()=>o});var _=v(6715),N=v(3967),i=v(6948),f=v(370),w=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};const k=500;function h(){return new Promise(c=>setTimeout(c,0))}function e(){return w(this,void 0,void 0,function*(){try{let c=[];if(f.B.isPwa&&(c=yield(0,i.D3)("connection")),Array.isArray(c))for(let p=0;p<c.length;p++)_.d.AddConnectionToMemory(c[p]),p>0&&p%k===0&&(yield h())}catch(c){throw{message:"Cannot create Connection Binary Tree Concept",ok:!1,status:400,data:c}}})}function o(){return w(this,void 0,void 0,function*(){try{let c=[];if(Array.isArray(c))for(let p=0;p<c.length;p++)N.G.AddConnectionToMemory(c[p])}catch(c){throw{message:"Cannot create Local Connection Binary Tree Concept",ok:!1,status:400,data:c}}})}},6757:(J,P,v)=>{v.d(P,{Az:()=>C,Hi:()=>T});var _=v(6397),N=v(1833),i=v(370),f=v(1317),w=v(8429),k=v(5760),h=v(5747),e=v(6948),o=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})},c=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})},p=function(a,s,n,d){return new(n||(n=Promise))(function(g,y){function b(E){try{S(d.next(E))}catch(R){y(R)}}function L(E){try{S(d.throw(E))}catch(R){y(R)}}function S(E){var R;E.done?g(E.value):(R=E.value,R instanceof n?R:new n(function(U){U(R)})).then(b,L)}S((d=d.apply(a,[])).next())})};function C(a){return p(this,void 0,void 0,function*(){const s=w.Logger.logfunction("GetConceptByCharacterAndCategory",a);let n=(0,w.CreateDefaultConcept)();if(a=="the")return n.id=1,n.typeId=5,n.characterValue="the",n;let d=(0,w.SplitStrings)(a);if(d.length>1){let g=1,y=yield C(d[0]);y.id!=0&&(g=y.id),n=yield function(b,L){var S=arguments;return p(this,void 0,void 0,function*(){const E=w.Logger.logfunction("GetConceptByCharacterAndCategoryFromMemory",S);let R=yield w.ConceptsData.GetConceptByCharacterAndCategoryLocal(b,L);return R.id==0&&(R=yield function(U,F){var M=arguments;return o(this,void 0,void 0,function*(){const W=w.Logger.logfunction("GetConceptByCharacterAndCategoryDirectApi",M);let j=(0,w.CreateDefaultConcept)();try{var q=(0,f.Xr)("application/x-www-form-urlencoded");const X=yield fetch(i.B.GetConceptByCharacterAndCategoryDirectUrl(),{method:"POST",headers:q,body:`character_value=${U}&category_id=${F}`});X.ok?(j=yield X.json(),(0,h.K)(j).then(()=>{N.I.AddConcept(j),(0,e.kH)("concept",j).catch(()=>{})})):(0,k.ry)(X),w.Logger.logUpdate(W)}catch(X){(0,k.Mb)(X,i.B.GetConceptByCharacterAndCategoryDirectUrl()),(0,k.ey)(W,"GetConceptByCharacterAndCategoryDirectApi",X)}return j})}(b,L)),w.Logger.logUpdate(E),R})}(a,g)}else d[0]==a&&(n=yield function(g){var y=arguments;return p(this,void 0,void 0,function*(){const b=w.Logger.logfunction("GetConceptByCharacter",y);let L=yield w.ConceptsData.GetConceptByCharacterAndTypeLocal(g,51);return L.id==0&&(L=yield(0,_.Y)(g)),w.Logger.logUpdate(b),L})}(a));return w.Logger.logUpdate(s),n})}function T(a){return p(this,void 0,void 0,function*(){let s=[];try{s=yield function(n){return c(this,void 0,void 0,function*(){let d=[];try{let g=JSON.stringify(n),y=(0,f.Xr)();const b=yield fetch(w.BaseUrl.GetTypeConceptBulk(),{method:"POST",headers:y,body:g});if(b.ok){let L=yield b.json();d=yield(0,w.GetConceptBulk)(L)}else(0,k.ry)(b)}catch(g){(0,k.Mb)(g,w.BaseUrl.GetConceptByCharacterAndCategoryDirectUrl())}return d})}(a)}catch{}return s})}},6759:(J,P,v)=>{v.d(P,{a:()=>f});var _=v(6288),N=v(9789),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};class f{static init(){return i(this,void 0,void 0,function*(){if(N.B.getValue("enableCache",!0))try{const k=yield function(h){return i(this,void 0,void 0,function*(){const e=yield(0,_.Al)();return new Promise((o,c)=>{const p=e.transaction(h,"readonly").objectStore(h),C=[],T=p.openCursor();T.onsuccess=()=>{const a=T.result;a?(C.push({key:a.key,value:a.value}),a.continue()):o(C)},T.onerror=a=>{c(a)}})})}(_.l8);for(const{key:h,value:e}of k)this.cacheMap.set(h,e)}catch{}})}static getHash(k){return i(this,void 0,void 0,function*(){return yield function(h){return i(this,void 0,void 0,function*(){const e=JSON.stringify(h,(p,C)=>C&&typeof C=="object"&&!Array.isArray(C)?Object.keys(C).sort().reduce((T,a)=>(T[a]=C[a],T),{}):C),o=new TextEncoder().encode(e),c=yield crypto.subtle.digest("SHA-256",o);return Array.from(new Uint8Array(c)).map(p=>p.toString(16).padStart(2,"0")).join("")})}(k)})}static get(k){var h;return N.B.getValue("enableCache",!0)&&(h=this.cacheMap.get(k))!==null&&h!==void 0?h:null}static set(k,h){if(!N.B.getValue("enableCache",!0))return;const e=this.cacheMap.get(k),o=JSON.stringify(h);e&&JSON.stringify(e)===o||(this.cacheMap.set(k,h),(0,_.eH)(_.l8,h,k).catch(()=>{}),window.dispatchEvent(new CustomEvent(this.prefix+k,{detail:h})))}static subscribe(k,h){const e=o=>{h(o.detail)};return window.addEventListener(this.prefix+k,e),()=>{window.removeEventListener(this.prefix+k,e)}}static remove(k){this.cacheMap.delete(k),(0,_.kM)(_.l8,k).catch(()=>{})}static clearAll(){this.cacheMap.clear(),(0,_.sg)(_.l8).catch(()=>{})}}f.prefix="FREESCHEMA_CACHE_",f.cacheMap=new Map},6797:(J,P,v)=>{v.d(P,{Y:()=>c});var _=v(6715),N=v(370),i=v(2371),f=v(4437),w=v(6089),k=v(1317),h=v(5760),e=v(8429),o=function(p,C,T,a){return new(T||(T=Promise))(function(s,n){function d(b){try{y(a.next(b))}catch(L){n(L)}}function g(b){try{y(a.throw(b))}catch(L){n(L)}}function y(b){var L;b.done?s(b.value):(L=b.value,L instanceof T?L:new T(function(S){S(L)})).then(d,g)}y((a=a.apply(p,C||[])).next())})};function c(){var p=arguments;return o(this,arguments,void 0,function*(C=[]){const T=e.Logger.logfunction("GetAllConnectionsOfCompositionBulk",p)||{};if(e.serviceWorker){T.serviceWorker=!0;try{const d=yield(0,e.sendMessage)("GetAllConnectionsOfCompositionBulk",{composition_ids:C});return e.Logger.logUpdate(T),d.data}catch(d){(0,h.ey)(T,"GetAllConnectionsOfCompositionBulk",d),(0,e.handleServiceWorkerException)(d)}}var a=[];if(C.length<=0)return a;var s=yield(0,f.B)(C),n=yield function(){var d=arguments;return o(this,arguments,void 0,function*(g=[]){const y=e.Logger.logfunction("GetAllConnectionsOfCompositionOnline",d);var b=[];try{var L=(0,k.Xr)("application/json");const E=yield fetch(N.B.GetAllConnectionsOfCompositionBulkUrl(),{method:"POST",headers:L,body:JSON.stringify(g)});if(E.ok){const R=yield E.json();for(var S=0;S<R.length;S++)_.d.AddConnection(R[S]),b.push(R[S])}else(0,h.ry)(E);return e.Logger.logUpdate(y),b}catch(E){(0,h.Mb)(E,N.B.GetAllConnectionsOfCompositionBulkUrl()),(0,h.ey)(y,"GetAllConnectionsOfCompositionOnline",E)}})}(C);return a=n,(0,w.e)(a,s),yield(0,i.s)(a),e.Logger.logUpdate(T),a})}},6812:(J,P,v)=>{v.d(P,{B:()=>_});class _{constructor(i){this.id=1,this.isOnlineSync=!1,this.isOnlineSync=i}}},6832:(J,P,v)=>{v.d(P,{A:()=>w});var _=v(8429),N=v(7154),i=v(3890),f=function(k,h,e,o){return new(e||(e=Promise))(function(c,p){function C(s){try{a(o.next(s))}catch(n){p(n)}}function T(s){try{a(o.throw(s))}catch(n){p(n)}}function a(s){var n;s.done?c(s.value):(n=s.value,n instanceof e?n:new e(function(d){d(n)})).then(C,T)}a((o=o.apply(k,h||[])).next())})};function w(k,h,e,o,c){return f(this,arguments,void 0,function*(p,C,T,a,s,n={concepts:[],connections:[]}){var d,g,y,b;if(_.serviceWorker)try{const E=yield(0,_.sendMessage)("MakeTheConceptLocal",{referent:p,typeCharacter:C,userId:T,categoryId:a,typeId:s,actions:n});return!((g=(d=E?.actions)===null||d===void 0?void 0:d.concepts)===null||g===void 0)&&g.length&&(n.concepts=JSON.parse(JSON.stringify(E.actions.concepts))),!((b=(y=E?.actions)===null||y===void 0?void 0:y.connections)===null||b===void 0)&&b.length&&(n.connections=JSON.parse(JSON.stringify(E.actions.connections))),E.data}catch(E){(0,_.handleServiceWorkerException)(E)}let L=yield N.v.GetConceptByCharacterAndTypeLocal(p,s),S=L;return C=="the"&&(a=1),S.id==0&&(L=yield(0,i.A)(p,C,T,a,s,4,void 0,null,n),S=L),S})}},6846:(J,P,v)=>{let _=v(145),N=v(6966),i=v(4211),f=v(5644);class w{constructor(h=[]){this.version="8.5.6",this.plugins=this.normalize(h)}normalize(h){let e=[];for(let o of h)if(o.postcss===!0?o=o():o.postcss&&(o=o.postcss),typeof o=="object"&&Array.isArray(o.plugins))e=e.concat(o.plugins);else if(typeof o=="object"&&o.postcssPlugin)e.push(o);else if(typeof o=="function")e.push(o);else if(typeof o!="object"||!o.parse&&!o.stringify)throw new Error(o+" is not a PostCSS plugin");return e}process(h,e={}){return this.plugins.length||e.parser||e.stringifier||e.syntax?new N(this,h,e):new i(this,h,e)}use(h){return this.plugins=this.plugins.concat(this.normalize([h])),this}}J.exports=w,w.default=w,f.registerProcessor(w),_.registerProcessor(w)},6927:(J,P,v)=>{v.d(P,{A:()=>k});var _=v(8429),N=v(6047),i=v(3229),f=v(2404),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,e||[])).next())})};function k(h){return w(this,arguments,void 0,function*(e,o=null,c=null,p=null,C=null,T=null,a=null){if(_.serviceWorker)try{return(yield(0,_.sendMessage)("CreateTheComposition",{json:e,ofTheConceptId:o,ofTheConceptUserId:c,mainKey:p,userId:C,accessId:T,sessionInformationId:a})).data}catch(b){(0,_.handleServiceWorkerException)(b)}let s=C??999,n=T??4,d=a??999,g=p??0,y=(0,N.o)();for(const b in e)if(typeof e[b]!="string"&&typeof e[b]!="number")if(o==null&&c==null){let L=g,S=yield(0,f.A)(b,"",!0,s,n,d);y=S,L=S.id,g=S.id,yield k(e[b],S.id,S.userId,L,C,T,a)}else{let L=o??999,S=c??999,E=g,R=yield(0,f.A)(b,"",!0,s,n,d);y=R,yield(0,i.q)(L,S,R.id,E),yield k(e[b],R.id,R.userId,E,C,T,a)}else{let L=o??999,S=c??10267,E=g,R=yield(0,f.A)(b,e[b].toString(),!1,s,n,d);yield(0,i.q)(L,S,R.id,E)}return y})}},6931:(J,P,v)=>{v.d(P,{BG:()=>k,SL:()=>h,XZ:()=>w,ZJ:()=>i,iw:()=>f,pU:()=>e,y0:()=>N,yv:()=>_});const _=1,N=2,i=3,f=4,w=5,k=6,h=7,e=8},6948:(J,P,v)=>{v.d(P,{D3:()=>T,El:()=>C,b8:()=>p,kH:()=>c,qI:()=>o,wh:()=>a});var _=v(6812),N=v(370),i=v(8429),f=v(5760),w=function(s,n,d,g){return new(d||(d=Promise))(function(y,b){function L(R){try{E(g.next(R))}catch(U){b(U)}}function S(R){try{E(g.throw(R))}catch(U){b(U)}}function E(R){var U;R.done?y(R.value):(U=R.value,U instanceof d?U:new d(function(F){F(U)})).then(L,S)}E((g=g.apply(s,[])).next())})};let k=10;class h{}let e=null;function o(s){const n=i.Logger.logfunction("openDatabase",[s,"indexdb"]);return h.db?(i.Logger.logUpdate(n),Promise.resolve(h.db)):e||(e=new Promise(function(d,g){let y=N.B.BASE_URL+"_FreeSchema"+N.B.BASE_APPLICATION;const b=indexedDB.open(y,k);b.onupgradeneeded=L=>{let S=L.target.result,E="concept",R="connection",U="settings";S.objectStoreNames.contains(E)&&S.deleteObjectStore(E),S.objectStoreNames.contains(R)&&S.deleteObjectStore(R),S.objectStoreNames.contains(U)&&S.deleteObjectStore(U),S.createObjectStore(E,{keyPath:"id"}),S.createObjectStore(R,{keyPath:"id"}),S.createObjectStore(U,{keyPath:"id"})},b.onsuccess=function(L){let S=L.target;h.db=S.result,i.Logger.logUpdate(n),d(h.db)},b.onerror=L=>{e=null,(0,f.ey)(n,"openDatabase",L),g(L)}}),e)}function c(s,n){const d=i.Logger.logfunction("UpdateToDatabase",[s,"indexdb"]);return new Promise(function(g,y){o(s).then(b=>{const L=b.transaction(s,"readwrite").objectStore(s).put(n);L.onsuccess=S=>{i.Logger.logUpdate(d),g(n)},L.onerror=S=>{let E={status:400,ok:!1,message:"Cannot Update to the database"+s,data:S,body:n};(0,f.ey)(d,"UpdateToDatabase",E),y(E)}}).catch(b=>{let L={status:400,ok:!1,message:"Cannot update to database because you cannot open the database",data:b};(0,f.ey)(d,"UpdateToDatabase",L),y(L)})})}function p(){const s=i.Logger.logfunction("GetLastSettingsFromDatabase",["indexdb"]);return new Promise(function(n,d){let g="settings";o(g).then(y=>{let b=y.transaction(g,"readwrite").objectStore(g).getAll();b.onsuccess=()=>{let L=new _.B(!1),S=b.result;for(let E=0;E<S.length;E++)L=S[E];i.Logger.logUpdate(s),n(L)},b.onerror=L=>{(0,f.ey)(s,"GetLastSettingsFromDatabase",L),d(L)}}).catch(y=>{let b={status:400,ok:!1,message:"Cannot get last object from database because you cannot open the database",data:y};(0,f.ey)(s,"GetLastSettingsFromDatabase",b),d(b)})})}function C(s){const n=i.Logger.logfunction("AiUpdateFlag",["indexdb"]);return new Promise(function(d,g){let y="settings";o(y).then(b=>{const L=b.transaction(y,"readwrite").objectStore(y).put(s);L.onsuccess=S=>{i.Logger.logUpdate(n),d(s)},L.onerror=S=>{let E={status:400,ok:!1,message:"Cannot update AI flag",data:S,body:s};(0,f.ey)(n,"AiUpdateFlag",E),g(E)}}).catch(b=>{let L={status:400,ok:!1,message:"Cannot update AI flag because you cannot open the database",data:b};(0,f.ey)(n,"AiUpdateFlag",L),g(L)})})}function T(s){return w(this,void 0,void 0,function*(){const n=i.Logger.logfunction("getObjectsFromIndexDb",[s,"indexdb"]);return new Promise(function(d,g){o(s).then(y=>{let b=[],L=y.transaction(s,"readwrite").objectStore(s).getAll();L.onsuccess=()=>{const S=L.result;for(let E=0;E<S.length;E++)b.push(S[E]);i.Logger.logUpdate(n),d(b)}}).catch(y=>{let b={status:400,ok:!1,message:"Cannot get objects from the database because you cannot open the database",data:y};(0,f.ey)(n,"getObjectsFromIndexDb",b),g(b)})})})}function a(s,n){const d=i.Logger.logfunction("removeFromDatabase",[s,"indexdb"]);return new Promise(function(g,y){o(s).then(b=>{const L=b.transaction(s,"readwrite").objectStore(s).delete(Number(n));L.onsuccess=function(S){i.Logger.logUpdate(d),g(n)},L.onerror=S=>{let E={status:400,ok:!1,message:"Cannot remove from the database"+s,data:S};(0,f.ey)(d,"removeFromDatabase",E),y(E)}}).catch(b=>{let L={status:400,ok:!1,message:"Cannot remove from the database because you cannot open the database",data:b,body:n};(0,f.ey)(d,"removeFromDatabase",L),y(L)})})}},6966:(J,P,v)=>{let _=v(7793),N=v(145),i=v(3604),f=v(9577),w=v(3717),k=v(5644),h=v(3303),{isClean:e,my:o}=v(4151);v(6156);const c={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},p={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},C={Once:!0,postcssPlugin:!0,prepare:!0};function T(y){return typeof y=="object"&&typeof y.then=="function"}function a(y){let b=!1,L=c[y.type];return y.type==="decl"?b=y.prop.toLowerCase():y.type==="atrule"&&(b=y.name.toLowerCase()),b&&y.append?[L,L+"-"+b,0,L+"Exit",L+"Exit-"+b]:b?[L,L+"-"+b,L+"Exit",L+"Exit-"+b]:y.append?[L,0,L+"Exit"]:[L,L+"Exit"]}function s(y){let b;return b=y.type==="document"?["Document",0,"DocumentExit"]:y.type==="root"?["Root",0,"RootExit"]:a(y),{eventIndex:0,events:b,iterator:0,node:y,visitorIndex:0,visitors:[]}}function n(y){return y[e]=!1,y.nodes&&y.nodes.forEach(b=>n(b)),y}let d={};class g{get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}constructor(b,L,S){let E;if(this.stringified=!1,this.processed=!1,typeof L!="object"||L===null||L.type!=="root"&&L.type!=="document")if(L instanceof g||L instanceof w)E=n(L.root),L.map&&(S.map===void 0&&(S.map={}),S.map.inline||(S.map.inline=!1),S.map.prev=L.map);else{let R=f;S.syntax&&(R=S.syntax.parse),S.parser&&(R=S.parser),R.parse&&(R=R.parse);try{E=R(L,S)}catch(U){this.processed=!0,this.error=U}E&&!E[o]&&_.rebuild(E)}else E=n(L);this.result=new w(b,E,S),this.helpers={...d,postcss:d,result:this.result},this.plugins=this.processor.plugins.map(R=>typeof R=="object"&&R.prepare?{...R,...R.prepare(this.result)}:R)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(b){return this.async().catch(b)}finally(b){return this.async().then(b,b)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(b,L){let S=this.result.lastPlugin;try{L&&L.addToError(b),this.error=b,b.name!=="CssSyntaxError"||b.plugin?S.postcssVersion:(b.plugin=S.postcssPlugin,b.setMessage())}catch{}return b}prepareVisitors(){this.listeners={};let b=(L,S,E)=>{this.listeners[S]||(this.listeners[S]=[]),this.listeners[S].push([L,E])};for(let L of this.plugins)if(typeof L=="object")for(let S in L){if(!p[S]&&/^[A-Z]/.test(S))throw new Error(`Unknown event ${S} in ${L.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!C[S])if(typeof L[S]=="object")for(let E in L[S])b(L,E==="*"?S:S+"-"+E.toLowerCase(),L[S][E]);else typeof L[S]=="function"&&b(L,S,L[S])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let b=0;b<this.plugins.length;b++){let L=this.plugins[b],S=this.runOnRoot(L);if(T(S))try{await S}catch(E){throw this.handleError(E)}}if(this.prepareVisitors(),this.hasListener){let b=this.result.root;for(;!b[e];){b[e]=!0;let L=[s(b)];for(;L.length>0;){let S=this.visitTick(L);if(T(S))try{await S}catch(E){let R=L[L.length-1].node;throw this.handleError(E,R)}}}if(this.listeners.OnceExit)for(let[L,S]of this.listeners.OnceExit){this.result.lastPlugin=L;try{if(b.type==="document"){let E=b.nodes.map(R=>S(R,this.helpers));await Promise.all(E)}else await S(b,this.helpers)}catch(E){throw this.handleError(E)}}}return this.processed=!0,this.stringify()}runOnRoot(b){this.result.lastPlugin=b;try{if(typeof b=="object"&&b.Once){if(this.result.root.type==="document"){let L=this.result.root.nodes.map(S=>b.Once(S,this.helpers));return T(L[0])?Promise.all(L):L}return b.Once(this.result.root,this.helpers)}if(typeof b=="function")return b(this.result.root,this.result)}catch(L){throw this.handleError(L)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let b=this.result.opts,L=h;b.syntax&&(L=b.syntax.stringify),b.stringifier&&(L=b.stringifier),L.stringify&&(L=L.stringify);let S=new i(L,this.result.root,this.result.opts).generate();return this.result.css=S[0],this.result.map=S[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let b of this.plugins)if(T(this.runOnRoot(b)))throw this.getAsyncError();if(this.prepareVisitors(),this.hasListener){let b=this.result.root;for(;!b[e];)b[e]=!0,this.walkSync(b);if(this.listeners.OnceExit)if(b.type==="document")for(let L of b.nodes)this.visitSync(this.listeners.OnceExit,L);else this.visitSync(this.listeners.OnceExit,b)}return this.result}then(b,L){return this.async().then(b,L)}toString(){return this.css}visitSync(b,L){for(let[S,E]of b){let R;this.result.lastPlugin=S;try{R=E(L,this.helpers)}catch(U){throw this.handleError(U,L.proxyOf)}if(L.type!=="root"&&L.type!=="document"&&!L.parent)return!0;if(T(R))throw this.getAsyncError()}}visitTick(b){let L=b[b.length-1],{node:S,visitors:E}=L;if(S.type!=="root"&&S.type!=="document"&&!S.parent)return void b.pop();if(E.length>0&&L.visitorIndex<E.length){let[U,F]=E[L.visitorIndex];L.visitorIndex+=1,L.visitorIndex===E.length&&(L.visitors=[],L.visitorIndex=0),this.result.lastPlugin=U;try{return F(S.toProxy(),this.helpers)}catch(M){throw this.handleError(M,S)}}if(L.iterator!==0){let U,F=L.iterator;for(;U=S.nodes[S.indexes[F]];)if(S.indexes[F]+=1,!U[e])return U[e]=!0,void b.push(s(U));L.iterator=0,delete S.indexes[F]}let R=L.events;for(;L.eventIndex<R.length;){let U=R[L.eventIndex];if(L.eventIndex+=1,U===0)return void(S.nodes&&S.nodes.length&&(S[e]=!0,L.iterator=S.getIterator()));if(this.listeners[U])return void(L.visitors=this.listeners[U])}b.pop()}walkSync(b){b[e]=!0;let L=a(b);for(let S of L)if(S===0)b.nodes&&b.each(E=>{E[e]||this.walkSync(E)});else{let E=this.listeners[S];if(E&&this.visitSync(E,b.toProxy()))return}}warnings(){return this.sync().warnings()}}g.registerPostcss=y=>{d=y},J.exports=g,g.default=g,k.registerLazyResult(g),N.registerLazyResult(g)},7015:(J,P,v)=>{v.d(P,{Y:()=>C});var _=v(6700),N=v(4990),i=v(370),f=v(1317),w=v(5760),k=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})},h=v(1833),e=v(6715),o=v(8429),c=v(6759),p=function(T,a,s,n){return new(s||(s=Promise))(function(d,g){function y(S){try{L(n.next(S))}catch(E){g(E)}}function b(S){try{L(n.throw(S))}catch(E){g(E)}}function L(S){var E;S.done?d(S.value):(E=S.value,E instanceof s?E:new s(function(R){R(E)})).then(y,b)}L((n=n.apply(T,[])).next())})};class C{static CheckContains(a){for(var s=!1,n=0;n<this.conceptsSyncArray.length;n++)this.conceptsSyncArray[n].id==a.id&&(s=!0);return s}static SyncDataDelete(a){for(var s=0;s<this.conceptsSyncArray.length;s++)a==this.conceptsSyncArray[s].id&&this.conceptsSyncArray.splice(s,1);for(s=0;s<this.connectionSyncArray.length;s++)this.connectionSyncArray[s].ofTheConceptId!=a&&this.connectionSyncArray[s].toTheConceptId!=a&&this.connectionSyncArray[s].typeId!=a||this.connectionSyncArray.splice(s,1)}static CheckContainsConnection(a){for(var s=!1,n=0;n<this.connectionSyncArray.length;n++)this.connectionSyncArray[n].id==a.id&&(s=!0);return s}static AddConcept(a){this.conceptsSyncArray.push(a)}static RemoveConcept(a){for(var s=0;s<this.conceptsSyncArray.length;s++)this.conceptsSyncArray[s].id==a.id&&this.conceptsSyncArray.splice(s,1)}static AddConnection(a){this.connectionSyncArray.push(a)}static RemoveConnection(a){for(var s=0;s<this.connectionSyncArray.length;s++)this.connectionSyncArray[s].id==a.id&&this.connectionSyncArray.splice(s,1)}static SyncDataOnline(){return p(this,void 0,void 0,function*(){if(o.serviceWorker)try{return(yield(0,o.sendMessage)("SyncData__SyncDataOnline",{})).data}catch(a){(0,o.handleServiceWorkerException)(a)}for(let a=0;a<this.conceptsSyncArray.length;a++)h.I.AddConcept(this.conceptsSyncArray[a]);for(let a=0;a<this.connectionSyncArray.length;a++)e.d.AddConnection(this.connectionSyncArray[a]);if(this.conceptsSyncArray.length>0){let a=this.conceptsSyncArray.slice();this.conceptsSyncArray=[],(0,_.Y)(a)}if(this.connectionSyncArray.length>0){let a=this.connectionSyncArray.slice();this.connectionSyncArray=[],yield function(s){return k(this,void 0,void 0,function*(){let n=new N.N(0,0,0,0,0,0,0);try{var d=(0,f.Xr)(),g=JSON.stringify(s);const y=yield fetch(i.B.CreateTheConnectionUrl(),{method:"POST",headers:d,body:g});return y.ok?yield y.json():(0,w.ry)(y),n}catch(y){throw y}})}(a)}return c.a.clearAll(),"done"})}}C.conceptsSyncArray=[],C.connectionSyncArray=[]},7071:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(4646))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.ID,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o.prototype.valueToString=function(){return"#"+k.prototype.valueToString.call(this)},o}(N.default);P.default=w,J.exports=P.default},7149:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(8349))&&_.__esModule?_:{default:_},i=function(h,e){if(h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var o=f(e);if(o&&o.has(h))return o.get(h);var c={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in h)if(C!=="default"&&Object.prototype.hasOwnProperty.call(h,C)){var T=p?Object.getOwnPropertyDescriptor(h,C):null;T&&(T.get||T.set)?Object.defineProperty(c,C,T):c[C]=h[C]}return c.default=h,o&&o.set(h,c),c}(v(680));function f(h){if(typeof WeakMap!="function")return null;var e=new WeakMap,o=new WeakMap;return(f=function(c){return c?o:e})(h)}var w=function(h){return new N.default(h)};Object.assign(w,i),delete w.__esModule;var k=w;P.default=k,J.exports=P.default},7154:(J,P,v)=>{v.d(P,{v:()=>d});var _=v(830),N=v(9196),i=function(g,y,b,L){return new(b||(b=Promise))(function(S,E){function R(M){try{F(L.next(M))}catch(W){E(W)}}function U(M){try{F(L.throw(M))}catch(W){E(W)}}function F(M){var W;M.done?S(M.value):(W=M.value,W instanceof b?W:new b(function(j){j(W)})).then(R,U)}F((L=L.apply(g,[])).next())})};class f{static addNodeToTree(y){if(this.root==null)return this.root=y,this.root;this.root=this.root.addNode(y,this.root,this.root.height)}static addConceptToTree(y){var b=new N.x(y.id,y,null,null);new N.x(y.characterValue,y,null,null),this.addNodeToTree(b)}static waitForDataToLoad(){return i(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalDataLoaded)return y("done");setTimeout(f.checkFlag,1e3,y)}static getNodeFromTree(y){return i(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(y,this.root):null})}static getCharacterAndTypeFromTree(y,b){return this.root?this.root.getFromNodeWithCharacterAndType(y,b,this.root):this.root}static updateSyncStatus(y){return this.root?this.root.updateNodeSyncStatus(y,!0,this.root):this.root}static removeNodeFromTree(y){return i(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,y))})}}f.root=null;var w=function(g,y,b,L){return new(b||(b=Promise))(function(S,E){function R(M){try{F(L.next(M))}catch(W){E(W)}}function U(M){try{F(L.throw(M))}catch(W){E(W)}}function F(M){var W;M.done?S(M.value):(W=M.value,W instanceof b?W:new b(function(j){j(W)})).then(R,U)}F((L=L.apply(g,[])).next())})};class k{static waitForDataToLoad(){return w(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalCharacterLoaded)return y("done");setTimeout(k.checkFlag,1e3,y)}static addNodeToTree(y){return w(this,void 0,void 0,function*(){return this.LocalCharacterRoot==null?(this.LocalCharacterRoot=y,this.LocalCharacterRoot):(this.LocalCharacterRoot=this.LocalCharacterRoot.addCharacterNode(y,this.LocalCharacterRoot,this.LocalCharacterRoot.height),this.LocalCharacterRoot)})}static addConceptToTree(y){if(y.characterValue!=""){var b=new N.x(y.characterValue,y,null,null);this.addNodeToTree(b)}}static getNodeFromTree(y){return this.LocalCharacterRoot?this.LocalCharacterRoot.getCharacterFromNode(y,this.LocalCharacterRoot):this.LocalCharacterRoot}static getCharacterAndTypeFromTree(y,b){return w(this,void 0,void 0,function*(){return this.LocalCharacterRoot?this.LocalCharacterRoot.getFromNodeWithCharacterAndType(y,b,this.LocalCharacterRoot):this.LocalCharacterRoot})}static getCharacterAndCategoryFromTree(y,b){return w(this,void 0,void 0,function*(){return this.LocalCharacterRoot?this.LocalCharacterRoot.getFromNodeWithCharacterAndCategory(y,b,this.LocalCharacterRoot):this.LocalCharacterRoot})}static removeConceptType(y,b){this.LocalCharacterRoot&&(this.LocalCharacterRoot=this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot,y,b))}}k.LocalCharacterRoot=null;var h=function(g,y,b,L){return new(b||(b=Promise))(function(S,E){function R(M){try{F(L.next(M))}catch(W){E(W)}}function U(M){try{F(L.throw(M))}catch(W){E(W)}}function F(M){var W;M.done?S(M.value):(W=M.value,W instanceof b?W:new b(function(j){j(W)})).then(R,U)}F((L=L.apply(g,[])).next())})};class e{static addNodeToTree(y){return h(this,void 0,void 0,function*(){return this.LocalTypeRoot==null?(this.LocalTypeRoot=y,this.LocalTypeRoot):(this.LocalTypeRoot=this.LocalTypeRoot.addTypeNode(y,this.LocalTypeRoot,this.LocalTypeRoot.height),this.LocalTypeRoot)})}static addConceptToTree(y){if(y.typeId!=0){var b=new N.x(y.typeId,y,null,null);this.addNodeToTree(b)}}static removeConceptType(y,b){this.LocalTypeRoot&&(this.LocalTypeRoot=this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot,y,b))}static getNodeFromTree(y){return this.LocalTypeRoot?this.LocalTypeRoot.getFromNode(y,this.LocalTypeRoot):this.LocalTypeRoot}static getTypeVariantsFromTree(y){var b=this.getNodeFromTree(y),L=[];if(b){L.push(b?.value);for(let S=0;S<b.variants.length;S++)L.push(b.variants[S].value);return L}}static waitForDataToLoad(){return h(this,void 0,void 0,function*(){return new Promise((y,b)=>{this.checkFlag(y),setTimeout(()=>{b("not")},25e3)})})}static checkFlag(y){if(_.B.isLocalTypeLoaded)return y("done");setTimeout(e.checkFlag,1e3,y)}static getTypeVariantsFromTreeWithUserId(y,b){return h(this,void 0,void 0,function*(){var L=[],S=this.getNodeFromTree(y);if(S){S.value.userId!=b&&S.value.userId!=999||L.push(S?.value);for(let E=0;E<S.variants.length;E++)S.variants[E].value.userId!=b&&S.value.userId!=999||L.push(S.variants[E].value)}return L})}}e.LocalTypeRoot=null;var o=v(9911),c=v(1833),p=v(1549),C=v(3967),T=v(7580),a=v(8429),s=v(8444),n=function(g,y,b,L){return new(b||(b=Promise))(function(S,E){function R(M){try{F(L.next(M))}catch(W){E(W)}}function U(M){try{F(L.throw(M))}catch(W){E(W)}}function F(M){var W;M.done?S(M.value):(W=M.value,W instanceof b?W:new b(function(j){j(W)})).then(R,U)}F((L=L.apply(g,[])).next())})};class d{constructor(){this.name="conceptsArray"}static AddConcept(y){y.id!=0&&(f.addConceptToTree(y),k.addConceptToTree(y),e.addConceptToTree(y),this.localconceptsArray.push(y))}static AddPermanentConcept(y){y.id!=0&&(f.removeNodeFromTree(y.ghostId),k.removeConceptType(y.characterValue,y.ghostId),e.removeConceptType(y.typeId,y.ghostId),p.G.addConceptToTree(y),c.I.AddConcept(y),(0,a.AddGhostConcept)(y,y.userId,s.b.sessionId))}static RemoveConcept(y){return n(this,void 0,void 0,function*(){try{y.id!=0&&(f.removeNodeFromTree(y.ghostId),k.removeConceptType(y.characterValue,y.ghostId),e.removeConceptType(y.typeId,y.ghostId))}catch(b){throw b}})}static RemoveConceptById(y){return n(this,void 0,void 0,function*(){try{let b=yield d.GetConcept(y);b.id!=0&&(f.removeNodeFromTree(y),k.removeConceptType(b.characterValue,b.ghostId),e.removeConceptType(b.typeId,b.ghostId),T.H.RemoveConcept(b))}catch(b){throw b}})}static AddConceptToMemory(y){y.id!=0&&(f.addConceptToTree(y),k.addConceptToTree(y),e.addConceptToTree(y))}static GetConcept(y){return n(this,void 0,void 0,function*(){var b=(0,o.u)(),L=yield f.getNodeFromTree(y);if(L?.value){var S=L.value;S&&(b=S)}return b})}static UpdateConceptSyncStatus(y){return n(this,void 0,void 0,function*(){f.updateSyncStatus(y)})}static GetConceptByGhostId(y){return n(this,void 0,void 0,function*(){var b=(0,o.u)(),L=yield p.G.getNodeFromTree(y);if(L?.value){var S=L.value;S&&(b=S)}return b})}static GetConceptByCharacter(y){return n(this,void 0,void 0,function*(){var b=(0,o.u)(),L=k.getNodeFromTree(y);return L&&(b=L.value),b})}static GetConceptByCharacterAndTypeLocal(y,b){return n(this,void 0,void 0,function*(){var L=(0,o.u)(),S=yield k.getCharacterAndTypeFromTree(y,b);return S&&(L=S.value),L})}static GetConceptByCharacterAndCategoryLocal(y,b){return n(this,void 0,void 0,function*(){var L=(0,o.u)(),S=yield k.getCharacterAndCategoryFromTree(y,b);return S&&(L=S.value),L})}static GetConceptsByTypeId(y){let b=[];for(var L=0;L<this.localconceptsArray.length;L++)this.localconceptsArray[L].typeId==y&&b.push(this.localconceptsArray[L]);return b}static GetConceptsByTypeIdAndUser(y,b){return n(this,void 0,void 0,function*(){let L=[];return L=yield e.getTypeVariantsFromTreeWithUserId(y,b),L})}static ClearData(){return n(this,void 0,void 0,function*(){this.localconceptsArray=[],C.G.connectionArray=[]})}getName(){return this.name}}d.localconceptsArray=[]},7258:(J,P,v)=>{v.d(P,{S5:()=>h,kH:()=>o,qI:()=>k});var _=v(5760),N=v(8429),i=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};let f=10;class w{}function k(c){const p=N.Logger.logfunction("openDatabase",arguments);return new Promise(function(C,T){w.db&&(N.Logger.logUpdate(p),C(w.db));let a=N.BaseUrl.BASE_URL+"_FreeSchemaLocal"+N.BaseUrl.BASE_APPLICATION;const s=indexedDB.open(a,f);s.onupgradeneeded=n=>{var d=n.target.result,g="localconcept",y="localconnection",b="localid";d.objectStoreNames.contains(g)&&d.deleteObjectStore(g),d.objectStoreNames.contains(y)&&d.deleteObjectStore(y),d.objectStoreNames.contains(b)&&d.deleteObjectStore(b),!d.objectStoreNames.contains(g)&&(d.createObjectStore(g,{keyPath:"id"}).transaction.oncomplete=L=>{}),d.objectStoreNames.contains(y)||(d.createObjectStore(y,{keyPath:"id"}).transaction.oncomplete=L=>{}),d.objectStoreNames.contains(b)||(d.createObjectStore(b,{keyPath:"id"}).transaction.oncomplete=L=>{e(b,{id:0,value:-100}),e(b,{id:1,value:-200}),e(b,{id:3,value:N.BaseUrl.getRandomizer()})}),C(d)},s.onerror=n=>{indexedDB.deleteDatabase(a),k(c),(0,_.ey)(p,"openDatabase",n),T(n)},s.onsuccess=function(n){var d=n.target;w.db=d.result,N.Logger.logUpdate(p),C(w.db)}})}function h(c){var p=arguments;return i(this,void 0,void 0,function*(){const C=N.Logger.logfunction("getObjectsFromLocalIndexDb",p);return new Promise(function(T,a){k(c).then(s=>{var n=[],d=s.transaction(c,"readwrite").objectStore(c).getAll();d.onsuccess=()=>{const g=d.result;for(var y=0;y<g.length;y++)n.push(g[y]);N.Logger.logUpdate(C),T(n)}}).catch(s=>{let n={status:400,ok:!1,message:"Cannot get objects from database because you cannot open the Local database",data:s};(0,_.ey)(C,"getObjectsFromLocalIndexDb",n),a(n)})})})}function e(c,p){const C=N.Logger.logfunction("storeToDatabase",[c,"localindexdb"]);return new Promise(function(T,a){k(c).then(s=>{const n=s.transaction(c,"readwrite").objectStore(c).add(p);n.onsuccess=d=>{N.Logger.logUpdate(C),T(p)},n.onerror=d=>{let g={status:400,ok:!1,message:"Cannot store to the Local database "+c,data:d,body:p};(0,_.ey)(C,"storeToDatabase",g),a(g)}}).catch(s=>{let n={status:400,ok:!1,message:"Cannot store to database because you cannot open the Local database",data:s};(0,_.ey)(C,"storeToDatabase",n),a(n)})})}function o(c,p){const C=N.Logger.logfunction("UpdateToDatabase",arguments);return new Promise(function(T,a){k(c).then(s=>{const n=s.transaction(c,"readwrite").objectStore(c).put(p);n.onsuccess=d=>{N.Logger.logUpdate(C),T(p)},n.onerror=d=>{let g={status:400,ok:!1,message:"Cannot Update to the Local database"+c,data:d,body:p};(0,_.ey)(C,"UpdateToDatabase",g),a(g)}}).catch(s=>{let n={status:400,ok:!1,message:"Cannot update to database because you cannot open the Local database",data:s};(0,_.ey)(C,"UpdateToDatabase",n),a(n)})})}},7324:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(3631))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.PSEUDO,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o.prototype.toString=function(){var c=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),c,this.rawSpaceAfter].join("")},o}(N.default);P.default=w,J.exports=P.default},7580:(J,P,v)=>{v.d(P,{H:()=>a});var _=v(370),N=v(8444),i=v(8429),f=v(5760),w=function(s,n,d,g){return new(d||(d=Promise))(function(y,b){function L(R){try{E(g.next(R))}catch(U){b(U)}}function S(R){try{E(g.throw(R))}catch(U){b(U)}}function E(R){var U;R.done?y(R.value):(U=R.value,U instanceof d?U:new d(function(F){F(U)})).then(L,S)}E((g=g.apply(s,n||[])).next())})};const k=(s,n,...d)=>w(void 0,[s,n,...d],void 0,function*(g,y,b=!0){let L={concepts:[],connections:[]};try{const S=new Headers;let E={concepts:g,connections:y};S.set("Content-Type","application/json"),S.set("Authorization","Bearer "+N.b.BearerAccessToken),S.set("Accept","application/json"),S.set("X-Session-Id",N.b.sessionId.toString()),S.set("Randomizer",_.B.getRandomizer().toString());const R=yield fetch(_.B.CreateGhostConceptApiUrl(b),{method:"POST",headers:S,body:JSON.stringify(E)});if(!R.ok)throw(0,f.ry)(R),new Error(`Error! status: ${R.status}`);const U=yield R.json();return L.concepts=U.concepts,L.connections=U.connections,L}catch(S){throw S}});function h(s,n){const d=[];for(let g=0;g<s.length;g+=n){const y=s.slice(g,g+n);d.push(y)}return d}const e=(...s)=>w(void 0,[...s],void 0,function*(n=[]){return yield Promise.all(n.map(d=>{let g=JSON.parse(JSON.stringify(d));return delete g.type,delete g.ofConcept,delete g.toConcept,g}))});var o=v(7258),c=v(7154),p=v(3967),C=v(6759),T=function(s,n,d,g){return new(d||(d=Promise))(function(y,b){function L(R){try{E(g.next(R))}catch(U){b(U)}}function S(R){try{E(g.throw(R))}catch(U){b(U)}}function E(R){var U;R.done?y(R.value):(U=R.value,U instanceof d?U:new d(function(F){F(U)})).then(L,S)}E((g=g.apply(s,n||[])).next())})};class a{static CheckContains(n){for(var d=!1,g=0;g<this.conceptsSyncArray.length;g++)this.conceptsSyncArray[g].id==n.id&&(d=!0);return d}static SyncDataDelete(n){for(var d=0;d<this.conceptsSyncArray.length;d++)n==this.conceptsSyncArray[d].id&&this.conceptsSyncArray.splice(d,1);for(d=0;d<this.connectionSyncArray.length;d++)this.connectionSyncArray[d].ofTheConceptId!=n&&this.connectionSyncArray[d].toTheConceptId!=n&&this.connectionSyncArray[d].typeId!=n||this.connectionSyncArray.splice(d,1)}static CheckContainsConnection(n){for(var d=!1,g=0;g<this.connectionSyncArray.length;g++)this.connectionSyncArray[g].id==n.id&&(d=!0);return d}static AddConcept(n){try{let d=!1;a.CheckIfTheConceptIdExists(n.id,this.conceptsSyncArray).id!=0&&(d=!0),d||this.conceptsSyncArray.push(n)}catch(d){throw d}}static RemoveConcept(n){for(var d=0;d<this.conceptsSyncArray.length;d++)this.conceptsSyncArray[d].id==n.id&&this.conceptsSyncArray.splice(d,1)}static SyncDataOnlineWithoutAuth(n,d){return T(this,arguments,void 0,function*(g,y,b=!1){return a.SyncDataOnline(g,y,b)})}static SyncDataOnline(n,d){return T(this,arguments,void 0,function*(g,y,b=!0){let L=performance.now();setTimeout(()=>{},5e3);try{if(i.serviceWorker)try{return(yield(0,i.sendMessage)("LocalSyncData__SyncDataOnline",{transactionId:g,withAuth:b})).data}catch(W){(0,i.handleServiceWorkerException)(W)}let S=[],E=[];if(g&&this.transactionCollections.some(W=>W.id==g)){const W=this.transactionCollections.find(j=>j.id==g);if(this.transactionCollections=this.transactionCollections.filter(j=>j.id!=g),this.transactionCollections=this.transactionCollections.filter(j=>new Date(j.createdDate).getTime()>new Date().getTime()-6048e5),!W)return;S=W.data.concepts.slice(),E=W.data.connections.slice()}else Array.isArray(y?.concepts)&&Array.isArray(y?.connections)?(S=y.concepts.slice(),E=y.connections.slice(),this.conceptsSyncArray=this.conceptsSyncArray.filter(W=>y.concepts.some(q=>W.id==q.id||W.ghostId==q.ghostId)),this.connectionSyncArray=this.connectionSyncArray.filter(W=>y.connections.some(q=>W.id==q.id||W.ghostId==q.ghostId))):(S=this.conceptsSyncArray.slice()||[],E=this.connectionSyncArray.slice()||[],this.connectionSyncArray=[],this.conceptsSyncArray=[]);let R=[];for(let W=0;W<S.length;W++)R.push(S[W]),yield c.v.UpdateConceptSyncStatus(S[W].id);if(R.length===0&&E.length===0)return S;yield this.UpdateConceptListToIncludeRelatedConcepts(E,R);let U=yield function(W,j){return w(this,arguments,void 0,function*(q,X,Z=!0){const ae=i.Logger.logfunction("CreateTheGhostConceptApi",[q.length,X.length]);try{let ie={concepts:[],connections:[]};if(q.length===0&&X.length===0)return i.Logger.logUpdate(ae),ie;const he=yield e(q),ne=yield e(X);if(q.length+X.length<=2*1e3){const ce=yield k(he,ne,Z);return Array.isArray(ce?.concepts)&&(ie.concepts=[...ie.concepts,...ce.concepts]),Array.isArray(ce?.connections)&&(ie.connections=[...ie.connections,...ce.connections]),i.Logger.logUpdate(ae),ie}const Q=h(he,1e3),oe=h(ne,1e3),ee=[],$=[];for(let ce=0;ce<Q.length;ce++){const de=Q[ce];ee.push(k(de,[],Z))}const re=yield Promise.all(ee);for(let ce=0;ce<re.length;ce++){const de=re[ce];Array.isArray(de?.concepts)&&(ie.concepts=[...ie.concepts,...de.concepts]),Array.isArray(de?.connections)&&(ie.connections=[...ie.connections,...de.connections])}for(let ce=0;ce<oe.length;ce++){const de=oe[ce];$.push(k([],de,Z))}const fe=yield Promise.all($);for(let ce=0;ce<fe.length;ce++){const de=fe[ce];Array.isArray(de?.concepts)&&(ie.concepts=[...ie.concepts,...de.concepts]),Array.isArray(de?.connections)&&(ie.connections=[...ie.connections,...de.connections])}return i.Logger.logUpdate(ae),ie}catch(H){throw(0,f.ey)(ae,"CreateTheGhostConceptApi",H),H}})}(R,E,b),F=U.concepts,M=U.connections;for(let W=0;W<F.length;W++)c.v.AddPermanentConcept(F[W]);for(let W=0;W<M.length;W++)p.G.AddPermanentConnection(M[W]);return C.a.clearAll(),S}catch(S){throw i.Logger.logError(L,"unknown",void 0,"unknown",void 0,500,S,"SyncDataOnline",[],"unknown",void 0),S}})}static ConvertGhostIdsInConnections(n){var d,g,y;for(let b=0;b<n.length;b++){let L=n[b].ofTheConceptId,S=n[b].toTheConceptId,E=n[b].typeId,R=(d=a.ghostIdMap.get(L))!==null&&d!==void 0?d:L,U=(g=a.ghostIdMap.get(S))!==null&&g!==void 0?g:S,F=(y=a.ghostIdMap.get(E))!==null&&y!==void 0?y:E;n[b].ofTheConceptId=R,n[b].toTheConceptId=U,n[b].typeId=F}}static UpdateConceptListToIncludeRelatedConcepts(n,d){return T(this,void 0,void 0,function*(){for(let g=0;g<n.length;g++){let y=n[g].ofTheConceptId,b=n[g].toTheConceptId,L=n[g].typeId;if(y<0){let S=this.CheckIfTheConceptIdExists(y,d);S.id==0&&(S=yield c.v.GetConceptByGhostId(y),S.id!=0?S.id!=S.ghostId&&(n[g].ofTheConceptId=S.id):(S=yield c.v.GetConcept(y),this.AddConceptIfDoesNotExist(S,d)))}if(b<0){let S=this.CheckIfTheConceptIdExists(b,d);S.id==0&&(S=yield c.v.GetConceptByGhostId(b),S.id!=0?S.id!=S.ghostId&&(n[g].toTheConceptId=S.id):(S=yield c.v.GetConcept(b),this.AddConceptIfDoesNotExist(S,d)))}if(L<0){let S=this.CheckIfTheConceptIdExists(L,d);S.id==0&&(S=yield c.v.GetConceptByGhostId(L),S.id!=0?S.id!=S.ghostId&&(n[g].typeId=S.id):(S=yield c.v.GetConcept(L),this.AddConceptIfDoesNotExist(S,d)))}}})}static AddConceptIfDoesNotExist(n,d=[]){let g=!1;for(let y=0;y<d.length;y++)n.ghostId==d[y].ghostId&&(g=!0);g||d.push(n)}static CheckIfTheConceptIdExists(n,d=[]){let g=(0,i.CreateDefaultLConcept)();for(let y=0;y<d.length;y++)n!=d[y].ghostId&&n!=d[y].id||(g=d[y]);return g}static AddConnection(n){this.connectionSyncArray.push(n)}static RemoveConnection(n){for(var d=0;d<this.connectionSyncArray.length;d++)this.connectionSyncArray[d].id==n.id&&this.connectionSyncArray.splice(d,1)}static RemoveConnectionById(n){for(var d=0;d<this.connectionSyncArray.length;d++)this.connectionSyncArray[d].id==n&&this.connectionSyncArray.splice(d,1)}static syncDataLocalDb(){return T(this,void 0,void 0,function*(){if(this.conceptsSyncArray.length>0){for(let n=0;n<this.conceptsSyncArray.length;n++)(0,o.kH)("localconcept",this.conceptsSyncArray[n]);this.conceptsSyncArray=[]}if(this.connectionSyncArray.length>0){for(let n=0;n<this.connectionSyncArray.length;n++)(0,o.kH)("localconnection",this.connectionSyncArray[n]);this.connectionSyncArray=[]}return"done"})}static initializeTransaction(n){return T(this,void 0,void 0,function*(){try{if(i.serviceWorker)try{return(yield(0,i.sendMessage)("LocalSyncData__initializeTransaction",{transactionId:n})).data}catch(d){(0,i.handleServiceWorkerException)(d)}if(this.transactionCollections.some(d=>d.id==n))return;this.transactionCollections.push({id:n,data:{concepts:[],connections:[]},createdDate:new Date().toISOString()})}catch{}})}static markTransactionActions(n,d){return T(this,void 0,void 0,function*(){try{if(i.serviceWorker)try{return(yield(0,i.sendMessage)("LocalSyncData__markTransactionActions",{transactionId:n,actions:d})).data}catch(g){(0,i.handleServiceWorkerException)(g)}this.transactionCollections=this.transactionCollections.map(g=>g.id==n?Object.assign(Object.assign({},g),{data:JSON.parse(JSON.stringify(d))}):g),this.conceptsSyncArray=this.conceptsSyncArray.filter(g=>!d.concepts.some(y=>y.id==g.id||y.ghostId==g.id)),this.connectionSyncArray=this.connectionSyncArray.filter(g=>!d.connections.some(y=>y.id==g.id||y.ghostId==g.id))}catch{}})}static rollbackTransaction(n,d){return T(this,void 0,void 0,function*(){try{if(i.serviceWorker)try{return(yield(0,i.sendMessage)("LocalSyncData__rollbackTransaction",{transactionId:n,actions:d})).data}catch(g){(0,i.handleServiceWorkerException)(g)}if(this.transactionCollections.some(g=>g.id==n))return;this.transactionCollections=this.transactionCollections.filter(g=>g.id!=n)}catch{}})}}a.conceptsSyncArray=[],a.connectionSyncArray=[],a.ghostIdMap=new Map,a.transactionCollections=[]},7668:J=>{const P={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};class v{constructor(N){this.builder=N}atrule(N,i){let f="@"+N.name,w=N.params?this.rawValue(N,"params"):"";if(N.raws.afterName!==void 0?f+=N.raws.afterName:w&&(f+=" "),N.nodes)this.block(N,f+w);else{let k=(N.raws.between||"")+(i?";":"");this.builder(f+w+k,N)}}beforeAfter(N,i){let f;f=N.type==="decl"?this.raw(N,null,"beforeDecl"):N.type==="comment"?this.raw(N,null,"beforeComment"):i==="before"?this.raw(N,null,"beforeRule"):this.raw(N,null,"beforeClose");let w=N.parent,k=0;for(;w&&w.type!=="root";)k+=1,w=w.parent;if(f.includes(`
`)){let h=this.raw(N,null,"indent");if(h.length)for(let e=0;e<k;e++)f+=h}return f}block(N,i){let f,w=this.raw(N,"between","beforeOpen");this.builder(i+w+"{",N,"start"),N.nodes&&N.nodes.length?(this.body(N),f=this.raw(N,"after")):f=this.raw(N,"after","emptyBody"),f&&this.builder(f),this.builder("}",N,"end")}body(N){let i=N.nodes.length-1;for(;i>0&&N.nodes[i].type==="comment";)i-=1;let f=this.raw(N,"semicolon");for(let w=0;w<N.nodes.length;w++){let k=N.nodes[w],h=this.raw(k,"before");h&&this.builder(h),this.stringify(k,i!==w||f)}}comment(N){let i=this.raw(N,"left","commentLeft"),f=this.raw(N,"right","commentRight");this.builder("/*"+i+N.text+f+"*/",N)}decl(N,i){let f=this.raw(N,"between","colon"),w=N.prop+f+this.rawValue(N,"value");N.important&&(w+=N.raws.important||" !important"),i&&(w+=";"),this.builder(w,N)}document(N){this.body(N)}raw(N,i,f){let w;if(f||(f=i),i&&(w=N.raws[i],w!==void 0))return w;let k=N.parent;if(f==="before"&&(!k||k.type==="root"&&k.first===N||k&&k.type==="document"))return"";if(!k)return P[f];let h=N.root();if(h.rawCache||(h.rawCache={}),h.rawCache[f]!==void 0)return h.rawCache[f];if(f==="before"||f==="after")return this.beforeAfter(N,f);{let o="raw"+((e=f)[0].toUpperCase()+e.slice(1));this[o]?w=this[o](h,N):h.walk(c=>{if(w=c.raws[i],w!==void 0)return!1})}var e;return w===void 0&&(w=P[f]),h.rawCache[f]=w,w}rawBeforeClose(N){let i;return N.walk(f=>{if(f.nodes&&f.nodes.length>0&&f.raws.after!==void 0)return i=f.raws.after,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),i&&(i=i.replace(/\S/g,"")),i}rawBeforeComment(N,i){let f;return N.walkComments(w=>{if(w.raws.before!==void 0)return f=w.raws.before,f.includes(`
`)&&(f=f.replace(/[^\n]+$/,"")),!1}),f===void 0?f=this.raw(i,null,"beforeDecl"):f&&(f=f.replace(/\S/g,"")),f}rawBeforeDecl(N,i){let f;return N.walkDecls(w=>{if(w.raws.before!==void 0)return f=w.raws.before,f.includes(`
`)&&(f=f.replace(/[^\n]+$/,"")),!1}),f===void 0?f=this.raw(i,null,"beforeRule"):f&&(f=f.replace(/\S/g,"")),f}rawBeforeOpen(N){let i;return N.walk(f=>{if(f.type!=="decl"&&(i=f.raws.between,i!==void 0))return!1}),i}rawBeforeRule(N){let i;return N.walk(f=>{if(f.nodes&&(f.parent!==N||N.first!==f)&&f.raws.before!==void 0)return i=f.raws.before,i.includes(`
`)&&(i=i.replace(/[^\n]+$/,"")),!1}),i&&(i=i.replace(/\S/g,"")),i}rawColon(N){let i;return N.walkDecls(f=>{if(f.raws.between!==void 0)return i=f.raws.between.replace(/[^\s:]/g,""),!1}),i}rawEmptyBody(N){let i;return N.walk(f=>{if(f.nodes&&f.nodes.length===0&&(i=f.raws.after,i!==void 0))return!1}),i}rawIndent(N){if(N.raws.indent)return N.raws.indent;let i;return N.walk(f=>{let w=f.parent;if(w&&w!==N&&w.parent&&w.parent===N&&f.raws.before!==void 0){let k=f.raws.before.split(`
`);return i=k[k.length-1],i=i.replace(/\S/g,""),!1}}),i}rawSemicolon(N){let i;return N.walk(f=>{if(f.nodes&&f.nodes.length&&f.last.type==="decl"&&(i=f.raws.semicolon,i!==void 0))return!1}),i}rawValue(N,i){let f=N[i],w=N.raws[i];return w&&w.value===f?w.raw:f}root(N){this.body(N),N.raws.after&&this.builder(N.raws.after)}rule(N){this.block(N,this.rawValue(N,"selector")),N.raws.ownSemicolon&&this.builder(N.raws.ownSemicolon,N,"end")}stringify(N,i){if(!this[N.type])throw new Error("Unknown AST node type "+N.type+". Maybe you need to change PostCSS stringifier.");this[N.type](N,i)}}J.exports=v,v.default=v},7762:(J,P,v)=>{function _(N,i="DESC"){return i=="ASC"?N.sort(function(f,w){return f.id-w.id}):N.sort(function(f,w){return w.id-f.id}),N}v.d(P,{X:()=>_})},7793:(J,P,v)=>{let _,N,i,f,w=v(9371),k=v(5238),h=v(3152),{isClean:e,my:o}=v(4151);function c(T){return T.map(a=>(a.nodes&&(a.nodes=c(a.nodes)),delete a.source,a))}function p(T){if(T[e]=!1,T.proxyOf.nodes)for(let a of T.proxyOf.nodes)p(a)}class C extends h{get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}append(...a){for(let s of a){let n=this.normalize(s,this.last);for(let d of n)this.proxyOf.nodes.push(d)}return this.markDirty(),this}cleanRaws(a){if(super.cleanRaws(a),this.nodes)for(let s of this.nodes)s.cleanRaws(a)}each(a){if(!this.proxyOf.nodes)return;let s,n,d=this.getIterator();for(;this.indexes[d]<this.proxyOf.nodes.length&&(s=this.indexes[d],n=a(this.proxyOf.nodes[s],s),n!==!1);)this.indexes[d]+=1;return delete this.indexes[d],n}every(a){return this.nodes.every(a)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let a=this.lastEach;return this.indexes[a]=0,a}getProxyProcessor(){return{get:(a,s)=>s==="proxyOf"?a:a[s]?s==="each"||typeof s=="string"&&s.startsWith("walk")?(...n)=>a[s](...n.map(d=>typeof d=="function"?(g,y)=>d(g.toProxy(),y):d)):s==="every"||s==="some"?n=>a[s]((d,...g)=>n(d.toProxy(),...g)):s==="root"?()=>a.root().toProxy():s==="nodes"?a.nodes.map(n=>n.toProxy()):s==="first"||s==="last"?a[s].toProxy():a[s]:a[s],set:(a,s,n)=>(a[s]===n||(a[s]=n,s!=="name"&&s!=="params"&&s!=="selector"||a.markDirty()),!0)}}index(a){return typeof a=="number"?a:(a.proxyOf&&(a=a.proxyOf),this.proxyOf.nodes.indexOf(a))}insertAfter(a,s){let n,d=this.index(a),g=this.normalize(s,this.proxyOf.nodes[d]).reverse();d=this.index(a);for(let y of g)this.proxyOf.nodes.splice(d+1,0,y);for(let y in this.indexes)n=this.indexes[y],d<n&&(this.indexes[y]=n+g.length);return this.markDirty(),this}insertBefore(a,s){let n,d=this.index(a),g=d===0&&"prepend",y=this.normalize(s,this.proxyOf.nodes[d],g).reverse();d=this.index(a);for(let b of y)this.proxyOf.nodes.splice(d,0,b);for(let b in this.indexes)n=this.indexes[b],d<=n&&(this.indexes[b]=n+y.length);return this.markDirty(),this}normalize(a,s){if(typeof a=="string")a=c(N(a).nodes);else if(a===void 0)a=[];else if(Array.isArray(a)){a=a.slice(0);for(let n of a)n.parent&&n.parent.removeChild(n,"ignore")}else if(a.type==="root"&&this.type!=="document"){a=a.nodes.slice(0);for(let n of a)n.parent&&n.parent.removeChild(n,"ignore")}else if(a.type)a=[a];else if(a.prop){if(a.value===void 0)throw new Error("Value field is missed in node creation");typeof a.value!="string"&&(a.value=String(a.value)),a=[new k(a)]}else if(a.selector||a.selectors)a=[new f(a)];else if(a.name)a=[new _(a)];else{if(!a.text)throw new Error("Unknown node type in node creation");a=[new w(a)]}return a.map(n=>(n[o]||C.rebuild(n),(n=n.proxyOf).parent&&n.parent.removeChild(n),n[e]&&p(n),n.raws||(n.raws={}),n.raws.before===void 0&&s&&s.raws.before!==void 0&&(n.raws.before=s.raws.before.replace(/\S/g,"")),n.parent=this.proxyOf,n))}prepend(...a){a=a.reverse();for(let s of a){let n=this.normalize(s,this.first,"prepend").reverse();for(let d of n)this.proxyOf.nodes.unshift(d);for(let d in this.indexes)this.indexes[d]=this.indexes[d]+n.length}return this.markDirty(),this}push(a){return a.parent=this,this.proxyOf.nodes.push(a),this}removeAll(){for(let a of this.proxyOf.nodes)a.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(a){let s;a=this.index(a),this.proxyOf.nodes[a].parent=void 0,this.proxyOf.nodes.splice(a,1);for(let n in this.indexes)s=this.indexes[n],s>=a&&(this.indexes[n]=s-1);return this.markDirty(),this}replaceValues(a,s,n){return n||(n=s,s={}),this.walkDecls(d=>{s.props&&!s.props.includes(d.prop)||s.fast&&!d.value.includes(s.fast)||(d.value=d.value.replace(a,n))}),this.markDirty(),this}some(a){return this.nodes.some(a)}walk(a){return this.each((s,n)=>{let d;try{d=a(s,n)}catch(g){throw s.addToError(g)}return d!==!1&&s.walk&&(d=s.walk(a)),d})}walkAtRules(a,s){return s?a instanceof RegExp?this.walk((n,d)=>{if(n.type==="atrule"&&a.test(n.name))return s(n,d)}):this.walk((n,d)=>{if(n.type==="atrule"&&n.name===a)return s(n,d)}):(s=a,this.walk((n,d)=>{if(n.type==="atrule")return s(n,d)}))}walkComments(a){return this.walk((s,n)=>{if(s.type==="comment")return a(s,n)})}walkDecls(a,s){return s?a instanceof RegExp?this.walk((n,d)=>{if(n.type==="decl"&&a.test(n.prop))return s(n,d)}):this.walk((n,d)=>{if(n.type==="decl"&&n.prop===a)return s(n,d)}):(s=a,this.walk((n,d)=>{if(n.type==="decl")return s(n,d)}))}walkRules(a,s){return s?a instanceof RegExp?this.walk((n,d)=>{if(n.type==="rule"&&a.test(n.selector))return s(n,d)}):this.walk((n,d)=>{if(n.type==="rule"&&n.selector===a)return s(n,d)}):(s=a,this.walk((n,d)=>{if(n.type==="rule")return s(n,d)}))}}C.registerParse=T=>{N=T},C.registerRule=T=>{f=T},C.registerAtRule=T=>{_=T},C.registerRoot=T=>{i=T},J.exports=C,C.default=C,C.rebuild=T=>{T.type==="atrule"?Object.setPrototypeOf(T,_.prototype):T.type==="rule"?Object.setPrototypeOf(T,f.prototype):T.type==="decl"?Object.setPrototypeOf(T,k.prototype):T.type==="comment"?Object.setPrototypeOf(T,w.prototype):T.type==="root"&&Object.setPrototypeOf(T,i.prototype),T[o]=!0,T.nodes&&T.nodes.forEach(a=>{C.rebuild(a)})}},7812:(J,P,v)=>{v.d(P,{D:()=>p});var _=v(2801),N=v(388),i=v(5793),f=v(5747),w=v(9858),k=v(8196),h=v(2051),e=v(8429),o=v(2625),c=function(C,T,a,s){return new(a||(a=Promise))(function(n,d){function g(L){try{b(s.next(L))}catch(S){d(S)}}function y(L){try{b(s.throw(L))}catch(S){d(S)}}function b(L){var S;L.done?n(L.value):(S=L.value,S instanceof a?S:new a(function(E){E(S)})).then(g,y)}b((s=s.apply(C,T||[])).next())})};function p(C){return c(this,arguments,void 0,function*(T,a={concepts:[],connections:[]}){var s,n,d,g;if(performance.now(),e.serviceWorker)try{const ie=yield(0,e.sendMessage)("UpdateCompositionLocal",{patcherStructure:T,actions:a});return!((n=(s=ie?.actions)===null||s===void 0?void 0:s.concepts)===null||n===void 0)&&n.length&&(a.concepts=JSON.parse(JSON.stringify(ie.actions.concepts))),!((g=(d=ie?.actions)===null||d===void 0?void 0:d.connections)===null||g===void 0)&&g.length&&(a.connections=JSON.parse(JSON.stringify(ie.actions.connections))),ie.data}catch(ie){(0,e.handleServiceWorkerException)(ie)}const y=T.userId,b=T.sessionId,L=T.accessId;let S=[];const E=[];let R=(0,e.CreateDefaultLConcept)(),U=(0,e.CreateDefaultLConcept)();const F=[],M=T.compositionId,W=T.ofTheCompositionId;let j=[],q=yield(0,i.s)(M);for(let ie=0;ie<q.length;ie++)S.push((0,o.P6)(q[ie]));const X=[],Z=[];let ae=[];for(let ie=0;ie<S.length;ie++)(0,_.A)(Z,S[ie].ofTheConceptId),(0,_.A)(X,S[ie].ofTheConceptId),(0,_.A)(X,S[ie].toTheConceptId),ae.push(S[ie].ofTheConceptId);for(let ie=0;ie<X.length;ie++){const he=yield(0,f.A)(X[ie]);M==X[ie]&&(R=(0,o.F4)(he)),W==X[ie]&&(U=(0,o.F4)(he)),E.push((0,o.F4)(he))}const H=T.patchObject;for(const ie in H){let he=(0,e.CreateDefaultLConcept)();const ne=H[ie];let Q=R;U.id>0&&(Q=U),Array.isArray(ne)||typeof ne=="object"?(he=yield(0,h.k)(ie,"",!0,R.userId,4,999,void 0,a),yield(0,k.R)(H[ie],he.id,he.userId,R.id,R.userId,4,999,void 0,a)):he=yield(0,h.k)(ie,ne,!1,y,L,b,void 0,a);const oe=(0,N.nm)(E,he);for(let ee=0;ee<oe.length;ee++)if(oe[ee].id>0){const $=(0,N.gt)(S,oe[ee].id);j=j.concat($),F.push(oe[ee])}yield(0,e.CreateTheConnectionLocal)(Q.id,he.id,R.id,2,void 0,void 0,a),E.push(he)}for(let ie=0;ie<j.length;ie++)yield(0,w.m)(j[ie].id);yield e.LocalSyncData.SyncDataOnline(void 0,a)})}},8196:(J,P,v)=>{v.d(P,{R:()=>h});var _=v(8429),N=v(5760),i=v(9911),f=v(3726),w=v(2051),k=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,o||[])).next())})};function h(e){return k(this,arguments,void 0,function*(o,c=null,p=null,C=null,T=null,a=null,s=null,n=!1,d={concepts:[],connections:[]}){var g,y,b,L;const S=_.Logger.logfunction("CreateTheCompositionLocal")||{};if(_.serviceWorker){S.serviceWorker=!0;try{const W=yield(0,_.sendMessage)("CreateTheCompositionLocal",{json:o,ofTheConceptId:c,ofTheConceptUserId:p,mainKey:C,userId:T,accessId:a,sessionInformationId:s,actions:d});return!((y=(g=W?.actions)===null||g===void 0?void 0:g.concepts)===null||y===void 0)&&y.length&&(d.concepts=JSON.parse(JSON.stringify(W.actions.concepts))),!((L=(b=W?.actions)===null||b===void 0?void 0:b.connections)===null||L===void 0)&&L.length&&(d.connections=JSON.parse(JSON.stringify(W.actions.connections))),_.Logger.logUpdate(S),W.data}catch(W){(0,N.ey)(S,"CreateTheCompositionLocal",W),(0,_.handleServiceWorkerException)(W)}}let E=T??999,R=a??999,U=s??999,F=C??0,M=(0,i.u)();for(const W in o)if(typeof o[W]!="string"&&typeof o[W]!="number")if(c==null&&p==null){let j=F,q=yield(0,w.k)(W,"",!0,E,R,U,void 0,d);M=q,j=q.id,F=q.id,yield h(o[W],q.id,q.userId,j,T,a,s,void 0,d)}else{let j=c??999,q=F,X=yield(0,w.k)(W,"",!0,E,R,U,void 0,d);yield(0,f.F)(j,X.id,q,void 0,void 0,void 0,d),yield h(o[W],X.id,X.userId,q,T,a,s,void 0,d)}else{let j=c??999,q=F,X=yield(0,w.k)(W,o[W].toString(),!1,E,R,U,void 0,d);yield(0,f.F)(j,X.id,q,void 0,void 0,void 0,d)}return _.Logger.logUpdate(S),M})}},8206:(J,P,v)=>{function _(N){const i=N.lastIndexOf("_");let f=[];return i>0?f=[N.substring(0,i),N.substring(i+1,N.length)]:f=[N],f}v.d(P,{f:()=>_})},8278:(J,P,v)=>{v.d(P,{b:()=>_});class _{constructor(i,f,w,k){this.variants=[],this.height=1,this.key=i,this.value=f,this.leftNode=w,this.rightNode=k,this.currentNode=null}addCurrentNode(i,f){return f==null?f=i:(i.value.typeId!=f.value.typeId&&(f.currentNode=this.addCurrentNode(i,f.currentNode)),f)}addCurrentNodeType(i,f){if(f==null)return f=i;let w=!1;for(let k=0;k<f.variants.length;k++)f.variants[k].value.id==i.value.id&&(w=!0);return w||f.variants.push(i),f}addNode(i,f,w){if(f==null)return f=i;let k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addNode(i,k,w);else{if(!(f.key<i.key))return f;f.rightNode=this.addNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}return f}checkIfIdsInNode(i,f,w,k){if(i){if(f.includes(i.key)){w.push(i.value);let h=f.indexOf(i.key);f.splice(h,1)}i.leftNode&&this.checkIfIdsInNode(i.leftNode,f,w,k),i.rightNode&&this.checkIfIdsInNode(i.rightNode,f,w,k)}}addCharacterNode(i,f,w){if(i.value.characterValue!=""){if(f==null)return f=i;let k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addCharacterNode(i,k,w);else{if(!(f.key<i.key))return f.key==i.key&&f.key!=""&&f.value.id!=i.value.id&&f.addCurrentNodeType(i,f),f;f.rightNode=this.addCharacterNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}}return f}addTypeNode(i,f,w){if(i.value.typeId!=0){if(f==null)return f=i;let k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addTypeNode(i,k,w);else{if(!(f.key<i.key))return f.key==i.key&&f.key!=0&&f.value.id!=i.value.id&&f.addCurrentNodeType(i,f),f;f.rightNode=this.addTypeNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}}return f}rightRotate(i){if(i){let f=i.leftNode;if(f){let w=f.rightNode;return i.leftNode=w,f.rightNode=i,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode))+1,f}}return i}leftRotate(i){if(i){let f=i.rightNode;if(f){let w=f.leftNode;return f.leftNode=i,i.rightNode=w,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(i.rightNode))+1,f}}return i}getHeight(i){return i?i.height:0}getBalanceFactor(i){return i==null?0:this.getHeight(i.leftNode)-this.getHeight(i.rightNode)}getFromNode(i,f){return f&&(i==f.key?f:i<f.key?this.getFromNode(i,f.leftNode):i>f.key?this.getFromNode(i,f.rightNode):f)}getCharacterFromNode(i,f){return f&&(i==f.key?f:i<f.key?this.getCharacterFromNode(i,f.leftNode):i>f.key?this.getCharacterFromNode(i,f.rightNode):f)}getCharacterFromNodeUpdated(i,f){var w;return f&&(i==f.key||((w=f.value)===null||w===void 0?void 0:w.typeId)==51?f:i<f.key?this.getCharacterFromNode(i,f.leftNode):i>f.key?this.getCharacterFromNode(i,f.rightNode):f)}getFromNodeWithCharacterAndType(i,f,w){if(i=`${i}`,w){if(i==w.key){if(i==w.value.characterValue&&f==w.value.typeId)return w;for(let k=0;k<w.variants.length;k++)if(w.variants[k].value.typeId==f)return w.variants[k]}else{if(i<w.key)return this.getFromNodeWithCharacterAndType(i,f,w.leftNode);if(i>w.key)return this.getFromNodeWithCharacterAndType(i,f,w.rightNode)}return null}return w}getFromNodeWithCharacterAndCategory(i,f,w){if(i=`${i}`,w){if(i==w.key){if(i==w.value.characterValue&&f==w.value.categoryId)return w;for(let k=0;k<w.variants.length;k++)if(w.variants[k].value.categoryId==f)return w.variants[k]}else{if(i<w.key)return this.getFromNodeWithCharacterAndCategory(i,f,w.leftNode);if(i>w.key)return this.getFromNodeWithCharacterAndCategory(i,f,w.rightNode)}return null}return w}removeNode(i,f){if(i==null)return i;if(i.key>f)return i.leftNode=this.removeNode(i.leftNode,f),i;if(i.key<f)return i.rightNode=this.removeNode(i.rightNode,f),i;if(i.leftNode==null){let w=i.rightNode;return i=null,w}if(i.rightNode==null){let w=i.leftNode;return i=null,w}{let w=this.inOrderSuccessor(i.rightNode);return i.value=w.value,i.key=w.key,i.variants=w.variants,i.currentNode=w.currentNode,i.rightNode=this.removeNode(i.rightNode,w.key),i}}removeNodeWithVariants(i,f,w){if(i==null)return i;if(i.key>f)return i.leftNode=this.removeNodeWithVariants(i.leftNode,f,w),i;if(i.key<f)return i.rightNode=this.removeNodeWithVariants(i.rightNode,f,w),i;if(i.variants.length>0){if(i.value.id==w){let k=i.variants[0];if(k)return i.value=k.value,i.key=k.key,i.currentNode=k.currentNode,i.variants.splice(0,1),i}else for(let k=0;k<i.variants.length;k++)if(w==i.variants[k].value.id)return i.variants.splice(k,1),i}if(i.leftNode==null){let k=i.rightNode;return i=null,k}if(i.rightNode==null){let k=i.leftNode;return i=null,k}{let k=this.inOrderSuccessor(i.rightNode);return i.value=k.value,i.key=k.key,i.variants=k.variants,i.currentNode=k.currentNode,i.rightNode=this.removeNodeWithVariants(i.rightNode,k.key,w),i}}countNodeBelow(i){return i==null?0:1+this.countNodeBelow(i.leftNode)+this.countNodeBelow(i.rightNode)}inOrderSuccessor(i){for(;i.leftNode!=null;)i=i.leftNode;return i}}},8339:(J,P,v)=>{let _=v(396),N=v(9371),i=v(5238),f=v(5644),w=v(1534),k=v(5781);const h={empty:!0,space:!0};J.exports=class{constructor(e){this.input=e,this.root=new f,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let o,c,p,C=new _;C.name=e[1].slice(1),C.name===""&&this.unnamedAtrule(C,e),this.init(C,e[2]);let T=!1,a=!1,s=[],n=[];for(;!this.tokenizer.endOfFile();){if(o=(e=this.tokenizer.nextToken())[0],o==="("||o==="["?n.push(o==="("?")":"]"):o==="{"&&n.length>0?n.push("}"):o===n[n.length-1]&&n.pop(),n.length===0){if(o===";"){C.source.end=this.getPosition(e[2]),C.source.end.offset++,this.semicolon=!0;break}if(o==="{"){a=!0;break}if(o==="}"){if(s.length>0){for(p=s.length-1,c=s[p];c&&c[0]==="space";)c=s[--p];c&&(C.source.end=this.getPosition(c[3]||c[2]),C.source.end.offset++)}this.end(e);break}s.push(e)}else s.push(e);if(this.tokenizer.endOfFile()){T=!0;break}}C.raws.between=this.spacesAndCommentsFromEnd(s),s.length?(C.raws.afterName=this.spacesAndCommentsFromStart(s),this.raw(C,"params",s),T&&(e=s[s.length-1],C.source.end=this.getPosition(e[3]||e[2]),C.source.end.offset++,this.spaces=C.raws.between,C.raws.between="")):(C.raws.afterName="",C.params=""),a&&(C.nodes=[],this.current=C)}checkMissedSemicolon(e){let o=this.colon(e);if(o===!1)return;let c,p=0;for(let C=o-1;C>=0&&(c=e[C],c[0]==="space"||(p+=1,p!==2));C--);throw this.input.error("Missed semicolon",c[0]==="word"?c[3]+1:c[2])}colon(e){let o,c,p,C=0;for(let[T,a]of e.entries()){if(c=a,p=c[0],p==="("&&(C+=1),p===")"&&(C-=1),C===0&&p===":"){if(o){if(o[0]==="word"&&o[1]==="progid")continue;return T}this.doubleColon(c)}o=c}return!1}comment(e){let o=new N;this.init(o,e[2]),o.source.end=this.getPosition(e[3]||e[2]),o.source.end.offset++;let c=e[1].slice(2,-2);if(/^\s*$/.test(c))o.text="",o.raws.left=c,o.raws.right="";else{let p=c.match(/^(\s*)([^]*\S)(\s*)$/);o.text=p[2],o.raws.left=p[1],o.raws.right=p[3]}}createTokenizer(){this.tokenizer=k(this.input)}decl(e,o){let c=new i;this.init(c,e[0][2]);let p,C=e[e.length-1];for(C[0]===";"&&(this.semicolon=!0,e.pop()),c.source.end=this.getPosition(C[3]||C[2]||function(s){for(let n=s.length-1;n>=0;n--){let d=s[n],g=d[3]||d[2];if(g)return g}}(e)),c.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),c.raws.before+=e.shift()[1];for(c.source.start=this.getPosition(e[0][2]),c.prop="";e.length;){let s=e[0][0];if(s===":"||s==="space"||s==="comment")break;c.prop+=e.shift()[1]}for(c.raws.between="";e.length;){if(p=e.shift(),p[0]===":"){c.raws.between+=p[1];break}p[0]==="word"&&/\w/.test(p[1])&&this.unknownWord([p]),c.raws.between+=p[1]}c.prop[0]!=="_"&&c.prop[0]!=="*"||(c.raws.before+=c.prop[0],c.prop=c.prop.slice(1));let T,a=[];for(;e.length&&(T=e[0][0],T==="space"||T==="comment");)a.push(e.shift());this.precheckMissedSemicolon(e);for(let s=e.length-1;s>=0;s--){if(p=e[s],p[1].toLowerCase()==="!important"){c.important=!0;let n=this.stringFrom(e,s);n=this.spacesFromEnd(e)+n,n!==" !important"&&(c.raws.important=n);break}if(p[1].toLowerCase()==="important"){let n=e.slice(0),d="";for(let g=s;g>0;g--){let y=n[g][0];if(d.trim().startsWith("!")&&y!=="space")break;d=n.pop()[1]+d}d.trim().startsWith("!")&&(c.important=!0,c.raws.important=d,e=n)}if(p[0]!=="space"&&p[0]!=="comment")break}e.some(s=>s[0]!=="space"&&s[0]!=="comment")&&(c.raws.between+=a.map(s=>s[1]).join(""),a=[]),this.raw(c,"value",a.concat(e),o),c.value.includes(":")&&!o&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let o=new w;this.init(o,e[2]),o.selector="",o.raws.between="",this.current=o}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let o=this.current.nodes[this.current.nodes.length-1];o&&o.type==="rule"&&!o.raws.ownSemicolon&&(o.raws.ownSemicolon=this.spaces,this.spaces="",o.source.end=this.getPosition(e[2]),o.source.end.offset+=o.raws.ownSemicolon.length)}}getPosition(e){let o=this.input.fromOffset(e);return{column:o.col,line:o.line,offset:e}}init(e,o){this.current.push(e),e.source={input:this.input,start:this.getPosition(o)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let o=!1,c=null,p=!1,C=null,T=[],a=e[1].startsWith("--"),s=[],n=e;for(;n;){if(c=n[0],s.push(n),c==="("||c==="[")C||(C=n),T.push(c==="("?")":"]");else if(a&&p&&c==="{")C||(C=n),T.push("}");else if(T.length===0){if(c===";"){if(p)return void this.decl(s,a);break}if(c==="{")return void this.rule(s);if(c==="}"){this.tokenizer.back(s.pop()),o=!0;break}c===":"&&(p=!0)}else c===T[T.length-1]&&(T.pop(),T.length===0&&(C=null));n=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(o=!0),T.length>0&&this.unclosedBracket(C),o&&p){if(!a)for(;s.length&&(n=s[s.length-1][0],n==="space"||n==="comment");)this.tokenizer.back(s.pop());this.decl(s,a)}else this.unknownWord(s)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e)}this.endFile()}precheckMissedSemicolon(){}raw(e,o,c,p){let C,T,a,s,n=c.length,d="",g=!0;for(let y=0;y<n;y+=1)C=c[y],T=C[0],T!=="space"||y!==n-1||p?T==="comment"?(s=c[y-1]?c[y-1][0]:"empty",a=c[y+1]?c[y+1][0]:"empty",h[s]||h[a]||d.slice(-1)===","?g=!1:d+=C[1]):d+=C[1]:g=!1;if(!g){let y=c.reduce((b,L)=>b+L[1],"");e.raws[o]={raw:y,value:d}}e[o]=d}rule(e){e.pop();let o=new w;this.init(o,e[0][2]),o.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(o,"selector",e),this.current=o}spacesAndCommentsFromEnd(e){let o,c="";for(;e.length&&(o=e[e.length-1][0],o==="space"||o==="comment");)c=e.pop()[1]+c;return c}spacesAndCommentsFromStart(e){let o,c="";for(;e.length&&(o=e[0][0],o==="space"||o==="comment");)c+=e.shift()[1];return c}spacesFromEnd(e){let o,c="";for(;e.length&&(o=e[e.length-1][0],o==="space");)c=e.pop()[1]+c;return c}stringFrom(e,o){let c="";for(let p=o;p<e.length;p++)c+=e[p][1];return e.splice(o,e.length-o),c}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word "+e[0][1],{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,o){throw this.input.error("At-rule without name",{offset:o[2]},{offset:o[2]+o[1].length})}}},8349:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(5170))&&_.__esModule?_:{default:_},i=function(){function f(k,h){this.func=k||function(){},this.funcRes=null,this.options=h}var w=f.prototype;return w._shouldUpdateSelector=function(k,h){return h===void 0&&(h={}),Object.assign({},this.options,h).updateSelector!==!1&&typeof k!="string"},w._isLossy=function(k){return k===void 0&&(k={}),Object.assign({},this.options,k).lossless===!1},w._root=function(k,h){return h===void 0&&(h={}),new N.default(k,this._parseOptions(h)).root},w._parseOptions=function(k){return{lossy:this._isLossy(k)}},w._run=function(k,h){var e=this;return h===void 0&&(h={}),new Promise(function(o,c){try{var p=e._root(k,h);Promise.resolve(e.func(p)).then(function(C){var T=void 0;return e._shouldUpdateSelector(k,h)&&(T=p.toString(),k.selector=T),{transform:C,root:p,string:T}}).then(o,c)}catch(C){return void c(C)}})},w._runSync=function(k,h){h===void 0&&(h={});var e=this._root(k,h),o=this.func(e);if(o&&typeof o.then=="function")throw new Error("Selector processor returned a promise to a synchronous call.");var c=void 0;return h.updateSelector&&typeof k!="string"&&(c=e.toString(),k.selector=c),{transform:o,root:e,string:c}},w.ast=function(k,h){return this._run(k,h).then(function(e){return e.root})},w.astSync=function(k,h){return this._runSync(k,h).root},w.transform=function(k,h){return this._run(k,h).then(function(e){return e.transform})},w.transformSync=function(k,h){return this._runSync(k,h).transform},w.process=function(k,h){return this._run(k,h).then(function(e){return e.string||e.root.toString()})},w.processSync=function(k,h){var e=this._runSync(k,h);return e.string||e.root.toString()},f}();P.default=i,J.exports=P.default},8354:(J,P)=>{P.__esModule=!0,P.default=function(v){for(var _="",N=v.indexOf("/*"),i=0;N>=0;){_+=v.slice(i,N);var f=v.indexOf("*/",N+2);if(f<0)return _;i=f+2,N=v.indexOf("/*",i)}return _+=v.slice(i)},J.exports=P.default},8382:(J,P,v)=>{v.d(P,{x:()=>h});var _=v(6715),N=v(370),i=v(1317),f=v(5760),w=v(8429),k=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,[])).next())})};function h(e,o,c){var p=arguments;return k(this,void 0,void 0,function*(){const C=w.Logger.logfunction("GetCompositionConnectionsBetweenTwoConcepts",p)||{};var T=[];try{if(w.serviceWorker){C.serviceWorker=!0;try{const g=yield(0,w.sendMessage)("GetCompositionConnectionsBetweenTwoConcepts",{ofConceptId:e,toConcept:o,mainKey:c});return w.Logger.logUpdate(C),g.data}catch(g){(0,f.ey)(C,"GetCompositionConnectionsBetweenTwoConcepts",g),(0,w.handleServiceWorkerException)(g)}}var a=new FormData;a.append("ofConceptId",e.toString()),a.append("mainKey",c.toString()),a.append("toConceptId",o.toString());const n=yield(0,i.Xr)("","application/json"),d=yield fetch(N.B.GetCompositionConnectionBetweenTwoConceptsUrl(),{method:"POST",headers:n,body:a,redirect:"follow"});if(d.ok){const g=yield d.json();for(var s=0;s<g.length;s++)_.d.AddConnection(g[s]),T.push(g[s]);w.Logger.logUpdate(C)}else(0,f.ry)(d)}catch(n){(0,f.Mb)(n,N.B.GetCompositionConnectionBetweenTwoConceptsUrl()),(0,f.ey)(C,"GetCompositionConnectionsBetweenTwoConcepts",n)}return T})}},8429:(J,P,v)=>{v.d(P,{ADMIN:()=>zi,ALLID:()=>Ue.BG,AccessControlService:()=>Dt,AccessTracker:()=>Tn.J,AddGhostConcept:()=>Oi,Anomaly:()=>ot,BaseUrl:()=>o.B,BinaryTree:()=>io.W,BuildWidgetFromId:()=>Ut.Cp,BuilderStatefulWidget:()=>Nn,Composition:()=>_n,CompositionBinaryTree:()=>zt,CompositionNode:()=>fo,Concept:()=>rr.j,ConceptsData:()=>e.I,Connection:()=>oe.N,ConnectionData:()=>jt.d,CountInfo:()=>wr.y,CreateComposition:()=>ie.A,CreateConnection:()=>Gt.d,CreateConnectionBetweenEntityLocal:()=>Eo,CreateConnectionBetweenTwoConcepts:()=>Le,CreateConnectionBetweenTwoConceptsGeneral:()=>De,CreateConnectionBetweenTwoConceptsLocal:()=>To.h,CreateData:()=>no,CreateDefaultConcept:()=>$.o,CreateDefaultLConcept:()=>vo.u,CreateSession:()=>xi,CreateSessionVisit:()=>Ni,CreateTheCompositionLocal:()=>he.R,CreateTheCompositionWithCache:()=>Sn,CreateTheConnection:()=>be.q,CreateTheConnectionGeneral:()=>de,CreateTheConnectionLocal:()=>Gt.F,DATAID:()=>Ue.y0,DATAIDDATE:()=>Ue.iw,DATAV2:()=>Ue.pU,DelayFunctionExecution:()=>$i,DeleteConceptById:()=>ro,DeleteConceptLocal:()=>Vi,DeleteConnectionById:()=>we.m,DeleteConnectionByIdBulk:()=>we.E,DeleteConnectionByType:()=>bn.$S,DeleteConnectionByTypeBulk:()=>bn.L0,DeleteUser:()=>oi,DependencyObserver:()=>Jt.w,Environments:()=>So.B,FilterSearch:()=>Jn,FormatFromConnections:()=>nn.vw,FormatFromConnectionsAltered:()=>nn.y8,FreeschemaQuery:()=>St,FreeschemaQueryApi:()=>Yn,GetAllConnectionsOfComposition:()=>H.s,GetAllConnectionsOfCompositionBulk:()=>a.Y,GetAllLinkerConnectionsFromTheConcept:()=>Ft.l,GetAllTheConnectionsByTypeAndOfTheConcept:()=>bn.WC,GetComposition:()=>n.Nj,GetCompositionBulk:()=>pt.dF,GetCompositionBulkWithDataId:()=>pt.cw,GetCompositionFromConnectionsWithDataId:()=>pt.p8,GetCompositionFromConnectionsWithDataIdFromConnections:()=>pt.km,GetCompositionFromConnectionsWithDataIdInObject:()=>pt.rv,GetCompositionFromConnectionsWithDataIdIndex:()=>pt.Nt,GetCompositionFromConnectionsWithIndex:()=>pt.as,GetCompositionFromConnectionsWithIndexFromConnections:()=>pt.hG,GetCompositionFromMemoryWithConnections:()=>n.JA,GetCompositionList:()=>b,GetCompositionListAll:()=>L,GetCompositionListAllWithId:()=>S,GetCompositionListListener:()=>er,GetCompositionListLocal:()=>Z,GetCompositionListLocalWithId:()=>ae,GetCompositionListWithId:()=>E,GetCompositionListWithIdUpdated:()=>R,GetCompositionListener:()=>Ki,GetCompositionLocal:()=>W,GetCompositionLocalWithId:()=>j,GetCompositionWithAllIds:()=>n.Mb,GetCompositionWithCache:()=>ki,GetCompositionWithDataIdBulk:()=>_i,GetCompositionWithDataIdWithCache:()=>yo,GetCompositionWithId:()=>n.yz,GetCompositionWithIdAndDateFromMemory:()=>n.Ez,GetConceptBulk:()=>en.r,GetConceptByCharacter:()=>d.A,GetConceptByCharacterAndCategoryLocal:()=>g.$I,GetConceptByCharacterAndType:()=>Be.A,GetConnectionBetweenTwoConceptsLinker:()=>Hi,GetConnectionBulk:()=>Vn.j,GetConnectionById:()=>si,GetConnectionDataPrefetch:()=>pt.QL,GetConnectionOfTheConcept:()=>Q,GetConnectionTypeForCount:()=>_o.V,GetConnectionsBetweenApi:()=>Lo,GetFreeschemaImage:()=>Qr,GetFreeschemaImageUrl:()=>Yr,GetImageApi:()=>Wo,GetLink:()=>Fe,GetLinkListListener:()=>or,GetLinkListener:()=>tr.d,GetLinkRaw:()=>xe,GetLinkerConnectionFromConcepts:()=>ei,GetLinkerConnectionToConcepts:()=>ti,GetRelation:()=>Di,GetRelationLocal:()=>Gi,GetRelationNew:()=>Pi,GetRelationRaw:()=>Bi,GetTheConcept:()=>me.A,GetTheConceptLocal:()=>bo.f,GetUserGhostId:()=>Ei,JUSTDATA:()=>Ue.ZJ,LConcept:()=>sr,LConnection:()=>ar,LISTNORMAL:()=>Ue.SL,LocalConceptsData:()=>s.v,LocalSyncData:()=>on.H,LocalTransaction:()=>Po,LogEvent:()=>Tr,Logger:()=>ge.V,LoginToBackend:()=>mi,MakeTheInstanceConcept:()=>ye.A,MakeTheInstanceConceptLocal:()=>Te.k,MakeTheTimestamp:()=>ai,MakeTheTypeConceptApi:()=>lt,MakeTheTypeConceptLocal:()=>$e.$,NORMAL:()=>Ue.yv,PRIVATE:()=>Ji,PUBLIC:()=>Qi,PatcherStructure:()=>cr,Prototype:()=>$r,RAW:()=>Ue.XZ,RecursiveSearchApi:()=>ci,RecursiveSearchApiNewRawFullLinker:()=>ui,RecursiveSearchApiRaw:()=>so,RecursiveSearchApiRawFullLinker:()=>di,RecursiveSearchApiWithInternalConnections:()=>li,RecursiveSearchListener:()=>nr,SchemaQuery:()=>Kn,SchemaQueryListener:()=>Ln,SearchAllConcepts:()=>Ii,SearchLinkInternal:()=>Wi,SearchLinkInternalAll:()=>ji,SearchLinkMultipleAll:()=>nn.cf,SearchLinkMultipleAllObservable:()=>Ao,SearchLinkMultipleApi:()=>k.j,SearchQuery:()=>Zt,SearchStructure:()=>dr,SearchWithLinker:()=>wi,SearchWithTypeAndLinker:()=>Qt.zl,SearchWithTypeAndLinkerApi:()=>ko,Selector:()=>kr,SessionData:()=>lr,Signin:()=>vi,Signup:()=>yi,SignupEntity:()=>gi,SplitStrings:()=>h.f,StatefulWidget:()=>Qn,SyncData:()=>ee.Y,TokenStorage:()=>Qe.b,TrashTheConcept:()=>ii,UpdateComposition:()=>bi,UpdateCompositionLocal:()=>Fi.D,UserBinaryTree:()=>tn,Validator:()=>gr,ViewInternalData:()=>wo,ViewInternalDataApi:()=>Io,WidgetTree:()=>Ro,buildFetchConnection:()=>Do,clearAllCaches:()=>Ir,convertFromConceptToLConcept:()=>Hn.F4,convertFromLConceptToConcept:()=>Hn.dp,convertWidgetTreeToWidget:()=>Pn,convertWidgetTreeToWidgetWithWrapper:()=>Go,createFormFieldData:()=>vr,createPrototypeLocal:()=>Mo,dispatchIdEvent:()=>es,getFromDatabaseWithType:()=>Ee,getObjectsFromIndexDb:()=>Ne,getUploadFileLimit:()=>fi,getUserDetails:()=>No.s,getWidgetBulkFromId:()=>rn,getWidgetFromId:()=>Gr,handleServiceWorkerException:()=>Ze,hasActivatedSW:()=>Vo,importLatestWidget:()=>Pr,importRecentWidget:()=>Br,init:()=>Kr,orderTheConnections:()=>ir.X,recursiveFetch:()=>n.zN,recursiveFetchNew:()=>gn,removeAllChildren:()=>Oo,renderImportedWidget:()=>Rr,renderLatestWidget:()=>eo,renderPage:()=>Dr,renderWidget:()=>Er,searchLinkMultipleListener:()=>Yi,sendEmail:()=>mr,sendMessage:()=>Je,serviceWorker:()=>Ge,setHasActivatedSW:()=>Xr,storeToDatabase:()=>ke,subscribedListeners:()=>jo,unwrapContainers:()=>Uo,updateAccessToken:()=>Bn,uploadAttachment:()=>hi,uploadFile:()=>uo,uploadImage:()=>lo,uploadImageV2:()=>pi,validDocumentFormats:()=>co,validImageFormats:()=>ao}),v.r(P);var _={};v.r(_),v.d(_,{ADMIN:()=>zi,ALLID:()=>Ue.BG,AccessControlService:()=>Dt,AccessTracker:()=>Tn.J,AddGhostConcept:()=>Oi,Anomaly:()=>ot,BaseUrl:()=>o.B,BinaryTree:()=>io.W,BuildWidgetFromId:()=>Ut.Cp,BuilderStatefulWidget:()=>Nn,Composition:()=>_n,CompositionBinaryTree:()=>zt,CompositionNode:()=>fo,Concept:()=>rr.j,ConceptsData:()=>e.I,Connection:()=>oe.N,ConnectionData:()=>jt.d,CountInfo:()=>wr.y,CreateComposition:()=>ie.A,CreateConnection:()=>Gt.d,CreateConnectionBetweenEntityLocal:()=>Eo,CreateConnectionBetweenTwoConcepts:()=>Le,CreateConnectionBetweenTwoConceptsGeneral:()=>De,CreateConnectionBetweenTwoConceptsLocal:()=>To.h,CreateData:()=>no,CreateDefaultConcept:()=>$.o,CreateDefaultLConcept:()=>vo.u,CreateSession:()=>xi,CreateSessionVisit:()=>Ni,CreateTheCompositionLocal:()=>he.R,CreateTheCompositionWithCache:()=>Sn,CreateTheConnection:()=>be.q,CreateTheConnectionGeneral:()=>de,CreateTheConnectionLocal:()=>Gt.F,DATAID:()=>Ue.y0,DATAIDDATE:()=>Ue.iw,DATAV2:()=>Ue.pU,DelayFunctionExecution:()=>$i,DeleteConceptById:()=>ro,DeleteConceptLocal:()=>Vi,DeleteConnectionById:()=>we.m,DeleteConnectionByIdBulk:()=>we.E,DeleteConnectionByType:()=>bn.$S,DeleteConnectionByTypeBulk:()=>bn.L0,DeleteUser:()=>oi,DependencyObserver:()=>Jt.w,Environments:()=>So.B,FilterSearch:()=>Jn,FormatFromConnections:()=>nn.vw,FormatFromConnectionsAltered:()=>nn.y8,FreeschemaQuery:()=>St,FreeschemaQueryApi:()=>Yn,GetAllConnectionsOfComposition:()=>H.s,GetAllConnectionsOfCompositionBulk:()=>a.Y,GetAllLinkerConnectionsFromTheConcept:()=>Ft.l,GetAllTheConnectionsByTypeAndOfTheConcept:()=>bn.WC,GetComposition:()=>n.Nj,GetCompositionBulk:()=>pt.dF,GetCompositionBulkWithDataId:()=>pt.cw,GetCompositionFromConnectionsWithDataId:()=>pt.p8,GetCompositionFromConnectionsWithDataIdFromConnections:()=>pt.km,GetCompositionFromConnectionsWithDataIdInObject:()=>pt.rv,GetCompositionFromConnectionsWithDataIdIndex:()=>pt.Nt,GetCompositionFromConnectionsWithIndex:()=>pt.as,GetCompositionFromConnectionsWithIndexFromConnections:()=>pt.hG,GetCompositionFromMemoryWithConnections:()=>n.JA,GetCompositionList:()=>b,GetCompositionListAll:()=>L,GetCompositionListAllWithId:()=>S,GetCompositionListListener:()=>er,GetCompositionListLocal:()=>Z,GetCompositionListLocalWithId:()=>ae,GetCompositionListWithId:()=>E,GetCompositionListWithIdUpdated:()=>R,GetCompositionListener:()=>Ki,GetCompositionLocal:()=>W,GetCompositionLocalWithId:()=>j,GetCompositionWithAllIds:()=>n.Mb,GetCompositionWithCache:()=>ki,GetCompositionWithDataIdBulk:()=>_i,GetCompositionWithDataIdWithCache:()=>yo,GetCompositionWithId:()=>n.yz,GetCompositionWithIdAndDateFromMemory:()=>n.Ez,GetConceptBulk:()=>en.r,GetConceptByCharacter:()=>d.A,GetConceptByCharacterAndCategoryLocal:()=>g.$I,GetConceptByCharacterAndType:()=>Be.A,GetConnectionBetweenTwoConceptsLinker:()=>Hi,GetConnectionBulk:()=>Vn.j,GetConnectionById:()=>si,GetConnectionDataPrefetch:()=>pt.QL,GetConnectionOfTheConcept:()=>Q,GetConnectionTypeForCount:()=>_o.V,GetConnectionsBetweenApi:()=>Lo,GetFreeschemaImage:()=>Qr,GetFreeschemaImageUrl:()=>Yr,GetImageApi:()=>Wo,GetLink:()=>Fe,GetLinkListListener:()=>or,GetLinkListener:()=>tr.d,GetLinkRaw:()=>xe,GetLinkerConnectionFromConcepts:()=>ei,GetLinkerConnectionToConcepts:()=>ti,GetRelation:()=>Di,GetRelationLocal:()=>Gi,GetRelationNew:()=>Pi,GetRelationRaw:()=>Bi,GetTheConcept:()=>me.A,GetTheConceptLocal:()=>bo.f,GetUserGhostId:()=>Ei,JUSTDATA:()=>Ue.ZJ,LConcept:()=>sr,LConnection:()=>ar,LISTNORMAL:()=>Ue.SL,LocalConceptsData:()=>s.v,LocalSyncData:()=>on.H,LocalTransaction:()=>Po,LogEvent:()=>Tr,Logger:()=>ge.V,LoginToBackend:()=>mi,MakeTheInstanceConcept:()=>ye.A,MakeTheInstanceConceptLocal:()=>Te.k,MakeTheTimestamp:()=>ai,MakeTheTypeConceptApi:()=>lt,MakeTheTypeConceptLocal:()=>$e.$,NORMAL:()=>Ue.yv,PRIVATE:()=>Ji,PUBLIC:()=>Qi,PatcherStructure:()=>cr,Prototype:()=>$r,RAW:()=>Ue.XZ,RecursiveSearchApi:()=>ci,RecursiveSearchApiNewRawFullLinker:()=>ui,RecursiveSearchApiRaw:()=>so,RecursiveSearchApiRawFullLinker:()=>di,RecursiveSearchApiWithInternalConnections:()=>li,RecursiveSearchListener:()=>nr,SchemaQuery:()=>Kn,SchemaQueryListener:()=>Ln,SearchAllConcepts:()=>Ii,SearchLinkInternal:()=>Wi,SearchLinkInternalAll:()=>ji,SearchLinkMultipleAll:()=>nn.cf,SearchLinkMultipleAllObservable:()=>Ao,SearchLinkMultipleApi:()=>k.j,SearchQuery:()=>Zt,SearchStructure:()=>dr,SearchWithLinker:()=>wi,SearchWithTypeAndLinker:()=>Qt.zl,SearchWithTypeAndLinkerApi:()=>ko,Selector:()=>kr,SessionData:()=>lr,Signin:()=>vi,Signup:()=>yi,SignupEntity:()=>gi,SplitStrings:()=>h.f,StatefulWidget:()=>Qn,SyncData:()=>ee.Y,TokenStorage:()=>Qe.b,TrashTheConcept:()=>ii,UpdateComposition:()=>bi,UpdateCompositionLocal:()=>Fi.D,UserBinaryTree:()=>tn,Validator:()=>gr,ViewInternalData:()=>wo,ViewInternalDataApi:()=>Io,WidgetTree:()=>Ro,buildFetchConnection:()=>Do,clearAllCaches:()=>Ir,convertFromConceptToLConcept:()=>Hn.F4,convertFromLConceptToConcept:()=>Hn.dp,convertWidgetTreeToWidget:()=>Pn,convertWidgetTreeToWidgetWithWrapper:()=>Go,createFormFieldData:()=>vr,createPrototypeLocal:()=>Mo,dispatchIdEvent:()=>es,getFromDatabaseWithType:()=>Ee,getObjectsFromIndexDb:()=>Ne,getUploadFileLimit:()=>fi,getUserDetails:()=>No.s,getWidgetBulkFromId:()=>rn,getWidgetFromId:()=>Gr,handleServiceWorkerException:()=>Ze,hasActivatedSW:()=>Vo,importLatestWidget:()=>Pr,importRecentWidget:()=>Br,init:()=>Kr,orderTheConnections:()=>ir.X,recursiveFetch:()=>n.zN,recursiveFetchNew:()=>gn,removeAllChildren:()=>Oo,renderImportedWidget:()=>Rr,renderLatestWidget:()=>eo,renderPage:()=>Dr,renderWidget:()=>Er,searchLinkMultipleListener:()=>Yi,sendEmail:()=>mr,sendMessage:()=>Je,serviceWorker:()=>Ge,setHasActivatedSW:()=>Xr,storeToDatabase:()=>ke,subscribedListeners:()=>jo,unwrapContainers:()=>Uo,updateAccessToken:()=>Bn,uploadAttachment:()=>hi,uploadFile:()=>uo,uploadImage:()=>lo,uploadImageV2:()=>pi,validDocumentFormats:()=>co,validImageFormats:()=>ao});var N=v(957),i=v(4238),f=v(6759),w=v(830),k=v(8635),h=v(8206),e=v(1833),o=v(370),c=v(1317),p=v(5760),C=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function T(B,r){var t=arguments;return C(this,void 0,void 0,function*(){const l=ge.V.logfunction("GetAllConceptsByType",t);try{var I=new URLSearchParams;I.append("type",B),I.append("user_id",r.toString());var A=(0,c.Xr)("application/x-www-form-urlencoded");const O=yield fetch(o.B.GetAllConceptsByTypeUrl(),{method:"POST",headers:A,body:I});if(O.ok){const x=yield O.json();for(var D=0;D<x.length;D++)e.I.AddConcept(x[D])}else(0,p.ry)(O)}catch(O){(0,p.Mb)(O,o.B.GetAllConceptsByTypeUrl()),(0,p.ey)(l,"GetAllConceptsByType",O)}})}var a=v(6797),s=v(7154),n=v(4174),d=v(2814),g=v(3379),y=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function b(B,r){var t=arguments;return y(this,arguments,void 0,function*(l,I,A=10,D=1){const O=ge.V.logfunction("GetCompositionList",t)||{};if(Ge){O.serviceWorker=!0;try{const u=yield Je("GetCompositionList",{compositionName:l,userId:I,inpage:A,page:D});return ge.V.logUpdate(O),u.data}catch(u){(0,p.ey)(O,"GetCompositionList",u),Ze(u)}}let x=yield(0,d.A)(l),m=[];if(x){yield T(l,I);let u=yield e.I.GetConceptsByTypeIdAndUser(x.id,I),G=A*(D-1),V=[];for(let Y=G;Y<G+A;Y++)u[Y]&&V.push(u[Y].id);yield(0,a.Y)(V);for(let Y=G;Y<G+A;Y++)if(u[Y]){let z=yield(0,n.kx)(u[Y].id);m.push(z)}}return ge.V.logUpdate(O),m})}function L(B,r){return y(this,arguments,void 0,function*(t,l,I=10,A=1){let D=Z(t,l),O=b(t,l),x=[];return Promise.race([D,O]).then(m=>{x.push(...m)}).catch(m=>{}),O.then(m=>{x.push(...m)}),x})}function S(B,r){return y(this,arguments,void 0,function*(t,l,I=10,A=1){if(Ge)try{return(yield Je("GetCompositionListAllWithId",{compositionName:t,userId:l,inpage:I,page:A})).data}catch(Y){Ze(Y)}let D=yield(0,g.Ay)(t),O=yield(0,d.A)(t),x=[],m=[],u=[],G=[];D.id!=0&&(m=yield s.v.GetConceptsByTypeIdAndUser(D.id,l)),O.id!=0&&(yield T(t,l),G=yield e.I.GetConceptsByTypeIdAndUser(O.id,l),x=G);for(let Y=0;Y<m.length;Y++){let z=!1;for(let te=0;te<G.length;te++)m[Y].ghostId==G[te].ghostId&&(z=!0);z||u.push(m[Y])}let V=[];return V=yield function(Y,z){return y(this,arguments,void 0,function*(te,se,le=10,Ce=1){let ue=[],_e=le*(Ce-1),Oe=[],je=se.length;for(let Se=_e;Se<_e+le-je;Se++)te[Se]&&Oe.push(te[Se].id);for(let Se=0;Se<se.length;Se++){let Ie=yield j(se[Se].id);ue.push(Ie)}yield(0,a.Y)(Oe);for(let Se=_e;Se<_e+le-je;Se++)if(te[Se]){let Ie=yield(0,n.RW)(te[Se].id);ue.push(Ie)}return ue})}(x,u,I,A),V})}function E(B,r){return y(this,arguments,void 0,function*(t,l,I=10,A=1){if(Ge)try{return(yield Je("GetCompositionListWithId",{compositionName:t,userId:l,inpage:I,page:A})).data}catch(x){Ze(x)}let D=yield(0,d.A)(t),O=[];if(D){yield T(t,l);let x=yield e.I.GetConceptsByTypeIdAndUser(D.id,l),m=I*(A-1),u=[];for(let G=m;G<m+I;G++)x[G]&&u.push(x[G].id);yield(0,a.Y)(u);for(let G=m;G<m+I;G++)if(x[G]){let V=yield(0,n.RW)(x[G].id);O.push(V)}}return O})}function R(B,r){return y(this,arguments,void 0,function*(t,l,I=10,A=1){let D=yield(0,d.w)(t),O=[];if(D){yield T(t,l);let x=yield e.I.GetConceptsByTypeIdAndUser(D.id,l),m=I*(A-1),u=[];for(let G=m;G<m+I;G++)x[G]&&u.push(x[G].id);yield(0,a.Y)(u);for(let G=m;G<m+I;G++)if(x[G]){let V=yield(0,n.RW)(x[G].id);O.push(V)}}return O})}var U=v(3967),F=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})},M=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function W(B){return M(this,void 0,void 0,function*(){var r,t;try{if(Ge)try{return(yield Je("GetCompositionLocal",{id:B})).data}catch(x){Ze(x)}let l=[],I={};l=yield U.G.GetConnectionsOfCompositionLocal(B);let A=[];for(let x=0;x<l.length;x++)A.includes(l[x].ofTheConceptId)||A.push(l[x].ofTheConceptId);let D=yield s.v.GetConcept(B);if(D.id==0){let x=yield function(m){var u=arguments;return F(this,void 0,void 0,function*(){const G=ge.V.logfunction("TranslateLocalToReal",u);let V=(0,$.o)();try{var Y=(0,c.ab)("application/x-www-form-urlencoded");const z=yield fetch(o.B.GetRealConceptById(),{method:"POST",headers:Y,body:`id=${m}`});if(z.ok)return V=yield z.json(),V.id>0&&e.I.AddConcept(V),V;(0,p.ry)(z),ge.V.logUpdate(G)}catch(z){(0,p.Mb)(z,o.B.GetRealConceptById()),(0,p.ey)(G,"TranslateLocalToReal",z)}return V})}(B);if(x.id>0)return yield(0,n.Nj)(x.id)}let O=yield q(B,l,A);return I[(t=(r=D?.type)===null||r===void 0?void 0:r.characterValue)!==null&&t!==void 0?t:"top"]=O,I}catch(l){throw l}})}function j(B){return M(this,void 0,void 0,function*(){var r,t;try{if(Ge)try{return(yield Je("GetCompositionLocalWithId",{id:B})).data}catch(x){Ze(x)}let l=[],I={},A={};l=yield U.G.GetConnectionsOfCompositionLocal(B);let D=[];for(let x=0;x<l.length;x++)D.includes(l[x].ofTheConceptId)||D.push(l[x].ofTheConceptId);let O=yield s.v.GetConcept(B);if(O.id!=0){let x=yield q(B,l,D);I[(t=(r=O?.type)===null||r===void 0?void 0:r.characterValue)!==null&&t!==void 0?t:"top"]=x}return A.data=I,A.id=B,A}catch(l){throw l}})}function q(B,r,t){return M(this,arguments,void 0,function*(l,I,A,D=[]){var O,x,m;let u={},G=[],V=yield s.v.GetConcept(l);if(V.id!=0&&V.type==null){let Y=V.typeId,z=yield s.v.GetConcept(Y);V.type=z}if((O=V?.type)===null||O===void 0||O.characterValue,!A.includes(l))return V?.characterValue;if(D.includes(l))return"";D.push(l);for(let Y=0;Y<I.length;Y++)if(I[Y].ofTheConceptId==l){let z=I[Y].toTheConceptId,te=yield s.v.GetConcept(z);if(te.id!=0&&te?.type==null){let Ce=te.typeId,ue=yield s.v.GetConcept(Ce);te.type=ue}let se="the_",le=((m=(x=te?.type)===null||x===void 0?void 0:x.characterValue)!==null&&m!==void 0?m:"top").replace(se,"");if(isNaN(Number(le))){if(le){const Ce=yield q(z,I,A);u[le]=Ce}}else{const Ce=yield q(z,I,A);G[le]=Ce,u=G}}return u})}var X=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Z(B,r){return X(this,void 0,void 0,function*(){if(Ge)try{return(yield Je("GetCompositionListLocal",{compositionName:B,userId:r})).data}catch(t){Ze(t)}try{let t=yield(0,g.Ay)(B),l=[];if(t.id!=0){let I=yield s.v.GetConceptsByTypeIdAndUser(t.id,r);for(let A=0;A<I.length;A++){let D=yield W(I[A].id);l.push(D)}}return l}catch(t){throw t}})}function ae(B,r){return X(this,void 0,void 0,function*(){if(Ge)try{return(yield Je("GetCompositionListLocalWithId",{compositionName:B,userId:r})).data}catch(t){Ze(t)}try{let t=yield(0,g.Ay)(B),l=[];if(t.id!=0){let I=yield s.v.GetConceptsByTypeIdAndUser(t.id,r);for(let A=0;A<I.length;A++){let D=yield j(I[A].id);l.push(D)}}return l}catch(t){throw t}})}var H=v(5793),ie=v(6927),he=v(8196),ne=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Q(B,r,t){var l=arguments;return ne(this,arguments,void 0,function*(I,A,D,O=10,x=1){const m=ge.V.logfunction("GetConnectionOfTheConcept",l)||{};let u=[];try{if(Ge){m.serviceWorker=!0;try{const z=yield Je("GetConnectionOfTheConcept",{typeId:I,ofTheConceptId:A,userId:D,inpage:O,page:x});return ge.V.logUpdate(m),z.data}catch(z){(0,p.ey)(m,"GetConnectionOfTheConcept",z),Ze(z)}}let G=new URLSearchParams;G.append("typeId",`${I}`),G.append("ofTheConceptId",`${A}`),G.append("userId",`${D}`),G.append("inpage",`${O}`),G.append("page",`${x}`);let V=(0,c.Xr)("application/x-www-form-urlencoded");const Y=yield fetch(o.B.GetAllConnectionsOfConceptUrl(),{method:"POST",headers:V,body:G});return Y.ok?u=yield Y.json():((0,p.ey)(m,"GetConnectionOfTheConcept",Y.status),(0,p.ry)(Y)),ge.V.logUpdate(m),u}catch(G){(0,p.Mb)(G,o.B.GetAllConnectionsOfConceptUrl()),(0,p.ey)(m,"GetConnectionOfTheConcept",G)}})}var oe=v(4990),ee=v(7015),$=v(6047),re=v(9775),fe=v(1974),ce=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function de(B,r,t,l){return ce(this,arguments,void 0,function*(I,A,D,O,x=1,m=4){if(I>0&&D>0){var u=A,G=yield re.p.getId(),V=new oe.N(G,I,D,u,O,x,m);return I==D?(V.ofTheConceptId=0,V.toTheConceptId=1,V):(V.toUpdate=!0,V.isTemp=!1,ee.Y.AddConnection(V),V)}throw new fe.z("cannot create connection because id are negative ",!1,400,"")})}var we=v(9858),me=v(5747),ye=v(2404),Ae=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Le(B,r,t){return Ae(this,arguments,void 0,function*(l,I,A,D=!1,O=!1){var x,m;if(Ge)try{return(yield Je("CreateConnectionBetweenTwoConcepts",{ofTheConcept:l,toTheConcept:I,linker:A,both:D,count:O})).data}catch(te){Ze(te)}let u=l.userId;if(D){let te=A+"_by",se=((x=I.type)===null||x===void 0?void 0:x.characterValue)+"_s_"+te;O&&(yield ve(te,I,u));let le=yield(0,ye.A)("connection",se,!1,999,999,999),Ce=new oe.N(0,I.id,l.id,u,le.id,1e3,4);ee.Y.AddConnection(Ce)}let G=A+"_s",V=((m=l.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+G;O&&(yield ve(G,l,u));let Y=yield(0,ye.A)("connection",V,!1,999,999,999),z=new oe.N(0,l.id,I.id,u,Y.id,1e3,4);return ee.Y.AddConnection(z),z})}function ve(B,r){return Ae(this,arguments,void 0,function*(t,l,I=null){var A;let D=l,O=I??l.userId,x=t+"_count",m=((A=l.type)===null||A===void 0?void 0:A.characterValue)+"_s_"+x,u=yield(0,ye.A)("connection",m,!1,O,4,999),G=yield Q(u.id,l.id,O,10,1),V=[],Y=(0,$.o)();for(let te=0;te<G.length;te++){let se=yield(0,me.A)(G[te].toTheConceptId);V.push(se)}if(V.length<1)Y=yield(0,ye.A)("count","1",!1,O,4,999);else{let te=V[0],se=0;try{se=Number(te.characterValue)}catch{se=0}se+=1,Y=yield(0,ye.A)("count",se.toString(),!1,O,4,999);for(let le=0;le<G.length;le++)(0,we.m)(G[le].id)}let z=new oe.N(0,D.id,Y.id,D.userId,u.id,1e3,4);yield ee.Y.AddConnection(z)})}function De(B,r,t){return Ae(this,arguments,void 0,function*(l,I,A,D=!1,O=!1){var x,m;let u=l.userId;if(D){let z=A+"_by",te=((x=I.type)===null||x===void 0?void 0:x.characterValue)+"_s_"+z;O&&(yield ve(z,I,u));let se=yield(0,ye.A)("connection",te,!1,999,999,999),le=new oe.N(0,I.id,l.id,u,se.id,1e3,4);ee.Y.AddConnection(le)}let G=A+"_s",V=((m=l.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+G;O&&(yield ve(G,l,u));let Y=yield(0,ye.A)("connection",V,!1,999,999,999);return yield de(l.id,l.userId,I.id,Y.id,1e3,4)})}var Te=v(2051),pe=(v(6948),function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})});function ke(B,r){const t=ge.V.logfunction("storeToDatabase",[B,"noindexdb"]);ge.V.logUpdate(t)}function Ee(B,r,t){return pe(this,void 0,void 0,function*(){const l=ge.V.logfunction("getFromDatabaseWithType",[B,"noindexdb"]);ge.V.logUpdate(l)})}function Ne(B){return pe(this,void 0,void 0,function*(){const r=ge.V.logfunction("getObjectsFromIndexDb",[B,"noindexdb"]);ge.V.logUpdate(r)})}var be=v(3229),Be=v(6297),Re=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Fe(B,r){var t=arguments;return Re(this,arguments,void 0,function*(l,I,A=10,D=1){var O;const x=ge.V.logfunction("GetLink",t)||{};if(Ge){x.serviceWorker=!0;try{const Y=yield Je("GetLink",{id:l,linker:I,inpage:A,page:D});return ge.V.logUpdate(x),Y.data}catch(Y){(0,p.ey)(x,"GetLink",Y),Ze(Y)}}let m=[],u=yield(0,me.A)(l),G=((O=u.type)===null||O===void 0?void 0:O.characterValue)+"_s_"+I,V=yield(0,Be.A)(G,16);if(V.id>0){let Y=yield Q(V.id,u.id,u.userId,A,D),z=[];for(let te=0;te<Y.length;te++)z.push(Y[te].toTheConceptId);yield(0,a.Y)(z);for(let te=0;te<Y.length;te++){let se=Y[te].toTheConceptId,le=yield(0,me.A)(se),Ce=yield(0,n.Ez)(le.id);m.push(Ce)}}return ge.V.logUpdate(x),m})}function xe(B,r){var t=arguments;return Re(this,arguments,void 0,function*(l,I,A=10,D=1){var O;const x=ge.V.logfunction("GetLinkRaw",t);let m=[],u=yield(0,me.A)(l),G=((O=u.type)===null||O===void 0?void 0:O.characterValue)+"_s_"+I,V=yield(0,Be.A)(G,16);if(V.id>0){let Y=yield Q(V.id,u.id,u.userId,A,D),z=[];for(let te=0;te<Y.length;te++)z.push(Y[te].toTheConceptId);for(let te=0;te<Y.length;te++){let se=Y[te].toTheConceptId,le=yield(0,me.A)(se);m.push(le)}}return ge.V.logUpdate(x),m})}var $e=v(3424),He=v(6757),ht=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};const xt=new Map;function lt(B,r){var t=arguments;return ht(this,void 0,void 0,function*(){const l=ge.V.logfunction("MakeTheTypeConceptApi",t);let I=(0,$.o)();if(xt.has(B))return xt.get(B)||I;const A=ht(this,void 0,void 0,function*(){try{if(I=yield(0,He.Az)(B),I.id==0||I.typeId==4){let D=(0,c.Xr)("application/x-www-form-urlencoded");const O=yield fetch(o.B.MakeTheTypeConceptUrl(),{method:"POST",headers:D,body:`type=${B}`});if(!O.ok)throw(0,p.ry)(O),new Error(`Error! status: ${O.status}`);I=yield O.json(),ge.V.logUpdate(l)}}catch(D){(0,p.Mb)(D,o.B.MakeTheTypeConceptUrl()),(0,p.ey)(l,"MakeTheTypeConceptApi",D)}finally{xt.delete(B)}return I});return xt.set(B,A),A})}var Ft=v(838),yn=v(4647),Zo=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function ei(B){var r=arguments;return Zo(this,void 0,void 0,function*(){const t=ge.V.logfunction("GetLinkerConnectionFromConcepts",r);let l=yield(0,Ft.l)(B);for(let I=0;I<l.length;I++){let A=l[I],D=A.typeId,O=yield(0,me.A)(D);A.type=O}return ge.V.logUpdate(t),l})}function ti(B){var r=arguments;return Zo(this,void 0,void 0,function*(){const t=ge.V.logfunction("GetLinkerConnectionToConcepts",r);let l=yield(0,yn.W)(B);for(let I=0;I<l.length;I++){let A=l[I],D=A.typeId,O=yield(0,me.A)(D);A.type=O}return ge.V.logUpdate(t),l})}var os=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})},is=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})},rs=v(1804),io=v(903),ss=v(3796),as=v(5978),ni=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function ro(B){var r=arguments;return ni(this,void 0,void 0,function*(){const t=ge.V.logfunction("DeleteConceptById",r);if(Ge)try{return(yield Je("DeleteConceptById",{id:B})).data}catch(D){Ze(D)}if(B>0){var l=yield e.I.GetConcept(B);if(l.id>0){var I=l.typeId,A=l.characterValue;yield ss.c.removeTypeConcept(I,B),yield rs.f.removeNodeByCharacter(A,B),yield function(D){var O=arguments;return is(this,void 0,void 0,function*(){let x=!1;const m=ge.V.logfunction("DeleteTheConcept",O);try{const u=new FormData;u.append("id",D.toString());let G=(0,c.BZ)();const V=yield fetch(o.B.DeleteConceptUrl(),{method:"POST",headers:G,body:u});V.ok?x=(yield V.json()).success:(0,p.ry)(V),x&&e.I.AddNpc(D),ge.V.logUpdate(m)}catch(u){(0,p.Mb)(u,o.B.DeleteConceptUrl()),(0,p.ey)(m,"DeleteTheConcept",u)}return x})}(B),yield io.W.removeNodeFromTree(B),yield as.H.removeNodeFromTree(B)}}else s.v.RemoveConceptById(B);ge.V.logUpdate(t)})}function oi(B){return ni(this,void 0,void 0,function*(){if(Ge)try{return(yield Je("DeleteUser",{id:B})).data}catch(r){Ze(r)}B>0?function(r){var t=arguments;os(this,void 0,void 0,function*(){const l=ge.V.logfunction("DeleteUserInBackend",t);try{var I=(0,c.ab)("application/json","");let A=o.B.DeleteUserUrl();A=A+"?conceptId="+r+"&apiKey=freeschema";const D=yield fetch(A,{method:"POST",headers:I});if(D.ok){let O=yield D.json(),x=Number(O.data);return ro(x),ge.V.logUpdate(l),x}throw(0,p.ry)(D),new Error(`Delete composition Error! status: ${D.status}`)}catch(A){(0,p.Mb)(A,o.B.DeleteConceptUrl()),(0,p.ey)(l,"DeleteUserInBackend",A)}})}(B):s.v.RemoveConceptById(B)})}var cs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function ii(B,r){return cs(this,void 0,void 0,function*(){try{const t=new Headers;t.append("Authorization","Bearer "+r);const l=new FormData;l.append("id",B.toString());const I=yield fetch(o.B.DeleteConceptUrl(),{method:"POST",body:l,headers:t});if(!I.ok)throw(0,p.ry)(I),new Error(`Delete composition Error! status: ${I.status}`)}catch(t){(0,p.Mb)(t,o.B.DeleteConceptUrl())}})}var Tn=v(1402),jt=v(6715),ls=v(3693),Qe=v(8444),ri=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function ds(B){var r=arguments;return ri(this,void 0,void 0,function*(){const t=ge.V.logfunction("GetConnection",r);let l=yield jt.d.GetConnection(B);try{if(l.id!=0)return l;{const I=new FormData;I.append("id",B.toString());const A={method:"POST",headers:{Authorization:"Bearer "+Qe.b.BearerAccessToken},body:I};let D;try{D=yield fetch(o.B.GetConnectionUrl(),A)}catch{D=yield(0,ls.g)(A,"/api/get-connection-by-id")}return yield function(O,x){return ri(this,void 0,void 0,function*(){O.ok?(x=yield O.json(),jt.d.AddConnection(x)):(0,p.ry)(O)})}(D,l),ge.V.logUpdate(t),l}}catch(I){(0,p.Mb)(I,o.B.GetConnectionUrl()),(0,p.ey)(t,"GetConnection",I)}})}var us=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function si(B){var r=arguments;return us(this,void 0,void 0,function*(){const t=ge.V.logfunction("GetConnectionById",r);if(Tn.J.activateStatus===!0)try{Tn.J.incrementConnection(B)}catch{ge.V.log("ERROR","Error Adding Connection")}if(Ge)try{return(yield Je("GetConnectionById",{id:B})).data}catch(I){Ze(I)}let l=yield jt.d.GetConnection(B);return(l==null||l.id==0)&&B!=null&&B!=null&&(l=yield ds(B)),ge.V.logUpdate(t),l})}var hs=v(993),ps=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})},fs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function ai(B,r,t){return fs(this,arguments,void 0,function*(l,I,A,D=4,O=999){const x=ge.V.logfunction("MakeTheTimestamp")||{};if(Ge){x.serviceWorker=!0;try{const z=yield Je("MakeTheTimestamp",{type:l,referent:I,userId:A,accessId:D,sessionInformationId:O});return ge.V.logUpdate(x),z.data}catch(z){(0,p.ey)(x,"MakeTheTimestamp",z),Ze(z)}}let m,u="",G=l.startsWith("the_"),V=(0,$.o)();return u=G?l:"the_"+l,V=yield lt(u,A),m=yield function(z,te,se,le,Ce,ue,_e){return ps(this,void 0,void 0,function*(){let Oe=yield(0,Be.A)(z,le),je=Oe;return je.id==0&&(Oe=yield(0,hs.Ay)(z,te,se,le,Ce,ue,_e),je=Oe),je})}(I,A,4,V.id,0,D,u),ge.V.logUpdate(x),m})}class Zt{constructor(){this.composition=0,this.type="",this.linker="",this.inpage=10,this.page=1,this.listLinkers=[],this.fullLinkers=[],this.textSearch="",this.logic="or",this.reverse=!1,this.doFilter=!1,this.filterSearches=[],this.selectors=[],this.ofCompositions=[]}}var pt=v(3246),kn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function ci(){var B=arguments;return kn(this,arguments,void 0,function*(r=0,t=[],l="",I=[]){const A=ge.V.logfunction("RecursiveSearchApi",B)||{};let D=[];try{if(Ge){A.serviceWorker=!0;try{const G=yield Je("RecursiveSearchApi",{composition:r,listLinkers:t,textSearch:l,fullLinkers:I});return ge.V.logUpdate(A),G.data}catch(G){(0,p.ey)(A,"RecursiveSearchApi",G),Ze(G)}}let O=new Zt;O.composition=r,O.listLinkers=t,O.fullLinkers=I,O.textSearch=l;let x=JSON.stringify(O),m=(0,c.Xr)("application/json");const u=yield fetch(o.B.RecursiveSearchUrl(),{method:"POST",headers:m,body:x});if(u.ok){const G=yield u.json();let V=G.compositionIds,Y=G.internalConnections;G.externalConnections,D=yield(0,pt.p8)(V,Y)}else(0,p.ey)(A,"RecursiveSearchApi",u.status),(0,p.ry)(u);ge.V.logUpdate(A)}catch(O){(0,p.ey)(A,"RecursiveSearchApi",O),(0,p.Mb)(O,o.B.RecursiveSearchUrl())}return D})}function li(){var B=arguments;return kn(this,arguments,void 0,function*(r=0,t=[],l=""){const I=ge.V.logfunction("RecursiveSearchApiWithInternalConnections",B)||{};let A=[];try{if(Ge){I.serviceWorker=!0;try{const u=yield Je("RecursiveSearchApiWithInternalConnections",{composition:r,listLinkers:t,textSearch:l});return ge.V.logUpdate(I),u.data}catch(u){(0,p.ey)(I,"RecursiveSearchApiWithInternalConnections",u),Ze(u)}}let D=new Zt;D.composition=r,D.listLinkers=t,D.textSearch=l;let O=JSON.stringify(D),x=(0,c.Xr)("application/json");const m=yield fetch(o.B.RecursiveSearchUrl(),{method:"POST",headers:x,body:O});if(m.ok){const u=yield m.json();let G=u.compositionIds,V=u.internalConnections;u.externalConnections,A=yield(0,pt.km)(G,V),ge.V.logUpdate(I)}else(0,p.ey)(I,"GetCompositionConnectionsBetweenTwoConcepts",m.status),(0,p.ry)(m)}catch(D){(0,p.ey)(I,"GetCompositionConnectionsBetweenTwoConcepts",D),(0,p.Mb)(D,o.B.RecursiveSearchUrl())}return A})}function so(){var B=arguments;return kn(this,arguments,void 0,function*(r=0,t=[],l="",I=[]){const A=ge.V.logfunction("RecursiveSearchApiRaw",B)||{};try{if(Ge){A.serviceWorker=!0;try{const u=yield Je("RecursiveSearchApiRaw",{composition:r,listLinkers:t,textSearch:l,fullLinkers:I});return ge.V.logUpdate(A),u.data}catch(u){(0,p.ey)(A,"RecursiveSearchApiRaw",u),Ze(u)}}let D=new Zt;D.composition=r,D.listLinkers=t,D.textSearch=l,D.fullLinkers=I;let O=JSON.stringify(D),x=(0,c.Xr)("application/json");const m=yield fetch(o.B.RecursiveSearchUrl(),{method:"POST",headers:x,body:O});if(m.ok){const u=yield m.json();return u.compositionIds,u.internalConnections,u.externalConnections,ge.V.logUpdate(A),u}return(0,p.ey)(A,"RecursiveSearchApiRaw",m.status),(0,p.ry)(m),ge.V.logUpdate(A),[]}catch(D){(0,p.ey)(A,"RecursiveSearchApiRaw",D),(0,p.Mb)(D,o.B.RecursiveSearchUrl())}})}function di(){var B=arguments;return kn(this,arguments,void 0,function*(r=0,t=[],l=""){const I=ge.V.logfunction("RecursiveSearchApiRawFullLinker",B)||{};try{if(Ge){I.serviceWorker=!0;try{const m=yield Je("RecursiveSearchApiRawFullLinker",{composition:r,fullLinkers:t,textSearch:l});return ge.V.logUpdate(I),m.data}catch(m){(0,p.ey)(I,"RecursiveSearchApiRawFullLinker",m),Ze(m)}}let A=new Zt;A.composition=r,A.fullLinkers=t,A.textSearch=l;let D=JSON.stringify(A),O=(0,c.Xr)("application/json");const x=yield fetch(o.B.RecursiveSearchUrl(),{method:"POST",headers:O,body:D});if(x.ok){const m=yield x.json();return m.compositionIds,m.internalConnections,m.externalConnections,ge.V.logUpdate(I),m}return(0,p.ey)(I,"RecursiveSearchApiRawFullLinker",x.status),(0,p.ry)(x),ge.V.logUpdate(I),[]}catch(A){(0,p.Mb)(A,o.B.RecursiveSearchUrl()),(0,p.ey)(I,"RecursiveSearchApiRawFullLinker",A)}})}function ui(){var B=arguments;return kn(this,arguments,void 0,function*(r=0,t=[],l=""){const I=ge.V.logfunction("RecursiveSearchApiRawFullLinker",B)||{};try{if(Ge)try{I.serviceWorker=!0;const m=yield Je("RecursiveSearchApiNewRawFullLinker",{composition:r,fullLinkers:t,textSearch:l});return ge.V.logUpdate(I),m.data}catch(m){(0,p.ey)(I,"RecursiveSearchApiNewRawFullLinker",m),Ze(m)}let A=new Zt;A.composition=r,A.fullLinkers=t,A.textSearch=l;let D=JSON.stringify(A),O=(0,c.Xr)("application/json");const x=yield fetch(o.B.RecursiveSearchUrl(),{method:"POST",headers:O,body:D});if(x.ok){const m=yield x.json();return m.compositionIds,m.internalConnections,m.externalConnections,ge.V.logUpdate(I),m}return(0,p.ey)(I,"RecursiveSearchApiNewRawFullLinker",x.status),(0,p.ry)(x),ge.V.logUpdate(I),[]}catch(A){(0,p.Mb)(A,o.B.RecursiveSearchUrl()),(0,p.ey)(I,"RecursiveSearchApiNewRawFullLinker",A)}})}var An=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};const ao=["image/jpeg","image/jpg","image/png","image/webp"],co=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","text/plain","application/pdf"];function hi(B,r){return An(this,void 0,void 0,function*(){const t=ge.V.logfunction("uploadAttachment");try{const l=new FormData;let I;if(co.includes(B.type)||B.name.toLowerCase().endsWith(".md"))l.append("file",B,B.name),I=yield uo(l,r);else{if(!ao.includes(B.type))return{message:"Invalid File Format",success:!1};l.append("image",B,B.name),I=yield lo(l,r)}return I?.data?(ge.V.logUpdate(t),{message:"Upload Success",success:!0,url:I.data}):{message:"File Upload Failed",success:!1}}catch(l){throw(0,p.ey)(t,"uploadAttachment",l),l}})}function lo(B){return An(this,arguments,void 0,function*(r,t=""){const l=ge.V.logfunction("uploadImage");try{const I=yield fetch(o.B.uploadImageUrl(),{method:"POST",body:r,headers:{Authorization:`Bearer ${t}`}});if(!I.ok){const A=I.headers.get("content-type");return A&&A.includes("text/plain"),yield I?.text(),ge.V.logUpdate(l),null}return yield I.json()}catch(I){return(0,p.ey)(l,"uploadImage",I),null}})}function pi(B){return An(this,arguments,void 0,function*(r,t=""){const l=ge.V.logfunction("uploadImageV2");try{const I=yield fetch(o.B.uploadImageUrlWithSmall(),{method:"POST",body:r,headers:{Authorization:`Bearer ${t}`}});if(!I.ok){const A=I.headers.get("content-type");return A&&A.includes("text/plain"),yield I?.text(),ge.V.logUpdate(l),null}return yield I.json()}catch(I){return(0,p.ey)(l,"uploadImageV2",I),null}})}function uo(B){return An(this,arguments,void 0,function*(r,t=""){const l=ge.V.logfunction("uploadFile");try{const I=yield fetch(o.B.uploadFileUrl(),{method:"POST",body:r,headers:{Authorization:`Bearer ${t}`}});if(!I.ok){const A=I.headers.get("content-type");return A&&A.includes("text/plain"),yield I.text(),null}return ge.V.logUpdate(l),yield I.json()}catch(I){return(0,p.ey)(l,"uploadFile",I),null}})}function fi(){return An(this,void 0,void 0,function*(){let B=yield(0,c.Xr)(),r={};try{const t=yield fetch(o.B.UploadFileLimitUrl(),{method:"GET",headers:B});t.ok&&(r=t.json())}catch(t){throw t}return r})}var en=v(9368),Vn=v(4622),ms=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function mi(B,r){var t=arguments;return ms(this,arguments,void 0,function*(l,I,A="boomconsole.com"){const D=ge.V.logfunction("LoginToBackend",t);try{let O={email:l,password:I,application:A},x=new Headers;x.append("Content-Type","application/json");let m=JSON.stringify(O);const u=yield fetch(o.B.LoginUrl(),{method:"POST",headers:x,body:m}),G=yield u.json();if(u.ok)return yield Qe.b.saveUserProfile(G),ge.V.logUpdate(D),G;(0,p.ER)(u,G)}catch(O){(0,p.Mb)(O,o.B.LoginUrl()),(0,p.ey)(D,"LoginToBackend",O)}})}var ho=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function yi(B){return ho(this,void 0,void 0,function*(){return yield function(){return ho(this,arguments,void 0,function*(t="",l={}){let I={message:"success",status:!1,statusCode:200,data:"cannot signup"};try{const A=yield fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(l)}),D=yield A.json();return A.ok?I={message:"success",status:!0,statusCode:200,data:D}:(0,p.ER)(A,D),I}catch(A){(0,p.Mb)(A,t)}})}(o.B.SignupUrl(),B)})}function gi(B){return ho(this,void 0,void 0,function*(){const r=o.B.NODE_URL,t=yield fetch(`${r}/api/v1/entity/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)});if(t.ok)return t.json();{if(t.status===404)throw new Error("404, Not found");if(t.status===500)throw new Error("500, internal server error");let l=yield t.json();throw new Error(l.message)}})}var ys=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function vi(B){return ys(this,void 0,void 0,function*(){const r=JSON.stringify({email:B.email,password:B.password});let t={message:"success",status:!1,statusCode:200,data:""};const l=new Headers;l.append("Content-Type","application/json");const I=o.B.LoginUrl();try{const A=yield fetch(I,{method:"POST",headers:l,body:r,redirect:"follow"}),D=yield A.json();if(A.ok){const O=D?.data;t={message:"success",status:!0,statusCode:200,data:O},Bn(O.token)}else(0,p.ER)(A,D);return t}catch(A){(0,p.Mb)(A,I)}})}var po=v(2801),qn=v(388);function gs(B=[],r){Array.isArray(B)&&B.splice(B.findIndex(function(t){return t.id===r.id}),1)}function vs(B=[],r){Array.isArray(B)&&B.splice(B.findIndex(function(t){return t.id===r.id}),1)}class fo{constructor(r,t,l,I){this.expiryTime=new Date(Date.now()+6e5),this.height=1,this.key=r,this.value=t,this.leftNode=l,this.rightNode=I}isValid(){const r=new Date(Date.now());return!(this.expiryTime<r)||(zt.removeNodeFromTree(this.key),!1)}saveToCache(r){this.value.cached=r}addNode(r,t,l){if(t==null)return t=r;const I=t.leftNode,A=t.rightNode;if(t.key>r.key)t.leftNode=this.addNode(r,I,l);else{if(!(t.key<r.key))return this.isValid(),t=r;t.rightNode=this.addNode(r,A,l)}t.height=1+Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode));const D=this.getBalanceFactor(t);if(D>1&&t.leftNode){if(r.key<t.leftNode.key)return this.rightRotate(t);if(r.key>t.leftNode.key)return t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)}if(D<-1&&t.rightNode){if(r.key>t.rightNode.key)return this.leftRotate(t);if(r.key<t.rightNode.key)return t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)}return this.isValid(),t}rightRotate(r){if(r){const t=r.leftNode;if(t){const l=t.rightNode;return r.leftNode=l,t.rightNode=r,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1,t}}return r}leftRotate(r){if(r){const t=r.rightNode;if(t){const l=t.leftNode;return t.leftNode=r,r.rightNode=l,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(r.rightNode))+1,t}}return r}getHeight(r){return r?r.height:0}getBalanceFactor(r){return r==null?0:this.getHeight(r.leftNode)-this.getHeight(r.rightNode)}getFromNode(r,t){return t&&(r==t.key&&t.isValid()?t:r<t.key?this.getFromNode(r,t.leftNode):r>t.key?this.getFromNode(r,t.rightNode):t)}removeNode(r,t){if(r==null)return r;if(r.key>t)return r.leftNode=this.removeNode(r.leftNode,t),r;if(r.key<t)return r.rightNode=this.removeNode(r.rightNode,t),r;if(r.leftNode==null){const l=r.rightNode;return r=null,l}if(r.rightNode==null){const l=r.leftNode;return r=null,l}{const l=this.inOrderSuccessor(r.rightNode);return r.value=l.value,r.key=l.key,r.rightNode=this.removeNode(r.rightNode,l.key),r}}countNodeBelow(r){return r==null?0:1+this.countNodeBelow(r.leftNode)+this.countNodeBelow(r.rightNode)}inOrderSuccessor(r){for(;r.leftNode!=null;)r=r.leftNode;return r}}var Ci=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class zt{static addNodeToTree(r){if(this.root==null)return this.root=r,this.root;this.root=this.root.addNode(r,this.root,this.root.height)}static addCompositionToTree(r){const t=new fo(r.id,r,null,null);this.addNodeToTree(t)}static getNodeFromTree(r){return Ci(this,void 0,void 0,function*(){return this.root?this.root.getFromNode(r,this.root):null})}static removeNodeFromTree(r){return Ci(this,void 0,void 0,function*(){this.root&&(this.root=this.root.removeNode(this.root,r))})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}zt.root=null;var Cs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function gn(B,r,t,l){return Cs(this,arguments,void 0,function*(I,A,D,O,x=[]){var m,u;let G={};const V=[];if(I==0)return"";let Y=mo(D,I);if((Y==null||Y.id==0)&&I!=null&&I!=null&&(Y=yield(0,me.A)(I)),Y.id!=0&&Y.type==null){const z=Y.typeId;let te=mo(D,z);Y.type=te,te==null&&z!=null&&z!=null&&(te=yield(0,me.A)(z),Y.type=te)}if(!O.includes(I))return Y?.characterValue;if(x.includes(I))return"";x.push(I);for(let z=0;z<A.length;z++)if(A[z].ofTheConceptId==I){const te=A[z].toTheConceptId;if(O.includes(I)){let se=mo(D,te);if((se==null||se.id==0)&&te!=null&&te!=null&&(se=yield(0,me.A)(te)),se.id!=0&&se?.type==null){const ue=se.typeId;let _e=yield e.I.GetConcept(ue);se.type=_e,_e==null&&ue!=null&&ue!=null&&(_e=yield(0,me.A)(ue),se.type=_e)}const le="the_",Ce=((u=(m=se?.type)===null||m===void 0?void 0:m.characterValue)!==null&&u!==void 0?u:"").replace(le,"");if(isNaN(Number(Ce))){if(Ce){const ue=yield gn(te,A,D,O,x);G[Ce]=ue}}else{const ue=yield gn(te,A,D,O,x);V[Ce]=ue,G=V}}}return G})}function mo(B,r){let t=(0,$.o)();for(let l=0;l<B.length;l++)if(r==B[l].id)return t=B[l],t;return t}var bs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class _n{constructor(){this.id=0,this.mainConcept=(0,$.o)(),this.connections=[],this.concepts=[],this.subcompositions=[],this.cached={}}updateCache(){return bs(this,void 0,void 0,function*(){if(this.mainConcept.id==0)for(let r=0;r<this.concepts.length;r++)this.concepts[r].id==this.id&&(this.mainConcept=this.concepts[r]);this.cached=yield gn(this.id,this.connections,this.concepts,this.subcompositions,[])})}UpdateAcrossDistributedSystem(){var r,t,l;try{this.id!=0&&(t="compositionUpdate",l=(r=this.id)===null||r===void 0?void 0:r.toString(),o.B.MQTT_CONNECTION&&o.B.MQTT_CONNECTION.publish(t,l))}catch{}}isUpdating(){this.UpdateAcrossDistributedSystem()}GetDataCache(){var r,t,l;const I={};I[(l=(t=(r=this.mainConcept)===null||r===void 0?void 0:r.type)===null||t===void 0?void 0:t.characterValue)!==null&&l!==void 0?l:""]=this.cached;const A={};return A.data=I,A.id=this.id,A}}var Is=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Sn(B){return Is(this,arguments,void 0,function*(r,t=null,l=null,I=null,A=null,D=null,O=null,x=null){const m=A??999,u=D??4,G=O??999;let V=I??0,Y=(0,$.o)();x==null&&(x=new _n);for(const z in r)if(typeof r[z]=="object"||Array.isArray(r[z])){const te=yield(0,ye.A)(z,"",!0,m,u,G);if(t==null&&l==null){let se=V;Y=te,se=te.id,V=te.id,x.concepts.push(te),x.id=te.id,yield Sn(r[z],te.id,te.userId,se,A,D,O,x)}else{const se=t??999,le=l??999,Ce=V;Y=te,x.concepts.push(te);const ue=yield(0,be.q)(se,le,te.id,Ce);x.connections.push(ue),yield Sn(r[z],te.id,te.userId,Ce,A,D,O,x)}r[z]!=null&&r[z]!=null&&x.subcompositions.push(te.id)}else{const te=t??999,se=l??999,le=V,Ce=yield(0,ye.A)(z,r[z],!1,m,u,G);x.concepts.push(Ce);const ue=yield(0,be.q)(te,se,Ce.id,le);x.connections.push(ue)}return Y})}var ws=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function bi(B){return ws(this,void 0,void 0,function*(){const r=ge.V.logfunction("UpdateComposition")||{};if(Ge){r.serviceWorker=!0;try{const ue=yield Je("UpdateComposition",{patcherStructure:B});return ge.V.logUpdate(r),ue.data}catch(ue){(0,p.ey)(r,"UpdateComposition",ue),Ze(ue)}}const t=B.userId,l=B.sessionId,I=B.accessId;let A=[];const D=[];let O=(0,$.o)(),x=(0,$.o)();const m=[];let u=B.compositionId;const G=B.ofTheCompositionId;let V=[];if(u<0){let ue=yield(0,me.A)(u,t);if(!(ue.id>0))return null;u=ue.id}A=yield(0,H.s)(u);const Y=[],z=new _n,te=[];z.id=u,z.isUpdating();let se=[];for(let ue=0;ue<A.length;ue++)(0,po.A)(te,A[ue].ofTheConceptId),(0,po.A)(Y,A[ue].ofTheConceptId),(0,po.A)(Y,A[ue].toTheConceptId),se.push(A[ue].ofTheConceptId);z.subcompositions=te,z.connections=A;for(let ue=0;ue<Y.length;ue++){const _e=yield(0,me.A)(Y[ue]);u==Y[ue]&&(O=_e),G==Y[ue]&&(x=_e),D.push(_e)}const le=B.patchObject;for(const ue in le){let _e=(0,$.o)();const Oe=le[ue];let je=O;if(x.id>0&&(je=x),Array.isArray(Oe)||typeof Oe=="object"){_e=yield(0,ye.A)(ue,"",!0,O.userId,4,999),z.subcompositions.push(_e.id);const Ie=(0,qn.vo)(D,_e);for(let Pe=0;Pe<Ie.length;Pe++)if(Ie[Pe].id>0){const Me=(0,qn.wS)(z.connections,Ie[Pe].id);V=V.concat(Me),m.push(Ie[Pe])}yield Sn(le[ue],_e.id,_e.userId,O.id,O.userId,4,999,z)}else{_e=yield(0,ye.A)(ue,Oe,!1,t,I,l);const Ie=(0,qn.vo)(D,_e);for(let Pe=0;Pe<Ie.length;Pe++)if(Ie[Pe].id>0){const Me=(0,qn.wS)(z.connections,Ie[Pe].id);V=V.concat(Me),m.push(Ie[Pe])}}const Se=(0,be.q)(je.id,je.userId,_e.id,O.id);D.push(_e),z.connections.push(Se)}for(let ue=0;ue<V.length;ue++)vs(z.connections,V[ue]),(0,we.m)(V[ue].id);for(let ue=0;ue<m.length;ue++)gs(D,m[ue]);z.concepts=z.concepts.concat(D),z.mainConcept=O,z.id=O.id,yield z.updateCache(),zt.addCompositionToTree(z),ee.Y.SyncDataOnline();let Ce=z.GetDataCache();return ge.V.logUpdate(r),Ce})}var Ts=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Ii(B,r,t,l){return Ts(this,arguments,void 0,function*(I,A,D,O,x=10,m=1){var u=(0,c.ab)("application/x-www-form-urlencoded",O),G=new URLSearchParams;G.append("type",I),G.append("search",A),G.append("composition",D),G.append("inpage",x.toString()),G.append("page",m.toString());const V=o.B.SearchCompositionsUrl()+"?"+G.toString();try{const Y=yield fetch(V,{method:"GET",headers:u});return Y.ok?yield Y.json():((0,p.ry)(Y),[])}catch(Y){(0,p.Mb)(Y,V)}})}var ks=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function wi(B){return ks(this,arguments,void 0,function*(r,t=""){var l=(0,c.ab)("application/json",t);const I=o.B.SearchLinkMultipleAll(),A=JSON.stringify(r);try{const D=yield fetch(I,{method:"POST",headers:l,body:A});return D.ok?yield D.json():((0,p.ry)(D),[])}catch(D){(0,p.Mb)(D,I)}})}var Ti=v(9536),xn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function ki(B){return xn(this,arguments,void 0,function*(r,t=[]){var l,I;let A=[];const D=[];let O={},x={};const m=yield zt.getNodeFromTree(r),u=[];let G=yield e.I.GetConcept(r);if(G.id==0&&r!=null&&r!=null&&(G=yield(0,Ti.r)(r)),m==null){let V=[];V=t.length>0?Ai(r,t):yield(0,H.s)(r),A=V;for(let z=0;z<A.length;z++)u.includes(A[z].ofTheConceptId)||(u.push(A[z].ofTheConceptId),D.push(A[z].ofTheConceptId)),D.includes(A[z].toTheConceptId)||D.push(A[z].toTheConceptId);Si(G,A,D,u);let Y=[];x=yield(0,n.zN)(r,A,u,Y),O[(I=(l=G?.type)===null||l===void 0?void 0:l.characterValue)!==null&&I!==void 0?I:""]=x}else x=m.value.GetDataCache(),O=x;return G.id==0?"":O})}function Ai(B,r){const t=[];for(let l=0;l<r.length;l++)r[l].typeId==B&&t.push(r[l]);return t}function yo(B){return xn(this,arguments,void 0,function*(r,t=[]){var l,I;let A={},D=[];const O=[];let x;const m={},u=yield zt.getNodeFromTree(r),G=[];let V=yield e.I.GetConcept(r);if(V.id==0&&r!=null&&r!=null&&(V=yield(0,Ti.r)(r)),u==null){let Y=[];Y=t.length>0?Ai(r,t):yield(0,H.s)(r),D=Y;for(let z=0;z<D.length;z++)G.includes(D[z].ofTheConceptId)||(G.push(D[z].ofTheConceptId),O.push(D[z].ofTheConceptId)),O.includes(D[z].toTheConceptId)||O.push(D[z].toTheConceptId);Si(V,D,O,G),x=yield(0,n.zN)(r,D,G),m[(I=(l=V?.type)===null||l===void 0?void 0:l.characterValue)!==null&&I!==void 0?I:""]=x,A.created_at=V.entryTimeStamp,A.data=m,A.id=r}else x=u.value.GetDataCache(),A=x;return V.id==0?"":A})}function _i(B,r){return xn(this,void 0,void 0,function*(){let t=[];const l=[];t=yield(0,Vn.j)(r);for(let I=0;I<B.length;I++){const A=yield yo(B[I],t);A&&l.push(A)}return l})}function Si(B,r,t,l){return xn(this,void 0,void 0,function*(){const I=new _n,A=yield function(O){return xn(this,void 0,void 0,function*(){let x=[];const m=[];for(let u=0;u<O?.length;u++){const G=yield e.I.GetConcept(O[u]);G.id==0?m.push(O[u]):x.push(G)}return m?.length==0||(x=yield(0,en.I)(m)),x})}(t);I.connections=r,I.concepts=A,I.id=B.id,I.subcompositions=l,I.mainConcept=B;const D=yield gn(B.id,r,A,l,[]);I.cached=D,zt.addCompositionToTree(I)})}var As=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function xi(B){return As(this,void 0,void 0,function*(){try{var r=(0,c.Xr)();const t=JSON.stringify(B),l=yield fetch(o.B.CreateSessionId(),{method:"POST",headers:r,body:t});return l.ok?l.json():((0,p.ry)(l),null)}catch(t){(0,p.Mb)(t,o.B.CreateSessionId())}})}var _s=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Ni(B,r){return _s(this,void 0,void 0,function*(){try{var t=(0,c.Xr)("application/x-www-form-urlencoded");const l=new URLSearchParams;l.append("sessionId",B.toString()),l.append("url",r);const I=yield fetch(o.B.CreateSessionVisitUrl(),{method:"POST",headers:t,body:l});return I.ok?I.json():((0,p.ry)(I),null)}catch(l){(0,p.Mb)(l,o.B.CreateSessionVisitUrl())}})}var Ss=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Li(B,r,t){return Ss(this,arguments,void 0,function*(l,I,A,D=10,O=1){let x=[];try{var m=new URLSearchParams;m.append("typeId",`${l}`),m.append("toTheConceptId",`${I}`),m.append("userId",`${A}`),m.append("inpage",`${D}`),m.append("page",`${O}`);var u=(0,c.Xr)("application/x-www-form-urlencoded");const G=yield fetch(o.B.GetAllConnectionsToConceptUrl(),{method:"POST",headers:u,body:m});return G.ok?x=yield G.json():(0,p.ry)(G),x}catch(G){throw G}})}var go=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Di(B,r){var t=arguments;return go(this,arguments,void 0,function*(l,I,A=10,D=1,O=!1){const x=ge.V.logfunction("GetRelation",t)||{};if(Ge){x.serviceWorker=!0;try{const z=yield Je("GetRelation",{id:l,relation:I,inpage:A,page:D,reverse:O});return ge.V.logUpdate(x),z.data}catch(z){(0,p.ey)(x,"GetRelation",z),Ze(z)}}let m=[],u=yield(0,me.A)(l),G=yield(0,He.Az)(I),V=[];if(G.id>0)if(O){V=yield Li(G.id,u.id,u.userId,A,D);let z=[];for(var Y=0;Y<V.length;Y++)z.push(V[Y].ofTheConceptId);yield(0,a.Y)(z);for(let te=0;te<V.length;te++){let se=V[te].ofTheConceptId,le=yield(0,me.A)(se),Ce=yield(0,n.Ez)(le.id);m.push(Ce)}}else{V=yield Q(G.id,u.id,u.userId,A,D);let z=[];for(let te=0;te<V.length;te++)z.push(V[te].toTheConceptId);yield(0,a.Y)(z);for(let te=0;te<V.length;te++){let se=V[te].toTheConceptId,le=yield(0,me.A)(se),Ce=yield(0,n.Ez)(le.id);m.push(Ce)}}return ge.V.logUpdate(x),m})}function Pi(B,r){return go(this,arguments,void 0,function*(t,l,I=10,A=1,D=!1){let O=new St;return O.conceptIds=[t],O.selectors=[l],O.outputFormat=Ue.y0,O.inpage=I,O.page=A,O.limit=!0,yield Kn(O,"")})}function Bi(B,r){var t=arguments;return go(this,arguments,void 0,function*(l,I,A=10,D=1,O=!1){const x=ge.V.logfunction("GetRelationRaw",t)||{};if(Ge){x.serviceWorker=!0;try{const te=yield Je("GetRelationRaw",{id:l,relation:I,inpage:A,page:D,reverse:O});return ge.V.logUpdate(x),te.data}catch(te){(0,p.ey)(x,"GetRelationRaw",te),Ze(te)}}let m=[],u=yield(0,me.A)(l),G=yield(0,He.Az)(I),V=[],Y=[];if(G.id>0){if(O){V=yield Li(G.id,u.id,u.userId,A,D);for(var z=0;z<V.length;z++)Y.push(V[z].ofTheConceptId)}else{V=yield Q(G.id,u.id,u.userId,A,D);for(let te=0;te<V.length;te++)Y.push(V[te].toTheConceptId)}m=yield(0,en.r)(Y)}return ge.V.logUpdate(x),m})}var vo=v(9911),Gt=v(3726);class xs{constructor(r,t,l,I){this.value=[],this.height=1,this.key=r,this.value.push(t),this.leftNode=l,this.rightNode=I}addNode(r,t,l){if(t==null)return t=r;var I=t.leftNode,A=t.rightNode;if(t.key>r.key)t.leftNode=this.addNode(r,I,l);else{if(!(t.key<r.key))return t.value.push(...r.value),t;t.rightNode=this.addNode(r,A,l)}t.height=1+Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode));let D=this.getBalanceFactor(t);if(D>1&&t.leftNode){if(r.key<t.leftNode.key)return this.rightRotate(t);if(r.key>t.leftNode.key)return t.leftNode=this.leftRotate(t.leftNode),this.rightRotate(t)}if(D<-1&&t.rightNode){if(r.key>t.rightNode.key)return this.leftRotate(t);if(r.key<t.rightNode.key)return t.rightNode=this.rightRotate(t.rightNode),this.leftRotate(t)}return t}rightRotate(r){if(r){let t=r.leftNode;if(t){let l=t.rightNode;return r.leftNode=l,t.rightNode=r,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(t.rightNode))+1,t}}return r}leftRotate(r){if(r){let t=r.rightNode;if(t){let l=t.leftNode;return t.leftNode=r,r.rightNode=l,r.height=Math.max(this.getHeight(r.leftNode),this.getHeight(r.rightNode))+1,t.height=Math.max(this.getHeight(t.leftNode),this.getHeight(r.rightNode))+1,t}}return r}getHeight(r){return r?r.height:0}getBalanceFactor(r){return r==null?0:this.getHeight(r.leftNode)-this.getHeight(r.rightNode)}getFromNode(r,t){return t&&(r==t.key?t:r<t.key?this.getFromNode(r,t.leftNode):r>t.key?this.getFromNode(r,t.rightNode):t)}removeNode(r,t){if(r==null)return r;if(r.key>t)return r.leftNode=this.removeNode(r.leftNode,t),r;if(r.key<t)return r.rightNode=this.removeNode(r.rightNode,t),r;if(r.leftNode==null){let I=r.rightNode;return r=null,I}if(r.rightNode==null){let I=r.leftNode;return r=null,I}var l=this.inOrderSuccessor(r.rightNode);return r.value=l.value,r.key=l.key,r.rightNode=this.removeNode(r.rightNode,l.key),r}countNodeBelow(r){return r==null?0:1+this.countNodeBelow(r.leftNode)+this.countNodeBelow(r.rightNode)}inOrderSuccessor(r){for(;r.leftNode!=null;)r=r.leftNode;return r}}var Co=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};class tn{static compositeKey(r,t){return("0000"+r.toString(16).toUpperCase()).slice(-4)+("0000"+t.toString(16).toUpperCase()).slice(-4)}static addNodeToTree(r){if(this.root==null)return this.root=r,this.root;this.root=this.root.addNode(r,this.root,this.root.height)}static waitForDataToLoad(){return Co(this,void 0,void 0,function*(){return new Promise((r,t)=>{this.checkFlag(r),setTimeout(()=>{t("not")},25e3)})})}static checkFlag(r){if(w.B.isDataLoaded)return r("done");setTimeout(tn.checkFlag,1e3,r)}static addConceptToTree(r,t,l=999){let I=this.compositeKey(t,l);var A=new xs(I,r,null,null);this.addNodeToTree(A)}static getNodeFromTree(r,t){return Co(this,void 0,void 0,function*(){let l=this.compositeKey(r,t);return this.root?this.root.getFromNode(l,this.root):null})}static removeNodeFromTree(r){return Co(this,arguments,void 0,function*(t,l=999){if(this.root){let I=this.compositeKey(t,l);this.root=this.root.removeNode(this.root,I)}})}static countNumberOfNodes(){return this.root?this.root.countNodeBelow(this.root):0}}tn.root=null;var Ri=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Ei(B,r){return Ri(this,arguments,void 0,function*(t,l,I=999){let A=yield tn.getNodeFromTree(t,I),D=(0,vo.u)();if(A)for(let O=0;O<A.value.length;O++){let x=A.value[O];x.ghostId==l&&(D=x)}return D})}function Oi(B,r){return Ri(this,arguments,void 0,function*(t,l,I=999){tn.addConceptToTree(t,l,I)})}var nn=v(127),bo=v(8552),Fi=v(7812),Ns=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})},Ls=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Gi(B,r,t){return Ls(this,void 0,void 0,function*(){try{if(Ge)try{return(yield Je("GetRelationLocal",{id:B,relation:r,userId:t})).data}catch(D){Ze(D)}let l=yield(0,g.$I)(r),I=[];l.id!=0&&(I=yield function(D,O){return Ns(this,void 0,void 0,function*(){try{return yield U.G.GetConnectionOfCompositionAndTypeLocal(O,D)}catch(x){throw x}})}(B,l.id));let A=[];for(let D=0;D<I.length;D++){let O=yield W(I[D].toTheConceptId);A.push(O)}return A}catch(l){throw l}})}var Ds=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Io(B){return Ds(this,void 0,void 0,function*(){let r=[];try{var t=(0,c.Xr)();const l=yield fetch(o.B.ViewInternalDataUrl(),{method:"POST",headers:t,body:JSON.stringify(B)});if(l.ok){let I=yield l.json(),A={};for(let D=0;D<I.length;D++){let O=I[D].concepts;r=I[D].connections;let x=I[D].id;(0,en.r)(O),A[x]=r}return A}return(0,p.ry)(l),r}catch(l){throw l}})}var Ps=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function wo(B){return Ps(this,void 0,void 0,function*(){var r;try{let t=yield Io(B),l=[];for(let I=0;I<B.length;I++){let A=B[I],D=t[A];if(A&&D){let O=[],x={};for(let u=0;u<D.length;u++)O.includes(D[u].ofTheConceptId)||O.push(D[u].ofTheConceptId);let m=yield(0,n.zN)(A,D,O);x.data=m,x.id=A,l.push(x)}else{let O={};O.id=A;let x=yield(0,me.A)(A),m={};x.type&&(m[(r=x?.type)===null||r===void 0?void 0:r.characterValue]=x.characterValue,O.data=m,l.push(O))}}return l}catch(t){throw t}})}var Hn=v(2625),Ui=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})},Mi=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Wi(B){return Mi(this,arguments,void 0,function*(r,t=""){try{let l=yield function(I){return Ui(this,arguments,void 0,function*(A,D=""){var O=(0,c.ab)("application/json",D);let x=o.B.SearchInternalWithAuthenticatedCcsUrl();x=x+"?composition="+A.composition+"&search="+A.search+"&internalComposition="+A.internalComposition+"&type="+A.type+"&inpage="+A.inpage+"&page="+A.page;try{const m=yield fetch(x,{method:"GET",headers:O});return m.ok?yield m.json():((0,p.ry)(m),[])}catch(m){(0,p.Mb)(m,x)}})}(r,t);return yield wo(l)}catch(l){throw l}})}function ji(B){return Mi(this,arguments,void 0,function*(r,t=""){try{return yield function(l){return Ui(this,void 0,void 0,function*(){var I=(0,c.ab)("application/json","");let A=o.B.SearchInternalWithCcsUrl();A=A+"?composition="+l.composition+"&search="+l.search+"&internalComposition="+l.internalComposition+"&type="+l.type+"&inpage="+l.inpage+"&page="+l.page;try{const D=yield fetch(A,{method:"GET",headers:I});return D.ok?yield D.json():((0,p.ry)(D),[])}catch(D){(0,p.Mb)(D,A)}})}(r)}catch(l){throw l}})}var To=v(592),Bs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Vi(B){return Bs(this,void 0,void 0,function*(){if(Ge)try{return(yield Je("DeleteConceptLocal",{id:B})).data}catch(t){Ze(t)}let r=yield(0,bo.f)(B);s.v.RemoveConcept(r)})}var qi=v(8382),Rs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Hi(B,r,t,l){return Rs(this,arguments,void 0,function*(I,A,D,O,x=!0){var m,u;const G=ge.V.logfunction("GetConnectionBetweenTwoConceptsLinker")||{};if(Ge){G.serviceWorker=!0;try{const z=yield Je("GetConnectionBetweenTwoConceptsLinker",{ofTheConcept:I,toTheConcept:A,linker:D,fullLinker:O,forward:x});return ge.V.logUpdate(G),z.data}catch(z){(0,p.ey)(G,"GetConnectionBetweenTwoConceptsLinker",z),Ze(z)}}let V=(0,$.o)();if(D!=""){let z="";x?z=((m=I.type)===null||m===void 0?void 0:m.characterValue)+"_s_"+(D+"_s"):z=((u=A.type)===null||u===void 0?void 0:u.characterValue)+"_s_"+(D+"_by"),V=yield(0,ye.A)("connection",z,!1,999)}O!=""&&(V=yield lt(O,999));let Y=[];return Y=x?yield(0,qi.x)(I.id,A.id,V.id):yield(0,qi.x)(A.id,I.id,V.id),ge.V.logUpdate(G),Y})}function $i(B,r){return new Promise((t,l)=>{setTimeout(()=>{t(r)},B)})}var Ue=v(6931);const zi=3,Ji=4,Qi=5;var Es=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function ko(B,r){return Es(this,arguments,void 0,function*(t,l,I=""){let A=o.B.SearchAllTypeWithLinker(t.auth);var D=(0,c.ab)("application/json",I);A=A+"?search="+t.search+"&type="+t.type+"&inpage="+t.inpage+"&page="+t.page;const O=JSON.stringify(l);try{const x=yield fetch(A,{method:"POST",headers:D,body:O});return x.ok?yield x.json():((0,p.ry)(x),[])}catch(x){(0,p.Mb)(x,A)}})}var Jt=v(8800),Os=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Ao extends Jt.w{constructor(r,t,l=Ue.y0){super(),this.searchQuery=[],this.format=Ue.y0,this.searchQuery=r,this.format=l}bind(){return Os(this,void 0,void 0,function*(){return this.data=yield(0,nn.cf)(this.searchQuery,"",this,this.format),this.mainConcept=this.searchQuery[0].composition,this.listenToEvent(this.mainConcept),this.data})}}function Yi(B,r,t=Ue.y0){return new Ao(B,r??"",t)}var Xi=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Fs extends Jt.w{constructor(r,t=Ue.ZJ){super(),this.id=r,this.format=t}bind(){return Xi(this,void 0,void 0,function*(){if(!this.isDataLoaded){let r=yield(0,n.hL)(this.id);this.mainConcept=this.id,this.compositionIds=r.compositionList;let t=r.connectionList;for(let l=0;l<t.length;l++)this.internalConnections.push(t[l].id);this.isDataLoaded=!0,this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return Xi(this,void 0,void 0,function*(){let r=[],t=this.internalConnections;for(let l=0;l<t.length;l++)r.push(yield jt.d.GetConnection(t[l]));return this.format==Ue.ZJ?this.data=yield(0,n.ay)(this.mainConcept,r,this.compositionIds):this.format==Ue.y0?this.data=yield(0,n.$V)(this.mainConcept,r,this.compositionIds):this.format==Ue.yv?this.data=yield(0,n.re)(this.mainConcept,r,this.compositionIds):this.data=yield(0,n.ay)(this.mainConcept,r,this.compositionIds),this.data})}}function Ki(B,r=Ue.ZJ){return new Fs(B,r)}var Zi=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Gs extends Jt.w{constructor(r,t,l,I,A){super(),this.data=[],this.startPage=0,this.compositionName=r,this.userId=t,this.inpage=l,this.page=I,this.format=A}bind(){return Zi(this,void 0,void 0,function*(){if(!this.isDataLoaded){var r=yield(0,d.A)(this.compositionName);if(r){yield T(this.compositionName,this.userId);let I=yield e.I.GetConceptsByTypeIdAndUser(r.id,this.userId);for(var t=this.inpage*(this.page-1),l=t;l<t+this.inpage;l++)I[l]&&this.compositionIds.push(I[l].id)}yield(0,a.Y)(this.compositionIds),this.isDataLoaded=!0,this.listenToEventType(r.id);for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I])}return yield this.build()})}build(){return Zi(this,void 0,void 0,function*(){if(this.data=[],this.format==Ue.ZJ){for(let r=this.startPage;r<this.startPage+this.inpage;r++)if(this.compositionIds[r]){let t=yield(0,n.kx)(this.compositionIds[r]);this.data.push(t)}}else if(this.format==Ue.y0){for(let r=this.startPage;r<this.startPage+this.inpage;r++)if(this.compositionIds[r]){let t=yield(0,n.RW)(this.compositionIds[r]);this.data.push(t)}}else if(this.format==Ue.yv){for(let r=this.startPage;r<this.startPage+this.inpage;r++)if(this.compositionIds[r]){let t=yield(0,n.XI)(this.compositionIds[r]);this.data.push(t)}}else for(let r=this.startPage;r<this.startPage+this.inpage;r++)if(this.compositionIds[r]){let t=yield(0,n.kx)(this.compositionIds[r]);this.data.push(t)}return this.data})}}function er(B,r,t,l,I=Ue.ZJ){return new Gs(B,r,t,l,I)}var Qt=v(3076),tr=v(9783),$n=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Us extends Jt.w{constructor(r,t,l="",I){super(),this.searchText="",this.connections=[],this.externalConnectionIds=[],this.data=[],this.mainConcept=r,this.searchLinkers=t,this.textSearch=l,I&&(this.format=I)}listenToEvent(r){if(this.eventHandlers[r])return;const t=l=>$n(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let I=this;setTimeout(function(){return $n(this,void 0,void 0,function*(){try{let A=yield jt.d.GetConnectionByOfTheConceptAndType(r,r);for(let D=0;D<A.length;D++)yield jt.d.GetConnection(A[D]).then(O=>{O.typeId==I.mainConcept?I.internalConnections.includes(O.id)||I.internalConnections.push(O.id):I.linkers.includes(O.id)||I.linkers.push(O.id),I.conceptIds.includes(O.toTheConceptId)||I.conceptIds.push(O.toTheConceptId),I.compositionIds.includes(O.ofTheConceptId)||I.compositionIds.push(O.ofTheConceptId),I.compositionIds.includes(O.toTheConceptId)||I.compositionIds.push(O.toTheConceptId)});I.isUpdating=!1,yield I.bind(),I.notify()}catch(A){throw I.isUpdating=!1,A}})},200)}});this.eventHandlers[r]=t,window.addEventListener(`${r}`,t)}bind(){return $n(this,void 0,void 0,function*(){if(!this.isDataLoaded){this.isDataLoaded=!0;const r=yield so(this.mainConcept,this.searchLinkers,this.textSearch);this.compositionIds=r.compositionIds||[],this.internalConnections=r.internalConnections||[],this.externalConnectionIds=r.externalConnections||[],this.linkers=this.externalConnectionIds,this.connections=yield(0,Vn.j)(this.externalConnectionIds);for(let t=0;t<this.compositionIds.length;t++)this.listenToEvent(this.compositionIds[t]);this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return $n(this,void 0,void 0,function*(){return this.externalConnectionIds=this.linkers,this.format&&this.format==Ue.XZ?this.data={compositionIds:this.compositionIds,internalConnections:this.internalConnections,externalConnections:this.externalConnectionIds}:this.data=yield(0,pt.p8)(this.compositionIds,this.internalConnections),this.data})}}function nr(B,r,t="",l){return new Us(B,r,t,l)}var zn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Ms extends Jt.w{constructor(r,t,l,I=Ue.y0){super(),this.searchQuery=[],this.format=Ue.y0,this.mainCompositionIds=[],this.searchCharacter="",this.token="",this.searchStructure=r,this.searchQuery=t,this.searchQuery[0].type=r.composition,this.searchCharacter=r.composition,this.format=I,this.token=Qe.b.BearerAccessToken}listenToEventType(r){if(this.eventHandlers[r])return;const t=l=>zn(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let I=this;setTimeout(function(){return zn(this,void 0,void 0,function*(){try{let A=l;I.mainCompositionIds.includes(A?.detail)||(I.mainCompositionIds.unshift(A?.detail),I.conceptIds.push(A?.detail),I.listenToEvent(A?.detail),jt.d.GetConnectionsOfConcept(A?.detail).then(D=>{for(let O=0;O<D.length;O++)I.linkers.push(D[O].id)})),I.isUpdating=!1,yield I.bind(),I.notify()}catch(A){throw I.isUpdating=!1,A}})},200)}});this.eventHandlers[r]=t,window.addEventListener(`${r}`,t)}bind(){return zn(this,void 0,void 0,function*(){if(!this.isDataLoaded){this.isDataLoaded=!0;var r=yield(0,d.A)(this.searchCharacter);let t=yield ko(this.searchStructure,this.searchQuery,this.token);this.conceptIds=t.compositionIds,this.internalConnections=t.internalConnections,this.linkers=t.linkers,this.reverse=t.reverse,this.mainCompositionIds=t.mainCompositionIds,this.listenToEventType(r.id);for(let l=0;l<this.mainCompositionIds.length;l++)this.listenToEvent(this.mainCompositionIds[l])}return yield this.build()})}build(){return zn(this,void 0,void 0,function*(){return yield(0,en.r)(this.conceptIds),this.format==Ue.y0?this.data=yield(0,Qt.yV)(this.linkers,this.conceptIds,this.internalConnections,this.mainCompositionIds,this.reverse):this.data=yield(0,Qt._W)(this.linkers,this.conceptIds,this.internalConnections,this.mainCompositionIds,this.reverse),this.data})}}function or(B,r,t,l=Ue.y0){return new Ms(B,r,t,l)}var _o=v(2635),ir=v(7762),rr=v(3008);class sr{constructor(r,t,l,I,A,D,O,x=!1,m,u,G){this.structureType="lconcept",this.isComposition=!1,this.isTemp=!1,this.isSynced=!1,this.applicationId=o.B.getRandomizer(),this.id=r,this.userId=t,this.typeId=l,this.ghostId=r,this.categoryId=I,this.characterValue=D,this.accessId=A,this.type=null,this.isNew=x,this.typeCharacter=O,this.entryTimeStamp=m,this.updatedTimeStamp=u,this.isSynced=!1,this.referentId=G}getType(){}}class ar{constructor(r,t,l,I,A,D){this.isTemp=!1,this.applicationId=o.B.getRandomizer(),this.type=(0,$.o)(),this.id=r,this.ofTheConceptId=t,this.toTheConceptId=l,this.typeId=I,this.ghostId=r,this.orderId=A,this.typeCharacter="",this.accessId=D,this.typeCharacter="",this.entryTimeStamp=(0,$.Y)(new Date),this.terminationDateTime=new Date,this.localSyncTime=new Date}}class cr{constructor(){this.compositionId=0,this.userId=999,this.sessionId=999,this.accessId=4,this.ofTheCompositionId=0,this.patchObject={}}}class lr{constructor(){this.id="0",this.remote_address="",this.server_port="",this.server_address="",this.server_name="",this.server_software="",this.http_user_agent="",this.self="",this.port="",this.userId="",this.email=""}}var on=v(7580);class Jn{constructor(){this.type="",this.search="",this.logicoperator="=",this.index=0,this.composition=!0,this.name="",this.operateon=""}}class dr{constructor(){this.type="",this.search="",this.composition="",this.internalComposition="",this.userId=999,this.inpage=10,this.page=1,this.auth=!0}}var ur=v(6750),hr=v(6580),Ws=v(507),So=v(9789),pr=v(5330),ge=v(9097),js=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class xo{static initialize(){try{this.initGlobalErrorHandlers(),this.logCatchError(),this.logErrorEvent(),this.logUnhandledError(),this.logUserInteractions(),this.logNetworkRequests(),this.logRouteChanges()}catch{}}static initGlobalErrorHandlers(){try{if(typeof window===void 0)return;window.onerror=(r,t,l,I,A)=>{const D=Qe.b.sessionId||"unknown",O={message:r,source:t,lineno:l,colno:I,stack:A?.stack||"undefined",requestFrom:o.B.BASE_APPLICATION,sessionId:D};ge.V.logApplication("ERROR","Runtime Error",O),ge.V.log("ERROR","Runtime Error",O)},window.onunhandledrejection=r=>{const t=Qe.b.sessionId||"unknown";ge.V.logApplication("ERROR","Unhandled Promise Rejection",{message:r.reason?r.reason.message:r.reason,stack:r.reason?r.reason.stack:null,requestFrom:o.B.BASE_APPLICATION,sessionId:t}),ge.V.log("ERROR","Unhandled Promise Rejection",{message:r.reason?r.reason.message:r.reason,stack:r.reason?r.reason.stack:null,requestFrom:o.B.BASE_APPLICATION,sessionId:t})}}catch{}}static logCatchError(){try{const r=console.error;console.error=function(...t){if(t?.[0]=="Intercepted Fetch Error:")return;const l="Console Error",I=Qe.b.sessionId||"unknown",A={arguments:t.map(D=>fr(D)),requestFrom:o.B.BASE_APPLICATION,sessionId:I};ge.V.logApplication("ERROR",l,A),ge.V.log("ERROR",l,A),r.apply(console,t)}}catch{}}static logErrorEvent(){try{window.addEventListener("error",r=>{var t;const l=Qe.b.sessionId||"unknown",I={error:((t=r.error)===null||t===void 0?void 0:t.message)||r.message,source:r.filename,line:r.lineno,column:r.colno,stack:r.error?fr(r.error.stack):void 0,requestFrom:o.B.BASE_APPLICATION,sessionId:l},A="Unhandled Error";ge.V.logApplication("ERROR",A,I),ge.V.log("ERROR",A,I)})}catch{}}static logUnhandledError(){try{window.addEventListener("unhandledrejection",r=>{var t,l;const I=Qe.b.sessionId||"unknown",A={reason:((t=r.reason)===null||t===void 0?void 0:t.message)||String(r.reason),stack:((l=r.reason)===null||l===void 0?void 0:l.stack)||"No stack trace available",requestFrom:o.B.BASE_APPLICATION,sessionId:I};ge.V.logApplication("ERROR","Unhandled Promise Rejection",A),ge.V.log("ERROR","Unhandled Promise Rejection",A)})}catch{}}static logUserInteractions(){document.addEventListener("click",r=>{var t;const l=Qe.b.sessionId||"unknown",I=r.target,A={element:I.tagName,id:I.id,classes:I.className,text:(t=I.innerText)===null||t===void 0?void 0:t.slice(0,50),requestFrom:o.B.BASE_APPLICATION,sessionId:l};ge.V.logApplication("INFO","User Click",A)}),document.addEventListener("input",r=>{const t=r.target;Qe.b.sessionId,t.tagName,t.id,t.value,o.B.BASE_APPLICATION}),document.addEventListener("scroll",()=>{Qe.b.sessionId,o.B.BASE_APPLICATION})}static logNetworkRequests(){try{if(typeof window===void 0)return;Qe.b.sessionId;const r=window?.fetch;if(!r)throw new Error("Original fetch is not available.");const t=[o.B.PostLogger(),o.B.PostPrefetchConceptConnections()];window.fetch=(...l)=>js(this,void 0,void 0,function*(){const I=Qe.b.sessionId||"unknown",[A,D]=l,O=A instanceof Request?A.url:A instanceof URL?A.toString():A;if(t.includes(O))return r(...l);let x={request:{type:"REQUEST",message:"Network Request",method:D?.method||"GET",url:O,body:D?.body,requestFrom:o.B.BASE_APPLICATION,sessionId:I}};try{const m=yield r(...l);return x.response={type:"RESPONSE",message:"Network Response",url:O,status:m.status,requestFrom:o.B.BASE_APPLICATION,sessionId:I},m}catch(m){throw x.response={type:"ERROR",message:"Network Request Failed",url:O,error:m instanceof Error?m.message:String(m),requestFrom:o.B.BASE_APPLICATION,sessionId:I},ge.V.logApplication("ERROR","Failed Network Request",x),new Error(`Network request failed for ${O}: ${m.message}`)}})}catch{}}static logPerformanceMetrics(){typeof window!==void 0&&window?.addEventListener("load",()=>{const r=performance.timing;Qe.b.sessionId,r.loadEventEnd,r.navigationStart,r.domContentLoadedEventEnd,r.navigationStart,o.B.BASE_APPLICATION})}static logRouteChanges(){const r=history.pushState;setTimeout(()=>{xo.logOnWindowLoad()},3e3),history.pushState=function(...t){const l=Qe.b.sessionId||"unknown",I={url:t[2]?new URL(t[2],location.origin).href:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:l};return ge.V.logApplication("ROUTE","Route Change",I),r.apply(this,t)},window?.addEventListener("beforeunload",()=>{const t=Qe.b.sessionId||"unknown",l={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:t};ge.V.logApplication("ROUTE","Unload",l)}),window?.addEventListener("popstate",()=>{const t=Qe.b.sessionId||"unknown",l={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:t};ge.V.logApplication("ROUTE","Route Changed (Back/Forward)",l)})}static logOnWindowLoad(){const r=Qe.b.sessionId||"unknown",t={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:r};ge.V.logApplication("ROUTE","Initial Load",t)}static logSample(){const r=Qe.b.sessionId||"unknown",t={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:r};ge.V.logApplication("ROUTE","Sample",t)}static logWebSocketEvents(){if(typeof window===void 0)return;const r=Qe.b.sessionId||"unknown",t=WebSocket;window.WebSocket=class extends t{constructor(l,I){super(l,I);const A={url:l.toString(),requestFrom:o.B.BASE_APPLICATION,sessionId:r};ge.V.logApplication("INFO","WebSocket Open",A),this.addEventListener("message",D=>{const O=Qe.b.sessionId||"unknown",x={url:l,data:D.data,requestFrom:o.B.BASE_APPLICATION,sessionId:O};ge.V.logApplication("INFO","WebSocket Message",x)}),this.addEventListener("error",D=>{const O=Qe.b.sessionId||"unknown",x={url:l,error:D instanceof Error?D.message:String(D),requestFrom:o.B.BASE_APPLICATION,sessionId:O};ge.V.logApplication("ERROR","WebSocket Error",x)}),this.addEventListener("close",()=>{const D=Qe.b.sessionId||"unknown",O={url:l,requestFrom:o.B.BASE_APPLICATION,sessionId:D};ge.V.logApplication("INFO","WebSocket Closed",O)})}}}}function fr(B){try{return JSON.stringify(B,(r,t)=>t&&typeof t=="object"&&t instanceof Error?{message:t.message,stack:t.stack}:t)}catch{return"Error while serializing value"}}var Vs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};const mr=(B,r,...t)=>Vs(void 0,[B,r,...t],void 0,function*(l,I,A=!1){try{let D=o.B.sendMail();A&&(D=o.B.sendBulkMail());const O=yield fetch(D,{method:"POST",body:l instanceof FormData?l:JSON.stringify(l),headers:{"Content-Type":"application/json",Authorization:`Bearer ${I}`}}),x=O.headers.get("content-type");if(!O.ok)return yield O.json(),null;const m=yield O.json();return x&&x.includes("text/plain")?yield O.text():m}catch{return null}});class qs{constructor(){this.inDevelopment=!1,this.subscribers=[]}notify(r=null){this.subscribers.map(t=>{t(r||this.data)})}dataChange(r){this.subscribers.push(r)}}class Hs extends qs{constructor(){super(...arguments),this.element=null,this.elementIdentifier=0,this.widgetMounted=!1}getComponent(){return this.element}getElementById(r){let t=this.getComponent(),l=document.body;if(t){let I=t.querySelector("#"+r);if(I)return l=I,l}return null}createWidgetWrapperIdentifier(){return this.elementIdentifier=1e4*Math.random(),this.elementIdentifier.toString()}}var $s=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class Qn extends Hs{constructor(){super(...arguments),this.html="",this.css="",this.js="",this.state={},this.previousState={},this.childWidgets=[],this.childWidgetElement=[],this.widgetState={},this.parentElement=""}querySelector(r){return this.element?this.element.querySelector(r):null}querySelectorAll(r){return this.element?this.element.querySelectorAll(r):null}getElement(){return this.element}setTitle(r){document.title=r}getHtml(){return this.html}UpdateChildData(r,t){let l=t;l.data=r,l.render(),l.update()}update(){}setState(r){this.previousState=Object.assign({},this),this.data=r,this.state=Object.assign({},this),this.hasStateChanged()&&(this.notify(),this.render())}setStateProperty(r){this.previousState=Object.assign({},this),Object.assign(this,r),this.state=Object.assign({},this),this.hasStateChanged()&&(this.notify(),this.render())}hasStateChanged(){return!this.isPropertyEqual(this.state,this.previousState)}isPropertyEqual(r,t){if(r===t)return!0;if(typeof r!="object"||typeof t!="object"||r===null||t===null)return!1;const l=Object.keys(r),I=Object.keys(t);if(l.length!==I.length)return!1;for(let A of l){if(!I.includes(A))return!1;for(let D of I)if(A==D&&A!="state"&&A!="previousState"&&r[A]!=t[A])return!1}return!0}loadChildWidgets(){this.childWidgets.map(r=>{let t=this.getElementById(r.parentElement);t&&(t.innerHTML=""),r.mount(t)})}render(){this.element&&(this.element.innerHTML=this.getHtml()),this.loadChildWidgets(),this.after_render()}getElementByClassName(r){let t=this.getComponent();return t?t?.querySelectorAll("."+r):[]}mount_child(){}mount(r){return $s(this,void 0,void 0,function*(){r&&(this.element=document.createElement("div"),this.element.id=this.createWidgetWrapperIdentifier(),this.element.innerHTML=this.getHtml(),this.element.classList.add("mftsccs-marking-rendered"),r.appendChild(this.element),this.parentElement=r.id,this.before_render(),this.mount_child(),this.widgetMounted=!0)})}before_render(){this.render()}after_render(){}renderChildWidgets(){function r(t){var l;t&&((l=t.childWidgets)===null||l===void 0||l.forEach(I=>{r(I)}),t.render())}this.childWidgets.forEach(t=>{r(t)})}setWidgetState(r,t){this.widgetState[r]=t,function l(I){I&&Array.isArray(I.childWidgets)&&I.childWidgets.forEach(A=>{A.widgetState=Object.assign(Object.assign({},A.widgetState),I.widgetState),l(A)})}(this),this.renderChildWidgets()}getWidgetState(r,t){return Object.keys.length&&this.widgetState[r]?this.widgetState[r]:t}}var No=v(5893),vn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};class Nn extends Qn{constructor(){super(...arguments),this.childComponents=[],this.componentMounted=!1,this.oldHtml=null,this.phonebooks=[],this.childrenData={},this.childWidgets=[],this.typeValueList=[],this.widgetType="the_element_name",this.parentConceptList=[],this.customFunctions=[],this.widgetDependenciesData=""}getUserId(){return(0,No.s)().userId}getTypeValueList(){return vn(this,arguments,void 0,function*(r=""){return new Promise(t=>vn(this,void 0,void 0,function*(){const l=(r=this.widgetType)==null?void 0:r.match(/^[a-z0-9]+_[a-z0-9]+/i),I=l?l[0]:"",A=r?.match(/^([a-z0-9]+).*_([a-z0-9]+)$/i),D=A?`${A[1]}_${A[2]}`:"";let O=[],x=new Jn;x.type=D,x.search="1",x.logicoperator=">",x.name="emailfilter",x.operateon="entityEmail",x.composition=!1,O.push(x);let m=new St;m.typeConnection=r,m.name="entityEmail";let u=new St;u.type=I,u.filterLogic="( emailfilter )",u.filters=O,u.name="top",u.inpage=100,u.freeschemaQueries=[m],u.outputFormat=Ue.y0,Ln(u,"").subscribe(G=>{if(G?.length){const V=G?.map(Y=>{var z,te,se,le,Ce,ue,_e;const Oe=(le=(se=(te=(z=Y.data)===null||z===void 0?void 0:z[I])===null||te===void 0?void 0:te[r])===null||se===void 0?void 0:se.data)===null||le===void 0?void 0:le[D];return{id:(_e=(ue=(Ce=Y.data)===null||Ce===void 0?void 0:Ce[I])===null||ue===void 0?void 0:ue[r])===null||_e===void 0?void 0:_e.id,name:Oe,text:Oe}});return this.typeValueList=V,t(V),V}})}))})}setTitle(r){document.title=r}getHtml(){return this.html}createRandomNumber(){return this.elementIdentifier=1e4*Math.random(),this.elementIdentifier}mount_child(){return vn(this,void 0,void 0,function*(){try{new Function("tsccs",`
        return (async function() {
          ${this.mountChildWidgetsFunction}
        }).call(this);
      `).bind(this)(_)}catch(r){throw r}})}setProperty(r){return vn(this,void 0,void 0,function*(){return this.widgetType=r,this.getTypeValueList(this.widgetType).then(()=>{var t,l,I;(t=this.element)===null||t===void 0||t.setAttribute("data-type-value",this.widgetType),(I=(l=this.element)===null||l===void 0?void 0:l.parentElement)===null||I===void 0||I.setAttribute("data-type-value",this.widgetType),this.render()}),this})}createTypeEditor(r){(function(t,l){if(t){const I=document.querySelector("#widget-properties #widget-type"),A=I?.querySelectorAll("input");A?.forEach(u=>{u?.remove()});const D=t.target.closest(".added-widget-container"),O=t.target.closest("div");D?D?.getAttribute("data-type-value"):O&&O?.getAttribute("data-type-value");const x=document.createElement("input");x.setAttribute("type","text"),x.setAttribute("name","input-widgetTypeValue"),x.setAttribute("of",l.elementIdentifier.toString()),x.setAttribute("class","form-control"),x.setAttribute("id","widgetType"),x.setAttribute("onchange","updateWidgetTypeValue(event)"),l.widgetType?x.value=l.widgetType:x.setAttribute("placeholder","e.g. the_entity");let m=l;x.addEventListener("change",function(u){var G,V,Y;const z=(G=u?.target)===null||G===void 0?void 0:G.value;m.widgetType=z,m.before_render(),m.loadChildWidgets(),(Y=(V=m.element)===null||V===void 0?void 0:V.parentElement)===null||Y===void 0||Y.setAttribute("data-type-value",m.widgetType)}),I?.appendChild(x)}})(r,this)}mount(r){return vn(this,void 0,void 0,function*(){if(r){this.element=document.createElement("div"),this.element.id=this.createWidgetWrapperIdentifier();let t=this;this.inDevelopment?(this.element.onclick=function(l){l.preventDefault(),t.createTypeEditor(l)},this.element.className="mftsccs-marking-element"):this.element.classList.add("mftsccs-marking-rendered"),this.element.innerHTML=this.getHtml(),r?.setAttribute("data-type-value",t.widgetType),r.appendChild(this.element),this.parentElement=r.id,this.componentMounted==0||this.widgetMounted==0?(this.render_custom_functions(),this.render_widgetDependencies(),this.before_render(),this.mount_child(),this.widgetMounted=!0,this.componentMounted=!0):this.render(),this.childWidgetElement=this.getElementByClassName("added-widget-container")}})}render_widgetDependencies(){try{new Function("tsccs",`
        return (async function() {
          ${this.widgetDependenciesData}
        }).call(this);
      `).bind(this)(_)}catch(r){throw r}}render_custom_functions(){var r;const t=(r=this.customFunctions)===null||r===void 0?void 0:r.map(l=>l?.code).join("");try{new Function("tsccs",`
          return (async function() {
            ${t}
          }).call(this);
        `).bind(this)(_)}catch(l){throw l}}before_render(){try{new Function("tsccs",`
        return (async function() {
          ${this.componentDidMountFunction}
        }).call(this);
      `).bind(this)(_)}catch(r){throw r}}after_render(){try{new Function("tsccs",`
        return (async function() {
          ${this.addEventFunction}
        }).call(this);
      `).bind(this)(_)}catch(r){throw r}}CreateConnectionBetweenEntityLocal(r,t,l){return vn(this,void 0,void 0,function*(){var I;const A=r.userId,D=((I=r.type)===null||I===void 0?void 0:I.characterValue)+"_"+l,O=yield(0,$e.$)(D,999,999,A);return yield(0,Gt.F)(r.id,t.id,O.id,1e3),"connection created"})}}var zs=v(3890),Js=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Lo(B){var r=arguments;return Js(this,void 0,void 0,function*(){const t=ge.V.logfunction("GetConnectionsBetweenApi",r);let l=[];try{const I=(0,c.Xr)(),A=yield fetch(o.B.GetConnectionsBetweenUrl(),{method:"POST",headers:I,body:JSON.stringify(B)});if(!A.ok)throw(0,p.ry)(A),new Error(`GetConnectionsBetweenApi error: ${A.status}`);return l=yield A.json(),ge.V.logUpdate(t),l}catch(I){return(0,p.Mb)(I,o.B.GetConnectionsBetweenUrl()),(0,p.ey)(t,"GetConnectionsBetweenApi",I),l}})}function Do(B){var r,t,l,I,A,D,O;return{ofTheConceptId:(r=B.ofTheConceptId)!==null&&r!==void 0?r:0,toTheConceptId:(t=B.toTheConceptId)!==null&&t!==void 0?t:0,typeId:(l=B.typeId)!==null&&l!==void 0?l:0,type:(I=B.type)!==null&&I!==void 0?I:"",oldType:(A=B.oldType)!==null&&A!==void 0?A:"",reverse:(D=B.reverse)!==null&&D!==void 0&&D,isComposition:(O=B.isComposition)!==null&&O!==void 0&&O,connectionIds:[]}}var It=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};class Po{constructor(){this.actions={concepts:[],connections:[]},this.success=!0,this.pendingConnectionDeletions=[],this.transactionId=Math.random().toString().substring(5)}initialize(){return It(this,void 0,void 0,function*(){yield on.H.initializeTransaction(this.transactionId)})}commitTransaction(){return It(this,void 0,void 0,function*(){if(!this.success)throw Error("Query Transaction Expired");yield on.H.SyncDataOnline(this.transactionId),this.pendingConnectionDeletions.length>0&&(yield(0,we.E)(this.pendingConnectionDeletions)),this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],this.success=!1})}commitTransactionWithoutAuth(){return It(this,void 0,void 0,function*(){if(!this.success)throw Error("Query Transaction Expired");yield on.H.SyncDataOnlineWithoutAuth(this.transactionId),this.pendingConnectionDeletions.length>0&&(yield(0,we.E)(this.pendingConnectionDeletions)),this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],this.success=!1})}rollbackTransaction(){return It(this,void 0,void 0,function*(){this.success=!1,this.actions={concepts:[],connections:[]},this.pendingConnectionDeletions=[],yield on.H.rollbackTransaction(this.transactionId,this.actions)})}markAction(){return It(this,void 0,void 0,function*(){yield on.H.markTransactionActions(this.transactionId,this.actions)})}DeleteConnectionsBetween(r){return It(this,void 0,void 0,function*(){return this.DeleteConnectionsBetweenBulk([r])})}DeleteConnectionsBetweenBulk(r){return It(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const t=r.map(Do),l=yield Lo(t),I=[];for(const A of l)I.push(...A.connectionIds);return this.pendingConnectionDeletions.push(...I),I}catch(t){throw this.success=!1,t}})}MakeTheInstanceConceptLocal(r,t){return It(this,arguments,void 0,function*(l,I,A=!1,D,O,x=999,m=0){try{if(!this.success)throw Error("Query Transaction Expired");const u=yield(0,Te.k)(l,I,A,D,O,x,m,this.actions);return yield this.markAction(),u}catch(u){throw this.success=!1,u}})}MakeTheTypeConceptLocal(r,t,l,I){return It(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const A=yield(0,$e.$)(r,t,l,I,this.actions);return yield this.markAction(),A}catch(A){throw this.success=!1,A}})}CreateTheConceptLocal(r,t,l,I,A,D){return It(this,arguments,void 0,function*(O,x,m,u,G,V,Y=!1,z=0,te={concepts:[],connections:[]}){try{if(!this.success)throw Error("Query Transaction Expired");const se=yield(0,zs.A)(O,x,m,u,G,V,Y,z,this.actions);return yield this.markAction(),se}catch(se){throw this.success=!1,se}})}CreateConnectionBetweenTwoConceptsLocal(r,t,l){return It(this,arguments,void 0,function*(I,A,D,O=!1){try{if(!this.success)throw Error("Query Transaction Expired");const x=yield(0,To.h)(I,A,D,O,this.actions);return yield this.markAction(),x}catch(x){throw this.success=!1,x}})}CreateTheConnectionLocal(r,t,l){return It(this,arguments,void 0,function*(I,A,D,O=1,x="",m=999){try{if(!this.success)throw Error("Query Transaction Expired");const u=yield(0,Gt.F)(I,A,D,O,x,m,this.actions);return yield this.markAction(),u}catch(u){throw this.success=!1,u}})}CreateConnection(r,t,l){return It(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const I=yield(0,Gt.d)(r,t,l,this.actions);return yield this.markAction(),I}catch(I){throw this.success=!1,I}})}CreateConnectionBetweenEntityLocal(r,t,l){return It(this,void 0,void 0,function*(){try{if(!this.success)throw Error("Query Transaction Expired");const I=yield Eo(r,t,l,this.actions);return yield this.markAction(),I}catch(I){throw this.success=!1,I}})}CreateTheCompositionLocal(r){return It(this,arguments,void 0,function*(t,l=null,I=null,A=null,D=null,O=null,x=null,m=!1){try{if(!this.success)throw Error("Query Transaction Expired");const u=yield(0,he.R)(t,l,I,A,D,O,x,m,this.actions);return yield this.markAction(),u}catch(u){throw this.success=!1,u}})}}const yr={number:/^\d+(\.\d+)?$/,text:/^[\s\S]*$/,textOnly:/^[A-Za-z\s]+$/,email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,document:/\.(pdf|docx?|pptx?|xlsx?)$/i,sound:/\.(mp3|wav|ogg|flac)$/i,image:/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i,video:/\.(mp4|avi|mov|mkv|flv|webm)$/i,url:/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,date:/^\d{4}-\d{2}-\d{2}$/,time:/^(?:[01]\d|2[0-3]):[0-5]\d$/,password:/^.{6,}$/,ipaddress:/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/,uuid:/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/};var Cn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class ot{constructor(){ot.cacheInitialized||ot.initializeAnomalyParameters()}static initializeAnomalyParameters(){return Cn(this,void 0,void 0,function*(){try{yield ot.getAnomalyParameters(),ot.refreshCache(),ot.cacheInitialized=!0}catch{}})}static getAnomalyParameters(){return Cn(this,void 0,void 0,function*(){const r=Date.now();if(ot.anomalyParamsCache&&r-ot.lastFetchedTime<ot.cacheExpiryThreshold)return ot.anomalyParamsCache;try{return yield ot.fetchAnomalyParameters()}catch(t){throw t}})}static fetchAnomalyParameters(){return Cn(this,void 0,void 0,function*(){try{const r=yield fetch("https://devai.freeschema.com/v1/get-frontend-anomaly-parameters",{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok)throw new Error("Failed to fetch anomaly parameters");const t=yield r.json();return ot.anomalyParamsCache=t.data,ot.lastFetchedTime=Date.now(),t.data}catch(r){throw r}})}static refreshCache(){return Cn(this,void 0,void 0,function*(){try{Date.now()-ot.lastFetchedTime>ot.cacheExpiryThreshold&&(yield ot.getAnomalyParameters())}catch{}})}detectDataType(r){for(const[t,l]of Object.entries(yr))if(l.test(r))return t;return null}checkConceptAnomaly(r,t){return Cn(this,void 0,void 0,function*(){const l=[];try{if(!t)return l.push("Null value"),{valid:!1,warnings:l};const I=ot.anomalyParamsCache;r.startsWith("the_")||(r=`the_${r}`);const A=I[r];if(!A)return l.push(`No concept details found for type: ${r}`),{valid:!1,warnings:l};const D=t.length,{min_length:O,max_length:x,data_types:m}=A,u=D>=O&&D<=x,G=this.detectDataType(t),V=m.includes(G);return u||l.push(`Length of '${t}' is outside the allowed range (min: ${O}, max: ${x}). Current length: ${D}.`),V||l.push(`Type mismatch for '${t}'. Expected types: ${m.join(", ")}, detected type: ${G}.`),u&&V&&l.push(`Concept ${r} is valid. Length: ${D}, Type: ${G}`),{valid:u&&V,warnings:l}}catch{return{valid:!1,warnings:l}}})}static checkAnomalyInBulk(r){return Cn(this,void 0,void 0,function*(){ot.cacheInitialized||(yield ot.initializeAnomalyParameters());try{const t={};for(const[l,I]of Object.entries(r)){const A=I.value,{valid:D,warnings:O}=yield new ot().checkConceptAnomaly(l,A);t[l]={valid:D,warnings:O}}return t}catch(t){throw t}})}static getExportedFunction(){return Object.keys(_)}static getFunctionaAnomalyParameters(){}}ot.anomalyParamsCache=null,ot.cacheInitialized=!1,ot.lastFetchedTime=0,ot.cacheExpiryThreshold=6e5;var Bo=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class gr{checkUniqueness(r,t){return Bo(this,void 0,void 0,function*(){const l=ge.V.logfunction("checkUniqueness");r.startsWith("the_")||(r="the_"+r);let I=(yield lt(r,999)).id;return!((yield(0,Be.A)(t,I)).id>0)&&(ge.V.logUpdate(l),!0)})}validateField(r){return Bo(this,void 0,void 0,function*(){var t;const l=ge.V.logfunction("validateField");try{performance.now();const I={},{name:A,value:D,type:O,dataType:x,pattern:m,conceptType:u,maxLength:G,minLength:V,minValue:Y,maxValue:z,accept:te,file:se,required:le,isUnique:Ce}=r;if(!le||D!==null&&D!==""||(I.required=`The field ${A} is required.`),x&&D){let ue=yr[x];ue&&D!==""&&!ue.test(D)&&(I.dataType=`Invalid value for ${x}`)}if(m&&D){const ue=typeof m=="string"?new RegExp(m):m;D===""||ue.test(D)||(I.pattern="Pattern doesn't match with value")}if(D&&G!=null&&D.length>G&&(I.maxLength=`Length exceeds the maximum length of ${G}`),D&&V!=null&&D.length<V&&(I.minLength=`Length must be at least ${V} characters long`),Y!=null&&D&&!isNaN(Number(D))&&Number(D)<Y&&(I.minValue=`Value must be greater than or equal to ${Y}`),z!=null&&D&&!isNaN(Number(D))&&Number(D)>z&&(I.maxValue=`Value must be less than or equal to ${z}`),se&&O&&te){const ue=te.split(",").map(Oe=>Oe.trim().toLowerCase()),_e=(t=se.name.split(".").pop())===null||t===void 0?void 0:t.toLowerCase();_e&&!ue.includes(_e)&&(I.accept=`File must be a valid file type: ${ue.join(", ")}`)}return u&&Ce&&D&&((yield this.checkUniqueness(u,D))||(I.unique="Value is not unique")),ge.V.logUpdate(l),I}catch(I){throw(0,p.ey)(l,"Validator.validateField",I),I}})}validateForm(r){return Bo(this,void 0,void 0,function*(){const t=ge.V.logfunction("validateForm");try{performance.now();const l={};for(const I in r){const A=yield this.validateField(r[I]);Object.keys(A).length>0&&(l[I]=A)}return ge.V.logUpdate(t),l}catch(l){throw(0,p.ey)(t,"Validator.validateForm",l),l}})}validate(r){const t=ge.V.logfunction("validate");try{let l={};return this.validateField(r).then(I=>{Object.keys(I).length>0?(l.status=!1,l.details=I):l.status=!0}),ge.V.logUpdate(t),l}catch(l){(0,p.ey)(t,"Validator.validate",l)}}}const vr=B=>{var r;const t=document.getElementsByName(B)[0];if(!t)return{name:null,value:null,type:null,dataType:null,pattern:null,conceptType:null,maxLength:null,minLength:null,minValue:null,maxValue:null,accept:null,file:null,required:!1,isUnique:!0};const l=t.hasAttribute("required")||t.getAttribute("data-required")==="true",I=t.hasAttribute("isUnique")&&t.getAttribute("isUnique")==="true";return{name:t.name,value:t.value,type:t.type,dataType:t.getAttribute("data-type"),pattern:t.getAttribute("data-pattern"),conceptType:t.getAttribute("concept-type"),maxLength:t.getAttribute("maxlength")?parseInt(t.getAttribute("maxlength")):null,minLength:t.getAttribute("minlength")?parseInt(t.getAttribute("minlength")):null,minValue:t.getAttribute("min")?parseInt(t.getAttribute("min")):null,maxValue:t.getAttribute("max")?parseInt(t.getAttribute("max")):null,accept:t.getAttribute("accept")||null,file:t.type==="file"&&((r=t.files)===null||r===void 0?void 0:r[0])||null,required:l,isUnique:I}};var bn=v(8545);class St{constructor(){this.type="",this.inpage=10,this.page=1,this.concepts=[],this.conceptIds=[],this.selectors=[],this.freeschemaQueries=[],this.filters=[],this.filterLogic="",this.typeConnection="",this.order="DESC",this.outputFormat=Ue.yv,this.name="",this.filterAncestor="",this.reverse=!1,this.limit=!1,this.isSecure=!0,this.includeInFilter=!1,this.isOldConnectionType=!1,this.cache=!0}}var Cr=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Yn(B){var r=arguments;return Cr(this,arguments,void 0,function*(t,l=""){const I=ge.V.logfunction("FreeschemaQueryApi",r);var A=(0,c.ab)("application/json",l);const D=o.B.FreeschemaQueryUrl(),O=JSON.stringify(t),x=yield f.a.getHash(t),m=t.cache!==!1?f.a.get(x):null;if(m)return fetch(D,{method:"POST",headers:A,body:O}).then(u=>Cr(this,void 0,void 0,function*(){if(u.ok){const G=yield u.json();f.a.set(x,G)}else(0,p.ry)(u)})).catch(u=>{(0,p.Mb)(u,D),(0,p.ey)(I,"FreeschemaQueryApi",u)}),m;try{const u=yield fetch(D,{method:"POST",headers:A,body:O});if(u.ok){let G=yield u.json();return f.a.set(x,G),ge.V.logUpdate(I),G}return(0,p.ry)(u),[]}catch(u){(0,p.Mb)(u,D),(0,p.ey)(I,"FreeschemaQueryApi",u)}})}var Xn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class br extends Jt.w{constructor(r,t){super(),this.query=new St,this.countInfoStrings=[],this.order="DESC",this.totalCount=0,this.unsubscribeCache=null,this.query=r,this.format=r.outputFormat,this.order=r.order,f.a.getHash(r).then(l=>{this.unsubscribeCache=f.a.subscribe(l,I=>Xn(this,void 0,void 0,function*(){this.isDataLoaded=!1,yield this.bind(),this.notify()}))})}run(){return Xn(this,void 0,void 0,function*(){var r,t;try{this.query.outputFormat=Ue.BG,this.compositionIds=[];let l=yield Yn(this.query,"");return this.conceptIds=l.conceptIds,this.internalConnections=(r=l.internalConnections)!==null&&r!==void 0?r:[],this.linkers=(t=l.linkers)!==null&&t!==void 0?t:[],this.reverse=l.reverse,this.compositionIds=l.mainCompositionIds,this.totalCount=l.mainCount,this.countInfoStrings=l.countinfo,yield this.build()}catch(l){throw l}})}bind(){return Xn(this,void 0,void 0,function*(){var r,t;try{if(this.compositionIds.length>0)for(let I=0;I<this.compositionIds.length;I++)this.removeListenToEvent(this.compositionIds[I]);if(this.isDataLoaded)for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I]);else{this.query.outputFormat=Ue.BG,this.compositionIds=[];let I=yield Yn(this.query,"");this.conceptIds=I.conceptIds,this.internalConnections=(r=I.internalConnections)!==null&&r!==void 0?r:[],this.linkers=(t=I.linkers)!==null&&t!==void 0?t:[],this.reverse=I.reverse,this.compositionIds=I.mainCompositionIds,this.totalCount=I.mainCount,this.countInfoStrings=I.countinfo}let l=yield this.build();if(!this.isDataLoaded){this.isDataLoaded=!0;for(let I=0;I<this.compositionIds.length;I++)this.listenToEvent(this.compositionIds[I]);if(this.query.type!=""){let I=yield lt(this.query.type,999);I.id>0&&this.listenToEventType(I.id)}}for(let I=0;I<this.newIds.length;I++)this.listenToEvent(this.newIds[I]);return this.newIds=[],l}catch(l){throw l}})}build(){return Xn(this,void 0,void 0,function*(){try{ge.V.logfunction("build",["schemaquery",this.compositionIds]);let r=(0,_o.w)(this.countInfoStrings);return this.format==Ue.y0?this.data=yield(0,Qt.e$)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,r,this.order):this.format==Ue.ZJ?this.data=yield(0,Qt.y6)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,r,this.order):this.format==Ue.pU?this.data=yield(0,Qt.rq)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,r,this.order):this.format==Ue.XZ?(this.data={},this.data.linkers=this.linkers,this.data.conceptIds=this.conceptIds,this.data.compositionIds=this.compositionIds,this.data.reverse=this.reverse,this.data.countInfos=r,this.data.order=this.order):this.data=yield(0,Qt.b6)(this.linkers,this.conceptIds,this.compositionIds,this.reverse,r),this.data}catch(r){throw r}})}}function Ln(B,r){return new br(B,r)}function Kn(B,r){return new br(B,r).execute()}class Ro{constructor(){this.id=0,this.name="",this.html="",this.css="",this.js="",this.library={css:[],js:[]},this.assistant={id:"",input:"",type:""},this.timestamp="",this.widgetId=0,this.type="",this.clean="",this.after_render="",this.before_render="",this.custom_functions=[],this.update="",this.origin=0,this.version=0,this.mount_child="",this.children=[],this.wrapper="0",this.widget=new Nn,this.dependency="",this.root=0}}var Qs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Eo(B,r,t){return Qs(this,arguments,void 0,function*(l,I,A,D={concepts:[],connections:[]}){var O,x,m,u,G;const V=ge.V.logfunction("CreateConnectionBetweenEntityLocal",[l.id,I.id,A]);if(Ge)try{const le=yield Je("CreateConnectionBetweenEntityLocal",{concept1Data:l,concept2Data:I,linker:A,actions:D});return!((x=(O=le?.actions)===null||O===void 0?void 0:O.concepts)===null||x===void 0)&&x.length&&(D.concepts=JSON.parse(JSON.stringify(le.actions.concepts))),!((u=(m=le?.actions)===null||m===void 0?void 0:m.connections)===null||u===void 0)&&u.length&&(D.connections=JSON.parse(JSON.stringify(le.actions.connections))),le.data}catch(le){Ze(le)}const Y=l.userId,z=((G=l.type)===null||G===void 0?void 0:G.characterValue)+"_"+A,te=yield(0,$e.$)(z,999,999,Y,D);if(!te)return;const se=yield(0,Gt.F)(l.id,I.id,te.id,1e3,void 0,void 0,D);return ge.V.logUpdate(V),se})}var Ut=v(6443);function Ir(){i.i.clearAll(),f.a.clearAll()}function Oo(B){for(;B.firstChild;)B.removeChild(B.firstChild)}var wr=v(939);function Tr(B,r,t){const l=Qe.b.sessionId||"unknown",I={url:location.href,requestFrom:o.B.BASE_APPLICATION,sessionId:l,description:r};ge.V.logApplication("USER_EVENT",B,I)}class kr extends Qn{constructor(r,t,l,I="",A=10){super(),this.inpage=10,this.selector=t,this.mainType=r,this.filterType=I,this.inpage=A,this.parentDomElement=l,this.mount(this.parentDomElement)}before_render(){this.render()}addFilter(r){if(r!=""){let t=new Jn;t.search=r,t.type=this.filterType,t.logicoperator="like",t.operateon="selector",t.name="selector_filter";let l="( selector_filter )";this.query.filters=[t],this.query.filterLogic=l}else this.query.filters=[],this.query.filterLogic=""}after_render(){let r=this.getElementById("selector"),t=this.getElementById("search-bar"),l=this;t.onchange=()=>{l.addFilter(t.value),l.mainDetails.update()};let I=new St;I.type=this.mainType,I.inpage=this.inpage;let A=new St;A.typeConnection=this.selector,A.name="selector",I.freeschemaQueries=[A],this.query=I,Ln(this.query,"").subscribe((D,O)=>{let x={};this.mainDetails=O;for(let m=0;m<D.length;m++){let u=D[m],G=u.id,V=u[this.mainType];if(V){let Y=V[this.selector];if(Y){const z=Object.values(Y)[0];x[G]=z}}}Oo(r);for(const[m,u]of Object.entries(x)){const G=document.createElement("option");G.value=m,G.textContent=u,r.appendChild(G)}})}getHtml(){const r=document.createElement("style");return r.textContent=`
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
`,document.head.prepend(r),this.html=`
        <div class="search-select-wrapper">
        <input type="text" placeholder="Select or type..." id='search-bar'>
        <select id='selector'>
        </div>`,this.html}}var Ye=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};class Xe{static get baseUrl(){return o.B.ACCESS_CONTROL_BASE_URL}static getAsync(r){return Ye(this,void 0,void 0,function*(){const t=yield fetch(`${this.baseUrl}${r}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`GET '${r}' failed with status ${t.status}`);const l=yield t.json();if(l==null)throw new Error(`The response for GET '${r}' returned null.`);return l})}static postAsync(r,t){return Ye(this,void 0,void 0,function*(){const l=yield fetch(`${this.baseUrl}${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!l.ok)throw new Error(`POST '${r}' failed with status ${l.status}`);const I=yield l.json();if(I==null)throw new Error(`The response for POST '${r}' returned null.`);return I})}static deleteAsync(r,t){return Ye(this,void 0,void 0,function*(){const l={method:"DELETE",headers:{"Content-Type":"application/json"}};t!=null&&(l.body=JSON.stringify(t));const I=yield fetch(`${this.baseUrl}${r}`,l);if(!I.ok)throw new Error(`DELETE '${r}' failed with status ${I.status}`);const A=yield I.json();if(A==null)throw new Error(`The response for DELETE '${r}' returned null.`);return A})}assignAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/assign",r)})}checkAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/check",r)})}revokeAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.deleteAsync("/access/revoke",r)})}assignAccessBulkAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/assign/bulk",r)})}revokeAccessBulkAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.deleteAsync("/access/revoke/bulk",r)})}checkAccessBulkAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/check/bulk",r)})}getAccessByIdAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.getAsync(`/access/${r}`)})}setAccessInheritanceAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/inheritance",r)})}getAccessInheritanceStatusAsync(r){return Ye(this,arguments,void 0,function*(t,l=999){return Xe.getAsync(`/access/inheritance/status?accessId=${t}&connectionTypeId=${l}`)})}assignSuperAdminAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/super-admin",r)})}revokeSuperAdminAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.deleteAsync("/access/super-admin",r)})}checkSuperAdminStatusAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.getAsync(`/access/super-admin?accessId=${r}`)})}assignConceptAccessAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/concept/assign",r)})}assignConceptAccessBulkAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/concept/assign/bulk",r)})}revokeConceptAccessBulkAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/concept/revoke/bulk",r)})}setParentAccessInheritanceAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/inheritance/parent",r)})}removeParentAccessInheritanceAsync(r,t){return Ye(this,void 0,void 0,function*(){let l=`/access/inheritance/parent?accessId=${r}`;return t!=null&&(l+=`&parentAccessId=${t}`),Xe.deleteAsync(l)})}hasParentAccessInheritanceAsync(r,t){return Ye(this,void 0,void 0,function*(){let l=`/access/inheritance/parent/status?accessId=${r}`;return t!=null&&(l+=`&parentAccessId=${t}`),Xe.getAsync(l)})}getParentAccessIdAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.getAsync(`/access/inheritance/parent?accessId=${r}`)})}setParentAccessInheritanceByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/inheritance/parent/concept",r)})}setParentAccessInheritanceBulkByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/inheritance/parent/concept/bulk",r)})}removeParentAccessInheritanceByConceptAsync(r,t){return Ye(this,void 0,void 0,function*(){let l=`/access/inheritance/parent/concept?childConceptId=${r}`;return t!=null&&(l+=`&parentConceptId=${t}`),Xe.deleteAsync(l)})}removeParentAccessInheritanceBulkByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.deleteAsync("/access/inheritance/parent/concept/bulk",r)})}hasParentAccessInheritanceByConceptAsync(r,t){return Ye(this,void 0,void 0,function*(){let l=`/access/inheritance/parent/concept/status?childConceptId=${r}`;return t!=null&&(l+=`&parentConceptId=${t}`),Xe.getAsync(l)})}getParentAccessIdByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.getAsync(`/access/inheritance/parent/concept?childConceptId=${r}`)})}assignSuperAdminByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/super-admin/concept",r)})}revokeSuperAdminByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.deleteAsync("/access/super-admin/concept",r)})}checkSuperAdminByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.getAsync(`/access/super-admin/concept?conceptId=${r}`)})}setAccessInheritanceByConceptAsync(r){return Ye(this,void 0,void 0,function*(){return Xe.postAsync("/access/inheritance/concept",r)})}getAccessInheritanceStatusByConceptAsync(r){return Ye(this,arguments,void 0,function*(t,l=999){return Xe.getAsync(`/access/inheritance/concept/status?conceptId=${t}&connectionTypeId=${l}`)})}}var ze=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};class Dt{constructor(r){this.apiClient=r||new Xe}checkAccess(r,t,l){return ze(this,void 0,void 0,function*(){var I;if(!t||t.trim()==="")throw new Error("Permission is required");return(I=(yield this.checkAccessBulk([r],t.toLowerCase(),l)).get(r))!==null&&I!==void 0&&I})}checkAccessBulk(r,t,l){return ze(this,void 0,void 0,function*(){var I,A,D,O,x,m;if(!t||t.trim()==="")throw new Error("Permission is required");t=t.toLowerCase();const u=new Map;if(!r||r.length===0)return u;if(!o.B.FLAGS||!o.B.FLAGS.accessControl){for(const Se of r)u.set(Se,!0);return u}if(l!=null&&l>0)try{if(yield this.isSuperAdmin(l)){for(const Se of r)u.set(Se,!0);return u}}catch{}const G=[],V=new Set,Y=new Map;let z=null;if(l!=null&&l>0)try{z=yield(0,me.A)(l)}catch{}const te=yield(0,en.r)(r),se=new Map;for(const Se of te)se.set(Se.id,Se);const le=new Map;for(const Se of r){const Ie=(I=se.get(Se))!==null&&I!==void 0?I:yield(0,me.A)(Se);if(!Ie||Ie.id===0){u.set(Se,!1);continue}const Pe=(A=Ie.accessId)!==null&&A!==void 0?A:0,Me=(D=Ie.typeId)!==null&&D!==void 0?D:0;if(z&&z.userId&&z.userId===Ie.userId){u.set(Se,!0);continue}if(Ie.referentId===null||Ie.referentId===void 0||Ie.referentId===0){u.set(Se,!0);continue}if(Pe<1e4){u.set(Se,!0);continue}let qe=0;if(Me>0){let Ke=le.get(Me);if(!Ke)try{Ke=yield(0,me.A)(Me),le.set(Me,Ke)}catch{}Ke&&(qe=(O=Ke.accessId)!==null&&O!==void 0?O:0)}G.push({conceptId:Se,accessId:Pe,typeAccessId:qe}),Pe>0&&(V.add(Pe),Y.set(Pe,Se)),qe>0&&V.add(qe)}if(G.length===0)return u;const Ce=yield this.resolveBulkInheritanceGraph(V,0,Y),ue=[],_e=new Set;for(const Se of Ce.values())for(const Ie of Se)_e.has(Ie)||(_e.add(Ie),ue.push(Ie));const Oe=yield this.resolveSubjects(l),je=yield this.resolveBulkDecisions(ue,t,Oe);for(const Se of G){const Ie=(x=Ce.get(Se.accessId))!==null&&x!==void 0?x:[Se.accessId],Pe=Se.typeAccessId>0?(m=Ce.get(Se.typeAccessId))!==null&&m!==void 0?m:[Se.typeAccessId]:[];u.set(Se.conceptId,this.hasAnyGrant(Ie,Pe,Oe,je))}return u})}getConceptIdsWithPermission(r,t,l){return ze(this,void 0,void 0,function*(){if(!r||r.trim()==="")throw new Error("Permission is required");if(!t||t.length===0)return[];const I=yield this.checkAccessBulk(t,r.toLowerCase(),l);return t.filter(A=>I.get(A)===!0)})}resolveBulkInheritanceGraph(r,t,l){return ze(this,void 0,void 0,function*(){var I,A,D,O,x,m,u,G,V,Y,z,te,se,le;const Ce=new Map,ue=new Set;let _e=new Set(r),Oe=0;for(;_e.size>0&&!(Oe>=10);){Oe++;const Se=new Set;for(const Pe of _e)ue.add(Pe);const Ie=Array.from(_e);for(const Pe of Ie)try{const Me=(I=yield(0,Ft.l)(Pe))!==null&&I!==void 0?I:[];for(const qe of Me){if(((x=(D=(A=qe.connectionTypeName)!==null&&A!==void 0?A:qe.typeName)!==null&&D!==void 0?D:(O=qe.type)===null||O===void 0?void 0:O.characterValue)!==null&&x!==void 0?x:"").toString().toLowerCase()!=="the_parent_access_inheritance")continue;const Ke=(u=(m=qe.toTheConceptId)!==null&&m!==void 0?m:qe.toConceptId)!==null&&u!==void 0?u:0;Ke>0&&!ue.has(Ke)&&(Ce.has(Pe)||Ce.set(Pe,[]),Ce.get(Pe).push(Ke),Se.add(Ke))}}catch{}for(const Pe of Ie)try{const Me=yield this.apiClient.getParentAccessIdAsync(Pe);if(Me?.status===!0&&Me.data!==void 0&&Me.data!==null){const qe=Dt.parseIntData(Me);qe!==null&&qe>0&&!ue.has(qe)&&(Ce.has(Pe)||Ce.set(Pe,[]),Ce.get(Pe).push(qe),Se.add(qe))}}catch{}for(const Pe of Ie)try{const Me=yield this.apiClient.getAccessInheritanceStatusAsync(Pe);if(!Dt.parseBoolData(Me))continue;const qe=l.get(Pe);if(!qe||qe===0)continue;const Ke=(G=yield(0,Ft.l)(qe))!==null&&G!==void 0?G:[];for(const st of Ke){if(((Y=(V=st.ofTheConceptId)!==null&&V!==void 0?V:st.ofConceptId)!==null&&Y!==void 0?Y:0)!==qe||t>0&&((z=st.typeId)!==null&&z!==void 0?z:0)!==t)continue;const tt=(se=(te=st.toTheConceptId)!==null&&te!==void 0?te:st.toConceptId)!==null&&se!==void 0?se:0;if(tt)try{const wt=yield(0,me.A)(tt),dt=(le=wt?.accessId)!==null&&le!==void 0?le:0;dt>0&&!ue.has(dt)&&(Ce.has(Pe)||Ce.set(Pe,[]),Ce.get(Pe).push(dt),l.set(dt,tt),Se.add(dt))}catch{}}}catch{}for(const Pe of ue)Se.delete(Pe);_e=Se}const je=new Map;for(const Se of r){const Ie=[Se],Pe=new Set([Se]),Me=[Se];for(;Me.length>0&&Ie.length<100;){const qe=Me.shift(),Ke=Ce.get(qe);if(Ke)for(const st of Ke)Pe.has(st)||(Pe.add(st),Ie.push(st),Me.push(st))}je.set(Se,Ie)}return je})}resolveBulkDecisions(r,t,l){return ze(this,void 0,void 0,function*(){var I;const A=new Map;for(const D of l)try{const O={accessIds:r,permission:t,entityId:D},x=yield this.apiClient.checkAccessBulkAsync(O);if(x?.status===!0&&x.data&&Array.isArray(x.data)){const m=new Map;for(const u of x.data)m.set(u.accessId,u.hasAccess);for(const u of r)A.set(`${u}:${D??0}`,(I=m.get(u))!==null&&I!==void 0&&I)}else for(const m of r)A.set(`${m}:${D??0}`,!1)}catch{for(const x of r)A.set(`${x}:${D??0}`,!1)}return A})}resolveSubjects(r){return ze(this,void 0,void 0,function*(){var t,l,I,A,D,O,x;const m=[null];if(r!=null&&r>0){m.push(r);try{const u=(t=yield(0,Ft.l)(r))!==null&&t!==void 0?t:[];for(const G of u){if(((D=(I=(l=G.connectionTypeName)!==null&&l!==void 0?l:G.typeName)!==null&&I!==void 0?I:(A=G.type)===null||A===void 0?void 0:A.characterValue)!==null&&D!==void 0?D:"").toString().toLowerCase()!=="the_entity_s_group")continue;const V=(x=(O=G.toTheConceptId)!==null&&O!==void 0?O:G.toConceptId)!==null&&x!==void 0?x:0;V>0&&m.push(V)}}catch{}}return m})}hasAnyGrant(r,t,l,I){for(const A of r)for(const D of l)if(I.get(`${A}:${D??0}`)===!0)return!0;for(const A of t)for(const D of l)if(I.get(`${A}:${D??0}`)===!0)return!0;return!1}assignAccess(r){return ze(this,void 0,void 0,function*(){if(!r||!r.conceptIds||r.conceptIds.length===0)throw new Error("Request must contain at least one conceptId");try{const t=yield this.apiClient.assignConceptAccessBulkAsync(r);if(t?.status!==!0)throw new Error(t?.message||"Failed to assign bulk access");return t?.data&&Array.isArray(t.data)?t.data:[]}catch(t){throw t}})}revokeAccess(r,t,l){return ze(this,void 0,void 0,function*(){var I;try{const A=(I=(yield(0,me.A)(r)).accessId)!==null&&I!==void 0?I:0;if(A===0)throw new Error(`Concept with ID ${r} does not have a valid accessId`);const D=yield this.apiClient.revokeAccessAsync({accessId:A,permission:t,entityId:l});return D?.status===!0}catch(A){throw new Error(`Error revoking access for concept ${r}, permission '${t}', entityId ${l}: ${A}`)}})}revokeAccessBulk(r){return ze(this,void 0,void 0,function*(){if(!r||!r.conceptIds||r.conceptIds.length===0)throw new Error("Request must contain at least one conceptId");try{const t=yield this.apiClient.revokeConceptAccessBulkAsync(r);if(t?.status!==!0)throw new Error(t?.message||"Failed to revoke bulk concept access");return t?.data&&Array.isArray(t.data)?t.data:[]}catch(t){throw t}})}setAccessInheritance(r){return ze(this,void 0,void 0,function*(){var t;try{const l=yield this.apiClient.setAccessInheritanceByConceptAsync({conceptId:r,connectionTypeId:999});return(t=l?.status)!==null&&t!==void 0&&t}catch(l){throw new Error(`Error setting access inheritance for conceptId ${r}: ${l}`)}})}getAccessInheritanceStatus(r){return ze(this,arguments,void 0,function*(t,l=999){try{const I=yield this.apiClient.getAccessInheritanceStatusByConceptAsync(t,l);return Dt.parseBoolData(I)}catch(I){throw new Error(`Error getting access inheritance status for conceptId ${t}: ${I}`)}})}setAccessInheritanceStatus(r,t){return ze(this,arguments,void 0,function*(l,I,A=999){var D;try{const O=yield this.apiClient.setAccessInheritanceByConceptAsync({conceptId:l,enable:I,connectionTypeId:A});return(D=O?.status)!==null&&D!==void 0&&D}catch(O){throw new Error(`Error setting access inheritance status for conceptId ${l}: ${O}`)}})}setParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){try{const l=yield this.apiClient.setParentAccessInheritanceByConceptAsync({parentConceptId:t,childConceptId:r});if(l?.status===!0){const I=Dt.parseIntData(l);if(I!==null&&I>0)return I}return 0}catch(l){throw new Error(`Error setting parent access inheritance for conceptId ${r}: ${l}`)}})}setParentAccessInheritanceBulk(r,t){return ze(this,void 0,void 0,function*(){try{const l=yield this.apiClient.setParentAccessInheritanceBulkByConceptAsync({parentConceptId:t,childConceptIds:r});return l?.status===!0&&Array.isArray(l.data)?l.data:[]}catch(l){throw new Error(`Error setting bulk parent access inheritance for parentConceptId ${t}: ${l}`)}})}removeParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){var l;try{const I=yield this.apiClient.removeParentAccessInheritanceByConceptAsync(r,t);return(l=I?.message)!==null&&l!==void 0?l:"Parent access inheritance removal failed"}catch(I){throw new Error(`Error removing parent access inheritance for conceptId ${r}: ${I}`)}})}removeParentAccessInheritanceBulk(r,t){return ze(this,void 0,void 0,function*(){try{const l=yield this.apiClient.removeParentAccessInheritanceBulkByConceptAsync({parentConceptId:t??0,childConceptIds:r});return l?.status===!0&&Array.isArray(l.data)?l.data:[]}catch(l){throw new Error(`Error removing bulk parent access inheritance: ${l}`)}})}hasParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){try{const l=yield this.apiClient.hasParentAccessInheritanceByConceptAsync(r,t);return Dt.parseBoolData(l)}catch(l){throw new Error(`Error checking parent access inheritance for conceptId ${r}: ${l}`)}})}getParentAccessId(r){return ze(this,void 0,void 0,function*(){try{const t=yield this.apiClient.getParentAccessIdByConceptAsync(r);return Dt.parseIntData(t)}catch(t){throw new Error(`Error getting parent access ID for conceptId ${r}: ${t}`)}})}isSuperAdmin(r){return ze(this,void 0,void 0,function*(){try{if(r===0)return!1;if(!o.B.FLAGS||!o.B.FLAGS.accessControl)return!0;const t=yield this.apiClient.checkSuperAdminByConceptAsync(r);return Dt.parseBoolData(t)}catch(t){throw new Error(`Error checking super admin status for entityId ${r}: ${t}`)}})}assignSuperAdmin(r){return ze(this,void 0,void 0,function*(){try{const t=yield this.apiClient.assignSuperAdminByConceptAsync({conceptId:r});return t?.status===!0&&t.data!==void 0?r:0}catch(t){throw new Error(`Failed to assign super admin for entityId ${r}: ${t}`)}})}revokeSuperAdmin(r){return ze(this,void 0,void 0,function*(){try{const t=yield this.apiClient.revokeSuperAdminByConceptAsync({conceptId:r});return t?.status===!0&&t.message?t.message:"Super admin access deletion failed"}catch(t){throw new Error(`Failed to revoke super admin for entityId ${r}: ${t}`)}})}makeConceptPrivate(r){return ze(this,void 0,void 0,function*(){var t,l,I,A,D,O,x,m;try{if(!r)throw new Error("conceptId is required");const u=yield(0,me.A)(r);if(!u||u.id===0)throw new Error(`Concept with ID ${r} not found`);const G=typeof globalThis.getUserDetails=="function"?globalThis.getUserDetails():null;let V=Number((A=(I=(l=(t=G?.entity)!==null&&t!==void 0?t:G?.entityId)!==null&&l!==void 0?l:G?.userConcept)!==null&&I!==void 0?I:G?.userId)!==null&&A!==void 0?A:0)||0;if(!V)throw new Error("Logged-in entity id not found");if(u.userId!==V)throw new Error("Only the owner may make the concept private");const Y=["read","write","execute","delete"];let z=(D=u.accessId)!==null&&D!==void 0?D:0;const te={conceptIds:[r],permissions:Y,entityId:V},se=yield this.apiClient.assignConceptAccessBulkAsync(te);if(!se||se.status!==!0)throw new Error(`Failed to assign permissions for entity ${V} via bulk API`);if(Array.isArray(se.data))for(const le of se.data){const Ce=(x=(O=le.accessId)!==null&&O!==void 0?O:le.data)!==null&&x!==void 0?x:0;typeof Ce=="number"&&Ce>z&&(z=Ce)}else typeof se.data=="number"&&se.data>z&&(z=se.data);return z&&z!==((m=u.accessId)!==null&&m!==void 0?m:0)&&(u.accessId=z,e.I.AddConcept(u)),!0}catch(u){throw new Error(`Error making concept ${r} private: ${u}`)}})}static parseBoolData(r){if(!r?.status||r.data===void 0||r.data===null)return!1;const t=r.data;if(typeof t=="boolean")return t;if(typeof t=="string")return t.toLowerCase()==="true";if(typeof t=="number")return t!==0;if(typeof t=="object"){for(const l of["enabled","Enabled","isEnabled","IsEnabled","status","Status","hasAccess","HasAccess"])if(l in t){const I=t[l];if(typeof I=="boolean")return I;if(typeof I=="string")return I.toLowerCase()==="true"}}return!1}static parseIntData(r){if(!r?.status||r.data===void 0||r.data===null)return null;const t=r.data;if(typeof t=="number")return t;if(typeof t=="string"){const l=parseInt(t,10);return isNaN(l)?null:l}if(typeof t=="object"){for(const l of["id","Id","accessId","AccessId","parentAccessId","ParentAccessId"])if(l in t){const I=t[l];if(typeof I=="number")return I;if(typeof I=="string"){const A=parseInt(I,10);if(!isNaN(A))return A}}}return null}static isSuperAdmin(r){return ze(this,void 0,void 0,function*(){return kt().isSuperAdmin(r)})}static assignSuperAdmin(r){return ze(this,void 0,void 0,function*(){return kt().assignSuperAdmin(r)})}static revokeSuperAdmin(r){return ze(this,void 0,void 0,function*(){return kt().revokeSuperAdmin(r)})}static checkAccess(r,t,l){return ze(this,void 0,void 0,function*(){return kt().checkAccess(r,t,l)})}static checkAccessBulk(r,t,l){return ze(this,void 0,void 0,function*(){return kt().checkAccessBulk(r,t,l)})}static assignAccess(r){return ze(this,void 0,void 0,function*(){return kt().assignAccess(r)})}static revokeAccess(r,t,l){return ze(this,void 0,void 0,function*(){return kt().revokeAccess(r,t,l)})}static revokeAccessBulk(r){return ze(this,void 0,void 0,function*(){return kt().revokeAccessBulk(r)})}static setParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){return kt().setParentAccessInheritance(r,t)})}static setParentAccessInheritanceBulk(r,t){return ze(this,void 0,void 0,function*(){return kt().setParentAccessInheritanceBulk(r,t)})}static removeParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){return kt().removeParentAccessInheritance(r,t)})}static removeParentAccessInheritanceBulk(r,t){return ze(this,void 0,void 0,function*(){return kt().removeParentAccessInheritanceBulk(r,t)})}static hasParentAccessInheritance(r,t){return ze(this,void 0,void 0,function*(){return kt().hasParentAccessInheritance(r,t)})}static getParentAccessId(r){return ze(this,void 0,void 0,function*(){return kt().getParentAccessId(r)})}}let Fo=null;function kt(){return Fo||(Fo=new Dt),Fo}const Ar=`
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

`,Yt={PAGE_COMP_NAME:"page",WIDGET_COMP_NAME:"widget",PROJECT_COMP_NAME:"project"};var _r=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};class ct{static get(r,t){return _r(this,void 0,void 0,function*(){if(ct.cache.has(r))return ct.cache.get(r);if(ct.promises.has(r))return ct.promises.get(r);const l=t().then(I=>(ct.cache.set(r,I),ct.promises.delete(r),I)).catch(I=>{throw ct.promises.delete(r),I});return ct.promises.set(r,l),l})}static has(r){return ct.cache.has(r)}static peek(r){return ct.cache.get(r)}static invalidate(r){ct.cache.delete(r),ct.promises.delete(r)}static clear(){ct.cache.clear(),ct.promises.clear()}static set(r,t){return _r(this,void 0,void 0,function*(){return ct.promises.delete(r),ct.cache.set(r,t),t})}static stats(){return{cacheSize:ct.cache.size,pendingRequests:ct.promises.size,keys:Array.from(ct.cache.keys())}}}ct.cache=new Map,ct.promises=new Map;var rt=v(2895);const Ys=rt;rt.stringify,rt.fromJSON,rt.plugin,rt.parse,rt.list,rt.document,rt.comment,rt.atRule,rt.rule,rt.decl,rt.root,rt.CssSyntaxError,rt.Declaration,rt.Container,rt.Processor,rt.Document,rt.Comment,rt.Warning,rt.AtRule,rt.Result,rt.Input,rt.Rule,rt.Root,rt.Node;var Xs=v(2110),Ks=v.n(Xs),Zs=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Sr(B){return Zs(this,void 0,void 0,function*(){try{return(yield Ys([Ks()()]).process(B,{from:void 0})).css}catch{return null}})}var xr=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function ea(B){return xr(this,void 0,void 0,function*(){var r,t,l,I,A,D,O,x,m,u,G,V,Y,z;[{key:"meta_title",value:(t=(r=B?.[`the_${Yt.PAGE_COMP_NAME}_meta_title`])===null||r===void 0?void 0:r.data)===null||t===void 0?void 0:t.the_meta_title},{key:"meta_description",value:(I=(l=B?.[`the_${Yt.PAGE_COMP_NAME}_meta_description`])===null||l===void 0?void 0:l.data)===null||I===void 0?void 0:I.the_meta_description},{key:"meta_keywords",value:(D=(A=B?.[`the_${Yt.PAGE_COMP_NAME}_meta_keywords`])===null||A===void 0?void 0:A.data)===null||D===void 0?void 0:D.the_meta_keywords},{key:"width",value:(x=(O=B?.[`the_${Yt.PAGE_COMP_NAME}_width`])===null||O===void 0?void 0:O.data)===null||x===void 0?void 0:x.the_width},{key:"font_size",value:(u=(m=B?.[`the_${Yt.PAGE_COMP_NAME}_font_size`])===null||m===void 0?void 0:m.data)===null||u===void 0?void 0:u.the_font_size},{key:"font_family",value:(V=(G=B?.[`the_${Yt.PAGE_COMP_NAME}_font_family`])===null||G===void 0?void 0:G.data)===null||V===void 0?void 0:V.the_font_family},{key:"type",value:(z=(Y=B?.[`the_${Yt.PAGE_COMP_NAME}_type`])===null||Y===void 0?void 0:Y.data)===null||z===void 0?void 0:z.the_type}].forEach(te=>{te.value&&function(se,le){xr(this,void 0,void 0,function*(){const Ce=document.getElementById("fspage-properties")||function(){const _e=document.createElement("style");return _e.id="fspage-properties",document.head.appendChild(_e),_e}();let ue="";switch(se){case"width":Dn(".fspage { width: [^;]+ !important; }"),ue=le?`.fspage { width: ${le} !important; }`:"";break;case"font_size":Dn(".fspage { font-size: [^;]+; }"),ue=le?`.fspage { font-size: ${le}px; }`:"";break;case"font_family":Dn(".fspage { font-family: [^;]+; }"),ue=le?`.fspage { font-family: ${le}; }`:"";break;case"type":Dn(".fspage { width: 1200px; margin: 0 auto; }"),Dn(".fspage { width: 100%; padding: 0; }"),ue=le==="fixed"?".fspage { width: 1200px; margin: 0 auto; }":le==="fluid"?".fspage { width: 100%; padding: 0; }":"";break;case"meta_title":document.title=le;break;case"meta_keywords":Nr(se.replace("meta_",""),le);break;case"meta_description":return void Nr(se.replace("meta_",""),le)}Ce.textContent+=ue})}(te.key,te.value)})})}function Dn(B){const r=document.getElementById("fspage-properties");if(!r)return;let t=r?.textContent;t=t?t.replace(new RegExp(B,"g"),""):"",r.textContent=t}function Nr(B,r){let t=document.querySelector(`meta[name="${B}"]`);t||(t=document.createElement("meta"),t.setAttribute("name",B),document.head.appendChild(t)),t.setAttribute("content",r)}var Lr=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Zn(B){return Lr(this,void 0,void 0,function*(){var r,t,l,I;!((t=(r=B?.library)===null||r===void 0?void 0:r.css)===null||t===void 0)&&t.length&&function(A){var D;const O=(D=A?.library)===null||D===void 0?void 0:D.css,x=`vde-css-${A?.origin?A?.origin:A?.widgetId}`;(function(m){const u=`link.${m}`,G=document.querySelectorAll(u);G?.length&&G?.forEach(V=>{V.remove()})})(x),O?.length&&O?.sort((m,u)=>Number(m?.order)-Number(u?.order)),O?.forEach(m=>{const u=document.createElement("link");u.classList.add(x),u.setAttribute("rel","stylesheet"),u.setAttribute("href",m.url),document.head.appendChild(u)})}(B),!((I=(l=B?.library)===null||l===void 0?void 0:l.js)===null||I===void 0)&&I.length&&(yield function(A){return Lr(this,void 0,void 0,function*(){var D;const O=(D=A?.library)===null||D===void 0?void 0:D.js,x=`vde-js-${A?.origin?A?.origin:A?.widgetId}`;if(function(m){const u=`script.${m}`,G=document.querySelectorAll(u);G?.length&&G?.forEach(V=>{V.remove()})}(x),O?.length){O.sort((m,u)=>Number(m?.order)-Number(u?.order));for(const m of O)m?.url&&(document.querySelector(`script[src="${m.url}"]`)||(yield new Promise((u,G)=>{const V=document.createElement("script");V.classList.add(x),V.setAttribute("type","text/javascript"),V.setAttribute("src",m.url),V.setAttribute("crossorigin","anonymous"),V.onload=()=>{u()},V.onerror=Y=>{G(new Error(`Failed to load script: ${m.url}`))},document.head.appendChild(V)})))}})}(B))})}var mt=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Dr(B,r,t,l){return mt(this,void 0,void 0,function*(){var I,A,D,O,x,m,u,G,V,Y;const z=new St;z.conceptIds=[B],z.inpage=100,z.outputFormat=Ue.y0,z.selectors=["the_page_body","the_page_title","the_page_slug","the_page_font_family","the_page_font_size","the_page_width","the_page_type","the_page_meta_title","the_page_meta_description","the_page_meta_keywords"];let te=yield Kn(z,"");ea((A=(I=te?.[0])===null||I===void 0?void 0:I.data)===null||A===void 0?void 0:A[`the_${Yt.PAGE_COMP_NAME}`]),document.getElementById("app").classList.add("fspage");const se=document.head.querySelectorAll("style#mystyleid");Array.from(se).forEach(le=>le.remove()),!((m=(x=(O=(D=te?.[0])===null||D===void 0?void 0:D.data)===null||O===void 0?void 0:O.the_page)===null||x===void 0?void 0:x.the_page_body)===null||m===void 0)&&m.id?yield eo((Y=(V=(G=(u=te?.[0])===null||u===void 0?void 0:u.data)===null||G===void 0?void 0:G.the_page)===null||V===void 0?void 0:V.the_page_body)===null||Y===void 0?void 0:Y.id,r,t,l):r.innerHTML="<h4>Invalid or Page doesn't exist</h4> "+B})}function Pr(B,r,t,l){return mt(this,void 0,void 0,function*(){try{let I=yield(0,Ut.qj)(B),A=I.mainId,D=I.data;const O=yield to(D,A),x=yield rn(A,[],O);return ct.cache.set(`wdgt_${A}`,x),x}catch{}})}function Br(B,r,t,l){return mt(this,void 0,void 0,function*(){try{let I=yield(0,Ut.ml)(B),A=I.mainId,D=I.data;const O=yield to(D,A);return yield rn(A,[],O)}catch{}})}function Rr(B,r,t,l){return mt(this,void 0,void 0,function*(){let I=(yield(0,Ut.qj)(B)).mainId;const A=ct.cache.get(`wdgt_${I}`);if(!A.name)return void(r.innerHTML="<h4>Invalid or Widget doesn't exist</h4>"+B);const D=r;yield Zn(A);const O=yield Pn(A,D,void 0,t),x=Array.from({length:32},()=>"abcdef"[Math.floor(6*Math.random())]).join("");r.classList.add(`${x}`),r.style.position="relative";const m=document.createElement("style");m.id="mystyleid",m.classList.add("mftsccs-css");const u=`
        .${x} {
          ${A.css+O.css+Ar} 
        }
      `,G=(yield Sr(u))||"";if(m.innerHTML=G,document.head.appendChild(m),A.children.length&&A?.children.forEach(V=>{var Y;const z=V?.library;(!((Y=z?.css)===null||Y===void 0)&&Y.length||z?.js.length)&&Zn(V)}),l){const V=document.createElement("div");V.id="widget-details",V.innerHTML="",V.innerHTML=`
        <button class="widget-documentation-btn" widget-id="${A?.origin||A?.widgetId}" class="d-flex align-items-center gap-1" title="Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
        </button>
      `,D.appendChild(V);const Y=document.createElement("dialog");Y.id="widget-documentation-preview-modal",Y.className="col-md-8",Y.innerHTML="",Y.innerHTML=`
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
      `,D.appendChild(Y);const z=D.querySelectorAll(".widget-documentation-btn");z?.forEach(se=>{se.addEventListener("click",le=>{const Ce=le?.target;Wr(Ce?.getAttribute("widget-id"))})});const te=D.querySelectorAll(".document-preview-close-button");te?.forEach(se=>{se.addEventListener("click",()=>{jr("widget-documentation-preview-modal")})})}return D.querySelectorAll(".wb-initial-empty").forEach(V=>{V.classList.remove("wb-initial-empty")}),document.querySelectorAll('[onclick="widgetSelected(event)"]').forEach(V=>{V.removeAttribute("onclick")}),O})}function eo(B,r,t,l){return mt(this,void 0,void 0,function*(){try{let I=yield(0,Ut.qj)(B),A=I.mainId,D=I.data;const O=yield to(D,A);return yield Or(A,O,r,t,l)}catch(I){r.textContent=`Error: ${I.message}`}})}function Er(B,r,t,l){return mt(this,void 0,void 0,function*(){try{const I=yield(0,Ut.Cp)(B);return yield Or(B,I,r,t,l)}catch{}})}function Or(B,r,t,l){return mt(this,arguments,void 0,function*(I,A,D,O,x=!0){const m=yield rn(I,[],A);if(!m.name)return void(D.innerHTML="<h4>Invalid or Widget doesn't exist</h4>"+I);const u=D;yield Zn(m);const G=yield Pn(m,u,void 0,O),V=Array.from({length:32},()=>"abcdef"[Math.floor(6*Math.random())]).join("");D.classList.add(`${V}`),D.style.position="relative";const Y=document.createElement("style");Y.id="mystyleid",Y.classList.add("mftsccs-css");const z=`
        .${V} {
          ${m.css+G.css+Ar} 
        }
      `,te=(yield Sr(z))||"";Y.innerHTML=te,m.children.length&&m?.children.forEach(le=>{var Ce;const ue=le?.library;(!((Ce=ue?.css)===null||Ce===void 0)&&Ce.length||ue?.js.length)&&Zn(le)}),document.head.appendChild(Y);const se=document.createElement("script");if(se.innerHTML=m.js,u.appendChild(se),x){const le=document.createElement("div");le.id="widget-details",le.innerHTML="",le.innerHTML=`
        <button class="widget-documentation-btn" widget-id="${m?.origin||m?.widgetId}" class="d-flex align-items-center gap-1" title="Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
        </button>
      `,u.appendChild(le);const Ce=document.createElement("dialog");Ce.id="widget-documentation-preview-modal",Ce.className="col-md-8",Ce.innerHTML="",Ce.innerHTML=`
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
      `,u.appendChild(Ce);const ue=u.querySelectorAll(".widget-documentation-btn");ue?.forEach(Oe=>{Oe.addEventListener("click",je=>{const Se=je?.target;Wr(Se?.getAttribute("widget-id"))})});const _e=u.querySelectorAll(".document-preview-close-button");_e?.forEach(Oe=>{Oe.addEventListener("click",()=>{jr("widget-documentation-preview-modal")})})}return u.querySelectorAll(".wb-initial-empty").forEach(le=>{le.classList.remove("wb-initial-empty")}),document.querySelectorAll('[onclick="widgetSelected(event)"]').forEach(le=>{le.removeAttribute("onclick")}),G})}function Fr(B,r){return mt(this,void 0,void 0,function*(){var t,l,I,A,D,O,x,m,u,G,V;const Y=(l=(t=B?.data)===null||t===void 0?void 0:t.the_widget)===null||l===void 0?void 0:l.the_widget_s_child;if(r.push(B),Y&&Y.length)for(let z=0;z<Y.length;z++){const te=Y[z];let se=(x=(O=(D=(A=(I=te?.data.the_child_widget)===null||I===void 0?void 0:I.the_child_widget_info)===null||A===void 0?void 0:A.data)===null||D===void 0?void 0:D.the_widget)===null||O===void 0?void 0:O.the_widget_root)===null||x===void 0?void 0:x.id;const le=!!(!((G=(u=(m=te?.data)===null||m===void 0?void 0:m.the_child_widget)===null||u===void 0?void 0:u.the_child_widget_use_latest)===null||G===void 0)&&G.data);se=Number(se)||!1;let Ce=null;if(le&&se){const ue=yield(0,Ut.qj)(se);Ce=((V=ue?.data)===null||V===void 0?void 0:V[0])||[],Ce.useLatest=!0,te.data.the_child_widget.the_child_widget_info=Ce}te.data.the_child_widget.the_child_widget_info.sChildId=te.id,yield Fr(te.data.the_child_widget.the_child_widget_info,r)}})}function to(B,r){return mt(this,void 0,void 0,function*(){const t=[],l=[...B];try{const I=l.find(A=>A.id===r);yield Fr(I,t)}catch{}return t})}function Gr(B){return mt(this,arguments,void 0,function*(r,t=[],l=""){let I=yield(0,Ut.Cp)(r);const A=yield to(I,r);return yield rn(r,[],A)})}function rn(B){return mt(this,arguments,void 0,function*(r,t=[],l,I=""){var A,D,O,x,m,u,G,V,Y,z,te,se,le,Ce,ue,_e,Oe,je,Se,Ie,Pe,Me,qe,Ke,st,tt,wt,dt,Pt,Bt,Rt,Et,Vt,qt,Ht,yt,Nt,At,Tt,Lt,cn,ln,dn,un,hn,pn,fn,mn,Ve,Xt,En,On,Fn,Gn,Un,Mn,Wn;try{const et=new Ro,Ot=(0,Ut.ix)(l,r);t.push(r);const We=(A=Ot?.data)===null||A===void 0?void 0:A.the_widget;et.name=(O=(D=We?.the_widget_name)===null||D===void 0?void 0:D.data)===null||O===void 0?void 0:O.the_name,et.html=(m=(x=We?.the_widget_html)===null||x===void 0?void 0:x.data)===null||m===void 0?void 0:m.the_html,et.css=(G=(u=We?.the_widget_css)===null||u===void 0?void 0:u.data)===null||G===void 0?void 0:G.the_css,et.js=(Y=(V=We?.the_widget_js)===null||V===void 0?void 0:V.data)===null||Y===void 0?void 0:Y.the_js,et.root=Number((te=(z=We?.the_widget_root)===null||z===void 0?void 0:z.id)!==null&&te!==void 0?te:0),et.origin=et.root,et.version=(le=(se=We?.the_widget_version)===null||se===void 0?void 0:se.data)===null||le===void 0?void 0:le.the_version,et.clean=(ue=(Ce=We?.the_widget_clean)===null||Ce===void 0?void 0:Ce.data)===null||ue===void 0?void 0:ue.the_clean,et.timestamp=(Oe=(_e=We?.the_widget_timestamp)===null||_e===void 0?void 0:_e.data)===null||Oe===void 0?void 0:Oe.the_timestamp,et.id=Ot?.id;const jn=(Se=(je=We?.the_widget_type)===null||je===void 0?void 0:je.data)===null||Se===void 0?void 0:Se.the_type;et.type=jn=="null"||jn==null?"the_element_name":jn,et.after_render=(Pe=(Ie=We?.the_widget_after_render)===null||Ie===void 0?void 0:Ie.data)===null||Pe===void 0?void 0:Pe.the_after_render,et.before_render=(qe=(Me=We?.the_widget_before_render)===null||Me===void 0?void 0:Me.data)===null||qe===void 0?void 0:qe.the_before_render,et.dependency=(st=(Ke=We?.the_widget_dependency)===null||Ke===void 0?void 0:Ke.data)===null||st===void 0?void 0:st.the_dependency,et.update=(wt=(tt=We?.the_widget_update)===null||tt===void 0?void 0:tt.data)===null||wt===void 0?void 0:wt.the_update,et.widgetId=r,et.mount_child=(Pt=(dt=We?.the_widget_mount_child)===null||dt===void 0?void 0:dt.data)===null||Pt===void 0?void 0:Pt.the_mount_child;const $t=We?.the_widget_s_child;Ot?.useLatest&&(et.useLatest=!0),Ot?.sChildId&&(et.sChildId=Ot.sChildId);const qo=(Bt=We?.the_widget_s_css_library)===null||Bt===void 0?void 0:Bt.map(it=>{var gt,at,vt,bt,_t,ut,nt,Ct;return{order:(bt=(vt=(at=(gt=it?.data)===null||gt===void 0?void 0:gt.the_css_library)===null||at===void 0?void 0:at.the_css_library_order)===null||vt===void 0?void 0:vt.data)===null||bt===void 0?void 0:bt.the_order,url:(Ct=(nt=(ut=(_t=it?.data)===null||_t===void 0?void 0:_t.the_css_library)===null||ut===void 0?void 0:ut.the_css_library_url)===null||nt===void 0?void 0:nt.data)===null||Ct===void 0?void 0:Ct.the_url}}),Ho=(Rt=We?.the_widget_s_js_library)===null||Rt===void 0?void 0:Rt.map(it=>{var gt,at,vt,bt,_t,ut,nt,Ct;return{order:(bt=(vt=(at=(gt=it?.data)===null||gt===void 0?void 0:gt.the_js_library)===null||at===void 0?void 0:at.the_js_library_order)===null||vt===void 0?void 0:vt.data)===null||bt===void 0?void 0:bt.the_order,url:(Ct=(nt=(ut=(_t=it?.data)===null||_t===void 0?void 0:_t.the_js_library)===null||ut===void 0?void 0:ut.the_js_library_url)===null||nt===void 0?void 0:nt.data)===null||Ct===void 0?void 0:Ct.the_url}});et.library={css:qo||[],js:Ho||[]};const Kt=(Vt=(Et=We?.the_widget_assistant)===null||Et===void 0?void 0:Et.data)===null||Vt===void 0?void 0:Vt.the_assistant;et.assistant={id:(Ht=(qt=Kt?.the_assistant_id)===null||qt===void 0?void 0:qt.data)===null||Ht===void 0?void 0:Ht.the_id,input:(Nt=(yt=Kt?.the_assistant_input)===null||yt===void 0?void 0:yt.data)===null||Nt===void 0?void 0:Nt.the_input,type:(Tt=(At=Kt?.the_assistant_type)===null||At===void 0?void 0:At.data)===null||Tt===void 0?void 0:Tt.the_type};const wn=(Lt=We?.the_widget_s_custom_function)===null||Lt===void 0?void 0:Lt.map(it=>{var gt,at,vt,bt,_t,ut,nt;const Ct=(gt=it?.data)===null||gt===void 0?void 0:gt.the_custom_function;return{id:it?.id,name:(vt=(at=Ct?.the_custom_function_name)===null||at===void 0?void 0:at.data)===null||vt===void 0?void 0:vt.the_name,slug:(_t=(bt=Ct?.the_custom_function_slug)===null||bt===void 0?void 0:bt.data)===null||_t===void 0?void 0:_t.the_slug,code:(nt=(ut=Ct?.the_custom_function_code)===null||ut===void 0?void 0:ut.data)===null||nt===void 0?void 0:nt.the_code}});if(et.custom_functions=wn,$t?.length)for(let it=0;it<$t.length;it++){const gt=((dn=(ln=(cn=$t[it])===null||cn===void 0?void 0:cn.data.the_child_widget)===null||ln===void 0?void 0:ln.the_child_widget_info)===null||dn===void 0?void 0:dn.id)||((fn=(pn=(hn=(un=$t[it])===null||un===void 0?void 0:un.data.the_child_widget)===null||hn===void 0?void 0:hn.the_child_widget_parent)===null||pn===void 0?void 0:pn.data)===null||fn===void 0?void 0:fn.the_parent),at=yield rn(gt,t,l,I),vt=(On=(En=(Xt=(Ve=(mn=$t[it])===null||mn===void 0?void 0:mn.data)===null||Ve===void 0?void 0:Ve.the_child_widget)===null||Xt===void 0?void 0:Xt.the_child_widget_type)===null||En===void 0?void 0:En.data)===null||On===void 0?void 0:On.the_type,bt=(Wn=(Mn=(Un=(Gn=(Fn=$t[it])===null||Fn===void 0?void 0:Fn.data)===null||Gn===void 0?void 0:Gn.the_child_widget)===null||Un===void 0?void 0:Un.the_child_widget_wrapper)===null||Mn===void 0?void 0:Mn.data)===null||Wn===void 0?void 0:Wn.the_wrapper;at.type=vt=="null"||vt==null?"the_element_name":vt,at.wrapper=bt,et.children.push(at)}return et}catch(et){throw et}})}function Pn(B,r){return mt(this,arguments,void 0,function*(t,l,I=!0,A,D,O=null){var x,m;const u=new Nn;u.html=t.html,O&&(u.parentWidget=Ur(O)),u.widgetType=t.type,u.componentDidMountFunction=t.before_render,u.addEventFunction=t.after_render,u.mountChildWidgetsFunction=t.mount_child,u.widgetState=Object.assign({},D),u.customFunctions=t.custom_functions,u.widgetDependenciesData=t.dependency,A&&(u.data=A),l.innerHTML="";const G=l;if(G&&(yield u.mount(G),t.widget=u,t.children.length>0&&((x=u.childWidgetElement)===null||x===void 0?void 0:x.length)>0))for(let V=0;V<((m=t.children)===null||m===void 0?void 0:m.length);V++){const Y=t.children[V];for(let z=0;z<u.childWidgetElement.length;z++){const te=u.childWidgetElement[z];if(Y.wrapper===te.id){const se=Mr(Y);Y.html=`<div id="${Y.wrapper}">${Y.html}</div>`;const le=yield Pn(se,te,!1,u.data,u.widgetState,u);u.childWidgets.push(le),u.css=u.css+le.css+`#${te.id} { ${Y.css} }`,le.dataChange(Ce=>{var ue;const _e=(ue=Ce?.type)===null||ue===void 0?void 0:ue.characterValue;_e&&(u.childrenData[_e]=Ce)})}}}return yield Uo(l,".widget_container"),u})}function Ur(B){const r={};for(const[t,l]of Object.entries(B))typeof l=="object"&&l!==null&&Array.isArray(l)||(r[t]=l);return r}function Go(B,r){return mt(this,arguments,void 0,function*(t,l,I=!0,A,D,O=null){var x,m;let u=new Nn;u.html=t.html,O&&(u.parentWidget=Ur(O)),u.widgetState=Object.assign({},A),u.widgetType=t.type,u.componentDidMountFunction=t.before_render,u.addEventFunction=t.after_render,u.mountChildWidgetsFunction=t.mount_child,u.customFunctions=t.custom_functions,u.widgetDependenciesData=t.dependency,u.inDevelopment=D!==!1,l.innerHTML="";let G=l;if(G&&(yield u.mount(G),t.widget=u,t.children.length>0&&((x=u.childWidgetElement)===null||x===void 0?void 0:x.length)>0))for(let V=0;V<((m=t.children)===null||m===void 0?void 0:m.length);V++){let Y=t.children[V];for(let z=0;z<u.childWidgetElement.length;z++){let te=u.childWidgetElement[z];if(Y.wrapper===te.id){const se=Mr(Y),le=yield Go(se,te,!1,u.widgetState,D,u);u.childWidgets.push(le),u.css=u.css+le.css+`#${te.id} { ${Y.css} }`,le.dataChange(Ce=>{var ue;let _e=(ue=Ce?.type)===null||ue===void 0?void 0:ue.characterValue;_e&&(u.childrenData[_e]=Ce)})}}}return u})}function Mr(B){return B.html=B.html.replace(/<[^>]*\bclass=["'][^"']*\bwidget_container\b[^"']*["'][^>]*>/g,r=>r.replace(/\bwidget_container\b/g,"").trim()),B.html=B.html.replace(/<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,r=>r.replace(/\btrue\b/g,"false").trim()),B.html=B.html.replace(/<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,r=>r.replace(/\bhover-element\b/g,"").trim()),B.html=B.html.replace(/<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,r=>r.replace(/\bwb-block\b/g,"").trim()),B.html=B.html.replace(/<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,r=>r.replace(/onclick="widgetSelected\(event\)"/g,'onclick=""').replace(/ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,'ondragover=""').replace(/ondrop="_dragService\.dropWidgetElement\(event\)"/g,'ondrop=""').replace(/ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,'ondragstart=""').replace(/ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,'ondragend=""').trim()),B.html=B.html.replace(/<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,r=>r.replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g,"").trim()),B}function ta(B,r){return mt(this,void 0,void 0,function*(){return B&&B.nodeType===1&&B.querySelectorAll(r).forEach(t=>{for(;t.firstChild;)t.parentNode.insertBefore(t.firstChild,t);t.remove()}),B})}function Uo(B,r){return mt(this,void 0,void 0,function*(){const t=B.querySelectorAll(r);for(const l of t){const I=l.parentElement;if(I){for(;l.firstChild;){const A=yield ta(l.firstChild,r);I.insertBefore(A,l)}I.removeChild(l)}}})}function Wr(B){return mt(this,void 0,void 0,function*(){const r=new St;r.typeConnection="the_widget_documentation",r.name="documentationText",r.selectors=["the_documentation_text"];const t=new St;t.typeConnection="the_widget_s_documentation",t.name="documentationBlank",t.selectors=["the_documentation_text","the_documentation_content","the_documentation_language","the_documentation_doc_title","the_documentation_folder","the_documentation_creator_email","the_documentation_created_by","the_documentation_content","the_documentation_type","the_documentation_s_doc_url","the_documentation_s_image_url","the_documentation_s_video_link","the_documentation_auth_type","the_documentation_bearer_token","the_documentation_method","the_documentation_method_url","the_documentation_username","the_documentation_password","the_documentation_s_json_list","the_documentation_api_script","the_documentation_api_body","the_documentation_code_editor","the_documentation_return"];const l=new St;l.typeConnection="the_documentation_s_json_list",l.name="documentationJSON",l.selectors=["the_json_list_key","the_json_list_value"],t.freeschemaQueries=[l];const I=new St;I.conceptIds=[B],I.freeschemaQueries=[r,t],I.inpage=100,I.outputFormat=Ue.y0,yield Ln(I,"").subscribe(A=>mt(this,void 0,void 0,function*(){var D,O,x,m,u,G,V,Y,z,te,se;let le;const Ce=((Y=(V=(G=(u=(m=(x=(O=(D=A?.[0])===null||D===void 0?void 0:D.data)===null||O===void 0?void 0:O.the_widget)===null||x===void 0?void 0:x.the_widget_documentation)===null||m===void 0?void 0:m.data)===null||u===void 0?void 0:u.the_documentation)===null||G===void 0?void 0:G.the_documentation_text)===null||V===void 0?void 0:V.data)===null||Y===void 0?void 0:Y.the_text)||"";Ce&&(le=Ce);const ue=(se=(te=(z=A?.[0])===null||z===void 0?void 0:z.data)===null||te===void 0?void 0:te.the_widget)===null||se===void 0?void 0:se.the_widget_s_documentation;ue?.length&&(le=ue?.map(Oe=>{var je,Se,Ie,Pe,Me,qe,Ke,st,tt,wt,dt,Pt,Bt,Rt,Et,Vt,qt,Ht,yt,Nt,At,Tt,Lt,cn,ln,dn,un,hn,pn,fn,mn;const Ve=(je=Oe?.data)===null||je===void 0?void 0:je.the_documentation,Xt=(Ie=(Se=Ve?.the_documentation_type)===null||Se===void 0?void 0:Se.data)===null||Ie===void 0?void 0:Ie.the_type,En=(Me=(Pe=Ve?.the_documentation_content)===null||Pe===void 0?void 0:Pe.data)===null||Me===void 0?void 0:Me.the_content,On=(Ke=(qe=Ve?.the_documentation_creator_email)===null||qe===void 0?void 0:qe.data)===null||Ke===void 0?void 0:Ke.the_creator_email,Fn=(tt=(st=Ve?.the_documentation_doc_title)===null||st===void 0?void 0:st.data)===null||tt===void 0?void 0:tt.the_doc_title,Gn=(dt=(wt=Ve?.the_documentation_method)===null||wt===void 0?void 0:wt.data)===null||dt===void 0?void 0:dt.the_method,Un=(Bt=(Pt=Ve?.the_documentation_method_url)===null||Pt===void 0?void 0:Pt.data)===null||Bt===void 0?void 0:Bt.the_method_url,Mn=(Et=(Rt=Ve?.the_documentation_bearer_token)===null||Rt===void 0?void 0:Rt.data)===null||Et===void 0?void 0:Et.the_bearer_token,Wn=(qt=(Vt=Ve?.the_documentation_username)===null||Vt===void 0?void 0:Vt.data)===null||qt===void 0?void 0:qt.the_username,et=(yt=(Ht=Ve?.the_documentation_password)===null||Ht===void 0?void 0:Ht.data)===null||yt===void 0?void 0:yt.the_password,Ot=(At=(Nt=Ve?.the_documentation_auth_type)===null||Nt===void 0?void 0:Nt.data)===null||At===void 0?void 0:At.the_auth_type,We=Ve?.the_documentation_s_json_list,jn=(Lt=(Tt=Ve?.the_documentation_api_script)===null||Tt===void 0?void 0:Tt.data)===null||Lt===void 0?void 0:Lt.the_api_script,$t=(ln=(cn=Ve?.the_documentation_api_body)===null||cn===void 0?void 0:cn.data)===null||ln===void 0?void 0:ln.the_api_body,qo=(un=(dn=Ve?.the_documentation_language)===null||dn===void 0?void 0:dn.data)===null||un===void 0?void 0:un.the_language,Ho=(pn=(hn=Ve?.the_documentation_return)===null||hn===void 0?void 0:hn.data)===null||pn===void 0?void 0:pn.the_return,Kt=(mn=(fn=Ve?.the_documentation_code_editor)===null||fn===void 0?void 0:fn.data)===null||mn===void 0?void 0:mn.the_code_editor,wn=Ve?.the_documentation_s_doc_url,it=Ve?.the_documentation_s_image_url,gt=Ve?.the_documentation_s_video_link;let at={type:Xt,content:En,creatorEmail:On,title:Fn};if(Xt==="blank")at=Object.assign({},at);else if(Xt==="api"){const ut=[];We?.length&&We?.forEach(nt=>{var Ct,$o,zo,Jo,Qo,Yo,Xo,Ko;ut.push({key:(Jo=(zo=($o=(Ct=nt?.data)===null||Ct===void 0?void 0:Ct.the_json_list)===null||$o===void 0?void 0:$o.the_json_list_key)===null||zo===void 0?void 0:zo.data)===null||Jo===void 0?void 0:Jo.the_key,value:(Ko=(Xo=(Yo=(Qo=nt?.data)===null||Qo===void 0?void 0:Qo.the_json_list)===null||Yo===void 0?void 0:Yo.the_json_list_value)===null||Xo===void 0?void 0:Xo.data)===null||Ko===void 0?void 0:Ko.the_value})}),at=Object.assign(Object.assign({},at),{method:Gn,methodURL:Un,authType:Ot,username:Wn,password:et,bearerToken:Mn,json:ut,script:jn,body:$t})}else Xt==="function"&&(at=Object.assign(Object.assign({},at),{language:qo,return:Ho,codeEditor:Kt}));const vt=[],bt=[],_t=[];return it?.length&&it?.forEach(ut=>{var nt;vt.push((nt=ut?.data)===null||nt===void 0?void 0:nt.the_image_url)}),gt?.length&&gt?.forEach(ut=>{var nt;bt.push((nt=ut?.data)===null||nt===void 0?void 0:nt.the_video_link)}),wn?.length&&wn?.forEach(ut=>{var nt;_t.push((nt=ut.data)===null||nt===void 0?void 0:nt.the_doc_url)}),at=Object.assign(Object.assign({},at),{imageList:vt,linkList:_t,videoList:bt}),at})),yield function(_e){return mt(this,void 0,void 0,function*(){document.getElementById(_e).showModal()})}("widget-documentation-preview-modal"),function(_e,Oe){mt(this,void 0,void 0,function*(){const je=document.getElementById("documentation-view");if(o.B.DOCUMENTATION_WIDGET!=0)return void(yield eo(o.B.DOCUMENTATION_WIDGET,je,{currentWidgetId:Oe}));const Se=document.getElementById("documentation-preview");Se.innerHTML="",_e&&_e?.length&&typeof _e!="string"?_e?.forEach(Ie=>{var Pe,Me,qe,Ke;const st=document.createElement("h3");let tt="";switch(Ie?.type){case"api":tt="API";break;case"function":tt="Functions and Classes";break;case"imgAndLink":tt="Images and Links";break;default:tt=""}st.innerHTML=`
        ${Ie?.title} ${tt?"("+tt+")":""}
      `,Se?.appendChild(st);const wt=document.createElement("div");wt.classList.add("widget-doc-content"),Ie?.content&&(wt.innerHTML=Ie.content,Se?.appendChild(wt));const dt=document.createElement("div");if(dt.classList.add("widget-doc-section"),Ie.type==="api"){let yt="";yt=Ie.authType==="basicAuth"?`
            <p>username: <code>${Ie?.username}</code></p>
            <p>password: <code>${Ie?.password}</code></p>
          `:Ie.authType==="bearerToken"?`
          <h6>Token: <code>${Ie?.bearerToken}</code></h6>
          `:"None";const Nt=Ie.json.map(Lt=>`${Lt?.key}: ${Lt?.value}`).join(", "),At=document.createElement("pre");At.textContent=Nt,dt.innerHTML=`
          <div class="pv-3">
            <h6>Method Type: <code>${Ie?.method.toUpperCase()}</code></h6>
            <h6>Endpoint: <code>${Ie?.methodURL}</code></h6>
          </div>
          <div class="pv-3">
            <h6>Auth Type: <code>${((Pe=Ie?.authType)===null||Pe===void 0?void 0:Pe.toUpperCase())||""}</code></h6>
            ${yt}
          </div>
          <div class="pv-3">
            <h6>JSON</h6>
            <code class="pre-wrapper" id="json-list-pre"></code>
          </div>
          <div class="pv-3">
            <h6>Body</h6>
            ${Ie.body}
          </div>
          <div class="pv-3">
            <h6>Scripts</h6>
            ${Ie.script}
          </div>
        `;const Tt=dt.querySelector("#json-list-pre");Tt&&(Tt.appendChild(At),Tt.removeAttribute("id"))}else if(Ie.type==="function"){const yt=document.createElement("pre");yt.textContent=Ie?.codeEditor;const Nt=document.createElement("pre");Nt.textContent=Ie?.return,dt.innerHTML=`
          <div class="mv-3">
            <h6>Parameter</h6>
            <p>Language: ${Ie?.language}</p>
            <code class="pre-wrapper" id="editor-pre"></pre></code>
            <h6>Returns</h6>
            <code class="pre-wrapper" id="return-pre"></code>
          </div>
        `;const At=dt.querySelector("#editor-pre");At&&(At.appendChild(yt),At.removeAttribute("id"));const Tt=dt.querySelector("#return-pre");Tt&&(Tt.appendChild(Nt),Tt.removeAttribute("id"))}const Pt=document.createElement("div");Pt.classList.add("mv-3");const Bt=(Me=Ie?.linkList)===null||Me===void 0?void 0:Me.map(yt=>`
            <p>${yt}</p>
          `).join(""),Rt=(qe=Ie?.imageList)===null||qe===void 0?void 0:qe.map(yt=>`
          <img src="${yt}">
        `).join(""),Et=(Ke=Ie?.videoList)===null||Ke===void 0?void 0:Ke.map(yt=>`
            <iframe width="560" height="315" src="${yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `).join(""),Vt=Bt?.length?`
          <div class="mv-3">
          <h6>Web links</h6>
          ${Bt}
          </div>
        `:"",qt=Rt?.length?`
          <h6>Attachments</h6>
          <div class="documentation-attachments">
            ${Rt}
          </div>
        `:"",Ht=Et?.length?`
            <h6>Videos</h6>
            <div class="documentation-attachments">
              ${Et}
            </div>
            `:"";Pt.innerHTML=`
        <div class="mv-3">
          ${Vt}
          ${qt}
          ${Ht}
        </div>
        <p class="documentation-creator">- added by: <span>${Ie?.creatorEmail}</span></p>
      `,dt?.appendChild(Pt),Se?.appendChild(dt)}):_e!==void 0&&(Se.innerHTML=_e)})}(le,B)}))})}function jr(B){return mt(this,void 0,void 0,function*(){const r=document.getElementById(B),t=r?.querySelector("form");t?.reset(),r?.close()})}var na=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function no(B){return na(this,arguments,void 0,function*(r,t=null,l="",I={concepts:[],connections:[]}){var A,D,O,x;if(Ge)try{const V=yield Je("CreateData",{json:r,ofConcept:t,typeConcept:l,actions:I});return!((D=(A=V?.actions)===null||A===void 0?void 0:A.concepts)===null||D===void 0)&&D.length&&(I.concepts=JSON.parse(JSON.stringify(V.actions.concepts))),!((x=(O=V?.actions)===null||O===void 0?void 0:O.connections)===null||x===void 0)&&x.length&&(I.connections=JSON.parse(JSON.stringify(V.actions.connections))),V.data}catch(V){Ze(V)}let m=999,u=999,G=(0,$.o)();for(const V in r){let Y=oa(V);if(typeof r[V]!="string"&&typeof r[V]!="number")if(t==null||t.id==0)G=yield(0,Te.k)(Y,"",!0,m,4,u,void 0,I),Array.isArray(r[V])&&(Y=Vr(Y)),yield no(r[V],G,Y,I);else{Array.isArray(r[V])&&(Y=qr(Y));let z=qr(V),te=yield(0,Te.k)(Y,"",!0,m,4,u,void 0,I);G=te;let se=Hr(l,z),le=yield(0,$e.$)(se,u,m,m,I);yield(0,Gt.F)(t.id,te.id,le.id,1e3,le.characterValue,m,I),Array.isArray(r[V])&&(Y=Vr(Y)),yield no(r[V],te,Y,I)}else{let z=Hr(l,V),te=yield(0,$e.$)(z,u,m,m,I),se=yield(0,Te.k)(V,r[V].toString(),!1,m,4,u,void 0,I);t!=null&&(yield(0,Gt.F)(t.id,se.id,te.id,1e3,z,m,I))}}return G})}function oa(B){return B.startsWith("the_")?B:"the_"+B}function Vr(B){return B.endsWith("_s")?B:B+"_s"}function qr(B){return B.replace(/_s$/,"")}const ia=B=>/^[+-]?\d+(\.\d+)?$/.test(B);function Hr(B,r){return ia(r)?B+"_":B+"_"+function(t){return t.startsWith("the_")?t.slice(4):t}(r)}class $r{constructor(){this.prototype="",this.required=[],this.optional=[],this.field="string",this.childPrototypes=[],this.isCompositional=!1,this.options=[],this.isQueryType=!1,this.querySelector=null,this.concepts=[],this.connections=[],this.addedConcepts=[],this.addedConnections=[]}}function Mt(B,r){if(Array.isArray(B)&&Array.isArray(r))for(let t=0;t<r.length;t++)B.push(r[t]);return B}var sn=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Mo(B){return sn(this,arguments,void 0,function*(r,t=null){let l=[],I=[],A=[],D=(0,$.o)();try{t==null&&(t=new Po,yield t.initialize());let O=[];if(r.isCompositional){if(D=yield function(u,G,V,Y){return sn(this,void 0,void 0,function*(){let z=(0,$.o)(),te=yield Y.MakeTheInstanceConceptLocal("the_composition","",!0,999,999,999),se=yield Y.MakeTheTypeConceptLocal("the_composition_type",999,999,999),le=yield Y.MakeTheTypeConceptLocal(u,999,999,999),Ce=yield Y.CreateTheConnectionLocal(te.id,le.id,se.id,1e3,"the_composition_type");return z=te,G.push(se),G.push(le),V.push(Ce),z})}(r.prototype,l,I,t),r.isQueryType){let u=yield function(V,Y,z){return sn(this,void 0,void 0,function*(){let te=[],se=[],le=function(){return"the_composition_filter_type"}(0,!0),Ce=function(){return"the_composition_selector"}(0,!0),ue=yield z.MakeTheTypeConceptLocal(le,999,999,999),_e=yield z.MakeTheTypeConceptLocal(Ce,999,999,999);if(V!=null){let Oe=yield z.MakeTheTypeConceptLocal(V.selector,999,999,999);te.push(Oe);let je=yield z.MakeTheTypeConceptLocal(V.filterType,999,999,999);te.push(Oe),te.push(je);let Se=yield z.CreateTheConnectionLocal(Y.id,Oe.id,_e.id,1e3,Ce,999);se.push(Se);let Ie=yield z.CreateTheConnectionLocal(Y.id,je.id,ue.id,1e3,le,999);se.push(Ie)}return{concepts:te,connections:se}})}(r.querySelector,D,t),G=u.concepts;Mt(A,u.connections),Mt(l,G)}if(r.options.length>0){let u=yield function(V,Y,z){return sn(this,void 0,void 0,function*(){let te=[],se=[],le=function(){return"the_composition_s_option"}(0,!0),Ce=yield z.MakeTheTypeConceptLocal(le,999,999,999);for(let ue=0;ue<V.length;ue++){let _e=V[ue].type,Oe=V[ue].value,je=yield z.MakeTheInstanceConceptLocal(_e,Oe,!1,999,999,999);te.push(je);let Se=yield z.CreateTheConnectionLocal(Y.id,je.id,Ce.id,1e3,le,999);se.push(Se)}return{concepts:te,connections:se}})}(r.options,D,t),G=u.concepts;Mt(A,u.connections),Mt(l,G)}}else D=yield function(u,G){return sn(this,void 0,void 0,function*(){let V=yield(0,me.A)(5124),Y=yield G.MakeTheTypeConceptLocal(u,999,999,999);return yield function(te,se,le,Ce){return sn(this,void 0,void 0,function*(){let ue=yield Ce.CreateTheConceptLocal("",se.characterValue,999,te.id,se.id,4,!1);return ue.characterValue=se.characterValue,ue.typeCharacter=se.characterValue,ue.isComposition=!0,ue.type=se,ue})}(V,Y,0,G)})}(r.prototype,t),A=yield Jr(r.required,D,l,t,!0),O=yield Jr(r.optional,D,l,t),l.push(D);let x=zr(D,!0,!0),m=yield t.MakeTheTypeConceptLocal(x,999,999,999);if(l.push(m),r.childPrototypes.length>0)for(let u=0;u<r.childPrototypes.length;u++){let G=yield Mo(r.childPrototypes[u]),V=G.mainConcept,Y=G.connections,z=G.concepts,te=yield t.CreateTheConnectionLocal(D.id,V.id,m.id,1e3,x,999);A.push(te),Mt(A,Y),Mt(l,z),l.push(V)}Mt(A,O),Mt(A,I),Mt(l,r.addedConcepts),Mt(A,r.addedConnections),r.concepts=l,r.connections=A}catch{t?.rollbackTransaction()}return{concepts:l,connections:A,mainConcept:D}})}function zr(B,r=!0,t=!1){var l;let I="the_prototype_of_"+((l=B.type)===null||l===void 0?void 0:l.characterValue);return I+=r?"_requires":"_optional",t&&(I+="_the_composition"),I}function Jr(B,r,t,l){return sn(this,arguments,void 0,function*(I,A,D,O,x=!1,m=!1){let u=[],G=[],V=zr(A,x,m),Y=yield O.MakeTheTypeConceptLocal(V,999,999,999);D.push(Y);for(let z=0;z<I.length;z++){let te=yield O.MakeTheTypeConceptLocal(I[z],999,999,999);u.push(te)}for(let z=0;z<u.length;z++){let te=yield O.CreateTheConnectionLocal(A.id,u[z].id,Y.id,1e3,V,999);G.push(te)}for(let z=0;z<u.length;z++)D.push(u[z]);return G})}var ra=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,[])).next())})};function Wo(B){return ra(this,void 0,void 0,function*(){let r;try{const t=yield fetch(o.B.GetCachedImage(B),{method:"GET"});return t.ok?r=t.body:(0,p.ry)(t),r}catch{throw r}})}var sa=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};function Qr(B){return sa(this,arguments,void 0,function*(r,t="normal"){let l,I=r.split("/").pop();if(t=="small"){let A=I?.split(".");A&&(I=A[0]+"_small."+A[1])}return I&&(l=yield Wo(I)),l})}function Yr(B,r="normal"){let t=B;try{if(B){let l=B.split("/").pop();if(r=="small"){let I=l?.split(".");I&&(l=I[0]+"_small."+I[1])}l&&(t=o.B.GetCachedImage(l))}}catch{}return t}var Ge,ft=function(B,r,t,l){return new(t||(t=Promise))(function(I,A){function D(m){try{x(l.next(m))}catch(u){A(u)}}function O(m){try{x(l.throw(m))}catch(u){A(u)}}function x(m){var u;m.done?I(m.value):(u=m.value,u instanceof t?u:new t(function(G){G(u)})).then(D,O)}x((l=l.apply(B,r||[])).next())})};const aa=Date.now().toString(36)+Math.random().toString(36).substring(2);let jo=[],an=[],Vo=!1;function Xr(B){Vo=B}function Bn(B="",r){Qe.b.BearerAccessToken=B,Ge&&Je("updateAccessToken",{accessToken:B,session:Qe.b.sessionId})}function Kr(){return ft(this,arguments,void 0,function*(B="",r="",t="",l="",I=!0,A="",D=void 0,O={},x={},m=""){var u,G,V;try{o.B.BASE_URL=B,o.B.AI_URL=r,o.B.NODE_URL=l,o.B.BASE_APPLICATION=A,o.B.LOG_SERVER=(u=x.logserver)!==null&&u!==void 0?u:"https://logdev.freeschema.com",o.B.ACCESS_CONTROL_BASE_URL=m;const Y=(t??"").trim();Y&&Bn(Y),yield Qe.b.hydrateProfile(),!Y&&Qe.b.BearerAccessToken&&Bn(Qe.b.BearerAccessToken);let z=Math.floor(1e8*Math.random());o.B.setRandomizer(z),o.B.isPwa=(G=x.isPwa)!==null&&G!==void 0&&G,So.B.setValue("enableCache",(V=x.enableCache)===null||V===void 0||V);const te={logApplication:!1,logPackage:!1,accessTracker:!1,isTest:!1,accessControl:!1};if(o.B.FLAGS=te,o.B.FLAGS=Object.assign(Object.assign({},te),O),function(se){const le=ge.V.logfunction("initializeFlags",arguments);try{return se.logApplication&&(xo.initialize(),ge.V.logApplicationActivationStatus=!0),se.logPackage&&(ge.V.logPackageActivationStatus=!0),se.accessTracker&&(Tn.J.activateStatus=!0),se.isTest&&(w.B.isDataLoaded=!0,w.B.isCharacterLoaded=!0,w.B.isTypeLoaded=!0,w.B.isLocalDataLoaded=!0,w.B.isLocalTypeLoaded=!0,w.B.isLocalCharacterLoaded=!0,w.B.isConnectionLoaded=!0,w.B.isConnectionTypeLoaded=!0,w.B.isLocalConnectionLoaded=!0),ge.V.logUpdate(le),se}catch(Ce){throw(0,p.ey)(le,"initializeFlags",Ce),Ce}}(o.B.FLAGS),o.B.FLAGS&&o.B.FLAGS.accessControl&&o.B.ACCESS_CONTROL_BASE_URL,!("serviceWorker"in navigator))return void(yield Rn());if(yield function(){return ft(this,void 0,void 0,function*(){var se;let le=o.B.BASE_APPLICATION+"_cacheServers",Ce=o.B.BASE_APPLICATION+"_config",ue=o.B.BASE_APPLICATION+"_session",_e=sessionStorage.getItem(le),Oe=sessionStorage.getItem(Ce),je=(se=sessionStorage.getItem(ue))!==null&&se!==void 0?se:"999",Se=parseInt(je);_e!==void 0&&_e!=="undefined"||(o.B.NODE_CACHE_URL=o.B.BASE_URL),_e=JSON.parse(_e);const Ie=JSON.parse(Oe);function Pe(){return ft(this,arguments,void 0,function*(Me=!0){var qe;let Ke;try{let st=(qe=o.B.BASE_APPLICATION)!==null&&qe!==void 0?qe:"boomconsole";if(Ke=yield fetch(o.B.getAppConfig()+"?application="+st,{method:"POST"}),!Ke.ok)throw new Error("Failed to sync data to the server.");const tt=yield Ke.json();tt.success&&(sessionStorage.setItem(le,JSON.stringify(tt.servers)),sessionStorage.setItem(Ce,JSON.stringify(tt.config)),Me&&(sessionStorage.setItem(ue,tt.session),Qe.b.setSession(tt.session)),tt.servers?o.B.NODE_CACHE_URL=tt.servers[0]:o.B.NODE_CACHE_URL=o.B.BASE_URL,tt.config&&(o.B.DOCUMENTATION_WIDGET=tt.config.documentationWidget))}catch{}})}_e&&Ie&&Ie.documentationWidget&&Se!=999?(Array.isArray(_e)&&_e.length?o.B.NODE_CACHE_URL=_e[0]:o.B.NODE_CACHE_URL=o.B.BASE_URL,Qe.b.setSession(Se),o.B.DOCUMENTATION_WIDGET=Ie.documentationWidget,Pe(!1)):yield Pe(),navigator.serviceWorker&&navigator.serviceWorker.controller&&Je("SESSION_DATA",{type:"SESSION_DATA",data:o.B.NODE_CACHE_URL,session:Qe.b.sessionId})})}(),function(){navigator.serviceWorker.addEventListener("message",se=>ft(this,void 0,void 0,function*(){var le,Ce,ue,_e;try{if(se.data&&se.data.type==="API_401"){const{requestDetails:Oe}=se.data,je={method:Oe.method,headers:new Headers(Oe.headers),body:Oe.body},Se=yield fetch(Oe.url,je),Ie=yield Se?.json();(Ce=(le=navigator?.serviceWorker)===null||le===void 0?void 0:le.controller)===null||Ce===void 0||Ce.postMessage({type:"API_RESPONSE",messageId:se.data.messageId,response:new Response(Ie,{status:Se.status,statusText:Se.statusText,headers:Se.headers})})}}catch{(_e=(ue=navigator?.serviceWorker)===null||ue===void 0?void 0:ue.controller)===null||_e===void 0||_e.postMessage({type:"API_RESPONSE",messageId:se.data.messageId})}}))}(),function(){pr.x.addEventListener("message",se=>ft(this,void 0,void 0,function*(){const{type:le,payload:Ce}=se.data;if(!le)return;let ue={success:!1,data:void 0};Zr[le]&&(ue=yield Zr[le](Ce))}))}(),D&&D.activate&&D.manual)yield new Promise((se,le)=>{navigator.serviceWorker.ready.then(Ce=>ft(this,void 0,void 0,function*(){Ge=Ce.active,yield In(),se("done")})).catch(Ce=>{le(Ce)}).finally(()=>{}),setTimeout(()=>le("Timeout ready"),3e4)});else if(D&&D?.activate)try{yield function(se){var le=arguments;return ft(this,void 0,void 0,function*(){const Ce=ge.V.logfunction("handleRegisterServiceWorker",le);yield new Promise((ue,_e)=>{var Oe,je;let Se=!1;navigator.serviceWorker.register((Oe=se.pathToSW)!==null&&Oe!==void 0?Oe:"./serviceWorker.bundle.js",{scope:(je=se.scope)!==null&&je!==void 0?je:"/"}).then(Ie=>ft(this,void 0,void 0,function*(){setInterval(()=>{an.length&&oo()},2e3),Ie.onupdatefound=()=>{const Pe=Ie.installing;Pe&&(Pe.onstatechange=()=>ft(this,void 0,void 0,function*(){Pe.state==="installing"&&(Ge=void 0),Pe.state!=="activated"&&Pe.state!=="redundant"||!navigator.serviceWorker.controller||(Ge=Pe,setTimeout(()=>{oo()},5e3),yield In(),Se=!0,oo(),ue())}))},Ie.addEventListener("controllerchange",()=>ft(this,void 0,void 0,function*(){navigator.serviceWorker.controller&&(Ge=navigator.serviceWorker.controller,yield In())})),(Ie.installing||Ie.waiting||Ie.active)&&Ie.addEventListener("statechange",Pe=>ft(this,void 0,void 0,function*(){var Me;((Me=Pe?.target)===null||Me===void 0?void 0:Me.state)==="activating"&&(Ge=navigator.serviceWorker.controller,yield In())})),Ie.active?(Ge=Ie.active,yield In(),oo(),ue()):setTimeout(()=>{Se||_e("Not Completed Initialization")},1e4)})).catch(Ie=>ft(this,void 0,void 0,function*(){yield Rn(),_e(Ie),(0,p.ey)(Ce,"handleRegisterServiceWorker",Ie)}))})})}(D)}catch{yield Rn()}else yield Rn();return!0}catch{yield Rn()}})}function Je(B,r){return ft(this,arguments,void 0,function*(t,l,I=0){let A=!1;const D=Math.random().toString(36).substring(2);l.messageId=D,l.TABID=aa;const O=JSON.parse(JSON.stringify(l));let x;return t!="checkProcess"&&I==0&&(x=setInterval(()=>ft(this,void 0,void 0,function*(){if(!A&&!(yield function(m){return ft(this,void 0,void 0,function*(){var u;try{const G=yield Je("checkProcess",{checkMessageId:m});if(!((u=G?.data)===null||u===void 0)&&u.processing)return!0}catch{return!1}})}(D))&&(clearInterval(x),!A&&I==0&&t!="checkProcess"))return yield Je(t,l,I+1)}),2e3)),new Promise((m,u)=>{if(navigator.serviceWorker.controller,navigator.serviceWorker.controller||Ge){const G=V=>{var Y,z,te,se,le,Ce;((Y=V?.data)===null||Y===void 0?void 0:Y.messageId)==D&&(A=!0,clearInterval(x),V.data.success||(((z=V?.data)===null||z===void 0?void 0:z.status)==401?u((0,p.ry)(new Response("Unauthorized",{status:401,statusText:(te=V?.data)===null||te===void 0?void 0:te.statusText}))):((se=V?.data)===null||se===void 0?void 0:se.status)==500?u((0,p.Mb)(new Response("Internal Server Error",{status:500,statusText:(le=V?.data)===null||le===void 0?void 0:le.statusText}))):u(`Failed to handle action ${t} ${JSON.stringify(l)}, Response: ${JSON.stringify(V.data)}`)),!((Ce=V.data)===null||Ce===void 0)&&Ce.actions&&(l.actions=JSON.parse(JSON.stringify(V.data.actions))),m(V.data),navigator.serviceWorker.removeEventListener("message",G))};if(navigator.serviceWorker.addEventListener("message",G),navigator.serviceWorker.controller)navigator.serviceWorker.controller.postMessage({type:t,payload:O});else if(Ge)try{Ge.postMessage({type:t,payload:O})}catch{Ge.postMessage({type:t,payload:O})}else setTimeout(()=>{Ge?Ge?.postMessage({type:t,payload:l}):(clearInterval(x),u("Service worker not ready"))},3e4);setTimeout(()=>{clearInterval(x),u(`No response from service worker after timeout: ${t}`),navigator.serviceWorker.removeEventListener("message",G)},21e4)}else an.push({message:{type:t,payload:O}}),t=="init"&&(clearInterval(x),m(null))})})}const Zr={GetLinkListener:B=>ft(void 0,void 0,void 0,function*(){const r=jo.find(t=>t.listenerId==B.listenerId);return r?.callback(B.data),{success:!0}}),dispatchEvent:B=>ft(void 0,void 0,void 0,function*(){if(Ge){let r=new CustomEvent(B.id||"",B.data);dispatchEvent(r)}return{success:!0}}),checkInit:B=>ft(void 0,void 0,void 0,function*(){return navigator.serviceWorker.controller&&(Ge=navigator.serviceWorker.controller),yield In(),{success:!0}})};function Rn(){return ft(this,void 0,void 0,function*(){yield(0,Ws.A)(),new Date().getTime(),yield Promise.all([(0,N.A)().then(()=>{}),(0,hr.Ay)().then(()=>{}),(0,ur.a)().then(()=>{w.B.isConnectionLoaded=!0,w.B.isConnectionTypeLoaded=!0}),(0,ur.p)().then(()=>{w.B.isLocalConnectionLoaded=!0}),(0,hr.xd)().catch(B=>{throw B}),i.i.init(),f.a.init()]).catch(B=>{})})}function es(B,r={}){if(Ge||typeof window<"u"){let t=new CustomEvent(`${B}`,r);dispatchEvent(t)}else pr.x.postMessage({type:"dispatchEvent",payload:{id:B,data:r}})}function oo(){return ft(this,void 0,void 0,function*(){const B=an.find(r=>{var t;return((t=r?.message)===null||t===void 0?void 0:t.type)=="init"});if(B){const r=an.indexOf(B);r>-1&&an.splice(r,1),yield Je(B?.type,B?.payload)}for(;an.length>0;){const{message:r,resolve:t,reject:l}=an.shift();yield Je(r.type,r.payload)}})}const Ze=B=>{if(B instanceof fe.z)throw B};function In(){return ft(this,void 0,void 0,function*(){yield Je("init",{url:o.B.BASE_URL,aiurl:o.B.AI_URL,accessToken:Qe.b.BearerAccessToken,nodeUrl:o.B.NODE_URL,enableAi:!1,applicationName:o.B.BASE_APPLICATION,flags:o.B.FLAGS,accessControlUrl:o.B.ACCESS_CONTROL_BASE_URL})})}},8444:(J,P,v)=>{v.d(P,{b:()=>o});var _=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};const N="ccs_profile",i="AES-GCM";function f(c){return _(this,void 0,void 0,function*(){const p=new TextEncoder().encode("mftsccs-browser-v1"),C=yield crypto.subtle.importKey("raw",p.buffer,"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:c.buffer,iterations:1e5,hash:"SHA-256"},C,{name:i,length:256},!1,["encrypt","decrypt"])})}function w(c){return _(this,void 0,void 0,function*(){const p=new TextEncoder,C=crypto.getRandomValues(new Uint8Array(16)),T=crypto.getRandomValues(new Uint8Array(12)),a=yield f(C),s=p.encode(JSON.stringify(c)),n=yield crypto.subtle.encrypt({name:i,iv:T.buffer},a,s.buffer),d=new Uint8Array(C.length+T.length+new Uint8Array(n).length);d.set(C,0),d.set(T,C.length),d.set(new Uint8Array(n),C.length+T.length);try{localStorage.setItem(N,function(g){let y="";for(let b=0;b<g.length;b++)y+=String.fromCharCode(g[b]);return btoa(y)}(d))}catch{}})}function k(){return _(this,void 0,void 0,function*(){const c=localStorage.getItem(N);if(!c)return null;let p;try{if(p=function(C){const T=atob(C),a=new Uint8Array(T.length);for(let s=0;s<T.length;s++)a[s]=T.charCodeAt(s);return a}(c),p.length<29)throw new Error("too short")}catch{return h(),null}try{const C=p.slice(0,16),T=p.slice(16,28),a=p.slice(28),s=yield f(C),n=yield crypto.subtle.decrypt({name:i,iv:T.buffer},s,a.buffer);return JSON.parse(new TextDecoder().decode(n))}catch{return h(),null}})}function h(){localStorage.removeItem(N)}var e=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};class o{static setSession(p){p&&(o.sessionId=p)}static saveUserProfile(p){return e(this,void 0,void 0,function*(){var C,T,a,s,n,d,g,y,b,L,S,E,R,U,F,M,W;try{const j=(C=p?.data)!==null&&C!==void 0?C:p,q=(T=j?.token)!==null&&T!==void 0?T:"",X=(s=(a=j?.refreshtoken)!==null&&a!==void 0?a:j?.refreshToken)!==null&&s!==void 0?s:"";o.BearerAccessToken=q,o.refreshToken=X;const Z={token:q,refreshToken:X,email:(n=j?.email)!==null&&n!==void 0?n:"",userId:(L=(b=(y=(g=(d=j?.entity)===null||d===void 0?void 0:d[0])===null||g===void 0?void 0:g.userId)!==null&&y!==void 0?y:j?.userId)!==null&&b!==void 0?b:j?.theUserId)!==null&&L!==void 0?L:0,userConcept:(S=j?.userConcept)!==null&&S!==void 0?S:0,entityId:(U=(R=(E=j?.entityDetails)===null||E===void 0?void 0:E.id)!==null&&R!==void 0?R:j?.entityId)!==null&&U!==void 0?U:0,roles:(F=j?.roles)!==null&&F!==void 0?F:[],amcode:(M=j?.amcode)!==null&&M!==void 0?M:btoa(JSON.stringify((W=j?.roles)!==null&&W!==void 0?W:[]))};return o.profileCache=Z,yield w(Z),!0}catch{return!1}})}static hydrateProfile(){return e(this,void 0,void 0,function*(){var p,C;if(!o.profileCache){const T=yield k();T&&(o.profileCache=T,o.BearerAccessToken||(o.BearerAccessToken=(p=T.token)!==null&&p!==void 0?p:""),o.refreshToken||(o.refreshToken=(C=T.refreshToken)!==null&&C!==void 0?C:""))}})}static logout(){o.BearerAccessToken="",o.refreshToken="",o.profileCache=null,h()}}o.BearerAccessToken="",o.refreshToken="",o.sessionId=998,o.profileCache=null},8500:(J,P,v)=>{P.__esModule=!0,P.isComment=P.isCombinator=P.isClassName=P.isAttribute=void 0,P.isContainer=function(y){return!(!f(y)||!y.walk)},P.isIdentifier=void 0,P.isNamespace=function(y){return k(y)||n(y)},P.isNesting=void 0,P.isNode=f,P.isPseudo=void 0,P.isPseudoClass=function(y){return C(y)&&!g(y)},P.isPseudoElement=g,P.isUniversal=P.isTag=P.isString=P.isSelector=P.isRoot=void 0;var _,N=v(1581),i=((_={})[N.ATTRIBUTE]=!0,_[N.CLASS]=!0,_[N.COMBINATOR]=!0,_[N.COMMENT]=!0,_[N.ID]=!0,_[N.NESTING]=!0,_[N.PSEUDO]=!0,_[N.ROOT]=!0,_[N.SELECTOR]=!0,_[N.STRING]=!0,_[N.TAG]=!0,_[N.UNIVERSAL]=!0,_);function f(y){return typeof y=="object"&&i[y.type]}function w(y,b){return f(b)&&b.type===y}var k=w.bind(null,N.ATTRIBUTE);P.isAttribute=k;var h=w.bind(null,N.CLASS);P.isClassName=h;var e=w.bind(null,N.COMBINATOR);P.isCombinator=e;var o=w.bind(null,N.COMMENT);P.isComment=o;var c=w.bind(null,N.ID);P.isIdentifier=c;var p=w.bind(null,N.NESTING);P.isNesting=p;var C=w.bind(null,N.PSEUDO);P.isPseudo=C;var T=w.bind(null,N.ROOT);P.isRoot=T;var a=w.bind(null,N.SELECTOR);P.isSelector=a;var s=w.bind(null,N.STRING);P.isString=s;var n=w.bind(null,N.TAG);P.isTag=n;var d=w.bind(null,N.UNIVERSAL);function g(y){return C(y)&&y.value&&(y.value.startsWith("::")||y.value.toLowerCase()===":before"||y.value.toLowerCase()===":after"||y.value.toLowerCase()===":first-letter"||y.value.toLowerCase()===":first-line")}P.isUniversal=d},8545:(J,P,v)=>{v.d(P,{$S:()=>e,L0:()=>o,WC:()=>c});var _=v(838),N=v(4647),i=v(8429),f=v(5760);v(1317);var w=v(6757),k=v(9858),h=function(p,C,T,a){return new(T||(T=Promise))(function(s,n){function d(b){try{y(a.next(b))}catch(L){n(L)}}function g(b){try{y(a.throw(b))}catch(L){n(L)}}function y(b){var L;b.done?s(b.value):(L=b.value,L instanceof T?L:new T(function(S){S(L)})).then(d,g)}y((a=a.apply(p,C||[])).next())})};function e(p,C){var T=arguments;return h(this,void 0,void 0,function*(){const a=i.Logger.logfunction("DeleteConnectionByType",T)||{};if(i.serviceWorker){a.serviceWorker=!0;try{const b=yield(0,i.sendMessage)("DeleteConnectionByType",{id:p,linker:C});return i.Logger.logUpdate(a),b.data}catch(b){(0,f.ey)(a,"DeleteConnectionByType",b),(0,i.handleServiceWorkerException)(b)}}let s=yield(0,_.l)(p);for(let b=0;b<s.length;b++)i.ConnectionData.AddConnection(s[b]);let n=yield i.ConnectionData.GetConnectionsOfConcept(p),d=yield(0,i.GetConceptByCharacter)(C),g=[];for(let b=0;b<n.length;b++)n[b].typeId==d.id&&g.push(n[b]);let y=!1;for(let b=0;b<g.length;b++)y=yield(0,i.DeleteConnectionById)(g[b].id);return i.Logger.logUpdate(a),y})}function o(p,C){var T=arguments;return h(this,void 0,void 0,function*(){const a=i.Logger.logfunction("DeleteConnectionByTypeBulk",T)||{};if(i.serviceWorker){a.serviceWorker=!0;try{const y=yield(0,i.sendMessage)("DeleteConnectionByTypeBulk",{id:p,linkers:C});return i.Logger.logUpdate(a),y.data}catch(y){(0,f.ey)(a,"DeleteConnectionByTypeBulk",y),(0,i.handleServiceWorkerException)(y)}}let s=yield(0,_.l)(p);for(let y=0;y<s.length;y++)i.ConnectionData.AddConnection(s[y]);let n=yield i.ConnectionData.GetConnectionsOfConcept(p),d=[];d=yield(0,w.Hi)(C);let g=[];for(let y=0;y<n.length;y++)for(let b=0;b<d.length;b++)n[y].typeId==d[b].id&&g.push(n[y].id);return i.Logger.logUpdate(a),yield(0,k.E)(g)})}function c(p,C){return h(this,arguments,void 0,function*(T,a,s=!1){if(i.serviceWorker)try{return(yield(0,i.sendMessage)("GetAllTheConnectionsByTypeAndOfTheConcept",{id:T,linker:a,reverse:s})).data}catch(d){(0,i.handleServiceWorkerException)(d)}let n=[];if(s){let d=yield(0,N.W)(T),g=yield(0,i.MakeTheTypeConceptApi)(a,999);for(let y=0;y<d.length;y++)d[y].typeId==g.id&&n.push(d[y])}else{let d=yield(0,_.l)(T);for(let b=0;b<d.length;b++)i.ConnectionData.AddConnection(d[b]);let g=yield i.ConnectionData.GetConnectionsOfConcept(T),y=yield(0,i.GetConceptByCharacter)(a);for(let b=0;b<g.length;b++)g[b].typeId==y.id&&n.push(g[b])}return n})}},8552:(J,P,v)=>{v.d(P,{f:()=>k});var _=v(7154),N=v(1549),i=v(8429),f=v(2625),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,[])).next())})};function k(h){return w(this,void 0,void 0,function*(){let e=performance.now();try{if(i.serviceWorker)try{return(yield(0,i.sendMessage)("GetTheConceptLocal",{id:h})).data}catch(c){(0,i.handleServiceWorkerException)(c)}let o=(0,i.CreateDefaultLConcept)();if(h<0){if(o=yield _.v.GetConcept(h),o.id==0){let c=yield N.G.getNodeFromTree(h);if(c?.value){let p=c.value;p&&(o=p)}}}else{let c=yield(0,i.GetTheConcept)(h);o=(0,f.F4)(c)}return o}catch(o){throw i.Logger.logError(e,"unknown","read","unknown",void 0,200,void 0,"GetTheConceptLocal",[h],"unknown",void 0),o}})}},8633:J=>{var P=String,v=function(){return{isColorSupported:!1,reset:P,bold:P,dim:P,italic:P,underline:P,inverse:P,hidden:P,strikethrough:P,black:P,red:P,green:P,yellow:P,blue:P,magenta:P,cyan:P,white:P,gray:P,bgBlack:P,bgRed:P,bgGreen:P,bgYellow:P,bgBlue:P,bgMagenta:P,bgCyan:P,bgWhite:P,blackBright:P,redBright:P,greenBright:P,yellowBright:P,blueBright:P,magentaBright:P,cyanBright:P,whiteBright:P,bgBlackBright:P,bgRedBright:P,bgGreenBright:P,bgYellowBright:P,bgBlueBright:P,bgMagentaBright:P,bgCyanBright:P,bgWhiteBright:P}};J.exports=v(),J.exports.createColors=v},8635:(J,P,v)=>{v.d(P,{j:()=>k});var _=v(8429),N=v(370),i=v(5760),f=v(1317),w=function(h,e,o,c){return new(o||(o=Promise))(function(p,C){function T(n){try{s(c.next(n))}catch(d){C(d)}}function a(n){try{s(c.throw(n))}catch(d){C(d)}}function s(n){var d;n.done?p(n.value):(d=n.value,d instanceof o?d:new o(function(g){g(d)})).then(T,a)}s((c=c.apply(h,e||[])).next())})};function k(h){var e=arguments;return w(this,arguments,void 0,function*(o,c=""){const p=_.Logger.logfunction("SearchLinkMultipleApi",e);let C=performance.now();var T=(0,f.ab)("application/json",c);const a=N.B.SearchLinkMultipleAllApiUrl(),s=JSON.stringify(o);try{const n=yield fetch(a,{method:"POST",headers:T,body:s});if(n.ok){let d=yield n.json();return _.Logger.logUpdate(p),d}return(0,i.ry)(n),_.Logger.logError(C,"unknown","search","unknown",void 0,n.status,n,"SearchLinkMultipleApi",[o,c],"unknown",void 0),[]}catch(n){_.Logger.logError(C,"unknown","search","unknown",void 0,500,n,"SearchLinkMultipleApi",[o,c],"unknown",void 0),(0,i.Mb)(n,a),(0,i.ey)(p,"SearchLinkMultipleApi",n)}})}},8800:(J,P,v)=>{v.d(P,{w:()=>f});var _=v(8429),N=v(6931),i=function(w,k,h,e){return new(h||(h=Promise))(function(o,c){function p(a){try{T(e.next(a))}catch(s){c(s)}}function C(a){try{T(e.throw(a))}catch(s){c(s)}}function T(a){var s;a.done?o(a.value):(s=a.value,s instanceof h?s:new h(function(n){n(s)})).then(p,C)}T((e=e.apply(w,[])).next())})};class f{constructor(){this.subscribers=[],this.mainConcept=0,this.compositionIds=[],this.conceptIds=[],this.internalConnections=[],this.reverse=[],this.linkers=[],this.newIds=[],this.dependency=[],this.isDataLoaded=!1,this.isUpdating=!1,this.fetched=!1,this.format=N.yv,this.eventHandlers={}}listenToEventType(k){if(this.eventHandlers[k])return;const h=e=>i(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let o=this;setTimeout(function(){return i(this,void 0,void 0,function*(){try{let c=e;if(!o.compositionIds.includes(c?.detail)){o.compositionIds.unshift(c?.detail),o.listenToEvent(c?.detail);let p=c?.detail,C=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(p,p);for(let T=0;T<C.length;T++)yield _.ConnectionData.GetConnection(C[T]).then(a=>{a.typeId==o.mainConcept?o.internalConnections.includes(a.id)||o.internalConnections.push(a.id):o.linkers.includes(a.id)||o.linkers.push(a.id),o.conceptIds.includes(a.toTheConceptId)||o.conceptIds.push(a.toTheConceptId),o.compositionIds.includes(a.ofTheConceptId)||o.compositionIds.push(a.ofTheConceptId)})}o.isUpdating=!1,yield o.bind(),o.notify()}catch(c){throw o.isUpdating=!1,c}})},200)}});this.eventHandlers[k]=h,window.addEventListener(`${k}`,h)}listenToEvent(k){if(this.eventHandlers[k])return;const h=e=>i(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let o=this;setTimeout(function(){return i(this,void 0,void 0,function*(){try{let c=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(k,k);for(let p=0;p<c.length;p++)yield _.ConnectionData.GetConnection(c[p]).then(C=>{C.typeId==o.mainConcept?o.internalConnections.includes(C.id)||o.internalConnections.push(C.id):o.linkers.includes(C.id)||o.linkers.push(C.id),o.conceptIds.includes(C.toTheConceptId)||o.conceptIds.push(C.toTheConceptId),o.compositionIds.includes(C.ofTheConceptId)||(o.compositionIds.push(C.ofTheConceptId),o.newIds.includes(C.ofTheConceptId)||o.newIds.push(C.ofTheConceptId))});o.isUpdating=!1,yield o.bind(),o.notify()}catch(c){throw o.isUpdating=!1,c}})},200)}});this.eventHandlers[k]=h,window.addEventListener(`${k}`,h)}removeListenToEvent(k){const h=this.eventHandlers[k];h&&(window.removeEventListener(`${k}`,h),delete this.eventHandlers[k])}listenToEventConnectionType(k,h){const e=`${k}_type_${h}`;if(this.eventHandlers[e])return;const o=c=>i(this,void 0,void 0,function*(){if(!this.isUpdating){this.isUpdating=!0;let p=this;setTimeout(function(){return i(this,void 0,void 0,function*(){try{let C=yield _.ConnectionData.GetConnectionByOfTheConceptAndType(k,k);for(let T=0;T<C.length;T++)C[T].typeId==h&&(yield _.ConnectionData.GetConnection(C[T]).then(a=>{a.typeId==p.mainConcept?p.internalConnections.includes(a.id)||p.internalConnections.push(a.id):p.linkers.includes(a.id)||p.linkers.push(a.id),p.conceptIds.includes(a.toTheConceptId)||p.conceptIds.push(a.toTheConceptId),p.compositionIds.includes(a.ofTheConceptId)||p.compositionIds.push(a.ofTheConceptId)}));p.isUpdating=!1,yield p.bind(),p.notify()}catch(C){throw p.isUpdating=!1,C}})},200)}});this.eventHandlers[e]=o,window.addEventListener(`${k}`,o)}bind(){return i(this,void 0,void 0,function*(){})}run(){return i(this,void 0,void 0,function*(){})}update(){return i(this,void 0,void 0,function*(){this.isDataLoaded=!1,yield this.bind(),this.notify()})}subscribe(k,h){this.subscribers.push(k);const e=()=>this.unsubscribe(k),o=this.bind().then(()=>i(this,void 0,void 0,function*(){return yield k(this.data,this),{unsubscribe:e}})).catch(c=>{throw h&&h(c),c});return o.unsubscribe=e,o}execute(){return i(this,void 0,void 0,function*(){return yield this.run()})}unsubscribe(k){return this.subscribers=this.subscribers.filter(h=>h!=k),this.subscribers.length}notify(){this.subscribers.map(k=>{k(this.data,this)})}}},8937:J=>{var P={}.hasOwnProperty,v=/[ -,\.\/:-@\[-\^`\{-~]/,_=/[ -,\.\/:-@\[\]\^`\{-~]/,N=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,i=function f(w,k){(k=function(d,g){if(!d)return g;var y={};for(var b in g)y[b]=P.call(d,b)?d[b]:g[b];return y}(k,f.options)).quotes!="single"&&k.quotes!="double"&&(k.quotes="single");for(var h=k.quotes=="double"?'"':"'",e=k.isIdentifier,o=w.charAt(0),c="",p=0,C=w.length;p<C;){var T=w.charAt(p++),a=T.charCodeAt(),s=void 0;if(a<32||a>126){if(a>=55296&&a<=56319&&p<C){var n=w.charCodeAt(p++);(64512&n)==56320?a=((1023&a)<<10)+(1023&n)+65536:p--}s="\\"+a.toString(16).toUpperCase()+" "}else s=k.escapeEverything?v.test(T)?"\\"+T:"\\"+a.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(T)?"\\"+a.toString(16).toUpperCase()+" ":T=="\\"||!e&&(T=='"'&&h==T||T=="'"&&h==T)||e&&_.test(T)?"\\"+T:T;c+=s}return e&&(/^-[-\d]/.test(c)?c="\\-"+c.slice(1):/\d/.test(o)&&(c="\\3"+o+" "+c.slice(1))),c=c.replace(N,function(d,g,y){return g&&g.length%2?d:(g||"")+y}),!e&&k.wrap?h+c+h:c};i.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},i.version="3.0.0",J.exports=i},9097:(J,P,v)=>{v.d(P,{V:()=>h});var _,N=v(8429),i=v(8444),f=v(5760),w=v(1317),k=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,[])).next())})};class h{static startAutoSync(){this.autoSyncInterval||(this.nextSyncTime=Date.now()+this.SYNC_INTERVAL_MS,setInterval(()=>{const o=Date.now();this.nextSyncTime&&o>=this.nextSyncTime&&(this.nextSyncTime=o+this.SYNC_INTERVAL_MS,this.sendPackageLogsToServer(),this.sendApplicationLogsToServer())},3e4))}static stopAutoSync(){this.autoSyncInterval!==null&&(clearInterval(this.autoSyncInterval),this.autoSyncInterval=null,this.nextSyncTime=null)}static setLogLevel(o){this.logLevel=o}static shouldLog(o){return this.LOG_LEVELS.indexOf(o)>=this.LOG_LEVELS.indexOf(this.logLevel)}static formatLogData(o,c,p){const C=Object.assign({timestamp:new Date().toISOString(),level:o,message:c},p);return this.packageLogsData.push(C),o=="ERROR"&&(this.sendPackageLogsToServer(),this.sendApplicationLogsToServer()),C}static log(o,c,p){if(this.logPackageActivationStatus)try{this.formatLogData(o,c,p||null)}catch{}}static logUpdate(o){var c;try{if(!this.logPackageActivationStatus)return{};if(!o)return{};const p=Date.now();o.startTime=(c=o.startTime)!==null&&c!==void 0?c:p;const C=p-o.startTime;o.responseTime=`${C} ms`,!o.serviceWorker&&(o.serviceWorker=!1)}catch(p){(0,f.ey)(o,"Logger.logUpdate",p)}}static logfunction(o,...c){if(!this.logPackageActivationStatus)return{};const p=Date.now();let C=c;const T=N.BaseUrl.getRandomizer(),a=i.b.sessionId;let s={startTime:p,functionName:o,functionParameters:C,requestFrom:N.BaseUrl.BASE_APPLICATION,sessionId:a,applicationId:T};return this.formatLogData("INFO","function called",s)}static logError(o,c,p,C,T,a,s,n,d,g,y){try{const b=i.b.sessionId,L=`${(performance.now()-o).toFixed(3)}ms`,S={startTime:o,userId:c,operationType:p,requestFrom:C,requestIP:T,responseStatus:a,responseTime:L,responseSize:s?`${JSON.stringify(s).length}`:"0",sessionId:b?.toString(),functionName:n,functionParameters:d,userAgent:g,conceptsUsed:y};this.formatLogData("ERROR",`Information logged for ${n}`,S)}catch{}}static logApplication(o,c,p){if(this.logApplicationActivationStatus)try{const C={timestamp:new Date().toISOString(),level:o,message:c,data:p||null};this.applicationLogsData.push(C),o!="ROUTE"&&o!="USER_EVENT"||(this.sendPackageLogsToServer(),this.sendApplicationLogsToServer())}catch{}}static checkLoggerServerStatus(){return k(this,void 0,void 0,function*(){let o=1e4+_.checkInterval;const c=new Date;if(!(_.lastCheck&&c.getTime()-_.lastCheck.getTime()<o)){try{let p=N.BaseUrl.LogHealth();_.lastCheck=new Date,(yield fetch(p,{method:"GET"})).ok&&(_.isLoggerActive=!0,_.checkInterval=0)}catch{}_.checkInterval=_.checkInterval+500}})}static sendApplicationLogsToServer(){return k(this,void 0,void 0,function*(){const o=this.applicationLogsData;try{if(!_.isLoggerActive)return void _.checkLoggerServerStatus();if(o.length===0)return;this.applicationLogsData=[],i.b.BearerAccessToken;const c=50;let p=(0,w.Xr)(),C=0;for(;o.length!=0;){const T=o.slice(0,c),a=yield fetch(N.BaseUrl.PostLogger(),{method:"POST",headers:p,body:JSON.stringify({logType:this.appLogs,logData:T})});a.ok||a.status===404&&(_.isLoggerActive=!1),o.splice(0,c),C+=c,C++}}catch{_.isLoggerActive=!1}})}static sendPackageLogsToServer(){return k(this,void 0,void 0,function*(){const o=this.packageLogsData;try{if(!_.isLoggerActive)return void _.checkLoggerServerStatus();if(o.length===0)return;this.packageLogsData=[];const c=300;let p=0;for(;o.length!=0;){const C=o.slice(0,c);let T=(0,w.Xr)();const a=yield fetch(N.BaseUrl.PostLogger(),{method:"POST",headers:T,body:JSON.stringify({logType:this.mftsccsBrowser,logData:C})});if(!a.ok)return void(a.status===404&&(_.isLoggerActive=!1));o.splice(0,c),p++}}catch{_.isLoggerActive=!1}})}static saveLogToLocalStorage(o,c){try{if(typeof localStorage===void 0)return;{const p=JSON.parse((localStorage==null?void 0:localStorage.getItem(o))||"[]");p.push(c),localStorage?.setItem(o,JSON.stringify(p))}}catch{this.log("ERROR","Error while saving log in local storage")}}static clearLogsFromLocalStorage(o){typeof localStorage!==void 0&&localStorage?.removeItem(o)}}_=h,h.isLoggerActive=!0,h.lastCheck=new Date,h.checkInterval=0,h.logLevel="INFO",h.packageLogsData=[],h.applicationLogsData=[],h.LOG_LEVELS=["DEBUG","INFO","WARNING","ERROR","ROUTE"],h.SYNC_INTERVAL_MS=6e4,h.nextSyncTime=null,h.appLogs="app",h.mftsccsBrowser="mftsccs",h.logApplicationActivationStatus=!1,h.logPackageActivationStatus=!1,h.autoSyncInterval=null,_.startAutoSync()},9196:(J,P,v)=>{v.d(P,{x:()=>_});class _{constructor(i,f,w,k){this.variants=[],this.height=1,this.key=i,this.value=f,this.leftNode=w,this.rightNode=k,this.currentNode=null}addCurrentNode(i,f){return f==null?f=i:(i.value.typeId!=f.value.typeId&&(f.currentNode=this.addCurrentNode(i,f.currentNode)),f)}addCurrentNodeType(i,f){if(f==null)return f=i;var w=!1;for(let k=0;k<f.variants.length;k++)f.variants[k].value.id==i.value.id&&(w=!0);return w||f.variants.push(i),f}addNode(i,f,w){if(f==null)return f=i;var k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addNode(i,k,w);else{if(!(f.key<i.key))return f;f.rightNode=this.addNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}return f}addCharacterNode(i,f,w){if(i.value.characterValue!=""){if(f==null)return f=i;var k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addCharacterNode(i,k,w);else{if(!(f.key<i.key))return f.key==i.key&&f.key!=""&&f.value.id!=i.value.id&&f.addCurrentNodeType(i,f),f;f.rightNode=this.addCharacterNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}}return f}addTypeNode(i,f,w){if(i.value.typeId!=0){if(f==null)return f=i;var k=f.leftNode,h=f.rightNode;if(f.key>i.key)f.leftNode=this.addTypeNode(i,k,w);else{if(!(f.key<i.key))return f.key==i.key&&f.key!=0&&f.value.id!=i.value.id&&f.addCurrentNodeType(i,f),f;f.rightNode=this.addTypeNode(i,h,w)}f.height=1+Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode));let e=this.getBalanceFactor(f);if(e>1&&f.leftNode){if(i.key<f.leftNode.key)return this.rightRotate(f);if(i.key>f.leftNode.key)return f.leftNode=this.leftRotate(f.leftNode),this.rightRotate(f)}if(e<-1&&f.rightNode){if(i.key>f.rightNode.key)return this.leftRotate(f);if(i.key<f.rightNode.key)return f.rightNode=this.rightRotate(f.rightNode),this.leftRotate(f)}}return f}rightRotate(i){if(i){let f=i.leftNode;if(f){let w=f.rightNode;return i.leftNode=w,f.rightNode=i,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(f.rightNode))+1,f}}return i}leftRotate(i){if(i){let f=i.rightNode;if(f){let w=f.leftNode;return f.leftNode=i,i.rightNode=w,i.height=Math.max(this.getHeight(i.leftNode),this.getHeight(i.rightNode))+1,f.height=Math.max(this.getHeight(f.leftNode),this.getHeight(i.rightNode))+1,f}}return i}getHeight(i){return i?i.height:0}getBalanceFactor(i){return i==null?0:this.getHeight(i.leftNode)-this.getHeight(i.rightNode)}getFromNode(i,f){return f&&(i==f.key?f:i<f.key?this.getFromNode(i,f.leftNode):i>f.key?this.getFromNode(i,f.rightNode):f)}updateNodeSyncStatus(i,f,w){if(w){if(i==w.key){let k=w.value;return k.isSynced=f,w.value=k,w}return i<w.key?this.updateNodeSyncStatus(i,f,w.leftNode):i>w.key?this.updateNodeSyncStatus(i,f,w.rightNode):w}return w}getCharacterFromNode(i,f){return f&&(i==f.key?f:i<f.key?this.getCharacterFromNode(i,f.leftNode):i>f.key?this.getCharacterFromNode(i,f.rightNode):f)}getFromNodeWithCharacterAndType(i,f,w){if(i=`${i}`,w){if(i==w.key){if(i==w.value.characterValue&&f==w.value.typeId)return w;for(let k=0;k<w.variants.length;k++)if(w.variants[k].value.typeId==f)return w.variants[k]}else{if(i<w.key)return this.getFromNodeWithCharacterAndType(i,f,w.leftNode);if(i>w.key)return this.getFromNodeWithCharacterAndType(i,f,w.rightNode)}return null}return w}getFromNodeWithCharacterAndCategory(i,f,w){if(i=`${i}`,w){if(i==w.key){if(i==w.value.characterValue&&f==w.value.categoryId)return w;for(let k=0;k<w.variants.length;k++)if(w.variants[k].value.categoryId==f)return w.variants[k]}else{if(i<w.key)return this.getFromNodeWithCharacterAndCategory(i,f,w.leftNode);if(i>w.key)return this.getFromNodeWithCharacterAndCategory(i,f,w.rightNode)}return null}return w}removeNode(i,f){if(i==null)return i;if(i.key>f)return i.leftNode=this.removeNode(i.leftNode,f),i;if(i.key<f)return i.rightNode=this.removeNode(i.rightNode,f),i;if(i.leftNode==null){let k=i.rightNode;return i=null,k}if(i.rightNode==null){let k=i.leftNode;return i=null,k}var w=this.inOrderSuccessor(i.rightNode);return i.value=w.value,i.key=w.key,i.variants=w.variants,i.currentNode=w.currentNode,i.rightNode=this.removeNode(i.rightNode,w.key),i}removeNodeWithVariants(i,f,w){if(i==null)return i;if(i.key>f)return i.leftNode=this.removeNodeWithVariants(i.leftNode,f,w),i;if(i.key<f)return i.rightNode=this.removeNodeWithVariants(i.rightNode,f,w),i;if(i.variants.length>0){if(i.value.id==w){var k=i.variants[0];if(k)return i.value=k.value,i.key=k.key,i.currentNode=k.currentNode,i.variants.splice(0,1),i}else for(let e=0;e<i.variants.length;e++)if(w==i.variants[e].value.id)return i.variants.splice(e,1),i}if(i.leftNode==null){let e=i.rightNode;return i=null,e}if(i.rightNode==null){let e=i.leftNode;return i=null,e}var h=this.inOrderSuccessor(i.rightNode);return i.value=h.value,i.key=h.key,i.variants=h.variants,i.currentNode=h.currentNode,i.rightNode=this.removeNodeWithVariants(i.rightNode,h.key,w),i}countNodeBelow(i){return i==null?0:1+this.countNodeBelow(i.leftNode)+this.countNodeBelow(i.rightNode)}inOrderSuccessor(i){for(;i.leftNode!=null;)i=i.leftNode;return i}}},9368:(J,P,v)=>{v.d(P,{I:()=>o,r:()=>e});var _=v(1833),N=v(370),i=v(1317),f=v(5760),w=v(8429),k=v(3693),h=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};function e(c){return h(this,void 0,void 0,function*(){const p=w.Logger.logfunction("GetConceptBulk",[c.length])||{};let C=[],T=(new Date().getTime(),performance.now()),a=Array.from(new Set(c));try{if(w.serviceWorker){p.serviceWorker=!0;try{const s=yield(0,w.sendMessage)("GetConceptBulk",{passedConcepts:c});if(s.data&&s.data.length>0)for(const n of s.data)_.I.AddConceptToMemory(n);return w.Logger.logUpdate(p),s.data}catch(s){(0,f.ey)(p,"GetConceptBulk",s),(0,w.handleServiceWorkerException)(s)}}if(a.length>0){let s=[];for(let n=0;n<a.length;n++)if(!_.I.GetNpc(a[n])){let d=yield _.I.GetConcept(a[n]);d.id==0?s.push(a[n]):C.push(d)}if(s.length==0)return w.Logger.logfunction(p),C;{let n;const d={method:"POST",headers:(0,i.Xr)("application/json"),body:JSON.stringify(s)};try{n=yield fetch(N.B.GetConceptBulkUrl(),d)}catch{n=yield(0,k.g)(d,"/api/get_concept_bulk")}yield function(g,y,b,L,S){return h(this,void 0,void 0,function*(){if(g.ok){let E=yield g.json();if(E.length>0)for(let R=0;R<E.length;R++){let U=E[R];_.I.AddConcept(U),b.push(U)}w.Logger.logUpdate(L)}else w.Logger.logError(S,"unknown","read","unknown",void 0,g.status,g,"GetConceptBulk",[y],"unknown",void 0),(0,f.ry)(g)})}(n,c,C,p,T)}}}catch(s){w.Logger.logError(T,"unknown","read","unknown",void 0,500,s,"GetConceptBulk",[c],"unknown",void 0),(0,f.Mb)(s,N.B.GetConceptBulkUrl()),(0,f.ey)(p,"GetConceptBulk",s)}return C})}function o(c){return h(this,void 0,void 0,function*(){const p=[];if(c.length>0){const C=(0,i.Xr)("application/json");try{const T=yield fetch(N.B.GetConceptBulkUrl(),{method:"POST",headers:C,body:JSON.stringify(c)});if(T.ok){const a=yield T.json();if(a.length>0)for(let s=0;s<a.length;s++){const n=a[s];p.push(n),_.I.AddConcept(n)}}else(0,f.ry)(T)}catch(T){(0,f.Mb)(T,N.B.GetConceptBulkUrl())}}return p})}},9371:(J,P,v)=>{let _=v(3152);class N extends _{constructor(f){super(f),this.type="comment"}}J.exports=N,N.default=N},9536:(J,P,v)=>{v.d(P,{r:()=>e});var _=v(1833),N=v(370),i=v(8429),f=v(5760),w=v(3693),k=v(8444),h=function(o,c,p,C){return new(p||(p=Promise))(function(T,a){function s(g){try{d(C.next(g))}catch(y){a(y)}}function n(g){try{d(C.throw(g))}catch(y){a(y)}}function d(g){var y;g.done?T(g.value):(y=g.value,y instanceof p?y:new p(function(b){b(y)})).then(s,n)}d((C=C.apply(o,[])).next())})};function e(o){var c=arguments;return h(this,void 0,void 0,function*(){const p=i.Logger.logfunction("GetConcept",c)||{};let C=(0,i.CreateDefaultConcept)();const T=new FormData;T.append("id",o.toString());try{if(i.serviceWorker){p.serviceWorker=!0;try{const n=yield(0,i.sendMessage)("GetConcept",{id:o});return i.Logger.logUpdate(p),n.data}catch(n){(0,f.ey)(p,"GetConcept",n),(0,i.handleServiceWorkerException)(n)}}if(o==0||o==null||o==null)return C;var a=yield _.I.GetConcept(o);let s=_.I.GetNpc(o);if(a.id!=0||s)return i.Logger.logUpdate(p),a;{let n;const d={method:"POST",body:T,headers:{Authorization:"Bearer "+k.b.BearerAccessToken}};try{n=yield fetch(N.B.GetConceptUrl(),d)}catch{n=yield(0,w.g)(d,"/api/getConcept")}return yield function(g,y,b,L){return h(this,void 0,void 0,function*(){return g.ok?(y=yield g.json()).id>0?_.I.AddConcept(y):_.I.AddNpc(L):(0,f.ry)(g),i.Logger.logUpdate(b),y})}(n,C,p,o)}}catch(s){(0,f.Mb)(s,N.B.GetConceptUrl()),(0,f.ey)(p,"GetConcept",s)}})}},9577:(J,P,v)=>{let _=v(7793),N=v(1106),i=v(8339);function f(w,k){let h=new N(w,k),e=new i(h);try{e.parse()}catch(o){throw o}return e.root}J.exports=f,f.default=f,_.registerParse(f)},9606:(J,P,v)=>{P.__esModule=!0,P.unesc=P.stripComments=P.getProp=P.ensureObject=void 0;var _=w(v(5286));P.unesc=_.default;var N=w(v(6291));P.getProp=N.default;var i=w(v(1557));P.ensureObject=i.default;var f=w(v(8354));function w(k){return k&&k.__esModule?k:{default:k}}P.stripComments=f.default},9720:(J,P,v)=>{P.__esModule=!0,P.default=void 0;var _,N=(_=v(3295))&&_.__esModule?_:{default:_},i=v(1581);function f(k,h){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},f(k,h)}var w=function(k){var h,e;function o(c){var p;return(p=k.call(this,c)||this).type=i.TAG,p}return e=k,(h=o).prototype=Object.create(e.prototype),h.prototype.constructor=h,f(h,e),o}(N.default);P.default=w,J.exports=P.default},9746:()=>{},9775:(J,P,v)=>{v.d(P,{p:()=>o,B:()=>e});var _=v(370),N=v(1317),i=v(5760),f=v(8429),w=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})},k=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})},h=function(c,p,C,T){return new(C||(C=Promise))(function(a,s){function n(y){try{g(T.next(y))}catch(b){s(b)}}function d(y){try{g(T.throw(y))}catch(b){s(b)}}function g(y){var b;y.done?a(y.value):(b=y.value,b instanceof C?b:new C(function(L){L(b)})).then(n,d)}g((T=T.apply(c,[])).next())})};class e{static getId(){return h(this,void 0,void 0,function*(){this.ids.length<5&&(yield function(){var C=arguments;return k(this,void 0,void 0,function*(){const T=f.Logger.logfunction("GetReservedIds",C);try{let a=(0,N.Xr)("application/x-www-form-urlencoded");const s=yield fetch(_.B.GetReservedIdUrl(),{method:"GET",headers:a});if(!s.ok)throw(0,i.ry)(s),new Error(`Error! status: ${s.status}`);const n=yield s.json();for(let d=0;d<n.length;d++)e.AddId(n[d]);f.Logger.logUpdate(T)}catch(a){(0,i.Mb)(a,_.B.GetReservedIdUrl()),(0,i.ey)(T,"GetReservedIds",a)}})}());var p=this.ids[0];return this.ids.shift(),p})}static AddId(p){this.ids.includes(p)||this.ids.push(p)}}e.ids=[];class o{static getId(){return h(this,void 0,void 0,function*(){this.connectionIds.length<5&&(yield function(){var C=arguments;return w(this,void 0,void 0,function*(){const T=f.Logger.logfunction("GetReservedConnectionIds",C);try{let a=(0,N.Xr)("application/x-www-form-urlencoded");const s=yield fetch(_.B.GetReservedConnectionIdUrl(),{method:"GET",headers:a});if(!s.ok)throw(0,i.ry)(s),new Error(`Error! status: ${s.status}`);const n=yield s.json();for(let d=0;d<n.length;d++)o.AddId(n[d]);f.Logger.logUpdate(T)}catch(a){(0,i.Mb)(a,_.B.GetReservedConnectionIdUrl()),(0,i.ey)(T,"GetReservedConnectionIds",a)}})}());var p=this.connectionIds[0];return this.connectionIds.shift(),p})}static AddId(p){this.connectionIds.includes(p)||this.connectionIds.push(p)}}o.connectionIds=[]},9783:(J,P,v)=>{v.d(P,{d:()=>h});var _=v(8429),N=v(6931),i=v(4174),f=v(8800),w=function(e,o,c,p){return new(c||(c=Promise))(function(C,T){function a(d){try{n(p.next(d))}catch(g){T(g)}}function s(d){try{n(p.throw(d))}catch(g){T(g)}}function n(d){var g;d.done?C(d.value):(g=d.value,g instanceof c?g:new c(function(y){y(g)})).then(a,s)}n((p=p.apply(e,[])).next())})};class k extends f.w{constructor(o,c,p,C,T){super(),this.connections=[],this.data=[],this.mainConcept=o,this.linker=c,this.inpage=p,this.page=C,this.format=T}bind(){return w(this,void 0,void 0,function*(){var o;if(!this.isDataLoaded){let C=yield(0,_.GetTheConcept)(this.mainConcept),T=((o=C.type)===null||o===void 0?void 0:o.characterValue)+"_s_"+this.linker,a=yield(0,_.GetConceptByCharacterAndType)(T,16);if(a.id>0){let s=yield(0,_.GetConnectionOfTheConcept)(a.id,C.id,C.userId,this.inpage,this.page);this.connections=s;for(var c=[],p=0;p<this.connections.length;p++)c.push(this.connections[p].toTheConceptId),this.linkers.push(this.connections[p].id),this.listenToEvent(this.connections[p].toTheConceptId);yield(0,_.GetAllConnectionsOfCompositionBulk)(c)}this.isDataLoaded=!0,this.listenToEvent(this.mainConcept)}return yield this.build()})}build(){return w(this,void 0,void 0,function*(){this.data=[],this.connections=yield(0,_.GetConnectionBulk)(this.linkers);for(var o=0;o<this.connections.length;o++){let c=this.connections[o].toTheConceptId,p=yield(0,_.GetTheConcept)(c);if(this.format==N.yv){let C=yield(0,i.RW)(p.id);this.data.push(C)}else if(this.format==N.ZJ){let C=yield(0,i.kx)(p.id);this.data.push(C)}else if(this.format==N.iw){let C=yield(0,_.GetCompositionWithIdAndDateFromMemory)(p.id);this.data.push(C)}else{let C=yield(0,_.GetCompositionWithIdAndDateFromMemory)(p.id);this.data.push(C)}}return this.data})}}function h(e,o,c,p,C=N.yv){return new k(e,o,c,p,C)}},9789:(J,P,v)=>{v.d(P,{B:()=>_});class _{static getValue(i,f=null){return i in this.environments?this.environments[i]:f}static setValue(i,f){return this.environments[i]=f,this}}_.environments={}},9858:(J,P,v)=>{v.d(P,{m:()=>c,E:()=>p});var _=v(8429),N=v(5760),i=v(1317),f=function(C,T,a,s){return new(a||(a=Promise))(function(n,d){function g(L){try{b(s.next(L))}catch(S){d(S)}}function y(L){try{b(s.throw(L))}catch(S){d(S)}}function b(L){var S;L.done?n(L.value):(S=L.value,S instanceof a?S:new a(function(E){E(S)})).then(g,y)}b((s=s.apply(C,[])).next())})},w=v(370),k=function(C,T,a,s){return new(a||(a=Promise))(function(n,d){function g(L){try{b(s.next(L))}catch(S){d(S)}}function y(L){try{b(s.throw(L))}catch(S){d(S)}}function b(L){var S;L.done?n(L.value):(S=L.value,S instanceof a?S:new a(function(E){E(S)})).then(g,y)}b((s=s.apply(C,[])).next())})},h=v(413),e=v(3967),o=function(C,T,a,s){return new(a||(a=Promise))(function(n,d){function g(L){try{b(s.next(L))}catch(S){d(S)}}function y(L){try{b(s.throw(L))}catch(S){d(S)}}function b(L){var S;L.done?n(L.value):(S=L.value,S instanceof a?S:new a(function(E){E(S)})).then(g,y)}b((s=s.apply(C,[])).next())})};function c(C){var T=arguments;return o(this,void 0,void 0,function*(){const a=_.Logger.logfunction("DeleteConnectionById",T);if(_.serviceWorker)try{return(yield(0,_.sendMessage)("DeleteConnectionById",{id:C})).data}catch(n){(0,_.handleServiceWorkerException)(n)}let s=!0;return C>0?(s=yield function(n){var d=arguments;return k(this,void 0,void 0,function*(){const g=_.Logger.logfunction("DeleteTheConnection",d);let y=!1;try{const b=new FormData;b.append("id",n.toString());let L=(0,i.BZ)();const S=yield fetch(w.B.DeleteTheConnectionUrl(),{method:"POST",headers:L,body:b,redirect:"follow"});_.Logger.logUpdate(g),S.ok?y=(yield S.json()).success:(0,N.ry)(S),y&&_.ConnectionData.AddNpConn(n)}catch(b){(0,N.Mb)(b,w.B.DeleteTheConnectionUrl()),(0,N.ey)(g,"DeleteTheConnection",b)}return y})}(C),h.O.removeNodeFromTree(C)):e.G.RemoveConnectionById(C),_.Logger.logUpdate(a),s})}function p(C){var T=arguments;return o(this,void 0,void 0,function*(){const a=_.Logger.logfunction("DeleteConnectionByIdBulk",T);if(_.serviceWorker)try{return(yield(0,_.sendMessage)("DeleteConnectionByIdBulk",{ids:C})).data}catch(n){(0,_.handleServiceWorkerException)(n)}let s=yield function(n){var d=arguments;return f(this,void 0,void 0,function*(){const g=_.Logger.logfunction("DeleteTheConnectionBulkApi",d);let y=!1;try{let b=(0,i.BZ)();b.append("Content-Type","application/json");const L=yield fetch(_.BaseUrl.DeleteTheConnectionBulkUrl(),{method:"POST",headers:b,body:JSON.stringify(n)});if(_.Logger.logUpdate(g),L.ok?y=(yield L.json()).success:(0,N.ry)(L),y)for(let S=0;S<n.length;S++){let E=n[S];_.ConnectionData.AddNpConn(E)}}catch(b){(0,N.Mb)(b,_.BaseUrl.DeleteTheConnectionUrl()),(0,N.ey)(g,"DeleteTheConnectionBulkApi",b)}return y})}(C);if(s)for(let n=0;n<C.length;n++){let d=C[n];d>0?h.O.removeNodeFromTree(d):e.G.RemoveConnectionById(d)}return _.Logger.logUpdate(a),s})}},9911:(J,P,v)=>{v.d(P,{u:()=>N});var _=v(3008);function N(){let i=new Date,f=new Date;return new _.j(0,0,0,0,0,"0",0,!1,i,f,"0")}},9977:()=>{}},ns={};function Wt(J){var P=ns[J];if(P!==void 0)return P.exports;var v=ns[J]={exports:{}};return ca[J](v,v.exports,Wt),v.exports}Wt.n=J=>{var P=J&&J.__esModule?()=>J.default:()=>J;return Wt.d(P,{a:P}),P},Wt.d=(J,P)=>{for(var v in P)Wt.o(P,v)&&!Wt.o(J,v)&&Object.defineProperty(J,v,{enumerable:!0,get:P[v]})},Wt.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),Wt.o=(J,P)=>Object.prototype.hasOwnProperty.call(J,P),Wt.r=J=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(J,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(J,"__esModule",{value:!0})};var K=Wt(8429);const la=K.ADMIN,da=K.ALLID,ua=K.AccessControlService,ha=K.AccessTracker,pa=K.AddGhostConcept,fa=K.Anomaly,ma=K.BaseUrl,ya=K.BinaryTree,ga=K.BuildWidgetFromId,va=K.BuilderStatefulWidget,Ca=K.Composition,ba=K.CompositionBinaryTree,Ia=K.CompositionNode,wa=K.Concept,Ta=K.ConceptsData,ka=K.Connection,Aa=K.ConnectionData,_a=K.CountInfo,Sa=K.CreateComposition,xa=K.CreateConnection,Na=K.CreateConnectionBetweenEntityLocal,La=K.CreateConnectionBetweenTwoConcepts,Da=K.CreateConnectionBetweenTwoConceptsGeneral,Pa=K.CreateConnectionBetweenTwoConceptsLocal,Ba=K.CreateData,Ra=K.CreateDefaultConcept,Ea=K.CreateDefaultLConcept,Oa=K.CreateSession,Fa=K.CreateSessionVisit,Ga=K.CreateTheCompositionLocal,Ua=K.CreateTheCompositionWithCache,Ma=K.CreateTheConnection,Wa=K.CreateTheConnectionGeneral,ja=K.CreateTheConnectionLocal,Va=K.DATAID,qa=K.DATAIDDATE,Ha=K.DATAV2,$a=K.DelayFunctionExecution,za=K.DeleteConceptById,Ja=K.DeleteConceptLocal,Qa=K.DeleteConnectionById,Ya=K.DeleteConnectionByIdBulk,Xa=K.DeleteConnectionByType,Ka=K.DeleteConnectionByTypeBulk,Za=K.DeleteUser,ec=K.DependencyObserver,tc=K.Environments,nc=K.FilterSearch,oc=K.FormatFromConnections,ic=K.FormatFromConnectionsAltered,rc=K.FreeschemaQuery,sc=K.FreeschemaQueryApi,ac=K.GetAllConnectionsOfComposition,cc=K.GetAllConnectionsOfCompositionBulk,lc=K.GetAllLinkerConnectionsFromTheConcept,dc=K.GetAllTheConnectionsByTypeAndOfTheConcept,uc=K.GetComposition,hc=K.GetCompositionBulk,pc=K.GetCompositionBulkWithDataId,fc=K.GetCompositionFromConnectionsWithDataId,mc=K.GetCompositionFromConnectionsWithDataIdFromConnections,yc=K.GetCompositionFromConnectionsWithDataIdInObject,gc=K.GetCompositionFromConnectionsWithDataIdIndex,vc=K.GetCompositionFromConnectionsWithIndex,Cc=K.GetCompositionFromConnectionsWithIndexFromConnections,bc=K.GetCompositionFromMemoryWithConnections,Ic=K.GetCompositionList,wc=K.GetCompositionListAll,Tc=K.GetCompositionListAllWithId,kc=K.GetCompositionListListener,Ac=K.GetCompositionListLocal,_c=K.GetCompositionListLocalWithId,Sc=K.GetCompositionListWithId,xc=K.GetCompositionListWithIdUpdated,Nc=K.GetCompositionListener,Lc=K.GetCompositionLocal,Dc=K.GetCompositionLocalWithId,Pc=K.GetCompositionWithAllIds,Bc=K.GetCompositionWithCache,Rc=K.GetCompositionWithDataIdBulk,Ec=K.GetCompositionWithDataIdWithCache,Oc=K.GetCompositionWithId,Fc=K.GetCompositionWithIdAndDateFromMemory,Gc=K.GetConceptBulk,Uc=K.GetConceptByCharacter,Mc=K.GetConceptByCharacterAndCategoryLocal,Wc=K.GetConceptByCharacterAndType,jc=K.GetConnectionBetweenTwoConceptsLinker,Vc=K.GetConnectionBulk,qc=K.GetConnectionById,Hc=K.GetConnectionDataPrefetch,$c=K.GetConnectionOfTheConcept,zc=K.GetConnectionTypeForCount,Jc=K.GetConnectionsBetweenApi,Qc=K.GetFreeschemaImage,Yc=K.GetFreeschemaImageUrl,Xc=K.GetImageApi,Kc=K.GetLink,Zc=K.GetLinkListListener,el=K.GetLinkListener,tl=K.GetLinkRaw,nl=K.GetLinkerConnectionFromConcepts,ol=K.GetLinkerConnectionToConcepts,il=K.GetRelation,rl=K.GetRelationLocal,sl=K.GetRelationNew,al=K.GetRelationRaw,cl=K.GetTheConcept,ll=K.GetTheConceptLocal,dl=K.GetUserGhostId,ul=K.JUSTDATA,hl=K.LConcept,pl=K.LConnection,fl=K.LISTNORMAL,ml=K.LocalConceptsData,yl=K.LocalSyncData,gl=K.LocalTransaction,vl=K.LogEvent,Cl=K.Logger,bl=K.LoginToBackend,Il=K.MakeTheInstanceConcept,wl=K.MakeTheInstanceConceptLocal,Tl=K.MakeTheTimestamp,kl=K.MakeTheTypeConceptApi,Al=K.MakeTheTypeConceptLocal,_l=K.NORMAL,Sl=K.PRIVATE,xl=K.PUBLIC,Nl=K.PatcherStructure,Ll=K.Prototype,Dl=K.RAW,Pl=K.RecursiveSearchApi,Bl=K.RecursiveSearchApiNewRawFullLinker,Rl=K.RecursiveSearchApiRaw,El=K.RecursiveSearchApiRawFullLinker,Ol=K.RecursiveSearchApiWithInternalConnections,Fl=K.RecursiveSearchListener,Gl=K.SchemaQuery,Ul=K.SchemaQueryListener,Ml=K.SearchAllConcepts,Wl=K.SearchLinkInternal,jl=K.SearchLinkInternalAll,Vl=K.SearchLinkMultipleAll,ql=K.SearchLinkMultipleAllObservable,Hl=K.SearchLinkMultipleApi,$l=K.SearchQuery,zl=K.SearchStructure,Jl=K.SearchWithLinker,Ql=K.SearchWithTypeAndLinker,Yl=K.SearchWithTypeAndLinkerApi,Xl=K.Selector,Kl=K.SessionData,Zl=K.Signin,ed=K.Signup,td=K.SignupEntity,nd=K.SplitStrings,od=K.StatefulWidget,id=K.SyncData,rd=K.TokenStorage,sd=K.TrashTheConcept,ad=K.UpdateComposition,cd=K.UpdateCompositionLocal,ld=K.UserBinaryTree,dd=K.Validator,ud=K.ViewInternalData,hd=K.ViewInternalDataApi,pd=K.WidgetTree,fd=K.buildFetchConnection,md=K.clearAllCaches,yd=K.convertFromConceptToLConcept,gd=K.convertFromLConceptToConcept,vd=K.convertWidgetTreeToWidget,Cd=K.convertWidgetTreeToWidgetWithWrapper,bd=K.createFormFieldData,Id=K.createPrototypeLocal,wd=K.dispatchIdEvent,Td=K.getFromDatabaseWithType,kd=K.getObjectsFromIndexDb,Ad=K.getUploadFileLimit,_d=K.getUserDetails,Sd=K.getWidgetBulkFromId,xd=K.getWidgetFromId,Nd=K.handleServiceWorkerException,Ld=K.hasActivatedSW,Dd=K.importLatestWidget,Pd=K.importRecentWidget,Bd=K.init,Rd=K.orderTheConnections,Ed=K.recursiveFetch,Od=K.recursiveFetchNew,Fd=K.removeAllChildren,Gd=K.renderImportedWidget,Ud=K.renderLatestWidget,Md=K.renderPage,Wd=K.renderWidget,jd=K.searchLinkMultipleListener,Vd=K.sendEmail,qd=K.sendMessage,Hd=K.serviceWorker,$d=K.setHasActivatedSW,zd=K.storeToDatabase,Jd=K.subscribedListeners,Qd=K.unwrapContainers,Yd=K.updateAccessToken,Xd=K.uploadAttachment,Kd=K.uploadFile,Zd=K.uploadImage,eu=K.uploadImageV2,tu=K.validDocumentFormats,nu=K.validImageFormats,ou=Object.freeze(Object.defineProperty({__proto__:null,ADMIN:la,ALLID:da,AccessControlService:ua,AccessTracker:ha,AddGhostConcept:pa,Anomaly:fa,BaseUrl:ma,BinaryTree:ya,BuildWidgetFromId:ga,BuilderStatefulWidget:va,Composition:Ca,CompositionBinaryTree:ba,CompositionNode:Ia,Concept:wa,ConceptsData:Ta,Connection:ka,ConnectionData:Aa,CountInfo:_a,CreateComposition:Sa,CreateConnection:xa,CreateConnectionBetweenEntityLocal:Na,CreateConnectionBetweenTwoConcepts:La,CreateConnectionBetweenTwoConceptsGeneral:Da,CreateConnectionBetweenTwoConceptsLocal:Pa,CreateData:Ba,CreateDefaultConcept:Ra,CreateDefaultLConcept:Ea,CreateSession:Oa,CreateSessionVisit:Fa,CreateTheCompositionLocal:Ga,CreateTheCompositionWithCache:Ua,CreateTheConnection:Ma,CreateTheConnectionGeneral:Wa,CreateTheConnectionLocal:ja,DATAID:Va,DATAIDDATE:qa,DATAV2:Ha,DelayFunctionExecution:$a,DeleteConceptById:za,DeleteConceptLocal:Ja,DeleteConnectionById:Qa,DeleteConnectionByIdBulk:Ya,DeleteConnectionByType:Xa,DeleteConnectionByTypeBulk:Ka,DeleteUser:Za,DependencyObserver:ec,Environments:tc,FilterSearch:nc,FormatFromConnections:oc,FormatFromConnectionsAltered:ic,FreeschemaQuery:rc,FreeschemaQueryApi:sc,GetAllConnectionsOfComposition:ac,GetAllConnectionsOfCompositionBulk:cc,GetAllLinkerConnectionsFromTheConcept:lc,GetAllTheConnectionsByTypeAndOfTheConcept:dc,GetComposition:uc,GetCompositionBulk:hc,GetCompositionBulkWithDataId:pc,GetCompositionFromConnectionsWithDataId:fc,GetCompositionFromConnectionsWithDataIdFromConnections:mc,GetCompositionFromConnectionsWithDataIdInObject:yc,GetCompositionFromConnectionsWithDataIdIndex:gc,GetCompositionFromConnectionsWithIndex:vc,GetCompositionFromConnectionsWithIndexFromConnections:Cc,GetCompositionFromMemoryWithConnections:bc,GetCompositionList:Ic,GetCompositionListAll:wc,GetCompositionListAllWithId:Tc,GetCompositionListListener:kc,GetCompositionListLocal:Ac,GetCompositionListLocalWithId:_c,GetCompositionListWithId:Sc,GetCompositionListWithIdUpdated:xc,GetCompositionListener:Nc,GetCompositionLocal:Lc,GetCompositionLocalWithId:Dc,GetCompositionWithAllIds:Pc,GetCompositionWithCache:Bc,GetCompositionWithDataIdBulk:Rc,GetCompositionWithDataIdWithCache:Ec,GetCompositionWithId:Oc,GetCompositionWithIdAndDateFromMemory:Fc,GetConceptBulk:Gc,GetConceptByCharacter:Uc,GetConceptByCharacterAndCategoryLocal:Mc,GetConceptByCharacterAndType:Wc,GetConnectionBetweenTwoConceptsLinker:jc,GetConnectionBulk:Vc,GetConnectionById:qc,GetConnectionDataPrefetch:Hc,GetConnectionOfTheConcept:$c,GetConnectionTypeForCount:zc,GetConnectionsBetweenApi:Jc,GetFreeschemaImage:Qc,GetFreeschemaImageUrl:Yc,GetImageApi:Xc,GetLink:Kc,GetLinkListListener:Zc,GetLinkListener:el,GetLinkRaw:tl,GetLinkerConnectionFromConcepts:nl,GetLinkerConnectionToConcepts:ol,GetRelation:il,GetRelationLocal:rl,GetRelationNew:sl,GetRelationRaw:al,GetTheConcept:cl,GetTheConceptLocal:ll,GetUserGhostId:dl,JUSTDATA:ul,LConcept:hl,LConnection:pl,LISTNORMAL:fl,LocalConceptsData:ml,LocalSyncData:yl,LocalTransaction:gl,LogEvent:vl,Logger:Cl,LoginToBackend:bl,MakeTheInstanceConcept:Il,MakeTheInstanceConceptLocal:wl,MakeTheTimestamp:Tl,MakeTheTypeConceptApi:kl,MakeTheTypeConceptLocal:Al,NORMAL:_l,PRIVATE:Sl,PUBLIC:xl,PatcherStructure:Nl,Prototype:Ll,RAW:Dl,RecursiveSearchApi:Pl,RecursiveSearchApiNewRawFullLinker:Bl,RecursiveSearchApiRaw:Rl,RecursiveSearchApiRawFullLinker:El,RecursiveSearchApiWithInternalConnections:Ol,RecursiveSearchListener:Fl,SchemaQuery:Gl,SchemaQueryListener:Ul,SearchAllConcepts:Ml,SearchLinkInternal:Wl,SearchLinkInternalAll:jl,SearchLinkMultipleAll:Vl,SearchLinkMultipleAllObservable:ql,SearchLinkMultipleApi:Hl,SearchQuery:$l,SearchStructure:zl,SearchWithLinker:Jl,SearchWithTypeAndLinker:Ql,SearchWithTypeAndLinkerApi:Yl,Selector:Xl,SessionData:Kl,Signin:Zl,Signup:ed,SignupEntity:td,SplitStrings:nd,StatefulWidget:od,SyncData:id,TokenStorage:rd,TrashTheConcept:sd,UpdateComposition:ad,UpdateCompositionLocal:cd,UserBinaryTree:ld,Validator:dd,ViewInternalData:ud,ViewInternalDataApi:hd,WidgetTree:pd,buildFetchConnection:fd,clearAllCaches:md,convertFromConceptToLConcept:yd,convertFromLConceptToConcept:gd,convertWidgetTreeToWidget:vd,convertWidgetTreeToWidgetWithWrapper:Cd,createFormFieldData:bd,createPrototypeLocal:Id,dispatchIdEvent:wd,getFromDatabaseWithType:Td,getObjectsFromIndexDb:kd,getUploadFileLimit:Ad,getUserDetails:_d,getWidgetBulkFromId:Sd,getWidgetFromId:xd,handleServiceWorkerException:Nd,hasActivatedSW:Ld,importLatestWidget:Dd,importRecentWidget:Pd,init:Bd,orderTheConnections:Rd,recursiveFetch:Ed,recursiveFetchNew:Od,removeAllChildren:Fd,renderImportedWidget:Gd,renderLatestWidget:Ud,renderPage:Md,renderWidget:Wd,searchLinkMultipleListener:jd,sendEmail:Vd,sendMessage:qd,serviceWorker:Hd,setHasActivatedSW:$d,storeToDatabase:zd,subscribedListeners:Jd,unwrapContainers:Qd,updateAccessToken:Yd,uploadAttachment:Xd,uploadFile:Kd,uploadImage:Zd,uploadImageV2:eu,validDocumentFormats:tu,validImageFormats:nu},Symbol.toStringTag,{value:"Module"})),iu=`export declare class AccessTracker {
    private static conceptsData;
    private static connectionsData;
    private static readonly SYNC_INTERVAL_MS;
    private static nextSyncTime;
    static activateStatus: boolean;
    private static readonly accessData;
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
    private static startAutoSync;
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
`,ru=`import { FormFieldData } from "../Validator/interface";
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
`,su=`import { Returner } from "../../DataStructures/Returner";
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
`,au=`import { Concept } from "../../DataStructures/Concept";
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
`,cu=`import { Connection } from "../../DataStructures/Connection";
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
`,lu=`import { Concept } from "../../DataStructures/Concept";
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
`,du=`import { Connection } from "../../app";
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
`,uu=`import { TheTexts } from "../../DataStructures/TheTexts";
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
`,hu=`/**
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
`,pu=`/**
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
`,fu=`/**
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
`,mu=`/**
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
`,yu=`/**
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
`,gu=`/**
 * Fetches all AI-related concept data from the backend.
 * Loads AI concepts into local ConceptsData cache and triggers database update.
 *
 * @returns void - Updates ConceptsData in-place with AI concepts
 *
 * @example
 * await GetAiData(); // Loads all AI concepts into cache
 */
export declare function GetAiData(): Promise<void>;
`,vu=`/**
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
`,Cu=`import { Connection } from '../DataStructures/Connection';
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
`,bu=`import { Connection } from '../DataStructures/Connection';
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
`,Iu=`import { Connection } from "../DataStructures/Connection";
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
`,wu=`import { Connection } from "../DataStructures/Connection";
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
`,Tu=`import { TheCharacter } from "../DataStructures/TheCharacter";
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
`,ku=`/**
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
`,Au=`/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns
 */
export declare function GetConcept(id: number): Promise<any>;
`,_u=`import { Concept } from "./../DataStructures/Concept";
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
`,Su=`/**
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
`,xu=`import { Concept } from "../DataStructures/Concept";
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
`,Nu=`import { Connection } from "../DataStructures/Connection";
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
`,Lu=`import { Connection } from "../DataStructures/Connection";
/**
 * After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched
 * @param connectionIds array of connection ids that need to fetched by the local system
 * @returns the list of  connections that have been fetched
 */
export declare function GetConnectionBulk(connectionIds?: number[]): Promise<Connection[]>;
`,Du=`/**
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
`,Pu=`import { Connection } from "../DataStructures/Connection";
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
`,Bu=`import { FetchConnection } from "../../DataStructures/FetchConnection";
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
`,Ru=`import { Connection } from "../../app";
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
`,Eu=`/**
 * Fetches reserved connection IDs from the backend.
 * Loads system-reserved connection IDs into ReservedConnectionIds cache.
 *
 * @returns void - Updates ReservedConnectionIds cache with reserved IDs
 *
 * @example
 * await GetReservedConnectionIds(); // Loads reserved connection IDs
 */
export declare function GetReservedConnectionIds(): Promise<void>;
`,Ou=`/**
 * Fetches reserved concept IDs from the backend.
 * Loads system-reserved concept IDs into ReservedIds cache.
 *
 * @returns void - Updates ReservedIds cache with reserved concept IDs
 *
 * @example
 * await GetReservedIds(); // Loads reserved concept IDs
 */
export declare function GetReservedIds(): Promise<void>;
`,Fu=`/**
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
`,Gu=`import { Concept } from "../../DataStructures/Concept";
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
`,Uu=`/**
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
`,Mu=`/**
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
`,Wu=`import { Concept } from "../DataStructures/Concept";
/**
 *  This function is used to check the type concpet of a passed string
 *  if the text is "the_person" then the function finds the related concept
 * @param type This is the type of the concept that needs to be created.
 * @param userId This is the userId of the creator.
 * @returns the concept created.
 */
export declare function MakeTheTypeConceptApi(type: string, userId: number): Promise<Concept>;
`,ju=`import { StatefulWidget } from "../../app";
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
`,Vu=`/**
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
`,qu=`import { FreeschemaQuery } from "../../app";
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
`,Hu=`/**
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
`,$u=`import { SearchStructure } from "../../app";
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
`,zu=`import { SearchQuery } from '../../DataStructures/SearchQuery';
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
`,Ju=`import { SearchQuery } from '../../DataStructures/SearchQuery';
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
`,Qu=`import { SearchQuery, SearchStructure } from "../../app";
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
`,Yu=`import { Concept } from "../../DataStructures/Concept";
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
`,Xu=`import { Concept } from "./../../DataStructures/Concept";
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
`,Ku=`import { Concept } from "../../app";
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
`,Zu=`import { SessionData } from "../../app";
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
`,eh=`/**
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
`,th=`import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
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
`,nh=`import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
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
`,oh=`import { Concept } from "../../app";
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
`,ih=`/**
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
`,rh=`export declare const ADMIN = 3;
export declare const PRIVATE = 4;
export declare const PUBLIC = 5;
`,sh=`export declare const config: {
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
`,ah=`export declare const NORMAL = 1;
export declare const DATAID = 2;
export declare const JUSTDATA = 3;
export declare const DATAIDDATE = 4;
export declare const RAW = 5;
export declare const ALLID = 6;
export declare const LISTNORMAL = 7;
export declare const DATAV2 = 8;
`,ch=`export declare const ckeditorCSS = "\\n/* CKEditor content styles */\\n.ck-content {\\n  /* Container styles */\\n  max-width: 100%;\\n  margin: 0 auto;\\n  font-family: system-ui, -apple-system, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif;\\n  line-height: 1.5;\\n  padding: 0.75rem;\\n  background: #fff;\\n  color: #333;\\n  border: 1px solid #ccced1;\\n}\\n\\n/* Headings */\\n.ck-content h1, .ck-content h2, .ck-content h3, \\n.ck-content h4, .ck-content h5, .ck-content h6 {\\n  font-weight: 700;\\n  line-height: 1.2;\\n  margin: 1em 0 0.5em;\\n}\\n\\n.ck-content h1 { font-size: 2.5em; }\\n.ck-content h2 { font-size: 2em; }\\n.ck-content h3 { font-size: 1.75em; }\\n.ck-content h4 { font-size: 1.5em; }\\n.ck-content h5 { font-size: 1.25em; }\\n.ck-content h6 { font-size: 1em; }\\n\\n/* Paragraphs and spacing */\\n.ck-content p {\\n  margin: 1em 0;\\n  line-height: 1.6;\\n}\\n\\n/* Links */\\n.ck-content a {\\n  color: #1a73e8;\\n  text-decoration: none;\\n}\\n\\n.ck-content a:hover {\\n  text-decoration: underline;\\n}\\n\\n/* Lists */\\n.ck-content ul,\\n.ck-content ol {\\n  padding-left: 2em;\\n  margin: 1em 0;\\n}\\n\\n.ck-content ul {\\n  list-style: disc;\\n}\\n\\n.ck-content ol {\\n  list-style: decimal;\\n}\\n\\n.ck-content li {\\n  margin: 0.5em 0;\\n}\\n\\n/* Blockquotes */\\n.ck-content blockquote {\\n  margin: 1em 0;\\n  padding-left: 1em;\\n  border-left: 5px solid #ccc;\\n  font-style: italic;\\n  color: #666;\\n}\\n\\n/* Code blocks */\\n.ck-content pre {\\n  background: #f5f5f5;\\n  border: 1px solid #ddd;\\n  border-radius: 4px;\\n  padding: 1em;\\n  margin: 1em 0;\\n  overflow-x: auto;\\n  font-family: \\"SFMono-Regular\\", Consolas, \\"Liberation Mono\\", Menlo, Courier, monospace;\\n}\\n\\n.ck-content code {\\n  background: #f5f5f5;\\n  padding: 0.2em 0.4em;\\n  border-radius: 3px;\\n  font-size: 0.9em;\\n  font-family: \\"SFMono-Regular\\", Consolas, \\"Liberation Mono\\", Menlo, Courier, monospace;\\n}\\n\\n/* Tables */\\n.ck-content table {\\n  border-collapse: collapse;\\n  width: 100%;\\n  margin: 1em 0;\\n}\\n\\n.ck-content table th,\\n.ck-content table td {\\n  border: 1px solid #ddd;\\n  padding: 0.75em;\\n  text-align: left;\\n}\\n\\n.ck-content table th {\\n  background: #f5f5f5;\\n  font-weight: bold;\\n}\\n\\n/* Images */\\n.ck-content img {\\n  max-width: 100%;\\n  height: auto;\\n  margin: 1em 0;\\n}\\n\\n.ck-content figure {\\n  margin: 1em 0;\\n  text-align: center;\\n}\\n\\n.ck-content figure img {\\n  margin: 0;\\n}\\n\\n.ck-content figcaption {\\n  color: #666;\\n  font-size: 0.9em;\\n  margin-top: 0.5em;\\n}\\n\\n/* Dark mode */\\n/*\\n@media (prefers-color-scheme: dark) {\\n  .ck-content {\\n    background: #1a1a1a;\\n    color: #e0e0e0;\\n  }\\n\\n  .ck-content a {\\n    color: #64b5f6;\\n  }\\n\\n  .ck-content blockquote {\\n    border-left-color: #404040;\\n    color: #b0b0b0;\\n  }\\n\\n  .ck-content pre,\\n  .ck-content code {\\n    background: #2d2d2d;\\n    border-color: #404040;\\n  }\\n\\n  .ck-content table th,\\n  .ck-content table td {\\n    border-color: #404040;\\n  }\\n\\n  .ck-content table th {\\n    background: #2d2d2d;\\n  }\\n\\n  .ck-content figcaption {\\n    color: #b0b0b0;\\n  }\\n}\\n*/\\n\\n/* CUSTOM DOCUMENTATION CSS */\\n\\n#documentation-preview {\\n  border: 1px solid #ccc;\\n  padding: 1rem;\\n}\\n\\n#documentation-preview h3 {\\n  font-size: 1.5rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pre-wrapper {\\n  background: #f2f5f9;\\n  border: 1px solid #cecece;\\n  display: block;\\n  padding: 1rem;\\n  border-radius: 0.25rem;\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pre-wrapper pre {\\n  margin: 0;\\n  color: #e87aa2;\\n}\\n\\n.widget-doc-section pre {\\n  background-color: transparent;\\n}\\n\\n.widget-doc-section p {\\n  margin: 0;\\n}\\n\\n.widget-doc-section code {\\n  color: #e87aa2;\\n  font-size: 0.875rem;\\n}\\n\\n.mv-3 {\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.pv-3 {\\n  padding-top: 1rem;\\n  padding-bottom: 1rem;\\n}\\n\\n  .widget-documentation-heading {\\n    background-color: #6e757d;\\n    color: #eee;\\n    font-size: 1.5rem;\\n    padding: 0.5rem 1rem;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n  }\\n\\n  .widget-documentation-heading h4 {\\n    margin-bottom: 0;\\n  }\\n\\n  .close-documentation-button {\\n    border: none;\\n    outline: none;\\n    background-color: transparent;\\n    line-height: 0;\\n    margin: 0;\\n    padding: 0;\\n    cursor: pointer;\\n  }\\n\\n  .close-documentation-button:hover,\\n  .close-documentation-button:focus  {\\n    background-color: transparent;\\n  }\\n\\n  .documentation-creator {\\n    text-align: right;\\n    color: #666;\\n    margin: 0;\\n    padding-top: 0.5rem;\\n    padding-bottom: 0.5rem;\\n  }\\n\\n  .documentation-creator span {\\n    font-style: italic;\\n  }\\n\\n  .documentation-attachments {\\n    display: flex;\\n    flex-wrap: wrap;\\n  }\\n\\n  .documentation-attachments img {\\n    width: 25%;\\n    height: auto;\\n    border: 1px solid #ccc;\\n    padding: 0.25rem;\\n    margin-top: 0.5rem;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .documentation-attachments iframe {\\n    width: 50%;\\n    border: 1px solid #ccc;\\n    padding: 0.25rem;\\n    margin-top: 0.5rem;\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .widget-documentation-footer {\\n    text-align: right;\\n    margin-top: 1rem;\\n  }\\n\\n  .widget-documentation-footer button {\\n    border-radius: 0;\\n    border: none;\\n    padding: 0.5rem 1.5rem;\\n    text-align: center;\\n    background: #6e757d;\\n    color: #eee;\\n  }\\n\\n  #widget-details {\\n    position: absolute;\\n    right: 0px;\\n    top: 0px;\\n    z-index: 9999;\\n  }\\n\\n  #widget-details button {\\n    background: #fff;\\n    border: 1px solid #ccc;\\n    border-radius: 0 0 0 0.25rem;\\n    height: auto;\\n    width: auto;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    gap: 0.25rem;\\n  }\\n\\n  #widget-details button:hover, \\n  #widget-details button:focus {\\n    opacity: 0.75;\\n  }\\n\\n  #widget-details button span {\\n    pointer-events: none;\\n    font-size: 1rem;\\n  }\\n\\n  #widget-details button svg {\\n    pointer-events: none;\\n    width: 16px;\\n    height: 16px;\\n    fill: #999;\\n  }\\n\\n  #widget-documentation-preview-modal {\\n    border: none;\\n  }\\n\\n  @media (min-width: 768px) {\\n    #widget-documentation-preview-modal {\\n      flex: 0 0 auto;\\n      width: 66.66666667%;\\n    }\\n  }\\n\\n";
`,lh=`import { Concept, Connection } from "../app";
export declare const broadcastChannel: BroadcastChannel;
export interface InnerActions {
    concepts: Concept[];
    connections: Connection[];
}
`,dh=`export declare const COMPOSITIONS: {
    PAGE_COMP_NAME: string;
    WIDGET_COMP_NAME: string;
    PROJECT_COMP_NAME: string;
};
`,uh=`/**
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
`,hh=`export declare class BaseUrl {
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
    static sendMail(): string;
    static sendBulkMail(): string;
    static getWidgetData(): string;
    static getLatestWidgetData(): string;
    static getRecentWidgetData(): string;
    static getConnectionsByTypes(): string;
    static GetConnectionsBetweenUrl(): string;
    static CreatePrototypeUrl(): string;
    static GetCachedImage(ImageName: string): string;
}
`,ph=`import { Concept } from "../DataStructures/Concept";
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
`,fh=`import { Concept } from "../DataStructures/Concept";
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
`,mh=`import { Concept } from "../DataStructures/Concept";
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
`,yh=`import { TheCharacter } from "./TheCharacter";
export declare class CharacterRepository {
    name: string;
    constructor();
    static characterData: TheCharacter[];
    static AddCharacter(character: TheCharacter): void;
    static GetCharacter(value: string): TheCharacter;
}
`,gh=`import { Connection } from '../../DataStructures/Connection';
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
`,vh=`import { Composition } from './Composition';
import { CompositionNode } from './CompositionNode';
export declare class CompositionBinaryTree {
    static root: CompositionNode | null;
    static addNodeToTree(node: CompositionNode): CompositionNode | undefined;
    static addCompositionToTree(composition: Composition): void;
    static getNodeFromTree(id: number): Promise<CompositionNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
`,Ch=`import { Composition } from './Composition';
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
`,bh=`export declare class Concept {
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
`,Ih=`import { Concept } from "./Concept";
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
`,wh=`import { Concept } from "./Concept";
export declare class ConceptsToDraw {
    name: string;
    constructor();
    static conceptsArray: Concept[];
    static CheckContains(concept: Concept): boolean;
    static AddConcept(concept: Concept): void;
    static RemoveConcept(concept: Concept): void;
    static GetConcept(id: number): Concept | null;
    getName(): string;
}
`,Th=`import { Concept } from "./Concept";
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
`,kh=`import { Connection } from "../../DataStructures/Connection";
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
`,Ah=`import { Connection } from "./../Connection";
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
`,_h=`import { NodePrimitive } from "./NodePrimitive";
export declare class ConnectionOfNode extends NodePrimitive {
    key: string;
    value: number[];
    height: number;
    leftNode: ConnectionOfNode | null;
    rightNode: ConnectionOfNode | null;
    constructor(key: any, value: number[], leftNode: ConnectionOfNode | null, rightNode: ConnectionOfNode | null);
    addNode(passedNode: ConnectionOfNode, node: ConnectionOfNode | null, height: number): any;
}
`,Sh=`import { Connection } from "../Connection";
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
`,xh=`import { NodePrimitive } from "./NodePrimitive";
export declare class ConnectionTypeNode extends NodePrimitive {
    key: string;
    value: number[];
    height: number;
    leftNode: ConnectionTypeNode | null;
    rightNode: ConnectionTypeNode | null;
    constructor(key: any, value: number[], leftNode: ConnectionTypeNode | null, rightNode: ConnectionTypeNode | null);
    addNode(passedNode: ConnectionTypeNode, node: ConnectionTypeNode | null, height: number): any;
}
`,Nh=`import { Connection } from "../../DataStructures/Connection";
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
`,Lh=`export declare class NodePrimitive {
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
`,Dh=`export declare class GetConnectionsByTypes {
    ofTheConceptId: number;
    connectionTypes: string[];
}
`,Ph=`import { Connection } from "./Connection";
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
`,Bh=`export declare class CountInfo {
    conceptId: number;
    connectionTypeId: number;
    connectionType: string;
    count: number;
}
`,Rh=`/**
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
`,Eh=`export declare class FilterSearch {
    type: string;
    search: string;
    logicoperator: string;
    index: number;
    composition: boolean;
    name: string;
    operateon: string;
}
`,Oh=`export declare class IdentifierFlags {
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
`,Fh=`import { Concept } from "../Concept";
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
`,Gh=`import { Concept } from "../Concept";
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
`,Uh=`import { Concept } from "./../Concept";
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
`,Mh=`import { Concept } from "../../DataStructures/Concept";
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
`,Wh=`import { Concept } from "../../DataStructures/Concept";
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
`,jh=`import { Concept } from "../../DataStructures/Concept";
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
`,Vh=`import { Concept } from "./../Concept";
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
`,qh=`import { Connection } from "../Connection";
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
`,Hh=`import { Concept } from "../../DataStructures/Concept";
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
`,$h=`export declare class LocalId {
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
`,zh=`import { Concept } from "./../Concept";
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
`,Jh=`import { Concept } from "./Concept";
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
`,Qh=`export declare class PatcherStructure {
    compositionId: number;
    userId: number;
    sessionId: number;
    accessId: number;
    ofTheCompositionId: number;
    patchObject: any;
}
`,Yh=`import { Concept } from "../Concept";
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
`,Xh=`export declare class PrototypeOption {
    type: string;
    value: string;
}
`,Kh=`export declare class QuerySelector {
    filterType: string;
    selector: string;
}
`,Zh=`export declare class ReservedIds {
    static ids: number[];
    static getId(): Promise<number>;
    static AddId(id: number): void;
}
export declare class ReservedConnectionIds {
    static connectionIds: number[];
    static getId(): Promise<number>;
    static AddId(id: number): void;
}
`,ep=`/**
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
`,tp=`export interface FreeschemaResponse {
    message: string;
    status: boolean;
    statusCode: number;
    data: any;
}
`,np=`export declare class Returner {
    id: number;
    userId: number;
    referentId: number;
    isNew: boolean;
    constructor(id: number, userId: number, referentId: number, isNew: boolean);
}
`,op=`import { Concept } from "../Concept";
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
}
`,ip=`export declare class SearchStructure {
    type: string;
    search: string;
    composition: string;
    internalComposition: string;
    userId: number;
    inpage: number;
    page: number;
    auth: boolean;
}
`,rp=`import { FilterSearch } from "./FilterSearch";
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
`,sp=`/**
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
`,ap=`export declare class TokenStorage {
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
`,cp=`export declare class SessionData {
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
`,lp=`export declare class SettingData {
    id: number;
    isOnlineSync: boolean;
    constructor(isOnlineSync: boolean);
}
`,dp=`export declare class Settings {
    static isUpdated: boolean;
    static isOnlineSync: boolean;
}
`,up=`export interface SigninModel {
    email: string;
    password: string;
}
`,hp=`export interface SignupModel {
    email: string;
    password: string;
}
`,pp=`import { Concept } from "./Concept";
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
`,fp=`export declare class TheCharacter {
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
`,mp=`export declare class TheTexts {
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
`,yp=`export type TLibrary = {
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
`,gp=`export declare class TypeNode {
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
`,vp=`import { Concept } from "../../DataStructures/Concept";
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
`,Cp=`import { Concept } from "../Concept";
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
`,bp=`import { WidgetDetails } from "./WidgetDetails";
import { WidgetNode } from "./WidgetNode";
export declare class WidgetCache {
    static root: WidgetNode | null;
    static addNodeToTree(node: WidgetNode): WidgetNode | undefined;
    static addWidgetToTree(widgetDetails: WidgetDetails): void;
    static getNodeFromTree(id: number): Promise<WidgetNode | null>;
    static removeNodeFromTree(id: number): Promise<void>;
    static countNumberOfNodes(): number;
}
`,Ip=`export declare class WidgetDetails {
    widgetId: number;
    mainId: number;
    conceptIds: number[];
    linkers: number[];
    reverse: number[];
    mainCompositionIds: number[];
    countinfo: any;
}
`,wp=`import { WidgetDetails } from "./WidgetDetails";
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
`,Tp=`/**
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
`,kp=`/** Names of the four object stores */
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
`,Ap=`import { Concept, Connection } from "../app";
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
`,_p=`import { SettingData } from "../DataStructures/SettingData";
export declare function openDatabase(databaseName: string): IDBDatabase;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function GetStatsFromDatabase(): SettingData;
export declare function AiUpdateFlag(object: SettingData): void;
export declare function getFromDatabaseWithType(databaseName: string, type: string, id: number): Promise<void>;
export declare function getObjectsFromIndexDb(databaseName: string): Promise<void>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
export declare function getAllFromLocalDb(databaseName: string): Promise<void>;
`,Sp=`/**
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
`,xp=`import { SettingData } from "../DataStructures/SettingData";
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
`,Np=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function CheckIfConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept;
export declare function CheckIfTypeConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept[];
export declare function CheckIfTypeLConceptsExistsInArray(conceptList: Concept[] | undefined, concept: Concept): Concept[];
export declare function CheckIfConnectionExistsInArray(connectionList: Connection[] | undefined, connection: Connection): Connection;
export declare function CheckIfToTheConceptExistsInConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection;
export declare function CheckAllConnectionsConnectedInConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection[];
export declare function CheckAllConnectionsConnectedInLConnectionArray(connectionList: Connection[] | undefined, conceptId: number): Connection[];
`,Lp=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function RemoveConceptFromList(conceptList: Concept[] | undefined, concept: Concept): void;
export declare function RemoveConnectionFromList(connectionList: Connection[] | undefined, connection: Connection): void;
export declare function RemoveLConnectionFromList(connectionList: Connection[] | undefined, connection: Connection): void;
`,Dp=`export default function InsertUniqueNumber(Array: number[], toInsert: number): number[];
`,Pp=`export declare class ApplicationMonitor {
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
}
`,Bp=`export declare class Logger {
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
    private static startAutoSync;
    /**
     * Automatically stops the auto-sync mechanism when required.
     */
    private static stopAutoSync;
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
`,Rp=`import { Actions } from ".";
export declare const connectionActions: Actions;
`,Ep=`import { Actions } from ".";
export declare const createActions: Actions;
`,Op=`import { Actions } from ".";
export declare const deleteActions: Actions;
`,Fp=`import { Actions } from ".";
export declare const getActions: Actions;
`,Gp=`import { InnerActions } from "../../app";
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
`,Up=`import { Actions } from ".";
export declare const searchActions: Actions;
`,Mp=`import { Actions } from ".";
export declare const syncActions: Actions;
`,Wp=`import { Actions } from ".";
export declare const updateActions: Actions;
`,jp=`/**
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
`,Vp=`/**
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
`,qp=`/**
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
`,Hp=`/**
 * Clears all application caches (both in-memory and IndexedDB).
 *
 * Call this on user logout or when you need to force-refresh all cached data.
 * Clears widget caches (standard, latest, recent) and query caches.
 */
export declare function clearAllCaches(): void;
`,$p=`import { Connection } from "../DataStructures/Connection";
export declare function CheckForConnectionDeletion(newConnections?: Connection[], oldConnections?: Connection[]): void;
export declare function CheckForConnectionDeletionWithIds(newConnectionIds?: number[], oldConnections?: Connection[]): void;
`,zp=`import { CountInfo } from "../../DataStructures/Count/CountInfo";
export declare function DecodeCountInfo(countStrings?: string[]): CountInfo[];
export declare function GetConnectionTypeForCount(countInfos: CountInfo[]): Promise<any>;
`,Jp=`/**
 *
 * @param ms The time required to wait before executing this function
 * @param callback This is the function that needs to be executed
 * @returns returns a promise for the resolve
 */
export declare function DelayFunctionExecution(ms: number, callback: any): Promise<unknown>;
`,Qp=`export declare function HandleHttpError(response: Response): void;
export declare function HandleHttpErrorObject(response: Response, output?: any): void;
export declare function HandleInternalError(error: any, url?: string): void;
/**
 * Handle errors inside package functions
 * @updateLog existing function log at start
 * @param functionName name of the function that encountered the error
 * @param error error appeared
 */
export declare function UpdatePackageLogWithError(logData: any, functionName: string, error: any): void;
`,Yp=`/**
 *
 * @param array1 The array you want to merge into
 * @param array2 The array you want to merge
 * @returns array1 with the elements of array 2
 */
export declare function MergeTwoArrays(array1: any, array2: any): any;
`,Xp=`export declare function removeThePrefix(inputString: string): string;
`,Kp=`export declare function removeAllChildren(parent: HTMLElement): void;
`,Zp=`import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
export declare function recursiveFetchNew(id: number, connectionList: Connection[], conceptList: Concept[], compositionList: number[], visitedConcepts?: number[]): Promise<any>;
`,ef=`import { Connection } from '../../DataStructures/Connection';
export declare function GetCompositionWithCache(id: number, connectionListPassed?: Connection[]): Promise<any>;
export declare function GetCompositionWithDataIdWithCache(id: number, connectionListPassed?: Connection[]): Promise<any>;
export declare function GetCompositionWithDataIdBulk(ids: number[], connections: number[]): Promise<any[]>;
`,tf=`import { Concept } from '../../DataStructures/Concept';
import { Composition } from '../../DataStructures/Composition/Composition';
export declare function CreateTheCompositionWithCache(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null, composition?: Composition | null): Promise<Concept>;
`,nf=`import { Concept } from "../../app";
export declare function GetConceptByCharacterAndCategory(character: string): Promise<Concept>;
export declare function GetTypeConceptsByCharacterAndCategoryBulk(typeConcepts: string[]): Promise<Concept[]>;
export declare function GetConceptByCharacter(characterValue: string): Promise<Concept>;
export declare function GetConceptByCharacterAndCategoryFromMemory(character: string, category: number): Promise<Concept>;
`,of=`import { Concept } from "../../DataStructures/Concept";
import { Connection } from "../../DataStructures/Connection";
export declare function convertFromConceptToLConcept(concept: Concept): Concept;
export declare function convertFromLConceptToConcept(lconcept: Concept): Concept;
export declare function convertFromConnectionToLConnection(connection: Connection): Connection;
`,rf=`/**
 * This function builds up the binary tree on startup from the indexdb.
 * Processes records in chunks to avoid blocking the main thread.
 */
export default function CreateConceptBinaryTreeFromIndexDb(): Promise<void>;
`,sf=`import { Concept, InnerActions } from "../../app";
export declare function CreateConnectionBetweenEntityLocal(concept1Data: Concept, concept2Data: Concept, linker: string, actions?: InnerActions): Promise<any>;
`,af=`import { Concept } from "../DataStructures/Concept";
import { Connection } from "../DataStructures/Connection";
export declare function CreateConnectionBetweenTwoConcepts(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, count?: boolean): Promise<any>;
export declare function CountRelationship(linker: string, concept: Concept, passedUserId?: number | null): Promise<void>;
export declare function CreateConnectionBetweenTwoConceptsGeneral(ofTheConcept: Concept, toTheConcept: Concept, linker: string, both?: boolean, count?: boolean): Promise<Connection>;
`,cf=`import { Concept } from "../DataStructures/Concept";
export declare function CreateDefaultConcept(): Concept;
export declare function formatDate(date: Date): string;
`,lf=`export default function CreateTheComposition(json: any, ofTheConceptId?: number | null, ofTheConceptUserId?: number | null, mainKey?: number | null, userId?: number | null, accessId?: number | null, sessionInformationId?: number | null): Promise<any>;
`,df=`import { Concept } from "../DataStructures/Concept";
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
`,uf=`import { Connection } from "../DataStructures/Connection";
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
`,hf=`import { Connection } from "../DataStructures/Connection";
export declare function CreateTheConnectionGeneral(ofTheConceptId: number, ofTheConceptUserId: number, toTheConceptId: number, typeId: number, orderId?: number, accessId?: number): Promise<Connection>;
`,pf=`export declare function DeleteConceptById(id: number): Promise<any>;
export declare function DeleteUser(id: number): Promise<any>;
`,ff=`export declare function DeleteConnectionById(id: number): Promise<any>;
export declare function DeleteConnectionByIdBulk(ids: number[]): Promise<any>;
`,mf=`/**
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
`,yf=`import { Connection } from "../DataStructures/Connection";
/**
 * This function takes in a list of connections and in bulk gets the concepts that are related with these connections.
 * @param connectionList list of connections whose concepts need to be found out.
 */
export declare function FindConceptsFromConnections(connectionList?: Connection[]): Promise<void>;
`,gf=`export declare function FindConnectionsOfCompositionsBulkInMemory(composition_ids?: number[]): Promise<any>;
`,vf=`import { Concept } from "../DataStructures/Concept";
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
`,Cf=`import { Connection } from "../DataStructures/Connection";
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
`,bf=`import { Concept } from "../app";
export declare function GetCompositionList(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListAll(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any[]>;
export declare function GetCompositionListAllWithId(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListWithId(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function GetCompositionListWithIdUpdated(compositionName: string, userId: number, inpage?: number, page?: number): Promise<any>;
export declare function FormatTheConcepts(conceptList: Concept[], localConceptList: Concept[], inpage?: number, page?: number): Promise<any[]>;
`,If=`export default function GetConceptByCharacter(characterValue: string): Promise<any>;
export declare function GetConceptByCharacterUpdated(characterValue: string): Promise<any>;
`,wf=`import { Concept } from "../app";
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
`,Tf=`export declare function GetConnectionById(id: number): Promise<any>;
`,kf=`export declare function GetConnectionsFromIndexDb(): Promise<void>;
export declare function GetConnectionsFromIndexDbLocal(): Promise<void>;
`,Af=`import { Concept } from "./../DataStructures/Concept";
export declare function GetLink(id: number, linker: string, inpage?: number, page?: number): Promise<any>;
export declare function GetLinkRaw(id: number, linker: string, inpage?: number, page?: number): Promise<Concept[]>;
`,_f=`import { Connection } from "../DataStructures/Connection";
export declare function GetLinkerConnectionFromConcepts(id: number): Promise<Connection[]>;
export declare function GetLinkerConnectionToConcepts(id: number): Promise<Connection[]>;
`,Sf=`export declare function GetRelation(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<any>;
export declare function GetRelationNew(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<void>;
export declare function GetRelationRaw(id: number, relation: string, inpage?: number, page?: number, reverse?: boolean): Promise<any>;
`,xf=`import { Concept } from "../DataStructures/Concept";
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
`,Nf=`export default function InitializeSystem(enableAi?: boolean): Promise<boolean>;
export declare function PurgatoryDatabaseUpdated(): Promise<void>;
`,Lf=`import { Concept } from "../../DataStructures/Concept";
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
`,Df=`import { Connection } from "../../DataStructures/Connection";
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
`,Pf=`import { Concept } from "../../app";
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
`,Bf=`import { Concept } from "../../DataStructures/Concept";
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
`,Rf=`/**
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
`,Ef=`import { InnerActions } from "../../app";
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
`,Of=`import { InnerActions } from "../../app";
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
`,Ff=`import { Concept, InnerActions } from "../../app";
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
`,Gf=`/**
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
`,Uf=`/**
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
`,Mf=`/**
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
`,Wf=`import { Concept } from "../../app";
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
`,jf=`import { Connection } from "../../app";
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
`,Vf=`/**
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
`,qf=`/**
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
`,Hf=`import { InnerActions } from "../../app";
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
`,$f=`import { InnerActions } from "../../Constants/general.const";
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
`,zf=`import { Concept } from "../../DataStructures/Concept";
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
`,Jf=`import { PatcherStructure } from "../../DataStructures/PatcherStructure";
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
`,Qf=`export declare function LogEvent(EventName: string, EventDescription: string, event: any): void;
`,Yf=`export interface EmailBody {
    toAddress: string;
    heading: string;
    body?: string;
    attachments?: Array<string>;
}
export interface BulkEmailBody extends Omit<EmailBody, 'toAddress'> {
    toAddress?: string;
    ccAddresses: Array<string>;
}
/**
 * Method to send Email to user
 * @param body FormData | EmailBody
 * @param token string
 * @param bulk boolean
 * @returns JSON | string | null
 */
export declare const sendEmail: (body: FormData | EmailBody | BulkEmailBody, token: string, bulk?: boolean) => Promise<any>;
`,Xf=`import { Concept } from "../DataStructures/Concept";
export default function MakeTheCharacter(the_character_data: string, userId: number, securityId: number, accessId: number, accessUserId: number, sessionId: number): Promise<Concept>;
`,Kf=`import { Returner } from "../DataStructures/Returner";
export default function MakeTheCharacterData(the_character_data: string, userId: number, securityId: number, accessId: number, sessionId: number): Promise<Returner>;
`,Zf=`import { Concept } from "../DataStructures/Concept";
export default function MakeTheConcept(referent: string, userId: number, categoryId: number, typeId: number, referentId: number, accessId: number, typeCharacter: string): Promise<Concept>;
`,em=`/**
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
`,tm=`export declare function MakeTheTimestamp(type: string, referent: string, userId: number, accessId?: number, sessionInformationId?: number): Promise<any>;
`,nm=`export declare function MakeTheTypeConcept(typeString: string, sessionId: number, sessionUserId: number, userId: number): Promise<any>;
`,om=`export declare function publishMessage(topic: string, message: any): void;
`,im=`import { Connection } from "../../app";
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
`,rm=`import { Connection } from "../../app";
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
`,sm=`import { Connection } from "../../app";
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
`,am=`import { Connection } from "../../app";
export declare function FormatFunctionDataV2(connections: Connection[], compositionData?: Record<number, any>, reverse?: number[]): Promise<Record<number, any>>;
export declare function FormatFunctionDataForDataV2(connections: Connection[], compositionData?: Record<number, any>, reverse?: number[]): Promise<Record<number, any>>;
export declare function FormatFromConnectionsAlteredArrayExternalV2(connections: Connection[], compositionData: Record<number, any>, mainComposition: number[], reverse: number[] | undefined, CountDictionary: Record<number, any>): Promise<any[]>;
`,cm=`import { SearchStructure } from "../../app";
export declare function SearchLinkInternal(searchQuery: SearchStructure, token?: string): Promise<any[]>;
export declare function SearchLinkInternalAll(searchQuery: SearchStructure, token?: string): Promise<any>;
`,lm=`import { SearchQuery } from "../../DataStructures/SearchQuery";
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
`,dm=`import { SearchStructure, SearchQuery } from '../../app';
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
`,um=`import { Connection } from "../../app";
export declare function orderTheConnections(connections: Connection[], order?: string): Connection[];
`,hm=`export declare function GetRequestHeader(contentType?: string | null, accept?: string): Record<string, string>;
export declare function GetRequestHeaderWithAuthorization(contentType?: string, token?: string, Accept?: string): {};
export declare function GetOnlyTokenHeader(): Headers;
`,pm=`export declare function SplitStrings(typeString: string): string[];
`,fm=`import { Concept, InnerActions } from "../../app";
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
    /**
     * Deletions
     */
    /**
     * Queries the backend for connections matching the given criteria and queues all
     * returned connection IDs for bulk deletion when commitTransaction() is called.
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
     * @see {@link commitTransaction} where the queued deletions are executed via bulk delete
     */
    DeleteConnectionsBetween(query: Partial<FetchConnectionQuery>): Promise<number[]>;
    /**
     * Same as {@link DeleteConnectionsBetween} but resolves multiple queries in a single
     * HTTP request to POST /api/get-connection-between.
     *
     * Prefer this over looping DeleteConnectionsBetween — all queries go to the backend
     * in one round trip, and all returned IDs are merged into the same pending-deletion queue.
     * The actual deletion still fires as a single bulk call inside commitTransaction().
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
     * @see {@link commitTransaction} where the queued deletions are executed via bulk delete
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
`,mm=`import { PatcherStructure } from "../DataStructures/PatcherStructure";
export default function UpdateComposition(patcherStructure: PatcherStructure): Promise<any>;
`,ym=`export declare const validImageFormats: string[];
export declare const validDocumentFormats: string[];
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
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadImage(body: FormData, token?: string): Promise<any>;
/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadImageV2(body: FormData, token?: string): Promise<any>;
/**
 * Method to upload file to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export declare function uploadFile(body: FormData, token?: string): Promise<any>;
export declare function getUploadFileLimit(): Promise<{}>;
`,gm=`/**
 * Returns user details synchronously.
 * Priority: in-memory profileCache (encrypted) → legacy localStorage("profile") fallback.
 */
export declare function getUserDetails(): Record<string, any>;
`,vm=`import { Concept } from './../../DataStructures/Concept';
export declare function GetUserGhostId(userId: number, ghostId: number, sessionId?: number): Promise<Concept>;
export declare function AddGhostConcept(concept: Concept, userId: number, sessionId?: number): Promise<void>;
`,Cm=`export declare function ViewInternalData(ids: number[]): Promise<any[]>;
`,bm=`/**
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
`,Im=`import { Concept, InnerActions } from "../../app";
export declare function CreateData(json: any, ofConcept?: Concept | null, typeConcept?: string, actions?: InnerActions): Promise<any>;
export declare function removePrefix(key: string): string;
export declare function addPrefix(key: string): string;
export declare function addArrayPrefix(key: string): string;
export declare function removeArrayPrefix(key: string): string;
export declare function createTypeString(typeConceptString: string, key: any): string;
`,wm=`export declare function requestNextCacheServer(requestData: any, url: string): Promise<Response>;
`,Tm=`export declare const DATA_TYPES_RULES: {
    [key: string]: RegExp;
};
`,km=`export interface FormErrors {
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
`,Am=`import { FormFieldData } from "./interface";
/**
 * Utility function to get input field data and attributes
 * @param fieldName - The Name of the form field.
 * @returns - An object containing the field's value and constraints (type, maxLength, etc.).
 */
export declare const createFormFieldData: (fieldName: string) => FormFieldData;
`,_m=`import { FormErrors, FormFieldData } from "./interface";
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
`,Sm=`import { Concept, Connection } from "../app";
export declare class ConceptCircle {
    concept: Concept;
    x: number;
    y: number;
    radius: number;
    selected: boolean;
    detailsVisible: boolean;
    quadrant: number;
    color: string;
    isComposition: boolean;
    parent: ConceptCircle | null;
    isMoved: boolean;
    childCount: number;
    order: number;
    ctx: null;
    dataConnections: Connection[];
    childrenConcepts: ConceptCircle[];
    isGrouped: boolean;
    canvas: any;
    active: boolean;
    constructor(concept: Concept, ctx: any);
    realign(): void;
    addDataConnections(connections: Connection[]): void;
    setInPlace(newX: any, newY: any, ctx: any): void;
    draw(ctx: any): void;
    drawAsPerParent(): void;
    drawNumber(ctx: any): void;
    activate(): void;
    select(): void;
    makeComposition(): void;
    showDetails(): Promise<void>;
    getQuadrant(ctx: any): void;
    checkWithAnotherConcept(conceptToCheck: ConceptCircle): boolean;
}
`,xm=`import { ConceptCircle } from "./ConceptCircle";
export declare class ConceptCircleList {
    static drawList: ConceptCircle[];
    static addNewConceptCircle(conceptCircle: ConceptCircle): boolean;
    static removeConceptCircle(conceptCircle: ConceptCircle): void;
    static getConceptCircle(conceptId: number, ctx: any): Promise<ConceptCircle | undefined>;
    static getConceptCircleFromList(conceptId: number): ConceptCircle | null;
    static addConceptCircle(conceptId: number, ctx: any): Promise<ConceptCircle>;
}
`,Nm=`import { Connection, Concept } from "../app";
import { ConceptCircle } from "./ConceptCircle";
export declare class ConnectionLine {
    concept: Concept;
    ofConcept: ConceptCircle | undefined;
    toConcept: ConceptCircle | undefined;
    selected: boolean;
    quadrant: number;
    type: null;
    id: number;
    canvas: any;
    ctx: any;
    connection: Connection;
    active: boolean;
    constructor(connection: Connection, ctx: any);
    updateConcept(connection: Connection): Promise<void>;
    draw(ctx: any): void;
    drawNumber(ctx: any): void;
    activate(): void;
    select(): void;
}
`,Lm=`import { ConnectionLine } from "./ConnectionLine";
export declare class ConnectionLineList {
    static drawList: ConnectionLine[];
    static addNewConnectionLine(connectionLine: ConnectionLine): void;
    static removeConnectionLine(connectionLine: ConnectionLine): void;
}
`,Dm=`import { Connection } from "../app";
export declare function printAllConcepts(ctx: any): Promise<void>;
export declare function getLinkData(connection: Connection, ctx: any): Promise<void>;
export declare function getLinkDataOf(connection: Connection, ctx: any): Promise<void>;
export declare function printAllConceptsOfIdWithoutData(ctx: any, id: number): Promise<void>;
export declare function printConcept(ctx: any, id: number): Promise<void>;
export declare function printAllConceptsOfId(ctx: any, id: number): Promise<void>;
export declare function checkIfExists(id: number, conceptIds: number[]): boolean;
`,Pm=`export declare function drawCircle(ctx: any, x: any, y: any, radius: any, color: any): void;
export declare function drawTriangle(ctx: any, x: any, y: any, radius: any, color: any): void;
export declare function drawLine(ctx: any, x1: any, y1: any, x2: any, y2: any, color: any): void;
export declare function drawArrow(ctx: any, fromx: any, fromy: any, tox: any, toy: any, arrowWidth: any, color: any): void;
export declare function drawArc(ctx: any, x1: any, y1: any, x2: any, y2: any, color: any): void;
export declare function getMouseCoords(canvas: any, event: any): {
    x: number;
    y: number;
};
export declare function randomIntFromInterval(min: any, max: any): number;
export declare function getOffsetCoords(mouse: any, conceptCircle: any): {
    x: number;
    y: number;
};
export declare function cursorInRect(mouseX: any, mouseY: any, rectX: any, rectY: any, radius: any): boolean;
`,Bm=`/**
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
`,Rm=`import { BaseObserver } from "./BaseObserver";
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
`,Em=`import { BuilderStatefulWidget } from "./BuilderStatefulWidget";
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
`,Om=`import { StatefulWidget } from "./StatefulWidget";
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
`,Fm=`/**
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
`,Gm=`/**
 * Normalizes CSS by processing nested selectors into flat CSS.
 *
 * Uses PostCSS with postcss-nested to convert nested CSS syntax
 * into standard flat CSS rules.
 *
 * @param cssString - CSS string with nested selectors
 * @returns Promise resolving to normalized CSS string or null on error
 */
export declare function normalizeCSS(cssString: string): Promise<string | null>;
`,Um=`/**
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
`,Mm=`import { WidgetTree } from "./WidgetTree";
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
`,Wm=`import { BuilderStatefulWidget, StatefulWidget, WidgetTree } from "../app";
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
`,jm=`import { BaseWidget } from "./BaseWidget";
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
`,Vm=`/**
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
`,qm=`/**
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
`,Hm=`import { TAssistant, TCustomFunction, TMainLibrary } from "../DataStructures/TypeLibrary";
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
`,$m=`/**
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
`,zm=`import { DependencyObserver } from "./DepenedencyObserver";
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
`,Jm=`import { DependencyObserver } from "./DepenedencyObserver";
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
`,Qm=`import { SearchQuery, SearchStructure } from "../app";
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
`,Ym=`import { Connection } from "../app";
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
`,Xm=`/**
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
`,Km=`import { Connection, DependencyObserver } from "../app";
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
`,Zm=`import { FreeschemaQuery } from "../app";
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
    /**
     * Creates a new schema query observable.
     * @param query - FreeschemaQuery object with search parameters
     * @param token - Authentication token
     */
    constructor(query: FreeschemaQuery, token: string);
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
`,ey=`import { SearchQuery } from "../app";
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
`,ty=`export { init, updateAccessToken };
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
export { uploadAttachment, getUploadFileLimit, uploadFile, uploadImage, uploadImageV2, validDocumentFormats, validImageFormats } from './Services/Upload';
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
export { sendEmail } from "./Services/Mail";
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
export { getUserDetails } from './Services/User/UserFromLocalStorage';
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
declare function updateAccessToken(accessToken?: string, session?: any): void;
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
`,ny=`import { Concept, Connection, LocalTransaction } from "../app";
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
`,oy=`export {};
`;export{_u as $,uu as A,Gl as B,kl as C,hu as D,El as E,Vl as F,ja as G,pu as H,fu as I,mu as J,yu as K,gu as L,vu as M,Cu as N,bu as O,Wc as P,Iu as Q,Ul as R,wu as S,_l as T,Tu as U,Ja as V,$l as W,ku as X,Au as Y,od as Z,iu as _,Xa as a,Oh as a$,Su as a0,xu as a1,Nu as a2,Lu as a3,Du as a4,Pu as a5,Bu as a6,Ru as a7,Eu as a8,Ou as a9,lh as aA,dh as aB,uh as aC,hh as aD,ph as aE,fh as aF,mh as aG,yh as aH,gh as aI,vh as aJ,Ch as aK,bh as aL,Ih as aM,wh as aN,Th as aO,kh as aP,Ah as aQ,_h as aR,Sh as aS,xh as aT,Nh as aU,Lh as aV,Dh as aW,Ph as aX,Bh as aY,Rh as aZ,Eh as a_,Fu as aa,Gu as ab,Uu as ac,Mu as ad,Wu as ae,ju as af,Vu as ag,qu as ah,Hu as ai,$u as aj,zu as ak,Ju as al,Qu as am,Yu as an,Xu as ao,Ku as ap,Zu as aq,eh as ar,th as as,nh as at,oh as au,ih as av,rh as aw,sh as ax,ah as ay,ch as az,Vc as b,$p as b$,Fh as b0,Gh as b1,Uh as b2,Mh as b3,Wh as b4,jh as b5,Vh as b6,qh as b7,Hh as b8,$h as b9,Cp as bA,bp as bB,Ip as bC,wp as bD,Tp as bE,kp as bF,Ap as bG,_p as bH,Sp as bI,xp as bJ,Np as bK,Lp as bL,Dp as bM,Pp as bN,Bp as bO,Rp as bP,Ep as bQ,Op as bR,Fp as bS,Gp as bT,Up as bU,Mp as bV,Wp as bW,jp as bX,Vp as bY,qp as bZ,Hp as b_,zh as ba,Jh as bb,Qh as bc,Yh as bd,Xh as be,Kh as bf,Zh as bg,ep as bh,tp as bi,np as bj,op as bk,ip as bl,rp as bm,sp as bn,ap as bo,cp as bp,lp as bq,dp as br,up as bs,hp as bt,pp as bu,fp as bv,mp as bw,yp as bx,gp as by,vp as bz,Ga as c,om as c$,zp as c0,Jp as c1,Qp as c2,Yp as c3,Xp as c4,Kp as c5,Zp as c6,ef as c7,tf as c8,nf as c9,Lf as cA,Df as cB,Pf as cC,Bf as cD,Rf as cE,Ef as cF,Of as cG,Ff as cH,Gf as cI,Uf as cJ,Mf as cK,Wf as cL,jf as cM,Vf as cN,qf as cO,Hf as cP,$f as cQ,zf as cR,Jf as cS,Qf as cT,Yf as cU,Xf as cV,Kf as cW,Zf as cX,em as cY,tm as cZ,nm as c_,of as ca,rf as cb,sf as cc,af as cd,cf as ce,lf as cf,df as cg,uf as ch,hf as ci,pf as cj,ff as ck,mf as cl,yf as cm,gf as cn,vf as co,Cf as cp,bf as cq,If as cr,wf as cs,Tf as ct,kf as cu,Af as cv,_f as cw,Sf as cx,xf as cy,Nf as cz,ma as d,Na as d$,im as d0,rm as d1,sm as d2,am as d3,cm as d4,lm as d5,dm as d6,um as d7,hm as d8,pm as d9,Um as dA,Mm as dB,Wm as dC,jm as dD,Vm as dE,qm as dF,Hm as dG,$m as dH,zm as dI,Jm as dJ,Qm as dK,Ym as dL,Xm as dM,Km as dN,Zm as dO,ey as dP,ty as dQ,ny as dR,oy as dS,Ud as dT,pd as dU,xd as dV,Cd as dW,Ha as dX,Qa as dY,dc as dZ,jc as d_,fm as da,mm as db,ym as dc,gm as dd,vm as de,Cm as df,bm as dg,Im as dh,wm as di,Tm as dj,km as dk,Am as dl,_m as dm,Sm as dn,xm as dp,Nm as dq,Lm as dr,Dm as ds,Pm as dt,Bm as du,Rm as dv,Em as dw,Om as dx,Fm as dy,Gm as dz,rc as e,il as e0,Ka as e1,xa as e2,Gc as e3,Hc as e4,Il as e5,nc as e6,dd as e7,ul as e8,tc as e9,Bd as ea,uc as eb,vd as ec,td as ed,jd as f,wl as g,gl as h,ll as i,Va as j,za as k,ru as l,Tc as m,su as n,cl as o,va as p,Yd as q,au as r,ua as s,ou as t,yl as u,cu as v,Al as w,Ed as x,lu as y,du as z};
