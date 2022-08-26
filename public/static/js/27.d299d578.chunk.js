(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[27],{749:function(e,t,a){"use strict";var i=a(756),d=a(757),n=a(27),r=a(758),o=a.n(r),c=a(759),l=a.n(c);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=new l.a.Workbook,c=r.addWorksheet(n.a.t("DataGrid"));Object(i.exportDataGrid)({component:e.component,worksheet:c,customizeCell:function(e){var i=e.gridCell,r=e.excelCell;if("data"===i.rowType){var o=a.find((function(e){return i.column.dataField===e.name}));o&&i.value&&(r.value=i.value.map((function(e){return o.data.find((function(t){return t[o.fieldName1]===e[o.fieldName2]}))[o.displayName]})).join()),t.find((function(e){return i.column.dataField===e}))&&(r.value=Object(d.htmlToText)(i.value,{wordwrap:null})),"creatAt"===i.column.dataField&&(r.value=new Date(i.value).toDateString()),"isActive"===i.column.dataField&&(r.value=i.value?n.a.t("YES"):n.a.t("NO"))}"group"===i.rowType&&(r.fill={type:"pattern",pattern:"solid",fgColor:{argb:"BEDFE6"}}),"totalFooter"===i.rowType&&r.value&&(r.font.italic=!0)}}).then((function(){r.xlsx.writeBuffer().then((function(e){o()(new Blob([e],{type:"application/octet-stream"}),"DataGrid.xlsx")}))})),e.cancel=!0}},983:function(e,t,a){"use strict";a.r(t);a(0);var i=a(744),d=a(755),n=a.n(d),r=a(750),o=(a(772),a(456)),c=a(89),l=a(754),s=a(753),u=a(749),p=a(31),j=a(1),m=[{store:l.t,name:"orders"},{store:l.y,name:"products"},{store:l.F,name:"users"},{store:l.p,name:"offerStatus"}];t.default=Object(p.b)((function(e){var t=Object(o.a)().t,a=e.orders,p=e.users,m=e.products,b=e.offerStatus;return Object(j.jsxs)(i.a,{basic:!0,children:[Object(j.jsx)(c.d,{title:t("Offers")}),Object(j.jsx)(i.a,{basic:!0,children:Object(j.jsxs)(n.a,{dataSource:l.q,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,allowColumnResizing:!0,allowColumnReordering:!0,onExporting:u.a,loadPanel:{indicatorSrc:s.a},children:[Object(j.jsx)(d.Sorting,{mode:"multiple"}),Object(j.jsx)(d.FilterRow,{visible:!0}),Object(j.jsx)(d.FilterPanel,{visible:!0}),Object(j.jsx)(d.Scrolling,{mode:"infinite"}),Object(j.jsx)(d.SearchPanel,{visible:!0}),Object(j.jsxs)(d.Editing,{mode:"popup",useIcons:!0,allowAdding:!0,allowUpdating:!0,allowDeleting:!0,refreshMode:"reshape",children:[Object(j.jsx)(d.Popup,{title:t("Offer"),showTitle:!0,resizeEnabled:!0,children:Object(j.jsx)(d.Position,{my:"middle",at:"middle",of:window})}),Object(j.jsx)(d.Form,{children:Object(j.jsxs)(r.Item,{itemType:"group",colCount:2,colSpan:2,children:[Object(j.jsx)(r.Item,{isRequired:!0,dataField:"tenderId"}),Object(j.jsx)(r.Item,{isRequired:!0,dataField:"quantity"}),Object(j.jsx)(r.Item,{isRequired:!0,dataField:"priceUSD"}),Object(j.jsx)(r.Item,{dataField:"bIncludeDelivery"}),Object(j.jsx)(r.Item,{dataField:"deliveryAddress",editorType:"dxTextArea",colSpan:2,editorOptions:{height:100,inputAttr:{style:"direction:ltr"}}}),Object(j.jsx)(r.Item,{dataField:"deliveryCost"}),Object(j.jsx)(r.Item,{isRequired:!0,dataField:"status"}),Object(j.jsx)(r.Item,{dataField:"acceptedAt"}),Object(j.jsx)(r.Item,{dataField:"excutedAt"})]})})]}),Object(j.jsx)(d.Column,{dataField:"tenderId",caption:t("Order"),editorOptions:{wrapItemText:!0},children:Object(j.jsx)(d.Lookup,{dataSource:{store:a,paginate:!0,pageSize:50},valueExpr:"idTender",displayExpr:"name"})}),Object(j.jsx)(d.Column,{dataField:"tenderCreatorByUserId",caption:t("OrderCreator"),editorOptions:{wrapItemText:!0},children:Object(j.jsx)(d.Lookup,{dataSource:p,valueExpr:"idUser",displayExpr:function(e){return e&&"".concat(e.firstName," ").concat(e.lastName," / ").concat(e.email)}})}),Object(j.jsx)(d.Column,{dataField:"creatByUserId",caption:t("OfferCreator"),editorOptions:{wrapItemText:!0},children:Object(j.jsx)(d.Lookup,{dataSource:p,valueExpr:"idUser",displayExpr:function(e){return e&&"".concat(e.firstName," ").concat(e.lastName," / ").concat(e.email)}})}),Object(j.jsx)(d.Column,{dataField:"productId",caption:t("Product"),editorOptions:{wrapItemText:!0},children:Object(j.jsx)(d.Lookup,{dataSource:m,valueExpr:"idProduct",displayExpr:function(e){return e&&"".concat(e.categoryNameEn," / ").concat(e.brandNameEn," / ").concat(e.nameEn)}})}),Object(j.jsx)(d.Column,{dataField:"tenderQuantity",caption:t("Order Quantity")}),Object(j.jsx)(d.Column,{dataField:"quantity",caption:t("Offer Quantity")}),Object(j.jsx)(d.Column,{dataField:"priceUSD",dataType:"number",caption:t("Price")}),Object(j.jsx)(d.Column,{dataField:"creatAt",dataType:"datetime",caption:t("CreatedAt")}),Object(j.jsx)(d.Column,{dataField:"acceptedAt",dataType:"datetime",caption:t("AcceptedAt")}),Object(j.jsx)(d.Column,{dataField:"excutedAt",dataType:"datetime",caption:t("ExcutedAt")}),Object(j.jsx)(d.Column,{caption:t("IncludeDelivery"),dataType:"boolean",dataField:"bIncludeDelivery",width:100}),Object(j.jsx)(d.Column,{dataField:"deliveryAddress",caption:t("DeliveryAddress")}),Object(j.jsx)(d.Column,{dataField:"deliveryCost",dataType:"number",caption:t("DeliveryCost")}),Object(j.jsx)(d.Column,{dataField:"status",caption:t("Status"),editorOptions:{wrapItemText:!0},children:Object(j.jsx)(d.Lookup,{dataSource:b,valueExpr:"type",displayExpr:"value"})}),Object(j.jsx)(d.Export,{enabled:!0})]})})]})}),m)}}]);
//# sourceMappingURL=27.d299d578.chunk.js.map