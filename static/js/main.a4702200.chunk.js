(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(306)},167:function(e,t,a){},168:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(167),a(14)),c=(a(168),a(352)),s=a(354),u=a(355),m=a(357),d=a(356),p=a(39),g=a(55),f=a.n(g),v=a(15),h=a(30);var E=Object(v.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).requestFullscreen()}return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%"},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(h.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),b=a(73),y=a.n(b),N=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});function I(e){var t=e.store,a=N(),i=r.a.useState(!0),o=Object(l.a)(i,2);o[0],o[1];function c(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){c(e,!0)})},1)});var g=r.a.useState(null),v=Object(l.a)(g,2),h=v[0];v[1],Boolean(h);function b(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(y.a,{onClick:function(){return t.selectCategory()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name)),t.filteredLevels.map(function(e,n){return r.a.createElement(f.a,{key:e.id,onChange:function(t){return c(e,t)}},r.a.createElement(s.a,{key:e.level,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(d.a,{"aria-label":"Recipe",style:b(e),className:a.avatar},e.level),title:e.name,subheader:e.displayText}),r.a.createElement(m.a,null,r.a.createElement(E,{store:t,settings:e}),r.a.createElement("div",{className:"card-content"},r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},e.details)))))}))}var w=a(358),O=a(359),x=a(360),C=a(362),k=a(361),j=a(363),T=a(141),L=a.n(T),S=a(142),R=a.n(S),P=Object(c.a)(function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}});var A=Object(v.a)(function(e){var t=e.store,a=(P(),r.a.useState(!1)),n=Object(l.a)(a,2),i=n[0],o=(n[1],r.a.useState(!1)),c=Object(l.a)(o,2),s=c[0];return c[1],r.a.createElement("div",{className:"drills"},!t.selectedCategory&&r.a.createElement(w.a,{dense:i},t.listCategories.map(function(e){return r.a.createElement(O.a,{key:e.id,onClick:function(){return function(e){t.selectCategory(e)}(e)}},r.a.createElement(x.a,null,r.a.createElement(d.a,null,r.a.createElement(L.a,null))),r.a.createElement(k.a,{primary:e.name,secondary:s?"Secondary text":null}),r.a.createElement(C.a,null,r.a.createElement(j.a,{edge:"end","aria-label":"Delete"},r.a.createElement(R.a,null))))})),t.selectedCategory&&r.a.createElement(I,{store:t}))}),D=a(84),F=a(37),M=a.n(F),U=a(79),H=a.n(U),V=a(80),B=a.n(V),z=a(373),G=a(364),Y=a(365),J=a(367),K=a(366),W=Object(c.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});var _=Object(v.a)(function(e){e.store;var t=e.user,a=W();return r.a.createElement(G.a,{cellHeight:180,className:a.gridList},r.a.createElement(Y.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(K.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement(Y.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(J.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),q=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var X=Object(v.a)(function(e){var t=e.store,a=q(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(l.a)(n,2),o=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(y.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(z.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:o.name,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:o.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Lag",className:a.textField,value:o.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Position",className:a.textField,value:o.position,disabled:!0,margin:"normal"}),r.a.createElement(z.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:o.shirtNumber,disabled:!0,margin:"normal"}),r.a.createElement(_,{store:t,user:t.selectedProfile})))}),Z=a(368),Q=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:D.a[500]}}});function $(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(v.a)(function(e){var t=e.store,a=Q();function i(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(M.a,{style:a})}return t.isRejected?r.a.createElement(H.a,null):r.a.createElement(B.a,null)}return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){$(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(f.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.filteredItems.map(function(e,n){return r.a.createElement(f.a,{key:e.publicId,onChange:function(t){return $(e,t)}},r.a.createElement(s.a,{key:e.publicId,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(d.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(i,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(E,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(p.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(p.a,{variant:"subtitle2"},e.comment))),r.a.createElement(Z.a,null,r.a.createElement(p.a,{variant:"overline",style:{color:"gray"}},e.displayText))))}),t.selectedProfile&&r.a.createElement(X,{store:t})))});var ee=a(371),te=a(374),ae=a(372),ne=a(82),re=a.n(ne),ie=a(149),oe=a.n(ie),le=a(17),ce=a(81),se=a(143),ue=a(144),me=a.n(ue),de=a(369),pe=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var ge=Object(v.a)(function(e){var t=e.store,a=e.onLogout,n=pe(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),o=Object(l.a)(i,2),c=o[0],s=o[1],u=function(e){return function(t){s(Object(se.a)({},c,Object(ce.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(de.a,{variant:"outlined"},r.a.createElement(me.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(z.a,{id:"name",label:"Namn",className:n.textField,value:c.name,onChange:u("name"),margin:"normal"}),r.a.createElement(z.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:c.password,onChange:u("password"),margin:"normal"}),r.a.createElement(z.a,{id:"favoriteTeam",label:"Favoritlag",className:n.textField,value:c.favoriteTeam,onChange:u("favoriteTeam"),margin:"normal"}),r.a.createElement(z.a,{id:"playerTeam",label:"Lag",className:n.textField,value:c.playerTeam,onChange:u("playerTeam"),margin:"normal"}),r.a.createElement(z.a,{id:"position",label:"Position",className:n.textField,value:c.position,onChange:u("position"),margin:"normal"}),r.a.createElement(z.a,{id:"shirtNumber",label:"Tr\xf6jnummer",className:n.textField,value:c.shirtNumber,onChange:u("shirtNumber"),margin:"normal"})),r.a.createElement(de.a,{variant:"outlined",onClick:function(){t.updateUser(c)}},"Spara"),r.a.createElement(de.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),fe=a(370),ve=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});Object(v.a)(function(e){var t=e.store,a=ve();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(p.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA S\xc4SONG 1"),r.a.createElement(p.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(w.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.a,{key:e.id},r.a.createElement(x.a,null,r.a.createElement(d.a,null,r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(k.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(fe.a,{variant:"inset",component:"li"}))}))))});var he=a(104),Ee=a.n(he),be=a(105),ye=a.n(be),Ne=a(145),Ie=a.n(Ne),we=a(152);var Oe=Object(v.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(we.a,{className:"help"},r.a.createElement(p.a,{paragraph:!0},"S\xe4song 1:"),r.a.createElement(p.a,{paragraph:!0},"Varje s\xe4song har 20 utmaningar."),r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(Ee.a,null)," Hem"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(p.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens anv\xe4ndaruppladde filmer."),r.a.createElement(p.a,{paragraph:!0},r.a.createElement(B.a,null),"Under utv\xe4rdering f\xf6r att se om man klarat det."),r.a.createElement(p.a,{paragraph:!0},r.a.createElement(M.a,null),"Klarad utmaning"),r.a.createElement(p.a,{paragraph:!0},r.a.createElement(H.a,null),"Utmaning misslyckad. Bara att f\xf6rs\xf6ka igen. Kanske hade du inte flytet i utmaningen, eller missf\xf6rt\xe5tt n\xe5got. Kontrollera videon och instruktionerna och f\xf6rs\xf6k igen."),r.a.createElement(p.a,{paragraph:!0},"Om du klickar p\xe5 personens namn s\xe5 kan du se profilen."),r.a.createElement(p.a,{paragraph:!0},"Klicka p\xe5 videon f\xf6r att se den i helsk\xe4rm.")),r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(M.a,null)," Utmaningar"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(p.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens utmaningar. Det finns 3 olika niv\xe5er. L\xe4tt, medium, sv\xe5r."),r.a.createElement(p.a,{paragraph:!0},"10 l\xe4tta \xf6vningar, 5 po\xe4ng var"),r.a.createElement(p.a,{paragraph:!0},"5 medium \xf6vningar, 10 po\xe4ng var"),r.a.createElement(p.a,{paragraph:!0},"5 sv\xe5ra \xf6vningar, 20 po\xe4ng var"),r.a.createElement(p.a,{paragraph:!0},r.a.createElement(ye.a,null),"Klicka p\xe5 denna f\xf6r att ladda upp en film. Filma alltid i horisontellt l\xe4ge.")),r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(M.a,null)," Topplistan"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(p.a,{paragraph:!0},"Varje s\xe4song best\xe5r av maximalt 200 po\xe4ng. H\xe4r visas vem som f\xe5tt flest po\xe4ng.")),r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(re.a,null)," Profil"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(p.a,{paragraph:!0},"H\xe4r kan du ladda upp din profilbild och andra anv\xe4ndarinst\xe4llningar.")),r.a.createElement(p.a,{variant:"h6",paragraph:!0},r.a.createElement(Ie.a,null)," Verktyg"),r.a.createElement(de.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(de.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(de.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(p.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(de.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),xe=a(146),Ce=a(147),ke=a(150),je=a(148),Te=a(151),Le=function(e){function t(){var e,a;Object(xe.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(ke.a)(this,(e=Object(je.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-1+1))+1;return t<10?"yellow":t<20?"red":t<30?"blue":t<40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(Te.a)(t,e),Object(Ce.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),Se=Object(v.a)(Le);function Re(e){return r.a.createElement(p.a,{component:"div",style:{padding:24}},e.children)}var Pe=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Ae=Object(le.c)(function(e){var t=e.store,a=e.onLogout,i=Pe(),o=Object(n.useState)(0),c=Object(l.a)(o,2),s=c[0],u=c[1];return"NUMBER"===t.appRunning?r.a.createElement(Se,{store:t}):"COLOR"===t.appRunning?r.a.createElement(Se,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(ee.a,{position:"fixed",color:"default"},r.a.createElement(te.a,{value:s,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(ae.a,{icon:r.a.createElement(M.a,null)}),r.a.createElement(ae.a,{icon:r.a.createElement(re.a,null)}),r.a.createElement(ae.a,{icon:r.a.createElement(oe.a,null)}))),0===s&&r.a.createElement(Re,null,r.a.createElement(A,{store:t})),1===s&&r.a.createElement(Re,null,r.a.createElement(ge,{store:t,onLogout:a})),2===s&&r.a.createElement(Re,null,r.a.createElement(Oe,{store:t})))});function De(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),d=m[0],g=m[1],f=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(l.a)(a,2),i=r[0],o=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),v=Object(l.a)(f,2),h=(v[0],v[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"soccertraining.jpg",alt:"Tr\xe4ningar"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(p.a,{paragraph:!0,variant:"h3"},"IF L\xf6dde P10"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:d,onChange:function(e){return g(e.target.value)}})),r.a.createElement(de.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(c.toLowerCase(),d)?(h(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var Fe=a(19),Me=a.n(Fe),Ue=a(38),He=a(7),Ve={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},Be=He.d.model("Level",{id:He.d.string,level:He.d.integer,details:He.d.string,name:He.d.string,category:He.d.string,publicId:He.d.string,season:He.d.integer,sharedPath:He.d.maybeNull(He.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get categoryName(){return Ve[e.category]},get isDone(){var t=Object(He.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function ze(e){return e<=9?"0"+e:e}var Ge=He.d.model("Item",{id:He.d.string,createdTime:He.d.Date,userName:He.d.string,publicId:He.d.string,level:He.d.integer,status:He.d.string,sharedPath:He.d.maybeNull(He.d.string),comment:He.d.maybeNull(He.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+ze(e.createdTime.getMonth()+1)+"-"+ze(e.createdTime.getDate())},get user(){return Object(He.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(He.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),Ye=He.d.model("User",{id:He.d.string,userName:He.d.string,name:He.d.string,password:He.d.string,profileImage:He.d.string,favoriteTeam:He.d.optional(He.d.string,""),playerTeam:He.d.optional(He.d.string,""),position:He.d.optional(He.d.string,""),shirtNumber:He.d.optional(He.d.string,"")}).views(function(e){return{get levelStore(){return Object(He.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,o=t.playerTeam,l=t.position,c=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=o,e.position=l,e.shirtNumber=c}}}),Je=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],Ke=[{id:0,category:"CONEDRILLS",name:"Code drills"},{id:1,category:"BALLMASTERY",name:"Ball mastery"}],We="MAIN",_e=He.d.model("LevelStore",{levels:He.d.array(Be),items:He.d.array(Ge),users:He.d.array(Ye)}).views(function(e){return{get listCategories(){return Ke},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return e.levels.filter(function(t){return t.category===e.selectedCategory.category})},get levelFilters(){return Je}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedCategory:null,levelFilter:e.levelFilters[0],api:null,appRunning:We,colorCount:2,currentSeason:1}}).actions(function(e){return{setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectCategory:function(t){e.selectedCategory=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Ue.a)(Me.a.mark(function t(){var a,n,r,i;return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchLevels();case 5:return n=t.sent,t.next=8,e.api.fetchItems();case 8:return r=t.sent,i={users:[],items:[],levels:[]},n.forEach(function(e){e.fields.id=e.id,i.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),r.reverse(),r.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),i.items.push(e.fields)}),t.abrupt("return",i);case 15:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Ue.a)(Me.a.mark(function t(){var a;return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(He.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(He.b)(Me.a.mark(function t(a,n){var r;return Me.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(He.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),i.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={userName:e.loggedIn.userName,publicId:t.public_id,level:a.level,status:"WAITINGFORAPPROVAL"};e.api.insertItem(r),e.refresh(),console.log(e.items),n(this.responseText)},i.send(r)}}}),qe={base:"app9IO48CYcfaIY4Z",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:100,url:"https://api.airtable.com/v0/app9IO48CYcfaIY4Z"},Xe={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=qe;return t&&(r.maxRecords=t),n&&(r.view=n),a&&(r.table=a),new Request("".concat(qe.url,"/").concat(r.table,"?maxRecords=").concat(r.maxRecords,"&view=").concat(r.view),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(r.apiKey)})})},response:function(){var e=Object(Ue.a)(Me.a.mark(function e(t){var a,n;return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Ue.a)(Me.a.mark(function e(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(qe.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(qe.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchLevels:function(){var e=Object(Ue.a)(Me.a.mark(function e(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Levels"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Ue.a)(Me.a.mark(function e(){return Me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Items"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("".concat(qe.url,"/Items"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(qe.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},Ze=_e.create();Ze.init(Xe,window.localStorage.getItem("loggedIn"));var Qe=Object(le.c)(function(){var e=Object(n.useState)("Login"),t=Object(l.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){Ze.setHeight(window.innerHeight)},[]),!Ze.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(Ze.initzialize&&Ze.loggedIn)return r.a.createElement(Ae,{store:Ze,onLogout:function(){Ze.logout(),i("Login")}});var o="Login"===a?r.a.createElement(De,{store:Ze,onLogin:i}):r.a.createElement(Ae,{store:Ze});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},o))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.a4702200.chunk.js.map