(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){e.exports=a(330)},179:function(e,t,a){},180:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),o=(a(179),a(14)),c=(a(180),a(374)),s=a(13),u=a(375),d=a(376),m=a(377),p=a(326),g=a(40),f=a(51),v=a.n(f),h=a(20),E=a(149);var b=Object(s.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).webkitEnterFullscreen()}if(t.videoId)return r.a.createElement(E.a,{id:t.id,videoId:t.videoId,opts:{width:"100%",playerVars:{autoplay:1,enablejsapi:1}}});return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%",poster:t.dropboxPoster},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(h.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),y=a(32),N=a.n(y),w=a(105),I=a.n(w),O=a(52),j=a(77),C=a(373),k=a(58),x=a.n(k),T=a(391);var S=Object(s.a)(function(e){var t=e.store,a=e.onBack,n=r.a.useState({name:"",description:"",details:""}),i=Object(o.a)(n,2),l=i[0],c=i[1],s=function(e){return function(t){c(Object(j.a)({},l,Object(O.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"add-drill"},r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return a()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name)),r.a.createElement(T.a,{id:"name",label:"Namn",value:l.name,onChange:s("name"),margin:"normal"}),r.a.createElement(T.a,{id:"description",label:"Description",value:l.description,onChange:s("description"),margin:"normal"}),r.a.createElement(T.a,{id:"details",label:"details",value:l.details,onChange:s("details"),margin:"normal"}),r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e){var n=e.target.files[0];t.processFile(n,l,function(e){a()})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(C.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(x.a,null)))))}),L=(a(6),a(393)),P=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});Object(s.a)(function(e){var t=e.store,a=P(),i=r.a.useState(!0),l=Object(o.a)(i,2);function c(e,t){if(!e.videoId){e.setVisibility(t);var a=document.getElementById(e.id);a?a.play&&(t?a.play():a.pause()):console.log("not found")}}l[0],l[1],Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){c(e,!0)})},1)});var s=r.a.useState(null),f=Object(o.a)(s,2),E=f[0],y=(f[1],Boolean(E),r.a.useState(!1)),w=Object(o.a)(y,2),O=w[0],j=w[1];function C(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},!O&&r.a.createElement("div",null,r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectCategory()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name," (",t.filteredLevels.length," st)"),r.a.createElement("div",{className:"action"},r.a.createElement(I.a,{onClick:function(){j(!0)}}))),t.filteredLevels.map(function(e,n){return r.a.createElement(v.a,{key:e.id,onChange:function(t){return c(e,t)}},r.a.createElement(u.a,{key:e.level,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",style:C(e),className:a.avatar}),title:e.name}),r.a.createElement(m.a,null,"mp4"===e.fileType&&r.a.createElement(b,{store:t,settings:e}),("jpg"===e.fileType||"gif"===e.fileType)&&e.hasSharedPath&&r.a.createElement("img",{src:e.src}),("jpg"===e.fileType||"gif"===e.fileType)&&!e.hasSharedPath&&r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%"}),r.a.createElement("div",{className:"card-content"},r.a.createElement(L.a,{label:e.playerCount}),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.details),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)))))})),O&&r.a.createElement(S,{store:t,onBack:function(){return j(!1)}}))});var D=a(372),R=a(378),A=a(379),F=a(381),M=a(380),U=a(382),B=a(85),H=a.n(B);var V=Object(s.a)(function(e){var t=e.store,a=(e.onBack,t.selectedDrill);return r.a.createElement("div",{className:"game"},r.a.createElement("div",null,r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectDrill()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name)),r.a.createElement("div",{className:"drill"},r.a.createElement("div",null,t.selectedDrill.name),"mp4"===a.fileType&&r.a.createElement(b,{store:t,settings:a}),("jpg"===a.fileType||"gif"===a.fileType)&&a.hasSharedPath&&r.a.createElement("img",{src:a.src}),("jpg"===a.fileType||"gif"===a.fileType)&&!a.hasSharedPath&&r.a.createElement(h.Image,{cloudName:"deolievif",publicId:a.publicId,width:"100%",height:"100%"}),r.a.createElement("div",{className:"desc"},"Setup"),r.a.createElement("div",{className:"desc"},a.details),r.a.createElement("div",null,a.minPlayers),r.a.createElement("div",null,a.maxPlayers))))});var z=Object(s.a)(function(e){var t=e.store,a=r.a.useState(!1),n=Object(o.a)(a,2),i=n[0],l=(n[1],r.a.useState(!1)),c=Object(o.a)(l,2),s=c[0];return c[1],r.a.createElement("div",{className:"game"},!t.selectedDrill&&r.a.createElement("div",null,r.a.createElement("div",{className:"back"},r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectCategory()}})),r.a.createElement("div",{className:"right"},t.selectedCategory.name," (",t.filteredLevels.length," st)")),r.a.createElement(D.a,{dense:i},t.filteredLevels.map(function(e){return r.a.createElement(R.a,{key:e.id,onClick:function(){return a=e,void t.selectDrill(a);var a}},r.a.createElement(A.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{className:"login-img",src:"0.jpg",alt:"Tr\xe4ningar"}))),r.a.createElement(M.a,{primary:e.name,secondary:s?"Secondary text":null}),r.a.createElement(F.a,null,r.a.createElement(U.a,{edge:"end","aria-label":"Delete"},r.a.createElement(H.a,null))))}))),t.selectedDrill&&r.a.createElement(V,{store:t}))}),G=Object(c.a)(function(e){return{root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},title:{margin:e.spacing(4,0,2)}}});var J=Object(s.a)(function(e){var t=e.store,a=(G(),r.a.useState(!1)),n=Object(o.a)(a,2),i=n[0],l=(n[1],r.a.useState(!1)),c=Object(o.a)(l,2),s=c[0];return c[1],r.a.createElement("div",{className:"drills"},!t.selectedCategory&&r.a.createElement(D.a,{dense:i},t.listCategories.map(function(e){return r.a.createElement(R.a,{key:e.id,onClick:function(){return function(e){t.selectCategory(e)}(e)}},r.a.createElement(A.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{className:"login-img",src:"0.jpg",alt:"Tr\xe4ningar"}))),r.a.createElement(M.a,{primary:e.name,secondary:s?"Secondary text":null}),r.a.createElement(F.a,null,r.a.createElement(U.a,{edge:"end","aria-label":"Delete"},r.a.createElement(H.a,null))))})),t.selectedCategory&&r.a.createElement(z,{store:t}))}),Y=a(87),_=a(76),W=a.n(_),q=a(106),K=a.n(q),X=a(107),Z=a.n(X),Q=a(383),$=a(384),ee=a(386),te=a(385),ae=Object(c.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});var ne=Object(s.a)(function(e){e.store;var t=e.user,a=ae();return r.a.createElement(Q.a,{cellHeight:180,className:a.gridList},r.a.createElement($.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(te.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement($.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(ee.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),re=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var ie=Object(s.a)(function(e){var t=e.store,a=re(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(o.a)(n,2),l=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(N.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(T.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:l.name,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:l.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Lag",className:a.textField,value:l.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Position",className:a.textField,value:l.position,disabled:!0,margin:"normal"}),r.a.createElement(T.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:l.shirtNumber,disabled:!0,margin:"normal"}),r.a.createElement(ne,{store:t,user:t.selectedProfile})))}),le=a(387),oe=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Y.a[500]}}});function ce(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(s.a)(function(e){var t=e.store,a=oe();function i(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(W.a,{style:a})}return t.isRejected?r.a.createElement(K.a,null):r.a.createElement(Z.a,null)}return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){ce(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(v.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.filteredItems.map(function(e,n){return r.a.createElement(v.a,{key:e.publicId,onChange:function(t){return ce(e,t)}},r.a.createElement(u.a,{key:e.publicId,className:a.card},r.a.createElement(d.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(i,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(b,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(g.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(g.a,{variant:"subtitle2"},e.comment))),r.a.createElement(le.a,null,r.a.createElement(g.a,{variant:"overline",style:{color:"gray"}},e.displayText))))}),t.selectedProfile&&r.a.createElement(ie,{store:t})))});var se=a(389),ue=a(392),de=a(390),me=a(159),pe=a.n(me),ge=a(109),fe=a.n(ge),ve=a(161),he=a.n(ve),Ee=a(160),be=a.n(Ee),ye=a(17),Ne=a(155),we=a.n(Ne),Ie=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var Oe=Object(s.a)(function(e){var t=e.store,a=e.onLogout,n=Ie(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),l=Object(o.a)(i,2),c=l[0],s=l[1],u=function(e){return function(t){s(Object(j.a)({},c,Object(O.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(C.a,{variant:"outlined"},r.a.createElement(we.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(h.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(T.a,{id:"name",label:"Namn",className:n.textField,value:c.name,onChange:u("name"),margin:"normal"}),r.a.createElement(T.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:c.password,onChange:u("password"),margin:"normal"})),r.a.createElement(C.a,{variant:"outlined",onClick:function(){t.updateUser(c)}},"Spara"),r.a.createElement(C.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),je=a(388),Ce=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});Object(s.a)(function(e){var t=e.store,a=Ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA S\xc4SONG 1"),r.a.createElement(g.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(D.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(R.a,{key:e.id},r.a.createElement(A.a,null,r.a.createElement(p.a,null,r.a.createElement(h.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(M.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(je.a,{variant:"inset",component:"li"}))}))))});var ke=a(108),xe=a.n(ke),Te=a(164);var Se=Object(s.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(Te.a,{className:"help"},r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(xe.a,null)," Verktyg"),r.a.createElement(C.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(C.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(C.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(g.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(C.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))});var Le=Object(s.a)(function(e){var t=e.store;return r.a.createElement(Te.a,{className:"help"},r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement("div",null,t.currentTraining.description),t.players.map(function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox"}),e.name)})))}),Pe=a(156),De=a(157),Re=a(162),Ae=a(158),Fe=a(163),Me=function(e){function t(){var e,a;Object(Pe.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(Re.a)(this,(e=Object(Ae.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-0+1))+0;return t<=10?"yellow":t<=20?"red":t<=30?"blue":t<=40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(Fe.a)(t,e),Object(De.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),Ue=Object(s.a)(Me);function Be(e){return r.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}var He=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Ve=Object(ye.c)(function(e){var t=e.store,a=e.onLogout,i=He(),l=Object(n.useState)(1),c=Object(o.a)(l,2),s=c[0],u=c[1];return"NUMBER"===t.appRunning?r.a.createElement(Ue,{store:t}):"COLOR"===t.appRunning?r.a.createElement(Ue,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(se.a,{position:"fixed",color:"default"},r.a.createElement(ue.a,{value:s,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(de.a,{icon:r.a.createElement(pe.a,null)}),r.a.createElement(de.a,{icon:r.a.createElement(be.a,null)}),r.a.createElement(de.a,{icon:r.a.createElement(he.a,null)}),r.a.createElement(de.a,{icon:r.a.createElement(fe.a,null)}))),0===s&&r.a.createElement(Be,null,r.a.createElement(J,{store:t})),1===s&&r.a.createElement(Be,null,r.a.createElement(Le,{store:t})),2===s&&r.a.createElement(Be,null,r.a.createElement(Se,{store:t})),3===s&&r.a.createElement(Be,null,r.a.createElement(Oe,{store:t,onLogout:a})))});function ze(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),l=Object(o.a)(i,2),c=l[0],s=l[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),m=d[0],p=d[1],f=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(o.a)(a,2),i=r[0],l=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),v=Object(o.a)(f,2),h=(v[0],v[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"loddelogo.jpg",alt:"Tr\xe4ningar"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(g.a,{paragraph:!0,variant:"h3"},"IF L\xf6dde P10"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement(C.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(c.toLowerCase(),m)?(h(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var Ge=a(19),Je=a.n(Ge),Ye=a(39),_e=a(7),We={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},qe=_e.d.model("Level",{id:_e.d.string,level:_e.d.integer,details:_e.d.maybeNull(_e.d.string),description:_e.d.maybeNull(_e.d.string),name:_e.d.string,category:_e.d.string,publicId:_e.d.maybeNull(_e.d.string),season:_e.d.integer,sharedPath:_e.d.maybeNull(_e.d.string),fileType:_e.d.maybeNull(_e.d.string),posterPath:_e.d.maybeNull(_e.d.string),minPlayers:_e.d.maybeNull(_e.d.integer),maxPlayers:_e.d.maybeNull(_e.d.integer),videoId:_e.d.maybeNull(_e.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get src(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/Lpass.").concat(e.fileType,"?raw=1")},get playerCount(){return e.minPlayers?e.minPlayers===e.maxPlayers?"Antal spelare: ".concat(e.minPlayers):"Antal spelare: ".concat(e.minPlayers," - ").concat(e.maxPlayers):"Alla"},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".").concat(e.fileType,"?raw=1")},get dropboxPoster(){return"https://www.dropbox.com/s/".concat(e.posterPath,"/ConeDrill1.jpg?raw=1")},get categoryName(){return We[e.category]},get isDone(){var t=Object(_e.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function Ke(e){return e<=9?"0"+e:e}var Xe=_e.d.model("Item",{id:_e.d.string,createdTime:_e.d.Date,userName:_e.d.string,publicId:_e.d.string,level:_e.d.integer,status:_e.d.string,sharedPath:_e.d.maybeNull(_e.d.string),comment:_e.d.maybeNull(_e.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+Ke(e.createdTime.getMonth()+1)+"-"+Ke(e.createdTime.getDate())},get user(){return Object(_e.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(_e.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),Ze=_e.d.model("User",{id:_e.d.string,userName:_e.d.string,name:_e.d.string,password:_e.d.string,profileImage:_e.d.string,favoriteTeam:_e.d.optional(_e.d.string,""),playerTeam:_e.d.optional(_e.d.string,""),position:_e.d.optional(_e.d.string,""),shirtNumber:_e.d.optional(_e.d.string,"")}).views(function(e){return{get levelStore(){return Object(_e.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,l=t.playerTeam,o=t.position,c=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=l,e.position=o,e.shirtNumber=c}}}),Qe=_e.d.model("Training",{id:_e.d.string,description:_e.d.string}),$e=_e.d.model("Player",{id:_e.d.string,name:_e.d.string}),et=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],tt=[{id:0,category:"BALLMASTERY",name:"DEL 1 - Teknik/Passningar"},{id:1,category:"PASSINGDRILLS",name:"DEL 2 - Kombinationer"},{id:2,category:"POSSESION",name:"DEL 3 - Possession/spel"}],at="MAIN",nt=_e.d.model("LevelStore",{levels:_e.d.array(qe),items:_e.d.array(Xe),users:_e.d.array(Ze),trainings:_e.d.array(Qe),players:_e.d.array($e)}).views(function(e){return{get listCategories(){return tt},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return e.levels.filter(function(t){return t.category===e.selectedCategory.category})},get levelFilters(){return et},get currentTraining(){return e.trainings[0]}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedCategory:null,selectedDrill:null,levelFilter:e.levelFilters[0],api:null,appRunning:at,colorCount:2,currentSeason:1}}).actions(function(e){return{setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectCategory:function(t){e.selectedCategory=t},selectDrill:function(t){e.selectedDrill=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Ye.a)(Je.a.mark(function t(){var a,n,r,i;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchLevels();case 5:return n=t.sent,t.next=8,e.api.fetchItems();case 8:return r=t.sent,i={users:[],items:[],levels:[],trainings:[{id:"1",description:"7 oktober",active:!0},{id:"2",description:"9 oktober",active:!1},{id:"2",description:"14 oktober",active:!1},{id:"2",description:"16 oktober",active:!1}],players:[{id:"1",name:"Gustav"},{id:"2",name:"Oskar"}]},n.forEach(function(e){e.fields.id=e.id,i.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),r.reverse(),r.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),i.items.push(e.fields)}),t.abrupt("return",i);case 15:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Ye.a)(Je.a.mark(function t(){var a;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(_e.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(_e.b)(Je.a.mark(function t(a,n){var r;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(_e.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData,i="image/jpeg"===t.type||"image/png"===t.type;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),i||r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var l=i?"https://api.cloudinary.com/v1_1/deolievif/image/upload":"https://api.cloudinary.com/v1_1/deolievif/video/upload/",o=new XMLHttpRequest;o.open("POST",l,!0),o.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={name:a.name,description:a.description,publicId:t.public_id,category:e.selectedCategory.category,details:"details",season:1,fileType:i?"jpg":"mp4"};e.api.insertLevel(r),e.refresh(),n(this.responseText)},o.send(r)}}}),rt={base:"app9IO48CYcfaIY4Z",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:100,url:"https://api.airtable.com/v0/app9IO48CYcfaIY4Z"},it={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=rt;return t&&(r.maxRecords=t),n&&(r.view=n),a&&(r.table=a),new Request("".concat(rt.url,"/").concat(r.table,"?maxRecords=").concat(r.maxRecords,"&view=").concat(r.view),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(r.apiKey)})})},response:function(){var e=Object(Ye.a)(Je.a.mark(function e(t){var a,n;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Ye.a)(Je.a.mark(function e(){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(rt.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(rt.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchLevels:function(){var e=Object(Ye.a)(Je.a.mark(function e(){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Levels"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Ye.a)(Je.a.mark(function e(){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Items"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),addNewDrill:function(e){fetch(new Request("".concat(rt.url,"/Levels"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(rt.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})},insertLevel:function(e){fetch(new Request("".concat(rt.url,"/Levels"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(rt.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},lt=nt.create();lt.init(it,window.localStorage.getItem("loggedIn"));var ot=Object(ye.c)(function(){var e=Object(n.useState)("Login"),t=Object(o.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){lt.setHeight(window.innerHeight)},[]),!lt.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(lt.initzialize&&lt.loggedIn)return r.a.createElement(Ve,{store:lt,onLogout:function(){lt.logout(),i("Login")}});var l="Login"===a?r.a.createElement(ze,{store:lt,onLogin:i}):r.a.createElement(Ve,{store:lt});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},l))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[174,1,2]]]);
//# sourceMappingURL=main.f0514aad.chunk.js.map