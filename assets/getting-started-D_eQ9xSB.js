import{u as i,j as e}from"./index-3PXwshgb.js";import{W as s}from"./Woodr-CVQcULjH.js";const a={title:"Getting started",description:"Your first Woodr diagram in three lines."};function t(r){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"getting-started",children:["Getting started",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Woodr is a set of ",e.jsx(n.strong,{children:"tags"}),` interleaved with what Woopy says. Tags are never spoken — only
the text `,e.jsx(n.em,{children:"outside"}),` tags is read aloud. Everything renders on a transparent overlay on the
active monitor, in pixels: `,e.jsx(n.code,{children:"x"})," grows right (",e.jsx(n.code,{children:"0..W"}),"), ",e.jsx(n.code,{children:"y"})," grows ",e.jsx(n.strong,{children:"down"})," (",e.jsx(n.code,{children:"0..H"}),")."]}),`
`,e.jsxs(n.h2,{id:"the-three-things-you-need",children:["The three things you need",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-three-things-you-need",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A mark"})," — something drawn: a point, line, circle, polygon, label, …"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A named point"})," — ",e.jsx(n.code,{children:"[PT:NAME:…]"})," binds a coordinate to a name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A reference"})," — ",e.jsx(n.code,{children:"@NAME"})," drops that point's coordinates wherever a coordinate goes."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"your-first-diagram",children:["Your first diagram",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#your-first-diagram",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:A:400,600][PT:B:900,600][PT:C:650,300]
[POLY:@A;@B;@C:triangle]
`})}),`
`,e.jsx(s,{source:"[PT:A:400,600][PT:B:900,600][PT:C:650,300][POLY:@A;@B;@C:triangle]",caption:"Rendered live by @h/woodr-render-svg — the same IR Woopy draws."}),`
`,e.jsxs(n.p,{children:[`That defines three points and draws a triangle through them. Note you named each point
`,e.jsx(n.strong,{children:"once"})," — you never re-typed ",e.jsx(n.code,{children:"400,600"}),`. That alone removes a whole class of mistakes
(connecting the wrong corners, mismatched coordinates).`]}),`
`,e.jsxs(n.h2,{id:"make-it-exact",children:["Make it exact",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#make-it-exact",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Instead of eyeballing where ",e.jsx(n.code,{children:"C"})," goes, put it ",e.jsx(n.em,{children:"on a circle"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:650,500,200]      // circle named O
[PT:A:on O 200][PT:B:on O 340][PT:C:on O 90]
[POLY:@A;@B;@C:] [POINT:@C:top]
`})}),`
`,e.jsxs(n.p,{children:["Now ",e.jsx(n.code,{children:"C"}),` is guaranteed to sit on the circle. This is the heart of Woodr — see
`,e.jsx(n.strong,{children:e.jsx(n.a,{href:"%5Cwoodr%5Ckernel",children:"Points & the kernel →"})}),"."]}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Woopy places each mark ",e.jsx(n.em,{children:"as it says the words for it"}),` — so tags are written right where
they belong in the narration. See `,e.jsx(n.a,{href:"%5Cwoodr%5Cchoreography",children:"Choreography"}),"."]})})]})}function h(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{h as default,a as frontmatter};
