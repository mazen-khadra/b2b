(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[35],{1036:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(14),r=n(41),s=n(0),i=n(785),o=n(795),l=n.n(o),j=n(793),u=n(774),b=n(8),d=n(94),O=n(775),p=n(481),x=n(786),h=n(207),f=n(1033),m=n(780),v=n(781),S=n(858),g=n(784),w=n(797),k=n(85),C=n(1),R=Object(u.a)()((function(e){var t=e.t,n=e.roleId,o=e.resources,l=e.PERMISSIONS,j=Object(s.useState)([]),u=Object(r.a)(j,2),R=u[0],E=u[1],I=Object(s.useState)(!1),y=Object(r.a)(I,2),D=y[0],P=y[1],A=Object(s.useState)(""),F=Object(r.a)(A,2),M=F[0],T=F[1],U=Object(s.useState)(0),N=Object(r.a)(U,2),q=N[0],J=N[1],K=Object(s.useState)(!1),L=Object(r.a)(K,2),W=L[0],z=L[1],B=function(e,t){var n=t.index;J(q===n?-1:n)};Object(s.useEffect)((function(){return G(),function(){return E([])}}),[]);var G=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.D)(n).load();case 3:t=e.sent,a=t.data,E(o.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{permissions:Object(b.a)(Object(b.a)({},e.permissions),a[e.idResource])})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,t=R.map((function(e){return{id:e.idResource,permissions:Object.keys(e.permissions).filter((function(t){return e.permissions[t]}))}})),e.next=5,w.D.reset(n,t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),T(e.t0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return R.length?M?Object(C.jsx)(k.b,{}):Object(C.jsxs)(i.a,{basic:!0,children:[Object(C.jsxs)(O.a,{columns:"2",children:[Object(C.jsx)(p.a,{children:Object(C.jsx)(x.a,{as:"h4",children:t("Resources")})}),Object(C.jsx)(p.a,{textAlign:"right",children:Object(C.jsx)(h.a,{link:!0,name:W?"compress":"expand",onClick:function(){return z(!W)}})})]}),Object(C.jsx)(f.a,{as:m.a,vertical:!0,fluid:!0,children:R.map((function(e,n){return Object(C.jsxs)(m.a.Item,{children:[Object(C.jsx)(f.a.Title,{active:!!W||q===n,content:Object(C.jsx)(x.a,{as:"h4",style:{padding:0,margin:0},color:W||q===n?"blue":"black",children:e.name.toUpperCase()}),index:n,onClick:W?null:B}),Object(C.jsx)(f.a.Content,{active:!!W||q===n,content:Object(C.jsx)(v.a,{unstackable:!0,size:"mini",children:Object(C.jsx)(v.a.Group,{inline:!0,widths:"equal",children:Object.keys(e.permissions).map((function(t){return{label:t,value:e.permissions[t]}})).map((function(e){return Object(C.jsx)(v.a.Checkbox,{label:t(e.label),checked:e.value,onChange:function(){return function(e,t){var n=Object(d.a)(R);n[e].permissions[t.label]=!t.value,E(n)}(n,e)}},e.label)}))})})})]},n)}))}),Object(C.jsx)(S.a,{hidden:!0}),l.UPDATE&&Object(C.jsx)(g.a,{icon:"save",loading:D,positive:!0,labelPosition:"left",content:t("Save"),onClick:H})]}):Object(C.jsx)(i.a,{basic:!0,loading:!0})})),E=n(796);t.default=Object(u.a)()((function(e){var t=e.t,n=e.PERMISSIONS,u=Object(s.useState)([]),b=Object(r.a)(u,2),d=b[0],O=b[1];Object(s.useEffect)((function(){d.length||p()}),[]);var p=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.b.load();case 3:t=e.sent,n=t.data,O(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(i.a,{basic:!0,children:[Object(C.jsx)(k.e,{title:t("Roles")}),Object(C.jsx)(i.a,{basic:!0,children:Object(C.jsxs)(l.a,{dataSource:w.E,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,hoverStateEnabled:!0,onSelectionChanged:function(e){e.component.collapseAll(-1),e.component.expandRow(e.currentSelectedRowKeys[0])},onContentReady:function(e){e.component.getSelectedRowKeys().length},loadPanel:{indicatorSrc:E.a},children:[Object(C.jsx)(o.Sorting,{mode:"multiple"}),Object(C.jsx)(o.FilterRow,{visible:!0}),Object(C.jsx)(o.FilterPanel,{visible:!0}),Object(C.jsx)(o.Scrolling,{mode:"virtual"}),Object(C.jsx)(o.SearchPanel,{visible:!0}),Object(C.jsx)(o.Selection,{mode:"single"}),Object(C.jsx)(o.Editing,{mode:"form",useIcons:!0,allowUpdating:n.UPDATE,allowDeleting:n.DELETE,allowAdding:n.ADD,refreshMode:"reshape",children:Object(C.jsx)(o.Form,{children:Object(C.jsx)(j.Item,{itemType:"group",colCount:2,colSpan:2,children:Object(C.jsx)(j.Item,{dataField:"name",colSpan:2,isRequired:!0})})})}),Object(C.jsx)(o.Column,{dataField:"idRole",caption:t("ID")}),Object(C.jsx)(o.Column,{dataField:"name",caption:t("Name"),setCellValue:function(e,t){e.idRole=t.replaceAll(" ","_").toUpperCase(),e.name=t}}),Object(C.jsx)(o.MasterDetail,{enabled:!1,render:function(e){var t=e.data.idRole;return Object(C.jsx)(R,{roleId:t,PERMISSIONS:n,resources:d})}})]})})]})}))}}]);
//# sourceMappingURL=35.059a6315.chunk.js.map