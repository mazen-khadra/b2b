(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[26],{1030:function(e,t,a){"use strict";a.r(t);a(0);var n=a(785),i=a(795),o=a.n(i),l=a(477),r=a(85),c=a(797),d=a(796),u=a(790),s=a(1);t.default=function(e){var t=Object(l.a)().t,a=e.PERMISSIONS;return Object(s.jsxs)(n.a,{basic:!0,children:[Object(s.jsx)(r.e,{title:t("BrandsReport")}),Object(s.jsx)(n.a,{basic:!0,children:Object(s.jsxs)(o.a,{dataSource:c.e,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,allowColumnResizing:!0,allowColumnReordering:!0,onExporting:u.a,loadPanel:{indicatorSrc:d.a},children:[Object(s.jsx)(i.Sorting,{mode:"multiple"}),Object(s.jsx)(i.FilterRow,{visible:!0}),Object(s.jsx)(i.FilterPanel,{visible:!0}),Object(s.jsx)(i.Scrolling,{mode:"infinite"}),Object(s.jsx)(i.SearchPanel,{visible:!0}),Object(s.jsx)(i.Column,{dataField:"name",caption:t("Name")}),Object(s.jsx)(i.Column,{dataField:"description",caption:t("Description")}),Object(s.jsx)(i.Column,{dataField:"creatAt",dataType:"date",caption:t("CreatedAt")}),Object(s.jsx)(i.Column,{dataField:"productsCnt",caption:t("Products")}),Object(s.jsx)(i.Export,{enabled:a.EXPORT})]})})]})}},790:function(e,t,a){"use strict";var n=a(799),i=a(800),o=a(31),l=a(801),r=a.n(l),c=a(802),d=a.n(c);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=new d.a.Workbook,c=l.addWorksheet(o.a.t("DataGrid"));Object(n.exportDataGrid)({component:e.component,worksheet:c,customizeCell:function(e){var n=e.gridCell,l=e.excelCell;if("data"===n.rowType){var r=a.find((function(e){return n.column.dataField===e.name}));r&&n.value&&(l.value=n.value.map((function(e){return r.data.find((function(t){return t[r.fieldName1]===e[r.fieldName2]}))[r.displayName]})).join()),t.find((function(e){return n.column.dataField===e}))&&(l.value=Object(i.htmlToText)(n.value,{wordwrap:null})),"creatAt"===n.column.dataField&&(l.value=new Date(n.value).toDateString()),"isActive"===n.column.dataField&&(l.value=n.value?o.a.t("YES"):o.a.t("NO"))}"group"===n.rowType&&(l.fill={type:"pattern",pattern:"solid",fgColor:{argb:"BEDFE6"}}),"totalFooter"===n.rowType&&l.value&&(l.font.italic=!0)}}).then((function(){l.xlsx.writeBuffer().then((function(e){r()(new Blob([e],{type:"application/octet-stream"}),"DataGrid.xlsx")}))})),e.cancel=!0}}}]);
//# sourceMappingURL=26.326645d5.chunk.js.map