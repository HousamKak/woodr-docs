import{u as i,j as e}from"./index-3PXwshgb.js";const o={title:"Conditionals",description:"IF / ELSE / ENDIF — branch a drawing."};function d(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"conditionals",children:["Conditionals",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conditionals",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Woodr can keep or drop part of a drawing based on a comparison."}),`
`,e.jsxs(n.h2,{id:"if--else--endif",children:["[IF] … [ELSE] … [ENDIF]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#if--else--endif",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[IF:condition] …kept when true… [ELSE] …kept when false… [ENDIF]
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"[ELSE]"})," branch is optional. Conditionals are evaluated ",e.jsx(n.strong,{children:"after"}),` macro parameters and
loop indices are filled in, so by the time a condition is checked both sides are numbers.`]}),`
`,e.jsxs(n.h2,{id:"comparisons",children:["Comparisons",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#comparisons",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Supported operators: ",e.jsx(n.code,{children:">"}),", ",e.jsx(n.code,{children:"<"}),", ",e.jsx(n.code,{children:">="}),", ",e.jsx(n.code,{children:"<="}),", ",e.jsx(n.code,{children:"=="}),", ",e.jsx(n.code,{children:"!="}),", and ",e.jsx(n.code,{children:"%"}),` (modulo) inside the
arithmetic. Examples: `,e.jsx(n.code,{children:"$val > 50"}),", ",e.jsx(n.code,{children:"i % 2 == 0"}),", ",e.jsx(n.code,{children:"3 >= 2"}),"."]}),`
`,e.jsxs(n.h2,{id:"branching-inside-a-macro",children:["Branching inside a macro",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#branching-inside-a-macro",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The natural home for ",e.jsx(n.code,{children:"[IF]"})," is a ",e.jsx(n.code,{children:"[DEF]"})," whose output depends on a parameter:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[DEF:node:val,x,y]
  [ELLIPSE:$x,$y,34,34:]
  [TEXT:$x,$y:$val]
  [IF:$val >= 50][CHECK:$x,$y][ELSE][CROSS:$x,$y][ENDIF]
[ENDDEF]

[USE:node:70,600,300]     // draws a ✓ (70 ≥ 50)
[USE:node:20,900,300]     // draws a ✗ (20 < 50)
`})}),`
`,e.jsxs(n.h2,{id:"every-other-patterns",children:["Every-other patterns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#every-other-patterns",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Combined with the loop index, ",e.jsx(n.code,{children:"%"}),` makes alternating patterns easy — for example, colouring
or marking every other item in a `,e.jsx(n.code,{children:"[REPEAT]"}),"-generated family."]})]})}function s(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{s as default,o as frontmatter};
