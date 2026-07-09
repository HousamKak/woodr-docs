import{u as i,j as e}from"./index-3PXwshgb.js";const d={title:"Abstraction",description:"DEF and USE — define a construction once and reuse it."};function r(a){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...i(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"abstraction",children:["Abstraction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#abstraction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Woodr lets you ",e.jsx(n.strong,{children:"coin a construction once and reuse it"}),` — the equivalent of functions.
This is the feature that turns a fixed vocabulary into a language that can grow.`]}),`
`,e.jsxs(n.h2,{id:"def--enddef",children:["[DEF] … [ENDDEF]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#def--enddef",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[DEF:NAME:param1,param2,…]
  …body using $param1, $param2 …
[ENDDEF]
`})}),`
`,e.jsxs(n.p,{children:["The body is ordinary Woodr. Parameters are written ",e.jsx(n.code,{children:"$name"})," and substituted at each use."]}),`
`,e.jsxs(n.h2,{id:"use",children:["[USE]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#use",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[USE:NAME:arg1,arg2,…]
`})}),`
`,e.jsxs(n.p,{children:[`Expands the macro body inline with the arguments substituted. Arguments are typically
`,e.jsx(n.code,{children:"@point"})," references or numbers."]}),`
`,e.jsxs(n.h2,{id:"example--a-labelled-midpoint",children:["Example — a labelled midpoint",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example--a-labelled-midpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[DEF:mark:a,b,name]
  [PT:m:mid $a $b]
  [POINT:@m:$name]
[ENDDEF]

[PT:P:200,200][PT:Q:600,200][PT:R:200,600]
[USE:mark:P,Q,M1]
[USE:mark:P,R,M2]
`})}),`
`,e.jsxs(n.h2,{id:"automatic-namespacing-no-collisions",children:["Automatic namespacing (no collisions)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#automatic-namespacing-no-collisions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Notice both uses define a local point called ",e.jsx(n.code,{children:"m"}),". Woodr ",e.jsx(n.strong,{children:"auto-namespaces"}),` each macro's
own defined names per call, so they never clash — the first `,e.jsx(n.code,{children:"USE"})," becomes ",e.jsx(n.code,{children:"u1_m"}),`, the
second `,e.jsx(n.code,{children:"u2_m"}),", transparently. You can ",e.jsx(n.code,{children:"USE"})," the same macro as many times as you like."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:[`A macro that draws a repeated motif (a graph node, a molecule, a UML box) plus
`,e.jsx(n.a,{href:"%5Cwoodr%5Citeration",children:"iteration"})," is powerful: ",e.jsx(n.code,{children:"[REPEAT]"})," the anchor points, then ",e.jsx(n.code,{children:"[USE]"}),` the
motif at each one.`]})}),`
`,e.jsxs(n.h2,{id:"growing-the-library",children:["Growing the library",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#growing-the-library",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["A one-off ",e.jsx(n.code,{children:"[DEF]"})," lives for a single reply. To keep a good construction ",e.jsx(n.strong,{children:"forever"}),`, Woopy
can save it to the `,e.jsx(n.a,{href:"%5Cwoodr%5Clibrary",children:"library"})," with ",e.jsx(n.code,{children:"draw_lib_add"}),` — after which it's
fetchable by name on any future turn. That's how Woodr's vocabulary grows over time.`]})]})}function o(a={}){const{wrapper:n}={...i(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(r,{...a})}):r(a)}export{o as default,d as frontmatter};
