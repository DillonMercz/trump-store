"use strict";(self.webpackChunktrump_shop=self.webpackChunktrump_shop||[]).push([[597],{5597:(e,s,t)=>{t.r(s),t.d(s,{default:()=>V});var r=t(5043),o=t(3216),i=t(7391),a=t(8903),n=t(7353),l=t(7392),c=t(8610),d=t(8387),h=t(4535),p=t(8206),x=t(2532),m=t(2372);function g(e){return(0,m.Ay)("MuiImageList",e)}(0,x.A)("MuiImageList",["root","masonry","quilted","standard","woven"]);const u=r.createContext({});var A=t(579);const j=(0,h.Ay)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,s[t.variant]]}})({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch",variants:[{props:{variant:"masonry"},style:{display:"block"}}]}),v=r.forwardRef((function(e,s){const t=(0,p.b)({props:e,name:"MuiImageList"}),{children:o,className:i,cols:a=2,component:n="ul",rowHeight:l="auto",gap:h=4,style:x,variant:m="standard",...v}=t,y=r.useMemo((()=>({rowHeight:l,gap:h,variant:m})),[l,h,m]),b="masonry"===m?{columnCount:a,columnGap:h,...x}:{gridTemplateColumns:`repeat(${a}, 1fr)`,gap:h,...x},f={...t,component:n,gap:h,rowHeight:l,variant:m},w=(e=>{const{classes:s,variant:t}=e,r={root:["root",t]};return(0,c.A)(r,g,s)})(f);return(0,A.jsx)(j,{as:n,className:(0,d.A)(w.root,w[m],i),ref:s,style:b,ownerState:f,...v,children:(0,A.jsx)(u.Provider,{value:y,children:o})})}));t(2086);var y=t(7328);function b(e){return(0,m.Ay)("MuiImageListItem",e)}const f=(0,x.A)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),w=(0,h.Ay)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[{[`& .${f.img}`]:s.img},s.root,s[t.variant]]}})({display:"block",position:"relative",[`& .${f.img}`]:{objectFit:"cover",width:"100%",height:"100%",display:"block"},variants:[{props:{variant:"standard"},style:{display:"flex",flexDirection:"column"}},{props:{variant:"woven"},style:{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}}},{props:{variant:"standard"},style:{[`& .${f.img}`]:{height:"auto",flexGrow:1}}}]}),S=r.forwardRef((function(e,s){const t=(0,p.b)({props:e,name:"MuiImageListItem"}),{children:o,className:i,cols:a=1,component:n="li",rows:l=1,style:h,...x}=t,{rowHeight:m="auto",gap:g,variant:j}=r.useContext(u);let v="auto";"woven"===j?v=void 0:"auto"!==m&&(v=m*l+g*(l-1));const f={...t,cols:a,component:n,gap:g,rowHeight:m,rows:l,variant:j},S=(e=>{const{classes:s,variant:t}=e,r={root:["root",t],img:["img"]};return(0,c.A)(r,b,s)})(f);return(0,A.jsx)(w,{as:n,className:(0,d.A)(S.root,S[j],i),ref:s,style:{height:v,gridColumnEnd:"masonry"!==j?`span ${a}`:void 0,gridRowEnd:"masonry"!==j?`span ${l}`:void 0,marginBottom:"masonry"===j?g:void 0,breakInside:"masonry"===j?"avoid":void 0,...h},ownerState:f,...x,children:r.Children.map(o,(e=>r.isValidElement(e)?"img"===e.type||(0,y.A)(e,["Image"])?r.cloneElement(e,{className:(0,d.A)(S.img,e.props.className)}):e:null))})}));var C=t(3845),I=t(4496),k=t(6641),z=t(3193),M=t(8356),H=t(9285),$=t(2143),R=t(1906),L=t(9336),E=t(3625),F=t(4056),W=t(5244),N=t(7466),P=t(9320),B=t(1403);const O=(0,t(6734).A)((0,A.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment");var D=t(3234),G=t(2769);const V=()=>{const{id:e}=(0,o.g)(),[s,t]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),[h,p]=(0,r.useState)(!1),[x,m]=(0,r.useState)(""),[g,u]=(0,r.useState)(""),j=G.ZE.find((s=>s.id===parseInt(e)))||G.ZE[0];return(0,A.jsx)(i.A,{maxWidth:"lg",sx:{py:6},children:(0,A.jsxs)(a.Ay,{container:!0,spacing:6,children:[(0,A.jsx)(a.Ay,{item:!0,xs:12,md:7,children:(0,A.jsxs)(n.A,{sx:{position:"relative"},children:[(0,A.jsx)(l.A,{onClick:()=>p(!h),sx:{position:"absolute",right:16,top:16,bgcolor:"white","&:hover":{bgcolor:"white"},zIndex:1},children:h?(0,A.jsx)(W.A,{color:"primary"}):(0,A.jsx)(N.A,{})}),(0,A.jsx)(n.A,{component:"img",src:j.images[c],alt:j.name,sx:{width:"100%",height:500,objectFit:"cover",borderRadius:2,mb:2}}),(0,A.jsx)(v,{sx:{width:"100%",height:100},cols:4,rowHeight:100,gap:8,children:j.images.map(((e,s)=>(0,A.jsx)(S,{sx:{cursor:"pointer",opacity:c===s?1:.7,transition:"opacity 0.2s","&:hover":{opacity:1}},onClick:()=>d(s),children:(0,A.jsx)("img",{src:e,alt:`${j.name} ${s+1}`,style:{height:"100%",width:"100%",objectFit:"cover",borderRadius:1}})},s)))})]})}),(0,A.jsx)(a.Ay,{item:!0,xs:12,md:5,children:(0,A.jsxs)(n.A,{sx:{position:"sticky",top:100},children:[j.bestseller&&(0,A.jsx)(C.A,{icon:(0,A.jsx)(P.A,{sx:{fontSize:16}}),label:"Bestseller",size:"small",sx:{bgcolor:"#FFD700",color:"#000",fontWeight:600,mb:2}}),(0,A.jsx)(I.A,{variant:"h4",component:"h1",gutterBottom:!0,children:j.name}),(0,A.jsxs)(n.A,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,A.jsx)(k.A,{value:j.rating,precision:.1,readOnly:!0}),(0,A.jsxs)(I.A,{variant:"body2",color:"text.secondary",sx:{ml:1},children:["(",j.reviews," reviews)"]})]}),(0,A.jsxs)(I.A,{variant:"h4",color:"primary",sx:{mb:3},children:["$",j.price]}),(0,A.jsx)(I.A,{variant:"body1",color:"text.secondary",paragraph:!0,children:j.description}),(0,A.jsx)(n.A,{sx:{mb:3},children:(0,A.jsxs)(n.A,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,A.jsx)(B.A,{color:"action"}),(0,A.jsx)(I.A,{variant:"body2",color:"text.secondary",children:j.shipping})]})}),j.colors.length>0&&(0,A.jsxs)(z.A,{fullWidth:!0,sx:{mb:2},children:[(0,A.jsx)(M.A,{children:"Color"}),(0,A.jsx)(H.A,{value:g,onChange:e=>u(e.target.value),label:"Color",children:j.colors.map((e=>(0,A.jsx)($.A,{value:e,children:e},e)))})]}),j.sizes.length>0&&(0,A.jsxs)(z.A,{fullWidth:!0,sx:{mb:3},children:[(0,A.jsx)(M.A,{children:"Size"}),(0,A.jsx)(H.A,{value:x,onChange:e=>m(e.target.value),label:"Size",children:j.sizes.map((e=>(0,A.jsx)($.A,{value:e,children:e},e)))})]}),(0,A.jsx)(R.A,{variant:"contained",size:"large",fullWidth:!0,sx:{mb:2,py:1.5},disabled:!j.inStock,children:j.inStock?"Add to Cart":"Out of Stock"}),(0,A.jsx)(L.A,{sx:{my:4}}),(0,A.jsxs)(n.A,{sx:{width:"100%"},children:[(0,A.jsxs)(E.A,{value:s,onChange:(e,s)=>{t(s)},"aria-label":"product details tabs",sx:{mb:2},children:[(0,A.jsx)(F.A,{label:"Details",icon:(0,A.jsx)(O,{}),iconPosition:"start"}),(0,A.jsx)(F.A,{label:"Shipping",icon:(0,A.jsx)(B.A,{}),iconPosition:"start"}),(0,A.jsx)(F.A,{label:"Guarantee",icon:(0,A.jsx)(D.A,{}),iconPosition:"start"})]}),(0,A.jsxs)(n.A,{hidden:0!==s,children:[(0,A.jsx)(I.A,{variant:"subtitle1",gutterBottom:!0,children:"Product Features"}),(0,A.jsx)(n.A,{component:"ul",sx:{pl:2},children:j.details.features.map(((e,s)=>(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:e},s)))}),(0,A.jsxs)(a.Ay,{container:!0,spacing:2,sx:{mt:2},children:[(0,A.jsxs)(a.Ay,{item:!0,xs:6,children:[(0,A.jsx)(I.A,{variant:"subtitle2",children:"Material"}),(0,A.jsx)(I.A,{color:"text.secondary",children:j.details.material})]}),(0,A.jsxs)(a.Ay,{item:!0,xs:6,children:[(0,A.jsx)(I.A,{variant:"subtitle2",children:"Care"}),(0,A.jsx)(I.A,{color:"text.secondary",children:j.details.care})]})]})]}),(0,A.jsxs)(n.A,{hidden:1!==s,children:[(0,A.jsx)(I.A,{variant:"body1",paragraph:!0,children:"We offer the following shipping options:"}),(0,A.jsxs)(n.A,{component:"ul",sx:{pl:2},children:[(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"Standard Shipping (5-7 business days)"}),(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"Express Shipping (2-3 business days)"}),(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"Free shipping on orders over $50"})]})]}),(0,A.jsxs)(n.A,{hidden:2!==s,children:[(0,A.jsx)(I.A,{variant:"body1",paragraph:!0,children:"Our products come with:"}),(0,A.jsxs)(n.A,{component:"ul",sx:{pl:2},children:[(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"30-day money-back guarantee"}),(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"1-year warranty against defects"}),(0,A.jsx)(I.A,{component:"li",color:"text.secondary",paragraph:!0,children:"Satisfaction guaranteed or full refund"})]})]})]})]})})]})})}}}]);
//# sourceMappingURL=597.07927364.chunk.js.map