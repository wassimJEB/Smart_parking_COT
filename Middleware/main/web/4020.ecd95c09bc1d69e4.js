"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4020],{4020:(p,l,t)=>{t.r(l),t.d(l,{NfcReaderPageModule:()=>R});var i=t(6019),f=t(9010),a=t(2651),d=t(1979),u=t(1278),e=t(865);const{NFC:s}=u.Vn,g=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}NfcReader(){if(console.log("run nfc"),u.dV.isPluginAvailable("NFC")){const o=s.getStatus();console.log("NFC is enabled",o),"enabled"!==o?s.showSettings():s.getTags().then(r=>{console.log(r),this.info=r})}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nfc-reader"]],decls:9,vars:1,consts:[["expand","block","share","round","color","success",3,"click"],["color","danger","slot","end"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3,"nfcReader"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(4,"ion-button",0),e.NdJ("click",function(){return r.NfcReader()}),e._uU(5,"NFC"),e.qZA(),e.TgZ(6,"ion-badge",1),e._uU(7),e.qZA(),e._UZ(8,"ion-content")),2&o&&(e.xp6(7),e.Oqu(r.info))},directives:[a.Gu,a.sr,a.wd,a.YG,a.yp,a.W2],styles:[""]}),n})()}];let N=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(g)],d.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[i.ez,f.u5,a.Pc,N]]}),n})()}}]);