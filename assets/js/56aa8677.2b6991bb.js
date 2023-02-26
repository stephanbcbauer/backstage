/*! For license information please see 56aa8677.2b6991bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[387487],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},433112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"integration-aws-node",title:"@backstage/integration-aws-node",description:"API Reference for @backstage/integration-aws-node"},l=void 0,c={unversionedId:"reference/integration-aws-node",id:"reference/integration-aws-node",title:"@backstage/integration-aws-node",description:"API Reference for @backstage/integration-aws-node",source:"@site/../docs/reference/integration-aws-node.md",sourceDirName:"reference",slug:"/reference/integration-aws-node",permalink:"/docs/reference/integration-aws-node",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-aws-node.md",tags:[],version:"current",frontMatter:{id:"integration-aws-node",title:"@backstage/integration-aws-node",description:"API Reference for @backstage/integration-aws-node"}},s={},u=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],f={toc:u};function p(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/integration-aws-node"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/integration-aws-node"))),(0,n.kt)("h2",a({},{id:"classes"}),"Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Class"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-aws-node.defaultawscredentialsmanager"}),"DefaultAwsCredentialsManager")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Handles the creation and caching of credential providers for AWS accounts.")))),(0,n.kt)("h2",a({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Interface"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-aws-node.awscredentialsmanager"}),"AwsCredentialsManager")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"This allows implementations to be provided to retrieve AWS credentials.")))),(0,n.kt)("h2",a({},{id:"type-aliases"}),"Type Aliases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type Alias"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-aws-node.awscredentialprovider"}),"AwsCredentialProvider")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A set of credentials information for an AWS account.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/integration-aws-node.awscredentialprovideroptions"}),"AwsCredentialProviderOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The options for specifying the AWS credentials to retrieve.")))))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,c=a(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))r.call(i,u)&&(c[u]=i[u]);if(t){l=t(i);for(var f=0;f<l.length;f++)n.call(i,l[f])&&(c[l[f]]=i[l[f]])}}return c}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;a=f("react.element"),o=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),l=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),u=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=h.prototype=new b;v.constructor=h,n(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+S(l=e[s],s);c+=_(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)c+=_(l=l.value,t,r,u=n+S(l,s++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function A(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function x(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);