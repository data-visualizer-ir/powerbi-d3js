var circlecard9DEAB36F795D4460B10E343D7BE36FC2;(()=>{"use strict";var e={264:(e,t,i)=>{i.d(t,{E:()=>n});var a=i(84),s=a.Zb,o=a.Hn;class l extends s{constructor(){super(...arguments),this.defaultColor=new a.zH({name:"defaultColor",displayName:"Default color",value:{value:""}}),this.showAllDataPoints=new a.Zh({name:"showAllDataPoints",displayName:"Show all",value:!0}),this.fill=new a.zH({name:"fill",displayName:"Fill",value:{value:""}}),this.fillRule=new a.zH({name:"fillRule",displayName:"Color saturation",value:{value:""}}),this.fontSize=new a.L_({name:"fontSize",displayName:"Text Size",value:12}),this.name="dataPoint",this.displayName="Data colors",this.slices=[this.defaultColor,this.showAllDataPoints,this.fill,this.fillRule,this.fontSize]}}class n extends o{constructor(){super(...arguments),this.dataPointCard=new l,this.cards=[this.dataPointCard]}}},856:(e,t,i)=>{i.d(t,{u:()=>o});var a=i(261),s=i(264);class o{constructor(e){if(this.formattingSettingsService=new a.Z,this.target=e.element,this.updateCount=0,document){const e=document.createElement("div");e.appendChild(document.createTextNode("Update count:"));const t=document.createElement("p");this.textNode=document.createTextNode(this.updateCount.toString()),t.appendChild(this.textNode),e.appendChild(t),this.target.appendChild(e)}}update(e){if(this.formattingSettings=this.formattingSettingsService.populateFormattingSettingsModel(s.E,e.dataViews),console.log("Visual update",e),this.textNode){var t=e.dataViews[0].metadata.columns[0].displayName;this.textNode.textContent=t.toString()}}getFormattingModel(){return this.formattingSettingsService.buildFormattingModel(this.formattingSettings)}}},84:(e,t,i)=>{i.d(t,{Hn:()=>o,L_:()=>d,Zb:()=>l,Zh:()=>r,zH:()=>c});var a=i(827);class s{}class o{}class l extends s{getFormattingCard(e,t,i){return{displayName:i&&this.displayNameKey?i.getDisplayName(this.displayNameKey):this.displayName,description:i&&this.descriptionKey?i.getDisplayName(this.descriptionKey):this.description,groups:[t],uid:e,analyticsPane:this.analyticsPane}}}class n extends s{constructor(e){super(),Object.assign(this,e)}getFormattingSlice(e,t){const i=this.type,a=this.name,s={displayName:t&&this.displayNameKey?t.getDisplayName(this.displayNameKey):this.displayName,description:t&&this.descriptionKey?t.getDisplayName(this.descriptionKey):this.description,uid:e+"-"+a};return Object.assign(Object.assign({},s),{control:{type:i,properties:this.getFormattingComponent(e,t)}})}getFormattingComponent(e,t){return{descriptor:a.B(e,this),value:this.value}}getRevertToDefaultDescriptor(e){return[{objectName:e,propertyName:this.name}]}setPropertiesValues(e,t){var i;let s=null===(i=null==e?void 0:e[t])||void 0===i?void 0:i[this.name];this.value=a.S(this,s,this.value)}}class r extends n{constructor(e){super(e),this.type="ToggleSwitch"}}class c extends n{constructor(e){super(e),this.type="ColorPicker"}getFormattingComponent(e){return Object.assign(Object.assign({},super.getFormattingComponent(e)),{defaultColor:this.defaultColor,isNoFillItemSupported:this.isNoFillItemSupported})}}class d extends n{constructor(e){super(e),this.type="NumUpDown"}getFormattingComponent(e){return Object.assign(Object.assign({},super.getFormattingComponent(e)),{options:this.options})}}},261:(e,t,i)=>{i.d(t,{Z:()=>a});const a=class{constructor(e){this.localizationManager=e}populateFormattingSettingsModel(e,t){var i,a,s;let o=new e,l=null===(a=null===(i=null==t?void 0:t[0])||void 0===i?void 0:i.metadata)||void 0===a?void 0:a.objects;return l&&(null===(s=o.cards)||void 0===s||s.forEach((e=>{var t,i,a;null===(t=null==e?void 0:e.slices)||void 0===t||t.forEach((t=>{null==t||t.setPropertiesValues(l,e.name)})),null===(a=null===(i=null==e?void 0:e.container)||void 0===i?void 0:i.containerItems)||void 0===a||a.forEach((t=>{var i;null===(i=null==t?void 0:t.slices)||void 0===i||i.forEach((t=>{null==t||t.setPropertiesValues(l,e.name)}))}))}))),o}buildFormattingModel(e){var t;let i={cards:[]};return null===(t=e.cards)||void 0===t||t.forEach((e=>{if(!e)return;const t=e.name,a=e.name+"-group";let s={displayName:void 0,slices:[],uid:a},o=e.getFormattingCard(t,s,this.localizationManager);i.cards.push(o);const l={};if(e.container){const i=e.container,n=a+"-container",r={displayName:this.localizationManager&&i.displayNameKey?this.localizationManager.getDisplayName(i.displayNameKey):i.displayName,description:this.localizationManager&&i.descriptionKey?this.localizationManager.getDisplayName(i.descriptionKey):i.description,containerItems:[],uid:n};i.containerItems.forEach((e=>{const i=e.displayNameKey?e.displayNameKey:e.displayName,a=n+i;let s={displayName:this.localizationManager&&e.displayNameKey?this.localizationManager.getDisplayName(e.displayNameKey):e.displayName,slices:[],uid:a};this.buildFormattingSlices(e.slices,t,l,o,s.slices),r.containerItems.push(s)})),s.container=r}e.slices&&this.buildFormattingSlices(e.slices,t,l,o,s.slices),o.revertToDefaultDescriptors=this.getRevertToDefaultDescriptor(e)})),i}buildFormattingSlices(e,t,i,a,s){null==e||e.forEach((e=>{let o=null==e?void 0:e.getFormattingSlice(t,this.localizationManager);o&&(void 0===i[e.name]?i[e.name]=0:(i[e.name]++,o.uid=`${o.uid}-${i[e.name]}`),e.topLevelToggle?(o.suppressDisplayName=!0,a.topLevelToggle=o):s.push(o))}))}getRevertToDefaultDescriptor(e){var t,i;const a={};let s=[],o=this.getSlicesRevertToDefaultDescriptor(e.name,e.slices,a),l=[];return null===(i=null===(t=e.container)||void 0===t?void 0:t.containerItems)||void 0===i||i.forEach((t=>{l=l.concat(this.getSlicesRevertToDefaultDescriptor(e.name,t.slices,a))})),s=o.concat(l),s}getSlicesRevertToDefaultDescriptor(e,t,i){let a=[];return null==t||t.forEach((t=>{t&&!i[t.name]&&(i[t.name]=!0,a=a.concat(t.getRevertToDefaultDescriptor(e)))})),a}}},827:(e,t,i)=>{function a(e,t){return{objectName:e,propertyName:t.name,selector:t.selector,altConstantValueSelector:t.altConstantSelector,instanceKind:t.instanceKind}}function s(e,t,i){return null==t||"object"==typeof t&&!t.solid?i:t.solid?{value:null==t?void 0:t.solid.color}:(null==e?void 0:e.items)?e.items.find((e=>e.value==t)):t}i.d(t,{B:()=>a,S:()=>s})},738:e=>{e.exports=Function("return this")()}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{i.r(a),i.d(a,{default:()=>o});var e=i(856),t=i(738).powerbi,s={name:"circlecard9DEAB36F795D4460B10E343D7BE36FC2",displayName:"circlecard",class:"Visual",apiVersion:"5.1.0",create:t=>{if(e.u)return new e.u(t);throw"Visual instance not found"},createModalDialog:(e,t,i)=>{const a=globalThis.dialogRegistry;e in a&&new a[e](t,i)},custom:!0};void 0!==t&&(t.visuals=t.visuals||{},t.visuals.plugins=t.visuals.plugins||{},t.visuals.plugins.circlecard9DEAB36F795D4460B10E343D7BE36FC2=s);const o=s})(),circlecard9DEAB36F795D4460B10E343D7BE36FC2=a})();