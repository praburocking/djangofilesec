(this.webpackJsonpgameclient=this.webpackJsonpgameclient||[]).push([[0],{236:function(e,t,a){a(237),e.exports=a(508)},254:function(e,t,a){},255:function(e,t,a){},424:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){},500:function(e,t,a){},507:function(e,t,a){},508:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(3),o=a.n(l),c=(a(254),a(63)),s=(a(255),a(29)),i=a(20),u=a(33),m=a(17),p=a(13),d=a(19),g=a(74),h=a(4),E=a.n(h),f=a(35),y=a.n(f);function v(e,t,a){var r=new Date;a||(a=30),r.setTime(r.getTime()+24*a*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function b(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),r=0;r<a.length;r++){for(var n=a[r];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}function w(e){document.cookie=e+"= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/"}var x=function(e){if(!(e.user&&e.authtoken&&e.user.username&&e.user.email))throw"data not found";var t;(t=e.authtoken)&&v("token",t,1),v("username",e.user.username,1),v("email",e.user.email,1)},k=function(){w("token"),w("username"),w("email")},R=function(){return{headers:{Authorization:"Token "+b("token")}}},T=function(){var e=b("token");return e||void 0},I=function(e){return{user:e.user,serverConfig:e.serverConfig,files:e.files}};a(273).config(),console.log("server url",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DEVELOPMENT_SERVER_URL:"http://localhost:8000/api/v1/",REACT_APP_PRODUCTION_SERVER_URL:"https://filesec.herokuapp.com/api/v1/",REACT_APP_TEST_STRIPE_PK:"pk_test_9radQ2WXLrFFlDGV0XqNMUkw00PoyDNs29",REACT_APP_PRODUCTION_STRIPE_PK:"pk_live_iyPbhH04G2xJnlJwIi4gCQPi00y2HagUM9"}));O="http://localhost:8000/api/v1/";var O,S=O+"iam/signup",C=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post(S,e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},j=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/iam/logout",{signout:!0},R()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},N=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("loginData ",e),a.prev=1,a.next=4,E.a.awrap(y.a.post("http://localhost:8000/api/v1/iam/login",e));case 4:return t=a.sent,a.abrupt("return",t);case 8:return a.prev=8,a.t0=a.catch(1),a.abrupt("return",a.t0.response);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},F=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.awrap(y.a.get("http://localhost:8000/api/v1/iam/accounts",R()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},A=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/forgotpassword",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},P=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/forgotpassword/verifykey?token="+e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},D=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/resetpass",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},L=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/verifyuser",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},_=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.post("http://localhost:8000/api/v1/app/files",e,R()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},U=function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.awrap(y.a.get("http://localhost:8000/api/v1/app/files",R()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},q=function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.awrap(y.a.delete("http://localhost:8000/api/v1/app/files/"+e,R()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},z=function(e,t){var a;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.awrap(y.a.request({url:"http://localhost:8000/api/v1/app/files/download/"+e,method:"POST",headers:R().headers,data:{private_key:t},responseType:"blob"}));case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0.response);case 10:case"end":return r.stop()}}),null,null,[[0,7]])},B="FILES_INIT",H="USER_INIT",K="USER_ERROR",W="EMT_STORE",G=1,M=2,V=3,J=function(){return{type:W}},Q=function(e,t){return function(a){var r;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=null,t!==V){n.next=7;break}return n.next=4,E.a.awrap(N(e));case 4:r=n.sent,n.next=17;break;case 7:if(t!==G){n.next=13;break}return n.next=10,E.a.awrap(F());case 10:r=n.sent,n.next=17;break;case 13:if(t!==M){n.next=17;break}return n.next=16,E.a.awrap(C(e));case 16:r=n.sent;case 17:r&&200===r.status||t===M&&r&&(201===r.status||200===r.status)?t===V||t===M?(x(r.data),a({type:H,data:r.data.user})):a({type:H,data:r.data}):r&&r.data&&r.data.detail&&a({type:K,data:{error:{code:r.code,detail:r.data.detail}}});case 18:case"end":return n.stop()}}))}},Y=a(16),X=a(510),$=a(511),Z=a(512),ee=Object(Y.b)(I,{setUserDetailsToStore:Q,emtStores:J})(Object(c.withRouter)((function(e){var t=d.a.Title,a=Object(r.useState)(!1),l=Object(s.a)(a,2),o=l[0],c=l[1],h=i.a.useForm(),E=(Object(s.a)(h,1)[0],g.a.Option);Object(r.useEffect)((function(){e.user&&e.user.username&&e.user.email&&b("token")?(p.a.success("welcome "+e.user.username+" !"),c(!1),e.history.push("/home")):e.user.error?(p.a.error(e.user.error.message),c(!1),e.emtStores()):c(!1)}),[e.user]);return n.a.createElement("div",null,n.a.createElement(t,{style:{color:"white"},level:3},"Sign-up"),n.a.createElement("br",null),n.a.createElement(i.a,{onFinish:function(t){c(!0),console.log("values",t),e.setUserDetailsToStore(t,M)},className:"login-form"},n.a.createElement(i.a.Item,{name:"username",rules:[{required:!0}]},n.a.createElement(u.a,{prefix:n.a.createElement(X.a,{style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"UserName"})),n.a.createElement(i.a.Item,{name:"email",rules:[{type:"email"},{required:!0}]},n.a.createElement(u.a,{prefix:n.a.createElement($.a,{style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"})),n.a.createElement(i.a.Item,{name:"password",rules:[{required:!0,message:"please input your password"}]},n.a.createElement(u.a.Password,{prefix:n.a.createElement(Z.a,{style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"})),n.a.createElement(i.a.Item,{name:"plan",rules:[{required:!0}]},n.a.createElement(g.a,{size:"large",placeholder:"select your plan"},n.a.createElement(E,{value:"planA"},"plan A, 8 User, 3USD/month"),n.a.createElement(E,{value:"planB"},"plan B, 12 User, 5USD/month"))),n.a.createElement(i.a.Item,null,n.a.createElement("br",null),n.a.createElement(m.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:o},!o&&"Start Your Free Trial",o&&"Signing You In"))))}))),te=a(135),ae=a(12),re=a(5),ne=a(11),le=a(56),oe=a(111),ce=a(21),se=a(211),ie=a(215),ue=a.n(ie),me=(a(424),a(44)),pe=a(93),de=a(27),ge=Object(Y.b)(I,{})(Object(c.withRouter)((function(e){var t=ne.a.Header;console.log("header",e);var a=function(){return e.user&&e.user.username&&e.user.email&&T()},r=n.a.createElement(me.a,{theme:a()?"light":"dark",mode:!a()&&"horizontal",defaultSelectedKeys:e.defaultSelectedKeys,className:!a()&&"header",style:{lineHeight:"64px",maxWidth:"200px"}},!a()&&n.a.createElement(me.a.Item,{key:"1",style:{minWidth:"100px"},onClick:function(){return e.history.push("/login")}},"LOGIN"),n.a.createElement(me.a.Item,{key:"2",style:{minWidth:"100px"},onClick:function(){return e.history.push("/faq")}},"FAQ"),a()&&n.a.createElement(me.a.Divider,null),a()&&n.a.createElement(me.a.Item,{key:"3",style:{minWidth:"100px",color:"red"},onClick:function(){return e.history.push("/logout")}},"Logout"));return n.a.createElement(t,{style:{position:"fixed",zIndex:1,width:"100%",background:"rgba(2, 164, 255, 0.7)"}},n.a.createElement(de.b,{to:"/"}," ",n.a.createElement("div",{className:"logo"})),n.a.createElement(ae.a,{type:"flex",justify:"end",align:"top"},n.a.createElement(re.a,null,!a()&&r,a()&&n.a.createElement(n.a.Fragment,null,n.a.createElement(le.a,{shape:"square",size:"large",style:{margin:10,backgroundColor:"rgb(57, 224, 89)",verticalAlign:"middle"}}," ",e.user.username[0].toUpperCase()),n.a.createElement(pe.a.Button,{size:"large",overlay:r,onClick:function(){return e.history.push("/accounts")}},"Account")))))}))),he=ue()((function(e){var t=ne.a.Content,a=ne.a.Footer,r=d.a.Title,l=d.a.Paragraph;return n.a.createElement(ne.a,{className:"parallax"},n.a.createElement(ge,null),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"1020px"}},n.a.createElement(ae.a,{style:{minHeight:"720px"}},n.a.createElement(re.a,{span:16},n.a.createElement(se.a,{dotPosition:"left",autoplay:!0,style:{margin:15,marginTop:30,minHeight:700,minWidth:400,opacity:.5,color:"white"}},n.a.createElement("div",{style:{minHeight:700,minWidth:400,color:"white"}},n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")))),n.a.createElement(re.a,{span:7,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(ee,null))),n.a.createElement(ae.a,{style:Object(te.a)({minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"rgba(2, 164, 255, 0.7)",padding:0},"margin",0)},n.a.createElement(re.a,null,n.a.createElement(ae.a,{type:"flex",justify:"center",style:{paddingBottom:"8px",paddingTop:"5px"}},n.a.createElement(re.a,null,n.a.createElement(r,{level:2,style:{color:"white"}},"Why Us?"))),n.a.createElement(ae.a,{type:"flex",justify:"space-between",style:{marginLeft:"15px",marginRight:"15px"}},n.a.createElement(re.a,{span:6,className:"alignCenter"},n.a.createElement(le.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(re.a,{span:6,className:"alignCenter"},n.a.createElement(le.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(re.a,{span:6,className:"alignCenter"},n.a.createElement(le.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(re.a,{span:6,className:"alignCenter"},n.a.createElement(le.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(re.a,{span:6,className:"alignCenter"},n.a.createElement(le.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me"))))),n.a.createElement(ae.a,{style:{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px"}},n.a.createElement(re.a,null,n.a.createElement(r,{className:"alignCenter",style:{color:"white"}},"Pricing"),n.a.createElement(ae.a,{style:{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}},n.a.createElement(re.a,{span:6},n.a.createElement(oe.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 1"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(ce.a,{style:{color:"white"}},n.a.createElement(ce.a.Item,null,"value1"),n.a.createElement(ce.a.Item,null,"value2"),n.a.createElement(ce.a.Item,null,"value3"),n.a.createElement(ce.a.Item,null,"value4")))),n.a.createElement(re.a,{span:6},n.a.createElement(oe.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 2"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(ce.a,{style:{color:"white"}},n.a.createElement(ce.a.Item,null,"value1"),n.a.createElement(ce.a.Item,null,"value2"),n.a.createElement(ce.a.Item,null,"value3"),n.a.createElement(ce.a.Item,null,"value4")))),n.a.createElement(re.a,{span:6},n.a.createElement(oe.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 3"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(ce.a,{style:{color:"white"}},n.a.createElement(ce.a.Item,null,"value1"),n.a.createElement(ce.a.Item,null,"value2"),n.a.createElement(ce.a.Item,null,"value3"),n.a.createElement(ce.a.Item,null,"value4")))),n.a.createElement(re.a,{span:6},n.a.createElement(oe.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 4"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(ce.a,{style:{color:"white"}},n.a.createElement(ce.a.Item,null,"value1"),n.a.createElement(ce.a.Item,null,"value2"),n.a.createElement(ce.a.Item,null,"value3"),n.a.createElement(ce.a.Item,null,"value4")))))))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),Ee=a(165),fe=(a(452),function(e){var t=ne.a.Content,a=ne.a.Footer,r=Ee.a.Panel,l=d.a.Title,o=n.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");return n.a.createElement(ne.a,{className:"parallax layout-bg"},n.a.createElement(ge,{defaultSelectedKeys:["2"]}),n.a.createElement(t,{style:Object(te.a)({padding:"0 0 0 0px",marginTop:64,minHeight:"1020px",marginLeft:"80px",marginRight:"80px"},"marginTop","120px")},n.a.createElement(l,{className:"alignCenter",style:{color:"white"}},"FAQ"),n.a.createElement(Ee.a,{bordered:!1,defaultActiveKey:["1"],style:{backgroundColor:"rgb(5, 163, 255)",color:"white"}},n.a.createElement(r,{header:"This is panel header 1",key:"1",style:{color:"white"}},o),n.a.createElement(r,{header:"This is panel header 2",key:"2"},o),n.a.createElement(r,{header:"This is panel header 3",key:"3"},o))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}),ye=a(513),ve=a(514),be=Object(Y.b)(I,{setUserDetailsToStore:Q})(Object(c.withRouter)((function(e){Object(r.useEffect)((function(){e.user.username&&e.user.email&&b("token")?(p.a.success("welcome "+e.user.username+" !"),e.history.push("/")):e.user.error&&p.a.error(e.user.error.detail),o(!1)}),[e.user]);var t=Object(r.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=d.a.Title;return n.a.createElement("div",null,n.a.createElement(c,{level:3,style:{color:"white"}},"Login"),n.a.createElement("br",null),n.a.createElement(i.a,{onFinish:function(t){console.log("type",o),o(!0),e.setUserDetailsToStore(t,V)},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(i.a.Item,{name:"email",rules:[{required:!0,message:"please enter your email ID"},{type:"email",message:"please enter the proper email ID"}]},n.a.createElement(u.a,{prefix:n.a.createElement($.a,{style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"})),n.a.createElement(i.a.Item,{name:"password",rules:[{required:!0,message:"please enter the password"}]},n.a.createElement(u.a,{prefix:n.a.createElement(Z.a,{style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"})),n.a.createElement(i.a.Item,null,n.a.createElement("br",null),n.a.createElement(m.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Login",l&&"Loging You In"))),n.a.createElement(ae.a,null,n.a.createElement(re.a,{span:12,style:{color:"white"}},n.a.createElement(de.b,{to:"/",style:{color:"white"}},n.a.createElement(ye.a,{style:{color:"#1890ff"}}),"Signup")),n.a.createElement(re.a,{span:12},n.a.createElement(de.b,{to:"/forgotpassword",style:{color:"white"}},"Forgot password ",n.a.createElement(ve.a,{style:{color:"#1890ff"}})))))}))),we=function(e){var t=ne.a.Content,a=ne.a.Footer;return n.a.createElement(ne.a,{className:"layout-bg"},n.a.createElement(ge,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(ae.a,{className:"alignCenter"},n.a.createElement(re.a,{span:8}),n.a.createElement(re.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(be,null)),n.a.createElement(re.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},xe=a(137),ke=a(136),Re=a(234),Te=a(515),Ie=(a(453),Re.a.Dragger),Oe=Object(Y.b)(null,{updateFilesToStore:function(e){return e.key=e.id,{type:"FILES_ADD",data:e}}})((function(e){var t={name:"file",multiple:!1,action:"#",showUploadList:!1,onChange:function(e){console.log("FILE",e.file),e.file&&(c(e.file),g(!0))},beforeUpload:function(){return!1},onSubmit:function(e){console.log("iam in submit"),e.preventDefault()}},a=Object(r.useState)(null),l=Object(s.a)(a,2),o=l[0],c=l[1],i=Object(r.useState)(!1),m=Object(s.a)(i,2),d=m[0],g=m[1],h=Object(r.useState)(null),f=Object(s.a)(h,2),y=f[0],v=f[1];return n.a.createElement("div",{className:"col-md-6",style:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(Ie,t,n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(Te.a,null)),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),n.a.createElement(ke.a,{title:"please Enter your entryption key",visible:d,onOk:function(t){var a,r;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),(a=new FormData).append("file",o),a.append("private_key",y),n.next=6,E.a.awrap(_(a));case 6:r=n.sent,[200,201,204].includes(r.status)?e.updateFilesToStore(r.data):r.data.message?p.a.error(r.data.message):p.a.error("exception while uploading,please try again later"),g(!1),c(null),v(null);case 11:case"end":return n.stop()}}))},onCancel:function(e){console.log(e),g(!1),c(null),v(null)}},n.a.createElement(u.a,{type:"text",placeholder:"Encryption Key",value:y,onChange:function(e){console.log("value",e.target.value),v(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to encrypt your data")))})),Se=(a(472),a(475),a(509),a(233)),Ce=(a(486),a(488),a(225)),je=Object(Y.b)(null,{deleteFromStore:function(e){return{type:"FILES_DEL",data:e}}})((function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),m=i[0],d=i[1],g=Object(r.useState)(null),h=Object(s.a)(g,2),f=h[0],y=h[1],v=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return n.a.createElement("a",{style:{color:"black"}},e)}},{title:"Action",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement("a",{style:{color:"black"},onClick:function(){return b(t)}},"Download "),n.a.createElement(Ce.a,{type:"vertical",style:{color:"black"}}),n.a.createElement("a",{style:{color:"black"},onClick:function(){return w(t.key)}},"Delete"))}}],b=function(e){o(!0),d(e)},w=function(t){var a;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(q(t));case 2:a=r.sent,[200,201,204].includes(a.status)?e.deleteFromStore(t):a.data&&a.data.message?p.a.error(a.data.message):p.a.error("Exception while deleting the file, Please try again later");case 4:case"end":return r.stop()}}))};return n.a.createElement("div",null,n.a.createElement(Se.a,{columns:v,dataSource:e.data,size:"middle"}),n.a.createElement(ke.a,{title:"please Enter your decryption key",visible:l,onOk:function(){return function(e){var t,a,r,n,l;return E.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.key,c.next=3,E.a.awrap(z(t,f));case 3:a=c.sent,y(null),200===a.status?(r=a.data,n=window.URL.createObjectURL(new Blob([r])),(l=document.createElement("a")).href=n,l.setAttribute("download",e.name),document.body.appendChild(l),l.click(),l.remove()):a.data&&a.data.message?p.a.error(a.data.message):p.a.error("Exception while downloading the file"),o(!1);case 7:case"end":return c.stop()}}))}(m)},onCancel:function(e){console.log(e),o(!1),y(null)}},n.a.createElement(u.a,{type:"text",placeholder:"Decryption Key",value:f,onChange:function(e){console.log("value",e.target.value),y(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to decrypt your data")))})),Ne=Object(Y.b)(I,{listFiles:function(){return function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(U());case 2:200===(t=a.sent).status&&(t.data.map((function(e){e.key=e.id})),e({type:B,data:t.data}));case 4:case"end":return a.stop()}}))}}})((function(e){var t=ne.a.Content,a=ne.a.Footer;return Object(r.useEffect)((function(){e.listFiles()}),[]),n.a.createElement(ne.a,{className:"parallax layout-bg"},console.log("files in store ",e.files),n.a.createElement(ge,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{marginTop:64,minHeight:"720px",padding:20}},n.a.createElement(ae.a,{style:{margin:20,marginLeft:100,marginRight:100}},n.a.createElement(re.a,{span:16},n.a.createElement(Oe,null)),n.a.createElement(re.a,{span:6,className:"App",style:{color:"white",padding:"20px",margin:20}},n.a.createElement(xe.a,{type:"dashboard",percent:75,status:"active",style:{color:"white"}}))),n.a.createElement(ae.a,{style:{backgroundColor:"rgb(255, 255, 255)",marginLeft:50,marginRight:50}},n.a.createElement(re.a,{span:24},n.a.createElement(je,{data:e.files})))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),Fe=(a(500),Object(c.withRouter)(Object(Y.b)(null,{emtStores:J})((function(e){var t=!1;return Object(r.useEffect)((function(){!function(){var a;E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,E.a.awrap(j());case 2:a=r.sent,[200,204].includes(a.status)?(e.emtStores(),k(),e.history.push("/")):t=!0;case 4:case"end":return r.stop()}}))}()})),n.a.createElement("div",null,!t&&n.a.createElement(d.a.Title,{className:"center blink_me"}," signing you out !!!"),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a.Title,null," ohh!!, we encountered a exception while signing you out"),"  ",n.a.createElement(d.a.Paragraph,null,"If the Exception persist please contact the support")))})))),Ae=(a(501),a(198),a(503),a(505),Object(Y.b)(I)((function(e){var t=ne.a.Content,a=ne.a.Footer;return n.a.createElement(ne.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg"}},n.a.createElement(ge,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{padding:"10 10 10 10px",marginTop:64,minHeight:"720px"}},n.a.createElement(ae.a,null,n.a.createElement(re.a,{span:6,style:{minHeight:"720px"}},n.a.createElement(le.a,{shape:"square",size:64},e.user.username[0].toUpperCase()),n.a.createElement(ae.a,null,"USER")),n.a.createElement(re.a,{span:18}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}))),Pe=(a(507),function(e){return console.log("not found"),n.a.createElement("div",{id:"notfound"},n.a.createElement("div",{class:"notfound"},n.a.createElement("div",{class:"notfound-404"},n.a.createElement("h1",null,"Oops!"),n.a.createElement("h2",null,"404 - The Page can't be found")),n.a.createElement(de.b,{to:"/"},"Go TO Homepage")))}),De=a(103),Le=Object(Y.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(c.withRouter)((function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=d.a.Title,g=d.a.Paragraph;return n.a.createElement("div",null,n.a.createElement(c,{level:3,style:{color:"white"}},"Forgot Password"),n.a.createElement("br",null),n.a.createElement(i.a,{onFinish:function(t){var a;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return o(!0),r.next=3,E.a.awrap(A(t));case 3:(a=r.sent)&&200===a.status?(p.a.success("password reset link has been sent to your registered mail-id"),o(!1),e.history.push("/")):(a.data.message?p.a.error(a.data.message):p.a.error("Exception while Signing-in "),o(!1));case 5:case"end":return r.stop()}}))},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(i.a.Item,{name:"email",rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]},n.a.createElement(u.a,{prefix:n.a.createElement(De.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"})),n.a.createElement(i.a.Item,null,n.a.createElement(m.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Sent password reset link",l&&"sending password reset link"))),n.a.createElement(de.b,{to:"/login"},n.a.createElement(g,{style:{color:"white"}}," ",n.a.createElement(ye.a,null),"Back to Login")))}))),_e=function(e){var t=ne.a.Content,a=ne.a.Footer;return n.a.createElement(ne.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(ge,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(ae.a,{className:"alignCenter"},n.a.createElement(re.a,{span:8}),n.a.createElement(re.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Le,null)),n.a.createElement(re.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},Ue=Object(Y.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(c.withRouter)((function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),l=a[0],o=a[1],c=d.a.Title;Object(r.useEffect)((function(){e.form.validateFields(),function(){var t,a;E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){r.next=8;break}return r.next=4,E.a.awrap(P(t.split("=")[1]));case 4:200===(a=r.sent).status&&a.data.status||(p.a.error("invalid token redirecting to home page"),e.history.push("/")),r.next=10;break;case 8:p.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:case"end":return r.stop()}}))}()}),[]);return n.a.createElement("div",null,n.a.createElement(c,{level:3,style:{color:"white"}},"Reset Password"),n.a.createElement("br",null),n.a.createElement(i.a,{onFinish:function(t){var a,r;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("values ",t),o(!0),console.log("Received values of form: ",t),!(a=e.location.search).includes("token=")||a.includes("&")||!a.split("=")[1]){n.next=11;break}return n.next=7,E.a.awrap(D({token:a.split("=")[1],password:t.password}));case 7:(r=n.sent)&&200===r.status?(console.log("data =>",e.user),p.a.success("Your password changed please login "),o(!1),e.history.push("/login")):(console.log("login Response",r),p.a.error("Exception while resetting your password"),o(!1)),n.next=12;break;case 11:p.a.error("Exception while resetting your password");case 12:case"end":return n.stop()}}))},className:"login-form"},n.a.createElement(i.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},n.a.createElement(u.a,{prefix:n.a.createElement(De.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"})),n.a.createElement(i.a.Item,null,n.a.createElement(m.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Reset Password",l&&"Resetting Password"))),n.a.createElement(de.b,{className:"login-form-forgot",to:"/forgotpassword"},"Forgot password"))}))),qe=function(e){var t=ne.a.Content,a=ne.a.Footer;return n.a.createElement(ne.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(ge,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(ae.a,{className:"alignCenter"},n.a.createElement(re.a,{span:8}),n.a.createElement(re.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Ue,null)),n.a.createElement(re.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},ze=Object(c.withRouter)((function(e){var t=ne.a.Content,a=ne.a.Footer,l=d.a.Title,o="Verifying User...";return Object(r.useEffect)((function(){!function(){var t;E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){a.next=8;break}return a.next=4,E.a.awrap(L({token:t.split("=")[1]}));case 4:200===a.sent.status?(p.a.success("User verified redirecting to Login"),e.history.push("/login")):L.data.message?p.a.error(L.data.message):p.a.error("Exception while verifying user"),a.next=10;break;case 8:p.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:o="Verified, Please login!!";case 11:case"end":return a.stop()}}))}()}),[]),n.a.createElement(ne.a,{className:"parallax"},n.a.createElement(ge,{defaultSelectedKeys:["1"],isLoggedIn:"false"}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"720px"}},n.a.createElement(l,null,"  ",o," ")),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}));var Be=Object(Y.b)(I,{setUserDetailsToStore:Q,emtStores:J})(Object(c.withRouter)((function(e){Object(r.useEffect)((function(){T()&&e.setUserDetailsToStore(null,G)}),[]),Object(r.useEffect)((function(){e.user.error&&(e.emtStores(),k())}));var t=function(){return e.user&&e.user.username&&e.user.email&&T()};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.Switch,{location:e.location},n.a.createElement(c.Route,{exact:!0,path:"/",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(he,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/faq",render:function(){return n.a.createElement(fe,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/login",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(we,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/logout",render:function(){return t()?n.a.createElement(Fe,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/home",render:function(){return t()?n.a.createElement(Ne,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/accounts",render:function(){return t()?n.a.createElement(Ae,null):n.a.createElement(c.Redirect,{to:"/"})}}),n.a.createElement(c.Route,{exact:!0,path:"/forgotpassword",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(_e,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/resetPassword",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(qe,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/verifyuser",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(ze,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/signup",render:function(){return t()?n.a.createElement(c.Redirect,{to:"/home"}):n.a.createElement(ee,null)}}),n.a.createElement(c.Route,{exact:!0,path:"/pagenotfound",render:function(){return n.a.createElement(Pe,null)}}),n.a.createElement(c.Route,{render:function(){return n.a.createElement(c.Redirect,{to:"/pagenotfound"})}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=a(68),Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CONFIG_INIT"===t.type?t.data:"CONFIG_ADD"===t.type?e.concat(t.data):e},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("user action",t),t.type){case H:return console.log("user action init",t),t.data;case K:return t.data;case W:return[];default:return e}},Ge=a(231),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("FILES_INIT"===t.type)return console.log("action",t),t.data;if("FILES_ADD"===t.type)return e.concat(t.data);if("FILES_DEL"===t.type){var a=e.filter((function(e){return e.id!==t.data}));return a}return t.type===W?[]:e},Ve=a(232),Je=Object(He.combineReducers)({serverConfig:Ke,user:We,files:Me}),Qe=Object(He.createStore)(Je,Object(Ve.composeWithDevTools)(Object(He.applyMiddleware)(Ge.a)));o.a.render(n.a.createElement(de.a,null,n.a.createElement(Y.a,{store:Qe},n.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[236,1,2]]]);
//# sourceMappingURL=main.659cc53f.chunk.js.map