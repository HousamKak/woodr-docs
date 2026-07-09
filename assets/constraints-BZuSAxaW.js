import{u as i,j as e}from"./index-3PXwshgb.js";const d={title:"Constraints",description:"intersect, foot, rotate, circumcenter, tangent — geometry the renderer solves."};function r(t){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"constraints",children:["Constraints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constraints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["These are the advanced relational forms — points defined by ",e.jsx(n.em,{children:"solving"}),` a geometric
constraint. Like the rest of the `,e.jsx(n.a,{href:"%5Cwoodr%5Ckernel",children:"kernel"}),`, you state the relationship and
the renderer computes the exact pixel. They're written the same way: `,e.jsx(n.code,{children:"[PT:NAME:EXPR]"}),"."]}),`
`,e.jsxs(n.h2,{id:"intersect",children:["intersect",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intersect",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:X:intersect A B C D]
`})}),`
`,e.jsxs(n.p,{children:["The point where line ",e.jsx(n.strong,{children:"A–B"})," crosses line ",e.jsx(n.strong,{children:"C–D"}),`. (Returns nothing if the lines are
parallel.) Great for diagonals, cevians, or where a construction line meets an axis.`]}),`
`,e.jsxs(n.h2,{id:"foot",children:["foot",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#foot",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:F:foot P A B]
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"foot of the perpendicular"})," from ",e.jsx(n.code,{children:"P"})," onto line ",e.jsx(n.code,{children:"A–B"})," — i.e. the projection of ",e.jsx(n.code,{children:"P"}),`
onto that line. Useful for altitudes, dropping a value to an axis, or a right-angle
construction.`]}),`
`,e.jsxs(n.h2,{id:"rotate",children:["rotate",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rotate",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:P2:rotate P C deg]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"P"})," rotated around centre ",e.jsx(n.code,{children:"C"})," by ",e.jsx(n.code,{children:"deg"})," degrees. Compose it with ",e.jsx(n.a,{href:"%5Cwoodr%5Citeration",children:"iteration"}),`
to spin a motif around a point.`]}),`
`,e.jsxs(n.h2,{id:"circumcenter",children:["circumcenter",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#circumcenter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:O:circumcenter A B C]
`})}),`
`,e.jsxs(n.p,{children:["The centre of the unique circle passing through ",e.jsx(n.code,{children:"A"}),", ",e.jsx(n.code,{children:"B"}),", and ",e.jsx(n.code,{children:"C"}),`. Pair it with a
`,e.jsx(n.code,{children:"[CIRCLE]"})," to draw that circumscribed circle exactly."]}),`
`,e.jsxs(n.h2,{id:"tangent",children:["tangent",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tangent",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:T:tangent P O side]     // side = +1 or -1 (the two tangent points)
`})}),`
`,e.jsxs(n.p,{children:["The point on circle ",e.jsx(n.code,{children:"O"})," where a line from the external point ",e.jsx(n.code,{children:"P"}),` just touches the circle.
The line `,e.jsx(n.code,{children:"P→T"})," is guaranteed perpendicular to the radius ",e.jsx(n.code,{children:"O→T"}),` — a true tangent. There are
two; `,e.jsx(n.code,{children:"side"})," picks which."]}),`
`,e.jsxs(n.h2,{id:"why-this-matters",children:["Why this matters",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-this-matters",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Constraint-defined points are the difference between a diagram that ",e.jsx(n.em,{children:"looks"}),` roughly right
and one that is provably correct. An altitude drawn with `,e.jsx(n.code,{children:"foot"}),` really is perpendicular; a
tangent drawn with `,e.jsx(n.code,{children:"tangent"})," really does touch. The author never computes any of it."]})]})}function s(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{s as default,d as frontmatter};
