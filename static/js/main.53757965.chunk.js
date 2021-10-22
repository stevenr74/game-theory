(this["webpackJsonpgame-theory"]=this["webpackJsonpgame-theory"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(11),o=n.n(i),r=(n(16),n(3)),c=(n(17),n(4)),b=n(5),l=n(0),u=function(e){var t=Object(s.useState)(0),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(s.useState)(3),u=Object(r.a)(o,2),h=u[0],f=u[1],j=Object(s.useState)(1),d=Object(r.a)(j,2),p=d[0],m=d[1],O=Object(s.useState)(!1),x=Object(r.a)(O,2),v=x[0],g=x[1],y=Object(s.useState)(Math.floor(10*Math.random())),w=Object(r.a)(y,1)[0],k=Object(s.useState)(!1),S=Object(r.a)(k,2),N=S[0],I=S[1],B=Object(s.useState)(!1),T=Object(r.a)(B,2),C=T[0],M=T[1];return Object(s.useEffect)((function(){var t=function(t){e.passGameScore(t)};!0===v&&t(!0===N?h:p)}),[v]),Object(l.jsxs)("div",{className:"centipede",children:[Object(l.jsx)("h2",{children:"Centipede Game"}),Object(l.jsxs)("p",{children:["Two players take turns choosing to either take the main pot, or pass to the other player. Payoffs are such that if one player (A) passes the pot to the opponent and the opponent takes the pot, player A recieves the side pot - less than if they had taken the main pot the previous turn. The main pot starts at $",3,", the side pot at $",1,", and both are doubled every time a player passes. For this version there is a maximum of 10 rounds before the pot is taken. Your bot opponent will use varying strategies to demonstrate possible scenarios."]}),Object(l.jsxs)("h3",{children:["Main Pot is $",h]}),Object(l.jsxs)("h3",{children:["Side Pot is $",p]}),Object(l.jsxs)("h3",{children:["Round is ",a]}),v?null:Object(l.jsxs)("div",{className:"options",children:[Object(l.jsx)("button",{onClick:function(){i((function(e){return e+1})),f((function(e){return 2*e})),m((function(e){return 2*e})),9===a||a===w?(I(!1),g(!0),M(!1)):(f((function(e){return 2*e})),m((function(e){return 2*e})),M(!0))},children:"Pass"}),Object(l.jsx)("button",{onClick:function(){g(!0),I(!0)},children:"Take"})]}),Object(l.jsxs)("h3",{children:["Bot Action: ",C?"Pass":null]}),v?Object(l.jsxs)("div",{className:"explanation",children:[N?Object(l.jsxs)("h3",{children:["You took the pot totalling $",h,"!"]}):Object(l.jsxs)("h3",{children:["The bot took the pot totalling $",h,"! You got $",p,"."]}),Object(l.jsxs)("p",{children:["The subgame perfect equilibrium (a refinement of the\xa0",Object(l.jsx)("a",{href:"https://www.investopedia.com/terms/n/nash-equilibrium.asp",children:"nash equilibrium"}),") for Centipede tells us to take the pot on the first turn, which is established by the process of backwards induction. For example, if play reaches the last round between player A and B, and it's B's turn, B should take the pot or they will lose. Since B must take the pot that turn, A should take the pot on the second to last turn in order to win before B. Knowing this, B should take the pot on the third to last turn. This reasoning continues backwards through the game tree until one finds that the best action is the first player taking the main pot on the first round."]}),Object(l.jsx)("p",{children:"In empirical tests few human players follow this rational strategy, and so recieve higher payoffs than the previously mentioned equilibrium. This is interesting because it highlights how the equilibria sometimes fail to predict human play."}),Object(l.jsx)(c.a,{icon:b.c,className:"shuffle",onClick:e.refreshPage})]}):null]})},h=n(8),f=n(7),j=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(s.useState)(0),u=Object(r.a)(o,2),j=u[0],d=u[1],p=Object(s.useState)(0),m=Object(r.a)(p,2),O=m[0],x=m[1],v=Object(s.useState)(!1),g=Object(r.a)(v,2),y=g[0],w=g[1],k=Object(s.useState)({bf1:1,bf2:1,bf3:1}),S=Object(r.a)(k,2),N=S[0],I=S[1],B=Object(s.useState)({bf1:11,bf2:11,bf3:11}),T=Object(r.a)(B,2),C=T[0],M=T[1],A=[{bf1:3,bf2:5,bf3:5},{bf1:5,bf2:3,bf3:5},{bf1:5,bf2:5,bf3:3},{bf1:3,bf2:7,bf3:3},{bf1:7,bf2:3,bf3:3},{bf1:3,bf2:3,bf3:7},{bf1:1,bf2:5,bf3:7},{bf1:5,bf2:7,bf3:1},{bf1:7,bf2:1,bf3:5},{bf1:7,bf2:5,bf3:1},{bf1:1,bf2:7,bf3:5},{bf1:5,bf2:1,bf3:7}],P=function(e){var t=e.target.name,n=e.target.value,s=Object(f.a)(Object(f.a)({},N),{},Object(h.a)({},t,n));I(s),$(s)},$=function(e){var t=e.bf1,n=e.bf2,s=e.bf3,a=parseInt(t)+parseInt(n)+parseInt(s);if(x(a),isNaN(a))M({bf1:0,bf2:0,bf3:0});else{var i=13-a,o=Object(f.a)(Object(f.a)({},N),{},{bf1:parseInt(t)+i,bf2:parseInt(n)+i,bf3:parseInt(s)+i});M(o)}};function F(){return Math.floor(11*Math.random()+1)}function G(){for(var e=0,t=0,n=0;e+t+n!==13;)e=F(),t=F(),n=F();return{bf1:e,bf2:t,bf3:n}}var q=function(){return Math.floor(10*Math.random())<=5?A[Math.floor(Math.random()*A.length)]:G()},E=function(e){var t=0,n=0;Object.keys(N).forEach((function(s){N[s]>e[s]?t+=1:e[s]>N[s]&&(n+=1)})),i(t>n?"You won!":n>t?"The bot won!":"It's a tie!")};return Object(s.useEffect)((function(){var t;"You won!"===a&&(t=100,e.passGameScore(t))}),[a]),Object(l.jsxs)("div",{className:"centipede",children:[Object(l.jsx)("h2",{children:"Colonel Blotto Game"}),Object(l.jsxs)("p",{children:["Two players distribute finite resources over several battlefields, with each specific battle decided by whoever allocated more resources. In this version, players will record three positive integers that add up to ",13,". The player who has two numbers higher than the opponents wins the round (and gets $100 added to winnings), and if points are tied its a draw."]}),Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),13===O){w(!1);var t=q();d(t),E(t)}else w(!0)},children:[Object(l.jsx)("h3",{children:"Allocate your resources below:"}),Object(l.jsx)("input",{type:"number",id:"bf1",value:N.bf1,name:"bf1",min:"1",max:C.bf1,onInput:P}),Object(l.jsx)("input",{type:"number",id:"bf2",value:N.bf2,name:"bf2",min:"1",max:C.bf2,onInput:P}),Object(l.jsx)("input",{type:"number",id:"bf3",value:N.bf3,name:"bf3",min:"1",max:C.bf3,onInput:P}),a?null:Object(l.jsx)("div",{className:"submitBlottoDiv",children:Object(l.jsx)("button",{className:"submitBlotto",type:"submit",children:"Submit"})}),y?Object(l.jsxs)("p",{children:["Enter three numbers totaling ",13,"."]}):null]}),0!==j?Object(l.jsxs)("div",{className:"input",children:[Object(l.jsx)("h3",{children:"Bot Entered: "}),Object(l.jsx)("input",{type:"number",value:j.bf1,disabled:!0}),Object(l.jsx)("input",{type:"number",value:j.bf2,disabled:!0}),Object(l.jsx)("input",{type:"number",value:j.bf3,disabled:!0})]}):null,a?Object(l.jsxs)("div",{className:"explanation",children:[Object(l.jsx)("h3",{children:a}),Object(l.jsx)("p",{children:"With resources above 12 deterministic strategies are not optimal. For example, if resources were 6, (2, 2, 2) would be optimal as it at worst breaks even against other strategies, and at best beats one. For resources equal to 13, choosing between (3, 5, 5), (3, 3, 7), and (1, 5, 7) with 1/3 probability each is shown to be the optimal probabilistic strategy. Applications for this game in real life include military and political strategy as well as strategic hiring decisions. One example of this is two companies vying over the same candidates, resuling in many reasonable offers or aggressive offers for a subset of candidates."})]}):null,a?Object(l.jsx)(c.a,{icon:b.c,onClick:function(){i(!1),d(0),x(0),w(!1),I({bf1:1,bf2:1,bf3:1}),M({bf1:11,bf2:11,bf3:11})},className:"shuffle"}):null]})},d=function(e){return Object(l.jsx)("div",{className:"score",children:Object(l.jsxs)("h3",{children:["Winnings: $",e.score]})})};var p=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(0),o=Object(r.a)(i,2),h=o[0],f=o[1],p=function(e){f((function(t){return t+e}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"Understanding Game Theory"})}),Object(l.jsx)(d,{score:h}),Object(l.jsx)(c.a,{icon:b.a,className:"shuffle",onClick:function(){0!==n&&a((function(e){return e-1}))}}),Object(l.jsx)(c.a,{icon:b.b,className:"shuffle",onClick:function(){1===n||a((function(e){return e+1}))}}),0===n?Object(l.jsx)(u,{refreshPage:function(){window.location.reload()},passGameScore:p}):null,1===n?Object(l.jsx)(j,{passGameScore:p}):null]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),m()}},[[24,1,2]]]);
//# sourceMappingURL=main.53757965.chunk.js.map