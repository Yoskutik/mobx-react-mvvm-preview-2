"use strict";(self.webpackChunk_yoskutik_mobx_form_schema_docs=self.webpackChunk_yoskutik_mobx_form_schema_docs||[]).push([[947],{1947:function(e,t,r){let a,n,o;r.r(t),r.d(t,{default:function(){return O}});var i,s=r(8993),c=r(1568),l={filename:"CustomSchema.ts",code:"import { FormSchema, watch } from '@yoskutik/mobx-form-schema';\r\nimport { makeObservable, observable } from 'mobx';\r\n\r\ntype TData = [number, string];\r\n\r\nconst compareData = (newValue: TData, oldValue: TData) => newValue[0] === oldValue[0];\r\nconst saveDataToInitialState = (data: TData) => [...data];\r\nconst getDataFromInitialState = (data: TData) => [...data];\r\n\r\nconst customDecorator = watch.configure(\r\n  compareData,\r\n  saveDataToInitialState,\r\n  getDataFromInitialState,\r\n);\r\n\r\nexport class CustomSchema extends FormSchema {\r\n  @customDecorator data: TData = [0, 'string'];\r\n\r\n  constructor() {\r\n    super();\r\n    makeObservable(this, {\r\n      data: observable.shallow,\r\n    });\r\n  }\r\n}\r\n"},h={filename:"CustomExample.tsx",code:"import { observer } from 'mobx-react';\r\nimport { ChangeEvent, useMemo } from 'react';\r\nimport { action } from 'mobx';\r\nimport { SchemaObservationInfo } from '../SchemaObservationInfo';\r\nimport { ObservationButtons } from '../ObservationButtons';\r\nimport { CustomSchema } from './CustomSchema';\r\n\r\nexport const CustomExample = observer(() => {\r\n  const schema = useMemo(() => CustomSchema.create(), []);\r\n\r\n  const handleSaveClick = () => {\r\n    schema.sync();\r\n  };\r\n\r\n  const handleRestoreClick = () => {\r\n    schema.reset();\r\n  };\r\n\r\n  const handleNumberChange = action((evt: ChangeEvent) => {\r\n    schema.data[0] = (evt.target as HTMLInputElement).valueAsNumber;\r\n  });\r\n\r\n  const handleTextChange = action((evt: ChangeEvent) => {\r\n    schema.data[1] = (evt.target as HTMLInputElement).value;\r\n  });\r\n\r\n  return (\r\n    <div>\r\n      <input type=\"number\" value={schema.data[0]} onChange={handleNumberChange} />\r\n      <input type=\"text\" value={schema.data[1]} onChange={handleTextChange} />\r\n\r\n      <ObservationButtons\r\n        onRestore={handleRestoreClick}\r\n        onSave={handleSaveClick}\r\n        schema={schema}\r\n      />\r\n\r\n      <SchemaObservationInfo schema={schema} />\r\n    </div>\r\n  );\r\n});\r\n"},d=r(4309),u=r(8379),m=r(75),p=r(4133),f=r(858),v=r(8520),g=function(e,t,r,a,n,o){function i(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,c=a.kind,l="getter"===c?"get":"setter"===c?"set":"value",h=!t&&e?a.static?e:e.prototype:null,d=t||(h?Object.getOwnPropertyDescriptor(h,a.name):{}),u=!1,m=r.length-1;m>=0;m--){var p={};for(var f in a)p[f]="access"===f?{}:a[f];for(var f in a.access)p.access[f]=a.access[f];p.addInitializer=function(e){if(u)throw TypeError("Cannot add initializers after decoration has completed");o.push(i(e||null))};var v=(0,r[m])("accessor"===c?{get:d.get,set:d.set}:d[l],p);if("accessor"===c){if(void 0===v)continue;if(null===v||"object"!=typeof v)throw TypeError("Object expected");(s=i(v.get))&&(d.get=s),(s=i(v.set))&&(d.set=s),(s=i(v.init))&&n.unshift(s)}else(s=i(v))&&("field"===c?n.unshift(s):d[l]=s)}h&&Object.defineProperty(h,a.name,d),u=!0},y=function(e,t,r){for(var a=arguments.length>2,n=0;n<t.length;n++)r=a?t[n].call(e,r):t[n].call(e);return a?r:void 0};let b=(e,t)=>e[0]===t[0],C=e=>[...e],w=e=>[...e],S=v.watch.configure(b,C,w),x=(a=v.FormSchema,n=[],o=[],i=class extends a{constructor(){super(),this.data=(y(this,n),y(this,o,[0,"string"])),(0,m.rC)(this,{data:m.LO.shallow})}},(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=a[Symbol.metadata])&&void 0!==e?e:null):void 0;g(null,null,[S],{kind:"field",name:"data",static:!1,private:!1,access:{has:e=>"data"in e,get:e=>e.data,set:(e,t)=>{e.data=t}},metadata:t},o,n),t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})})(),i),I=(0,d.Pi)(()=>{let e=(0,u.useMemo)(()=>x.create(),[]),t=()=>{e.sync()},r=()=>{e.reset()},a=(0,m.aD)(t=>{e.data[0]=t.target.valueAsNumber}),n=(0,m.aD)(t=>{e.data[1]=t.target.value});return(0,s.BX)("div",{children:[(0,s.tZ)("input",{type:"number",value:e.data[0],onChange:a}),(0,s.tZ)("input",{type:"text",value:e.data[1],onChange:n}),(0,s.tZ)(f.A,{onRestore:r,onSave:t,schema:e}),(0,s.tZ)(p.E,{schema:e})]})}),k=()=>(0,s.BX)(s.HY,{children:[(0,s.BX)(c.$0,{title:"Custom form changes observation",children:[(0,s.BX)(c.xv,{children:["The out-of-box ",(0,s.tZ)(c.EK,{children:"@watch"}),"cover most possible needs, but they are limited. You can only compare primitives, arrays of primitives, sets of primitives, form schemas and arrays of form schemas. And in order to provide you with an opportunity to create your own comparison function, MobX Form Schema created the ",(0,s.tZ)(c.EK,{children:"watch.configure"})," method."]}),(0,s.BX)(c.xv,{children:["The ",(0,s.tZ)(c.EK,{children:"watch.configure"})," takes 3 arguments:"]}),(0,s.BX)(c.aV,{variant:"ol",children:[(0,s.tZ)("li",{children:"A comparison function."}),(0,s.tZ)("li",{children:"A function to save values to the form schema's initial state. Usually it has to be a copy of an object to prevent changes in the initial state."}),(0,s.tZ)("li",{children:"A function to save value to restore a property's value from the initial state."})]}),(0,s.BX)(c.xv,{children:["The ",(0,s.tZ)(c.EK,{children:"watch.configure"})," returns a function, that can be used as a decorator."]}),(0,s.BX)(c.$0,{title:"Example of custom observation",children:[(0,s.BX)(c.xv,{children:["Let's assume we have a need for an array of two values. And we want to observe only the 1",(0,s.tZ)("sup",{children:"st"})," value. If the 2",(0,s.tZ)("sup",{children:"nd"})," value is changed, the form schema must not react to that."]}),(0,s.tZ)(c.KE,{items:[l,h],children:(0,s.tZ)(I,{})})]})]}),(0,s.tZ)(c.$0,{title:"Next",forcedLevel:3,children:(0,s.tZ)(c.xv,{children:"Just like with validation, there is a manual mode for checking form changes. Read about it in the next article."})})]});var O=k},858:function(e,t,r){r.d(t,{A:function(){return i}});var a=r(8993),n=r(4309),o=r(1568);let i=(0,n.Pi)(({schema:e,onRestore:t,onSave:r})=>(0,a.BX)("div",{style:{marginTop:12},children:[(0,a.tZ)(o.zx,{variant:"primary",onClick:r,disabled:!e.isChanged,children:"Save"}),(0,a.tZ)(o.zx,{onClick:t,disabled:!e.isChanged,style:{marginLeft:12},variant:"primary",children:"Restore"})]}))},4133:function(e,t,r){r.d(t,{E:function(){return s}});var a=r(8993),n=r(4309),o=r(75),i={root:"HQPJ",pre:"gwvf",preItem:"FVu9"};let s=(0,n.Pi)(({schema:e})=>{let t=e=>{let t=(0,o.ZN)(e);return JSON.stringify(t instanceof Set?[...t]:t,void 0,2)};return(0,a.BX)("div",{className:i.root,children:[(0,a.BX)("span",{children:["Is form changed: ",e.isChanged.toString()]}),(0,a.BX)("div",{className:i.pre,children:["Changed properties: ",t(e.changedProperties)]}),(0,a.BX)("div",{className:i.pre,children:["Initial properties properties:",Object.keys(e).map(r=>(0,a.BX)("div",{className:i.preItem,children:[r,": ",t(e.getInitial(r))]},r))]})]})})},4593:function(e,t,r){r.d(t,{FormSchema:function(){return L},factory:function(){return W},nestedSchema:function(){return eo},nestedSchemasArray:function(){return ei},presentation:function(){return et},validate:function(){return Z},watch:function(){return U}});var a,n,o,i=r(75);let s=e=>Symbol(e),c=s(),l=s(),h=s("InitialValues"),d=s("Errors"),u=s("ChangedKeys"),m=s(),p=s(),f=s(),v=s(),g=Object,y="comparator",b="presentation",C="schema",w="schemasArray",S=g.keys,x=new WeakMap,I=(e,t="string")=>typeof e===t,k=e=>x.get(e),O=(e,t,r)=>(r=(r=k(t))&&r[e])?r:(r=I(r=g.getPrototypeOf(t),"object")?r:null)?O(e,r):void 0,E=(e,t)=>O(e,t)||{},D=(e,t,r,a,n,o)=>{t&&(I(r)||I(r,"symbol"))?((n=E(e,t))[f]!==t&&(n=g.assign({},n)),n[r]=a,n[f]=t,(k(t)||x.set(t,{})&&k(t))[e]=n):r.addInitializer(function(){D(e,this,r.name,a)})},Z=(...e)=>(t,r)=>D(l,t,r,{validators:e});Z.if=(e,t)=>(r,a)=>D(l,r,a,{validators:t,condition:e});let T=(e,t,r)=>Y(S(e).concat(S(t))).forEach(e=>r(e)),A=(e,t,r,a)=>!!t[r]&&((!t[r].condition||t[r].condition(e[r],e))&&t[r].validators.find(t=>a=t(e[r],e)),(0,i.z)(()=>I(a)||!0===a?e[d][r]=a:delete e[d][r]),a),B=(e,t,r,a)=>(a=!t[r]||t[r][y](e[r],e[h][r],e,r),(0,i.z)(()=>e[u][a?"delete":"add"](r)),!a),F=(e,t,r,a)=>S(a=E(t,e)).reduce((t,n)=>!!r(e,a,n)||t,!1),X=(e,t,r,a)=>S(a=E(c,e)).forEach(n=>r(e,n,a[n][t])),V=e=>{e[v]&&(e.updateIsValidAll(),e.updateIsChangedAny())},P=(e,t)=>S(e).forEach(e=>t(e));class L{static create(e={},t){let r=new this(e),a=E(m,r),n=E(l,r),o=E(c,r),s={[h]:i.LO.ref,[u]:i.LO,[d]:i.LO,[b]:i.Fl,isChanged:i.Fl,isValid:i.Fl,errors:i.Fl,updateIsPropertyChanged:i.aD,updateIsPropertyValid:i.aD,updateIsChangedAny:i.aD,updateIsValidAll:i.aD,reset:i.aD,sync:i.aD};T(a,e,t=>{a[t]?r[t]=a[t](e[t],e,r,r[t]):t in e&&(r[t]=e[t])}),P(o,(e,t,a)=>{(0,i.wn)(r,e)||(t=i.LO,(a=o[e][y])===j||a===M?t=i.LO.ref:(a===J||a===R||a===K)&&(t=i.LO.shallow),s[e]=t)});try{(0,i.rC)(r,s)}catch(e){P(s,e=>!(0,i.wn)(r,e)&&s[e](r,e)),(0,i.rC)(r)}return r.sync(),r[v]=t,t||(P(o,(e,t)=>(0,i.N7)(r,e,()=>(t&&t(),t=(0,i.EH)(()=>B(r,o,e))),!0)),P(n,e=>(0,i.EH)(()=>A(r,n,e)))),r.onInit&&r.onInit(),r}get presentation(){let e={},t=this,r=E(p,t);return T(r,t,(a,n)=>{(n=r[a])&&n.hidden||(e[a]=n&&n[b]?n[b](t[a],t):t[a])}),e}get isChanged(){return this[u].size>0}get isValid(){return g.values(this[d]).every(e=>!e)}get errors(){return this[d]}get changedProperties(){return this[u]}getInitial(e){return this[h][e]}sync(){let e={};X(this,"saveFn",(t,r,a)=>e[r]=a(t[r],t)),this[h]=e,V(this)}reset(){X(this,"restoreFn",(e,t,r)=>e[t]=r(e[h][t],e)),V(this)}updateIsPropertyValid(e){return A(this,E(l,this),e)}updateIsValidAll(){return F(this,l,A)}updateIsPropertyChanged(e){return B(this,E(c,this),e)}updateIsChangedAny(){return F(this,c,B)}constructor(){this[a]={},this[n]=Y(),this[o]={}}}a=d,n=u,o=h;let N=e=>(e&&e.sync(),e),z=e=>(e&&e.reset(),e),j=(e,t,r,a,n,o)=>(!e||!e.isChanged)&&(e===t||!!e&&!!t&&e.constructor===t.constructor&&((o=S(n=E(c,e)).find(r=>!n[r][y](e[r],t[r],e)))&&(0,i.z)(()=>e[h]=t[h]),!o)),_=e=>(t,r,a,n)=>!!(r&&t?r.length===t.length&&t.every((t,o)=>e(t,r[o],a,n)):r===t),M=(e,t)=>e===t,H=e=>e,K=_(j),R=(e,t,r,a)=>!!(e&&t&&e.size===t.size&&Array.from(e).every(e=>t.has(e))),J=_(M),$=e=>e.slice(),Y=e=>new Set(e),Q=(e,t,r)=>{let a=(a,n)=>D(c,a,n,{[y]:e,saveFn:t,restoreFn:r});return a[y]=e,a},U=Q(M,H,H);U.configure=Q,U[C]=Q(j,N,z),U[w]=Q(K,e=>e?e.map(N):e,e=>e?e.map(z):e),U.array=Q(J,$,$),U.set=Q(R,Y,Y);let W=e=>(t,r)=>D(m,t,r,e),q=(e,t)=>t?e.create(t):t,G=e=>(t,r)=>W((a,n,o,i)=>(t&&I(r)?r:r.name)in n?e(a,n,o,i):i)(t,r);W[C]=e=>G(t=>q(e,t)),W[w]=e=>G(t=>t?t.map(t=>q(e,t)):t),W.set=G(Y);let ee=e=>(t,r)=>D(p,t,r,e),et=e=>ee({[b]:e});et.hidden=ee({hidden:!0});let er=(e,t,r,a,n,o)=>(Z(r)(e,t),a(e,t),n(e,t),et(o)(e,t)),ea=e=>!e.isValid,en=e=>e[b],eo=e=>(t,r)=>er(t,r,ea,U[C],W[C](e),en),ei=e=>(t,r)=>er(t,r,e=>e.some(ea),U[w],W[w](e),e=>e.map(en))},8520:function(e,t,r){e.exports=r(4593)}}]);