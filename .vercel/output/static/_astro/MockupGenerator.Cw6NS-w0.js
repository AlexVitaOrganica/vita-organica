import{r as l}from"./index.DiEladB3.js";var _={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function Q(){if($)return b;$=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(n,d,o){var m=null;if(o!==void 0&&(m=""+o),d.key!==void 0&&(m=""+d.key),"key"in d){o={};for(var p in d)p!=="key"&&(o[p]=d[p])}else o=d;return d=o.ref,{$$typeof:a,type:n,key:m,ref:d!==void 0?d:null,props:o}}return b.Fragment=r,b.jsx=s,b.jsxs=s,b}var F;function K(){return F||(F=1,_.exports=Q()),_.exports}var e=K();const I={gummies:{label:"Gummies",templateSrc:"/mockups/gummies.png",labelBox:{x:320,y:380,w:360,h:400},exportScale:2},capsules:{label:"Capsules",templateSrc:"/mockups/capsules.png",labelBox:{x:280,y:420,w:440,h:350},exportScale:2},gel:{label:"Honey Gel",templateSrc:"/mockups/gel.png",labelBox:{x:350,y:350,w:300,h:450},exportScale:2},powders:{label:"Powders",templateSrc:"/mockups/powders.png",labelBox:{x:250,y:380,w:500,h:420},exportScale:2},spoons:{label:"Sachets",templateSrc:"/mockups/spoons.png",labelBox:{x:430,y:250,w:140,h:600},exportScale:2},"soft-gels":{label:"Soft Gels",templateSrc:"/mockups/soft-gels.png",labelBox:{x:300,y:400,w:400,h:380},exportScale:2}};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(...a)=>a.filter((r,s,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,n)=>n?n.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=a=>{const r=re(a);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var te={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=l.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:d="",children:o,iconNode:m,...p},y)=>l.createElement("svg",{ref:y,...te,width:r,height:r,stroke:a,strokeWidth:n?Number(s)*24/Number(r):s,className:H("lucide",d),...!o&&!oe(p)&&{"aria-hidden":"true"},...p},[...m.map(([C,v])=>l.createElement(C,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(a,r)=>{const s=l.forwardRef(({className:n,...d},o)=>l.createElement(ae,{ref:o,iconNode:r,className:H(`lucide-${ee(V(a))}`,`lucide-${a}`,n),...d}));return s.displayName=V(a),s};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]],se=f("candy",ne);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],le=f("flask-conical",ie);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]],de=f("glass-water",ce);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],me=f("package",pe);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],D=f("pill",ue);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],xe=f("utensils",ge),he={gummies:e.jsx(se,{size:24}),capsules:e.jsx(D,{size:24}),gel:e.jsx(le,{size:24}),powders:e.jsx(de,{size:24}),spoons:e.jsx(xe,{size:24}),"soft-gels":e.jsx(D,{size:24})},ye=({initialFormat:a})=>{const[r,s]=l.useState(1),[n,d]=l.useState(a||"gummies"),[o,m]=l.useState(null),[p,y]=l.useState(null),[C,v]=l.useState(!1),[q,N]=l.useState(!1),[k,J]=l.useState({name:"",email:""}),z=l.useRef(null),P=l.useRef({}),u=I[n]||I.gummies,T=1200,W=l.useCallback(async()=>{const t=z.current;if(!t)return;const i=t.getContext("2d");if(!i)return;const c=T*u.exportScale;t.width!==c&&(t.width=c,t.height=c),v(!0);try{let g=P.current[n];if(g||(g=await new Promise((x,E)=>{const h=new Image;h.crossOrigin="anonymous",h.onload=()=>x(h),h.onerror=()=>E(new Error("Failed to load template")),h.src=u.templateSrc}),P.current[n]=g),i.clearRect(0,0,c,c),i.fillStyle="#ffffff",i.fillRect(0,0,c,c),i.drawImage(g,0,0,c,c),o){const{x,y:E,w:h,h:Z}=u.labelBox,G=x/1e3*c,L=E/1e3*c,j=h/1e3*c,w=Z/1e3*c,B=o.width/o.height,X=j/w;let S,R,A,M;B>X?(S=j,R=j/B,A=G,M=L+(w-R)/2):(R=w,S=w*B,M=L,A=G+(j-S)/2),i.drawImage(o,A,M,S,R)}}catch(g){console.error(g),y("System update in progress. Please try another format.")}finally{v(!1)}},[n,o,u]);l.useEffect(()=>{W()},[W]),l.useEffect(()=>{window.dispatchEvent(new CustomEvent("mockup:formatChange",{detail:{label:u.label}}))},[n]);const O=t=>{const i=t.target.files?.[0];if(!i)return;const c=new FileReader;c.onload=g=>{const x=new Image;x.onload=()=>{m(x),y(null),s(3)},x.onerror=()=>y("Invalid image file. Please use JPG, PNG or SVG."),x.src=g.target?.result},c.readAsDataURL(i)},U=()=>{const t=z.current;if(!t)return;const i=document.createElement("a");i.download=`vitaorg-${n}-mockup.png`,i.href=t.toDataURL("image/png",1),i.click()},Y=async t=>{t.preventDefault();const i={...k,format:n,timestamp:new Date().toISOString()};localStorage.setItem("lead_mockup",JSON.stringify(i)),await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"mockup",email:k.email,format:u.label})}).catch(()=>{}),N(!0),U()};return e.jsxs("div",{className:"mockup-exp",style:{display:"grid",gridTemplateColumns:"400px 1fr",gap:"2rem",minHeight:"600px",background:"transparent",color:"var(--color-white)"},children:[e.jsxs("div",{className:"exp-controls",style:{background:"transparent",borderRadius:"var(--radius-xl)",padding:"2.5rem 3.5rem",border:"0px solid rgba(255,255,255,0.1)"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"2rem"},children:[1,2,3].map(t=>e.jsx("div",{style:{height:"4px",flex:1,borderRadius:"2px",background:r>=t?"var(--color-green)":"var(--color-border-light)"}},t))}),r===1&&e.jsxs("div",{className:"fade-in",children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:"var(--color-green)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Step 01"}),e.jsx("h2",{style:{fontSize:"1.75rem",marginTop:"0.5rem",marginBottom:"1.5rem"},children:"Select Format"}),p&&e.jsxs("div",{style:{padding:"1rem",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.2)",borderRadius:"var(--radius-lg)",color:"#ef4444",fontSize:"14px",marginBottom:"1.5rem"},children:[e.jsx("strong",{children:"Error:"})," ",p]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:Object.entries(I).map(([t,i])=>e.jsxs("button",{onClick:()=>{d(t),s(2)},className:`format-card ${n===t?"active":""}`,children:[e.jsx("span",{className:"icon-wrapper",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"32px",height:"32px",marginBottom:"8px",transition:"color 0.2s"},children:he[t]||e.jsx(me,{size:24})}),e.jsx("span",{children:i.label})]},t))})]}),r===2&&e.jsxs("div",{className:"fade-in",children:[e.jsx("button",{onClick:()=>s(1),style:{background:"none",border:"none",color:"var(--color-ink-muted)",fontSize:"13px",cursor:"pointer",marginBottom:"1rem",padding:0},children:"← Back to selection"}),e.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:"var(--color-green)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Step 02"}),e.jsx("h2",{style:{fontSize:"1.75rem",marginTop:"0.5rem",marginBottom:"1rem"},children:"Upload Brand Asset"}),e.jsxs("p",{style:{fontSize:"14px",color:"rgba(255,255,255,0.7)",marginBottom:"1.5rem",lineHeight:"1.5"},children:["Upload your current label design or logo to see it applied to our ",u.label," packaging."]}),e.jsxs("div",{className:"upload-zone",onClick:()=>document.getElementById("file-up")?.click(),children:[e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",style:{marginBottom:"12px",color:"var(--color-green)"},children:e.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"})}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600},children:"Click to choose file"}),e.jsx("span",{style:{fontSize:"11px",color:"rgba(255,255,255,0.5)",marginTop:"8px"},children:"PNG, JPG or SVG • Min 1000px"}),e.jsx("input",{id:"file-up",type:"file",accept:"image/*",onChange:O,style:{display:"none"}})]}),e.jsxs("div",{style:{marginTop:"2rem",padding:"1.25rem",borderRadius:"var(--radius-lg)",background:"rgba(255,255,255,0.05)",fontSize:"12px",color:"rgba(255,255,255,0.8)"},children:[e.jsx("strong",{children:"Design Specs:"})," 2000 x 2000px recommended for high-res output. Our engine will auto-scale to fit the specific area."]})]}),r===3&&e.jsxs("div",{className:"fade-in",children:[e.jsx("button",{onClick:()=>s(2),style:{background:"none",border:"none",color:"rgba(255,255,255,0.6)",fontSize:"13px",cursor:"pointer",marginBottom:"1rem",padding:0},children:"← Re-upload"}),e.jsx("span",{style:{fontSize:"12px",fontWeight:700,color:"var(--color-green)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Step 03"}),e.jsx("h2",{style:{fontSize:"1.75rem",marginTop:"0.5rem",marginBottom:"1.5rem"},children:"Visual Ready"}),q?e.jsxs("div",{style:{textAlign:"center",padding:"1rem"},children:[e.jsx("div",{style:{width:"48px",height:"48px",background:"var(--color-green)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"},children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",width:"24",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}),e.jsx("h3",{style:{fontSize:"1.25rem",marginBottom:"0.5rem"},children:"Download Triggered!"}),e.jsx("p",{style:{fontSize:"14px",color:"rgba(255,255,255,0.7)",marginBottom:"1.5rem"},children:"Your high-res mockup is being saved to your device."}),e.jsx("button",{onClick:()=>{N(!1),s(1),m(null)},style:{background:"rgba(255,255,255,0.05)",color:"white",border:"1px solid rgba(255,255,255,0.1)",padding:"14px",borderRadius:"var(--radius)",fontWeight:600,cursor:"pointer",width:"100%"},children:"Create Another"})]}):e.jsxs("form",{onSubmit:Y,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("input",{type:"text",name:"b_name",tabIndex:-1,autoComplete:"off",style:{display:"none"},"aria-hidden":"true"}),e.jsxs("p",{style:{fontSize:"14px",color:"rgba(255,255,255,0.8)",background:"rgba(255,255,255,0.05)",padding:"1rem",borderRadius:"var(--radius-lg)",marginBottom:"0.5rem"},children:["✨ ",e.jsx("strong",{children:"Almost there!"})," Enter your email to unlock your high-res 2000x2000px branding export instantly."]}),e.jsx("input",{type:"email",required:!0,placeholder:"your@email.com",value:k.email,onChange:t=>J({...k,email:t.target.value}),style:{width:"100%",padding:"14px",borderRadius:"var(--radius)",border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"white",fontSize:"15px"}}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-full",style:{padding:"16px"},children:"Get High-Res Export →"}),e.jsx("p",{style:{textAlign:"center",fontSize:"11px",color:"rgba(255,255,255,0.4)"},children:"By clicking, you'll receive your mockup and production tips."})]})]})]}),e.jsx("div",{className:"exp-viewport",style:{position:"relative"},children:e.jsxs("div",{style:{position:"sticky",top:"120px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{style:{position:"relative",background:"var(--color-surface)",border:"1px solid var(--color-border-light)",borderRadius:"var(--radius-lg)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"600px",width:"100%"},children:[C&&e.jsx("div",{className:"loader-overlay"}),e.jsx("canvas",{ref:z,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",inset:0,background:"#fff"}}),e.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",color:"#fff",fontSize:"10px",padding:"4px 8px",borderRadius:"var(--radius-pill)",fontWeight:600},children:"LIVE PREVIEW"})]}),e.jsxs("p",{style:{fontSize:"13px",color:"var(--color-ink-soft)",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 8v4l3 3"})]}),"Professional Quality • ",T*(u?.exportScale||1),"px Resolution"]})]})}),e.jsx("style",{children:`
                .fade-in { animation: expFade 0.4s ease-out; }
                @keyframes expFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
                
                .format-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.25rem;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: var(--radius-lg);
                    background: transparent;
                    color: rgba(255,255,255,0.7);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 13px;
                    font-weight: 600;
                }
                .format-card:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); color: white; }
                .format-card.active { border-color: var(--color-green); background: rgba(143, 194, 20, 0.1); color: white; }

                .format-card .icon-wrapper { color: rgba(255,255,255,0.4); }
                .format-card:hover .icon-wrapper { color: white; }
                .format-card.active .icon-wrapper { color: var(--color-green); }

                .upload-zone {
                    border: 2px dashed rgba(255,255,255,0.2);
                    border-radius: var(--radius-xl);
                    padding: 3rem 2rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .upload-zone:hover { background: rgba(255,255,255,0.05); border-color: var(--color-green); }

                .loader-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.7);
                    backdrop-filter: blur(2px);
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                @media (max-width: 1024px) {
                    .mockup-exp { grid-template-columns: 1fr !important; }
                    .exp-viewport { min-height: auto; }
                    .exp-viewport > div { position: static !important; min-height: auto !important; margin-top: 2rem; }
                }
            `})]})};export{ye as default};
