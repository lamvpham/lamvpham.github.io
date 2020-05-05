(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.Y?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",M:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",M:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",M:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",M:{points:"0 0 24 0 24 24 0 24"}},{D:"path",M:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.R(a.O().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.Y?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",M:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",M:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",M:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",M:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],M:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.u=a;this.ia("click",this.w,this);this.ha("title",g.OM(a,e,"i"));g.ge(this,g.ZM(b.Ya(),this.element))},P5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.QH);this.L(a,"onStateChange",this.DO)},Q5=function(a){g.EP.call(this,a);
this.o=new P5(this.player);this.o.hide();g.FL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.M(g.lL(a),"ytp-player-minimized",!0))};
g.r(O5,g.V);O5.prototype.w=function(){this.u.ka("onExpandMiniplayer")};g.r(P5,g.V);g.h=P5.prototype;
g.h.show=function(){this.u=new g.rn(this.PH,null,this);this.u.start();if(!this.H){this.C=new g.ZQ(this.player,this);g.H(this,this.C);g.FL(this.player,this.C.element,4);this.C.B=.6;this.S=new g.YP(this.player);g.H(this,this.S);this.A=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.H(this,this.A);this.A.ba(this.element);this.L(this.A.element,"click",this.wA);var a=new g.V({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],M:{"aria-label":"Close"},K:[g.hM()]});g.H(this,a);a.ba(this.A.element);
this.L(a.element,"click",this.Vy);a=new O5(this.player,this);g.H(this,a);a.ba(this.A.element);this.B=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.H(this,this.B);this.B.ba(this.A.element);this.L(this.B.element,"click",this.wA);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,b);b.ba(this.B.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.H(this,a);a.ba(this.B.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,c);c.ba(this.B.element);
this.N=new g.GN(this.player,this,!1);g.H(this,this.N);this.N.ba(b.element);b=new g.CN(this.player,this);g.H(this,b);b.ba(a.element);this.J=new g.GN(this.player,this,!0);g.H(this,this.J);this.J.ba(c.element);this.G=new g.jP(this.player,this);g.H(this,this.G);this.G.ba(this.A.element);this.w=new g.SN(this.player,this);g.H(this,this.w);g.FL(this.player,this.w.element,4);this.F=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.H(this,this.F);g.FL(this.player,this.F.element,4);a=new g.V({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],M:{"aria-label":"Close"},K:[g.hM()]});g.H(this,a);a.ba(this.F.element);this.L(a.element,"click",this.Vy);a=new g.V({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],M:{"aria-label":"Close"},K:[g.wM()]});g.H(this,a);a.ba(this.F.element);this.L(a.element,"click",this.tM);this.L(this.player,"presentingplayerstatechange",this.RH);this.L(this.player,"appresize",this.qs);this.L(this.player,"fullscreentoggled",this.qs);this.qs();this.H=!0}0!=this.player.getPlayerState()&&g.V.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.X.call(this)};
g.h.Vy=function(){this.player.stopVideo();this.player.ka("onCloseMiniplayer")};
g.h.tM=function(){this.player.playVideo()};
g.h.wA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.sD(g.nL(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ka("onExpandMiniplayer")};
g.h.QH=function(){g.M(g.lL(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.PH=function(){g.WN(this.w);this.G.w();this.u&&this.u.start()};
g.h.RH=function(a){g.W(a.state,32)&&this.C.hide()};
g.h.qs=function(){var a=this.w,b=g.kL(this.player).getPlayerSize().width;a.Aa=0;a.C=b;a.B=!1;g.YN(a);this.w.hu()};
g.h.DO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Ya=function(){return this.C};
g.h.dc=function(){return!1};
g.h.ce=function(){return!1};
g.h.Xi=function(){return!1};
g.h.Qt=function(){};
g.h.Ah=function(){};
g.h.hk=function(){};
g.h.il=function(){return null};
g.h.ls=function(){return new g.lh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.vj=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ih(a);if(b){c=g.En(b,"ytp-prev-button")||g.En(b,"ytp-next-button");var m=g.En(b,"ytp-play-button"),n=g.En(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Fh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.En(b,"ytp-miniplayer-button-top-left"),f=g.Fh(b,this.element),b=g.Ih(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.kL(this.player).getPlayerSize().width;e=f+(e||0);l=g.nd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.rs=function(){};
g.h.Of=function(){};g.r(Q5,g.EP);Q5.prototype.create=function(){};
Q5.prototype.yf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.TP.miniplayer=Q5;})(_yt_player);
