/*! For license information please see 960b7362.c335c449.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[120021],{603905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=u(t),y=o,d=l["".concat(p,".").concat(y)]||l[y]||s[y]||a;return t?n.createElement(d,i(i({ref:r},f),{},{components:t})):n.createElement(d,i({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},417277:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>f});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory"},c=void 0,p={unversionedId:"reference/core-plugin-api.apifactory",id:"reference/core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory",source:"@site/../docs/reference/core-plugin-api.apifactory.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.apifactory",permalink:"/docs/reference/core-plugin-api.apifactory",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.apifactory.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.apifactory",title:"ApiFactory",description:"API reference for ApiFactory"}},u={},f=[],l={toc:f};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api.apifactory"}),(0,n.kt)("inlineCode",{parentName:"a"},"ApiFactory"))),(0,n.kt)("p",null,"Describes type returning API implementations."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ApiFactory<Api, Impl extends Api, Deps extends {\n    [name in string]: unknown;\n}> = {\n    api: ApiRef<Api>;\n    deps: TypesToApiRefs<Deps>;\n    factory(deps: Deps): Impl;\n};\n")),(0,n.kt)("b",null,"References:")," [ApiRef](/docs/reference/core-plugin-api.apiref), [TypesToApiRefs](/docs/reference/core-plugin-api.typestoapirefs)")}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,p=o(e),u=1;u<arguments.length;u++){for(var f in i=Object(arguments[u]))t.call(i,f)&&(p[f]=i[f]);if(r){c=r(i);for(var l=0;l<c.length;l++)n.call(i,c[l])&&(p[c[l]]=i[c[l]])}}return p}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var i=60109,c=60110,p=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),c=l("react.context"),p=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var h=v.prototype=new g;h.constructor=v,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var u=Array(p),f=0;f<p;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return i=i(p=e),e=""===n?"."+_(p,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(A,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(A,"$&/")+"/")+e)),r.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+_(c=e[u],u);p+=S(c,r,t,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)p+=S(c=c.value,r,t,f=n+_(c,u++),i);else if("object"===c)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);