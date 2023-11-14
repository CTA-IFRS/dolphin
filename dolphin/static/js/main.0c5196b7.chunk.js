(this["webpackJsonpdolphin-cta"]=this["webpackJsonpdolphin-cta"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),o=n.n(i),c=n(10),r=n.n(c),s=(n(98),n(14)),l=n(83),d=n(156),u=n(154),j=n(144),m=n(148),p=n(149),b=n(150),h=n(61),g=n(72),x=n.n(g),f=n(55),O=n.n(f),v=n(73),k=n.n(v),F=n(74),y=n.n(F),w=n(75),S=n.n(w),C=n(60),E=n(157),N=n(145),T=n(105),R=n(146),L=n(147),A=n(139),B=n(143),M=n(141),D=n(142),G=n(140);var I=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=function(){o(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(T.a,{variant:"outlined",fullWidth:!0,onClick:function(){o(!0)},children:"Sobre"}),Object(a.jsxs)(A.a,{open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(a.jsx)(G.a,{id:"alert-dialog-title",children:"Sobre o Dolphin"}),Object(a.jsx)(M.a,{children:Object(a.jsxs)(D.a,{id:"alert-dialog-description",color:"textPrimary",children:[Object(a.jsx)("p",{children:"Esta \xe9 uma ferramenta para facilitar a comunica\xe7\xe3o de pessoas com comprometimento na fala e/ou pessoas surdas."}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:'Para a convers\xe3o de texto para fala, digite o texto na caixa de mensagem e pressione a tecla "enter" ou ative o bot\xe3o "Falar".'}),Object(a.jsxs)("li",{children:["Para convers\xe3o de fala para texto, ative a op\xe7\xe3o do Microfone(",Object(a.jsx)(O.a,{}),")."]})]})]})}),Object(a.jsx)(B.a,{children:Object(a.jsx)(T.a,{onClick:c,autoFocus:!0,children:"Fechar"})})]})]})},U=Object(j.a)((function(e){return{mainGrid:{display:"flex",flexDirection:"column",height:"100%"},contrastGrid:{textAlign:"center",flexGrow:1,padding:e.spacing(3)},aboutGrid:{textAlign:"center",padding:e.spacing(3)},srOnly:{position:"fixed",overflow:!1,width:"1px",height:"1px",left:"-1000px"},mb1:{marginBottom:"1em"},dividerMargin:{marginBottom:"1.5em",marginTop:"1.5em"}}}));function P(e){var t=U(),n=Object(i.useState)("logo-cta.png"),o=Object(s.a)(n,2),c=o[0],r=o[1],l=e.themeUpdater;var d=Object.keys(e).reduce((function(t,n){return"themeUpdater"!==n&&(t[n]=e[n]),t}),{});return Object(a.jsx)(E.a,Object(C.a)(Object(C.a)({},d),{},{children:Object(a.jsxs)("div",{className:t.mainGrid,children:[Object(a.jsx)("div",{className:t.contrastGrid,children:Object(a.jsxs)(N.a,{orientation:"vertical","aria-label":"Ajuste de contraste",children:[Object(a.jsx)(T.a,{onClick:function(){l.setTheme("commom"),r("logo-cta.png"),e.onClose()},children:"Normal"}),Object(a.jsx)(T.a,{onClick:function(){l.setTheme("highContrast"),r("logo-cta-contraste.png"),e.onClose()},children:"Alto contraste"}),Object(a.jsx)(T.a,{onClick:function(){l.setTheme("sepia"),r("logo-cta.png"),e.onClose()},children:"S\xe9pia"})]})}),Object(a.jsxs)("div",{className:t.aboutGrid,children:[Object(a.jsx)("div",{className:t.mb1,children:Object(a.jsx)(I,{})}),Object(a.jsx)(R.a,{className:t.mb1}),Object(a.jsx)(h.a,{children:Object(a.jsx)(L.a,{href:"https://cta.ifrs.edu.br/",color:"textPrimary",children:Object(a.jsx)("img",{src:c,width:160,alt:"Logo do Centro Tecnol\xf3gico de Acessibilidade"})})})]})]})}))}var W=Object(j.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},active:{color:e.palette.talkerActive.main},notActive:{color:e.palette.talkerNotActive.main},titleBar:{flexGrow:1},dolphinLogoName:{textDecoration:"none",color:e.palette.dolphinLogoColor.color}}}));var _=function(e){var t=W(),n=Object(i.useState)(!1),o=Object(s.a)(n,2),c=o[0],r=o[1],l=e.talkerMonitor;function d(){r(!c)}return l.talker.setContinuityEvent((function(){return l.isListenEnabled})),Object(i.useEffect)((function(){l.isListenEnabled?l.talker.isRunning()||l.talker.start():l.talker.isRunning()&&l.talker.stop()})),Object(a.jsxs)(m.a,{position:"fixed",children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:d,"aria-haspopup":"true","aria-expanded":c,children:Object(a.jsx)(x.a,{})}),Object(a.jsx)("a",{href:"/",className:t.dolphinLogoName,children:Object(a.jsx)("img",{src:"sepia"==e.themeUpdater.themeName?"logo-dolphin.png":"logo-dolphin-white.png",width:50,alt:"Logo do Dolphin"})}),Object(a.jsx)(h.a,{variant:"h6",component:"h1",className:t.titleBar,children:Object(a.jsx)("a",{href:"/",className:t.dolphinLogoName,children:"Dolphin"})}),l.talker.hasSupport()&&Object(a.jsx)(b.a,{onClick:function(){l.setTalkerListen(!l.isListenEnabled)},"aria-pressed":l.isListenEnabled,"aria-label":"Convers\xe3o fala para texto",children:l.isListenEnabled?Object(a.jsx)(O.a,{className:t.active}):Object(a.jsx)(k.a,{className:t.notActive})}),Object(a.jsx)(b.a,{onClick:function(){l.setTalkerSpeak(!l.isSpeakEnabled)},"aria-pressed":l.isSpeakEnabled,"aria-label":"Convers\xe3o texto para fala",children:l.isSpeakEnabled?Object(a.jsx)(y.a,{className:t.active}):Object(a.jsx)(S.a,{className:t.notActive})})]}),Object(a.jsx)(P,{open:c,onClose:d,themeUpdater:e.themeUpdater})]})},q=n(80),z=n(153),J=n(152),V=n(151),H=n(155),K=n(76),Q=n.n(K),X=Object(j.a)((function(e){return{pad:{padding:"0em 1em"},root:{"& .Mui-focused":{color:e.palette.text.primary},"& .MuiInputLabel-root":{color:e.palette.text.primary}}}}));function Y(e){var t=X(),n=Object(i.useRef)(null);function o(t){""!==n.current.value&&(e.onAction(n.current.value),n.current.value="")}return Object(a.jsx)("div",{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),o()},children:Object(a.jsxs)(V.a,{container:!0,children:[Object(a.jsx)(V.a,{item:!0,xs:8,className:t.pad,children:Object(a.jsx)(H.a,{id:"input-message",label:"Digite sua mensagem",fullWidth:!0,inputRef:n,className:t.root})}),Object(a.jsx)(V.a,{item:!0,xs:4,className:t.pad,children:Object(a.jsx)(T.a,{fullWidth:!0,variant:"text",size:"large",startIcon:Object(a.jsx)(Q.a,{}),onClick:o,children:"Falar"})})]})})})}var Z=n(77),$=n(78),ee=function(){function e(t,n){Object(Z.a)(this,e),this.setWorkEvent(t),this.setContinuityEvent(n),this._running=!1}return Object($.a)(e,[{key:"setWorkEvent",value:function(e){return this.workEvent=e,this}},{key:"setContinuityEvent",value:function(e){return this.continuityEvent=e,this.continuityEventBck=e,this}},{key:"isRunning",value:function(){return this._running}},{key:"hasSupport",value:function(){return void 0!==(window.webkitSpeechRecognition||window.SpeechRecognition)}},{key:"start",value:function(){this.continuityEvent=this.continuityEventBck;var e=this;e.currentRecogRef=function t(){var n=new(window.webkitSpeechRecognition||window.SpeechRecognition);return n.lang="pt-BR",n.continuous=!0,n.interimResults=!1,n.onresult=function(t){e.workEvent(t.results)},n.onaudioend=function(n){e.continuityEvent()&&(e.currentRecogRef=t())},n.start(),e._running=!0,n}()}},{key:"stop",value:function(){this.continuityEvent=e.stdStopEvent,this.currentRecogRef.stop(),this._running=!1}}],[{key:"speak",value:function(e){var t=new SpeechSynthesisUtterance(e);window.speechSynthesis.speak(t)}},{key:"hear",value:function(e,t){!function n(){var a=new(window.webkitSpeechRecognition||window.SpeechRecognition);a.lang="pt-BR",a.continuous=!0,a.interimResults=!1,a.onresult=function(t){e(t.results)},a.onaudioend=function(e){t()&&n()},a.start()}()}}]),e}();function te(e,t){return{text:e,type:t}}ee.stdStopEvent=function(){return!1};var ne=[te("Bem vindo ao Dolphin!","speak")],ae=Object(j.a)((function(e){return{messagesBox:{position:"fixed",left:0,right:0,top:0,bottom:0,overflow:"auto",backgroundColor:e.palette.background.paper},messagesList:{marginLeft:"1.5em",marginRight:"1.5em",marginTop:"3.5em",marginBottom:"3.5em"},commandBar:{position:"fixed",bottom:"0px",left:"0px",right:"0px",borderTop:"1px solid black",zIndex:1e3,padding:"0.5em 0.5em",backgroundColor:e.palette.background.default},speak:{borderRadius:8,backgroundColor:e.palette.speakMessages.main,margin:"1em 0em"},listen:{borderRadius:8,backgroundColor:e.palette.listenMessages.main,margin:"1em 0em"}}}));function ie(e){var t=ae(),n=Object(i.useState)(ne),o=Object(s.a)(n,2),c=o[0],r=o[1],u=e.talkerMonitor;function j(e){r([].concat(Object(q.a)(c),[e]))}return u.talker.setWorkEvent((function(e){var t=e[e.length-1];j(te(t[t.length-1].transcript,"listen"))})),Object(i.useEffect)((function(){document.getElementById("msg-"+(c.length-1)).scrollIntoView()})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{className:t.messagesBox,children:Object(a.jsx)(J.a,{className:t.messagesList,children:c.map((function(e,n){return Object(a.jsx)(z.a,{className:t[e.type],id:"msg-"+n,children:e.text},n)}))})}),Object(a.jsx)(l.a,{elevation:0,square:!0,className:t.commandBar,children:Object(a.jsx)(Y,{onAction:function(e){j(te(e,"speak")),u.isSpeakEnabled&&ee.speak(e)}})})]})}var oe=n(79);var ce=function(){var e,t=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useState)(new ee),a=Object(s.a)(n,2),o=a[0],c=a[1],r=Object(i.useState)(e),l=Object(s.a)(r,2),d=l[0],u=l[1],j=Object(i.useState)(t),m=Object(s.a)(j,2),p=m[0],b=m[1];return{talker:o,setTalker:c,isListenEnabled:d,setTalkerListen:u,isSpeakEnabled:p,setTalkerSpeak:b}}(!1,!0),n=Object(i.useState)("commom"),o=Object(s.a)(n,2),c=o[0],r={themeName:c,setTheme:o[1]};return Object(a.jsx)(u.a,{theme:(e=c,"commom"===e?Object(oe.a)({palette:{type:"light",text:{primary:"#000000",scondary:"#000000"},speakMessages:{main:"#729be7",contrastText:"#000000"},listenMessages:{main:"#daaa71",contrastText:"#FFFFFF"},talkerActive:{main:"#00FF00"},talkerNotActive:{main:"#FFFFFF"},dolphinLogoColor:{color:"white"}}}):"highContrast"===e?Object(oe.a)({palette:{type:"dark",primary:{main:"#000000",contrastText:"#FFFFFF"},secondary:{main:"#000000",contrastText:"#FFFFFF"},text:{primary:"#FFFFFF",scondary:"#FFFFFF"},speakMessages:{main:"#09214e",contrastText:"#FFFFFF"},listenMessages:{main:"#5c3f19",contrastText:"#FFFFFF"},talkerActive:{main:"#00FF00"},talkerNotActive:{main:"#FFFFFF"},dolphinLogoColor:{color:"white"},contrastThreshold:7,tonalOffset:0}}):"sepia"===e?Object(oe.a)({palette:{type:"light",primary:{main:"#ffebcd",contrastText:"#000000"},secondary:{main:"#ffebcd",contrastText:"#000000"},background:{paper:"#ffebcd",default:"#ffebcd"},text:{primary:"#000000",scondary:"#000000"},speakMessages:{main:"#729be7",contrastText:"#FFFFFF"},listenMessages:{main:"#daaa71",contrastText:"#FFFFFF"},talkerActive:{main:"#00AA00"},talkerNotActive:{main:"#000000"},dolphinLogoColor:{color:"black"},contrastThreshold:7,tonalOffset:0}}):void 0),children:Object(a.jsxs)(l.a,{elevation:0,square:!0,children:[Object(a.jsx)(_,{talkerMonitor:t,themeUpdater:r}),Object(a.jsx)(d.a,{style:{marginTop:"3.5em"},children:Object(a.jsx)(ie,{talkerMonitor:t})})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),re()},98:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.0c5196b7.chunk.js.map