(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(297)},158:function(e,t,a){},159:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(158),a(19)),s=(a(159),a(337)),c=a(342),u=a(343),d=a(345),m=a(346),p=a(344),f=a(33),g=a(81),v=a(347),h=a(138),b=a.n(h),E=a(21),I=a(52),w=a.n(I),N=a(339),y=a(144),x=a(341),O=a(137),j=a.n(O),T=48,k=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}});function C(e){var t=e.store,a=k(),i=r.a.useState(!0),o=Object(l.a)(i,2),s=o[0];o[1];function g(e,t){e.setVisibility(t);var a=document.getElementById(e.publicId);a?t?a.play():a.pause():console.log("not found")}Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){g(e,!0)})},1)},[]);var h=r.a.useState(null),I=Object(l.a)(h,2),O=I[0],C=I[1],L=Boolean(O);function F(e){t.setLevelFilter(e),C(null)}return r.a.createElement("div",{className:"game"},r.a.createElement(N.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){C(e.currentTarget)}},r.a.createElement(j.a,null),t.levelFilter.text),r.a.createElement(y.a,{id:"long-menu",anchorEl:O,keepMounted:!0,open:L,onClose:F,PaperProps:{style:{maxHeight:4.5*T,width:200}}},t.levelFilters.map(function(e){return r.a.createElement(x.a,{key:e.id,selected:e.id===t.levelFilter,onClick:function(){return F(e)}},e.text)})),t.filteredLevels.map(function(e,n){return r.a.createElement(w.a,{key:e.publicId,onChange:function(t){return g(e,t)}},r.a.createElement(c.a,{key:e.level,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},e.level),title:e.name,subheader:e.category}),r.a.createElement(d.a,null,r.a.createElement(E.Video,{id:e.publicId,cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:e.poster}),r.a.createElement("div",{className:"card-content"},r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},e.details))),r.a.createElement(m.a,{in:s,timeout:"auto",unmountOnExit:!0},r.a.createElement(d.a,null,r.a.createElement("div",{className:"card-content2"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(a){return function(e,a){var n=e.target.files[0];t.processFile(n,a,function(e){alert("Uppladdning klar")})}(a,e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(v.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(b.a,null)))))))))}))}var L=a(46),F=a(78),S=a.n(F),D=a(100),P=a.n(D);var V=Object(L.a)(function(e){var t=e.store;return r.a.createElement("div",null,r.a.createElement(P.a,{onClick:function(){return t.selectProfile()}})," ",t.selectedProfile.name,r.a.createElement(E.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}))}),z=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}});function B(e,t){e.setVisibility(t);var a=document.getElementById(e.publicId);a?t?a.play():a.pause():console.log("not found")}var R=Object(L.a)(function(e){var t=e.store,a=z();return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){B(e,!0)})},1)},[]),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(w.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.items.map(function(e,n){return r.a.createElement(w.a,{key:e.publicId,onChange:function(t){return B(e,t)}},r.a.createElement(c.a,{key:e.publicId,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(E.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:e.isDone&&r.a.createElement(S.a,null),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(d.a,null,r.a.createElement(E.Video,{id:e.publicId,cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:e.poster})),r.a.createElement(d.a,null,r.a.createElement("div",{className:"item-date"},e.date))))}),t.selectedProfile&&r.a.createElement(V,{store:t})))}),H=a(348),A=a(354),_=a(349),J=a(142),U=a.n(J),q=a(141),G=a.n(q),M=a(143),X=a.n(M),W=a(340),Y=a(298),K=a(351),Q=a(350),$=a(352),Z=a(15),ee=a(79),te=a(139),ae=a(140),ne=a.n(ae),re=a(353),ie=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var oe=Object(L.a)(function(e){var t=e.store,a=(e.onLogout,ie()),n=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),i=Object(l.a)(n,2),o=i[0],s=i[1],c=function(e){return function(t){s(Object(te.a)({},o,Object(ee.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(v.a,{variant:"outlined"},r.a.createElement(ne.a,null)))),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(E.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(re.a,{id:"standard-name",label:"Namn",className:a.textField,value:o.name,onChange:c("name"),margin:"normal"}),r.a.createElement(re.a,{id:"standard-name",type:"password",label:"L\xf6senord",className:a.textField,value:o.password,onChange:c("password"),margin:"normal"}),r.a.createElement(re.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:o.favoriteTeam,onChange:c("favoriteTeam"),margin:"normal"}),r.a.createElement(re.a,{id:"standard-name",label:"Lag",className:a.textField,value:o.playerTeam,onChange:c("playerTeam"),margin:"normal"}),r.a.createElement(re.a,{id:"standard-name",label:"Position",className:a.textField,value:o.position,onChange:c("position"),margin:"normal"}),r.a.createElement(re.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:o.shirtNumber,onChange:c("shirtNumber"),margin:"normal"})),r.a.createElement(v.a,{variant:"outlined",onClick:function(){t.updateUser(o)}},"Spara"))});function le(e){return r.a.createElement(f.a,{component:"div",style:{padding:24}},e.children)}var se=Object(s.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var ce=Object(Z.c)(function(e){var t=e.store,a=e.onLogout,n=se(),i=r.a.useState(0),o=Object(l.a)(i,2),s=o[0],c=o[1];return r.a.createElement("div",{className:n.root},r.a.createElement(H.a,{position:"fixed",color:"default"},r.a.createElement(A.a,{value:s,onChange:function(e,t){c(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary"},r.a.createElement(_.a,{icon:r.a.createElement(G.a,null)}),r.a.createElement(_.a,{icon:r.a.createElement(S.a,null)}),r.a.createElement(_.a,{icon:r.a.createElement(U.a,null)}),r.a.createElement(_.a,{icon:r.a.createElement(X.a,null)}))),0===s&&r.a.createElement(le,null,r.a.createElement(R,{store:t})),1===s&&r.a.createElement(le,null,r.a.createElement(C,{store:t})),2===s&&r.a.createElement(le,null,r.a.createElement("div",{className:"profile"},"Topplista"),r.a.createElement("div",{className:"highscore"},r.a.createElement(W.a,{className:n.root},t.users.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,null,r.a.createElement(Q.a,null,r.a.createElement(p.a,null,r.a.createElement(E.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(K.a,{primary:e.name,secondary:e.highscore})),r.a.createElement($.a,{variant:"inset",component:"li"}))})))),3===s&&r.a.createElement(le,null,r.a.createElement(oe,{store:t,onLogout:a})))});function ue(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),o=Object(l.a)(i,2),s=o[0],c=o[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),m=d[0],p=d[1],f=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(l.a)(a,2),i=r[0],o=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),g=Object(l.a)(f,2),h=(g[0],g[1]);return r.a.createElement("div",null,r.a.createElement("div",null,"Anv\xe4ndarnamn"," ",r.a.createElement("input",{value:s,onInput:function(e){return c(e.target.value)}})),r.a.createElement("div",null,"L\xf6senord"," ",r.a.createElement("input",{type:"password",value:m,onInput:function(e){return p(e.target.value)}})),r.a.createElement(v.a,{variant:"outlined",onClick:function(e){return function(e){e.preventDefault(),t.login(s.toLowerCase(),m)?(h(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN"))}var de=a(22),me=a.n(de),pe=a(53),fe=a(7),ge=fe.d.model("Level",{level:fe.d.integer,details:fe.d.string,name:fe.d.string,category:fe.d.string,publicId:fe.d.string}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get status(){return e.is_done?"Done":"Not Done"},get isDone(){var t=Object(fe.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function ve(e){return e<=9?"0"+e:e}var he=fe.d.model("Item",{id:fe.d.string,createdTime:fe.d.Date,userName:fe.d.string,publicId:fe.d.string,level:fe.d.integer,isDone:fe.d.maybeNull(fe.d.boolean)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get date(){return e.createdTime.getFullYear()+"-"+ve(e.createdTime.getMonth()+1)+"-"+ve(e.createdTime.getDate())},get user(){return Object(fe.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(fe.c)(e).levels.find(function(t){return t.level===e.level})},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),be=fe.d.model("User",{id:fe.d.string,userName:fe.d.string,name:fe.d.string,password:fe.d.string,profileImage:fe.d.string,favoriteTeam:fe.d.optional(fe.d.string,""),playerTeam:fe.d.optional(fe.d.string,""),position:fe.d.optional(fe.d.string,""),shirtNumber:fe.d.optional(fe.d.string,"")}).views(function(e){return{get levelStore(){return Object(fe.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get highscore(){return 0===e.items.length?0:e.items.length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,o=t.playerTeam,l=t.position,s=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=o,e.position=l,e.shirtNumber=s}}}),Ee="appC7N77wl4iVEXGD",Ie="Levels",we="Grid%20view",Ne="keyHQ5GM7ktar7YtG",ye=20,xe=(new Request("https://api.airtable.com/v0/appC7N77wl4iVEXGD/Levels",{method:"post",body:JSON.stringify({fields:{level:11,name:"Bell Taps",details:"Transfer ball from side to side in a \u201cbell ringing\u201d motion, using the inside of both feet",is_done:!1,publicId:"xriaksiq3gipz0dupgny",category:"Beginner"}}),headers:new Headers({Authorization:"Bearer ".concat(Ne),"Content-Type":"application/json"})}),new Request("https://api.airtable.com/v0/".concat(Ee,"/").concat(Ie,"?maxRecords=").concat(ye,"&view=").concat(we),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ne)})})),Oe=new Request("https://api.airtable.com/v0/".concat(Ee,"/Items?maxRecords=").concat(ye,"&view=").concat(we),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ne)})}),je=new Request("https://api.airtable.com/v0/".concat(Ee,"/Users?maxRecords=").concat(ye,"&view=").concat(we),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ne)})}),Te=[{id:0,text:"Alla"},{id:1,text:"Ej klarade"},{id:2,text:"Klarade"}],ke=fe.d.model("LevelStore",{levels:fe.d.array(ge),items:fe.d.array(he),users:fe.d.array(be)}).views(function(e){return{get test(){return"testing"},get filteredLevels(){return 0===e.levelFilter.id?e.levels:1===e.levelFilter.id?e.levels.filter(function(e){return!e.isDone}):2===e.levelFilter.id?e.levels.filter(function(e){return e.isDone}):[]},get levelFilters(){return Te}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedProfile:null,levelFilter:e.levelFilters[0]}}).actions(function(e){return{selectProfile:function(t){e.selectedProfile=t},setLevelFilter:function(t){e.levelFilter=t},refresh:function(){var t=Object(pe.a)(me.a.mark(function t(){var a,n;return me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchItems();case 2:return a=t.sent,n=[],a.reverse(),a.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),n.push(e.fields)}),Object(fe.a)(e.items,n),t.abrupt("return",!0);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},fetchAirtable:function(){var e=Object(pe.a)(me.a.mark(function e(){var t,a;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(xe).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(pe.a)(me.a.mark(function e(){var t,a;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Oe).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("https://api.airtable.com/v0/appC7N77wl4iVEXGD/Items",{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(Ne),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})},updateUser:function(e){var t="https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/".concat(e.id);console.log(t),fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(Ne),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchUsers:function(){var e=Object(pe.a)(me.a.mark(function e(){var t,a;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(je).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),init:Object(fe.b)(me.a.mark(function t(a){var n,r,i,o;return me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAirtable();case 2:return n=t.sent,t.next=5,e.fetchUsers();case 5:return r=t.sent,t.next=8,e.fetchItems();case 8:i=t.sent,o={users:[],items:[],levels:[]},n.forEach(function(e){o.levels.push(e.fields)}),r.forEach(function(e){e.fields.id=e.id,o.users.push(e.fields)}),i.reverse(),i.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),o.items.push(e.fields)}),Object(fe.a)(e,o),a&&e.login2(a),e.initzialize=!0;case 17:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),i.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={userName:e.loggedIn.userName,publicId:t.public_id,level:a.level,isDone:!1};e.insertItem(r),e.refresh(),console.log(e.items),n(this.responseText)},i.send(r)}}}).create();ke.init(window.localStorage.getItem("loggedIn"));var Ce=Object(Z.c)(function(){var e=Object(n.useState)("Login"),t=Object(l.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){ke.setHeight(window.innerHeight)},[]),!ke.initzialize)return r.a.createElement("div",null,"loading");if(ke.initzialize&&ke.loggedIn)return r.a.createElement(ce,{store:ke,onLogout:function(){ke.logout(),i("Login")}});var o="Login"===a?r.a.createElement(ue,{store:ke,onLogin:i}):r.a.createElement(ce,{store:ke});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},o))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,1,2]]]);
//# sourceMappingURL=main.78e9458e.chunk.js.map