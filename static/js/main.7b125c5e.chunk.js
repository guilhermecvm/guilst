(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,n){e.exports=n(528)},211:function(e,t,n){},469:function(e,t,n){},528:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),u=(n(211),n(87)),i=n(43),l=n(7),s=n(189),f={gists:[],selected:null,editorState:l.EditorState.createEmpty(),github:JSON.parse(localStorage.getItem("github"))},p=function(e,t){switch(t.type){case"GISTS_SET":return Object(i.a)({},e,{gists:t.payload.gists});case"FILE_SELECT":return Object(i.a)({},e,{selected:t.payload.file,editorState:l.EditorState.createWithContent(Object(l.convertFromRaw)(Object(s.markdownToDraft)(t.payload.file.content)))});case"FILES_UPDATE":return Object(i.a)({},e,{gists:e.gists.map(function(e){return Object(i.a)({},e,{files:e.files.map(function(e){return Object(i.a)({},e,{content:t.payload.files[e.filename]})})})})});case"EDITOR_CHANGE":return Object(i.a)({},e,{editorState:t.payload.editorState});case"GITHUB_SET":return Object(i.a)({},e,{github:t.payload});default:return e}},m=Object(a.createContext)(f),d=Object(a.createContext)(function(){return 0}),h=function(e){var t=e.children,n=Object(a.useReducer)(p,f),c=Object(u.a)(n,2),o=c[0],i=c[1];return r.a.createElement(d.Provider,{value:i},r.a.createElement(m.Provider,{value:o},t))},E=function(){return Object(a.useContext)(d)},b=function(e){return Object(a.useContext)(m)[e]},g=n(27),y=n.n(g),v=n(50),S=n(533),j=n(531),O=n(26),w=n(83),_=S.a.Sider,k=j.a.SubMenu,C=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],o=b("github"),i=b("gists"),l=E(),s=function(){var e=Object(v.a)(y.a.mark(function e(t,n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(o,t);case 2:a=e.sent,l({type:"FILE_SELECT",payload:{file:a[n.filename]}}),l({type:"FILES_UPDATE",payload:{files:a}});case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(_,{collapsible:!0,collapsed:n,onCollapse:c},r.a.createElement(j.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},i.map(function(e){return r.a.createElement(k,{key:e.id,title:r.a.createElement("span",null,r.a.createElement(O.a,{type:"snippets"}),r.a.createElement("span",null,e.name))},e.files.map(function(t){return r.a.createElement(j.a.Item,{key:t.filename,onClick:function(){return s(e.id,t)}},t.filename)}))})))},T=n(198),I=n.n(T),x=n(199),G=n.n(x),N=n(85),A=n.n(N),F=n(200),D=n.n(F),H=(n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),function(e){return{decorators:[new D.a({prism:A.a,getSyntax:function(e){var t=e.getData().get("language");return"object"===typeof A.a.languages[t]?t:null},render:function(e){var t=e.type,n=e.children;return r.a.createElement("span",{className:"prism-token token ".concat(t)},n)}})]}}),L=(n(469),[H(),G()({renderLanguageSelect:function(){return null}})]),B=function(e){if("code-block"===e.getType())return"block-code"},R=function(){var e=b("editorState"),t=E(),n=Object(a.useCallback)(function(e){return t({type:"EDITOR_CHANGE",payload:{editorState:e}})});return r.a.createElement(I.a,{editorState:e,plugins:L,onChange:n,blockStyleFn:B})},P=n(530),U=n(532),J=n(529),V=P.a.Item,W=P.a.create()(function(e){var t=e.className,n=e.form,a=E(),c=b("github"),o=n.getFieldDecorator;return r.a.createElement(P.a,{layout:"inline",onSubmit:function(e){e.preventDefault(),n.validateFields(function(e,t){e||(a({type:"GITHUB_SET",payload:t}),console.log("Received values of form: ",t))})},className:t},r.a.createElement(V,null,o("url",{initialValue:c.url})(r.a.createElement(U.a,{placeholder:"api.github.com"}))),r.a.createElement(V,null,o("user",{initialValue:c.user})(r.a.createElement(U.a,{placeholder:"user"}))),r.a.createElement(V,null,o("token",{initialValue:c.token})(r.a.createElement(U.a,{placeholder:"token",autoComplete:"off"}))),r.a.createElement(V,null,r.a.createElement(J.a,{type:"primary",htmlType:"submit"},"Fetch Gists")))}),K=n(58),q=n.n(K),z=S.a.Header,M=S.a.Content,X=S.a.Footer,$=function(){var e=b("github"),t=E();return Object(a.useEffect)(function(){e&&function(e){return function(){var t=Object(v.a)(y.a.mark(function t(n){var a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(w.b)(n);case 2:a=t.sent,e({type:"GISTS_SET",payload:{gists:a}});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t)(e)},[e]),r.a.createElement(S.a,{className:q.a.layout},r.a.createElement(C,null),r.a.createElement(S.a,null,r.a.createElement(z,{className:q.a.header},r.a.createElement(W,{className:q.a.headerContent})),r.a.createElement(M,{className:q.a.content},r.a.createElement(R,null)),r.a.createElement(X,{className:q.a.footer},"Guilst \u2764\ufe0fCreated by"," ",r.a.createElement("a",{href:"http://guilhermecvm.com",target:"_blank"},"@guilhermecvm"))))},Q=function(){return r.a.createElement(h,null,r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,n){e.exports={layout:"App_layout__Gmgy3",header:"App_header__gwpv0",headerContent:"App_headerContent__3-Kj6",content:"App_content__1tRsq",footer:"App_footer__1PHXo"}},83:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});var a=n(27),r=n.n(a),c=n(50),o=function(t){var n=new Headers;return n.append("Authorization","Basic "+e.from(t.user+":"+t.token).toString("base64")),n},u=function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.url,"/users/").concat(t.user,"/gists"),{method:"GET",headers:o(t)}).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{id:e.id,name:e.description,files:Object.values(e.files)}})}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(t.url,"/gists/").concat(n),{method:"GET",headers:o(t)}).then(function(e){return e.json()}).then(function(e){return e.files}));case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}).call(this,n(357).Buffer)}},[[206,2,1]]]);
//# sourceMappingURL=main.7b125c5e.chunk.js.map