(self.webpackChunkbandit_core_cra=self.webpackChunkbandit_core_cra||[]).push([[647],{67289:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r,i=t(74165),o=t(15861),a=t(29439),c=t(72791),s=t(36459),l=t(30168),u=t(58563),d=t(52558),h=t(95245),p=t(44087),x=t(4942),f=t(1413),g="undefined"===typeof window?c.useEffect:c.useLayoutEffect,m={sm:576,md:852,lg:968,xl:1080,"2lg":1200},v=function(){var e=0;return Object.keys(m).reduce((function(n,t,r){if(r===Object.keys(m).length-1)return(0,f.Z)((0,f.Z)({},n),{},(0,x.Z)({},t,"(min-width: ".concat(e,"px)")));var i=e,o=m[t];return e=o+1,(0,f.Z)((0,f.Z)({},n),{},(0,x.Z)({},t,"(min-width: ".concat(i,"px) and (max-width: ").concat(o,"px)")))}),{})}(),b=function(e){return"is".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))},w=function(){return Object.keys(v).reduce((function(e,n){var t,r,i=b(n);if("undefined"===typeof window)return(0,f.Z)((0,f.Z)({},e),{},(0,x.Z)({},i,!1));var o="function"===typeof(null===(t=window)||void 0===t?void 0:t.matchMedia)?window.matchMedia(v[n]):null;return(0,f.Z)((0,f.Z)({},e),{},(0,x.Z)({},i,null!==(r=null===o||void 0===o?void 0:o.matches)&&void 0!==r&&r))}),{})},C=function(){var e=(0,c.useState)((function(){return w()})),n=(0,a.Z)(e,2),t=n[0],r=n[1];return g((function(){var e=Object.keys(v).map((function(e){var n,t,i;return"function"===typeof(null===(n=window)||void 0===n?void 0:n.matchMedia)&&(t=window.matchMedia(v[e]),i=function(n){var t=b(e);r((function(e){return(0,f.Z)((0,f.Z)({},e),{},(0,x.Z)({},t,n.matches))}))},t.addEventListener&&t.addEventListener("change",i)),function(){var e;null!==(e=t)&&void 0!==e&&e.removeEventListener&&t.removeEventListener("change",i)}}));return r(w()),function(){e.forEach((function(e){e()}))}}),[]),(0,f.Z)((0,f.Z)({},t),{},{isMobile:t.isSm,isTablet:t.isMd||t.isLg,isDesktop:t.isXlg||t.is2xl})},Z=t(88405),j=t(80184),y=(0,h.Z)(p.xu)(r||(r=(0,l.Z)(["\n  .swiper {\n    width: 100%;\n    height: 100%;\n    padding: 20px 8px;\n    padding-top: 50px;\n  }\n  .swiper-pagination {\n    display: none;\n  }\n  .swiper-button-disabled {\n    opacity: 0.3;\n  }\n\n  .swiper-button-prev:after,\n  .swiper-button-next:after {\n    font-size: 14px;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    top: 25px;\n    border-radius: 12px;\n    padding: 0px 10px;\n    height: 30px;\n    color: ",";\n  }\n  .swiper-button-prev {\n    right: 44px;\n    left: auto;\n  }\n  .swiper-slide {\n    "," {\n      width: min(calc(calc(100% / ",") - 10px), 381.333px);\n      margin-right: 20px;\n    }\n  }\n\n  .swiper-wrapper {\n    display: flex;\n  }\n"])),Z.O.primary,(function(e){return e.theme.breakpoints.sm}),(function(e){return e.slidesperview}));function L(e){var n=Object.assign({},((0,s.Z)(e),e)),t=(0,c.useRef)(),r=C(),i=r.isTablet,o=(r.isDesktop,r.isMobile);return(0,j.jsx)(y,{ref:t,slidesperview:o?n.mobileSlidesPerView:i?2:n.desktopSlidesPerView,className:"slider_wrapper",children:(0,j.jsx)(u.tq,{slidesPerView:o?n.mobileSlidesPerView:i?3:n.desktopSlidesPerView,spaceBetween:20,slidesPerGroup:o?n.mobileSlidesPerView:i?2:n.desktopSlidesPerView,loopFillGroupWithBlank:!0,pagination:{clickable:!0},navigation:!0,modules:[d.tl,d.W_],className:"mySwiper",children:c.Children.map(n.children,(function(e,n){return(0,j.jsx)(u.o5,{children:(0,c.cloneElement)(e)},n)}))})})}var E,N,S,A,k,I,_,M=t(92702),T=t(72426),B=t.n(T),H=t(20176),O=t(29229),P=t(942),V=t(2703),D=function(e){var n=e.launchDate,t=e.chainId,r=e.mintEnabled,i=void 0!==r&&r,o=e.mintPercentage,s=(0,c.useState)(!1),l=(0,a.Z)(s,2),u=l[0],d=l[1],h=B().unix(n).isBefore(B()()),x=u||!n||h,f=o>=100;return(0,j.jsxs)(K,{children:[(0,j.jsxs)(p.xu,{mr:"auto",children:[!f&&i&&h?(0,j.jsx)(O.x,{fontSize:12,fontWeight:600,color:"white",children:"Mint Now"}):(0,j.jsx)(O.x,{fontSize:12,fontWeight:600,color:"white",children:f?"Sold Out":h?"Mint Live":""}),!h&&!x&&(0,j.jsx)(M.ZP,{date:B().unix(n).toDate(),renderer:function(e){var n=e.formatted;return(0,j.jsxs)(q,{fontSize:12,fontWeight:600,color:"white;",children:["Starts in - ",n.days,"D : ",n.hours,"H : ",n.minutes,"M : ",n.seconds,"S"]})},onComplete:function(){d(!0)}})]}),(0,j.jsx)(X,{children:(0,j.jsx)(P.Z,{width:16,height:16,chainId:t})})]})},F=function(e){var n=e.stats,t=e.chainId,r=C().isMobile,i=n.mintPercentage,o=n.maxMint,a=n.price;return(0,j.jsxs)(H.k,{justifyContent:"space-between",mt:"10px",children:[(0,j.jsx)(G,{mr:"5px",value:"".concat(i,"%"),title:"Mint %",tokenIcon:!1,showValue:!!i,chainId:t}),!r&&(0,j.jsx)(G,{mr:"5px",value:o,title:"Total Supply",tokenIcon:!1,chainId:t}),(0,j.jsx)(G,{mr:"0px",value:a.value,title:"Mint Price",tokenIcon:!0,showValue:!(null===a||void 0===a||!a.value),chainId:t})]})},G=function(e){var n=e.title,t=e.value,r=e.tokenIcon,i=void 0!==r&&r,o=e.showValue,a=void 0===o||o,c=e.mr,s=e.chainId;return(0,j.jsx)(p.xu,{mr:c,children:(0,j.jsxs)(p.xu,{children:[(0,j.jsx)(O.x,{fontSize:12,fontWeight:400,lineHeight:"15px",color:"text",mb:"5px",children:n}),(0,j.jsx)(H.k,{alignItems:"center",children:a?(0,j.jsxs)(j.Fragment,{children:[i&&(0,j.jsx)(P.Z,{width:12,height:12,chainId:s}),(0,j.jsx)(O.x,{fontSize:12,fontWeight:700,lineHeight:"15px",textAlign:"center",ml:"2px",children:t||0})]}):(0,j.jsx)(O.x,{lineHeight:"18px",children:"--"})})]})})},R=(0,h.Z)(p.xu)(E||(E=(0,l.Z)(["\n  background-color: ",";\n  border: 1px solid transparent;\n  border-color: ",";\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 12px;\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.foreground})),U=(0,h.Z)(p.xu)(N||(N=(0,l.Z)(["\n  width: 100%;\n  height: 120px;\n  position: relative;\n  border-radius: 10.96px 10.96px 0px 0px;\n  overflow: hidden;\n  background-color: ",";\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])),(function(e){return e.theme.colors.backgroundAlt})),z=(0,h.Z)(H.k)(S||(S=(0,l.Z)(["\n  grid-gap: 14px;\n  margin-top: 14px;\n"]))),W=(0,h.Z)(p.xu)(A||(A=(0,l.Z)(["\n  min-width: 100px;\n  width: 95px;\n  height: 95px;\n  min-width: 95px !important;\n  background-color: ",";\n\n  border-radius: 12%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])),(function(e){return e.theme.colors.backgroundAlt})),q=(0,h.Z)(O.x)(k||(k=(0,l.Z)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  white-space: normal;\n  word-break: break-all;\n  overflow: hidden;\n  cursor: pointer;\n"]))),K=(0,h.Z)(H.k)(I||(I=(0,l.Z)(["\n  position: absolute;\n  bottom: 0;\n  z-index: 2;\n  border-radius: 0;\n  padding: 5px 10px;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n\n  -webkit-backdrop-filter: blur(46px);\n  backdrop-filter: blur(46px);\n  background: rgba(0, 0, 0, 0.2);\n"]))),X=(0,h.Z)(p.xu)(_||(_=(0,l.Z)(["\n  background-color: #ffffff;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Y=function(e){var n,t=e.details,r=(0,c.useState)(!1),i=(0,a.Z)(r,2),o=(i[0],i[1],t.contract),s=t.profile,l=t.stats,u=t.mintEnabled,d=o.chainId,h=s.profileImage,x=s.coverImage,f=s.name,g=l.mintPercentage;return(0,j.jsxs)(R,{className:"collection-card",children:[(0,j.jsxs)(U,{children:[(0,j.jsx)(D,{launchDate:null===t||void 0===t||null===(n=t.contract)||void 0===n?void 0:n.startDate,chainId:d,mintEnabled:u,mintPercentage:g}),(0,j.jsx)("img",{src:(0,V.Jn)(x,{height:200,quality:80}),alt:"cover image"})]}),(0,j.jsxs)(z,{children:[(0,j.jsx)(W,{children:(0,j.jsx)("img",{src:(0,V.Jn)(h,{height:100,quality:80}),alt:"profile image"})}),(0,j.jsxs)(p.xu,{width:"100%",children:[(0,j.jsx)(q,{fontSize:"16px",fontWeight:600,children:f}),(0,j.jsxs)(H.k,{children:[(0,j.jsxs)(O.x,{fontSize:"12px",fontWeight:500,color:"text",textAlign:"left",mr:"4px",children:["by"," "]}),(0,j.jsxs)(q,{fontSize:"12px",fontWeight:500,textAlign:"left",children:["@",f||"Name"]})]}),(0,j.jsx)(F,{stats:l,chainId:d})]})]})]})},J=t(74588),Q=(t(60625),t(12660)),$=t(59434),ee=function(e){var n=e.accessKey,t=(0,c.useState)([]),r=(0,a.Z)(t,2),s=r[0],l=r[1],u=(0,c.useState)(null),d=(0,a.Z)(u,2),h=d[0],x=(d[1],(0,$.I0)()),f=(0,c.useCallback)(function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.uO)(n);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),[n]);(0,c.useEffect)((function(){n&&f(n)}),[f,n]);return n?(0,j.jsxs)(p.xu,{bg:"background",children:[h&&(0,j.jsx)(h,{}),s.length>0&&(0,j.jsx)(L,{mobileSlidesPerView:1,desktopSlidesPerView:3,children:s.map((function(e,n){return(0,j.jsx)(p.xu,{cursor:"pointer",onClick:function(){return n=e.collectionId,void x((0,Q._C)({id:n}));var n},children:(0,j.jsx)(Y,{details:e,showDescription:!1})},n)}))})]}):null};var ne=function(){return(0,j.jsx)("div",{className:"App",children:(0,j.jsx)(ee,{accessKey:"b854627c46904a5db26fdbe920a8402d"})})}},942:function(e,n,t){"use strict";var r=t(1413),i=t(45987),o=t(37226),a=(t(72791),t(80184)),c=["chainId"];n.Z=function(e){var n=e.chainId,t=(0,i.Z)(e,c);return[o.HL.BINANCE,o.HL.BINANCE_TESTNET].includes(n)?(0,a.jsxs)("svg",(0,r.Z)((0,r.Z)({width:"100",height:"100",viewBox:"0 0 100 100",fill:"none"},t),{},{children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_217_1165)",children:[(0,a.jsx)("path",{d:"M30.5799 42.022L50.0029 22.6009L69.4318 42.0298L80.7332 30.7303L50.0029 0L19.2804 30.7205L30.5799 42.02V42.022ZM0 50.0029L11.3014 38.6995L22.6009 50.0029L11.2995 61.2985L0 50.0029ZM30.5799 57.9819L50.0029 77.401L69.4318 57.9721L80.7391 69.2658L50.0029 100.006L19.2804 69.2814L19.2648 69.2638L30.5799 57.98V57.9819ZM77.401 50.0029L88.7005 38.7034L100.006 50.0029L88.7064 61.3024L77.401 50.0029Z",fill:t.grey?t.grey:"#F3BA2F"}),(0,a.jsx)("path",{d:"M61.4608 50.0031L50.0031 38.5278L41.5261 47.001L40.5494 47.9776L38.5435 49.9836L38.5278 49.9992L38.5435 50.0148L50.0031 61.4725L61.4686 50.007H61.4589",fill:t.grey?t.grey:"#F3BA2F"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_217_1165",children:(0,a.jsx)("rect",{width:"100",height:"100",fill:"white"})})})]})):[o.HL.SOLANA,o.HL.SOLANA_DEVNET].includes(n)?(0,a.jsxs)("svg",(0,r.Z)((0,r.Z)({width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_229_1297)",children:[(0,a.jsx)("path",{d:"M16.2479 70.8126C16.8606 70.1978 17.6925 69.8516 18.5605 69.8501H98.3625C98.6861 69.8496 99.0025 69.9453 99.2717 70.1249C99.5408 70.3044 99.7506 70.5599 99.8743 70.8589C99.9981 71.1579 100.03 71.4868 99.9668 71.8041C99.9034 72.1214 99.7471 72.4127 99.5179 72.6411L83.7543 88.4046C83.4505 88.7081 83.0899 88.9488 82.6931 89.113C82.2963 89.2771 81.8711 89.3614 81.4416 89.3612H1.63964C1.31834 89.3592 1.00473 89.2626 0.73798 89.0835C0.471226 88.9044 0.263139 88.6507 0.139692 88.354C0.0162451 88.0574 -0.0170923 87.7309 0.0438411 87.4154C0.104774 87.1 0.257279 86.8094 0.482319 86.5801L16.2479 70.8126Z",fill:t.grey?t.grey:"url(#paint0_linear_229_1297)"}),(0,a.jsx)("path",{d:"M16.2479 11.9546C16.8672 11.3507 17.6955 11.0088 18.5605 11H98.3625C98.6861 10.9995 99.0025 11.0952 99.2717 11.2748C99.5408 11.4544 99.7506 11.7098 99.8743 12.0088C99.9981 12.3078 100.03 12.6367 99.9668 12.954C99.9034 13.2713 99.7471 13.5626 99.5179 13.791L83.7543 29.5545C83.4505 29.858 83.0899 30.0987 82.6931 30.2629C82.2963 30.427 81.8711 30.5113 81.4416 30.5111H1.63964C1.31834 30.5091 1.00473 30.4125 0.73798 30.2334C0.471226 30.0543 0.263139 29.8006 0.139692 29.5039C0.0162451 29.2073 -0.0170923 28.8808 0.0438411 28.5653C0.104774 28.2499 0.257279 27.9593 0.482319 27.73L16.2479 11.9546Z",fill:t.grey?t.grey:"url(#paint1_linear_229_1297)"}),(0,a.jsx)("path",{d:"M83.7543 41.1968C83.4505 40.8933 83.0899 40.6526 82.6931 40.4885C82.2963 40.3243 81.871 40.24 81.4416 40.2402H1.63958C1.31627 40.2403 1.00023 40.3362 0.731397 40.5158C0.46256 40.6954 0.252983 40.9507 0.129141 41.2493C0.00529881 41.548 -0.0272532 41.8766 0.035597 42.1938C0.0984472 42.5109 0.25388 42.8023 0.482261 43.0312L16.2478 58.7948C16.5515 59.0984 16.9121 59.3391 17.3089 59.5033C17.7058 59.6674 18.131 59.7517 18.5605 59.7513H98.3625C98.686 59.7518 99.0025 59.6562 99.2716 59.4766C99.5407 59.297 99.7505 59.0415 99.8743 58.7425C99.998 58.4436 100.03 58.1146 99.9668 57.7973C99.9033 57.48 99.7471 57.1887 99.5178 56.9604L83.7543 41.1968Z",fill:t.grey?t.grey:"url(#paint2_linear_229_1297)"})]}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"paint0_linear_229_1297",x1:"90.7396",y1:"1.58391",x2:"35.509",y2:"107.369",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#00FFA3"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,a.jsxs)("linearGradient",{id:"paint1_linear_229_1297",x1:"66.5913",y1:"-11.0245",x2:"11.3627",y2:"94.7621",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#00FFA3"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,a.jsxs)("linearGradient",{id:"paint2_linear_229_1297",x1:"78.5876",y1:"-4.76144",x2:"23.359",y2:"101.025",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#00FFA3"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,a.jsx)("clipPath",{id:"clip0_229_1297",children:(0,a.jsx)("rect",{width:"100",height:"78.3691",fill:"white",transform:"translate(0 11)"})})]})]})):[o.HL.SHARDEUM20].includes(n)?(0,a.jsxs)("svg",(0,r.Z)((0,r.Z)({width:"200",height:"200",viewBox:"0 0 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:[(0,a.jsx)("path",{d:"M43.59 82.5344L7.97437 144.211L28.8329 144.282C47.4921 144.33 49.7151 144.306 49.9516 143.975C50.1171 143.762 61.445 124.18 75.1379 100.46C88.8307 76.7167 100.111 57.3008 100.182 57.3008C100.253 57.3008 111.51 76.7167 125.203 100.437C138.896 124.157 150.224 143.738 150.389 143.951C150.65 144.306 152.4 144.33 171.532 144.282L192.367 144.211L156.846 82.6526C137.288 48.8107 121.254 21.0467 121.183 20.9994C121.135 20.9521 116.406 28.9691 110.706 38.8545C104.983 48.7398 100.253 56.8278 100.182 56.8278C100.111 56.8278 95.4525 48.8817 89.824 39.1383C84.1955 29.4185 79.513 21.3305 79.3947 21.1649C79.2765 20.9521 67.2627 41.5268 43.59 82.5344Z",fill:t.grey?t.grey:"black"}),(0,a.jsx)("path",{d:"M95.453 93.2239C84.598 95.5179 76.7938 105.805 77.5742 116.802C77.929 121.768 79.7736 126.262 83.1318 130.329C85.4258 133.096 90.2738 136.1 94.3888 137.282C96.0206 137.755 96.8246 137.826 100.183 137.826C104.771 137.826 106.379 137.471 110.234 135.58C122.035 129.833 126.386 115.17 119.67 103.819C118.085 101.17 114.443 97.4808 111.889 95.9909C106.852 93.0584 100.987 92.0651 95.453 93.2239Z",fill:t.grey?t.grey:"black"}),(0,a.jsx)("path",{d:"M49.6686 144.614C49.5504 144.779 44.8678 152.891 39.2393 162.658L28.9993 180.395L64.5912 180.466C84.1727 180.489 116.194 180.489 135.775 180.466L171.367 180.395L160.985 162.421L150.627 144.448L100.23 144.377C60.429 144.33 49.8105 144.401 49.6686 144.614Z",fill:t.grey?t.grey:"black"})]})):(0,a.jsxs)("svg",(0,r.Z)((0,r.Z)({width:"100",height:"100",viewBox:"0 0 100 100",fill:"none"},t),{},{children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_226_1177)",children:[(0,a.jsx)("path",{d:"M49.6859 0L49.0156 2.27815V68.3847L49.6859 69.0537L80.3718 50.9154L49.6859 0Z",fill:t.grey?t.grey:"#343434"}),(0,a.jsx)("path",{d:"M49.6859 0L19 50.9154L49.6859 69.054V36.9679V0Z",fill:t.grey?t.grey:"#8C8C8C"}),(0,a.jsx)("path",{d:"M49.6853 74.8636L49.3076 75.3241V98.8727L49.6853 99.9758L80.3897 56.7344L49.6853 74.8636Z",fill:t.grey?t.grey:"#3C3C3B"}),(0,a.jsx)("path",{d:"M49.6859 99.976V74.8636L19 56.7344L49.6859 99.976Z",fill:t.grey?t.grey:"#8C8C8C"}),(0,a.jsx)("path",{d:"M49.6855 69.0539L80.371 50.9158L49.6855 36.9683V69.0539Z",fill:t.grey?t.grey:"#141414"}),(0,a.jsx)("path",{d:"M19 50.9158L49.6854 69.0542V36.9683L19 50.9158Z",fill:t.grey?t.grey:"#393939"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_226_1177",children:(0,a.jsx)("rect",{width:"100",height:"100",fill:"white"})})})]}))}},37226:function(e,n,t){"use strict";t.d(n,{BV:function(){return d},HL:function(){return s},My:function(){return l},T_:function(){return u}});var r,i,o,a,c=t(4942),s={MAINNET:1,GOERLI:5,SHARDEUM20:8081,BINANCE:56,BINANCE_TESTNET:97,SOLANA:9090,SOLANA_DEVNET:9091},l=(r={},(0,c.Z)(r,s.MAINNET,"mainnet"),(0,c.Z)(r,s.GOERLI,"goerli"),(0,c.Z)(r,s.BINANCE,"binance smart chain"),(0,c.Z)(r,s.BINANCE_TESTNET,"binance smart chain - testnet"),(0,c.Z)(r,s.SHARDEUM20,"Shardeum Liberty 2.0"),i={},(0,c.Z)(i,s.MAINNET,"eth"),(0,c.Z)(i,s.GOERLI,"goerli"),(0,c.Z)(i,s.BINANCE,"bsc"),(0,c.Z)(i,s.BINANCE_TESTNET,"bsc-testnet"),(0,c.Z)(i,s.SOLANA,"solana"),(0,c.Z)(i,s.SOLANA_DEVNET,"solana-devnet"),(0,c.Z)(i,s.SHARDEUM20,"Shardeum-Liberty-2.0"),o={},(0,c.Z)(o,s.MAINNET,"https://etherscan.io/"),(0,c.Z)(o,s.GOERLI,"https://goerli.etherscan.io/"),(0,c.Z)(o,s.BINANCE,"https://bscscan.com/"),(0,c.Z)(o,s.BINANCE_TESTNET,"https://testnet.bscscan.com/"),(0,c.Z)(o,s.SOLANA,"https://solscan.io/"),(0,c.Z)(o,s.SOLANA_DEVNET,"https://solscan.io/"),(0,c.Z)(o,s.SHARDEUM20,"https://explorer-liberty20.shardeum.org/"),o),u=(a={},(0,c.Z)(a,s.MAINNET,{explorer:l[s.MAINNET],label:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}}),(0,c.Z)(a,s.GOERLI,{explorer:l[s.GOERLI],label:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"gETH",decimals:18}}),(0,c.Z)(a,s.BINANCE,{explorer:l[s.BINANCE],label:"BNB Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18}}),(0,c.Z)(a,s.BINANCE_TESTNET,{explorer:l[s.BINANCE_TESTNET],label:"BNB Smart Chain Testnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18}}),(0,c.Z)(a,s.SHARDEUM20,{explorer:l[s.SHARDEUM20],label:"Shardeum Liberty 2.0",nativeCurrency:{name:"SHM",symbol:"SHM",decimals:18}}),a),d=(Object.values(s).filter((function(e){return"number"===typeof e})),[1,5,56,4,97,8081])},10126:function(e,n,t){"use strict";t.d(n,{y:function(){return r}});var r="https://qa-api-v2.bandit.network/sdk"},74588:function(e,n,t){"use strict";t.d(n,{GR:function(){return s},Yz:function(){return c},uO:function(){return l}});var r=t(74165),i=t(15861),o=t(10126),a=t(63263),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(o.y,"/collection/").concat(t),{headers:{"X-API-KEY":n}});case 3:return i=e.sent,e.abrupt("return",i.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(o.y,"/collection/roadmap/").concat(t),{headers:{"X-API-KEY":n}});case 3:return i=e.sent,e.abrupt("return",i.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(o.y,"/collection/featured"),{headers:{"X-API-KEY":n}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},2703:function(e,n,t){"use strict";t.d(n,{FP:function(){return s},Jn:function(){return a},cy:function(){return l},uN:function(){return c},zp:function(){return u}});var r=t(68624),i=t(97419),o=t(34029),a=function(e,n){var t=n.height,r=n.quality;return e.includes("imagedelivery.net")?"".concat(e,"/height=").concat(t,",quality=").concat(r):e};function c(e,n,t,a){if(!(0,i.isAddress)(e)||e===r.d)throw Error("Invalid 'address' parameter '".concat(e,"'."));return new o.CH(e,n,function(e,n){return n?function(e,n){return e.getSigner(n).connectUnchecked()}(e,n):e}(t,a))}var s=function(e,n){return e?e.length>n?e.substr(0,n-1)+"..."+e.substr(e.length-(n-1),e.length-1):e:""},l=function(e){return new Intl.NumberFormat("en-GB",{notation:"compact",compactDisplay:"short"}).format(e)},u=function(e,n){if(navigator.clipboard&&navigator.permissions)navigator.clipboard.writeText(e).then(n);else if(document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),null===n||void 0===n||n()}}},46601:function(){}}]);
//# sourceMappingURL=647.a6601bb0.chunk.js.map