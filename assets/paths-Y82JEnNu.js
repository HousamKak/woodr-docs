import{u as r,j as e}from"./index-3PXwshgb.js";const i={title:"Paths & parametric curves",description:"[PATH] smooth curves through named points, [PCURVE] parametric curves, and points on them."};function t(s){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"paths--parametric-curves",children:["Paths & parametric curves",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paths--parametric-curves",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"[CURVE]"})," (see ",e.jsx(n.a,{href:"%5Cwoodr%5Cmarks",children:"Marks"}),") smooths through raw coordinates. ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"[PATH]"})}),` and
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"[PCURVE]"})}),` are the relational, registered upgrades: they take named points or formulas,
they can be closed and tensioned, and — crucially — you can put `,e.jsx(n.strong,{children:"points on them"}),"."]}),`
`,e.jsxs(n.h2,{id:"path--a-smooth-curve-through-named-points",children:["[PATH] — a smooth curve through named points",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#path--a-smooth-curve-through-named-points",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PATH:NAME: A .. B .. C .. D]
`})}),`
`,e.jsxs(n.p,{children:["Draws a smooth curve through the named knots ",e.jsx(n.code,{children:"A, B, C, D"}),` (a centripetal Catmull-Rom spline —
it passes through every knot exactly, with no overshoot). Options:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".. cycle"})," closes the curve into a loop."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tension 0.4"})," tightens it toward straight segments (",e.jsx(n.code,{children:"0"})," = full curve, ",e.jsx(n.code,{children:"1"})," = polyline)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:": label"})," at the end names it on screen."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:A:200,300][PT:B:500,180][PT:C:800,320][PT:D:1100,240]
[PATH:river: A .. B .. C .. D : the path]

[PT:P:120,500][PT:Q:520,520][PT:R:320,760]
[PATH:blob: P .. Q .. R .. cycle tension 0.3]
`})}),`
`,e.jsxs(n.h2,{id:"pcurve--a-parametric-curve",children:["[PCURVE] — a parametric curve",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pcurve--a-parametric-curve",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PCURVE:NAME: xexpr ; yexpr ; t0 t1 : label]
`})}),`
`,e.jsxs(n.p,{children:["Plots ",e.jsx(n.code,{children:"(x(t), y(t))"})," as ",e.jsx(n.code,{children:"t"})," runs from ",e.jsx(n.code,{children:"t0"})," to ",e.jsx(n.code,{children:"t1"})," — the things ",e.jsx(n.code,{children:"y = f(x)"}),` can't draw:
circles, spirals, Lissajous figures, cycloids. The formulas take the same functions as
`,e.jsx(n.a,{href:"%5Cwoodr%5Cfunctions",children:e.jsx(n.code,{children:"[PLOT]"})})," and ",e.jsx(n.strong,{children:"must use parentheses"}),": ",e.jsx(n.code,{children:"cos(t)"}),", not ",e.jsx(n.code,{children:"cos t"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PCURVE:orbit: 640+200*cos(t) ; 360+200*sin(t) ; t 0 6.283 : circle]
[PCURVE:spiral: 640+3*t*cos(t) ; 360+3*t*sin(t) ; t 0 25 : spiral]
[PCURVE:liss: 640+300*sin(3*t) ; 360+300*sin(2*t) ; t 0 6.283]
`})}),`
`,e.jsxs(n.h2,{id:"points-on-a-path",children:["Points on a path",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#points-on-a-path",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Once a ",e.jsx(n.code,{children:"[PATH]"})," or ",e.jsx(n.code,{children:"[PCURVE]"})," is registered, points can sit on it:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Point"}),e.jsx(n.th,{children:"Meaning"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"[PT:G:pointon NAME t]"})}),e.jsxs(n.td,{children:["The point at arc-fraction ",e.jsx(n.code,{children:"t"})," (0..1) along the curve — even-speed, so it's ideal to ",e.jsx(n.a,{href:"%5Cwoodr%5Cmotion",children:"animate"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"[PT:F:closest P on NAME]"})}),e.jsxs(n.td,{children:["The nearest point on the curve to ",e.jsx(n.code,{children:"P"})]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"closest … on"}),` also works on a circle or a plotted function — it's the general
foot-of-perpendicular onto `,e.jsx(n.em,{children:"any"})," curve:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:640,360,200][PT:P:1000,360]
[PT:F:closest P on O][POINT:@F:nearest point on the circle]
`})}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Combine the two: draw the trail with ",e.jsx(n.code,{children:"[PCURVE]"}),", then move a ",e.jsx(n.code,{children:"pointon"})," it with ",e.jsx(n.code,{children:"[ANIM]"}),` — the
mover and its path from one construction. See `,e.jsx(n.a,{href:"%5Cwoodr%5Cmotion",children:"Motion"}),"."]})})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default,i as frontmatter};
