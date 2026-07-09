import{u as s,j as e}from"./index-3PXwshgb.js";const t={title:"The library",description:"Verified constructions, fetched on demand — and a library that grows itself."};function n(r){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"the-library",children:["The library",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-library",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.a,{href:"%5Cwoodr%5Ckernel",children:"kernel"})," builds most figures directly. For ",e.jsx(i.strong,{children:"named or complex"}),`
constructions — a theorem diagram, a set of axes, a bell curve, a tree — Woodr has a
searchable `,e.jsx(i.strong,{children:"library"})," of verified recipes, fetched only when needed."]}),`
`,e.jsxs(i.h2,{id:"two-tiers-on-purpose",children:["Two tiers, on purpose",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#two-tiers-on-purpose",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Kernel"}),` (always available): relational points, marks, iteration, macros — the fast
path. A circle, a triangle, an arrow: just draw it.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Library"}),` (fetched): higher-level constructions. Fetching is a tool round-trip, so it's
reserved for figures worth it — never for a basic shape.`]}),`
`]}),`
`,e.jsx(i.p,{children:`This split keeps the common case instant while letting the library scale without bloating
what Woopy carries in its head.`}),`
`,e.jsxs(i.h2,{id:"fetching--draw_lib",children:["Fetching — ",e.jsx(i.code,{children:"draw_lib"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fetching--draw_lib",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Woopy searches by topic and gets back a recipe in Woodr to adapt:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'draw_lib("thales theorem")'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'draw_lib("normal distribution")'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'draw_lib("binary tree")'})})]})})}),`
`,e.jsx(i.p,{children:`Built-in constructions include: inscribed right triangle (Thales), right-triangle squares
(Pythagoras), xy axes, number line, bell curve, unit-circle angle, flow boxes, and a tree
layout.`}),`
`,e.jsxs(i.h2,{id:"growing-it--draw_lib_add",children:["Growing it — ",e.jsx(i.code,{children:"draw_lib_add"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#growing-it--draw_lib_add",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The library is a ",e.jsx(i.strong,{children:"flywheel"}),`, not a fixed set. When Woopy builds a good, reusable
construction, it can save it:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"draw_lib_add("})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  name:     "benzene_ring",'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  tags:     "chemistry,hexagon,aromatic",'})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'  template: "['}),e.jsx(i.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"DEF:benzene:cx,cy,r"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] … ["}),e.jsx(i.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"ENDDEF"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:']"'})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})})}),`
`,e.jsxs(i.p,{children:["The construction is written to ",e.jsx(i.code,{children:"data/woopy-draw-library.json"}),` and merged into future
`,e.jsx(i.code,{children:"draw_lib"})," searches. So a figure Woopy gets right once becomes a reusable ",e.jsx(i.strong,{children:"word"}),` in the
language — and Woodr's vocabulary grows the more it's used.`]}),`
`,e.jsxs(i.h2,{id:"best-practice-for-a-saved-construction",children:["Best practice for a saved construction",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practice-for-a-saved-construction",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Save it as a parameterized ",e.jsx(i.a,{href:"%5Cwoodr%5Cabstraction",children:"macro"})," (",e.jsx(i.code,{children:"[DEF]…[ENDDEF]"}),`) so it can be
`,e.jsx(i.code,{children:"[USE]"}),"d with different coordinates, and use ",e.jsx(i.a,{href:"%5Cwoodr%5Ckernel",children:"relational points"}),` inside so it
stays exact wherever it's placed.`]})]})}function d(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{d as default,t as frontmatter};
