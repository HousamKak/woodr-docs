import{u as t,j as e}from"./index-3PXwshgb.js";import{W as d}from"./Woodr-CVQcULjH.js";const c={title:"Points & the kernel",description:"Relational points — the precision keystone of Woodr."};function i(r){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"points--the-kernel",children:["Points & the kernel",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#points--the-kernel",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"kernel"})," is the small core of Woodr that everything else is built on: ",e.jsx(n.strong,{children:`named,
relationally-defined points`}),`. This is where Woodr's precision comes from — you describe a
point by its `,e.jsx(n.em,{children:"relationship"})," to other things, and the renderer computes the exact pixel."]}),`
`,e.jsxs(n.h2,{id:"defining-a-point",children:["Defining a point",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defining-a-point",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:NAME:EXPR]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NAME"})," is a letters-and-digits identifier. ",e.jsx(n.code,{children:"EXPR"}),` is one of the forms below. Reference the
resolved point anywhere with `,e.jsx(n.code,{children:"@NAME"}),"."]}),`
`,e.jsxs(n.h2,{id:"absolute",children:["Absolute",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#absolute",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:A:400,600]     // literally (400, 600)
`})}),`
`,e.jsx(n.p,{children:`Use absolute coordinates only for things you can actually see on the screen (a control, a
spot the user pointed at). For constructed geometry, prefer a relationship.`}),`
`,e.jsxs(n.h2,{id:"named-circles",children:["Named circles",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#named-circles",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["A circle can be named so points can sit ",e.jsx(n.strong,{children:"on"})," it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:960,540,300:label]     // centre (960,540), radius 300
[CIRCLE:O:@Center,300]           // centre is a named point
`})}),`
`,e.jsxs(n.p,{children:["Naming a circle both ",e.jsx(n.strong,{children:"draws"})," it and registers it for ",e.jsx(n.code,{children:"on"}),`. Here every vertex is placed by
`,e.jsx(n.em,{children:"relationship"})," — ",e.jsx(n.code,{children:"on O deg"})," — so the right angle is exact (Thales' theorem):"]}),`
`,e.jsx(d,{source:"[CIRCLE:O:960,540,300][PT:A:on O 180][PT:B:on O 90][PT:C:on O 0][LINE:@A,@C][POLY:@A;@B;@C:][RIGHTANGLE:@B,@A,@C][POINT:@A:A][POINT:@B:B][POINT:@C:C]",caption:"A, B, C never touch a typed coordinate — the resolver computes each pixel."}),`
`,e.jsxs(n.h2,{id:"relational-forms",children:["Relational forms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relational-forms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Form"}),e.jsx(n.th,{children:"Meaning"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"on O deg"})}),e.jsxs(n.td,{children:["Exactly on circle ",e.jsx(n.strong,{children:"O"})," at an angle (0 = right, 90 = ",e.jsx(n.strong,{children:"top"}),", 180 = left, 270 = bottom)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"mid A B"})}),e.jsx(n.td,{children:"Midpoint of A and B"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"along A B t"})}),e.jsxs(n.td,{children:["A fraction ",e.jsx(n.code,{children:"t"})," (0..1) of the way from A to B"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"polar A r deg"})}),e.jsxs(n.td,{children:["Distance ",e.jsx(n.code,{children:"r"})," from A at an angle"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"offset A dx dy"})}),e.jsx(n.td,{children:"A shifted by (dx, dy)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"centroid A B C"})}),e.jsx(n.td,{children:"The centroid (average) of three points"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"reflect P A B"})}),e.jsx(n.td,{children:"P mirrored across line A–B"})]})]})]}),`
`,e.jsxs(n.p,{children:["More advanced ",e.jsx(n.a,{href:"%5Cwoodr%5Cconstraints",children:"constraints"})," — ",e.jsx(n.code,{children:"intersect"}),", ",e.jsx(n.code,{children:"foot"}),", ",e.jsx(n.code,{children:"rotate"}),`,
`,e.jsx(n.code,{children:"circumcenter"}),", ",e.jsx(n.code,{children:"tangent"})," — extend this same grammar."]}),`
`,e.jsxs(n.h2,{id:"why-on-o-90-instead-of-a-coordinate",children:['Why "on O 90" instead of a coordinate',e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#why-on-o-90-instead-of-a-coordinate",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For a circle centred at ",e.jsx(n.code,{children:"(cx, cy)"})," with radius ",e.jsx(n.code,{children:"r"}),`, the point at angle θ is
`,e.jsx(n.code,{children:"(cx + r·cosθ, cy − r·sinθ)"}),` (the minus because y grows downward). A model asked to compute
that will often land a few pixels off, so a triangle's vertex floats `,e.jsx(n.em,{children:"near"}),` the circle
instead of `,e.jsx(n.em,{children:"on"})," it. By writing ",e.jsx(n.code,{children:"on O 90"}),`, the renderer does the trig — the vertex touches
the arc, every time.`]}),`
`,e.jsxs(n.h2,{id:"the-rightangle-marker",children:["The [RIGHTANGLE] marker",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-rightangle-marker",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[RIGHTANGLE:@corner,@a,@b]
`})}),`
`,e.jsxs(n.p,{children:["Draws a small square snug ",e.jsx(n.strong,{children:"in"})," the corner at ",e.jsx(n.code,{children:"@corner"}),", between the directions to ",e.jsx(n.code,{children:"@a"}),`
and `,e.jsx(n.code,{children:"@b"}),`. The renderer computes the corner geometry, so it's always tucked in the angle —
not floating nearby.`]}),`
`,e.jsxs(n.h2,{id:"how-it-compiles",children:["How it compiles",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-compiles",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The kernel is a ",e.jsx(n.strong,{children:"compile pass"}),". ",e.jsx(n.code,{children:"[PT]"}),", ",e.jsx(n.code,{children:"[CIRCLE]"}),", ",e.jsx(n.code,{children:"[RIGHTANGLE]"}),`, and the constructs on
the next pages are all resolved down to the plain `,e.jsx(n.a,{href:"%5Cwoodr%5Cmarks",children:"marks"})," — ",e.jsx(n.code,{children:"[ELLIPSE]"}),`,
`,e.jsx(n.code,{children:"[POLY]"}),", ",e.jsx(n.code,{children:"[LINE]"}),`, … — before anything is drawn. So the kernel adds power without needing
any new rendering: it's a language on top of the marks.`]})]})}function a(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default,c as frontmatter};
