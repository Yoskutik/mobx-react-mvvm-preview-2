"use strict";(self.webpackChunk_yoskutik_mobx_form_schema_docs=self.webpackChunk_yoskutik_mobx_form_schema_docs||[]).push([[925],{9928:function(e,r){r.Z={page:"RlzX",link:"vzUU",referenceHighlighter:"ug4B"}},3925:function(e,r,n){n.r(r),n.d(r,{default:function(){return l}});var t=n(8993),o=n(1568),a={filename:"presentationDeclaration.ts",code:"type FieldOrGetDecoratorWithContext<This, Result> = /* Declared dynamically */ any;\r\n\r\nexport type TPresentation<This, Value> = (value: Value, schema: This) => any;\r\n\r\nexport interface Presentation {\r\n  <This, Value>(\r\n    presentation: TPresentation<This, Value>,\r\n  ): FieldOrGetDecoratorWithContext<This, Value>;\r\n}\r\n"},i={filename:"PresentationSchema.ts",code:"import { FormSchema, presentation } from '@yoskutik/mobx-form-schema';\r\n\r\nconst presentProp1 = (prop1Value: number) => prop1Value + 10;\r\n\r\nconst presentProp2 = (prop2Value: number, schema: PresentationSchema) => (\r\n  prop2Value + schema.prop1 * 10\r\n);\r\n\r\nexport class PresentationSchema extends FormSchema {\r\n  @presentation(presentProp1)\r\n  prop1 = 1;\r\n\r\n  @presentation(presentProp2)\r\n  prop2 = 2;\r\n\r\n  prop3 = 3;\r\n}\r\n\r\nconst schema = PresentationSchema.create();\r\n\r\nconsole.log(schema.presentation);\r\n// { prop1: 11, prop2: 12, prop3: 3 }\r\n"},s={filename:"PresentationHiddenSchema.ts",code:"import { FormSchema, presentation } from '@yoskutik/mobx-form-schema';\r\n\r\nexport class PresentationSchema extends FormSchema {\r\n  @presentation.hidden\r\n  prop1 = 1;\r\n\r\n  prop2 = 2;\r\n}\r\n\r\nconst schema = PresentationSchema.create();\r\n\r\nconsole.log(schema.presentation);\r\n// { prop2: 2 }\r\n"},c=n(9928);let h=()=>(0,t.BX)(t.HY,{children:[(0,t.BX)(o.$0,{title:(0,t.BX)(t.HY,{children:["The ",(0,t.tZ)(o.EK,{children:"@presentation"})," decorator"]}),children:[(0,t.BX)(o.xv,{children:["You can retrieve your form schema's data presentation by using the ",(0,t.tZ)(o.EK,{children:"presentation"})," getter. By default, this returns an object of the form schema's values without any utility methods or data like the ",(0,t.tZ)(o.EK,{children:"errors"})," objects or the ",(0,t.tZ)(o.EK,{children:"getInitial"})," method. But you can modify its value for each property separately if you apply the ",(0,t.tZ)(o.EK,{children:"@presentation"})," decorator."]}),(0,t.tZ)(o.xv,{children:"API reference:"}),(0,t.tZ)(o.oP,{className:c.Z.referenceHighlighter,code:a.code}),(0,t.BX)(o.xv,{children:["The ",(0,t.tZ)(o.EK,{children:"@presentation"})," receive a function, which receives 2 arguments:"]}),(0,t.BX)(o.aV,{variant:"ol",children:[(0,t.tZ)("li",{children:"The current value of a property;"}),(0,t.tZ)("li",{children:"An entire schema."})]}),(0,t.tZ)(o.$0,{title:"Example of usage",children:(0,t.tZ)(o.KE,{items:[i]})})]}),(0,t.BX)(o.$0,{title:(0,t.BX)(t.HY,{children:["The ",(0,t.tZ)(o.EK,{children:"@presentation.hidden"})," decorator"]}),children:[(0,t.BX)(o.xv,{children:["The ",(0,t.tZ)(o.EK,{children:"@presentation.hidden"})," is a modification of the ",(0,t.tZ)(o.EK,{children:"@presentation"})," decorator, which must be used in order to completely delete the data from the presentation."]}),(0,t.BX)(o.xv,{children:["The ",(0,t.tZ)(o.EK,{children:"@factory.hidden"})," is just a decorator and does not receive any arguments."]}),(0,t.tZ)(o.$0,{title:"Example of usage",children:(0,t.tZ)(o.KE,{items:[s]})})]})]});var l=h}}]);