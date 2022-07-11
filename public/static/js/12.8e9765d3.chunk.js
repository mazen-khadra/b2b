/*! For license information please see 12.8e9765d3.chunk.js.LICENSE.txt */
(this.webpackJsonpb2b=this.webpackJsonpb2b||[]).push([[12],{747:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationRule=t.TabPanelOptionsItem=t.TabPanelOptions=t.TabbedItem=t.Tab=t.StringLengthRule=t.SimpleItem=t.RequiredRule=t.RangeRule=t.PatternRule=t.NumericRule=t.Label=t.Item=t.GroupItem=t.EmptyItem=t.EmailRule=t.CustomRule=t.CompareRule=t.ColCountByScreen=t.ButtonOptions=t.ButtonItem=t.AsyncRule=t.Form=void 0;var i=n(461),l=n(3),a=n(328),r=n(462),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._WidgetClass=i.default,t.subscribableOptions=["formData"],t._defaults={defaultFormData:"formData"},t._expectedChildren={ButtonItem:{optionName:"items",isCollectionItem:!0},colCountByScreen:{optionName:"colCountByScreen",isCollectionItem:!1},EmptyItem:{optionName:"items",isCollectionItem:!0},GroupItem:{optionName:"items",isCollectionItem:!0},item:{optionName:"items",isCollectionItem:!0},SimpleItem:{optionName:"items",isCollectionItem:!0},TabbedItem:{optionName:"items",isCollectionItem:!0}},t}return o(t,e),Object.defineProperty(t.prototype,"instance",{get:function(){return this._instance},enumerable:!1,configurable:!0}),t}(a.Component);t.Form=u,u.propTypes={accessKey:l.string,activeStateEnabled:l.bool,alignItemLabels:l.bool,alignItemLabelsInAllGroups:l.bool,colCount:l.oneOfType([l.number,l.oneOf(["auto"])]),colCountByScreen:l.object,customizeItem:l.func,disabled:l.bool,elementAttr:l.object,focusStateEnabled:l.bool,formData:l.object,height:l.oneOfType([l.func,l.number,l.string]),hint:l.string,hoverStateEnabled:l.bool,items:l.array,labelLocation:l.oneOf(["left","right","top"]),minColWidth:l.number,onContentReady:l.func,onDisposing:l.func,onEditorEnterKey:l.func,onFieldDataChanged:l.func,onInitialized:l.func,onOptionChanged:l.func,optionalMark:l.string,readOnly:l.bool,requiredMark:l.string,requiredMessage:l.string,rtlEnabled:l.bool,screenByWidth:l.func,scrollingEnabled:l.bool,showColonAfterLabel:l.bool,showOptionalMark:l.bool,showRequiredMark:l.bool,showValidationSummary:l.bool,tabIndex:l.number,validationGroup:l.string,visible:l.bool,width:l.oneOfType([l.func,l.number,l.string])};var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"async"},t}(r.default);t.AsyncRule=s;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.ExpectedChildren={buttonOptions:{optionName:"buttonOptions",isCollectionItem:!1}},t.PredefinedProps={itemType:"button"},t}(r.default);t.ButtonItem=p;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="buttonOptions",t.TemplateProps=[{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t}(r.default);t.ButtonOptions=c;var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="colCountByScreen",t}(r.default);t.ColCountByScreen=m;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"compare"},t}(r.default);t.CompareRule=d;var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"custom"},t}(r.default);t.CustomRule=f;var b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"email"},t}(r.default);t.EmailRule=b;var y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.PredefinedProps={itemType:"empty"},t}(r.default);t.EmptyItem=y;var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.ExpectedChildren={colCountByScreen:{optionName:"colCountByScreen",isCollectionItem:!1}},t.TemplateProps=[{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t.PredefinedProps={itemType:"group"},t}(r.default);t.GroupItem=h;var I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.TemplateProps=[{tmplOption:"tabTemplate",render:"tabRender",component:"tabComponent",keyFn:"tabKeyFn"},{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t}(r.default);t.Item=I;var C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="label",t}(r.default);t.Label=C;var O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"numeric"},t}(r.default);t.NumericRule=O;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"pattern"},t}(r.default);t.PatternRule=v;var R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"range"},t}(r.default);t.RangeRule=R;var j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"required"},t}(r.default);t.RequiredRule=j;var P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.ExpectedChildren={AsyncRule:{optionName:"validationRules",isCollectionItem:!0},CompareRule:{optionName:"validationRules",isCollectionItem:!0},CustomRule:{optionName:"validationRules",isCollectionItem:!0},EmailRule:{optionName:"validationRules",isCollectionItem:!0},label:{optionName:"label",isCollectionItem:!1},NumericRule:{optionName:"validationRules",isCollectionItem:!0},PatternRule:{optionName:"validationRules",isCollectionItem:!0},RangeRule:{optionName:"validationRules",isCollectionItem:!0},RequiredRule:{optionName:"validationRules",isCollectionItem:!0},StringLengthRule:{optionName:"validationRules",isCollectionItem:!0},validationRule:{optionName:"validationRules",isCollectionItem:!0}},t.TemplateProps=[{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t.PredefinedProps={itemType:"simple"},t}(r.default);t.SimpleItem=P;var g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"stringLength"},t}(r.default);t.StringLengthRule=g;var N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="tabs",t.IsCollectionItem=!0,t.ExpectedChildren={colCountByScreen:{optionName:"colCountByScreen",isCollectionItem:!1}},t.TemplateProps=[{tmplOption:"tabTemplate",render:"tabRender",component:"tabComponent",keyFn:"tabKeyFn"},{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t}(r.default);t.Tab=N;var F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.ExpectedChildren={tab:{optionName:"tabs",isCollectionItem:!0},tabPanelOptions:{optionName:"tabPanelOptions",isCollectionItem:!1}},t.PredefinedProps={itemType:"tabbed"},t}(r.default);t.TabbedItem=F;var x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="tabPanelOptions",t.DefaultsProps={defaultItems:"items",defaultSelectedIndex:"selectedIndex",defaultSelectedItem:"selectedItem",defaultSelectedItemKeys:"selectedItemKeys",defaultSelectedItems:"selectedItems"},t.ExpectedChildren={item:{optionName:"items",isCollectionItem:!0},tabPanelOptionsItem:{optionName:"items",isCollectionItem:!0}},t.TemplateProps=[{tmplOption:"itemTemplate",render:"itemRender",component:"itemComponent",keyFn:"itemKeyFn"},{tmplOption:"itemTitleTemplate",render:"itemTitleRender",component:"itemTitleComponent",keyFn:"itemTitleKeyFn"}],t}(r.default);t.TabPanelOptions=x;var T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="items",t.IsCollectionItem=!0,t.TemplateProps=[{tmplOption:"tabTemplate",render:"tabRender",component:"tabComponent",keyFn:"tabKeyFn"},{tmplOption:"template",render:"render",component:"component",keyFn:"keyFn"}],t}(r.default);t.TabPanelOptionsItem=T;var S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.OptionName="validationRules",t.IsCollectionItem=!0,t.PredefinedProps={type:"required"},t}(r.default);t.ValidationRule=S,t.default=u},749:function(e,t,n){"use strict";var o=n(755),i=n(756),l=n(26),a=n(757),r=n.n(a),u=n(758),s=n.n(u);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=new s.a.Workbook,u=a.addWorksheet(l.a.t("DataGrid"));Object(o.exportDataGrid)({component:e.component,worksheet:u,customizeCell:function(e){var o=e.gridCell,a=e.excelCell;if("data"===o.rowType){var r=n.find((function(e){return o.column.dataField===e.name}));r&&o.value&&(a.value=o.value.map((function(e){return r.data.find((function(t){return t[r.fieldName1]===e[r.fieldName2]}))[r.displayName]})).join()),t.find((function(e){return o.column.dataField===e}))&&(a.value=Object(i.htmlToText)(o.value,{wordwrap:null})),"creatAt"===o.column.dataField&&(a.value=new Date(o.value).toDateString()),"isActive"===o.column.dataField&&(a.value=o.value?l.a.t("YES"):l.a.t("NO"))}"group"===o.rowType&&(a.fill={type:"pattern",pattern:"solid",fgColor:{argb:"BEDFE6"}}),"totalFooter"===o.rowType&&a.value&&(a.font.italic=!0)}}).then((function(){a.xlsx.writeBuffer().then((function(e){r()(new Blob([e],{type:"application/octet-stream"}),"DataGrid.xlsx")}))})),e.cancel=!0}},751:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(747),t);var l=n(747);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}})},966:function(e,t,n){"use strict";n.r(t);n(0);var o=n(742),i=n(460),l=n(753),a=n.n(l),r=n(751),u=n(456),s=n(89),p=n(752),c=n(754),m=n(749),d=n(1);t.default=function(e){var t=Object(u.a)().t;return Object(d.jsxs)(o.a,{basic:!0,children:[Object(d.jsx)(s.d,{title:t("Companies")}),Object(d.jsx)(o.a,{basic:!0,children:Object(d.jsxs)(a.a,{dataSource:p.f,showBorders:!0,showColumnLines:!0,columnHidingEnabled:!0,wordWrapEnabled:!0,columnAutoWidth:!0,repaintChangesOnly:!0,remoteOperations:!0,allowColumnResizing:!0,allowColumnReordering:!0,onExporting:m.a,loadPanel:{indicatorSrc:c.a},children:[Object(d.jsx)(l.Sorting,{mode:"multiple"}),Object(d.jsx)(l.FilterRow,{visible:!0}),Object(d.jsx)(l.FilterPanel,{visible:!0}),Object(d.jsx)(l.Scrolling,{mode:"infinite"}),Object(d.jsx)(l.SearchPanel,{visible:!0}),Object(d.jsx)(l.Editing,{mode:"popup",useIcons:!0,allowUpdating:!0,allowDeleting:!0,allowAdding:!0,refreshMode:"reshape",children:Object(d.jsx)(l.Form,{children:Object(d.jsxs)(r.Item,{itemType:"group",colCount:2,colSpan:2,children:[Object(d.jsx)(r.Item,{dataField:"nameEn",isRequired:!0}),Object(d.jsx)(r.Item,{dataField:"type",isRequired:!0}),Object(d.jsx)(r.Item,{dataField:"licenseNumber",isRequired:!0}),Object(d.jsx)(r.Item,{dataField:"establishAt",isRequired:!0}),Object(d.jsx)(r.Item,{dataField:"address",colSpan:2}),Object(d.jsx)(r.Item,{dataField:"licenseImgUrl",colSpan:2})]})})}),Object(d.jsx)(l.Column,{dataField:"licenseImgUrl",width:100,allowSorting:!1,allowFiltering:!1,caption:t("License"),cellRender:function(e){var t=e.value;return Object(d.jsx)(i.a,{src:t,fluid:!0})},editCellComponent:s.e}),Object(d.jsx)(l.Column,{dataField:"nameEn",caption:t("Name")}),Object(d.jsx)(l.Column,{dataField:"type",caption:t("Type")}),Object(d.jsx)(l.Column,{dataField:"establishAt",dataType:"date",caption:t("EstablishedAt")}),Object(d.jsx)(l.Column,{dataField:"licenseNumber",caption:t("LicenseNumber")}),Object(d.jsx)(l.Column,{dataField:"address",caption:t("Address")})]})})]})}}}]);
//# sourceMappingURL=12.8e9765d3.chunk.js.map