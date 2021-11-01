(this["webpackJsonpgame-theory"]=this["webpackJsonpgame-theory"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(11),a=n.n(s),i=(n(16),n(2)),o=(n(17),n(4)),u=n(5),b=n(0),l=function(e){var t=Object(r.useState)(0),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(3),l=Object(i.a)(a,2),h=l[0],j=l[1],f=Object(r.useState)(1),d=Object(i.a)(f,2),O=d[0],p=d[1],m=Object(r.useState)(!1),x=Object(i.a)(m,2),g=x[0],v=x[1],k=Object(r.useState)(Math.floor(10*Math.random())),y=Object(i.a)(k,2),w=y[0],S=y[1],N=Object(r.useState)(!1),C=Object(i.a)(N,2),B=C[0],T=C[1],I=Object(r.useState)(!1),M=Object(i.a)(I,2),$=M[0],P=M[1],A=e.passGameScore;return Object(r.useEffect)((function(){var e=function(e){A(e)};!0===g&&e(!0===B?h:O)}),[g,h,O,B,A]),Object(b.jsxs)("div",{className:"centipede",children:[Object(b.jsx)("h2",{children:"Centipede Game"}),Object(b.jsxs)("p",{children:["Two players take turns choosing to either take the main pot, or pass to the other player. Payoffs are such that if one player (A) passes the pot to the opponent and the opponent takes the pot, player A recieves the side pot - less than if they had taken the main pot the previous turn. The main pot starts at $",3,", the side pot at $",1,", and both are doubled every time a player passes. For this version there is a maximum of 10 rounds before the pot is taken. Your bot opponent will use varying strategies to demonstrate possible scenarios."]}),Object(b.jsxs)("h3",{children:["Main Pot is $",h]}),Object(b.jsxs)("h3",{children:["Side Pot is $",O]}),Object(b.jsxs)("h3",{children:["Round is ",c]}),g?null:Object(b.jsxs)("div",{className:"options",children:[Object(b.jsx)("button",{onClick:function(){s((function(e){return e+1})),j((function(e){return 2*e})),p((function(e){return 2*e})),9===c||c===w?(T(!1),v(!0),P(!1)):(j((function(e){return 2*e})),p((function(e){return 2*e})),P(!0))},children:"Pass"}),Object(b.jsx)("button",{onClick:function(){v(!0),T(!0)},children:"Take"})]}),Object(b.jsxs)("h3",{children:["Bot Action: ",$?"Pass":null]}),g?Object(b.jsxs)("div",{className:"explanation",children:[B?Object(b.jsxs)("h3",{children:["You took the pot totalling $",h,"!"]}):Object(b.jsxs)("h3",{children:["The bot took the pot totalling $",h,"! You got $",O,"."]}),Object(b.jsxs)("p",{children:["The subgame perfect equilibrium (a refinement of the\xa0",Object(b.jsx)("a",{href:"https://www.investopedia.com/terms/n/nash-equilibrium.asp",children:"nash equilibrium"}),") for Centipede tells us to take the pot on the first turn, which is established by the process of backwards induction. For example, if play reaches the last round between player A and B, and it's B's turn, B should take the pot or they will lose. Since B must take the pot that turn, A should take the pot on the second to last turn in order to win before B. Knowing this, B should take the pot on the third to last turn. This reasoning continues backwards through the game tree until one finds that the best action is the first player taking the main pot on the first round."]}),Object(b.jsx)("p",{children:"In empirical tests few human players follow this rational strategy, and so recieve higher payoffs than the previously mentioned equilibrium. This is interesting because it highlights how the equilibria sometimes fail to predict human play."}),Object(b.jsx)(o.a,{icon:u.c,className:"shuffle",onClick:function(){s(0),j(3),p(1),v(!1),S(Math.floor(10*Math.random())),T(!1),P(!1)}})]}):null]})},h=n(8),j=n(7),f=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(0),l=Object(i.a)(a,2),f=l[0],d=l[1],O=Object(r.useState)(0),p=Object(i.a)(O,2),m=p[0],x=p[1],g=Object(r.useState)(!1),v=Object(i.a)(g,2),k=v[0],y=v[1],w=e.passGameScore,S=Object(r.useState)({bf1:1,bf2:1,bf3:1}),N=Object(i.a)(S,2),C=N[0],B=N[1],T=Object(r.useState)({bf1:11,bf2:11,bf3:11}),I=Object(i.a)(T,2),M=I[0],$=I[1],P=[{bf1:3,bf2:5,bf3:5},{bf1:5,bf2:3,bf3:5},{bf1:5,bf2:5,bf3:3},{bf1:3,bf2:7,bf3:3},{bf1:7,bf2:3,bf3:3},{bf1:3,bf2:3,bf3:7},{bf1:1,bf2:5,bf3:7},{bf1:5,bf2:7,bf3:1},{bf1:7,bf2:1,bf3:5},{bf1:7,bf2:5,bf3:1},{bf1:1,bf2:7,bf3:5},{bf1:5,bf2:1,bf3:7}],A=function(e){var t=e.target.name,n=e.target.value,r=Object(j.a)(Object(j.a)({},C),{},Object(h.a)({},t,n));B(r),F(r)},F=function(e){var t=e.bf1,n=e.bf2,r=e.bf3,c=parseInt(t)+parseInt(n)+parseInt(r);if(x(c),isNaN(c))$({bf1:0,bf2:0,bf3:0});else{var s=13-c,a=Object(j.a)(Object(j.a)({},C),{},{bf1:parseInt(t)+s,bf2:parseInt(n)+s,bf3:parseInt(r)+s});$(a)}};function q(){return Math.floor(11*Math.random()+1)}function G(){for(var e=0,t=0,n=0;e+t+n!==13;)e=q(),t=q(),n=q();return{bf1:e,bf2:t,bf3:n}}var E=function(){return Math.floor(10*Math.random())<=5?P[Math.floor(Math.random()*P.length)]:G()},R=function(e){var t=0,n=0;Object.keys(C).forEach((function(r){C[r]>e[r]?t+=1:e[r]>C[r]&&(n+=1)})),s(t>n?"You won!":n>t?"The bot won!":"It's a tie!")};return Object(r.useEffect)((function(){"You won!"===c&&w(1e3)}),[c,w]),Object(b.jsxs)("div",{className:"centipede",children:[Object(b.jsx)("h2",{children:"Colonel Blotto Game"}),Object(b.jsxs)("p",{children:["Two players distribute finite resources over several battlefields, with each specific battle decided by whoever allocated more resources. In this version, players will record three positive integers that add up to ",13,". The player who has two numbers higher than the opponents wins the round (and gets $",1e3," added to winnings), and if points are tied its a draw."]}),Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),13===m){y(!1);var t=E();d(t),R(t)}else y(!0)},children:[Object(b.jsx)("h3",{children:"Allocate your resources below:"}),Object(b.jsx)("input",{type:"number",id:"bf1",value:C.bf1,name:"bf1",min:"1",max:M.bf1,onInput:A}),Object(b.jsx)("input",{type:"number",id:"bf2",value:C.bf2,name:"bf2",min:"1",max:M.bf2,onInput:A}),Object(b.jsx)("input",{type:"number",id:"bf3",value:C.bf3,name:"bf3",min:"1",max:M.bf3,onInput:A}),c?null:Object(b.jsx)("div",{className:"submitBlottoDiv",children:Object(b.jsx)("button",{className:"submitBlotto",type:"submit",children:"Submit"})}),k?Object(b.jsxs)("p",{children:["Enter three numbers totaling ",13,"."]}):null]}),0!==f?Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("h3",{children:"Bot Entered: "}),Object(b.jsx)("input",{type:"number",value:f.bf1,disabled:!0}),Object(b.jsx)("input",{type:"number",value:f.bf2,disabled:!0}),Object(b.jsx)("input",{type:"number",value:f.bf3,disabled:!0})]}):null,c?Object(b.jsxs)("div",{className:"explanation",children:[Object(b.jsx)("h3",{children:c}),Object(b.jsx)("p",{children:"With resources above 12 deterministic strategies are not optimal. For example, if resources were 6, (2, 2, 2) would be optimal as it at worst breaks even against other strategies, and at best beats one. For resources equal to 13, choosing between (3, 5, 5), (3, 3, 7), and (1, 5, 7) with 1/3 probability each is shown to be the optimal probabilistic strategy. Applications for this game in real life include military and political strategy as well as strategic hiring decisions. One example of this is two companies vying over the same candidates, resuling in many reasonable offers or aggressive offers for a subset of candidates."})]}):null,c?Object(b.jsx)(o.a,{icon:u.c,onClick:function(){s(!1),d(0),x(0),y(!1),B({bf1:1,bf2:1,bf3:1}),$({bf1:11,bf2:11,bf3:11})},className:"shuffle"}):null]})},d=function(e){return Object(b.jsx)("div",{className:"score",children:Object(b.jsxs)("h3",{children:["Winnings: $",e.score]})})},O=n.p+"static/media/king.e4a4cb7b.png",p=n.p+"static/media/queen.726fbd79.png",m=n.p+"static/media/jack.44ec3312.png",x=n.p+"static/media/deck.820c2d2f.jpg",g=function(e){var t={1:O,2:p,3:m},n=10,c="Check",s="Bet",a="Fold",l="Call",h="None",j="Bot",f="You",d=50,g=Object(r.useState)(!1),v=Object(i.a)(g,2),k=v[0],y=v[1],w=Object(r.useState)(d),S=Object(i.a)(w,2),N=S[0],C=S[1],B=Object(r.useState)(d),T=Object(i.a)(B,2),I=T[0],M=T[1],$=Object(r.useState)(!1),P=Object(i.a)($,2),A=P[0],F=P[1],q=Object(r.useState)(0),G=Object(i.a)(q,2),E=G[0],R=G[1],Y=Object(r.useState)(null),D=Object(i.a)(Y,2),J=D[0],L=D[1],K=Object(r.useState)(0),W=Object(i.a)(K,2),Q=W[0],z=W[1],U=Object(r.useState)(h),H=Object(i.a)(U,2),V=H[0],X=H[1],Z=Object(r.useState)(!1),_=Object(i.a)(Z,2),ee=_[0],te=_[1],ne=Object(r.useRef)(0),re=Object(r.useRef)(0),ce=e.passGameScore,se=Object(r.useRef)(0),ae=Object(r.useRef)(0),ie=Object(r.useRef)(d),oe=Object(r.useRef)(d);function ue(e,t){return Math.floor(Math.random()*(t-e+1)+e)}Object(r.useEffect)((function(){var e;(ie.current<=0||oe.current<=0)&&!1===ee&&(ne.current>re.current?(ie.current+=ae.current,L(f),C(ie.current)):(oe.current+=ae.current,L(j),M(oe.current)),oe.current<=0?(te(f),e=ie.current,ce(e)):ie.current<=0&&te(j))}),[N,I,ce,j,f,J,ee]);var be=function(){ae.current=20,ie.current-=n,oe.current-=n,R(ae.current),C(ie.current),M(oe.current)},le=function(){var e=ue(1,3);3===ne.current?0===se.current?e>2?fe():he():de():2===ne.current?0===se.current?he():e>2?je():de():0===se.current?fe():je()},he=function(){X(c),ne.current<re.current?(oe.current+=ae.current,L(j),X(c),M(oe.current)):(ie.current+=ae.current,L(f),X(c),C(ie.current))},je=function(){ae.current+=n,oe.current-=n,se.current=0,R(ae.current),M(oe.current),X(l),Oe()},fe=function(){ae.current+=n,oe.current-=n,X(s),se.current=0,R(ae.current),M(oe.current),z(n)},de=function(){ie.current+=ae.current,L(f),X(a),C(ie.current)},Oe=function(){ne.current<re.current?(oe.current+=ae.current,L(j),M(oe.current)):(ie.current+=ae.current,L(f),C(ie.current))};return Object(b.jsxs)("div",{className:"centipede",children:[Object(b.jsx)("h2",{children:"Simplified Poker"}),Object(b.jsxs)("p",{children:["Also known as Kuhn Poker, this simplified version is an zero-sum imperfect-information game based on standard poker. Two players are dealt a card from a three card deck containing a King, Queen, and Jack, and put in the same ante of $",n,". Players then place bets like in poker (calling/raising/folding), with the player with the highest card winning if a showdown occurs."]}),!1===ee?Object(b.jsxs)("div",{className:"pokerWin",children:[Object(b.jsxs)("div",{className:"stacks",children:[Object(b.jsxs)("h3",{children:["Player Stack: $",N]}),Object(b.jsxs)("h3",{children:["Bot Stack: $",I]})]}),!1!==k?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"cardLabels",children:[Object(b.jsx)("h3",{className:"cardLabelPlayer",children:"Your Card"}),Object(b.jsx)("h3",{className:"cardLabelBot",children:"Bot's Card"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:k,alt:"card",className:"cards"}),null!==J?Object(b.jsx)("img",{src:A,alt:"card",className:"cards"}):Object(b.jsx)("img",{src:x,alt:"card",className:"cards"})]}),null===J?Object(b.jsx)("div",{className:"submitBlottoDiv",children:0===Q?Object(b.jsxs)("div",{className:"noBet",children:[Object(b.jsx)("button",{onClick:function(){se.current=0,le()},children:"Check"}),Object(b.jsxs)("button",{onClick:function(){ie.current-=n,ae.current+=n,se.current=n,R(ae.current),z(0),C(ie.current),le()},children:["Bet ",n]})]}):Object(b.jsxs)("div",{className:"bet",children:[Object(b.jsx)("button",{onClick:function(){ie.current-=n,ae.current+=n,R(ae.current),z(0),C(ie.current),Oe()},children:"Call"}),Object(b.jsx)("button",{onClick:function(){oe.current+=ae.current,L(j),M(oe.current)},children:"Fold"})]})}):null,Object(b.jsxs)("h3",{children:["Bot Action: ",V]}),Object(b.jsxs)("h3",{children:["Pot: $",E]}),J?Object(b.jsxs)("h3",{children:[J," won $",E,"!"]}):null]}):null,0===E||J?Object(b.jsx)("div",{className:"pokerDeal",children:Object(b.jsx)("button",{className:"submitBlotto",onClick:function e(){L(null),z(0),X(h),ae.current=0,se.current=0;var n=ue(1,3),r=ue(1,3);if(n!==r)return y(t[n]),F(t[r]),re.current=n,ne.current=r,void be();e()},children:"Deal"})}):null]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:k,alt:"card",className:"cards"}),Object(b.jsx)("img",{src:A,alt:"card",className:"cards"})]}),Object(b.jsxs)("h3",{children:[J," won the game!"]}),Object(b.jsx)("p",{children:"The game has a mixed-strategy nash equilibrium with an infinite number of strategies for the first player. These strategies are based around the probability of betting with a jack/king, to bluff or get value respectively. The second player (the bot in this case) has a single equilibrium strategy - always betting with a King, checking/calling with a Queen, and folding (if there is a bet) with a Jack. All equilibrium strategies mix in randomness (eg betting with a Jack 1/3 the time) to not be predictable for the other player."}),Object(b.jsx)(o.a,{icon:u.c,onClick:function(){oe.current=d,ie.current=d,se.current=0,ae.current=0,ne.current=0,re.current=0,y(!1),C(d),M(d),F(!1),R(0),L(null),z(0),X(h),te(!1)},className:"shuffle"})]})]})};var v=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),a=Object(i.a)(s,2),h=a[0],j=a[1],O=Object(r.useCallback)((function(e){j((function(t){return t+e}))}),[]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("h1",{children:"Understanding Game Theory"})}),Object(b.jsx)(d,{score:h}),Object(b.jsx)(o.a,{icon:u.a,className:"shuffle",onClick:function(){0!==n&&c((function(e){return e-1}))}}),Object(b.jsx)(o.a,{icon:u.b,className:"shuffle",onClick:function(){2===n||c((function(e){return e+1}))}}),0===n?Object(b.jsx)(l,{passGameScore:O}):null,1===n?Object(b.jsx)(f,{passGameScore:O}):null,2===n?Object(b.jsx)(g,{passGameScore:O}):null]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),k()}},[[24,1,2]]]);
//# sourceMappingURL=main.6ed2edaa.chunk.js.map