(this.webpackJsonpgameclient=this.webpackJsonpgameclient||[]).push([[0],{256:function(e,t,a){a(257),e.exports=a(538)},273:function(e,t,a){},274:function(e,t,a){},427:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){},532:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),o=a.n(l),s=(a(273),a(59)),c=(a(274),a(9)),i=a.n(c),u=a(32),m=a(23),p=a(4),d=a(39),g=a(30),h=a(21),E=a(26),f=a(68),y=a(40),v=a.n(y);function b(e,t,a){var r=new Date;a||(a=30),r.setTime(r.getTime()+24*a*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function w(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),r=0;r<a.length;r++){for(var n=a[r];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}function x(e){document.cookie=e+"= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/"}var k=function(e){if(!(e.user&&e.authtoken&&e.user.username&&e.user.email))throw"data not found";var t;(t=e.authtoken)&&b("token",t,1),b("username",e.user.username,1),b("email",e.user.email,1)},R=function(){x("token"),x("username"),x("email")},T=function(){return{headers:{Authorization:"Token "+w("token")}}},S=function(){var e=w("token");return e||void 0},I=function(e){return{user:e.user,serverConfig:e.serverConfig,files:e.files}};a(292).config(),console.log("server url",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_DEVELOPMENT_SERVER_URL:"http://localhost:8000/api/v1/",REACT_APP_PRODUCTION_SERVER_URL:"https://filesec.herokuapp.com/api/v1/",REACT_APP_TEST_STRIPE_PK:"pk_test_9radQ2WXLrFFlDGV0XqNMUkw00PoyDNs29",REACT_APP_PRODUCTION_STRIPE_PK:"pk_live_iyPbhH04G2xJnlJwIi4gCQPi00y2HagUM9"}));O="http://localhost:8000/api/v1/";var O,j=O+"iam/signup",C=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post(j,e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},F=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/iam/logout",{signout:!0},T()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},N=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("loginData ",e),a.prev=1,a.next=4,i.a.awrap(v.a.post("http://localhost:8000/api/v1/iam/login",e));case 4:return t=a.sent,a.abrupt("return",t);case 8:return a.prev=8,a.t0=a.catch(1),a.abrupt("return",a.t0.response);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},P=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.get("http://localhost:8000/api/v1/iam/accounts",T()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},D=function(e,t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(v.a.get(j+"/exist?"+e+"="+t,null));case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0.response);case 10:case"end":return r.stop()}}),null,null,[[0,7]])},A=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/forgotpassword",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},L=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/forgotpassword/verifykey?token="+e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},U=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/resetpass",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},_=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/verifyuser",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},q=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.post("http://localhost:8000/api/v1/app/files",e,T()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},z=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.get("http://localhost:8000/api/v1/app/files",T()));case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0.response);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},B=function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(v.a.delete("http://localhost:8000/api/v1/app/files/"+e,T()));case 3:return t=a.sent,a.abrupt("return",t);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0.response);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},H=function(e,t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(v.a.request({url:"http://localhost:8000/api/v1/file/download/"+e,method:"POST",headers:T().headers,data:{key:t},responseType:"blob"}));case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",r.t0.response);case 10:case"end":return r.stop()}}),null,null,[[0,7]])},K="FILES_INIT",W="USER_INIT",M="USER_ERROR",G="EMT_STORE",V=1,J=2,Q=3,Y=function(){return{type:G}},X=function(e,t){return function(a){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=null,t!==Q){n.next=7;break}return n.next=4,i.a.awrap(N(e));case 4:r=n.sent,n.next=17;break;case 7:if(t!==V){n.next=13;break}return n.next=10,i.a.awrap(P());case 10:r=n.sent,n.next=17;break;case 13:if(t!==J){n.next=17;break}return n.next=16,i.a.awrap(C(e));case 16:r=n.sent;case 17:r&&200===r.status||t===J&&r&&(201===r.status||200===r.status)?t===Q||t===J?(k(r.data),a({type:W,data:r.data.user})):a({type:W,data:r.data}):r&&r.data&&r.data.detail&&a({type:M,data:{error:{code:r.code,detail:r.data.detail}}});case 18:case"end":return n.stop()}}))}},$=a(25),Z=Object($.b)(I,{setUserDetailsToStore:X,emtStores:Y})(Object(s.withRouter)(m.a.create({name:"Signup"})((function(e){var t=E.a.Title,a=e.form,l=a.getFieldDecorator,o=a.getFieldsError,s=a.getFieldError,c=a.isFieldTouched,y=Object(r.useState)(!1),v=Object(u.a)(y,2),b=v[0],x=v[1],k=Object(r.useState)(c("email")&&s("email")),R=Object(u.a)(k,2),T=R[0],S=R[1],I=Object(r.useState)(c("email")&&s("email")),O=Object(u.a)(I,2),j=O[0],C=O[1],F=c("password")&&s("password"),N=c("plan")&&s("plan"),P=f.a.Option;Object(r.useEffect)((function(){e.form.validateFields()}),[]),Object(r.useEffect)((function(){e.user&&e.user.username&&e.user.email&&w("token")?(h.a.success("welcome "+e.user.username+" !"),x(!1),e.history.push("/home")):e.user.error?(h.a.error(e.user.error.message),x(!1),e.emtStores()):x(!1)}),[e.user]);var A,L=function(e,t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.target.value){r.next=6;break}return r.next=3,i.a.awrap(D(t,e.target.value));case 3:a=r.sent,console.log("exist ",a),200!==a.status?"email"===t?S(!1):C(!1):"email"===t?S("email-ID already exist"):C("username already exist");case 6:case"end":return r.stop()}}))};return n.a.createElement("div",null,n.a.createElement(t,{style:{color:"white"},level:3},"Sign-up"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),x(!0),e.form.validateFields((function(t,a){return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t||(console.log("values",a),e.setUserDetailsToStore(a,J));case 1:case"end":return r.stop()}}))}))},className:"login-form"},n.a.createElement(m.a.Item,{validateStatus:j?"error":"",help:j||""},l("username",{rules:[{required:!0,message:"Please input username"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"UserName",onBlur:function(e){return L(e,"username")}}))),n.a.createElement(m.a.Item,{validateStatus:T?"error":"",help:T||""},l("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email",onBlur:function(e){return L(e,"email")}}))),n.a.createElement(m.a.Item,{validateStatus:F?"error":"",help:F||""},l("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,{validateStatus:N?"error":"",help:N||""},l("plan",{rules:[{required:!0,message:"Please select a plan"}]})(n.a.createElement(f.a,{size:"large",placeholder:"select your plan"},n.a.createElement(P,{value:"planA"},"plan A, 8 User, 3USD/month"),n.a.createElement(P,{value:"planB"},"plan B, 12 User, 5USD/month")))),n.a.createElement(m.a.Item,null,n.a.createElement("br",null),n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",disabled:(A=o(),console.log("fieldError",A),Object.keys(A).some((function(e){return A[e]}))),loading:b},!b&&"Start Your Free Trial",b&&"Signing You In"))))})))),ee=a(135),te=a(20),ae=a(13),re=a(18),ne=a(69),le=a(107),oe=a(27),se=a(244),ce=a(245),ie=a.n(ce),ue=(a(427),a(62)),me=a(92),pe=a(33),de=Object($.b)(I,{})(Object(s.withRouter)((function(e){var t=re.a.Header;console.log("header",e);var a=function(){return e.user&&e.user.username&&e.user.email&&S()},r=n.a.createElement(ue.a,{theme:a()?"light":"dark",mode:!a()&&"horizontal",defaultSelectedKeys:e.defaultSelectedKeys,className:!a()&&"header",style:{lineHeight:"64px",maxWidth:"200px"}},!a()&&n.a.createElement(ue.a.Item,{key:"1",style:{minWidth:"100px"},onClick:function(){return e.history.push("/login")}},"LOGIN"),n.a.createElement(ue.a.Item,{key:"2",style:{minWidth:"100px"},onClick:function(){return e.history.push("/faq")}},"FAQ"),a()&&n.a.createElement(ue.a.Divider,null),a()&&n.a.createElement(ue.a.Item,{key:"3",style:{minWidth:"100px",color:"red"},onClick:function(){return e.history.push("/logout")}},"Logout"));return n.a.createElement(t,{style:{position:"fixed",zIndex:1,width:"100%",background:"rgba(2, 164, 255, 0.7)"}},n.a.createElement(pe.b,{to:"/"}," ",n.a.createElement("div",{className:"logo"})),n.a.createElement(te.a,{type:"flex",justify:"end",align:"top"},n.a.createElement(ae.a,null,!a()&&r,a()&&n.a.createElement(n.a.Fragment,null,n.a.createElement(ne.a,{shape:"square",size:"large",style:{margin:10,backgroundColor:"rgb(57, 224, 89)",verticalAlign:"middle"}}," ",e.user.username[0].toUpperCase()),n.a.createElement(me.a.Button,{size:"large",overlay:r,onClick:function(){return e.history.push("/accounts")}},"Account")))))}))),ge=ie()((function(e){var t=re.a.Content,a=re.a.Footer,r=E.a.Title,l=E.a.Paragraph;return n.a.createElement(re.a,{className:"parallax"},n.a.createElement(de,null),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"1020px"}},n.a.createElement(te.a,{style:{minHeight:"720px"}},n.a.createElement(ae.a,{span:16},n.a.createElement(se.a,{dotPosition:"left",autoplay:!0,style:{margin:15,marginTop:30,minHeight:700,minWidth:400,opacity:.5,color:"white"}},n.a.createElement("div",{style:{minHeight:700,minWidth:400,color:"white"}},n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")),n.a.createElement("div",null,n.a.createElement("h3",null,"we are here to tell some awesome things about our product")))),n.a.createElement(ae.a,{span:7,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Z,null))),n.a.createElement(te.a,{style:Object(ee.a)({minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"rgba(2, 164, 255, 0.7)",padding:0},"margin",0)},n.a.createElement(ae.a,null,n.a.createElement(te.a,{type:"flex",justify:"center",style:{paddingBottom:"8px",paddingTop:"5px"}},n.a.createElement(ae.a,null,n.a.createElement(r,{level:2,style:{color:"white"}},"Why Us?"))),n.a.createElement(te.a,{type:"flex",justify:"space-between",style:{marginLeft:"15px",marginRight:"15px"}},n.a.createElement(ae.a,{span:6,className:"alignCenter"},n.a.createElement(ne.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(ae.a,{span:6,className:"alignCenter"},n.a.createElement(ne.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(ae.a,{span:6,className:"alignCenter"},n.a.createElement(ne.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(ae.a,{span:6,className:"alignCenter"},n.a.createElement(ne.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me")),n.a.createElement(ae.a,{span:6,className:"alignCenter"},n.a.createElement(ne.a,{shape:"square",size:64,icon:"user",style:{marginBottom:10}}),n.a.createElement(r,{level:4,style:{color:"white"}},"Title"),n.a.createElement(l,{style:{color:"white"}},"we are paragraph write someThing about me"))))),n.a.createElement(te.a,{style:{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px"}},n.a.createElement(ae.a,null,n.a.createElement(r,{className:"alignCenter",style:{color:"white"}},"Pricing"),n.a.createElement(te.a,{style:{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}},n.a.createElement(ae.a,{span:6},n.a.createElement(le.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 1"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(oe.a,{style:{color:"white"}},n.a.createElement(oe.a.Item,null,"value1"),n.a.createElement(oe.a.Item,null,"value2"),n.a.createElement(oe.a.Item,null,"value3"),n.a.createElement(oe.a.Item,null,"value4")))),n.a.createElement(ae.a,{span:6},n.a.createElement(le.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 2"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(oe.a,{style:{color:"white"}},n.a.createElement(oe.a.Item,null,"value1"),n.a.createElement(oe.a.Item,null,"value2"),n.a.createElement(oe.a.Item,null,"value3"),n.a.createElement(oe.a.Item,null,"value4")))),n.a.createElement(ae.a,{span:6},n.a.createElement(le.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 3"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(oe.a,{style:{color:"white"}},n.a.createElement(oe.a.Item,null,"value1"),n.a.createElement(oe.a.Item,null,"value2"),n.a.createElement(oe.a.Item,null,"value3"),n.a.createElement(oe.a.Item,null,"value4")))),n.a.createElement(ae.a,{span:6},n.a.createElement(le.a,{title:n.a.createElement(r,{level:4,className:"alignCenter",style:{color:"rgb(2, 2, 40)"}},"PRICE 4"),style:{width:350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"},headStyle:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(oe.a,{style:{color:"white"}},n.a.createElement(oe.a.Item,null,"value1"),n.a.createElement(oe.a.Item,null,"value2"),n.a.createElement(oe.a.Item,null,"value3"),n.a.createElement(oe.a.Item,null,"value4")))))))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),he=a(179),Ee=(a(443),function(e){var t=re.a.Content,a=re.a.Footer,r=he.a.Panel,l=E.a.Title,o=n.a.createElement("p",{style:{paddingLeft:24}},"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");return n.a.createElement(re.a,{className:"parallax layout-bg"},n.a.createElement(de,{defaultSelectedKeys:["2"]}),n.a.createElement(t,{style:Object(ee.a)({padding:"0 0 0 0px",marginTop:64,minHeight:"1020px",marginLeft:"80px",marginRight:"80px"},"marginTop","120px")},n.a.createElement(l,{className:"alignCenter",style:{color:"white"}},"FAQ"),n.a.createElement(he.a,{bordered:!1,defaultActiveKey:["1"],style:{backgroundColor:"rgb(5, 163, 255)",color:"white"}},n.a.createElement(r,{header:"This is panel header 1",key:"1",style:{color:"white"}},o),n.a.createElement(r,{header:"This is panel header 2",key:"2"},o),n.a.createElement(r,{header:"This is panel header 3",key:"3"},o))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}),fe=Object($.b)(I,{setUserDetailsToStore:X})(Object(s.withRouter)(m.a.create({name:"Login"})((function(e){Object(r.useEffect)((function(){e.form.validateFields()}),[]),Object(r.useEffect)((function(){e.user.username&&e.user.email&&w("token")?(h.a.success("welcome "+e.user.username+" !"),e.history.push("/")):e.user.error&&h.a.error(e.user.error.detail),o(!1)}),[e.user]);var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],s=e.form,c=s.getFieldDecorator,f=(s.getFieldsError,s.getFieldError),y=s.isFieldTouched,v=y("email")&&f("email"),b=y("password")&&f("password"),x=E.a.Title;return n.a.createElement("div",null,n.a.createElement(x,{level:3,style:{color:"white"}},"Login"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("type",o),o(!0),e.form.validateFields((function(t,a){return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t||e.setUserDetailsToStore(a,Q);case 1:case"end":return r.stop()}}))}))},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(m.a.Item,{validateStatus:v?"error":"",help:v||""},c("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"}))),n.a.createElement(m.a.Item,{validateStatus:b?"error":"",help:b||""},c("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,null,n.a.createElement("br",null),n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Login",l&&"Loging You In"))),n.a.createElement(te.a,null,n.a.createElement(ae.a,{span:12,style:{color:"white"}},n.a.createElement(pe.b,{to:"/",style:{color:"white"}},n.a.createElement(p.a,{type:"left",style:{color:"#1890ff"}}),"Signup")),n.a.createElement(ae.a,{span:12},n.a.createElement(pe.b,{to:"/forgotpassword",style:{color:"white"}},"Forgot password ",n.a.createElement(p.a,{type:"right",style:{color:"#1890ff"}})))))})))),ye=function(e){var t=re.a.Content,a=re.a.Footer;return n.a.createElement(re.a,{className:"layout-bg"},n.a.createElement(de,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(te.a,{className:"alignCenter"},n.a.createElement(ae.a,{span:8}),n.a.createElement(ae.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(fe,null)),n.a.createElement(ae.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},ve=a(137),be=a(136),we=a(253),xe=(a(444),we.a.Dragger),ke=Object($.b)(null,{updateFilesToStore:function(e){return e.key=e.id,{type:"FILES_ADD",data:e}}})((function(e){var t={name:"file",multiple:!1,action:"#",showUploadList:!1,onChange:function(e){console.log("FILE",e.file),e.file&&(s(e.file),E(!0))},beforeUpload:function(){return!1},onSubmit:function(e){console.log("iam in submit"),e.preventDefault()}},a=Object(r.useState)(null),l=Object(u.a)(a,2),o=l[0],s=l[1],c=Object(r.useState)(!1),m=Object(u.a)(c,2),g=m[0],E=m[1],f=Object(r.useState)(null),y=Object(u.a)(f,2),v=y[0],b=y[1];return n.a.createElement("div",{className:"col-md-6",style:{backgroundColor:"rgb(57, 224, 89)"}},n.a.createElement(xe,t,n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(p.a,{type:"inbox"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),n.a.createElement(be.a,{title:"please Enter your entryption key",visible:g,onOk:function(t){var a,r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),(a=new FormData).append("file",o),a.append("key",v),n.next=6,i.a.awrap(q(a));case 6:200===(r=n.sent).status?e.updateFilesToStore(r.data):r.data.message?h.a.error(r.data.message):h.a.error("exception while uploading,please try again later"),E(!1),s(null),b(null);case 11:case"end":return n.stop()}}))},onCancel:function(e){console.log(e),E(!1),s(null),b(null)}},n.a.createElement(d.a,{type:"text",placeholder:"Encryption Key",value:v,onChange:function(e){console.log("value",e.target.value),b(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to encrypt your data")))})),Re=a(252),Te=a(248),Se=Object($.b)(null,{deleteFromStore:function(e){return{type:"FILES_DEL",data:e}}})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],s=Object(r.useState)(null),c=Object(u.a)(s,2),m=c[0],p=c[1],g=Object(r.useState)(null),E=Object(u.a)(g,2),f=E[0],y=E[1],v=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return n.a.createElement("a",{style:{color:"black"}},e)}},{title:"Action",key:"action",render:function(e,t){return n.a.createElement("span",null,n.a.createElement("a",{style:{color:"black"},onClick:function(){return b(t)}},"Download "),n.a.createElement(Te.a,{type:"vertical",style:{color:"black"}}),n.a.createElement("a",{style:{color:"black"},onClick:function(){return w(t.key)}},"Delete"))}}],b=function(e){o(!0),p(e)},w=function(t){var a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(B(t));case 2:200===(a=r.sent).status?e.deleteFromStore(t):a.data&&a.data.message?h.a.error(a.data.message):h.a.error("Exception while deleting the file, Please try again later");case 4:case"end":return r.stop()}}))};return n.a.createElement("div",null,n.a.createElement(Re.a,{columns:v,dataSource:e.data}),n.a.createElement(be.a,{title:"please Enter your decryption key",visible:l,onOk:function(){return function(e){var t,a,r,n,l;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.key,s.next=3,i.a.awrap(H(t,f));case 3:a=s.sent,y(null),200===a.status?(r=a.data,n=window.URL.createObjectURL(new Blob([r])),(l=document.createElement("a")).href=n,l.setAttribute("download",e.name),document.body.appendChild(l),l.click(),l.remove()):a.data&&a.data.message?h.a.error(a.data.message):h.a.error("Exception while downloading the file"),o(!1);case 7:case"end":return s.stop()}}))}(m)},onCancel:function(e){console.log(e),o(!1),y(null)}},n.a.createElement(d.a,{type:"text",placeholder:"Decryption Key",value:f,onChange:function(e){console.log("value",e.target.value),y(e.target.value)}}),n.a.createElement("p",null,"we will use this key along with our own random private key to decrypt your data")))})),Ie=Object($.b)(I,{listFiles:function(){return function(e){var t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(z());case 2:200===(t=a.sent).status&&(t.data.map((function(e){e.key=e.id})),e({type:K,data:t.data}));case 4:case"end":return a.stop()}}))}}})((function(e){var t=re.a.Content,a=re.a.Footer;return Object(r.useEffect)((function(){e.listFiles()}),[]),n.a.createElement(re.a,{className:"parallax layout-bg"},console.log("files in store ",e.files),n.a.createElement(de,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{marginTop:64,minHeight:"720px",padding:20}},n.a.createElement(te.a,{style:{margin:20,marginLeft:100,marginRight:100}},n.a.createElement(ae.a,{span:16},n.a.createElement(ke,null)),n.a.createElement(ae.a,{span:6,className:"App",style:{color:"white",padding:"20px",margin:20}},n.a.createElement(ve.a,{type:"dashboard",percent:75,status:"active",style:{color:"white"}}))),n.a.createElement(te.a,{style:{backgroundColor:"rgb(5, 163, 255)",marginLeft:50,marginRight:50}},n.a.createElement(ae.a,null,n.a.createElement(Se,{data:e.files})))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))})),Oe=(a(532),Object(s.withRouter)(Object($.b)(null,{emtStores:Y})((function(e){var t=!1;return Object(r.useEffect)((function(){!function(){var a;i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(F());case 2:a=r.sent,[200,204].includes(a.status)?(e.emtStores(),R(),e.history.push("/")):t=!0;case 4:case"end":return r.stop()}}))}()})),n.a.createElement("div",null,!t&&n.a.createElement(E.a.Title,{className:"center blink_me"}," signing you out !!!"),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a.Title,null," ohh!!, we encountered a exception while signing you out"),"  ",n.a.createElement(E.a.Paragraph,null,"If the Exception persist please contact the support")))})))),je=(a(533),a(236),a(535),function(e){var t=re.a.Content,a=re.a.Footer;return n.a.createElement(re.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg"}},n.a.createElement(de,{defaultSelectedKeys:["1"],isLoggedIn:"true"}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"720px"}},n.a.createElement(te.a,null,n.a.createElement(ae.a,{span:6,style:{borderRight:"5px solid green",minHeight:"720px"}},n.a.createElement(te.a,null,"USER")),n.a.createElement(ae.a,{span:18}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}),Ce=(a(537),function(e){return console.log("not found"),n.a.createElement("div",{id:"notfound"},n.a.createElement("div",{class:"notfound"},n.a.createElement("div",{class:"notfound-404"},n.a.createElement("h1",null,"Oops!"),n.a.createElement("h2",null,"404 - The Page can't be found")),n.a.createElement(pe.b,{to:"/"},"Go TO Homepage")))}),Fe=Object($.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(s.withRouter)(m.a.create({name:"forgotpassword"})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],s=e.form,c=s.getFieldDecorator,f=(s.getFieldsError,s.getFieldError),y=s.isFieldTouched;Object(r.useEffect)((function(){e.form.validateFields()}),[]);var v=y("email")&&f("email"),b=E.a.Title,w=E.a.Paragraph;return n.a.createElement("div",null,n.a.createElement(b,{level:3,style:{color:"white"}},"Forgot Password"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("type",o),o(!0),e.form.validateFields((function(t,a){var r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return n.next=3,i.a.awrap(A(a));case 3:(r=n.sent)&&200===r.status?(h.a.success("password reset link has been sent to your registered mail-id"),o(!1),e.history.push("/")):(r.data.message?h.a.error(r.data.message):h.a.error("Exception while Signing-in "),o(!1));case 5:case"end":return n.stop()}}))}))},className:"login-form"},console.log("from return",e.user.username),n.a.createElement(m.a.Item,{validateStatus:v?"error":"",help:v||""},c("email",{rules:[{required:!0,message:"Please input mailID"},{type:"email",message:"Please enter the proper E-Mail ID"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"large",placeholder:"Email"}))),n.a.createElement(m.a.Item,null,n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Sent password reset link",l&&"sending password reset link"))),n.a.createElement(pe.b,{to:"/login"},n.a.createElement(p.a,{type:"arrow-left"}),n.a.createElement(w,{style:{color:"white"}}," Back to Login")))})))),Ne=function(e){var t=re.a.Content,a=re.a.Footer;return n.a.createElement(re.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(de,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(te.a,{className:"alignCenter"},n.a.createElement(ae.a,{span:8}),n.a.createElement(ae.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Fe,null)),n.a.createElement(ae.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},Pe=Object($.b)(I,{setUserDetailsToStore:function(e){return{type:"USER_INIT",data:e}}})(Object(s.withRouter)(m.a.create({name:"resetPassword"})((function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),l=a[0],o=a[1],s=e.form,c=s.getFieldDecorator,f=s.getFieldError,y=(0,s.isFieldTouched)("password")&&f("password"),v=E.a.Title;Object(r.useEffect)((function(){e.form.validateFields(),function(){var t,a;i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){r.next=8;break}return r.next=4,i.a.awrap(L(t.split("=")[1]));case 4:200===(a=r.sent).status&&a.data.status||(h.a.error("invalid token redirecting to home page"),e.history.push("/")),r.next=10;break;case 8:h.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:case"end":return r.stop()}}))}()}),[]);return n.a.createElement("div",null,n.a.createElement(v,{level:3,style:{color:"white"}},"Reset Password"),n.a.createElement("br",null),n.a.createElement(m.a,{onSubmit:function(t){t.preventDefault(),console.log("sumbit"),e.form.validateFields((function(t,a){var r,n;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(console.log("values ",a),t){l.next=13;break}if(o(!0),console.log("Received values of form: ",a),!(r=e.location.search).includes("token=")||r.includes("&")||!r.split("=")[1]){l.next=12;break}return l.next=8,i.a.awrap(U({token:r.split("=")[1],password:a.password}));case 8:(n=l.sent)&&200===n.status?(console.log("data =>",e.user),h.a.success("Your password changed please login "),o(!1),e.history.push("/login")):(console.log("login Response",n),h.a.error("Exception while resetting your password"),o(!1)),l.next=13;break;case 12:h.a.error("Exception while resetting your password");case 13:case"end":return l.stop()}}))}))},className:"login-form"},n.a.createElement(m.a.Item,{validateStatus:y?"error":"",help:y||""},c("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(d.a,{prefix:n.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"large",type:"password",placeholder:"Password"}))),n.a.createElement(m.a.Item,null,n.a.createElement(g.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button",loading:l},!l&&"Reset Password",l&&"Resetting Password"))),n.a.createElement(pe.b,{className:"login-form-forgot",to:"/forgotpassword"},"Forgot password"))})))),De=function(e){var t=re.a.Content,a=re.a.Footer;return n.a.createElement(re.a,{className:"parallax",style:{backgroundImage:"../media/bg.jpg",height:"calc(100vw)"}},n.a.createElement(de,{defaultSelectedKeys:["1"]}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,height:"720px"}},n.a.createElement(te.a,{className:"alignCenter"},n.a.createElement(ae.a,{span:8}),n.a.createElement(ae.a,{span:8,style:{margin:"15px",marginTop:"120px",background:"rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}},n.a.createElement(Pe,null)),n.a.createElement(ae.a,{span:8}))),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))},Ae=Object(s.withRouter)((function(e){var t=re.a.Content,a=re.a.Footer,l=E.a.Title,o="Verifying User...";return Object(r.useEffect)((function(){!function(){var t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(t=e.location.search).includes("token=")||t.includes("&")||!t.split("=")[1]){a.next=8;break}return a.next=4,i.a.awrap(_({token:t.split("=")[1]}));case 4:200===a.sent.status?(h.a.success("User verified redirecting to Login"),e.history.push("/login")):_.data.message?h.a.error(_.data.message):h.a.error("Exception while verifying user"),a.next=10;break;case 8:h.a.error("invalid token redirecting to home page"),e.history.push("/");case 10:o="Verified, Please login!!";case 11:case"end":return a.stop()}}))}()}),[]),n.a.createElement(re.a,{className:"parallax"},n.a.createElement(de,{defaultSelectedKeys:["1"],isLoggedIn:"false"}),n.a.createElement(t,{style:{padding:"0 0 0 0px",marginTop:64,minHeight:"720px"}},n.a.createElement(l,null,"  ",o," ")),n.a.createElement(a,null,n.a.createElement("div",{style:{textAlign:"left"}},"  For any enquiries, contact prabumohan96@gmail.com"),n.a.createElement("div",{style:{textAlign:"right"}}," \xa9 2020, All Rights Reserved.")))}));var Le=Object($.b)(I,{setUserDetailsToStore:X,emtStores:Y})(Object(s.withRouter)((function(e){Object(r.useEffect)((function(){S()&&e.setUserDetailsToStore(null,V)}),[]),Object(r.useEffect)((function(){e.user.error&&(e.emtStores(),R())}));var t=function(){return e.user&&e.user.username&&e.user.email&&S()};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.Switch,{location:e.location},n.a.createElement(s.Route,{exact:!0,path:"/",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(ge,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/faq",render:function(){return n.a.createElement(Ee,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/login",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(ye,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/logout",render:function(){return t()?n.a.createElement(Oe,null):n.a.createElement(s.Redirect,{to:"/"})}}),n.a.createElement(s.Route,{exact:!0,path:"/home",render:function(){return t()?n.a.createElement(Ie,null):n.a.createElement(s.Redirect,{to:"/"})}}),n.a.createElement(s.Route,{exact:!0,path:"/accounts",render:function(){return t()?n.a.createElement(je,null):n.a.createElement(s.Redirect,{to:"/"})}}),n.a.createElement(s.Route,{exact:!0,path:"/forgotpassword",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(Ne,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/resetPassword",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(De,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/verifyuser",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(Ae,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/signup",render:function(){return t()?n.a.createElement(s.Redirect,{to:"/home"}):n.a.createElement(Z,null)}}),n.a.createElement(s.Route,{exact:!0,path:"/pagenotfound",render:function(){return n.a.createElement(Ce,null)}}),n.a.createElement(s.Route,{render:function(){return n.a.createElement(s.Redirect,{to:"/pagenotfound"})}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(66),_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CONFIG_INIT"===t.type?t.data:"CONFIG_ADD"===t.type?e.concat(t.data):e},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("user action",t),t.type){case W:return console.log("user action init",t),t.data;case M:return t.data;case G:return[];default:return e}},ze=a(250),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("FILES_INIT"===t.type)return console.log("action",t),t.data;if("FILES_ADD"===t.type)return e.concat(t.data);if("FILES_DEL"===t.type){var a=e.filter((function(e){return e.id!==t.data}));return a}return t.type===G?[]:e},He=a(251),Ke=Object(Ue.combineReducers)({serverConfig:_e,user:qe,files:Be}),We=Object(Ue.createStore)(Ke,Object(He.composeWithDevTools)(Object(Ue.applyMiddleware)(ze.a)));o.a.render(n.a.createElement(pe.a,null,n.a.createElement($.a,{store:We},n.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[256,1,2]]]);
//# sourceMappingURL=main.7d58ce40.chunk.js.map