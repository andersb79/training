(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){e.exports=a(323)},172:function(e,t,a){},173:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(172),a(15)),c=(a(173),a(373)),s=a(14),u=a(374),d=a(375),m=a(376),p=a(319),g=a(39),f=a(57),v=a.n(f),h=a(24),b=a(139);var E=Object(s.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).webkitEnterFullscreen()}if(t.videoId)return r.a.createElement(b.a,{id:t.id,videoId:t.videoId,opts:{width:"100%",playerVars:{autoplay:1,enablejsapi:1}}});return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%",poster:t.dropboxPoster},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(h.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),y=a(50),N=a.n(y),w=a(145),I=a.n(w),O=a(49),C=a(75),j=a(372),x=a(73),k=a.n(x),T=a(390);var L=Object(s.a)(function(e){var t=e.store,a=e.onBack,n=r.a.useState({name:"",description:"",details:""}),i=Object(l.a)(n,2),o=i[0],c=i[1],s=function(e){return function(t){c(Object(C.a)({},o,Object(O.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"add-drill"},r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return a()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name)),r.a.createElement(T.a,{id:"name",label:"Namn",value:o.name,onChange:s("name"),margin:"normal"}),r.a.createElement(T.a,{id:"description",label:"Description",value:o.description,onChange:s("description"),margin:"normal"}),r.a.createElement(T.a,{id:"details",label:"details",value:o.details,onChange:s("details"),margin:"normal"}),r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e){var n=e.target.files[0];t.processFile(n,o,function(e){a()})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(j.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(k.a,null)))))}),S=(a(6),a(392)),P=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});var R=Object(s.a)(function(e){var t=e.store,a=P(),i=r.a.useState(!0),o=Object(l.a)(i,2);function c(e,t){if(!e.videoId){e.setVisibility(t);var a=document.getElementById(e.id);a?a.play&&(t?a.play():a.pause()):console.log("not found")}}o[0],o[1],Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){c(e,!0)})},1)});var s=r.a.useState(null),f=Object(l.a)(s,2),b=f[0],y=(f[1],Boolean(b),r.a.useState(!1)),w=Object(l.a)(y,2),O=w[0],C=w[1];function j(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},!O&&r.a.createElement("div",null,r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectCategory()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name," (",t.filteredLevels.length," st)"),r.a.createElement("div",{className:"action"},r.a.createElement(I.a,{onClick:function(){C(!0)}}))),t.filteredLevels.map(function(e,n){return r.a.createElement(v.a,{key:e.id,onChange:function(t){return c(e,t)}},r.a.createElement(u.a,{key:e.level,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",style:j(e),className:a.avatar}),title:e.name}),r.a.createElement(m.a,null,"mp4"===e.fileType&&r.a.createElement(E,{store:t,settings:e}),("jpg"===e.fileType||"gif"===e.fileType)&&e.hasSharedPath&&r.a.createElement("img",{src:e.src}),("jpg"===e.fileType||"gif"===e.fileType)&&!e.hasSharedPath&&r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%"}),r.a.createElement("div",{className:"card-content"},r.a.createElement(S.a,{label:e.playerCount}),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.details),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)))))})),O&&r.a.createElement(L,{store:t,onBack:function(){return C(!1)}}))}),D=a(371),A=a(377),F=a(378),M=a(380),U=a(379),B=a(381),H=a(146),V=a.n(H),z=Object(c.a)(function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}});var G=Object(s.a)(function(e){var t=e.store,a=(z(),r.a.useState(!1)),n=Object(l.a)(a,2),i=n[0],o=(n[1],r.a.useState(!1)),c=Object(l.a)(o,2),s=c[0];return c[1],r.a.createElement("div",{className:"drills"},!t.selectedCategory&&r.a.createElement(D.a,{dense:i},t.listCategories.map(function(e){return r.a.createElement(A.a,{key:e.id,onClick:function(){return function(e){t.selectCategory(e)}(e)}},r.a.createElement(F.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{className:"login-img",src:"0.jpg",alt:"Tr\xe4ningar"}))),r.a.createElement(U.a,{primary:e.name,secondary:s?"Secondary text":null}),r.a.createElement(M.a,null,r.a.createElement(B.a,{edge:"end","aria-label":"Delete"},r.a.createElement(V.a,null))))})),t.selectedCategory&&r.a.createElement(R,{store:t}))}),J=a(84),Y=a(74),_=a.n(Y),W=a(103),q=a.n(W),K=a(104),X=a.n(K),Z=a(382),Q=a(383),$=a(385),ee=a(384),te=Object(c.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});var ae=Object(s.a)(function(e){e.store;var t=e.user,a=te();return r.a.createElement(Z.a,{cellHeight:180,className:a.gridList},r.a.createElement(Q.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(ee.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement(Q.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement($.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),ne=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var re=Object(s.a)(function(e){var t=e.store,a=ne(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(l.a)(n,2),o=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(T.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:o.name,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:o.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Lag",className:a.textField,value:o.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Position",className:a.textField,value:o.position,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:o.shirtNumber,disabled:!0,margin:"normal"}),r.a.createElement(ae,{store:t,user:t.selectedProfile})))}),ie=a(386),oe=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:J.a[500]}}});function le(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(s.a)(function(e){var t=e.store,a=oe();function i(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(_.a,{style:a})}return t.isRejected?r.a.createElement(q.a,null):r.a.createElement(X.a,null)}return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){le(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(v.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.filteredItems.map(function(e,n){return r.a.createElement(v.a,{key:e.publicId,onChange:function(t){return le(e,t)}},r.a.createElement(u.a,{key:e.publicId,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(i,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(E,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(g.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(g.a,{variant:"subtitle2"},e.comment))),r.a.createElement(ie.a,null,r.a.createElement(g.a,{variant:"overline",style:{color:"gray"}},e.displayText))))}),t.selectedProfile&&r.a.createElement(re,{store:t})))});var ce=a(388),se=a(391),ue=a(389),de=a(152),me=a.n(de),pe=a(105),ge=a.n(pe),fe=a(153),ve=a.n(fe),he=a(17),be=a(147),Ee=a.n(be),ye=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var Ne=Object(s.a)(function(e){var t=e.store,a=e.onLogout,n=ye(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),o=Object(l.a)(i,2),c=o[0],s=o[1],u=function(e){return function(t){s(Object(C.a)({},c,Object(O.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(j.a,{variant:"outlined"},r.a.createElement(Ee.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(T.a,{id:"name",label:"Namn",className:n.textField,value:c.name,onChange:u("name"),margin:"normal"}),r.a.createElement(T.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:c.password,onChange:u("password"),margin:"normal"})),r.a.createElement(j.a,{variant:"outlined",onClick:function(){t.updateUser(c)}},"Spara"),r.a.createElement(j.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),we=a(387),Ie=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});Object(s.a)(function(e){var t=e.store,a=Ie();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA S\xc4SONG 1"),r.a.createElement(g.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(D.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(A.a,{key:e.id},r.a.createElement(F.a,null,r.a.createElement(p.a,null,r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(U.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(we.a,{variant:"inset",component:"li"}))}))))});var Oe=a(148),Ce=a.n(Oe),je=a(156);var xe=Object(s.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(je.a,{className:"help"},r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(Ce.a,null)," Verktyg"),r.a.createElement(j.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(j.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(j.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(g.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(j.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),ke=a(149),Te=a(150),Le=a(154),Se=a(151),Pe=a(155),Re=function(e){function t(){var e,a;Object(ke.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(Le.a)(this,(e=Object(Se.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-0+1))+0;return t<=10?"yellow":t<=20?"red":t<=30?"blue":t<=40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(Pe.a)(t,e),Object(Te.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),De=Object(s.a)(Re);function Ae(e){return r.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}var Fe=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Me=Object(he.c)(function(e){var t=e.store,a=e.onLogout,i=Fe(),o=Object(n.useState)(0),c=Object(l.a)(o,2),s=c[0],u=c[1];return"NUMBER"===t.appRunning?r.a.createElement(De,{store:t}):"COLOR"===t.appRunning?r.a.createElement(De,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(ce.a,{position:"fixed",color:"default"},r.a.createElement(se.a,{value:s,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(ue.a,{icon:r.a.createElement(me.a,null)}),r.a.createElement(ue.a,{icon:r.a.createElement(ve.a,null)}),r.a.createElement(ue.a,{icon:r.a.createElement(ge.a,null)}))),0===s&&r.a.createElement(Ae,null,r.a.createElement(G,{store:t})),1===s&&r.a.createElement(Ae,null,r.a.createElement(xe,{store:t})),2===s&&r.a.createElement(Ae,null,r.a.createElement(Ne,{store:t,onLogout:a})))});function Ue(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),m=d[0],p=d[1],f=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(l.a)(a,2),i=r[0],o=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),v=Object(l.a)(f,2),h=(v[0],v[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"loddelogo.jpg",alt:"Tr\xe4ningar"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(g.a,{paragraph:!0,variant:"h3"},"IF L\xf6dde P10"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement(j.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(c.toLowerCase(),m)?(h(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var Be=a(19),He=a.n(Be),Ve=a(38),ze=a(7),Ge={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},Je=ze.d.model("Level",{id:ze.d.string,level:ze.d.integer,details:ze.d.maybeNull(ze.d.string),description:ze.d.maybeNull(ze.d.string),name:ze.d.string,category:ze.d.string,publicId:ze.d.maybeNull(ze.d.string),season:ze.d.integer,sharedPath:ze.d.maybeNull(ze.d.string),fileType:ze.d.maybeNull(ze.d.string),posterPath:ze.d.maybeNull(ze.d.string),minPlayers:ze.d.maybeNull(ze.d.integer),maxPlayers:ze.d.maybeNull(ze.d.integer),videoId:ze.d.maybeNull(ze.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get src(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/Lpass.").concat(e.fileType,"?raw=1")},get playerCount(){return e.minPlayers?e.minPlayers===e.maxPlayers?"Antal spelare: ".concat(e.minPlayers):"Antal spelare: ".concat(e.minPlayers," - ").concat(e.maxPlayers):"Alla"},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".").concat(e.fileType,"?raw=1")},get dropboxPoster(){return"https://www.dropbox.com/s/".concat(e.posterPath,"/ConeDrill1.jpg?raw=1")},get categoryName(){return Ge[e.category]},get isDone(){var t=Object(ze.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function Ye(e){return e<=9?"0"+e:e}var _e=ze.d.model("Item",{id:ze.d.string,createdTime:ze.d.Date,userName:ze.d.string,publicId:ze.d.string,level:ze.d.integer,status:ze.d.string,sharedPath:ze.d.maybeNull(ze.d.string),comment:ze.d.maybeNull(ze.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+Ye(e.createdTime.getMonth()+1)+"-"+Ye(e.createdTime.getDate())},get user(){return Object(ze.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(ze.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),We=ze.d.model("User",{id:ze.d.string,userName:ze.d.string,name:ze.d.string,password:ze.d.string,profileImage:ze.d.string,favoriteTeam:ze.d.optional(ze.d.string,""),playerTeam:ze.d.optional(ze.d.string,""),position:ze.d.optional(ze.d.string,""),shirtNumber:ze.d.optional(ze.d.string,"")}).views(function(e){return{get levelStore(){return Object(ze.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,o=t.playerTeam,l=t.position,c=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=o,e.position=l,e.shirtNumber=c}}}),qe=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],Ke=[{id:0,category:"BALLMASTERY",name:"DEL 1 - Teknik/Passningar"},{id:1,category:"PASSINGDRILLS",name:"DEL 2 - Kombinationer"},{id:2,category:"POSSESION",name:"DEL 3 - Possession/spel"}],Xe="MAIN",Ze=ze.d.model("LevelStore",{levels:ze.d.array(Je),items:ze.d.array(_e),users:ze.d.array(We)}).views(function(e){return{get listCategories(){return Ke},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return e.levels.filter(function(t){return t.category===e.selectedCategory.category})},get levelFilters(){return qe}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedCategory:null,selectedDrill:null,levelFilter:e.levelFilters[0],api:null,appRunning:Xe,colorCount:2,currentSeason:1}}).actions(function(e){return{setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectCategory:function(t){e.selectedCategory=t},selectDrill:function(t){e.selectedDrill=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Ve.a)(He.a.mark(function t(){var a,n,r,i;return He.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchLevels();case 5:return n=t.sent,t.next=8,e.api.fetchItems();case 8:return r=t.sent,i={users:[],items:[],levels:[]},n.forEach(function(e){e.fields.id=e.id,i.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),r.reverse(),r.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),i.items.push(e.fields)}),t.abrupt("return",i);case 15:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Ve.a)(He.a.mark(function t(){var a;return He.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(ze.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(ze.b)(He.a.mark(function t(a,n){var r;return He.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(ze.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData,i="image/jpeg"===t.type||"image/png"===t.type;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),i||r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var o=i?"https://api.cloudinary.com/v1_1/deolievif/image/upload":"https://api.cloudinary.com/v1_1/deolievif/video/upload/",l=new XMLHttpRequest;l.open("POST",o,!0),l.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={name:a.name,description:a.description,publicId:t.public_id,category:e.selectedCategory.category,details:"details",season:1,fileType:i?"jpg":"mp4"};e.api.insertLevel(r),e.refresh(),n(this.responseText)},l.send(r)}}}),Qe={base:"app9IO48CYcfaIY4Z",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:100,url:"https://api.airtable.com/v0/app9IO48CYcfaIY4Z"},$e={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=Qe;return t&&(r.maxRecords=t),n&&(r.view=n),a&&(r.table=a),new Request("".concat(Qe.url,"/").concat(r.table,"?maxRecords=").concat(r.maxRecords,"&view=").concat(r.view),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(r.apiKey)})})},response:function(){var e=Object(Ve.a)(He.a.mark(function e(t){var a,n;return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Ve.a)(He.a.mark(function e(){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(Qe.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(Qe.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchLevels:function(){var e=Object(Ve.a)(He.a.mark(function e(){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Levels"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Ve.a)(He.a.mark(function e(){return He.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Items"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addNewDrill:function(e){fetch(new Request("".concat(Qe.url,"/Levels"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(Qe.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})},insertLevel:function(e){fetch(new Request("".concat(Qe.url,"/Levels"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(Qe.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},et=Ze.create();et.init($e,window.localStorage.getItem("loggedIn"));var tt=Object(he.c)(function(){var e=Object(n.useState)("Login"),t=Object(l.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){et.setHeight(window.innerHeight)},[]),!et.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(et.initzialize&&et.loggedIn)return r.a.createElement(Me,{store:et,onLogout:function(){et.logout(),i("Login")}});var o="Login"===a?r.a.createElement(Ue,{store:et,onLogin:i}):r.a.createElement(Me,{store:et});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},o))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.6d35fc0e.chunk.js.map