import{u as s,j as e}from"./index-3PXwshgb.js";const i={title:"Color",description:"The pen — distinguish parts of a diagram and carry meaning."};function d(r){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"color",children:["Color",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#color",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["By default Woodr draws in a single blue accent. ",e.jsx(n.code,{children:"[COLOR]"})," changes the ",e.jsx(n.strong,{children:"pen"}),`: every mark
drawn `,e.jsx(n.em,{children:"after"})," it takes that color, until the next ",e.jsx(n.code,{children:"[COLOR]"})," — or the turn / a ",e.jsx(n.code,{children:"[CLEAR]"}),`
resets it to blue.`]}),`
`,e.jsxs(n.h2,{id:"color-1",children:["[COLOR]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#color-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[COLOR:name]
`})}),`
`,e.jsxs(n.p,{children:[`It's a state change, not a drawn mark — think of it as picking up a differently colored pen.
Set it at the `,e.jsx(n.strong,{children:"start"})," of the sentence whose marks it applies to."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[COLOR:green]the average line [LINE:@A,@C]
[COLOR:red]and the tangent [LINE:@P,@Q]
`})}),`
`,e.jsxs(n.h2,{id:"the-palette",children:["The palette",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-palette",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Colors can be named by ",e.jsx(n.strong,{children:"meaning"})," or by ",e.jsx(n.strong,{children:"hue"}),` — both map to bright, overlay-friendly
values that read on light and dark screens.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Semantic"}),e.jsx(n.th,{children:"Hue aliases"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"good"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"green"}),", ",e.jsx(n.code,{children:"ok"}),", ",e.jsx(n.code,{children:"go"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bad"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"red"}),", ",e.jsx(n.code,{children:"danger"}),", ",e.jsx(n.code,{children:"error"}),", ",e.jsx(n.code,{children:"wrong"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"warn"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"amber"}),", ",e.jsx(n.code,{children:"yellow"}),", ",e.jsx(n.code,{children:"warning"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"info"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"cyan"}),", ",e.jsx(n.code,{children:"teal"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"accent"})," (default)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"blue"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"orange"}),", ",e.jsx(n.code,{children:"purple"}),", ",e.jsx(n.code,{children:"pink"}),", ",e.jsx(n.code,{children:"white"})]})]})]})]}),`
`,e.jsxs(n.h2,{id:"why-color-matters",children:["Why color matters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-color-matters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Two jobs:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Distinguish parts."}),` A diagram with a curve, a secant, and a tangent all in one blue
is hard to read. Blue curve, green secant, red tangent separates them instantly.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Carry meaning."})," ",e.jsx(n.code,{children:"good"}),"/green vs ",e.jsx(n.code,{children:"bad"}),"/red vs ",e.jsx(n.code,{children:"warn"}),"/amber lets a mark ",e.jsx(n.em,{children:"mean"}),` something
before the label is even read.`]}),`
`]}),`
`,e.jsx(n.aside,{"data-callout":"note",children:e.jsxs(n.p,{children:[e.jsx(n.code,{children:"[CHECK]"})," (green ✓) and ",e.jsx(n.code,{children:"[CROSS]"}),` (red ✗) keep their intrinsic colors regardless of the
pen — they're inherently semantic.`]})}),`
`,e.jsxs(n.h2,{id:"theme--a-whole-preset",children:["[THEME] — a whole preset",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#theme--a-whole-preset",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Where ",e.jsx(n.code,{children:"[COLOR]"})," sets one pen, ",e.jsx(n.code,{children:"[THEME:name]"})," picks a ",e.jsx(n.strong,{children:"named preset"}),` for everything after it
— the flat, deterministic version of Penrose's content/cosmetics split (no separate style
language, just a bag of defaults).`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[THEME:blueprint]   the whole figure now draws in the blueprint pen
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Theme"}),e.jsx(n.th,{children:"Pen"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"chalk"})}),e.jsx(n.td,{children:"soft white"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"blueprint"})}),e.jsx(n.td,{children:"blue"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sunset"})}),e.jsx(n.td,{children:"orange"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"forest"})}),e.jsx(n.td,{children:"green"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"grape"})}),e.jsx(n.td,{children:"purple"})]})]})]})]})}function c(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{c as default,i as frontmatter};
