(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(308)},169:function(e,t,a){},170:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(169),a(17)),c=(a(170),a(345)),s=a(350),u=a(351),m=a(353),d=a(354),p=a(352),g=a(36),f=a(355),v=a(81),h=a.n(v),E=a(25),b=a(57),y=a.n(b),N=a(347),I=a(152),w=a(349),O=a(143),k=a.n(O),x=48,C=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});function j(e){var t=e.store,a=C(),i=r.a.useState(!0),l=Object(o.a)(i,2),c=l[0];l[1];function v(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){v(e,!0)})},1)},[]);var b=r.a.useState(null),O=Object(o.a)(b,2),j=O[0],T=O[1],R=Boolean(j);function L(e){t.setLevelFilter(e),T(null)}function A(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},r.a.createElement(N.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){T(e.currentTarget)}},r.a.createElement(k.a,null),t.levelFilter.text),r.a.createElement(I.a,{id:"long-menu",anchorEl:j,keepMounted:!0,open:R,onClose:L,PaperProps:{style:{maxHeight:4.5*x,width:200}}},t.levelFilters.map(function(e){return r.a.createElement(w.a,{key:e.id,selected:e.id===t.levelFilter,onClick:function(){return L(e)}},e.text)})),t.filteredLevels.map(function(e,n){return r.a.createElement(y.a,{key:e.id,onChange:function(t){return v(e,t)}},r.a.createElement(s.a,{key:e.level,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",style:A(e),className:a.avatar},e.level),title:e.name,subheader:e.displayText}),r.a.createElement(m.a,null,r.a.createElement(E.Video,{onClick:function(){return function(e){document.getElementById(e.id).webkitEnterFullscreen()}(e)},id:e.id,cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:e.poster}),r.a.createElement("div",{className:"card-content"},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.details))),r.a.createElement(d.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(m.a,null,r.a.createElement("div",{className:"card-content2"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(a){return function(e,a){var n=e.target.files[0];t.processFile(n,a,function(e){alert("Uppladdning klar")})}(a,e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(h.a,null)))))))))}))}var T=a(23),R=a(88),L=a(35),A=a.n(L),F=a(83),S=a.n(F),D=a(84),P=a.n(D),M=a(51),U=a(82),H=a(144),V=a.n(H),B=a(362),G=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var z=Object(T.a)(function(e){var t=e.store,a=G(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(o.a)(n,2),l=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(V.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(E.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(B.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:l.name,margin:"normal"}),r.a.createElement(B.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:l.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(B.a,{id:"standard-name",label:"Lag",className:a.textField,value:l.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(B.a,{id:"standard-name",label:"Position",className:a.textField,value:l.position,disabled:!0,margin:"normal"}),r.a.createElement(B.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:l.shirtNumber,disabled:!0,margin:"normal"})))}),J=a(356),_=Object(c.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:R.a[500]}}});function W(e,t){e.setVisibility(t);var a=document.getElementById(e.publicId);a?t?a.play():a.pause():console.log("not found")}var q=Object(T.a)(function(e){var t=e.store,a=_();function i(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(A.a,{style:a})}return t.isRejected?r.a.createElement(S.a,null):r.a.createElement(P.a,null)}return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){W(e,!0)})},1)},[]),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(y.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&t.items.map(function(e,n){return r.a.createElement(y.a,{key:e.publicId,onChange:function(t){return W(e,t)}},r.a.createElement(s.a,{key:e.publicId,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(E.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(i,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(E.Video,{onClick:function(){return function(e){document.getElementById(e.publicId).webkitEnterFullscreen()}(e)},id:e.publicId,cloudName:"deolievif",publicId:e.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:e.poster})),r.a.createElement(J.a,null,r.a.createElement(g.a,{variant:"overline",style:{color:"gray"}},e.displayText))))}),t.selectedProfile&&r.a.createElement(z,{store:t})))}),K=a(360),Y=a(363),X=a(361),Q=a(150),$=a.n(Q),Z=a(85),ee=a.n(Z),te=a(86),ae=a.n(te),ne=a(151),re=a.n(ne),ie=a(15),le=a(145),oe=a.n(le),ce=Object(c.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var se=Object(T.a)(function(e){var t=e.store,a=e.onLogout,n=ce(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),l=Object(o.a)(i,2),c=l[0],s=l[1],u=function(e){return function(t){s(Object(U.a)({},c,Object(M.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},r.a.createElement(oe.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(E.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(B.a,{id:"name",label:"Namn",className:n.textField,value:c.name,onChange:u("name"),margin:"normal"}),r.a.createElement(B.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:c.password,onChange:u("password"),margin:"normal"}),r.a.createElement(B.a,{id:"favoriteTeam",label:"Favoritlag",className:n.textField,value:c.favoriteTeam,onChange:u("favoriteTeam"),margin:"normal"}),r.a.createElement(B.a,{id:"playerTeam",label:"Lag",className:n.textField,value:c.playerTeam,onChange:u("playerTeam"),margin:"normal"}),r.a.createElement(B.a,{id:"position",label:"Position",className:n.textField,value:c.position,onChange:u("position"),margin:"normal"}),r.a.createElement(B.a,{id:"shirtNumber",label:"Tr\xf6jnummer",className:n.textField,value:c.shirtNumber,onChange:u("shirtNumber"),margin:"normal"})),r.a.createElement(f.a,{variant:"outlined",onClick:function(){t.updateUser(c)}},"Spara"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),ue=a(348),me=a(309),de=a(358),pe=a(357),ge=a(359),fe=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var ve=Object(T.a)(function(e){var t=e.store,a=fe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA S\xc4SONG 1"),r.a.createElement(g.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(ue.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(me.a,{key:e.id},r.a.createElement(pe.a,null,r.a.createElement(p.a,null,r.a.createElement(E.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(de.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(ge.a,{variant:"inset",component:"li"}))}))))}),he=a(146),Ee=a.n(he),be=a(155);var ye=Object(T.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(be.a,{className:"help"},r.a.createElement(g.a,{paragraph:!0},"S\xe4song 1:"),r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song har 20 utmaningar."),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(ee.a,null)," Hem"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens anv\xe4ndaruppladde filmer."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(P.a,null),"Under utv\xe4rdering f\xf6r att se om man klarat det."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(A.a,null),"Klarad utmaning"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(S.a,null),"Utmaning misslyckad. Bara att f\xf6rs\xf6ka igen. Kanske hade du inte flytet i utmaningen, eller missf\xf6rt\xe5tt n\xe5got. Kontrollera videon och instruktionerna och f\xf6rs\xf6k igen."),r.a.createElement(g.a,{paragraph:!0},"Om du klickar p\xe5 personens namn s\xe5 kan du se profilen."),r.a.createElement(g.a,{paragraph:!0},"Klicka p\xe5 videon f\xf6r att se den i helsk\xe4rm.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(A.a,null)," Utmaningar"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens utmaningar. Det finns 3 olika niv\xe5er. L\xe4tt, medium, sv\xe5r."),r.a.createElement(g.a,{paragraph:!0},"10 l\xe4tta \xf6vningar, 5 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 medium \xf6vningar, 10 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 sv\xe5ra \xf6vningar, 20 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(h.a,null),"Klicka p\xe5 denna f\xf6r att ladda upp en film. Filma alltid i horisontellt l\xe4ge.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(A.a,null)," Topplistan"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song best\xe5r av maximalt 200 po\xe4ng. H\xe4r visas vem som f\xe5tt flest po\xe4ng.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(ae.a,null)," Profil"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r kan du ladda upp din profilbild och andra anv\xe4ndarinst\xe4llningar.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(Ee.a,null)," Verktyg"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(g.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(f.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),Ne=a(147),Ie=a(148),we=a(153),Oe=a(149),ke=a(154),xe=function(e){function t(){var e,a;Object(Ne.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(we.a)(this,(e=Object(Oe.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-1+1))+1;return t<10?"yellow":t<20?"red":t<30?"blue":t<40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(ke.a)(t,e),Object(Ie.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),Ce=Object(T.a)(xe);function je(e){return r.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}var Te=Object(c.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Re=Object(ie.c)(function(e){var t=e.store,a=e.onLogout,i=Te(),l=Object(n.useState)(0),c=Object(o.a)(l,2),s=c[0],u=c[1];return"NUMBER"===t.appRunning?r.a.createElement(Ce,{store:t}):"COLOR"===t.appRunning?r.a.createElement(Ce,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(K.a,{position:"fixed",color:"default"},r.a.createElement(Y.a,{value:s,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(X.a,{icon:r.a.createElement(ee.a,null)}),r.a.createElement(X.a,{icon:r.a.createElement(A.a,null)}),r.a.createElement(X.a,{icon:r.a.createElement($.a,null)}),r.a.createElement(X.a,{icon:r.a.createElement(ae.a,null)}),r.a.createElement(X.a,{icon:r.a.createElement(re.a,null)}))),0===s&&r.a.createElement(je,null,r.a.createElement(q,{store:t})),1===s&&r.a.createElement(je,null,r.a.createElement(j,{store:t})),2===s&&r.a.createElement(je,null,r.a.createElement(ve,{store:t})),3===s&&r.a.createElement(je,null,r.a.createElement(se,{store:t,onLogout:a})),4===s&&r.a.createElement(je,null,r.a.createElement(ye,{store:t})))}),Le=a(4);function Ae(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),l=Object(o.a)(i,2),c=l[0],s=l[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),d=m[0],p=m[1],v=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(o.a)(a,2),i=r[0],l=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),h=Object(o.a)(v,2),E=(h[0],h[1]);Object(Le.a)({root:{"& label.Mui-focused":{color:"white"},"& label.MuiFormLabel-root":{color:"white"},"& .MuiInput-underline":{borderBottomColor:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"white"}}}})(B.a);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"skillsta.jpg",alt:"skillsta"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(g.a,{paragraph:!0,variant:"h3"},"skillsta"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(f.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(c.toLowerCase(),d)?(E(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var Fe=a(20),Se=a.n(Fe),De=a(45),Pe=a(7),Me={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},Ue=Pe.d.model("Level",{id:Pe.d.string,level:Pe.d.integer,details:Pe.d.string,name:Pe.d.string,category:Pe.d.string,publicId:Pe.d.string,season:Pe.d.integer}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get categoryName(){return Me[e.category]},get isDone(){var t=Object(Pe.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function He(e){return e<=9?"0"+e:e}var Ve=Pe.d.model("Item",{id:Pe.d.string,createdTime:Pe.d.Date,userName:Pe.d.string,publicId:Pe.d.string,level:Pe.d.integer,status:Pe.d.string}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+He(e.createdTime.getMonth()+1)+"-"+He(e.createdTime.getDate())},get user(){return Object(Pe.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(Pe.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),Be=Pe.d.model("User",{id:Pe.d.string,userName:Pe.d.string,name:Pe.d.string,password:Pe.d.string,profileImage:Pe.d.string,favoriteTeam:Pe.d.optional(Pe.d.string,""),playerTeam:Pe.d.optional(Pe.d.string,""),position:Pe.d.optional(Pe.d.string,""),shirtNumber:Pe.d.optional(Pe.d.string,"")}).views(function(e){return{get levelStore(){return Object(Pe.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,l=t.playerTeam,o=t.position,c=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=l,e.position=o,e.shirtNumber=c}}}),Ge=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],ze="MAIN",Je=Pe.d.model("LevelStore",{levels:Pe.d.array(Ue),items:Pe.d.array(Ve),users:Pe.d.array(Be)}).views(function(e){return{get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return 0===e.levelFilter.id?e.levels:1===e.levelFilter.id?e.levels.filter(function(e){return!e.isDone}):2===e.levelFilter.id?e.levels.filter(function(e){return e.isDone}):[]},get levelFilters(){return Ge}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedProfile:null,levelFilter:e.levelFilters[0],api:null,appRunning:ze,colorCount:2}}).actions(function(e){return{setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectProfile:function(t){e.selectedProfile=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(De.a)(Se.a.mark(function t(){var a,n,r,i;return Se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchLevels();case 5:return n=t.sent,t.next=8,e.api.fetchItems();case 8:return r=t.sent,i={users:[],items:[],levels:[]},n.forEach(function(e){e.fields.id=e.id,i.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,i.users.push(e.fields)}),r.reverse(),r.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),i.items.push(e.fields)}),t.abrupt("return",i);case 15:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(De.a)(Se.a.mark(function t(){var a;return Se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(Pe.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(Pe.b)(Se.a.mark(function t(a,n){var r;return Se.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(Pe.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),i.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={userName:e.loggedIn.userName,publicId:t.public_id,level:a.level,status:"WAITINGFORAPPROVAL"};e.api.insertItem(r),e.refresh(),console.log(e.items),n(this.responseText)},i.send(r)}}}),_e="appC7N77wl4iVEXGD",We="Levels",qe="Grid%20view",Ke="keyHQ5GM7ktar7YtG",Ye=100,Xe=new Request("https://api.airtable.com/v0/".concat(_e,"/Users?maxRecords=").concat(Ye,"&view=").concat(qe),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ke)})}),Qe=new Request("https://api.airtable.com/v0/".concat(_e,"/").concat(We,"?maxRecords=").concat(Ye,"&view=").concat(qe),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ke)})}),$e=new Request("https://api.airtable.com/v0/".concat(_e,"/Items?maxRecords=").concat(Ye,"&view=").concat(qe),{method:"get",headers:new Headers({Authorization:"Bearer ".concat(Ke)})}),Ze={getUsers:function(){var e=Object(De.a)(Se.a.mark(function e(){var t,a;return Se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Xe).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="https://api.airtable.com/v0/appC7N77wl4iVEXGD/Users/".concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(Ke),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchLevels:function(){var e=Object(De.a)(Se.a.mark(function e(){var t,a;return Se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Qe).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(De.a)(Se.a.mark(function e(){var t,a;return Se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch($e).catch(function(e){console.log(e)});case 2:if(!((t=e.sent).status>=200&&t.status<300)){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.records);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("https://api.airtable.com/v0/appC7N77wl4iVEXGD/Items",{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(Ke),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},et=Je.create();et.init(Ze,window.localStorage.getItem("loggedIn"));var tt=Object(ie.c)(function(){var e=Object(n.useState)("Login"),t=Object(o.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){et.setHeight(window.innerHeight)},[]),!et.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(et.initzialize&&et.loggedIn)return r.a.createElement(Re,{store:et,onLogout:function(){et.logout(),i("Login")}});var l="Login"===a?r.a.createElement(Ae,{store:et,onLogin:i}):r.a.createElement(Re,{store:et});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},l))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,1,2]]]);
//# sourceMappingURL=main.97156d98.chunk.js.map