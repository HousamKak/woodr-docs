import{u as r,j as e}from"./index-3PXwshgb.js";const i={title:"Functions & curves",description:"PLOT, onplot, tanpoint — real functions with exact points and true tangents."};function a(t){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"functions--curves",children:["Functions & curves",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functions--curves",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["For a graph, a curve, or anything with a ",e.jsx(n.strong,{children:"tangent"}),`, Woodr has a real function object. You
give a formula; the renderer samples it, draws the exact curve, and lets you place points
`,e.jsx(n.em,{children:"on"})," it and draw tangents that genuinely ",e.jsx(n.em,{children:"touch"})," it. No hand-picked points, no eyeballing."]}),`
`,e.jsxs(n.h2,{id:"plot",children:["[PLOT]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#plot",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PLOT:NAME:formula:x0,x1,bx,by,bw,bh:label]
`})}),`
`,e.jsxs(n.p,{children:["Draws the function ",e.jsx(n.code,{children:"formula"})," (in ",e.jsx(n.code,{children:"x"}),") sampled over the domain ",e.jsx(n.code,{children:"[x0, x1]"}),`, mapped into the
screen box `,e.jsx(n.code,{children:"(bx, by, bw, bh)"})," — and registers it under ",e.jsx(n.code,{children:"NAME"}),`. The y-axis is flipped so
larger values are higher on screen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PLOT:f:x^2:-3,3,700,300,520,340:y = x²]
`})}),`
`,e.jsxs(n.h3,{id:"the-formula-language",children:["The formula language",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-formula-language",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The evaluator understands: ",e.jsx(n.code,{children:"+ - * / % ^"}),", parentheses, unary minus, the constants ",e.jsx(n.code,{children:"pi"}),` and
`,e.jsx(n.code,{children:"e"}),", and the functions ",e.jsx(n.code,{children:"sin cos tan asin acos atan sqrt abs exp ln log"}),"."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sin(x)        0.5"}),e.jsx(n.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"*x^2 - 2       exp(-x^2)       sqrt(x)        3*"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sin(2*x)+1"})]})})})}),`
`,e.jsxs(n.h2,{id:"a-point-exactly-on-the-curve--onplot",children:["A point exactly on the curve — ",e.jsx(n.code,{children:"onplot"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-point-exactly-on-the-curve--onplot",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:P:onplot NAME xval]
`})}),`
`,e.jsxs(n.p,{children:["Resolves to the point on the plotted curve at ",e.jsx(n.code,{children:"x = xval"}),`, in screen pixels. Because it uses
the `,e.jsx(n.em,{children:"same"})," function and mapping as the drawn curve, the point is guaranteed to sit ",e.jsx(n.strong,{children:"on"}),`
it.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PLOT:f:x^2:-3,3,700,300,520,340:y=x²]
[PT:C:onplot f 1][POINT:@C:here]
`})}),`
`,e.jsxs(n.h2,{id:"a-true-tangent--tanpoint",children:["A true tangent — ",e.jsx(n.code,{children:"tanpoint"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-true-tangent--tanpoint",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:L:tanpoint NAME xval -120]
[PT:R:tanpoint NAME xval 120]
[LINE:@L,@R]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tanpoint NAME x dpx"})," is a point ",e.jsx(n.code,{children:"dpx"}),` screen-pixels sideways from the contact point,
`,e.jsx(n.em,{children:"along the tangent"})," to the curve at ",e.jsx(n.code,{children:"x"}),`. The renderer computes the slope, so the line
through two tanpoints is a real tangent — it touches the curve at `,e.jsx(n.code,{children:"x"}),` and nowhere near it
crosses by accident.`]}),`
`,e.jsxs(n.h2,{id:"worked-example--the-mean-value-theorem",children:["Worked example — the Mean Value Theorem",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#worked-example--the-mean-value-theorem",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PLOT:f:0.6*x^2 - 0.1*x^3:0,5,300,200,900,500:the drive]
[PT:A:onplot f 0][PT:B:onplot f 5]
[COLOR:green][LINE:@A,@B:average]
[PT:L:tanpoint f 3 -140][PT:R:tanpoint f 3 140]
[COLOR:red][LINE:@L,@R:tangent] [PT:C:onplot f 3][POINT:@C:this moment]
`})}),`
`,e.jsxs(n.p,{children:["The average (secant) is green, the tangent is red and ",e.jsx(n.strong,{children:"actually touches"}),` the curve at the
marked moment — the whole point of the theorem, drawn exactly.`]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["This is the right tool for ",e.jsx(n.strong,{children:"derivatives, tangents, the Mean Value Theorem, and integrals"}),`
— anything where a point must lie on a curve or a line must be tangent to it.`]})})]})}function o(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{o as default,i as frontmatter};
