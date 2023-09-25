"use strict";(self.webpackChunk_yoskutik_mobx_form_schema_docs=self.webpackChunk_yoskutik_mobx_form_schema_docs||[]).push([[96],{4105:function(e,r,t){t.d(r,{C1:function(){return a},Do:function(){return i},Ei:function(){return o},b6:function(){return n}});let a=()=>e=>(null==e||!e.trim())&&"This field is required.",i=()=>e=>!/\S+@\S+\.\S+/.test(e)&&"Invalid email format.",n=()=>e=>!/^[a-zA-Z0-9_]+$/.test(e)&&"You can use only latin letters, digits and underscore sign.",o=e=>r=>r.length<e&&`Should be at least ${e} characters.`},1096:function(e,r,t){let a,i,n;t.r(r),t.d(r,{default:function(){return Z}});var o,s=t(8993),l=t(1568),c={filename:"validators.ts",code:"export const required = () => (value?: string) => {\r\n  if (value?.trim()) return false;\r\n  return 'This field is required.';\r\n};\r\n\r\nexport const email = () => (value: string) => {\r\n  if (/\\S+@\\S+\\.\\S+/.test(value)) return false;\r\n  return 'Invalid email format.';\r\n};\r\n\r\nexport const username = () => (value: string) => {\r\n  if (/^[a-zA-Z0-9_]+$/.test(value)) return false;\r\n  return 'You can use only latin letters, digits and underscore sign.';\r\n};\r\n\r\nexport const minLength = (min: number) => (value: string) => {\r\n  if (value.length < min) return `Should be at least ${min} characters.`;\r\n  return false;\r\n};\r\n"},d={filename:"SameExample.tsx",code:"import { observer } from 'mobx-react';\r\nimport { useMemo } from 'react';\r\nimport { TextField } from '@components';\r\nimport { SameSchema1 } from './SameSchema1';\r\n\r\nexport const SameExample = observer(() => {\r\n  const schema = useMemo(() => SameSchema1.create(), []);\r\n\r\n  return (\r\n    <div>\r\n      <TextField schema={schema} field=\"email\" type=\"email\" required label=\"E-mail\" />\r\n      <span>Is form valid: {schema.isValid.toString()}</span>\r\n      <pre style={{ whiteSpace: 'pre-wrap' }}>\r\n        Form errors: {JSON.stringify(schema.errors, undefined, 2)}\r\n      </pre>\r\n    </div>\r\n  );\r\n});\r\n"},h={filename:"SameSchema1.ts",code:"import { FormSchema, validate, watch } from '@yoskutik/mobx-form-schema';\r\nimport { email, required } from '../../LearnStartPage/validators';\r\n\r\nexport class SameSchema1 extends FormSchema {\r\n  @validate(required(), email())\r\n  @watch email = '';\r\n}\r\n"},m={filename:"SameSchema2.ts",code:"import { observable } from 'mobx';\r\nimport { FormSchema, validate, watch } from '@yoskutik/mobx-form-schema';\r\nimport { email, required } from '../../LearnStartPage/validators';\r\n\r\nexport class SameSchema2 extends FormSchema {\r\n  @validate(required(), email())\r\n  @observable email = '';\r\n}\r\n"},u={filename:"SameSchema3.ts",code:"import { makeObservable, observable } from 'mobx';\r\nimport { FormSchema, validate } from '@yoskutik/mobx-form-schema';\r\nimport { email, required } from '../../LearnStartPage/validators';\r\n\r\nexport class SameSchema3 extends FormSchema {\r\n  @validate(required(), email())\r\n  email = '';\r\n\r\n  constructor() {\r\n    super();\r\n    makeObservable(this, {\r\n      email: observable,\r\n    });\r\n  }\r\n}\r\n"},f=t(4309),p=t(8379),v=t(8520),y=t(4105),b=function(e,r,t,a,i,n){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,l=a.kind,c="getter"===l?"get":"setter"===l?"set":"value",d=!r&&e?a.static?e:e.prototype:null,h=r||(d?Object.getOwnPropertyDescriptor(d,a.name):{}),m=!1,u=t.length-1;u>=0;u--){var f={};for(var p in a)f[p]="access"===p?{}:a[p];for(var p in a.access)f.access[p]=a.access[p];f.addInitializer=function(e){if(m)throw TypeError("Cannot add initializers after decoration has completed");n.push(o(e||null))};var v=(0,t[u])("accessor"===l?{get:h.get,set:h.set}:h[c],f);if("accessor"===l){if(void 0===v)continue;if(null===v||"object"!=typeof v)throw TypeError("Object expected");(s=o(v.get))&&(h.get=s),(s=o(v.set))&&(h.set=s),(s=o(v.init))&&i.unshift(s)}else(s=o(v))&&("field"===l?i.unshift(s):h[c]=s)}d&&Object.defineProperty(d,a.name,h),m=!0},g=function(e,r,t){for(var a=arguments.length>2,i=0;i<r.length;i++)t=a?r[i].call(e,t):r[i].call(e);return a?t:void 0};let S=(a=v.FormSchema,i=[],n=[],o=class extends a{constructor(){super(...arguments),this.email=(g(this,i),g(this,n,""))}},(()=>{var e;let r="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=a[Symbol.metadata])&&void 0!==e?e:null):void 0;b(null,null,[(0,v.validate)((0,y.C1)(),(0,y.Do)()),v.watch],{kind:"field",name:"email",static:!1,private:!1,access:{has:e=>"email"in e,get:e=>e.email,set:(e,r)=>{e.email=r}},metadata:r},n,i),r&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})})(),o),w=(0,f.Pi)(()=>{let e=(0,p.useMemo)(()=>S.create(),[]);return(0,s.BX)("div",{children:[(0,s.tZ)(l.nv,{schema:e,field:"email",type:"email",required:!0,label:"E-mail"}),(0,s.BX)("span",{children:["Is form valid: ",e.isValid.toString()]}),(0,s.BX)("pre",{style:{whiteSpace:"pre-wrap"},children:["Form errors: ",JSON.stringify(e.errors,void 0,2)]})]})}),x=()=>(0,s.BX)(s.HY,{children:[(0,s.BX)(l.$0,{title:"Basic validation",children:[(0,s.tZ)(l.xv,{children:"MobX Form Schema provides great opportunities for form validation. And in this article we'll show you all you can do with the library."}),(0,s.BX)(l.$0,{title:"Writting validation rules",children:[(0,s.tZ)(l.xv,{children:"Unlike other JavaScript libraries that provide the ability to configure form validation, MobX Form Schema doesn't provide any validation rules. There are several reasons for that:"}),(0,s.BX)(l.aV,{children:[(0,s.tZ)("li",{children:"Validation rules may differ in different projects. For example, validation for email field may depend on a country for which you are developing your application. Therefore, if there are any rules delivered out of the box, there also must be an opportunity to overload them."}),(0,s.tZ)("li",{children:"Some applications may be multilingual, and with the rules out of the box, we would have to provide some functionality to overload the way of translating error messages."}),(0,s.tZ)("li",{children:"And what is most the important is that writing validation rules from the scratch can be extremely easy."})]}),(0,s.BX)(l.xv,{children:["In MobX Form Schema validation rule is a function, that returns a ",(0,s.tZ)("b",{children:"boolean"})," or a ",(0,s.tZ)("b",{children:"string"}),"."]}),(0,s.BX)(l.aV,{children:[(0,s.BX)("li",{children:["If such a function returns ",(0,s.tZ)(l.EK,{children:"false"}),", the validation rule is considered passed."]}),(0,s.tZ)("li",{children:"If it returns a string, validation is considered not passed, and the string's value is considered to be an error message for the field."}),(0,s.BX)("li",{children:["If it returns ",(0,s.tZ)(l.EK,{children:"true"}),", there's no error message, but validation is not passed."]})]}),(0,s.tZ)(l.KE,{items:[c]})]}),(0,s.BX)(l.$0,{title:"Validation example",children:[(0,s.BX)(l.xv,{children:["To apply validation rules to a property, you must use ",(0,s.tZ)(l.EK,{children:"@validation"})," decorator."]}),(0,s.BX)(l.xv,{children:["By default, all the validation in MobX Form Schema works only if a property in a class is observable. You can use ",(0,s.tZ)(l.EK,{children:"makeObservable"})," function or ",(0,s.tZ)(l.EK,{children:"@observable"}),"decorators from MobX to make them observable. Also, you can use ",(0,s.tZ)(l.EK,{children:"@watch"})," decorator from this library, but be aware that using ",(0,s.tZ)(l.EK,{children:"@watch"})," decorators enables functionality for observing form changes."]}),(0,s.BX)(l.xv,{children:["You can pass several rules into each property. In the example below, validation from ",(0,s.tZ)(l.EK,{children:"email()"})," validator will be checked only after validation from ",(0,s.tZ)(l.EK,{children:"@required"})," is passed."]}),(0,s.tZ)(l.KE,{items:[h,m,u]})]}),(0,s.BX)(l.$0,{title:"Retrieving error message",children:[(0,s.BX)(l.xv,{children:["All the errors of a schema are contained in ",(0,s.tZ)(l.EK,{children:"errors"})," property. If you want to understand whether specific property is valid or not you can see ",(0,s.tZ)(l.EK,{children:"<schema>.errors.<propertyName>"}),"."]}),(0,s.tZ)(l.KE,{items:[h,d,l.yH,l.Pe],children:(0,s.tZ)(w,{})})]}),(0,s.tZ)(l.$0,{title:"How does it update?",children:(0,s.BX)(l.xv,{children:["The validation in MobX Form Schema is applied using ",(0,s.tZ)(l.EK,{children:"autorun"})," function from MobX. Therefore, when any observable property that is used in a function is changed, the validation will be recalculated. Basically it means, that every time a property from a schema is changed its validation will be recalculated."]})})]}),(0,s.tZ)(l.$0,{title:"Next",forcedLevel:3,children:(0,s.tZ)(l.xv,{children:"See how does how does work validation which depends on several properties, and how does conditional validation works in further sections."})})]});var Z=x},4593:function(e,r,t){t.d(r,{FormSchema:function(){return T},factory:function(){return U},nestedSchema:function(){return en},nestedSchemasArray:function(){return eo},presentation:function(){return er},validate:function(){return B},watch:function(){return R}});var a,i,n,o=t(75);let s=e=>Symbol(e),l=s(),c=s(),d=s("InitialValues"),h=s("Errors"),m=s("ChangedKeys"),u=s(),f=s(),p=s(),v=s(),y=Object,b="comparator",g="presentation",S="schema",w="schemasArray",x=y.keys,Z=new WeakMap,E=(e,r="string")=>typeof e===r,k=e=>Z.get(e),F=(e,r,t)=>(t=(t=k(r))&&t[e])?t:(t=E(t=y.getPrototypeOf(r),"object")?t:null)?F(e,t):void 0,I=(e,r)=>F(e,r)||{},X=(e,r,t,a,i,n)=>{r&&(E(t)||E(t,"symbol"))?((i=I(e,r))[p]!==r&&(i=y.assign({},i)),i[t]=a,i[p]=r,(k(r)||Z.set(r,{})&&k(r))[e]=i):t.addInitializer(function(){X(e,this,t.name,a)})},B=(...e)=>(r,t)=>X(c,r,t,{validators:e});B.if=(e,r)=>(t,a)=>X(c,t,a,{validators:r,condition:e});let O=(e,r,t)=>J(x(e).concat(x(r))).forEach(e=>t(e)),C=(e,r,t,a)=>!!r[t]&&((!r[t].condition||r[t].condition(e[t],e))&&r[t].validators.find(r=>a=r(e[t],e)),(0,o.z)(()=>E(a)||!0===a?e[h][t]=a:delete e[h][t]),a),K=(e,r,t,a)=>(a=!r[t]||r[t][b](e[t],e[d][t],e,t),(0,o.z)(()=>e[m][a?"delete":"add"](t)),!a),A=(e,r,t,a)=>x(a=I(r,e)).reduce((r,i)=>!!t(e,a,i)||r,!1),V=(e,r,t,a)=>x(a=I(l,e)).forEach(i=>t(e,i,a[i][r])),P=e=>{e[v]&&(e.updateIsValidAll(),e.updateIsChangedAny())},q=(e,r)=>x(e).forEach(e=>r(e));class T{static create(e={},r){let t=new this(e),a=I(u,t),i=I(c,t),n=I(l,t),s={[d]:o.LO.ref,[m]:o.LO,[h]:o.LO,[g]:o.Fl,isChanged:o.Fl,isValid:o.Fl,errors:o.Fl,updateIsPropertyChanged:o.aD,updateIsPropertyValid:o.aD,updateIsChangedAny:o.aD,updateIsValidAll:o.aD,reset:o.aD,sync:o.aD};O(a,e,r=>{a[r]?t[r]=a[r](e[r],e,t,t[r]):r in e&&(t[r]=e[r])}),q(n,(e,r,a)=>{(0,o.wn)(t,e)||(r=o.LO,(a=n[e][b])===L||a===$?r=o.LO.ref:(a===N||a===H||a===D)&&(r=o.LO.shallow),s[e]=r)});try{(0,o.rC)(t,s)}catch(e){q(s,e=>!(0,o.wn)(t,e)&&s[e](t,e)),(0,o.rC)(t)}return t.sync(),t[v]=r,r||(q(n,(e,r)=>(0,o.N7)(t,e,()=>(r&&r(),r=(0,o.EH)(()=>K(t,n,e))),!0)),q(i,e=>(0,o.EH)(()=>C(t,i,e)))),t.onInit&&t.onInit(),t}get presentation(){let e={},r=this,t=I(f,r);return O(t,r,(a,i)=>{(i=t[a])&&i.hidden||(e[a]=i&&i[g]?i[g](r[a],r):r[a])}),e}get isChanged(){return this[m].size>0}get isValid(){return y.values(this[h]).every(e=>!e)}get errors(){return this[h]}get changedProperties(){return this[m]}getInitial(e){return this[d][e]}sync(){let e={};V(this,"saveFn",(r,t,a)=>e[t]=a(r[t],r)),this[d]=e,P(this)}reset(){V(this,"restoreFn",(e,r,t)=>e[r]=t(e[d][r],e)),P(this)}updateIsPropertyValid(e){return C(this,I(c,this),e)}updateIsValidAll(){return A(this,c,C)}updateIsPropertyChanged(e){return K(this,I(l,this),e)}updateIsChangedAny(){return A(this,l,K)}constructor(){this[a]={},this[i]=J(),this[n]={}}}a=h,i=m,n=d;let _=e=>(e&&e.sync(),e),z=e=>(e&&e.reset(),e),L=(e,r,t,a,i,n)=>(!e||!e.isChanged)&&(e===r||!!e&&!!r&&e.constructor===r.constructor&&((n=x(i=I(l,e)).find(t=>!i[t][b](e[t],r[t],e)))&&(0,o.z)(()=>e[d]=r[d]),!n)),M=e=>(r,t,a,i)=>!!(t&&r?t.length===r.length&&r.every((r,n)=>e(r,t[n],a,i)):t===r),$=(e,r)=>e===r,j=e=>e,D=M(L),H=(e,r,t,a)=>!!(e&&r&&e.size===r.size&&Array.from(e).every(e=>r.has(e))),N=M($),Y=e=>e.slice(),J=e=>new Set(e),W=(e,r,t)=>{let a=(a,i)=>X(l,a,i,{[b]:e,saveFn:r,restoreFn:t});return a[b]=e,a},R=W($,j,j);R.configure=W,R[S]=W(L,_,z),R[w]=W(D,e=>e?e.map(_):e,e=>e?e.map(z):e),R.array=W(N,Y,Y),R.set=W(H,J,J);let U=e=>(r,t)=>X(u,r,t,e),G=(e,r)=>r?e.create(r):r,Q=e=>(r,t)=>U((a,i,n,o)=>(r&&E(t)?t:t.name)in i?e(a,i,n,o):o)(r,t);U[S]=e=>Q(r=>G(e,r)),U[w]=e=>Q(r=>r?r.map(r=>G(e,r)):r),U.set=Q(J);let ee=e=>(r,t)=>X(f,r,t,e),er=e=>ee({[g]:e});er.hidden=ee({hidden:!0});let et=(e,r,t,a,i,n)=>(B(t)(e,r),a(e,r),i(e,r),er(n)(e,r)),ea=e=>!e.isValid,ei=e=>e[g],en=e=>(r,t)=>et(r,t,ea,R[S],U[S](e),ei),eo=e=>(r,t)=>et(r,t,e=>e.some(ea),R[w],U[w](e),e=>e.map(ei))},8520:function(e,r,t){e.exports=t(4593)}}]);