import{u as i,j as e}from"./index-3PXwshgb.js";const s={title:"What is Woodr",description:"Woopy's drawing language — a declarative visual language embedded in speech."};function t(r){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"woodr",children:["Woodr",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#woodr",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Woodr"})," — ",e.jsx(n.em,{children:"Woopy's drawing"}),` — is the language Woopy uses to draw on your screen while it
explains something out loud. You don't write Woodr; Woopy speaks it. But it is a real
language, with the properties that make one:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Composition"}),` — marks are built from named points, and points are defined by their
`,e.jsx(n.em,{children:"relationship"})," to other points. Meaning builds from smaller meaning."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Naming / binding"})," — ",e.jsx(n.code,{children:"[PT:NAME:…]"})," binds a name; ",e.jsx(n.code,{children:"@NAME"})," references it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"An evaluator"}),` — the kernel resolver parses Woodr, solves the relationships, and
`,e.jsx(n.strong,{children:"compiles down"})," to exact pixels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Iteration & abstraction"})," — ",e.jsx(n.code,{children:"[REPEAT]"})," and ",e.jsx(n.code,{children:"[DEF]"}),"/",e.jsx(n.code,{children:"[USE]"})," — loops and functions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A growing library"})," — verified constructions Woopy can fetch and even ",e.jsx(n.em,{children:"add to"}),"."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"the-core-idea-state-relationships-not-coordinates",children:["The core idea: state relationships, not coordinates",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-core-idea-state-relationships-not-coordinates",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`The hard part of drawing a diagram is the geometry — where does a triangle's vertex land
so it sits `,e.jsx(n.em,{children:"exactly"}),` on a circle? A language model is bad at that arithmetic and tends to
eyeball it a few pixels off. Woodr removes the problem: you `,e.jsx(n.strong,{children:"state the relationship"}),` and
the renderer computes the exact pixel.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:960,540,300]      // a circle named O
[PT:B:on O 90]              // B is EXACTLY on O at the top — not "about (960,240)"
`})}),`
`,e.jsxs(n.p,{children:["Because ",e.jsx(n.code,{children:"B"})," is ",e.jsx(n.em,{children:"defined as"}),` "on the circle at the top", it can never drift. Precision is
`,e.jsx(n.strong,{children:"structural"}),", not a thing the author has to get right."]}),`
`,e.jsxs(n.h2,{id:"two-unusual-properties",children:["Two unusual properties",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#two-unusual-properties",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"It's embedded in speech."}),` Woodr is woven through natural-language narration, emitted
by an LLM in real time. It isn't written to a file — it's `,e.jsx(n.em,{children:"spoken"}),`, tag by tag, as
Woopy talks.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"It has time."})," ",e.jsx(n.a,{href:"%5Cwoodr%5Cchoreography",children:"Choreography"}),` — beats, pauses, reveals — means a
Woodr program doesn't just render, it `,e.jsx(n.em,{children:"plays"}),", in step with the words."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"what-a-woodr-program-looks-like",children:["What a Woodr program looks like",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-a-woodr-program-looks-like",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A full proof of Thales' theorem, drawn exactly, without typing a single coordinate twice:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:960,540,300]
[PT:A:on O 180][PT:B:on O 90][PT:C:on O 0]
[LINE:@A,@C] [POLY:@A;@B;@C:] [RIGHTANGLE:@B,@A,@C]
[POINT:@A:A][POINT:@B:B][POINT:@C:C][POINT:@O:O]
`})}),`
`,e.jsx(n.p,{children:`Every point is exact, the right angle is snug in the corner, and the whole thing fades
after Woopy finishes explaining it.`}),`
`,e.jsxs(n.p,{children:["Continue to ",e.jsx(n.strong,{children:e.jsx(n.a,{href:"%5Cwoodr%5Cgetting-started",children:"Getting started →"})}),"."]})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default,s as frontmatter};
