"use strict";(self.webpackChunkHeroesApp=self.webpackChunkHeroesApp||[]).push([[428],{5428:(A,c,o)=>{o.r(c),o.d(c,{AuthModule:()=>C});var l=o(9808),s=o(1083),n=o(5e3),u=o(6518),p=o(2638),m=o(5899),a=o(9224),g=o(7423);function d(t,r){1&t&&(n.TgZ(0,"div"),n._UZ(1,"mat-progress-bar",5),n.qZA())}const h=[{path:"",children:[{path:"login",component:(()=>{class t{constructor(e,i){this.router=e,this.httpSrv=i,this.pBar=!1}ngOnInit(){}login(){this.pBar=!0,this.httpSrv.login().subscribe(e=>{console.log(e),this.router.navigate(["/heroes"])})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.F0),n.Y36(u.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:10,vars:1,consts:[["fullscreen",""],[4,"ngIf"],[1,"container"],[1,"mat-elevation-z10"],["mat-raised-button","","color","primary",1,"mat-elevation-z10",3,"click"],["mode","indeterminate"]],template:function(e,i){1&e&&(n.TgZ(0,"mat-sidenav-container",0),n.YNc(1,d,2,0,"div",1),n.TgZ(2,"div",2)(3,"mat-card",3)(4,"mat-card-title"),n._uU(5,"Heroes App"),n.qZA(),n._UZ(6,"hr"),n.TgZ(7,"mat-card-content")(8,"button",4),n.NdJ("click",function(){return i.login()}),n._uU(9," Login "),n.qZA()()()()()),2&e&&(n.xp6(1),n.Q6J("ngIf",i.pBar))},directives:[p.TM,l.O5,m.pW,a.a8,a.n5,a.dn,g.lW],styles:[".container[_ngcontent-%COMP%]{height:90vh;display:flex;justify-content:center;align-items:center}mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:2rem}"]}),t})()},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-register"]],decls:2,vars:0,template:function(e,i){1&e&&(n.TgZ(0,"p"),n._uU(1,"register works!"),n.qZA())},encapsulation:2}),t})()},{path:"**",redirectTo:"login"}]}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})();var v=o(898);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.ez,f,v.q]]}),t})()}}]);