(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[35],{976:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(32),r=n(62),i=n(53),s=n(0),u=n(744),b=n(739),o=n(741),l=n(456),j=n(773),p=n(63),f=n(89),O=n(1);t.default=function(){var e=Object(l.a)().t,t=Object(s.useState)(""),n=Object(i.a)(t,2),v=n[0],d=n[1],h=Object(s.useState)(!1),x=Object(i.a)(h,2),y=x[0],P=x[1],k=Object(s.useState)(!1),m=Object(i.a)(k,2),w=m[0],g=m[1],E=Object(j.b)({defaultValues:{contentEn:"",idPrivacyPolicy:null}}),S=E.control,C=E.handleSubmit,J=E.setValue;Object(s.useEffect)((function(){V()}),[]);var V=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var t,n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,p.b.get("/admin/privacy-policy/full");case 4:t=e.sent,n=t.data.data,(c=n[0])&&(J("contentEn",c.contentEn),J("idPrivacyPolicy",c.idPrivacyPolicy)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),d(e.t0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,p.b.post("/admin/privacy-policy/update",t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),d(e.t0);case 9:return e.prev=9,P(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}();return w?Object(O.jsx)(f.h,{}):v?Object(O.jsx)(f.b,{}):Object(O.jsxs)(u.a,{basic:!0,children:[Object(O.jsx)(f.d,{title:e("Privacy")}),Object(O.jsx)(u.a,{basic:!0,children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a,{name:"contentEn",control:S,render:function(t){var n=t.field;return Object(O.jsx)(b.a.TextArea,Object(c.a)(Object(c.a)({label:e("Privacy")},n),{},{ref:null,onChange:n.onChange}))}}),Object(O.jsx)(o.a,{fluid:!0,loading:y,content:e("Save"),primary:!0,onClick:C((function(e){return A(e)}),(function(e){return console.log(e)}))})]})})]})}}}]);
//# sourceMappingURL=35.28a8c99f.chunk.js.map