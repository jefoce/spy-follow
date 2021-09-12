(this["webpackJsonpig-analyzer"]=this["webpackJsonpig-analyzer"]||[]).push([[0],{58:function(t,n,e){},86:function(t,n,e){"use strict";e.r(n);var i,r=e(0),a=e.n(r),o=e(24),c=e.n(o),l=(e(58),e(20)),d=e(7),s=e(26),u=e(16),b=e(2),h=e(47),j=e(46),f=e(23),p=e.n(f),v=e(27),x=e(45),O=e.n(x),m=function(t){return t?g.get().data+"/api/proxy-image?original="+t:""},g=(i="host",{get KEY(){return i},clear:function(){return localStorage.removeItem(i)},set:function(t){switch(typeof t){case"string":return localStorage.setItem(i,t);case"object":return localStorage.setItem(i,JSON.stringify(t))}},get:function(){var t=localStorage.getItem(i);if(!t)return{data:null};try{return{data:JSON.parse(t)}}catch(n){return{data:t}}}});g.get().data||g.set("http://localhost:8080");var w={hostname:g.get().data},y=Object(b.createSlice)({name:"Store",initialState:w,reducers:{changeHost:function(t,n){var e=n.payload||"http://localhost:8080";t.hostname=e,g.set(e)}}}),k=y.actions.changeHost,S=y.reducer,C=Object(j.createApi)({reducerPath:"SERVER_API",keepUnusedDataFor:600,baseQuery:function(){var t=Object(v.a)(p.a.mark((function t(n){var e,i,r,a,o,c,l,d,s,u,b;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.path,i=n.method,r=void 0===i?"GET":i,a=n.data,o=n.headers,c=n.skip,t.prev=1,!c){t.next=4;break}return t.abrupt("return",{data:null});case 4:return l=g.get().data+"/api".concat(e),t.next=7,O()(l,{url:l,data:a,method:r,headers:o});case 7:return d=t.sent,t.abrupt("return",{data:d.data});case 11:return t.prev=11,t.t0=t.catch(1),b=t.t0,t.abrupt("return",{error:{status:null===(s=b.response)||void 0===s?void 0:s.status,data:null===(u=b.response)||void 0===u?void 0:u.data}});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(n){return t.apply(this,arguments)}}(),endpoints:function(t){return{search:t.mutation({query:function(t){return{path:"/search/"+t}}}),history:t.query({query:function(){return{path:"/history"}}}),profile:t.query({query:function(t){return{path:"/profile/"+t}}}),analyze:t.mutation({query:function(t){return{path:"/profile/",data:{username:t},method:"POST",headers:{"Content-Type":"application/json"}}}})}}}),z=C.useHistoryQuery,M=C.useProfileQuery,D=C.useAnalyzeMutation,F=C.useSearchMutation,H=e(1),P=Object(b.configureStore)({reducer:Object(s.a)({sliceReducer:S},C.reducerPath,C.reducer),middleware:function(t){return t().concat(C.middleware)}});Object(h.setupListeners)(P.dispatch);var Y,L,R,I,q,E,T,A,J,N,Q,U,B,_,G,K,V,W,X,Z,$,tt,nt,et,it,rt,at,ot,ct,lt=function(t){var n=t.children;return Object(H.jsx)(u.Provider,{children:n,store:P})},dt=e(9),st=e(28),ut=e(18),bt=(Y=function(t){return t.sliceReducer},function(t){return Object(ut.a)(Y,t)})((function(t){return t.hostname})),ht=e(3),jt=e(4),ft=jt.a.input(L||(L=Object(ht.a)(["\n  display      : flex;\n  font-size    : 16px;\n  margin       : 20px;\n  padding      : 5px;\n  width        : 300px;\n  border-radius: 0.5rem;\n  text-align   : center;\n  background   : #666;\n  color        : #fff;\n  font-weight  : 600;\n\n  :focus {\n    background : #777;\n  }\n"]))),pt=jt.a.div(R||(R=Object(ht.a)(["\n\tposition  : relative;\n\ttransition: none !important;\n\tz-index   : 9998;\n\n\t&[data-visible=true] {\n\t\tanimation: forwards open 250ms;\n\t}\n\n\t&[data-visible=false] {\n\t\tanimation: forwards close 250ms;\n\t}\n\n\t@keyframes close {\n\t\t0% {\n\t\t\topacity: 1;\n\t\t\tvisibility: visible;\n\t\t}\n\t\t99% {\n\t\t\topacity: 0;\n\t\t\tvisibility: visible;\n\t\t}\n\t\t100% {\n\t\t\tvisibility: hidden;\n\t\t}\n\t}\n\n\t@keyframes open {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t\tvisibility: visible;\n\t\t}\n\t\t100% {\n\t\t\topacity: 1;\n\t\t\tvisibility: visible;\n\t\t}\n\t}\n"]))),vt=jt.a.div(I||(I=Object(ht.a)(["\n  top             : 0;\n  right           : 0;\n  position        : fixed;\n  display         : flex;\n  opacity         : 0;\n  align-items     : center;\n  justify-content : center;\n  z-index         : 9999;\n\n\t&[data-visible=true] {\n\t\topacity: 1;\n\t}\n\n\t&[data-pin=false] {\n\t\tleft      : 0;\n\t\tbottom    : 0;\n\t\tbackground: rgba(0, 0, 0, 0.8);\n\t}\n\n\t&[data-pin=true] {\n\t\ttop: 10px;\n\t\tposition: absolute;\n\t}\n"]))),xt=jt.a.div(q||(q=Object(ht.a)([" \n\theight: ",";\n\t",";\n  \n\tbackground      : #aaa;\n\tposition        : relative;\n\tdisplay         : flex;\n\tflex-direction  : column;\n\tmin-width       : 200px;\n\tborder-radius   : 1rem;\n\toverflow-y      : hidden;\n\toverflow-x      : hidden;\n\ttransform       : scale(0.97);\n\n\t&[data-visible=true] {\n\t\ttransform: scale(1);\n\t}\n"])),(function(t){var n=t.height;return n?"".concat(n,"px"):"fit-content"}),(function(t){var n=t.width;return n?"width: ".concat(n,"px"):""})),Ot=jt.a.div(E||(E=Object(ht.a)(["\n  display        : flex;\n  justify-content: space-between;\n  align-items    : center;\n  padding        : 12px 20px 14px 20px;\n"]))),mt=jt.a.div(T||(T=Object(ht.a)(["\n\tdisplay       : flex;\n\tflex-direction: column;\n\tpadding       : 0 20px;\n\toverflow-y    : auto;\n\toverflow-x    : auto;\n\n\t&[data-bottom-space=true], :last-child {\n\t\tpadding-bottom: 20px;\n\t}\n"]))),gt=jt.a.div(A||(A=Object(ht.a)(["\n\tdisplay        : flex;\n\tmin-height     : 76px;\n\tmargin-top     : auto;\n\tjustify-content: flex-end;\n\tpadding        : 20px 30px;\n\twidth          : 100%;\n\n\t&[data-hide-splitter='false'] {\n\t\tborder-top: 1px solid #777;\n\t}\n\n\t& > *:not(:last-child) {\n\t\tmargin-right: 30px;\n\t}\n"]))),wt=jt.a.p(J||(J=Object(ht.a)(["\n  font-size  : 18px;\n  font-weight: 600;\n  color      : #333;\n"]))),yt=jt.a.div(N||(N=Object(ht.a)(["\n\theight: 100%;\n\twidth: 100%;\n"]))),kt=function(t){var n=t.height,e=t.width,i=t.children,r=t.containerPin,a=t.contentBottomPadding,o=t.title,c=t.visible,l=t.footer,d=t.hideFooterSplitter,s=void 0!==d&&d,u=t.onClose;return Object(st.a)("esc",(function(){return null===u||void 0===u?void 0:u()})),Object(H.jsx)(pt,{"data-visible":c,children:Object(H.jsx)(vt,{"data-visible":c,"data-pin":null!==r&&void 0!==r&&r,children:Object(H.jsxs)(xt,{"data-visible":c,height:n,width:e,children:[Object(H.jsx)(Ot,{children:Object(H.jsx)(wt,{children:o})}),Object(H.jsx)(mt,{"data-bottom-space":null!==a&&void 0!==a&&a,children:i}),!c&&Object(H.jsx)(yt,{style:{minHeight:n,minWidth:e}}),l&&Object(H.jsx)(gt,{"data-hide-splitter":s,children:l})]})})})},St=function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(r.useState)(t),e=Object(dt.a)(n,2),i=e[0],a=e[1],o=Object(r.useCallback)((function(){return a((function(t){return!t}))}),[]),c=Object(r.useCallback)((function(){return a(!0)}),[]),l=Object(r.useCallback)((function(){return a(!1)}),[]);return[i,o,c,l]}(),n=Object(dt.a)(t,4),e=n[0],i=n[2],a=n[3];Object(st.a)("ctrl+k, cmd+k",i);var o=Object(u.useSelector)(bt),c=Object(u.useDispatch)();return Object(H.jsx)(kt,{title:"Server settings",visible:e,onClose:a,children:Object(H.jsx)(ft,{style:{margin:0},placeholder:"Hostname",value:o||"",onChange:function(t){return c(k(t.target.value))}})})},Ct=e(8),zt=jt.a.button(Q||(Q=Object(ht.a)(["\n  display        : flex;\n  min-width      : fit-content;\n  background     : rgba(136, 136, 136, 0.5);\n  padding        : 18px;\n  border-radius  : 1rem;\n  transition     : 100ms;\n  font-size      : 16px;\n  justify-content: center;\n  color          : #fff;\n  font-weight    : 600;\n  z-index        : 10;\n\n  :active {\n    background: rgba(136, 136, 136, 0.3);\n  }\n\n  :disabled {\n    cursor: default;\n  }\n"]))),Mt=function(t){var n=t.children,e=t.disabled,i=t.value,r=t.onClick;return Object(H.jsx)(zt,{value:i,disabled:e,onClick:r,children:n})},Dt=jt.a.div(U||(U=Object(ht.a)(["\n\tdisplay       : flex;\n\tflex-direction: column;\n\tmin-width     : 300px;\n\n  & > *:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  & > * {\n    min-width: 300px !important;\n  }\n\n  :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),Ft=jt.a.p(B||(B=Object(ht.a)(["\n  color      : #fff;\n  font-size  : 16px;\n  font-weight: 600;\n  text-align : center;\n"]))),Ht=function(t){var n=t.title,e=t.children;return Object(H.jsxs)(Dt,{children:[n&&Object(H.jsx)(Ft,{children:n}),e]})},Pt=e(30),Yt=e.p+"static/media/avatar.7fe14f0a.jpg",Lt=e(51),Rt=jt.a.div(_||(_=Object(ht.a)(["\n  position: relative;\n  display : flex;\n  height  : 100px;\n  width   : 100px;\n\n\timg {\n    top       : 0;\n    left      : 0;\n    position  : absolute;\n    object-fit: contain;\n  }\n"]))),It=function(t){var n=t.src,e=t.placeholderSrc,i=t.height,a=t.width,o=t.blur,c=t.fit,l=t.style,d=Object(r.useState)(!1),s=Object(dt.a)(d,2),u=s[0],b=s[1],h={height:i,width:a,objectFit:c,filter:o?"blur(".concat(o,"px)"):void 0,borderRadius:null===l||void 0===l?void 0:l.borderRadius};return Object(H.jsxs)(Rt,{style:Object(Ct.a)(Object(Ct.a)({},l),{},{height:i,width:a}),children:[e&&!u&&Object(H.jsx)("img",{src:e,style:h}),Object(H.jsx)(Lt.LazyLoadImage,{style:Object(Ct.a)(Object(Ct.a)({},h),{},{visibility:u?"visible":"hidden"}),afterLoad:function(){return b(!0)},delayTime:200,threshold:300,delayMethod:"throttle",src:m(n)})]})},qt=e(22),Et=jt.a.div(G||(G=Object(ht.a)(["\n  display    : flex;\n  align-items: center;\n  width      : 300px;\n\n  img {\n    top          : 0;\n    left         : 0;\n    position     : absolute;\n    border-radius: 100px;\n  }\n"]))),Tt=jt.a.div(K||(K=Object(ht.a)(["\n  display       : flex;\n  flex-direction: column;\n  margin-left   : 15px;\n  text-align    : left;\n  overflow      : hidden;\n  max-width     : 180px;\n\n  p {\n    color  : #fff;\n    outline: none;\n    width  : 180px;\n  }\n"]))),At=jt.a.p(V||(V=Object(ht.a)(["\n  font-weight  : 600 !important;\n  font-size    : 16px !important;\n  white-space  : nowrap;\n  text-overflow: ellipsis;\n  overflow     : hidden;\n"]))),Jt=jt.a.p(W||(W=Object(ht.a)(["\n  font-weight: 500 !important;\n  font-size  : 12px !important;\n  color: #DDD !important;\n"]))),Nt=function(t){var n=t.username,e=t.date,i=t.avatar;return Object(H.jsx)(Mt,{children:Object(H.jsxs)(Et,{children:[Object(H.jsx)(It,{src:i,height:60,width:60,placeholderSrc:Yt}),Object(H.jsxs)(Tt,{children:[Object(H.jsx)(At,{children:n}),e&&Object(H.jsx)(Jt,{children:Object(qt.unix)(e).format("ddd, DD MMM YYYY  HH:mm")})]})]})})},Qt=["username"],Ut=function(t){var n=t.username,e=Object(Pt.a)(t,Qt),i=Object(r.useMemo)((function(){return"https://www.instagram.com/"+n}),[n]);return Object(H.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(H.jsx)(Nt,Object(Ct.a)({username:n},e))})},Bt=function(t){var n=t.list,e=t.title,i=t.opened,r=t.onClose;return Object(H.jsx)(kt,{title:e,height:500,visible:i,onClose:r,children:Object(H.jsx)(Ht,{children:null===n||void 0===n?void 0:n.map((function(t){var n,e=t,i=t;return(null===i||void 0===i?void 0:i.username)?Object(H.jsx)(Ut,Object(Ct.a)({},i),i.id):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("p",{children:Object(qt.unix)(e.time).format("dddd - DD MMMM YYYY -  HH:mm")}),null===e||void 0===e||null===(n=e.items)||void 0===n?void 0:n.map((function(t){return Object(H.jsx)(Ut,Object(Ct.a)({},t),t.id)}))]})}))})})},_t=jt.a.img(X||(X=Object(ht.a)(["\n\tmin-width: inherit;\n  min-height: inherit;\n  height: inherit;\n  width: inherit;\n"]))),Gt=function(t){var n=t.src,e=t.blur,i=void 0===e?20:e,a=t.fit,o=Object(r.useState)(!1),c=Object(dt.a)(o,2),l=c[0],d=c[1];return Object(H.jsx)(_t,{onLoadedData:function(){return d(!1)},src:n,style:{filter:"blur(".concat(i,"px)"),display:l?"none":"inline",objectFit:a}})},Kt=jt.a.div(Z||(Z=Object(ht.a)(["\n  position       : relative;\n  display        : flex;\n  flex-direction : column;\n  align-items    : center;\n  justify-content: center;\n  width          : 100%;\n  min-height     : 100vh;\n  overflow       : hidden;\n\n  & > *:not(:last-child) {\n    margin-bottom: 20px;\n  }\n\n  & > * {\n    width: 60vw;\n    max-width: 800px;\n  }\n"]))),Vt=jt.a.p($||($=Object(ht.a)(["\n  text-align: center;\n  color     : #fff;\n  margin-top: 20px;\n  font-size : 14px;\n"]))),Wt=jt.a.div(tt||(tt=Object(ht.a)(["\n  display   : flex;\n  width     : 100%;\n  margin-top: 30px;\n\n  button {\n    background: #9933ff;\n    border: 0;\n    width: 100%;\n\n    :active {\n      background: #8000ff;\n    }\n\n    :disabled {\n      background: #42176e;\n    }\n  }\n"]))),Xt=jt.a.div(nt||(nt=Object(ht.a)(["\n  position       : relative;\n  display        : flex;\n  flex-direction : column;\n  align-items    : center;\n  justify-content: center;\n  background     : rgba(0,0,0,0.3);\n  padding        : 50px;\n  border-radius  : 2rem;\n  overflow       : hidden;\n\n  & > * {\n    z-index: 1;\n  }\n  \n  p {\n    :first-child {\n      font-size: 22px;\n      font-weight: 600;\n    }\n\n    color     : #fff;\n    text-align: center;\n  }\n\n  & > *:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),Zt=jt.a.div(et||(et=Object(ht.a)(["\n  position : absolute;\n  width    : 100%;\n  max-width: 100%;\n\n  img {\n    width: 120%;\n    margin-left: -10%;\n  }\n"]))),$t=jt.a.div(it||(it=Object(ht.a)(["\n  display              : grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap      : 20px;\n  grid-row-gap         : 20px;\n"]))),tn=e(52),nn=function(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i="".concat(n," (").concat((null===e||void 0===e?void 0:e.length)||0,")");return{children:i,onClick:function(){return t({title:i,list:e,opened:!0})}}}},en=function(t){return function(n){var e,i,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=0,c=Object(tn.a)(a);try{for(c.s();!(r=c.n()).done;){var l=r.value.items;o+=l.length}}catch(u){c.e(u)}finally{c.f()}var d=(null===a||void 0===a||null===(e=a[0])||void 0===e||null===(i=e.items)||void 0===i?void 0:i.length)||0,s="".concat(n," (").concat(o||0,")").concat(d?" +".concat(d):"");return{children:s,onClick:function(){return t({title:s,list:a,opened:!0})}}}},rn=function(){var t,n,e,i,a,o=Object(d.i)().id,c=M(o).data,s=D(),u=Object(dt.a)(s,2),b=u[0],h=u[1],j=h.data,f=h.isLoading,p=j||c,v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(r.useState)({title:"",list:[],opened:!1}),e=Object(dt.a)(n,2),i=e[0],a=e[1],o=nn(a),c=en(a),l=t.user,d=t.history;return{buttons:[o("Followers",null===l||void 0===l?void 0:l.followers),o("Following",null===l||void 0===l?void 0:l.following),o("I don't follow back",null===l||void 0===l?void 0:l.notFollowers),o("Don't follow me back",null===l||void 0===l?void 0:l.notFollowing),c("New followers",null===d||void 0===d?void 0:d.newFollowers),c("New following",null===d||void 0===d?void 0:d.newFollowing),c("Lost followers",null===d||void 0===d?void 0:d.lostFollowers),c("Lost following",null===d||void 0===d?void 0:d.lostFollowing)],modal:i,onClose:function(){return a((function(t){return Object(Ct.a)(Object(Ct.a)({},t),{},{opened:!1})}))}}}(p),x=(null===p||void 0===p||null===(t=p.user)||void 0===t?void 0:t.updated)?Object(qt.unix)(null===p||void 0===p||null===(n=p.user)||void 0===n?void 0:n.updated).format("dddd - DD MMMM YYYY -  HH:mm"):null;return Object(H.jsxs)(Kt,{children:[Object(H.jsx)(Zt,{children:Object(H.jsx)(Gt,{src:m(null===p||void 0===p||null===(e=p.user)||void 0===e?void 0:e.avatar),fit:"cover",blur:50})}),Object(H.jsx)(l.b,{to:bn.Search,style:{zIndex:1},children:Object(H.jsx)(Vt,{children:"SEARCH"})}),Object(H.jsxs)(Xt,{children:[Object(H.jsx)(It,{placeholderSrc:Yt,src:m(null===p||void 0===p||null===(i=p.user)||void 0===i?void 0:i.avatar),height:200,width:200,style:{borderRadius:200}}),Object(H.jsx)("b",{children:Object(H.jsx)("p",{children:(null===p||void 0===p||null===(a=p.user)||void 0===a?void 0:a.username)||o})}),Object(H.jsx)("p",{children:x||"not analyzed"}),Object(H.jsx)(Wt,{children:Object(H.jsx)(Mt,{children:"Analyz".concat(f?"ing":"e"),disabled:f,onClick:function(){return b(o)}})})]}),Object(H.jsx)($t,{children:v.buttons.map((function(t){return Object(H.jsx)(Mt,Object(Ct.a)({},t),t.children)}))}),Object(H.jsx)(Bt,Object(Ct.a)(Object(Ct.a)({},v.modal),{},{onClose:v.onClose}))]})},an=["username"],on=function(t){var n=t.username,e=Object(Pt.a)(t,an),i=Object(r.useMemo)((function(){return bn.Profile.replace(":id",n)}),[n]);return Object(H.jsx)(l.b,{to:i,children:Object(H.jsx)(Nt,Object(Ct.a)({username:n},e))})},cn=jt.a.div(rt||(rt=Object(ht.a)(["\n\tdisplay        : flex;\n\tflex-direction : column;\n\talign-items    : center;\n\tjustify-content: center;\n\toverflow-x     : hidden;\n\toverflow-y     : hidden;\n\tmax-height     : 100vh;\n\tmin-width      : 100vw;\n"]))),ln=jt.a.div(at||(at=Object(ht.a)(["\n  display   : flex;\n  overflow-x: auto;\n  overflow-y: auto;\n\n  & > *:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),dn=jt.a.div(ot||(ot=Object(ht.a)(["\n  display       : flex;\n  flex-direction: column;\n  overflow-x    : auto;\n  overflow-y    : auto;\n"]))),sn=function(){var t=function(){var t=Object(d.h)().search;return new URLSearchParams(t)}().get("q"),n=Object(d.g)().push,e=Object(r.useState)(""),i=Object(dt.a)(e,2),a=i[0],o=i[1],c=F(),l=Object(dt.a)(c,2),s=l[0],u=l[1].data,b=z().data;Object(r.useEffect)((function(){t&&o(t)}),[]),Object(r.useEffect)((function(){var t;return t=setTimeout((function(){if(a){s(a);var t=new URLSearchParams(window.location.search);t.set("q",a),n({search:t.toString()})}}),1e3),function(){return clearTimeout(t)}}),[s,n,a]);var h=Object(r.useCallback)((function(t){return o(t.target.value)}),[]);return Object(H.jsxs)(cn,{children:[Object(H.jsx)(ft,{value:a,spellCheck:!1,onChange:h}),Object(H.jsxs)(ln,{children:[Object(H.jsx)(dn,{children:Object(H.jsx)(Ht,{title:"History",children:null===b||void 0===b?void 0:b.map((function(t){var n=t.id,e=t.updated,i=t.username,r=t.avatar;return Object(H.jsx)(on,{date:e,username:i,avatar:r},n)}))})}),Object(H.jsx)(dn,{children:Object(H.jsx)(Ht,{title:"Search",children:null===u||void 0===u?void 0:u.map((function(t){var n=t.id,e=t.username,i=t.avatar;return Object(H.jsx)(on,{username:e,avatar:i},n)}))})})]})]})},un=jt.a.div(ct||(ct=Object(ht.a)(["\n  width     : 100vw;\n  min-height: 100vh;\n  background: #555;\n"]))),bn={Search:"/search",Profile:"/profile/:id"};var hn=function(){return Object(H.jsx)(lt,{children:Object(H.jsx)(l.a,{children:Object(H.jsxs)(un,{children:[Object(H.jsxs)(d.d,{children:[Object(H.jsx)(d.b,{path:bn.Search,component:sn}),Object(H.jsx)(d.b,{path:bn.Profile,component:rn}),Object(H.jsx)(d.a,{from:"*",to:bn.Search})]}),Object(H.jsx)(St,{})]})})})};c.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(hn,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.b396c288.chunk.js.map