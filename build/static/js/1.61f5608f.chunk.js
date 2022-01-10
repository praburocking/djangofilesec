(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[1],{136:function(t,e,r){"use strict";function n(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}r.d(e,"a",(function(){return n}))},208:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(136),a=r(128),i=r(126);function o(t,e){Object(i.a)(1,arguments);var r=e||{},o=r.locale,c=o&&o.options&&o.options.weekStartsOn,u=null==c?0:Object(n.a)(c),s=null==r.weekStartsOn?u:Object(n.a)(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Object(a.a)(t),f=d.getUTCDay(),l=(f<s?7:0)+f-s;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}},209:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(128),a=r(126);function i(t){Object(a.a)(1,arguments);var e=1,r=Object(n.a)(t),i=r.getUTCDay(),o=(i<e?7:0)+i-e;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}},249:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(136),a=r(128),i=r(208),o=r(126);function c(t,e){Object(o.a)(1,arguments);var r=Object(a.a)(t,e),c=r.getUTCFullYear(),u=e||{},s=u.locale,d=s&&s.options&&s.options.firstWeekContainsDate,f=null==d?1:Object(n.a)(d),l=null==u.firstWeekContainsDate?f:Object(n.a)(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(c+1,0,l),h.setUTCHours(0,0,0,0);var g=Object(i.a)(h,e),w=new Date(0);w.setUTCFullYear(c,0,l),w.setUTCHours(0,0,0,0);var b=Object(i.a)(w,e);return r.getTime()>=g.getTime()?c+1:r.getTime()>=b.getTime()?c:c-1}},340:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(128),a=r(126);function i(t){Object(a.a)(1,arguments);var e=Object(n.a)(t);return!isNaN(e)}},341:function(t,e,r){"use strict";function n(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function a(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var i={p:a,P:function(t,e){var r,i=t.match(/(P+)(p+)?/),o=i[1],c=i[2];if(!c)return n(t,e);switch(o){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;case"PPPP":default:r=e.dateTime({width:"full"})}return r.replace("{{date}}",n(o,e)).replace("{{time}}",a(c,e))}};e.a=i},342:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(128),a=r(209),i=r(126);function o(t){Object(i.a)(1,arguments);var e=Object(n.a)(t),r=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var c=Object(a.a)(o),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=Object(a.a)(u);return e.getTime()>=c.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}},343:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var n=["D","DD"],a=["YY","YYYY"];function i(t){return-1!==n.indexOf(t)}function o(t){return-1!==a.indexOf(t)}function c(t,e,r){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}},344:function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var n=r(340),a=r(252),i=r(345),o=r(128);function c(t,e){for(var r=t<0?"-":"",n=Math.abs(t).toString();n.length<e;)n="0"+n;return r+n}var u={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return c("yy"===e?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return"M"===e?String(r+1):c(r+1,2)},d:function(t,e){return c(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(t,e){return c(t.getUTCHours()%12||12,e.length)},H:function(t,e){return c(t.getUTCHours(),e.length)},m:function(t,e){return c(t.getUTCMinutes(),e.length)},s:function(t,e){return c(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds();return c(Math.floor(n*Math.pow(10,r-3)),e.length)}},s=r(126);var d=r(347),f=r(342),l=r(346),h=r(249),g="midnight",w="noon",b="morning",m="afternoon",v="evening",O="night";function T(t,e){var r=t>0?"-":"+",n=Math.abs(t),a=Math.floor(n/60),i=n%60;if(0===i)return r+String(a);var o=e||"";return r+String(a)+o+c(i,2)}function C(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):y(t,e)}function y(t,e){var r=e||"",n=t>0?"-":"+",a=Math.abs(t);return n+c(Math.floor(a/60),2)+r+c(a%60,2)}var x={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if("yo"===e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return u.y(t,e)},Y:function(t,e,r,n){var a=Object(h.a)(t,n),i=a>0?a:1-a;return"YY"===e?c(i%100,2):"Yo"===e?r.ordinalNumber(i,{unit:"year"}):c(i,e.length)},R:function(t,e){return c(Object(f.a)(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return u.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var a=Object(l.a)(t,n);return"wo"===e?r.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,r){var n=Object(d.a)(t);return"Io"===e?r.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(t,e,r){return"do"===e?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):u.d(t,e)},D:function(t,e,r){var n=function(t){Object(s.a)(1,arguments);var e=Object(o.a)(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var n=e.getTime(),a=r-n;return Math.floor(a/864e5)+1}(t);return"Do"===e?r.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return c(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var a=t.getUTCDay(),i=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return c(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),a=0===n?7:n;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n,a=t.getUTCHours();switch(n=12===a?w:0===a?g:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n,a=t.getUTCHours();switch(n=a>=17?v:a>=12?m:a>=4?b:O,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return u.h(t,e)},H:function(t,e,r){return"Ho"===e?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):u.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return"Ko"===e?r.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?r.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(t,e,r){return"mo"===e?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):u.m(t,e)},s:function(t,e,r){return"so"===e?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):u.s(t,e)},S:function(t,e){return u.S(t,e)},X:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return C(a);case"XXXX":case"XX":return y(a);case"XXXXX":case"XXX":default:return y(a,":")}},x:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return C(a);case"xxxx":case"xx":return y(a);case"xxxxx":case"xxx":default:return y(a,":")}},O:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(a,":");case"OOOO":default:return"GMT"+y(a,":")}},z:function(t,e,r,n){var a=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(a,":");case"zzzz":default:return"GMT"+y(a,":")}},t:function(t,e,r,n){var a=n._originalDate||t;return c(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,r,n){return c((n._originalDate||t).getTime(),e.length)}},U=r(341),j=r(218),p=r(343),D=r(136),M=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Y=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,k=/^'([^]*?)'?$/,E=/''/g,P=/[a-zA-Z]/;function S(t,e,r){Object(s.a)(2,arguments);var c=String(e),u=r||{},d=u.locale||a.a,f=d.options&&d.options.firstWeekContainsDate,l=null==f?1:Object(D.a)(f),h=null==u.firstWeekContainsDate?l:Object(D.a)(u.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=d.options&&d.options.weekStartsOn,w=null==g?0:Object(D.a)(g),b=null==u.weekStartsOn?w:Object(D.a)(u.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var m=Object(o.a)(t);if(!Object(n.a)(m))throw new RangeError("Invalid time value");var v=Object(j.a)(m),O=Object(i.a)(m,v),T={firstWeekContainsDate:h,weekStartsOn:b,locale:d,_originalDate:m},C=c.match(Y).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,U.a[e])(t,d.formatLong,T):t})).join("").match(M).map((function(r){if("''"===r)return"'";var n=r[0];if("'"===n)return q(r);var a=x[n];if(a)return!u.useAdditionalWeekYearTokens&&Object(p.b)(r)&&Object(p.c)(r,e,t),!u.useAdditionalDayOfYearTokens&&Object(p.a)(r)&&Object(p.c)(r,e,t),a(O,r,d.localize,T);if(n.match(P))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return r})).join("");return C}function q(t){return t.match(k)[1].replace(E,"'")}},345:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(136),a=r(128),i=r(126);function o(t,e){Object(i.a)(2,arguments);var r=Object(a.a)(t).getTime(),o=Object(n.a)(e);return new Date(r+o)}function c(t,e){Object(i.a)(2,arguments);var r=Object(n.a)(e);return o(t,-r)}},346:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(128),a=r(208),i=r(136),o=r(249),c=r(126);function u(t,e){Object(c.a)(1,arguments);var r=e||{},n=r.locale,u=n&&n.options&&n.options.firstWeekContainsDate,s=null==u?1:Object(i.a)(u),d=null==r.firstWeekContainsDate?s:Object(i.a)(r.firstWeekContainsDate),f=Object(o.a)(t,e),l=new Date(0);l.setUTCFullYear(f,0,d),l.setUTCHours(0,0,0,0);var h=Object(a.a)(l,e);return h}function s(t,e){Object(c.a)(1,arguments);var r=Object(n.a)(t),i=Object(a.a)(r,e).getTime()-u(r,e).getTime();return Math.round(i/6048e5)+1}},347:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(128),a=r(209),i=r(342),o=r(126);function c(t){Object(o.a)(1,arguments);var e=Object(i.a)(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var n=Object(a.a)(r);return n}function u(t){Object(o.a)(1,arguments);var e=Object(n.a)(t),r=Object(a.a)(e).getTime()-c(e).getTime();return Math.round(r/6048e5)+1}}}]);
//# sourceMappingURL=1.61f5608f.chunk.js.map