(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[15],{741:function(e,t,a){"use strict";a.r(t);var n=a(133),r=a(0),o=a.n(r),c=a(627),l=a(344),i=a(729),s=a(747),u=a(691),h=a(690),m=a(632),b=a(703),d=a(730),p=a(37),y=a(618),f=a.n(y);function g(e){return Object(l.a)(new Date(1e3*e),"MMMM d, p yyyy")}function E(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach((function(e){n>e[t]&&(n=e[t])})),Math.round(n-n*a)}var k=["1 Week","1 Month","6 Months"];t.default=Object(p.a)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})((function(e){var t=e.color,a=e.data,l=e.title,p=e.classes,y=e.theme,w=e.height,M=Object(r.useState)(null),j=Object(n.a)(M,2),v=j[0],O=j[1],S=Object(r.useState)("1 Month"),C=Object(n.a)(S,2),x=C[0],I=C[1],N=Object(r.useCallback)((function(e){O(e.currentTarget)}),[O]),T=Object(r.useCallback)((function(e){return[e,l]}),[l]),W=Object(r.useCallback)((function(){switch(x){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}}),[x]),F=Object(r.useCallback)((function(){var e;switch(x){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,n=[],r=0;r<a.length;r+=1)t<a[r].timestamp&&n.unshift(a[r]);return n}),[a,x]),L=Object(r.useCallback)((function(){O(null)}),[O]),H=Object(r.useCallback)((function(e){I(e),L()}),[I,L]),P=Boolean(v);return o.a.createElement(i.a,null,o.a.createElement(s.a,{pt:2,px:2,pb:4},o.a.createElement(s.a,{display:"flex",justifyContent:"space-between"},o.a.createElement("div",null,o.a.createElement(u.a,{variant:"subtitle1"},l),o.a.createElement(u.a,{variant:"body2",color:"textSecondary"},W())),o.a.createElement("div",null,o.a.createElement(h.a,{"aria-label":"More","aria-owns":P?"long-menu":void 0,"aria-haspopup":"true",onClick:N},o.a.createElement(f.a,null)),o.a.createElement(m.a,{id:"long-menu",anchorEl:v,open:P,onClose:L,PaperProps:{style:{maxHeight:216,width:200}},disableScrollLock:!0},k.map((function(e){return o.a.createElement(b.a,{key:e,selected:e===x,onClick:function(){H(e)},name:e},e)})))))),o.a.createElement(d.a,null,o.a.createElement(s.a,{className:p.cardContentInner,height:w},o.a.createElement(c.c,{width:"100%",height:"100%"},o.a.createElement(c.b,{data:F(),type:"number"},o.a.createElement(c.e,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),o.a.createElement(c.f,{domain:[E(a,"value",.05),"dataMax"],hide:!0}),o.a.createElement(c.a,{type:"monotone",dataKey:"value",stroke:t,fill:t}),o.a.createElement(c.d,{labelFormatter:g,formatter:T,cursor:!1,contentStyle:{border:"none",padding:y.spacing(1),borderRadius:y.shape.borderRadius,boxShadow:y.shadows[1]},labelStyle:y.typography.body1,itemStyle:{fontSize:y.typography.body1.fontSize,letterSpacing:y.typography.body1.letterSpacing,fontFamily:y.typography.body1.fontFamily,lineHeight:y.typography.body1.lineHeight,fontWeight:y.typography.body1.fontWeight}}))))))}))}}]);
//# sourceMappingURL=15.a418d09d.chunk.js.map