(this["webpackJsonpgame-theory"]=this["webpackJsonpgame-theory"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(11),r=n.n(a),i=(n(16),n(2)),o=(n(17),n(4)),b=n(5),u=n(0),l=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(3),l=Object(i.a)(r,2),h=l[0],j=l[1],f=Object(c.useState)(1),d=Object(i.a)(f,2),O=d[0],m=d[1],p=Object(c.useState)(!1),x=Object(i.a)(p,2),g=x[0],v=x[1],k=Object(c.useState)(Math.floor(10*Math.random())),y=Object(i.a)(k,2),w=y[0],N=y[1],S=Object(c.useState)(!1),C=Object(i.a)(S,2),B=C[0],T=C[1],_=Object(c.useState)(!1),I=Object(i.a)(_,2),M=I[0],$=I[1],A=e.passGameScore;return Object(c.useEffect)((function(){var e=function(e){A(e)};!0===g&&e(!0===B?h:O)}),[g,h,O,B,A]),Object(u.jsxs)("div",{className:"centipede",children:[Object(u.jsx)("h2",{children:"Centipede Game"}),Object(u.jsxs)("p",{children:["Two players take turns choosing to either take the main pot, or pass to the other player. Payoffs are such that if one player (A) passes the pot to the opponent and the opponent takes the pot, player A recieves the side pot - less than if they had taken the main pot the previous turn. The main pot starts at $",3,", the side pot at $",1,", and both are doubled every time a player passes. For this version there is a maximum of 10 rounds before the pot is taken. Your bot opponent will use varying strategies to demonstrate possible scenarios."]}),Object(u.jsxs)("h3",{children:["Main Pot is $",h]}),Object(u.jsxs)("h3",{children:["Side Pot is $",O]}),Object(u.jsxs)("h3",{children:["Round is ",s]}),g?null:Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)("button",{className:"button1",onClick:function(){a((function(e){return e+1})),j((function(e){return 2*e})),m((function(e){return 2*e})),9===s||s===w?(T(!1),v(!0),$(!1)):(j((function(e){return 2*e})),m((function(e){return 2*e})),$(!0))},children:"Pass"}),Object(u.jsx)("button",{className:"button1",onClick:function(){v(!0),T(!0)},children:"Take"})]}),Object(u.jsxs)("h3",{children:["Bot Action: ",M?"Pass":null]}),g?Object(u.jsxs)("div",{className:"explanation",children:[B?Object(u.jsxs)("h3",{children:["You took the pot totalling $",h,"!"]}):Object(u.jsxs)("h3",{children:["The bot took the pot totalling $",h,"! You got $",O,"."]}),Object(u.jsxs)("p",{children:["The subgame perfect equilibrium (a refinement of the\xa0",Object(u.jsx)("a",{href:"https://www.investopedia.com/terms/n/nash-equilibrium.asp",children:"nash equilibrium"}),") for Centipede tells us to take the pot on the first turn, which is established by the process of backwards induction. For example, if play reaches the last round between player A and B, and it's B's turn, B should take the pot or they will lose. Since B must take the pot that turn, A should take the pot on the second to last turn in order to win before B. Knowing this, B should take the pot on the third to last turn. This reasoning continues backwards through the game tree until one finds that the best action is the first player taking the main pot on the first round."]}),Object(u.jsx)("p",{children:"In empirical tests few human players follow this rational strategy, and so recieve higher payoffs than the previously mentioned equilibrium. This is interesting because it highlights how the equilibria sometimes fail to predict human play."}),Object(u.jsx)(o.a,{icon:b.d,className:"shuffle",onClick:function(){a(0),j(3),m(1),v(!1),N(Math.floor(10*Math.random())),T(!1),$(!1)}})]}):null]})},h=n(8),j=n(7),f=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(0),l=Object(i.a)(r,2),f=l[0],d=l[1],O=Object(c.useState)(0),m=Object(i.a)(O,2),p=m[0],x=m[1],g=Object(c.useState)(!1),v=Object(i.a)(g,2),k=v[0],y=v[1],w=e.passGameScore,N=Object(c.useState)({bf1:1,bf2:1,bf3:1}),S=Object(i.a)(N,2),C=S[0],B=S[1],T=Object(c.useState)({bf1:11,bf2:11,bf3:11}),_=Object(i.a)(T,2),I=_[0],M=_[1],$=[{bf1:3,bf2:5,bf3:5},{bf1:5,bf2:3,bf3:5},{bf1:5,bf2:5,bf3:3},{bf1:3,bf2:7,bf3:3},{bf1:7,bf2:3,bf3:3},{bf1:3,bf2:3,bf3:7},{bf1:1,bf2:5,bf3:7},{bf1:5,bf2:7,bf3:1},{bf1:7,bf2:1,bf3:5},{bf1:7,bf2:5,bf3:1},{bf1:1,bf2:7,bf3:5},{bf1:5,bf2:1,bf3:7}],A=function(e){var t=e.target.name,n=e.target.value,c=Object(j.a)(Object(j.a)({},C),{},Object(h.a)({},t,n));B(c),P(c)},P=function(e){var t=e.bf1,n=e.bf2,c=e.bf3,s=parseInt(t)+parseInt(n)+parseInt(c);if(x(s),isNaN(s))M({bf1:0,bf2:0,bf3:0});else{var a=13-s,r=Object(j.a)(Object(j.a)({},C),{},{bf1:parseInt(t)+a,bf2:parseInt(n)+a,bf3:parseInt(c)+a});M(r)}};function F(){return Math.floor(11*Math.random()+1)}function q(){for(var e=0,t=0,n=0;e+t+n!==13;)e=F(),t=F(),n=F();return{bf1:e,bf2:t,bf3:n}}var G=function(){return Math.floor(10*Math.random())<=5?$[Math.floor(Math.random()*$.length)]:q()},E=function(e){var t=0,n=0;Object.keys(C).forEach((function(c){C[c]>e[c]?t+=1:e[c]>C[c]&&(n+=1)})),a(t>n?"You won!":n>t?"The bot won!":"It's a tie!")};return Object(c.useEffect)((function(){"You won!"===s&&w(1e3)}),[s,w]),Object(u.jsxs)("div",{className:"centipede",children:[Object(u.jsx)("h2",{children:"Colonel Blotto Game"}),Object(u.jsxs)("p",{children:["Two players distribute finite resources over several battlefields, with each specific battle decided by whoever allocated more resources. In this version, players will record three positive integers that add up to ",13,". The player who has two numbers higher than the opponents wins the round (and gets $",1e3," added to winnings), and if points are tied its a draw."]}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),13===p){y(!1);var t=G();d(t),E(t)}else y(!0)},children:[Object(u.jsx)("h3",{children:"Allocate your resources below:"}),Object(u.jsx)("input",{type:"number",id:"bf1",value:C.bf1,name:"bf1",min:"1",max:I.bf1,onInput:A}),Object(u.jsx)("input",{type:"number",id:"bf2",value:C.bf2,name:"bf2",min:"1",max:I.bf2,onInput:A}),Object(u.jsx)("input",{type:"number",id:"bf3",value:C.bf3,name:"bf3",min:"1",max:I.bf3,onInput:A}),s?null:Object(u.jsx)("div",{className:"submitBlottoDiv",children:Object(u.jsx)("button",{className:"button1",type:"submit",children:"Submit"})}),k?Object(u.jsxs)("p",{children:["Enter three numbers totaling ",13,"."]}):null]}),0!==f?Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("h3",{children:"Bot Entered: "}),Object(u.jsx)("input",{type:"number",value:f.bf1,disabled:!0}),Object(u.jsx)("input",{type:"number",value:f.bf2,disabled:!0}),Object(u.jsx)("input",{type:"number",value:f.bf3,disabled:!0})]}):null,s?Object(u.jsxs)("div",{className:"explanation",children:[Object(u.jsx)("h3",{children:s}),Object(u.jsx)("p",{children:"With resources above 12 deterministic strategies are not optimal. For example, if resources were 6, (2, 2, 2) would be optimal as it at worst breaks even against other strategies, and at best beats one. For resources equal to 13, choosing between (3, 5, 5), (3, 3, 7), and (1, 5, 7) with 1/3 probability each is shown to be the optimal probabilistic strategy. Applications for this game in real life include military and political strategy as well as strategic hiring decisions. One example of this is two companies vying over the same candidates, resuling in many reasonable offers or aggressive offers for a subset of candidates."})]}):null,s?Object(u.jsx)(o.a,{icon:b.d,onClick:function(){a(!1),d(0),x(0),y(!1),B({bf1:1,bf2:1,bf3:1}),M({bf1:11,bf2:11,bf3:11})},className:"shuffle"}):null]})},d=function(e){return Object(u.jsx)("div",{className:"score",children:Object(u.jsxs)("h3",{children:["Winnings: $",e.score]})})},O=n.p+"static/media/king.e4a4cb7b.png",m=n.p+"static/media/queen.726fbd79.png",p=n.p+"static/media/jack.44ec3312.png",x=n.p+"static/media/deck.820c2d2f.jpg",g=function(e){var t=10,n=50,s={1:O,2:m,3:p},a="Check",r="Bet",l="Fold",h="Call",j="None",f="All-in",d="Bot",g="You",v=Object(c.useState)(!1),k=Object(i.a)(v,2),y=k[0],w=k[1],N=Object(c.useState)(n),S=Object(i.a)(N,2),C=S[0],B=S[1],T=Object(c.useState)(n),_=Object(i.a)(T,2),I=_[0],M=_[1],$=Object(c.useState)(!1),A=Object(i.a)($,2),P=A[0],F=A[1],q=Object(c.useState)(0),G=Object(i.a)(q,2),E=G[0],R=G[1],Y=Object(c.useState)(null),D=Object(i.a)(Y,2),J=D[0],L=D[1],K=Object(c.useState)(0),W=Object(i.a)(K,2),Q=W[0],z=W[1],U=Object(c.useState)(j),H=Object(i.a)(U,2),V=H[0],X=H[1],Z=Object(c.useState)(!1),ee=Object(i.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(c.useRef)(0),se=Object(c.useRef)(0),ae=e.passGameScore,re=Object(c.useRef)(0),ie=Object(c.useRef)(0),oe=Object(c.useRef)(n),be=Object(c.useRef)(n);function ue(e,t){return Math.floor(Math.random()*(t-e+1)+e)}Object(c.useEffect)((function(){var e;(oe.current<=0||be.current<=0)&&!1===te&&(be.current<=0?X(f):X(h),me(),be.current<=0?(ne(g),e=oe.current,ae(e)):oe.current<=0&&ne(d))}),[C,I,ae,d,g,J,te]);var le=function(){ie.current=20,oe.current-=t,be.current-=t,R(ie.current),B(oe.current),M(be.current)},he=function(){var e=ue(1,3);3===ce.current?0===re.current?e>2?de():je():Oe():2===ce.current?0===re.current?je():e>2?fe():Oe():0===re.current?de():fe()},je=function(){X(a),me()},fe=function(){ie.current+=t,be.current-=t,re.current=0,R(ie.current),M(be.current),X(h),me()},de=function(){ie.current+=t,be.current-=t,X(r),re.current=0,R(ie.current),M(be.current),z(t)},Oe=function(){oe.current+=ie.current,L(g),X(l),B(oe.current)},me=function(){ce.current<se.current?(be.current+=ie.current,L(d),M(be.current)):(oe.current+=ie.current,L(g),B(oe.current))};return Object(u.jsxs)("div",{className:"centipede",children:[Object(u.jsx)("h2",{children:"Simplified Poker"}),Object(u.jsxs)("p",{children:["Also known as Kuhn Poker, this simplified version is an zero-sum imperfect-information game based on standard poker. Two players are dealt a card from a three card deck containing a King, Queen, and Jack, and put in the same ante of $",t,". Players can bet like in standard poker, with the player with the highest card winning if a showdown occurs."]}),!1===te?Object(u.jsxs)("div",{className:"pokerWin",children:[Object(u.jsxs)("div",{className:"stacks",children:[Object(u.jsxs)("h3",{children:["Player Stack: $",C]}),Object(u.jsxs)("h3",{children:["Bot Stack: $",I]})]}),!1!==y?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"cardLabels",children:[Object(u.jsx)("h3",{className:"cardLabelPlayer",children:"Your Card"}),Object(u.jsx)("h3",{className:"cardLabelBot",children:"Bot's Card"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:y,alt:"card",className:"cards"}),null!==J?Object(u.jsx)("img",{src:P,alt:"card",className:"cards"}):Object(u.jsx)("img",{src:x,alt:"card",className:"cards"})]}),null===J?Object(u.jsx)("div",{className:"submitBlottoDiv",children:0===Q?Object(u.jsxs)("div",{className:"noBet",children:[Object(u.jsx)("button",{className:"button1",onClick:function(){re.current=0,he()},children:"Check"}),Object(u.jsxs)("button",{className:"button1",onClick:function(){oe.current-=t,ie.current+=t,re.current=t,R(ie.current),z(0),B(oe.current),he()},children:["Bet ",t]})]}):Object(u.jsxs)("div",{className:"bet",children:[Object(u.jsx)("button",{className:"button1",onClick:function(){oe.current-=t,ie.current+=t,R(ie.current),z(0),B(oe.current),me()},children:"Call"}),Object(u.jsx)("button",{className:"button1",onClick:function(){be.current+=ie.current,L(d),M(be.current)},children:"Fold"})]})}):null,Object(u.jsxs)("h3",{children:["Bot Action: ",V]}),Object(u.jsxs)("h3",{children:["Pot: $",E]}),J?Object(u.jsxs)("h3",{children:[J," won $",E,"!"]}):null]}):null,0===E||J?Object(u.jsx)("div",{className:"pokerDeal",children:Object(u.jsx)("button",{className:"button1",onClick:function e(){L(null),z(0),X(j),ie.current=0,re.current=0;var t=ue(1,3),n=ue(1,3);if(t!==n)return w(s[t]),F(s[n]),se.current=t,ce.current=n,void le();e()},children:"Deal"})}):null]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:y,alt:"card",className:"cards"}),Object(u.jsx)("img",{src:P,alt:"card",className:"cards"})]}),Object(u.jsxs)("h3",{children:[J," won the game!"]}),Object(u.jsx)("p",{children:"The game has a mixed-strategy nash equilibrium with an infinite number of strategies for the first player. These strategies are based around the probability of betting with a jack/king, to bluff or get value respectively. The second player (the bot in this case) has a single equilibrium strategy - always betting with a King, checking/calling with a Queen, and folding (if there is a bet) with a Jack. All equilibrium strategies mix in randomness (eg betting with a Jack 1/3 the time) to not be predictable for the other player."}),Object(u.jsx)(o.a,{icon:b.d,onClick:function(){be.current=n,oe.current=n,re.current=0,ie.current=0,ce.current=0,se.current=0,w(!1),B(n),M(n),F(!1),R(0),L(null),z(0),X(j),ne(!1)},className:"shuffle"})]})]})};var v=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(i.a)(a,2),h=r[0],j=r[1],O=Object(c.useCallback)((function(e){j((function(t){return t+e}))}),[]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{children:"Understanding Game Theory"})}),Object(u.jsx)(d,{score:h}),Object(u.jsxs)("div",{className:"icon_bar",children:[Object(u.jsx)(o.a,{icon:b.a,className:"shuffle",onClick:function(){0!==n&&s((function(e){return e-1}))}}),Object(u.jsx)(o.a,{icon:b.c,className:0===n?"shuffle_page_icon_current":"shuffle_page_icon"}),Object(u.jsx)(o.a,{icon:b.c,className:1===n?"shuffle_page_icon_current":"shuffle_page_icon"}),Object(u.jsx)(o.a,{icon:b.c,className:2===n?"shuffle_page_icon_current":"shuffle_page_icon"}),Object(u.jsx)(o.a,{icon:b.b,className:"shuffle",onClick:function(){2===n||s((function(e){return e+1}))}})]}),0===n?Object(u.jsx)(l,{passGameScore:O}):null,1===n?Object(u.jsx)(f,{passGameScore:O}):null,2===n?Object(u.jsx)(g,{passGameScore:O}):null]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),k()}},[[24,1,2]]]);
//# sourceMappingURL=main.849ed1b7.chunk.js.map