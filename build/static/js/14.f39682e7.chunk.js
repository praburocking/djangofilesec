(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[14],{621:function(t,e,n){(function(e){var n="[object Map]",r="[object Set]",a=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,o="[".concat("\\ud800-\\udfff","]"),u="[".concat("\\u0300-\\u036f\\ufe20-\\ufe23").concat("\\u20d0-\\u20f0","]"),i="\\ud83c[\\udffb-\\udfff]",f="(?:".concat(u,"|").concat(i,")"),l="[^".concat("\\ud800-\\udfff","]"),s="(?:\\ud83c[\\udde6-\\uddff]){2}",p="[\\ud800-\\udbff][\\udc00-\\udfff]",m="".concat(f,"?"),b="[".concat("\\ufe0e\\ufe0f","]?"),d=b+m+"(?:".concat("\\u200d","(?:").concat([l,s,p].join("|"),")").concat(b).concat(m,")*"),h="(?:".concat(["".concat(l+u,"?"),u,s,p,o].join("|"),")"),j=RegExp("".concat(i,"(?=").concat(i,")|").concat(h).concat(d),"g"),g=RegExp("[".concat("\\u200d").concat("\\ud800-\\udfff").concat("\\u0300-\\u036f\\ufe20-\\ufe23").concat("\\u20d0-\\u20f0").concat("\\ufe0e\\ufe0f","]")),y="object"===typeof e&&e&&e.Object===Object&&e||Function("return this")();function v(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}(e,(function(e){return t[e]}))}function O(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function E(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function w(t){return function(t){return g.test(t)}(t)?function(t){return t.match(j)||[]}(t):function(t){return t.split("")}(t)}var S,x,k=Function.prototype,A=Object.prototype,C=y["__core-js_shared__"],P=function(){var t=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return t?"Symbol(src)_1.".concat(t):""}(),R=k.toString,$=A.hasOwnProperty,_=A.toString,F=RegExp("^".concat(R.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"),"$")),W=y.Symbol,B=W?W.iterator:void 0,M=A.propertyIsEnumerable,I=(S=Object.keys,x=Object,function(t){return S(x(t))}),T=X(y,"DataView"),V=X(y,"Map"),z=X(y,"Promise"),D=X(y,"Set"),N=X(y,"WeakMap"),G=tt(T),J=tt(V),L=tt(z),q=tt(D),H=tt(N);function K(t,e){var n=et(t)||function(t){return function(t){return ct(t)&&nt(t)}(t)&&$.call(t,"callee")&&(!M.call(t,"callee")||"[object Arguments]"===_.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,a=!!r;for(var c in t)!e&&!$.call(t,c)||a&&("length"===c||Z(c,r))||n.push(c);return n}function Q(t){return!(!at(t)||function(t){return!!P&&P in t}(t))&&(rt(t)||function(t){var e=!1;if(null!==t&&"function"!==typeof t.toString)try{e=!!"".concat(t)}catch(n){}return e}(t)?F:a).test(tt(t))}function U(t){if(!function(t){var e=t&&t.constructor,n="function"===typeof e&&e.prototype||A;return t===n}(t))return I(t);var e=[];for(var n in Object(t))$.call(t,n)&&"constructor"!==n&&e.push(n);return e}function X(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Q(n)?n:void 0}var Y=function(t){return _.call(t)};function Z(t,e){return!!(e=null==e?9007199254740991:e)&&("number"===typeof t||c.test(t))&&t>-1&&t%1===0&&t<e}function tt(t){if(null!==t){try{return R.call(t)}catch(e){}try{return"".concat(t)}catch(e){}}return""}(T&&"[object DataView]"!==Y(new T(new ArrayBuffer(1)))||V&&Y(new V)!==n||z&&"[object Promise]"!==Y(z.resolve())||D&&Y(new D)!==r||N&&"[object WeakMap]"!==Y(new N))&&(Y=function(t){var e=_.call(t),a="[object Object]"===e?t.constructor:void 0,c=a?tt(a):void 0;if(c)switch(c){case G:return"[object DataView]";case J:return n;case L:return"[object Promise]";case q:return r;case H:return"[object WeakMap]";default:return}return e});var et=Array.isArray;function nt(t){return null!=t&&function(t){return"number"===typeof t&&t>-1&&t%1===0&&t<=9007199254740991}(t.length)&&!rt(t)}function rt(t){var e=at(t)?_.call(t):"";return"[object Function]"===e||"[object GeneratorFunction]"===e}function at(t){var e=typeof t;return!!t&&("object"===e||"function"===e)}function ct(t){return!!t&&"object"===typeof t}function ot(t){return t?v(t,function(t){return nt(t)?K(t):U(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(nt(t))return function(t){return"string"===typeof t||!et(t)&&ct(t)&&"[object String]"===_.call(t)}(t)?w(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(B&&t[B])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[B]());var e=Y(t);return(e===n?O:e===r?E:ot)(t)}}).call(this,n(45))},759:function(t,e,n){"use strict";n.r(e);var r=n(133),a=n(160),c=n(0),o=n.n(c),u=(n(619),n(629)),i=n(723),f=n(756),l=n(693),s=n(736),p=n(690),m=n(750),b=n(37),d=n(622),h=n.n(d),j=n(162),g=n.n(j),y=n(621),v=n.n(y);var O=function(t){return v()(t).length},E=function(t){return!(t.unified.length>5)};e.default=Object(b.a)((function(t){return{"@global":{".emoji-mart-category-label":t.typography.body1,".emoji-mart-bar":{display:"none !important"},".emoji-mart-search input":Object(a.a)(Object(a.a)({},t.typography.body1),t.border),".emoji-mart-search":{marginTop:"".concat(t.spacing(1),"px !important"),paddingRight:"".concat(t.spacing(1),"px !important"),paddingLeft:"".concat(t.spacing(1),"px !important"),paddingBottom:"".concat(t.spacing(1),"px !important")},".emoji-mart-search-icon":{top:"5px !important",right:"14px !important",fontSize:20},".emoji-mart-scroll":{height:240},".emoji-mart":Object(a.a)({},t.border)},floatButtonWrapper:{position:"absolute",bottom:12,right:12},floatButtonSVG:{color:t.palette.primary.light},relative:{position:"relative"}}}),{withTheme:!0})((function(t){var e=t.theme,n=t.classes,a=t.rightContent,b=t.placeholder,d=t.maxCharacters,j=t.emojiSet,y=t.inputClassName,v=t.onChange,w=t.inputRef,S=Object(c.useState)(!1),x=Object(r.a)(S,2),k=x[0],A=x[1],C=Object(c.useState)(""),P=Object(r.a)(C,2),R=P[0],$=P[1],_=Object(c.useState)(0),F=Object(r.a)(_,2),W=F[0],B=F[1],M=Object(c.useCallback)((function(t){var e,n=R+t.native;d&&(e=O(n))>d||(v&&v(n,e),$(n),B(e))}),[R,$,B,d,v]),I=Object(c.useCallback)((function(t){var e,n=t.target.value;d&&(e=O(n))>d||(v&&v(n,e),$(n),B(e))}),[d,v,$,B]),T=Object(c.useCallback)((function(){A(!k)}),[k,A]);return o.a.createElement(c.Fragment,null,o.a.createElement(i.a,{spacing:0,container:!0},o.a.createElement(i.a,{item:!0,xs:a?8:12,sm:a?9:12,lg:a?10:12,className:n.relative},o.a.createElement(f.a,{fullWidth:!0,multiline:!0,variant:"outlined",inputRef:w,rows:6,onInput:I,value:R,placeholder:b,InputProps:{classes:{notchedOutline:y||null}}}),o.a.createElement("div",{className:n.floatButtonWrapper},o.a.createElement(l.a,{onClick:T},k?o.a.createElement(g.a,{color:"primary"}):o.a.createElement(h.a,{color:"primary"})))),a&&o.a.createElement(i.a,{item:!0,xs:4,sm:3,lg:2},a)),d&&o.a.createElement(s.a,{error:W>=d},"".concat(W,"/").concat(d," characters")),o.a.createElement(p.a,{in:k},o.a.createElement(m.a,{mt:1},o.a.createElement(u.a,{set:j,color:e.palette.primary.main,style:{width:"100%"},onSelect:M,emojisToShowFilter:E}))))}))}}]);
//# sourceMappingURL=14.f39682e7.chunk.js.map