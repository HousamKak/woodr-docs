import{u as a,j as e}from"./index-3PXwshgb.js";const d={title:"Iteration",description:"REPEAT and @@ — generating patterns of points."};function i(r){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"iteration",children:["Iteration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#iteration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:`When a figure needs many points in a pattern — a polygon's vertices, a grid, tick marks,
orbiting dots — you don't list them by hand. Woodr has a loop.`}),`
`,e.jsxs(n.h2,{id:"repeat",children:["[REPEAT]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#repeat",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[REPEAT:NAME:count:pointExpr]
`})}),`
`,e.jsxs(n.p,{children:["Defines ",e.jsx(n.code,{children:"NAME0, NAME1, … NAME(count-1)"}),". Inside ",e.jsx(n.code,{children:"pointExpr"}),", the loop index ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"i"})}),`
(0-based) is available in any arithmetic.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:960,540,300]
[REPEAT:V:6:on O 60*i]      // V0..V5 at 0°, 60°, 120°, …, 300°
`})}),`
`,e.jsxs(n.p,{children:["The little arithmetic evaluator supports ",e.jsx(n.code,{children:"+ - * / %"})," and parentheses — so ",e.jsx(n.code,{children:"60*i"}),`,
`,e.jsx(n.code,{children:"i/5"}),", ",e.jsx(n.code,{children:"90 + i*45"}),", ",e.jsx(n.code,{children:"i%2"})," all work."]}),`
`,e.jsxs(n.h2,{id:"name--the-whole-family",children:[e.jsx(n.code,{children:"@@NAME"})," — the whole family",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name--the-whole-family",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@@NAME"}),` expands to the coordinates of the entire family as a point-list, ready for a path
mark:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[POLY:@@V:hexagon]
`})}),`
`,e.jsxs(n.h2,{id:"a-regular-hexagon-in-one-line",children:["A regular hexagon in one line",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-regular-hexagon-in-one-line",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:960,540,300][REPEAT:V:6:on O 60*i][POLY:@@V:hexagon]
`})}),`
`,e.jsxs(n.p,{children:["Every vertex lands ",e.jsx(n.strong,{children:"exactly"})," on the circle. Change ",e.jsx(n.code,{children:"6"})," to any ",e.jsx(n.code,{children:"n"}),` for a regular n-gon;
change `,e.jsx(n.code,{children:"on O"})," to ",e.jsx(n.code,{children:"along A B i/5"}),` for evenly-spaced points on a segment, or
`,e.jsx(n.code,{children:"offset A i*80 0"})," for a row."]}),`
`,e.jsxs(n.h2,{id:"more-patterns",children:["More patterns",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#more-patterns",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`// tick marks along a number line A→B
[REPEAT:T:11:along A B i/10]

// a ring of orbiting dots
[REPEAT:P:12:on Ring 30*i]

// a grid row (combine two REPEATs for a full grid)
[REPEAT:G:8:offset Origin i*120 0]
`})})]})}function t(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{t as default,d as frontmatter};
