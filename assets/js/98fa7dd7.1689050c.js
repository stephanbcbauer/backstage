/*! For license information please see 98fa7dd7.1689050c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[159532],{603905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(667294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),s=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(r),d=i,b=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(b,c(c({ref:e},u),{},{components:r})):n.createElement(b,c({ref:e},u))}));function b(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[p]="string"==typeof t?t:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},477519:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});r(827378);var n=r(603905);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const c={id:"plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",title:"CicdStatisticsApiGitlab",description:"API reference for CicdStatisticsApiGitlab"},o=void 0,l={unversionedId:"reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",id:"reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",title:"CicdStatisticsApiGitlab",description:"API reference for CicdStatisticsApiGitlab",source:"@site/../docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",permalink:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab",title:"CicdStatisticsApiGitlab",description:"API reference for CicdStatisticsApiGitlab"}},s={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],p={toc:u};function f(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",i({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-cicd-statistics-module-gitlab"))," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab"}),(0,n.kt)("inlineCode",{parentName:"a"},"CicdStatisticsApiGitlab"))),(0,n.kt)("p",null,"Extracts the CI/CD statistics from a Gitlab repository"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"class CicdStatisticsApiGitlab implements CicdStatisticsApi \n")),(0,n.kt)("b",null,"Implements:")," [CicdStatisticsApi](/docs/reference/plugin-cicd-statistics.cicdstatisticsapi)",(0,n.kt)("h2",i({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab._constructor_"}),"(constructor)(gitLabAuthApi, cicdDefaults)")),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,n.kt)("code",null,"CicdStatisticsApiGitlab")," class")))),(0,n.kt)("h2",i({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab.creategitlabapi"}),"createGitlabApi(entity, scopes)")),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab.fetchbuilds"}),"fetchBuilds(options)")),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("a",i({parentName:"td"},{href:"/docs/reference/plugin-cicd-statistics-module-gitlab.cicdstatisticsapigitlab.getconfiguration"}),"getConfiguration()")),(0,n.kt)("td",i({parentName:"tr"},{align:null})),(0,n.kt)("td",i({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(t,a){for(var c,o,l=i(t),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))r.call(c,u)&&(l[u]=c[u]);if(e){o=e(c);for(var p=0;p<o.length;p++)n.call(c,o[p])&&(l[o[p]]=c[o[p]])}}return l}},541535:(t,e,r)=>{var n=r(862525),i=60103,a=60106;var c=60109,o=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),o=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||b}function y(){}function h(t,e,r){this.props=t,this.context=e,this.refs=m,this.updater=r||b}g.prototype.isReactComponent={},g.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},g.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},y.prototype=g.prototype;var k=h.prototype=new y;k.constructor=h,n(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function N(t,e,r){var n,a={},c=null,o=null;if(null!=e)for(n in void 0!==e.ref&&(o=e.ref),void 0!==e.key&&(c=""+e.key),e)O.call(e,n)&&!j.hasOwnProperty(n)&&(a[n]=e[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(t&&t.defaultProps)for(n in l=t.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:i,type:t,key:c,ref:o,props:a,_owner:v.current}}function w(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var S=/\/+/g;function C(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,r,n,c){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var l=!1;if(null===t)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case i:case a:l=!0}}if(l)return c=c(l=t),t=""===n?"."+C(l,0):n,Array.isArray(c)?(r="",null!=t&&(r=t.replace(S,"$&/")+"/"),P(c,e,r,"",(function(t){return t}))):null!=c&&(w(c)&&(c=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(c,r+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+t)),e.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+C(o=t[s],s);l+=P(o,e,r,u,c)}else if(u=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=f&&t[f]||t["@@iterator"])?t:null}(t),"function"==typeof u)for(t=u.call(t),s=0;!(o=t.next()).done;)l+=P(o=o.value,e,r,u=n+C(o,s++),c);else if("object"===o)throw e=""+t,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return l}function _(t,e,r){if(null==t)return t;var n=[],i=0;return P(t,n,"","",(function(t){return e.call(r,t,i++)})),n}function A(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var E={current:null};function x(){var t=E.current;if(null===t)throw Error(d(321));return t}},827378:(t,e,r)=>{r(541535)}}]);