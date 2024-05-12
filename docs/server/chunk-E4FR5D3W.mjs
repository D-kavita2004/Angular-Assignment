import './polyfills.server.mjs';
import{B as N,C as c,D as x,E as P,F as k,G as T,J as G,P as j,a as m,b as y,c as E,d as F,e as f,f as v,g as w,h as I,i as l,j as d,k as a,l as s,m as _,n as S,o as h,p as C,q as o,r as u,s as p,z as O}from"./chunk-7BRCSVDH.mjs";import{a as A,b as M}from"./chunk-VVCT4QZE.mjs";var g=(()=>{let e=class e{constructor(t){this.http=t}getPopulation(t){let i=new c;return this.http.post("https://countriesnow.space/api/v0.1/countries/population/cities",{city:t},{headers:i})}getFlag(t){let i=new c;return this.http.post("https://countriesnow.space/api/v0.1/countries/flag/images",{country:t},{headers:i})}getCurrency(t){let i=new c;return this.http.post("https://countriesnow.space/api/v0.1/countries/currency",{country:t},{headers:i})}getLocation(t){let i=new c;return this.http.post("https://countriesnow.space/api/v0.1/countries/positions",{country:t},{headers:i})}getCapital(t){let i=new c;return this.http.post("https://countriesnow.space/api/v0.1/countries/capital",{country:t},{headers:i})}};e.\u0275fac=function(i){return new(i||e)(F(x))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var R=(()=>{let e=class e{constructor(t){this.apiService=t,this.country="",this.city=""}onSearch(t,i){this.country=t.value,this.city=i.value,this.fetchCountryDetails(this.country,this.city)}fetchCountryDetails(t,i){this.apiService.getPopulation(i).subscribe(n=>{this.population=n.data.populationCounts[0].value},n=>{n.status===404?alert("CITY NOT FOUND"):console.error("An error occurred:",n.message)}),this.apiService.getFlag(t).subscribe(n=>{this.flag=n.data.flag},n=>{n.status===404?alert("COUNTRY NOT FOUND"):console.error("An error occurred:",n.message)}),this.apiService.getCurrency(t).subscribe(n=>{this.currency=n.data.currency}),this.apiService.getLocation(t).subscribe(n=>{this.long=n.data.long,this.lat=n.data.lat}),this.apiService.getCapital(t).subscribe(n=>{this.capital=n.data.capital})}};e.\u0275fac=function(i){return new(i||e)(d(g))},e.\u0275cmp=f({type:e,selectors:[["app-right"]],standalone:!0,features:[p],decls:40,vars:5,consts:[["searchCountry",""],["searchCity",""],[1,"main"],["placeholder","Enter Country........","id","country"],["placeholder","Enter City........","id","city"],["type","button","id","btn",1,"btn","btn-search",3,"click"],["type","reset","id","btn1",1,"btn","btn-search"]],template:function(i,n){if(i&1){let D=S();a(0,"div",2)(1,"form"),_(2,"input",3,0)(4,"br")(5,"input",4,1)(7,"br"),a(8,"button",5),h("click",function(){w(D);let z=C(3),Y=C(6);return I(n.onSearch(z,Y))}),o(9,"Submit"),s(),a(10,"button",6),o(11,"Reset"),s()(),_(12,"br"),a(13,"div")(14,"p")(15,"u"),o(16," POPULATION:"),s(),o(17),s(),a(18,"p")(19,"u"),o(20," CURRENCY:"),s(),o(21),s(),a(22,"p")(23,"u"),o(24," CAPITAL:"),s(),o(25),s(),a(26,"p")(27,"u"),o(28," LOCATION"),s()(),a(29,"ul")(30,"li")(31,"p")(32,"u"),o(33," LATITUDE:"),s(),o(34),s()(),a(35,"li")(36,"p")(37,"u"),o(38," LONGITUDE:"),s(),o(39),s()()()()()}i&2&&(l(17),u(" ",n.population,""),l(4),u(" ",n.currency,""),l(4),u(" ",n.capital,""),l(9),u(" ",n.lat,""),l(5),u(" ",n.long,""))},styles:[".main[_ngcontent-%COMP%]{display:inline-block;position:fixed;left:490px;top:90px;font-family:Franklin Gothic Medium,sans-serif;font-size:20px;border:1px solid #9ea4ad;border-radius:16px;padding:50px 50px 30px;background:radial-gradient(#ebacf2,#90c6c9);box-shadow:0 5px 20px #a3a4a7}#country[_ngcontent-%COMP%], #city[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:25px}#btn[_ngcontent-%COMP%]{margin-left:20px}#btn1[_ngcontent-%COMP%]{margin-left:50px;margin-right:30px}"]});let r=e;return r})();var Z={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pe=M(A({},Z),{"[class.ng-submitted]":"isSubmitted"});var K=new E("CallSetDisabledState",{providedIn:"root",factory:()=>B}),B="always";var X=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({});let r=e;return r})();var H=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:K,useValue:t.callSetDisabledState??B}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=v({type:e}),e.\u0275inj=y({imports:[X]});let r=e;return r})();var L=(()=>{let e=class e{constructor(t){this.apiService=t,this.title="KnowYourWorld",this.selectedCountry=""}onSearchCountry(t){this.selectedCountry=t,console.log(this.selectedCountry)}};e.\u0275fac=function(i){return new(i||e)(d(g))},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:1,vars:0,consts:[[3,"searchCountry"]],template:function(i,n){i&1&&(a(0,"app-right",0),h("searchCountry",function(b){return n.onSearchCountry(b)}),s())},dependencies:[R,H,N]});let r=e;return r})();var W=[];var $={providers:[j(W),P(k())]};var J={providers:[G()]},q=O($,J);var Q=()=>T(L,q),Qe=Q;export{Qe as a};
