(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[24],{749:function(e,t,a){"use strict";var n=a(755),o=a(756),i=a(26),r=a(757),l=a.n(r),c=a(758),d=a.n(c);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=new d.a.Workbook,c=r.addWorksheet(i.a.t("DataGrid"));Object(n.exportDataGrid)({component:e.component,worksheet:c,customizeCell:function(e){var n=e.gridCell,r=e.excelCell;if("data"===n.rowType){var l=a.find((function(e){return n.column.dataField===e.name}));l&&n.value&&(r.value=n.value.map((function(e){return l.data.find((function(t){return t[l.fieldName1]===e[l.fieldName2]}))[l.displayName]})).join()),t.find((function(e){return n.column.dataField===e}))&&(r.value=Object(o.htmlToText)(n.value,{wordwrap:null})),"creatAt"===n.column.dataField&&(r.value=new Date(n.value).toDateString()),"isActive"===n.column.dataField&&(r.value=n.value?i.a.t("YES"):i.a.t("NO"))}"group"===n.rowType&&(r.fill={type:"pattern",pattern:"solid",fgColor:{argb:"BEDFE6"}}),"totalFooter"===n.rowType&&r.value&&(r.font.italic=!0)}}).then((function(){r.xlsx.writeBuffer().then((function(e){l()(new Blob([e],{type:"application/octet-stream"}),"DataGrid.xlsx")}))})),e.cancel=!0}},978:function(e,t,a){"use strict";a.r(t);a(0);var n=a(742),o=a(753),i=a.n(o),r=a(456),l=a(89),c=a(752),d=a(754),s=a(749),u=a(38),p=a(1),m=[{store:c.s,name:"products"},{store:c.A,name:"users"}];t.default=Object(u.b)((function(e){var t=Object(r.a)().t,a=e.products,u=e.users;return Object(p.jsxs)(n.a,{basic:!0,children:[Object(p.jsx)(l.d,{title:t("Orders")}),Object(p.jsx)(n.a,{basic:!0,children:Object(p.jsxs)(i.a,{dataSource:c.m,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,allowColumnResizing:!0,allowColumnReordering:!0,onExporting:s.a,loadPanel:{indicatorSrc:d.a},children:[Object(p.jsx)(o.Sorting,{mode:"multiple"}),Object(p.jsx)(o.FilterRow,{visible:!0}),Object(p.jsx)(o.FilterPanel,{visible:!0}),Object(p.jsx)(o.Scrolling,{mode:"infinite"}),Object(p.jsx)(o.SearchPanel,{visible:!0}),Object(p.jsx)(o.Column,{dataField:"name",caption:t("Name")}),Object(p.jsx)(o.Column,{dataField:"creatByUserId",caption:t("User"),editorOptions:{wrapItemText:!0},children:Object(p.jsx)(o.Lookup,{dataSource:u,valueExpr:"idUser",displayExpr:function(e){return e&&"".concat(e.firstName," ").concat(e.lastName," / ").concat(e.email)}})}),Object(p.jsx)(o.Column,{dataField:"productId",caption:t("Product"),editorOptions:{wrapItemText:!0},children:Object(p.jsx)(o.Lookup,{dataSource:a,valueExpr:"idProduct",displayExpr:function(e){return e&&"".concat(e.categoryNameEn," / ").concat(e.brandNameEn," / ").concat(e.nameEn)}})}),Object(p.jsx)(o.Column,{dataField:"quantity",caption:t("Quantity")}),Object(p.jsx)(o.Column,{dataField:"from",dataType:"datetime",caption:t("From")}),Object(p.jsx)(o.Column,{dataField:"to",dataType:"datetime",caption:t("To")}),Object(p.jsx)(o.Column,{dataField:"closedAt",dataType:"datetime",caption:t("ClosedAt")}),Object(p.jsx)(o.Column,{dataField:"deliveryAddress",caption:t("DeliveryAddress")})]})})]})}),m)}}]);
//# sourceMappingURL=24.b79a9bfe.chunk.js.map