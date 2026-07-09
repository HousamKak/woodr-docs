import{u as r,j as e}from"./index-3PXwshgb.js";const d={title:"Choreography",description:"Woodr has time — marks reveal in step with the narration."};function s(t){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"choreography",children:["Choreography",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#choreography",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Woodr is unusual among drawing languages: it has ",e.jsx(n.strong,{children:"time"}),`. A Woodr program isn't rendered
all at once — it `,e.jsx(n.em,{children:"plays"}),", in step with what Woopy is saying."]}),`
`,e.jsxs(n.h2,{id:"marks-appear-as-theyre-spoken",children:["Marks appear as they're spoken",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#marks-appear-as-theyre-spoken",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Woopy's reply streams sentence by sentence, and each sentence's marks are revealed ",e.jsx(n.strong,{children:`the
moment that sentence is spoken`}),". So you place a tag right where you say the words for it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`First, here's the circle. [CIRCLE:O:960,540,300]
Now pick a point on top. [PT:B:on O 90][POINT:@B:B]
`})}),`
`,e.jsxs(n.p,{children:[`The circle appears as Woopy says "here's the circle"; `,e.jsx(n.code,{children:"B"}),` appears as it says "on top".
Marks `,e.jsx(n.strong,{children:"accumulate"})," as the explanation builds."]}),`
`,e.jsxs(n.h2,{id:"pacing-controls",children:["Pacing controls",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pacing-controls",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Tag"}),e.jsx(n.th,{children:"Effect"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"[PAUSE:800]"})}),e.jsx(n.td,{children:"Hold ~0.8 s before the next beat"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"[CLEAR]"})}),e.jsx(n.td,{children:"Wipe the current marks — start a fresh step (spotlight one thing at a time)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"[BEAT]"})}),e.jsx(n.td,{children:"Force a new beat inside a single sentence"})]})]})]}),`
`,e.jsxs(n.h2,{id:"a-stepped-walkthrough",children:["A stepped walkthrough",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-stepped-walkthrough",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`Step one — click here. [POINT:@save:save] [PAUSE:600]
[CLEAR] Step two — now the menu opens. [POINT:@menu:menu]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"[CLEAR]"}),` between steps means only the current step is on screen — ideal for "do this, then
this" instructions.`]}),`
`,e.jsxs(n.h2,{id:"and-it-fades",children:["And it fades",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#and-it-fades",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["When the turn ends, the whole drawing fades out on its own. Woodr marks are ",e.jsx(n.strong,{children:"transient"}),`
by design — they're an explanation, not a document.`]})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{i as default,d as frontmatter};
