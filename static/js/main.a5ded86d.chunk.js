(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a(287)},147:function(e,t,a){},148:function(e,t,a){},286:function(e){e.exports={}},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),s=(a(147),a(29)),l=(a(148),a(115)),c=a(116),u=a(127),d=a(117),m=a(128),p=(a(2),a(55)),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={randomNumber:0},a.generateRandomNumber=function(e,t){var n=Math.floor(Math.random()*(t-e+1))+e;a.setState({randomNumber:n})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return setTimeout(this.generateRandomNumber.bind(this,1,10),3e3),console.log("numbers",this.props.store.levels),this.props.visible?r.a.createElement("div",{className:"number"},this.state.randomNumber):r.a.createElement("div",null,"trams")}}]),t}(n.Component),g=(Object(p.a)(f),a(306)),v=(a(4),a(307)),h=a(308),b=a(310),E=a(315),w=a(309),N=a(63),I=a(61),x=a(125),y=a.n(x),O=a(27),j=a(311),k=Object(g.a)(function(e){return{card:{maxWidth:345,marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:I.a[500]}}});function C(e){var t=e.store,a=k(),n=r.a.useState(!0),o=Object(s.a)(n,2),i=o[0],l=o[1];function c(e,a){var n=e.target.files[0];t.processFile(n,a,function(e){l(!i)})}var u=t.loggedIn.nextChallange;return r.a.createElement("div",{className:"game"},r.a.createElement(v.a,{key:u.level,className:a.card},r.a.createElement(h.a,{avatar:r.a.createElement(w.a,{"aria-label":"Recipe",className:a.avatar},u.level),title:u.name,subheader:u.category}),r.a.createElement(b.a,null,r.a.createElement(O.Video,{cloudName:"deolievif",publicId:u.publicId,width:"100%",height:"200px",controls:!0}),r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},u.details)),r.a.createElement(E.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.a,null,r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return c(e,u)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(j.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(y.a,null))))))))}var L=Object(g.a)(function(e){return{card:{maxWidth:345,marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:I.a[500]}}});var T=Object(p.a)(function(e){var t=e.store,a=L();return r.a.createElement("div",{className:"item-list"},t.items.map(function(e,t){return r.a.createElement(v.a,{key:e.publicId,className:a.card},r.a.createElement(h.a,{avatar:r.a.createElement(w.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(O.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),title:e.userName,subheader:e.level}),r.a.createElement(b.a,null,r.a.createElement(O.Video,{cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"200px",controls:!0})))}))});function S(e){var t=e.store,a=e.onLogin;return r.a.createElement("div",null,r.a.createElement("div",null,"Anv\xe4ndarnamn ",r.a.createElement("input",null)),r.a.createElement("div",null,"L\xf6senord ",r.a.createElement("input",{type:"password"})),r.a.createElement(j.a,{variant:"outlined",onClick:function(){t.login("gk"),a("Game")}},"LOGIN"))}var R=a(126),_=a.n(R),A=a(312),G=a(314),B=a(313),D=a(40),q=a.n(D),H=a(82),J=a.n(H),z=a(54),U=a.n(z),P=a(12);function V(e){return r.a.createElement(N.a,{component:"div",style:{padding:24}},e.children)}var X=Object(g.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}});var F=Object(P.c)(function(e){var t=e.store,a=Object(n.useState)("Login"),o=Object(s.a)(a,2),i=o[0],l=o[1],c=X(),u=r.a.useState(1),d=Object(s.a)(u,2),m=d[0],p=d[1];return"Login"===i&&r.a.createElement(S,{store:t,onLogin:l}),r.a.createElement("div",{className:c.root},r.a.createElement(A.a,{position:"fixed",color:"default"},r.a.createElement(G.a,{value:m,onChange:function(e,t){p(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary"},r.a.createElement(B.a,{label:"Fl\xf6de",icon:r.a.createElement(U.a,null)}),r.a.createElement(B.a,{label:"Utmaningar",icon:r.a.createElement(q.a,null)}),r.a.createElement(B.a,{label:"Topplista",icon:r.a.createElement(q.a,null)}),r.a.createElement(B.a,{label:t.loggedIn.userName,icon:r.a.createElement(J.a,null)}))),0===m&&r.a.createElement(V,null,r.a.createElement(T,{store:t})),1===m&&r.a.createElement(V,null,r.a.createElement(C,{store:t})),2===m&&r.a.createElement(V,null,r.a.createElement("div",{className:"profile"},"Topplista"),r.a.createElement("div",{className:"highscore"},r.a.createElement("ul",null,t.users.map(function(e,t){return r.a.createElement("li",null,e.name," - ",e.highscore)})))),3===m&&r.a.createElement(V,null,r.a.createElement("div",{className:"profile"},t.loggedIn.name,r.a.createElement(O.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(j.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(_.a,null)))))))}),M=a(21),W=a.n(M),K=a(62),Q=a(6),Y=Q.d.model("Level",{level:Q.d.integer,details:Q.d.string,is_done:!1,name:Q.d.string,category:Q.d.string,publicId:Q.d.string}).actions(function(e){return{markDone:function(){e.is_done=!0},setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t}}}).views(function(e){return{status:function(){return e.is_done?"Done":"Not Done"}}}),$=Q.d.model("Item",{userName:Q.d.string,publicId:Q.d.string,level:Q.d.integer}).views(function(e){return{get user(){return Object(Q.c)(e).users.find(function(t){return t.userName==e.userName})}}}),Z=Q.d.model("User",{id:Q.d.string,userName:Q.d.string,name:Q.d.string,password:Q.d.string,profileImage:Q.d.string}).views(function(e){return{get levelStore(){return Object(Q.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get highscore(){return 0===e.items.length?0:e.items.length-1},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t}}}),ee="appC7N77wl4iVEXGD",te="Levels",ae="Grid%20view",ne="keyHQ5GM7ktar7YtG",re=20,oe=(new Request("https://api.airtable.com/v0/appC7N77wl4iVEXGD/Levels",{method:"post",body:JSON.stringify({fields:{level:11,name:"Bell Taps",details:"Transfer ball from side to side in a \u201cbell ringing\u201d motion, using the inside of both feet",is_done:!1,publicId:"xriaksiq3gipz0dupgny",category:"Beginner"}}),headers:new Headers({Authorization:"Bearer ".concat(ne),"Content-Type":"application/json"})}),new Request("https://api.airtable.com/v0/".concat(ee,"/").concat(te,"?maxRecords=").concat(re,"&view=").concat(ae),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(ne)})})),ie=new Request("https://api.airtable.com/v0/".concat(ee,"/Items?maxRecords=").concat(re,"&view=").concat(ae),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(ne)})}),se=new Request("https://api.airtable.com/v0/".concat(ee,"/Users?maxRecords=").concat(re,"&view=").concat(ae),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(ne)})}),le=Q.d.model("LevelStore",{levels:Q.d.array(Y),items:Q.d.array($),users:Q.d.array(Z)}).views(function(e){return{get test(){return"testing"},get filteredLevels(){var t=[];return t.push(e.levels[0]),t}}}).volatile(function(e){return{loggedIn:null}}).actions(function(e){return{login:function(t,a){e.loggedIn=e.users.find(function(e){return e.userName===t})},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},fetchAirtable:function(){var e=Object(K.a)(W.a.mark(function e(){var t,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(oe).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(K.a)(W.a.mark(function e(){var t,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ie).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("https://api.airtable.com/v0/appC7N77wl4iVEXGD/Items",{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(ne),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})},updateUser:function(e){var t="https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/recPDEuzfAvPaJ5Jf";console.log(t),fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:"Gustav Karlsson",userName:"gk",password:"gk",profileImage:e.profileImage}}),headers:new Headers({Authorization:"Bearer ".concat(ne),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchUsers:function(){var e=Object(K.a)(W.a.mark(function e(){var t,a;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(se).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),init:Object(Q.b)(W.a.mark(function t(a){var n,r,o,i;return W.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAirtable();case 2:return n=t.sent,t.next=5,e.fetchUsers();case 5:return r=t.sent,t.next=8,e.fetchItems();case 8:o=t.sent,i={users:[],items:[],levels:[]},n.forEach(function(e){i.levels.push(e.fields)}),r.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),o.forEach(function(e){i.items.push(e.fields)}),Object(Q.a)(e,i);case 14:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var o=new XMLHttpRequest;o.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),o.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText),e.insertItem({userName:e.loggedIn.userName,publicId:t.public_id}),e.addItem({userName:e.loggedIn.userName,level:a,publicId:t.public_id}),console.log(e.items),n(this.responseText)},o.send(r)}}}),ce=(a(286),le.create());ce.init();Object(g.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}});var ue=function(){var e=Object(n.useState)("Login"),t=Object(s.a)(e,2),a=t[0],o=t[1],i="Login"===a?r.a.createElement(S,{store:ce,onLogin:o}):r.a.createElement(F,{store:ce});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},i))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.a5ded86d.chunk.js.map