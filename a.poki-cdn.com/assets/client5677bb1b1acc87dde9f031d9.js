"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5677],{65677:(e,i,t)=>{t.r(i),t.d(i,{checkAutoRedirectEpic:()=>P,checkPrivacyPolicyEpic:()=>$,googleAnalyticsPrivacyEpic:()=>R,hideNotificationsOnNavigateEpic:()=>F,refreshCacheEpic$:()=>K,sendDeviceCapabilitiesEpic:()=>T,setViewportOrientationEpic:()=>G,showUserFeedbackEpic:()=>U,stateSyncEpic:()=>I});t(30882);var n=t(29079),o=t(61701),a=t(65693),r=t(81160),c=t(44240),l=t(56978),p=t(38975),u=t(76981),s=t(63720),d=t(62467),g=t(16126),v=t(23834),f=t(59099),h=t(8767),y=t(28452),w=t(72641),m=t(88800),_=t(23260),E=t(7696),A=t(67662),N=t(28685),b=t(98708),k=t(90385),C=t(29194),D=t(15049),O=t(55509),L=t(46493),M=t(89489),S=t(11865);t(95901);function G(e){var i;if("function"!=typeof(null===(i=window)||void 0===i?void 0:i.matchMedia))return o.w;const t=window.matchMedia("(orientation: portrait)"),p=(0,a.R)(window,"orientationchange").pipe((0,r.T)((()=>t.matches))),u=e.pipe((0,n.g)(w.Xy.type));return(0,c.h)(u,p).pipe((0,l.B)(100),(0,r.T)((()=>(0,w.nx)({orientation:t.matches?"portrait":"landscape"}))))}function $(e,i){return o.w}function P(e,i){var t;if(null===(t=window)||void 0===t||null===(t=t.location)||void 0===t||null===(t=t.hash)||void 0===t||!t.includes("#utm_source=redirect")||(0,C.DF)(i.value)===M.L.APP)return o.w;const a=e.pipe((0,n.g)(w.F8.type),(0,g.p)((()=>(0,A.Wv)(i.value)))),r=e.pipe((0,v.o)((()=>(0,D.GZ)(i.value)?(0,d.of)(o.w):e.pipe((0,n.g)(E.Se.type)))),(0,p.s)(1));return e.pipe((0,n.g)(w.Xy.type),(0,p.s)(1),(0,s.n)((()=>(0,c.h)(a,r))),(0,f.M)((()=>{var e,t;let n,a;const r=window.location.hash.replace("#utm_source=redirect-","")||"";window.location.hash="",5===r.length&&([n,a]=r.split("-"));const c=(0,k.nK)(i.value),l=c.find((e=>{var i;return(null==e||null===(i=e.href)||void 0===i?void 0:i.includes("poki.com/"))&&(null==e?void 0:e.lang)===n})),p=c.find((e=>{var i;return(null==e||null===(i=e.href)||void 0===i?void 0:i.includes("poki.com/"))&&(null==e?void 0:e.lang)===a}));if(!l||!p)return o.w;const u=(0,b.K)(i.value),s=`${u.auto_redirect_title.replace("[language]",p.languageName)}`,d=u.auto_redirect_message.replace("[language]",l.languageName),g=null===(e=u.auto_redirect_button)||void 0===e?void 0:e.replace("[language]",l.languageName);(0,L.F)({category:"page",action:"autoRedirectImpression",data:{from:l.languageName,to:p.languageName}}),null===(t=window)||void 0===t||null===(t=t.store)||void 0===t||t.dispatch((0,m.Gg)({notification:{title:s,titleIcon:{image:"https://a.poki-cdn.com/images/icon-world-v2.svg",width:22,height:22},childComponent:{name:"AutoRedirectNotification",props:{message:d,button:g,href:null==l?void 0:l.href,lang:null==l?void 0:l.lang}},autoExpire:1e4}}))})),(0,h.w)())}function R(e,i){return e.pipe((0,n.g)(w.Xy.type),(0,f.M)((()=>{const e=(0,k.tM)(i.value),t=`https://${(0,C.Gd)(i.value).domain}${e}`;console.info(`%cGoogle Analytics is blocked by Poki, refer to our privacy statement (${t})`,"background:rgb(0, 156, 255);color:#fff")})),(0,h.w)())}function T(e,i){const a=(0,D.hv)(i.value),r=(0,A.Rd)(i.value);return!a||r>.5?o.w:e.pipe((0,n.g)(_.y.type),(0,p.s)(1),(0,u.c)(6e4),(0,f.M)((()=>{t.e(2294).then(t.bind(t,12294)).then((({default:e})=>{e()}))})),(0,h.w)())}function U(e,i){const t="user-satisfaction",a=(0,A.Rd)(i.value),c=(0,m.hk)(i.value,t),l=(0,A.wu)(i.value),s=(0,C.Gd)(i.value),d=a<.05,f=["AU","CA","GB","IE","NZ","US"].includes(l),h=3===s.id;if(!f||!h||c||!d)return o.w;(0,L.F)({category:"pps",action:"trigger"});const y=e.pipe((0,n.g)(w.Xy.type),(0,p.s)(1),(0,u.c)(36e4)),E=e.pipe((0,n.g)(_.y.type),(0,g.p)((()=>"game"!==(0,k.K5)(i.value))),(0,p.s)(1));return y.pipe((0,v.o)((()=>E)),(0,r.T)((()=>(0,m.Gg)({notification:{id:t,title:"Would you recommend Poki to your friends?",childComponent:{name:"UserSatisfaction",props:{notificationID:t}},muteAfterClose:!0}}))))}function F(e,i){return e.pipe((0,n.g)("@router/LOCATION_CHANGE"),(0,r.T)((()=>(0,N.L)(i.value))),(0,y.Z)((e=>e.filter((e=>e.navigateToClose)).map((e=>(0,m.oe)({id:e.id}))))))}function I(e,i){if("undefined"==typeof window)return o.w;const t=[],n=(0,a.R)(document,"visibilitychange").pipe((0,g.p)((()=>"hidden"===document.visibilityState))),r=e.pipe((0,g.p)((e=>O.D[e.type])),(0,f.M)((e=>{const{state:i,property:n}=O.D[e.type],o=`${i}/${n}`;t.includes(o)||t.push(o)})));return(0,c.h)(n.pipe((0,f.M)((()=>{t.forEach((e=>{const[t,n]=e.split("/"),o=i.value[t][n];(0,S.SO)(`state/${e}`,JSON.stringify(o))})),t.length=0}))),r).pipe((0,h.w)())}function K(e){return e.pipe((0,n.g)(w.Xy.type),(0,p.s)(1)).pipe((0,u.c)(864e5),(0,s.n)((()=>e.pipe((0,n.g)(_.y.type),(0,f.M)((()=>{window.location.reload()})),(0,h.w)()))))}}}]);