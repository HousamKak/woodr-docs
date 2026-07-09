import{u as r,j as e}from"./index-3PXwshgb.js";const t={title:"Motion",description:"[ANIM] — sweep a variable over time and re-draw the scene each frame."};function i(a){const n={a:"a",aside:"aside",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"motion",children:["Motion",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#motion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["Choreography (see ",e.jsx(n.a,{href:"%5Cwoodr%5Cchoreography",children:"Choreography"}),") reveals marks ",e.jsx(n.em,{children:"step by step"}),` as you
speak. `,e.jsx(n.strong,{children:"Motion"})," is different: it makes a mark ",e.jsx(n.strong,{children:"move continuously"}),` over a span of seconds.
This is what puts Woodr in Manim's space — but live, spoken, and on your real screen.`]}),`
`,e.jsxs(n.p,{children:["The idea is stolen straight from GeoGebra's sliders: ",e.jsx(n.strong,{children:`an animated value is just a free
variable; sweeping it re-drives everything defined in terms of it.`}),` Woodr already resolves a
scene from its relationships, so to animate, it simply `,e.jsx(n.strong,{children:`re-resolves the whole scene each
frame`})," with the swept value substituted in. The resolver ",e.jsx(n.em,{children:"is"})," the animation engine."]}),`
`,e.jsxs(n.h2,{id:"anim",children:["[ANIM]",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anim",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[ANIM:t: from to dur=Xs ease=inout]
   … your scene, using t …
[ENDANIM]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"t"})," sweeps from ",e.jsx(n.code,{children:"from"})," to ",e.jsx(n.code,{children:"to"})," over ",e.jsx(n.code,{children:"dur"}),` seconds; every frame the scene is redrawn with the
current `,e.jsx(n.code,{children:"t"}),". ",e.jsx(n.code,{children:"ease"})," is ",e.jsx(n.code,{children:"inout"})," (default), ",e.jsx(n.code,{children:"linear"}),", ",e.jsx(n.code,{children:"in"}),", or ",e.jsx(n.code,{children:"out"}),". Add ",e.jsx(n.code,{children:"loop"})," to repeat."]}),`
`,e.jsxs(n.p,{children:["Anything defined before the block is available inside it, but keep the ",e.jsx(n.strong,{children:`animated scene inside
the block`})," — that's what gets redrawn."]}),`
`,e.jsxs(n.h2,{id:"glide-a-point-along-a-segment",children:["Glide a point along a segment",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#glide-a-point-along-a-segment",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PT:A:200,400][PT:B:900,400]
[ANIM:t:0 1 dur=2s]
  [PT:P:along A B t][POINT:@P:moving]
[ENDANIM]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"P"})," is ",e.jsx(n.code,{children:"along A B t"}),"; as ",e.jsx(n.code,{children:"t"})," goes 0 → 1, ",e.jsx(n.code,{children:"P"})," slides from ",e.jsx(n.code,{children:"A"})," to ",e.jsx(n.code,{children:"B"}),"."]}),`
`,e.jsxs(n.h2,{id:"the-derivative--a-tangent-sliding-along-a-curve",children:["The derivative — a tangent sliding along a curve",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-derivative--a-tangent-sliding-along-a-curve",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The canonical calculus animation, and the reason Motion matters:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[ANIM:s:0.3 4.7 dur=4s]
  [PLOT:f:0.6*x^2-0.1*x^3:0,5,300,200,900,500]
  [PT:C:onplot f s]
  [COLOR:red][TANLINE:f:s]
  [COLOR:blue][POINT:@C:here]
[ENDANIM]
`})}),`
`,e.jsxs(n.p,{children:["As ",e.jsx(n.code,{children:"s"}),` sweeps the domain, the contact point rides the curve and the tangent line pivots with
the true local slope — you `,e.jsx(n.em,{children:"watch the derivative change"}),`. Nothing about the tangent is
animated by hand; it re-resolves exactly, every frame.`]}),`
`,e.jsxs(n.h2,{id:"orbit-a-point-around-a-circle",children:["Orbit a point around a circle",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#orbit-a-point-around-a-circle",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[CIRCLE:O:640,360,200]
[ANIM:a:0 360 dur=3s ease=linear]
  [PT:P:on O a][POINT:@P:orbiting]
[ENDANIM]
`})}),`
`,e.jsxs(n.h2,{id:"draw-the-trail-too",children:["Draw the trail too",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#draw-the-trail-too",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["To show ",e.jsx(n.em,{children:"both"}),` the mover and the path it sweeps, draw the path statically with a
`,e.jsx(n.a,{href:"%5Cwoodr%5Cpaths",children:e.jsx(n.code,{children:"[PCURVE]"})})," and move a point along it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-woodr",children:`[PCURVE:S: 640+3*a*cos(a) ; 360+3*a*sin(a) ; a 0 25 : spiral]
[ANIM:t:0 1 dur=3s]
  [PT:P:pointon S t][POINT:@P:tracing]
[ENDANIM]
`})}),`
`,e.jsx(n.aside,{"data-callout":"tip",children:e.jsxs(n.p,{children:["Reach for Motion when ",e.jsx(n.strong,{children:"change over time is the point"}),` — a sweep, an orbit, a growing angle,
a derivative. For a static figure revealed in sync with your words, use plain
`,e.jsx(n.a,{href:"%5Cwoodr%5Cchoreography",children:"choreography"})," instead. One animation per turn; keep the scene small."]})}),`
`,e.jsxs(n.h2,{id:"how-it-resolves",children:["How it resolves",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-it-resolves",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["At compile time the ",e.jsx(n.code,{children:"[ANIM]…[ENDANIM]"}),` block is lifted out, the variable is swept across ~25
frames per second, and each frame is fully re-resolved to exact marks and stored. The renderer
plays the frames on a timer in a dedicated layer, then holds the final frame. Deterministic,
self-contained, and it reuses the exact same drawing path as static marks — so an animated
tangent looks identical to a still one.`]})]})}function o(a={}){const{wrapper:n}={...r(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(i,{...a})}):i(a)}export{o as default,t as frontmatter};
