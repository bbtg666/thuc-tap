(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,a,t){e.exports=t(315)},159:function(e,a,t){},164:function(e,a){},166:function(e,a){},205:function(e,a){},206:function(e,a){},287:function(e,a,t){},315:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(38),i=t.n(r),o=(t(159),t(34)),c=t(35),s=(t(160),t(22)),m=t(23),u=t(26),h=t(24),d=t(9),p=t(25),g=t(316),b=t(317),E=t(318),v=t(319),f=t(320),O=t(321),w=t(322),j=t(334),k=t(323),C=t(324),y=t(325),S=t(145),N=t.n(S),H=t(6),x=t.n(H),P=t(39),I=t.n(P),T=t(85),A=t.n(T);A.a.initializeApp({apiKey:"AIzaSyAXG99GnIM79e59KdBIkBADaOqL02PSGTo",authDomain:"locationgps-8240b.firebaseapp.com",databaseURL:"https://locationgps-8240b.firebaseio.com",projectId:"locationgps-8240b",storageBucket:"locationgps-8240b.appspot.com",messagingSenderId:"825049450783",appId:"1:825049450783:web:3dccde4ca18557f2"});var L=A.a,z=(t(287),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).toggle=t.toggle.bind(Object(d.a)(t)),t.state={isOpen:!1,title:"\u0110\u0103ng nh\u1eadp",isLogin:0},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"Logout",value:function(){I.a.defaults.headers.common.Authorization="",L.database().ref("islogin").set(0),sessionStorage.clear()}},{key:"componentDidMount",value:function(){var e=this;L.database().ref("/islogin").on("value",function(a){e.setState({isLogin:a.val()})})}},{key:"render",value:function(){return l.a.createElement("div",{style:{color:"#333"}},l.a.createElement(g.a,{color:"light",light:!0,expand:"md"},l.a.createElement(b.a,null,l.a.createElement(E.a,{style:{margin:"0px",padding:"0px"}},l.a.createElement("div",{className:""},l.a.createElement(o.b,{className:"d-flex navbar-brand ",to:"/"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/854/854878.svg",alt:"icon",width:"32",height:"32",className:"ml-3"}))))),l.a.createElement(v.a,{onClick:this.toggle}),l.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(O.a,{className:"ml-auto",navbar:!0},l.a.createElement(w.a,null,l.a.createElement(E.a,null,l.a.createElement(o.b,{to:"/live"},"Live"))),l.a.createElement(w.a,null,l.a.createElement(E.a,null,l.a.createElement(o.b,{to:"/aboutus"},"About me"))),l.a.createElement(j.a,{nav:!0,inNavbar:!0,className:x()({hidden:0===this.state.isLogin})},l.a.createElement(k.a,{nav:!0,caret:!0,style:{color:"#000"}},sessionStorage.getItem("user")?N.a.decode(sessionStorage.getItem("user"),"giang").name:""),l.a.createElement(C.a,{right:!0},l.a.createElement(y.a,{onClick:this.Logout},"\u0110\u0103ng xu\u1ea5t"))),l.a.createElement(w.a,{className:x()({hidden:1===this.state.isLogin})},l.a.createElement(E.a,null,l.a.createElement(o.b,{to:"/login"},"\u0110\u0103ng nh\u1eadp")))))))}}]),a}(l.a.Component)),q=t(44),B=t.n(q),D=t(61),M=t(330),G=t(331),J=t(332),W=t(333),K=t(326),R=t(327),V=t(328),Y=t(329),U=t(152),X=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleSubmit=function(){var e=Object(D.a)(B.a.mark(function e(a){var n;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:t.state.email,password:t.state.password,phone:t.state.phone,name:t.state.name},e.next=4,I.a.post("http://52.246.162.234:4000/user/register",n,{headers:{"Content-Type":"application/json"}});case 4:"failed"===e.sent.data.result?alert("Email \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ho\u1eb7c l\u1ed7i h\u1ec7 th\u1ed1ng!!!!"):alert("B\u1ea1n \u0111\xe3 \u0111\u0103ng k\xed th\xe0nh c\xf4ng!!");case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.HandleNameChange=t.HandleNameChange.bind(Object(d.a)(t)),t.HandlePhoneChange=t.HandlePhoneChange.bind(Object(d.a)(t)),t.HandleEmailChange=t.HandleEmailChange.bind(Object(d.a)(t)),t.HandlePasswordChange=t.HandlePasswordChange.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.state={activeTab:"1",email:"",password:"",name:"",phone:""},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"HandleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"HandlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"HandleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"HandlePhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"render",value:function(){return l.a.createElement(K.a,{className:"m-3 col-8 col-sm-4s col-xl-3",onSubmit:this.handleSubmit},l.a.createElement(R.a,null,l.a.createElement(V.a,{for:"name"},"T\xean"),l.a.createElement(Y.a,{type:"text",name:"name",id:"name",placeholder:"Nh\u1eadp t\xean",onChange:this.HandleNameChange})),l.a.createElement(R.a,null,l.a.createElement(V.a,{for:"name"},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),l.a.createElement(Y.a,{type:"tel",name:"phone",id:"phone",placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:this.HandlePhoneChange,required:!0})),l.a.createElement(R.a,null,l.a.createElement(V.a,{for:"newEmail"},"Email"),l.a.createElement(Y.a,{type:"email",name:"email",id:"newEmail",placeholder:"abc@xxx.com",onChange:this.HandleEmailChange,required:!0})),l.a.createElement(R.a,null,l.a.createElement(V.a,{for:"newPw1"},"M\u1eadt kh\u1ea9u"),l.a.createElement(Y.a,{type:"password",name:"newPw1",id:"pw1",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u",onChange:this.HandlePasswordChange,required:!0})),l.a.createElement(U.a,null,"\u0110\u0103ng k\xed"))}}]),a}(l.a.Component),$=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleSubmit=function(){var e=Object(D.a)(B.a.mark(function e(a){var n,l;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:t.state.email,password:t.state.password},e.next=4,I.a.post("http://52.246.162.234:4000/user/signin",n,{headers:{"Content-Type":"application/json"}});case 4:(l=e.sent).data.token&&(sessionStorage.setItem("user",l.data.token),I.a.defaults.headers.common.Authorization="JWT ".concat(l.data.token),L.database().ref("islogin").set(1),t.props.history.push("/")),"failed"===l.data.message&&alert("T\xe0i kho\u1ea3n m\u1eadt kh\u1ea9u kh\xf4ng ch\xednh x\xe1c!!!");case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.HandleEmailChange=t.HandleEmailChange.bind(Object(d.a)(t)),t.HandlePasswordChange=t.HandlePasswordChange.bind(Object(d.a)(t)),t.toggle=t.toggle.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t.state={activeTab:"1",email:"",password:""},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"HandleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"HandlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(O.a,{tabs:!0},l.a.createElement(w.a,null,l.a.createElement(E.a,{className:x()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"\u0110\u0103ng nh\u1eadp")),l.a.createElement(w.a,null,l.a.createElement(E.a,{className:x()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"\u0110\u0103ng k\xed"))),l.a.createElement(M.a,{activeTab:this.state.activeTab},l.a.createElement(G.a,{tabId:"1"},l.a.createElement(J.a,null,l.a.createElement(W.a,{sm:"12"},l.a.createElement("div",{className:"m-3 col-8 col-sm-4 col-xl-3"},l.a.createElement(K.a,{className:"",onSubmit:this.handleSubmit},l.a.createElement(R.a,{className:"mb-2 mr-sm-2 mb-sm-0 "},l.a.createElement(V.a,{for:"Email",className:"mr-sm-2 "},"Email"),l.a.createElement(Y.a,{type:"email",name:"email",id:"Email",placeholder:"abc@gmail.com",onChange:this.HandleEmailChange,required:!0})),l.a.createElement(R.a,{className:"mb-2 mr-sm-2 mb-sm-0 mt-3"},l.a.createElement(V.a,{for:"examplePassword",className:"mr-sm-2"},"Password"),l.a.createElement(Y.a,{type:"password",name:"password",onChange:this.HandlePasswordChange,id:"examplePassword",placeholder:"Nh\u1eadt m\u1eadt kh\u1ea9u",required:!0})),l.a.createElement(U.a,{className:"mt-3",style:{width:"120px"}},"\u0110\u0103ng nh\u1eadp")))))),l.a.createElement(G.a,{tabId:"2"},l.a.createElement(J.a,null,l.a.createElement(W.a,{sm:"12"},l.a.createElement(X,null))))))}}]),a}(l.a.Component),_=t(65),F={width:"100%",height:"80%",margin:"10px auto"},Q=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).state={latlng:{lat:10.783921241760254,lng:106.70357513427734}},e}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.database().ref("/Location").on("value",function(a){e.setState({latlng:a.val()})})}},{key:"render",value:function(){var e=this.state.latlng,a=this.props.google;return l.a.createElement(_.Map,{google:this.props.google,zoom:20,style:F,center:{lat:e.lat,lng:e.lng}},l.a.createElement(_.Marker,{position:{lat:e.lat,lng:e.lng},icon:{url:"https://image.flaticon.com/icons/svg/64/64339.svg",anchor:new a.maps.Point(10,10),scaledSize:new a.maps.Size(24,24)}}))}}]),a}(n.Component),Z=Object(_.GoogleApiWrapper)({apiKey:"AIzaSyAVJIlizheg-Yo8usY_OnRl5nEgvpa8OVA"})(Q),ee=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(Z,null))}}]),a}(l.a.Component),ae=t(153);var te=function(e){var a=e.component,t=Object(ae.a)(e,["component"]);return l.a.createElement(c.b,Object.assign({},t,{render:function(e){return sessionStorage.getItem("user")?l.a.createElement(a,e):l.a.createElement(c.a,{to:{pathname:"/login"}})}}))},ne=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,"this is list aboutus"))}}]),a}(l.a.Component);function le(){return l.a.createElement("h1",null,"Home")}var re=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(z,null),l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/",exact:!0,component:le}),l.a.createElement(te,{component:ee,path:"/live"}),l.a.createElement(c.b,{path:"/aboutus",exact:!0,component:ne}),l.a.createElement(c.b,{path:"/login",exact:!0,component:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,1,2]]]);
//# sourceMappingURL=main.b0f1a9b1.chunk.js.map