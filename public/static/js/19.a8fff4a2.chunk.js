(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[19],{749:function(e,t,n){"use strict";var a=n(755),c=n(756),r=n(26),i=n(757),d=n.n(i),o=n(758),l=n.n(o);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=new l.a.Workbook,o=i.addWorksheet(r.a.t("DataGrid"));Object(a.exportDataGrid)({component:e.component,worksheet:o,customizeCell:function(e){var a=e.gridCell,i=e.excelCell;if("data"===a.rowType){var d=n.find((function(e){return a.column.dataField===e.name}));d&&a.value&&(i.value=a.value.map((function(e){return d.data.find((function(t){return t[d.fieldName1]===e[d.fieldName2]}))[d.displayName]})).join()),t.find((function(e){return a.column.dataField===e}))&&(i.value=Object(c.htmlToText)(a.value,{wordwrap:null})),"creatAt"===a.column.dataField&&(i.value=new Date(a.value).toDateString()),"isActive"===a.column.dataField&&(i.value=a.value?r.a.t("YES"):r.a.t("NO"))}"group"===a.rowType&&(i.fill={type:"pattern",pattern:"solid",fgColor:{argb:"BEDFE6"}}),"totalFooter"===a.rowType&&i.value&&(i.font.italic=!0)}}).then((function(){i.xlsx.writeBuffer().then((function(e){d()(new Blob([e],{type:"application/octet-stream"}),"DataGrid.xlsx")}))})),e.cancel=!0}},982:function(e,t,n){"use strict";n.r(t);var a=n(53),c=n(0),r=n(742),i=n(192),d=n(815),o=n(753),l=n.n(o),s=n(751),u=n(456),j=n(89),b=n(752),p=n(754),O=n(749),f=n(38),x=n(762),m=n(31),h=n(64),v=n(54),g=n(8),y=n(745),I=n(458),C=n(741),w=n(737),k=n(744),F=n(732),S=n(26),E=n(68),B=n.p+"static/media/wall1.7a23f64d.jpg",A=("url(".concat(B,")"),{padding:0,margin:1}),P=n(1),N=Object(F.a)()((function(e){var t=e.idUser,n=e.t,d="ar"===S.a.language,o=A,l=Object(c.useState)([]),s=Object(a.a)(l,2),u=s[0],p=s[1],O=Object(c.useState)([]),f=Object(a.a)(O,2),F=f[0],B=f[1],N=Object(c.useState)([]),R=Object(a.a)(N,2),U=R[0],D=R[1],T=Object(c.useState)([]),q=Object(a.a)(T,2),z=q[0],W=q[1],G=Object(c.useState)({categoryId:null,brandId:null}),L=Object(a.a)(G,2),J=L[0],M=L[1],H=Object(c.useState)(!1),Y=Object(a.a)(H,2),K=Y[0],Q=Y[1],V=Object(c.useState)(""),X=Object(a.a)(V,2),Z=X[0],$=X[1],_=Object(c.useState)(!1),ee=Object(a.a)(_,2),te=(ee[0],ee[1],function(e){var t=e.props,n=e.value;M(Object(g.a)(Object(g.a)({},J),{},Object(v.a)({brandId:null},t,n)))});Object(c.useEffect)((function(){ne(),ae(),ce()}),[]);var ne=function(){var e=Object(h.a)(Object(m.a)().mark((function e(){var n,a,c,r,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.prev=1,e.next=4,b.e.load();case 4:return a=e.sent,c=a.data,e.next=8,E.b.get("/admin/users/cares/full",{params:{idUser:t}});case 8:r=e.sent,i=r.data.data,p(c),W(i),te({props:"categoryId",value:null===(n=c[0])||void 0===n?void 0:n.idCategory}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),$(e.t0);case 18:return e.prev=18,Q(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(h.a)(Object(m.a)().mark((function e(){var t,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.c.load();case 3:t=e.sent,n=t.data,B(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),$(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(h.a)(Object(m.a)().mark((function e(){var t,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.s.load();case 3:t=e.sent,n=t.data,D(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),$(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return K?Object(P.jsx)(r.a,{basic:!0,padded:!0,loading:K}):Z?Object(P.jsx)(j.b,{}):Object(P.jsx)(r.a,{basic:!0,children:Object(P.jsxs)(y.a,{columns:"equal",stretched:!0,verticalAlign:"top",divided:!0,children:[Object(P.jsxs)(I.a,{children:[Object(P.jsx)(C.a,{as:"h5",content:n("Categories")}),Object(P.jsx)(w.a,{children:u.map((function(e,n){var a=J.categoryId===e.idCategory;return Object(P.jsx)(w.a.Field,{style:o,children:Object(P.jsxs)(y.a,{columns:"2",children:[Object(P.jsx)(I.a,{width:"2",children:Object(P.jsx)(k.a,{checked:!!z.find((function(t){return t.categoryId===e.idCategory})),onChange:function(n,a){var c=a.checked;!function(e){z.find((function(t){return t.categoryId===e.idCategory}))?W(z.filter((function(t){return t.categoryId!==e.idCategory}))):W([].concat(Object(x.a)(z),[{idUser:t,categoryId:e.idCategory,brandId:null,productId:null}]))}(e),c&&te({props:"categoryId",value:e.idCategory})},disabled:!0})}),Object(P.jsx)(I.a,{width:"14",children:Object(P.jsxs)("div",{onClick:function(){return te({props:"categoryId",value:e.idCategory})},style:{display:"flex",justifyContent:"space-between",color:a?"blue":"black",cursor:"pointer"},children:[Object(P.jsx)("label",{style:{cursor:"pointer"},children:d?e.nameAr:e.nameEn}),Object(P.jsx)(i.a,{link:!0,name:a?"chevron right":"chevron down",color:a?"blue":"black"})]})})]})},n)}))})]}),Object(P.jsxs)(I.a,{children:[Object(P.jsx)(C.a,{as:"h5",content:n("Brands")}),Object(P.jsx)(w.a,{children:F.filter((function(e){return e.categoryId===J.categoryId})).map((function(e,n){var a=J.brandId===e.idBrand;return Object(P.jsx)(w.a.Field,{style:o,children:Object(P.jsxs)(y.a,{columns:"2",children:[Object(P.jsx)(I.a,{width:"2",children:Object(P.jsx)(k.a,{checked:!!z.filter((function(e){return e.categoryId===J.categoryId})).find((function(t){return t.brandId===e.idBrand})),onChange:function(n,a){var c=a.checked;!function(e){if(-1!==z.findIndex((function(t){return t.categoryId===J.categoryId&&t.brandId===e.idBrand}))){var n=z.filter((function(t){return t.categoryId===J.categoryId&&t.brandId===e.idBrand}));W(z.filter((function(e){return!n.includes(e)})))}else W([].concat(Object(x.a)(z),[{idUser:t,categoryId:J.categoryId,brandId:e.idBrand,productId:null}]))}(e),c&&te({props:"brandId",value:e.idBrand})},disabled:!0})}),Object(P.jsx)(I.a,{width:"14",children:Object(P.jsxs)("div",{onClick:function(){return te({props:"brandId",value:e.idBrand})},style:{display:"flex",justifyContent:"space-between",color:a?"blue":"black",cursor:"pointer"},children:[Object(P.jsx)("label",{style:{cursor:"pointer"},children:d?e.nameAr:e.nameEn}),Object(P.jsx)(i.a,{link:!0,name:a?"chevron right":"chevron down",color:a?"blue":"black"})]})})]})},n)}))})]}),Object(P.jsxs)(I.a,{children:[Object(P.jsx)(C.a,{as:"h5",content:n("Products")}),Object(P.jsx)(w.a,{children:U.filter((function(e){return e.brandId===J.brandId})).map((function(e,n){return Object(P.jsx)(w.a.Field,{children:Object(P.jsx)(k.a,{label:d?e.nameAr:e.nameEn,checked:!!z.filter((function(e){return e.categoryId===J.categoryId&&e.brandId===J.brandId})).find((function(t){return t.productId===e.idProduct})),onChange:function(){return function(e){var n=z.findIndex((function(t){return t.categoryId===J.categoryId&&t.brandId===J.brandId&&t.productId===e.idProduct}));if(-1!==n){var a=Object(x.a)(z);a.splice(n,1),W(a)}else W([].concat(Object(x.a)(z),[{idUser:t,categoryId:J.categoryId,brandId:J.brandId,productId:e.idProduct}]))}(e)},disabled:!0})},n)}))})]})]})})})),R=[{store:b.g,name:"companies"}];t.default=Object(f.b)((function(e){var t=Object(u.a)().t,n=e.companies,f=Object(c.useState)(!1),x=Object(a.a)(f,2),m=x[0],h=x[1],v=Object(c.useState)([]),g=Object(a.a)(v,2),y=g[0],I=g[1];return Object(P.jsxs)(r.a,{basic:!0,children:[Object(P.jsx)(j.d,{title:t("Users")}),Object(P.jsx)(r.a,{basic:!0,children:Object(P.jsxs)(l.a,{dataSource:b.z,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,allowColumnResizing:!0,allowColumnReordering:!0,onExporting:O.a,loadPanel:{indicatorSrc:p.a},children:[Object(P.jsx)(o.Sorting,{mode:"multiple"}),Object(P.jsx)(o.FilterRow,{visible:!0}),Object(P.jsx)(o.FilterPanel,{visible:!0}),Object(P.jsx)(o.Scrolling,{mode:"infinite"}),Object(P.jsx)(o.SearchPanel,{visible:!0}),Object(P.jsx)(o.Editing,{mode:"popup",useIcons:!0,allowUpdating:!0,allowDeleting:!0,allowAdding:!0,refreshMode:"reshape",children:Object(P.jsx)(o.Form,{children:Object(P.jsxs)(s.Item,{itemType:"group",colCount:2,colSpan:2,children:[Object(P.jsx)(s.Item,{dataField:"firstName",isRequired:!0}),Object(P.jsx)(s.Item,{dataField:"lastName",isRequired:!0}),Object(P.jsx)(s.Item,{dataField:"email",isRequired:!0}),Object(P.jsx)(s.Item,{dataField:"mobile",isRequired:!0}),Object(P.jsx)(s.Item,{dataField:"companyId"}),Object(P.jsx)(s.Item,{dataField:"isActive"})]})})}),Object(P.jsx)(o.Column,{dataField:"firstName",caption:t("FirstName")}),Object(P.jsx)(o.Column,{dataField:"lastName",caption:t("LastName")}),Object(P.jsx)(o.Column,{dataField:"email",caption:t("Email")}),Object(P.jsx)(o.Column,{dataField:"mobile",caption:t("Mobile")}),Object(P.jsx)(o.Column,{dataField:"companyId",caption:t("Company"),children:Object(P.jsx)(o.Lookup,{dataSource:n,valueExpr:"idCompany",displayExpr:"nameEn"})}),Object(P.jsx)(o.Column,{dataField:"roleId",caption:t("Role")}),Object(P.jsx)(o.Column,{caption:t("Active"),dataType:"boolean",dataField:"isActive",width:100}),Object(P.jsxs)(o.Column,{type:"buttons",caption:t("Actions"),children:[Object(P.jsx)(o.Button,{name:"edit"}),Object(P.jsx)(o.Button,{name:"delete"})]}),Object(P.jsx)(o.Column,{type:"buttons",caption:t("PreferredProducts"),cellRender:function(e){var t=e.data;return Object(P.jsx)("div",{children:Object(P.jsx)(i.a,{name:"list",link:!0,color:"blue",onClick:function(){return function(e){I([e]),h(!0)}(t)}})})}})]})}),Object(P.jsx)(d.a,{onClose:function(){h(!1),I([])},open:m,content:y[0]&&Object(P.jsx)(N,{idUser:y[0].idUser}),closeIcon:!0,header:t("PreferredProducts"),size:"large",centered:!0,closeOnDimmerClick:!1})]})}),R)}}]);
//# sourceMappingURL=19.a8fff4a2.chunk.js.map