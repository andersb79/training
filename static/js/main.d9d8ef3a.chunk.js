(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){e.exports=a(305)},166:function(e,t,a){},167:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(166),a(15)),c=(a(167),a(352)),s=a(14),u=a(354),d=a(355),m=a(357),g=a(356),p=a(38),f=a(56),v=a.n(f),h=a(30);var b=Object(s.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).webkitEnterFullscreen()}return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%",poster:t.dropboxPoster},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(h.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),E=a(48),y=a.n(E),N=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});function I(e){var t=e.store,a=N(),n=t.selectedDrill;return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(y.a,{onClick:function(){return t.selectDrill()}})),r.a.createElement("div",{className:"right"},"\xf6vning")),r.a.createElement(u.a,{key:n.level,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(g.a,{"aria-label":"Recipe",className:a.avatar},n.displayIdentifier),title:n.name}),r.a.createElement(m.a,null,r.a.createElement(b,{store:t,settings:n}),r.a.createElement("div",{className:"card-content"},r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},n.details)))))}a(5);var w=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});var O=Object(s.a)(function(e){var t=e.store,a=w(),i=r.a.useState(!0),o=Object(l.a)(i,2);function c(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}o[0],o[1],Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){c(e,!0)})},1)});var s=r.a.useState(null),f=Object(l.a)(s,2),h=f[0];function E(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return f[1],Boolean(h),r.a.createElement("div",{className:"game"},!t.selectedDrill&&r.a.createElement("div",null,r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(y.a,{onClick:function(){return t.selectCategory()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name," (",t.filteredLevels.length," st)")),t.filteredLevels.map(function(e,n){return r.a.createElement(v.a,{key:e.id,onChange:function(t){return c(e,t)}},r.a.createElement(u.a,{key:e.level,className:a.card,onClick:function(){return function(e){t.selectDrill(e)}(e)}},r.a.createElement(d.a,{avatar:r.a.createElement(g.a,{"aria-label":"Recipe",style:E(e),className:a.avatar},e.displayIdentifier),title:e.name}),r.a.createElement(m.a,null,r.a.createElement(b,{store:t,settings:e}),r.a.createElement("div",{className:"card-content"},r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},e.details)))))})),t.selectedDrill&&r.a.createElement(I,{store:t}))}),C=a(358),x=a(359),j=a(360),k=a(362),T=a(361),L=a(363),S=a(142),R=a.n(S),D=Object(c.a)(function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}});var P=Object(s.a)(function(e){var t=e.store,a=(D(),r.a.useState(!1)),n=Object(l.a)(a,2),i=n[0],o=(n[1],r.a.useState(!1)),c=Object(l.a)(o,2),s=c[0];return c[1],r.a.createElement("div",{className:"drills"},!t.selectedCategory&&r.a.createElement(C.a,{dense:i},t.listCategories.map(function(e){return r.a.createElement(x.a,{key:e.id,onClick:function(){return function(e){t.selectCategory(e)}(e)}},r.a.createElement(j.a,null,r.a.createElement(g.a,null,r.a.createElement("img",{className:"login-img",src:"0.jpg",alt:"Tr\xe4ningar"}))),r.a.createElement(T.a,{primary:e.name,secondary:s?"Secondary text":null}),r.a.createElement(k.a,null,r.a.createElement(L.a,{edge:"end","aria-label":"Delete"},r.a.createElement(R.a,null))))})),t.selectedCategory&&r.a.createElement(O,{store:t}))}),A=a(82),M=a(55),F=a.n(M),U=a(101),H=a.n(U),B=a(102),V=a.n(B),z=a(373),G=a(364),Y=a(365),J=a(367),W=a(366),_=Object(c.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});var q=Object(s.a)(function(e){e.store;var t=e.user,a=_();return r.a.createElement(G.a,{cellHeight:180,className:a.gridList},r.a.createElement(Y.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(W.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement(Y.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(J.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),K=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var X=Object(s.a)(function(e){var t=e.store,a=K(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(l.a)(n,2),o=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(y.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(z.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:o.name,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:o.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Lag",className:a.textField,value:o.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Position",className:a.textField,value:o.position,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:o.shirtNumber,disabled:!0,margin:"normal"}),r.a.createElement(q,{store:t,user:t.selectedProfile})))}),Z=a(368),Q=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:A.a[500]}}});function $(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(s.a)(function(e){var t=e.store,a=Q();function i(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(F.a,{style:a})}return t.isRejected?r.a.createElement(H.a,null):r.a.createElement(V.a,null)}return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){$(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(v.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.filteredItems.map(function(e,n){return r.a.createElement(v.a,{key:e.publicId,onChange:function(t){return $(e,t)}},r.a.createElement(u.a,{key:e.publicId,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(g.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(i,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(b,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(p.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(p.a,{variant:"subtitle2"},e.comment))),r.a.createElement(Z.a,null,r.a.createElement(p.a,{variant:"overline",style:{color:"gray"}},e.displayText))))}),t.selectedProfile&&r.a.createElement(X,{store:t})))});var ee=a(371),te=a(374),ae=a(372),ne=a(103),re=a.n(ne),ie=a(149),oe=a.n(ie),le=a(17),ce=a(80),se=a(143),ue=a(144),de=a.n(ue),me=a(369),ge=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var pe=Object(s.a)(function(e){var t=e.store,a=e.onLogout,n=ge(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),o=Object(l.a)(i,2),c=o[0],s=o[1],u=function(e){return function(t){s(Object(se.a)({},c,Object(ce.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(me.a,{variant:"outlined"},r.a.createElement(de.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(z.a,{id:"name",label:"Namn",className:n.textField,value:c.name,onChange:u("name"),margin:"normal"}),r.a.createElement(z.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:c.password,onChange:u("password"),margin:"normal"})),r.a.createElement(me.a,{variant:"outlined",onClick:function(){t.updateUser(c)}},"Spara"),r.a.createElement(me.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),fe=a(370),ve=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});Object(s.a)(function(e){var t=e.store,a=ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(p.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA S\xc4SONG 1"),r.a.createElement(p.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(C.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(x.a,{key:e.id},r.a.createElement(j.a,null,r.a.createElement(g.a,null,r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(T.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(fe.a,{variant:"inset",component:"li"}))}))))});var he=a(145),be=a.n(he),Ee=a(152);var ye=Object(s.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(Ee.a,{className:"help"},r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(be.a,null)," Verktyg"),r.a.createElement(me.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(me.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(me.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(p.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(me.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),Ne=a(146),Ie=a(147),we=a(150),Oe=a(148),Ce=a(151),xe=function(e){function t(){var e,a;Object(Ne.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(we.a)(this,(e=Object(Oe.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-1+1))+1;return t<10?"yellow":t<20?"red":t<30?"blue":t<40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(Ce.a)(t,e),Object(Ie.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),je=Object(s.a)(xe);function ke(e){return r.a.createElement(p.a,{component:"div",style:{padding:24}},e.children)}var Te=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Le=Object(le.c)(function(e){var t=e.store,a=e.onLogout,i=Te(),o=Object(n.useState)(0),c=Object(l.a)(o,2),s=c[0],u=c[1];return"NUMBER"===t.appRunning?r.a.createElement(je,{store:t}):"COLOR"===t.appRunning?r.a.createElement(je,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(ee.a,{position:"fixed",color:"default"},r.a.createElement(te.a,{value:s,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(ae.a,{icon:r.a.createElement(F.a,null)}),r.a.createElement(ae.a,{icon:r.a.createElement(re.a,null)}),r.a.createElement(ae.a,{icon:r.a.createElement(oe.a,null)}))),0===s&&r.a.createElement(ke,null,r.a.createElement(P,{store:t})),1===s&&r.a.createElement(ke,null,r.a.createElement(pe,{store:t,onLogout:a})),2===s&&r.a.createElement(ke,null,r.a.createElement(ye,{store:t})))});function Se(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),m=d[0],g=d[1],f=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(l.a)(a,2),i=r[0],o=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),v=Object(l.a)(f,2),h=(v[0],v[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"loddelogo.jpg",alt:"Tr\xe4ningar"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(p.a,{paragraph:!0,variant:"h3"},"IF L\xf6dde P10"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:m,onChange:function(e){return g(e.target.value)}})),r.a.createElement(me.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(c.toLowerCase(),m)?(h(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var Re=a(19),De=a.n(Re),Pe=a(37),Ae=a(7),Me={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},Fe=Ae.d.model("Level",{id:Ae.d.string,level:Ae.d.integer,details:Ae.d.string,name:Ae.d.string,category:Ae.d.string,publicId:Ae.d.maybeNull(Ae.d.string),season:Ae.d.integer,sharedPath:Ae.d.maybeNull(Ae.d.string),fileType:Ae.d.maybeNull(Ae.d.string),posterPath:Ae.d.maybeNull(Ae.d.string),displayIdentifier:Ae.d.integer}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".").concat(e.fileType,"?raw=1")},get dropboxPoster(){return"https://www.dropbox.com/s/".concat(e.posterPath,"/ConeDrill1.jpg?raw=1")},get categoryName(){return Me[e.category]},get isDone(){var t=Object(Ae.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function Ue(e){return e<=9?"0"+e:e}var He=Ae.d.model("Item",{id:Ae.d.string,createdTime:Ae.d.Date,userName:Ae.d.string,publicId:Ae.d.string,level:Ae.d.integer,status:Ae.d.string,sharedPath:Ae.d.maybeNull(Ae.d.string),comment:Ae.d.maybeNull(Ae.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+Ue(e.createdTime.getMonth()+1)+"-"+Ue(e.createdTime.getDate())},get user(){return Object(Ae.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(Ae.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),Be=Ae.d.model("User",{id:Ae.d.string,userName:Ae.d.string,name:Ae.d.string,password:Ae.d.string,profileImage:Ae.d.string,favoriteTeam:Ae.d.optional(Ae.d.string,""),playerTeam:Ae.d.optional(Ae.d.string,""),position:Ae.d.optional(Ae.d.string,""),shirtNumber:Ae.d.optional(Ae.d.string,"")}).views(function(e){return{get levelStore(){return Object(Ae.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,o=t.playerTeam,l=t.position,c=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=o,e.position=l,e.shirtNumber=c}}}),Ve=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],ze=[{id:0,category:"CONEDRILLS",name:"Teknik/Passningar"},{id:1,category:"BALLMASTERY",name:"Kombinationer"},{id:2,category:"PASSINGDRILLS",name:"Possession/spel"}],Ge="MAIN",Ye=Ae.d.model("LevelStore",{levels:Ae.d.array(Fe),items:Ae.d.array(He),users:Ae.d.array(Be)}).views(function(e){return{get listCategories(){return ze},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return e.levels.filter(function(t){return t.category===e.selectedCategory.category})},get levelFilters(){return Ve}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedCategory:null,selectedDrill:null,levelFilter:e.levelFilters[0],api:null,appRunning:Ge,colorCount:2,currentSeason:1}}).actions(function(e){return{setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectCategory:function(t){e.selectedCategory=t},selectDrill:function(t){e.selectedDrill=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Pe.a)(De.a.mark(function t(){var a,n,r,i;return De.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchLevels();case 5:return n=t.sent,t.next=8,e.api.fetchItems();case 8:return r=t.sent,i={users:[],items:[],levels:[]},n.forEach(function(e){e.fields.id=e.id,i.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),r.reverse(),r.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),i.items.push(e.fields)}),t.abrupt("return",i);case 15:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Pe.a)(De.a.mark(function t(){var a;return De.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(Ae.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(Ae.b)(De.a.mark(function t(a,n){var r;return De.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(Ae.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("resource_type","raw"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),r.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var n={name:"Namn",publicId:t.public_id,category:e.selectedCategory.category,details:"details",season:1};e.api.insertLevel(n),e.refresh(),a(this.responseText)},r.send(n)}}}),Je={base:"app9IO48CYcfaIY4Z",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:100,url:"https://api.airtable.com/v0/app9IO48CYcfaIY4Z"},We={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=Je;return t&&(r.maxRecords=t),n&&(r.view=n),a&&(r.table=a),new Request("".concat(Je.url,"/").concat(r.table,"?maxRecords=").concat(r.maxRecords,"&view=").concat(r.view),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(r.apiKey)})})},response:function(){var e=Object(Pe.a)(De.a.mark(function e(t){var a,n;return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Pe.a)(De.a.mark(function e(){return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(Je.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(Je.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchLevels:function(){var e=Object(Pe.a)(De.a.mark(function e(){return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Levels"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Pe.a)(De.a.mark(function e(){return De.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Items"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),insertLevel:function(e){fetch(new Request("".concat(Je.url,"/Levels"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(Je.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},_e=Ye.create();_e.init(We,window.localStorage.getItem("loggedIn"));var qe=Object(le.c)(function(){var e=Object(n.useState)("Login"),t=Object(l.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){_e.setHeight(window.innerHeight)},[]),!_e.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(_e.initzialize&&_e.loggedIn)return r.a.createElement(Le,{store:_e,onLogout:function(){_e.logout(),i("Login")}});var o="Login"===a?r.a.createElement(Se,{store:_e,onLogin:i}):r.a.createElement(Le,{store:_e});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},o))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[161,1,2]]]);
//# sourceMappingURL=main.d9d8ef3a.chunk.js.map