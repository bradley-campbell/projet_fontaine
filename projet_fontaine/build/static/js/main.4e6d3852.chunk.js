(this.webpackJsonpprojet_fontaine=this.webpackJsonpprojet_fontaine||[]).push([[0],{103:function(n,e,t){"use strict";t.r(e);var r=t(4),i=t(1),a=t.n(i),o=t(10),c=t.n(o),s=t(8),l=t(22),d=t.n(l),u=t(29),b=(t(84),t(9)),j=t(12),p=function(n){return{type:"SET_CENTER",center:n}},f=function(n){return{type:"SET_CURRENT_LOCATION",currentLocation:n}},x=function(n){return{type:"SET_FOUNTAIN_DATA",fountainData:n}},g=function(n){return{type:"SET_SELECTED",selected:n}},h=function(n){return{type:"SET_ZOOM",zoom:n}},O={backgroundColor:"#96bff6",styles:[{stylers:[{saturation:-100}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#0099dd"}]},{elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#aadd55"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"on"}]},{}],disableDefaultUI:!0,zoomControl:!0,minZoom:11,maxZoom:20,noClear:!0},v={2:{borough:"Ahuntsic-Cartierville",lat:45.5447,lng:-73.6681,id:2,twitterHandle:"@AhuntsicCartier"},14:{borough:"Anjou",lng:-73.54974978,lat:45.60825004,id:14,twitterHandle:"@MTL_Ville"},12:{borough:"C\xf4te-des-Neiges-Notre-Dame-de-Gr\xe2ce",lat:45.4912,lng:-73.6327,id:12,twitterHandle:"@CDN_NDG"},19:{borough:"L'\xcele-Bizard-Sainte-Genevi\xe8ve",lng:-73.89995868,lat:45.51647305,id:19,twitterHandle:"@MTLibsg"},3:{borough:"Lachine",lat:45.4413,lng:-73.6886,id:3,twitterHandle:"@Lachine_MTL"},7:{borough:"LaSalle",lat:45.4306,lng:-73.6348,id:7,twitterHandle:"@MTL_Ville"},6:{borough:"Le Sud-Ouest",lat:45.4661,lng:-73.5939,id:6,twitterHandle:"@SO_MTL"},13:{borough:"Mercier-Hochelaga-Maisonneuve",lat:45.573,lng:-73.5308,id:13,twitterHandle:"@MTL_Ville"},18:{borough:"Montr\xe9al-Nord",lat:45.6072,lng:-73.6315,id:18,twitterHandle:"@MTL_Ville"},8:{borough:"Outremont",lat:45.5143,lng:-73.609,id:8,twitterHandle:"@MTL_Ville"},16:{borough:"Pierrefonds-Roxboro",lng:-73.84578483,lat:45.49282384,id:16,twitterHandle:"@pfds_rox"},9:{borough:"Plateau-Mont-Royal",lat:45.5232,lng:-73.587,id:9,twitterHandle:"@LePMR"},10:{borough:"Rivi\xe8re-des-Prairies-Pointe-aux-Trembles",lat:45.6731,lng:-73.5187,id:10,twitterHandle:"@MTL_Ville"},11:{borough:"Rosemont-La Petite-Patrie",lat:45.5517,lng:-73.5836,id:11,twitterHandle:"@Arr_RosemontPP"},17:{borough:"Saint-Laurent",lng:-73.72505571,lat:45.50818573,id:17,twitterHandle:"@ArrSaintLaurent"},1:{borough:"Saint-L\xe9onard",lat:45.5875,lng:-73.597,id:1,twitterHandle:"@MTL_Ville"},5:{borough:"Verdun",lat:45.4548,lng:-73.5699,id:5,twitterHandle:"@Arr_Verdun"},15:{borough:"Ville-Marie",lat:45.5088,lng:-73.5553,id:15,twitterHandle:"@CentrevilleMTL"},4:{borough:"Villeray-Saint-Michel-Parc-Extension",lat:45.5553,lng:-73.6083,id:4,twitterHandle:"@MTL_VSP"}},m={1:{FR:"Tr\xe8s bon \xe9tat",EN:"Very Good Condition",id:1,rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"},2:{FR:"Bon \xe9tat",EN:"Good Condition",id:2,rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"},3:{FR:"\xc9tat passable",EN:"Passable Condition",id:3,rating:"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f"},4:{FR:"Mauvais \xe9tat",EN:"Poor Condition",id:4,rating:"\u2b50\ufe0f\u2b50\ufe0f"},5:{FR:"Tr\xe8s mauvais \xe9tat",EN:"Very Poor Condition",id:5,rating:"\u2b50\ufe0f"},6:{FR:"Enlev\xe9e/D\xe9plac\xe9e",EN:"Removed/Moved",id:6,rating:"\ud83d\udccd"}},y=t(28),w=function(){var n=Object(j.c)((function(n){return n.viewState})),e=n.center,t=n.fountainData,i=n.zoom,a=n.currentLocation,o=Object(j.b)(),c=function(){var n=Object(u.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/fountain/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:t=n.sent,o(g(t.data));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=Object(y.c)({googleMapsApiKey:"AIzaSyDqcFkvxc2nQU5TxrwnpVH_0UM5oNODkz4",libraries:["places"]},[]),l=s.isLoaded;return s.loadError?"Error Loading Maps":l?Object(r.jsxs)(y.a,{mapContainerStyle:{width:"100vw",height:window.innerWidth>768?"85vh":"92.5vh"},center:e,options:O,zoom:i,children:[t.map((function(n){return Object(r.jsx)(y.b,{position:{lat:+n.lat,lng:+n.lng},icon:{url:"/droppinlight.svg",scaledSize:new window.google.maps.Size(35.4,54.2),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(17.7,54.2)},onClick:function(){c(n._id)}},n._id)})),a&&Object(r.jsx)(y.b,{position:{lat:a.lat,lng:a.lng}})]}):"Loading Maps"},T=t(63),k=t(58),E=t(59),_=t(133),C=t(140),S=t(141),N=t(136),L=t(139);function M(){var n=Object(s.a)(["\n  background-color: blue;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return M=function(){return n},n}var z=Object(_.a)((function(n){return{formControl:{margin:n.spacing(1),minWidth:window.innerWidth>768?400:"80vw"},selectEmpty:{marginTop:n.spacing(2)}}})),D=function(){var n=z(),e=Object(j.c)((function(n){return n.viewState})).language,t=Object(j.b)(),i=function(){var n=Object(u.a)(d.a.mark((function n(e){var r,i,a,o,c,s,l;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("All"!==e.target.value){n.next=9;break}return n.next=3,fetch("/all");case 3:return r=n.sent,n.next=6,r.json();case 6:return i=n.sent,t(x(i.data)),n.abrupt("return");case 9:return a=v[e.target.value],o=a.lat,c=a.lng,t(p({lat:o,lng:c})),n.next=13,fetch("/fountains/".concat(v[e.target.value].borough));case 13:return s=n.sent,n.next=16,s.json();case 16:l=n.sent,t(x(l.data)),t(h(13));case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(P,{className:"desktop",children:Object(r.jsxs)(N.a,{className:n.formControl,onChange:i,children:[Object(r.jsx)(C.a,{shrink:!0,id:"placeholder share your feedback",children:"fran\xe7ais"===e?"Choissisez une arrondissement":"Choose a borough"}),Object(r.jsxs)(L.a,{labelId:"select feedback",id:"select feedback",onChange:i,displayEmpty:!0,className:n.selectEmpty,children:[Object(r.jsx)(S.a,{value:"All",children:Object(r.jsx)("em",{children:"fran\xe7ais"===e?"Tous les resultats":"All Results"})}),Object.values(v).map((function(n){return Object(r.jsx)(S.a,{value:n.id,children:n.borough},n.id)}))]})]})})})},P=b.b.div(M()),A=t(104),R=t(138),H=Object(_.a)((function(n){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:n.spacing(1)}}}})),F=function(){var n=Object(j.b)(),e=Object(j.c)((function(n){return n.viewState})).language,t=H(),i=function(){n(function(n){return{type:"SET_LANGUAGE",language:n}}("fran\xe7ais"===e?"english":"fran\xe7ais"))};return Object(r.jsx)("div",{className:t.root,children:Object(r.jsxs)(R.a,{size:"small",variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(r.jsx)(A.a,{className:"languageToggle",onClick:i,disabled:"fran\xe7ais"===e,children:"FR"}),Object(r.jsx)(A.a,{className:"languageToggle",onClick:i,disabled:"english"===e,children:"EN"})]})})};function I(){var n=Object(s.a)([""]);return I=function(){return n},n}function V(){var n=Object(s.a)(["\n  position: absolute;\n  top: 7.5vh;\n  left: 0;\n  width: 100vw;\n  background-color: rgba(150, 191, 246, 0.75);\n  border-bottom: 2px #96bff6 solid;\n  z-index: 15;\n  visibility: ",";\n  display: none;\n\n  @media only screen and (max-width: 768px) {\n    display: inline;\n  }\n"]);return V=function(){return n},n}function U(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]);return U=function(){return n},n}function G(){var n=Object(s.a)(["\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #231f20;\n  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);\n  width: 6.8vh;\n  height: 6.8vh;\n  max-width: 68px;\n  max-height: 68px;\n  border-radius: 50%;\n  margin-right: 15px;\n\n  @media only screen and (max-width: 768px) {\n    width: 60px;\n    height: 60px;\n    margin-top: 10px;\n  }\n"]);return G=function(){return n},n}function W(){var n=Object(s.a)(["\n  height: 6vh;\n  max-height: 60px;\n  width: auto;\n\n  @media only screen and (max-width: 768px) {\n    height: 50px;\n    width: auto;\n  }\n"]);return W=function(){return n},n}function B(){var n=Object(s.a)(["\n  display: flex;\n"]);return B=function(){return n},n}function J(){var n=Object(s.a)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  padding: 5px;\n  color: white;\n  cursor: pointer;\n  outline: none;\n\n  :active {\n    background-color: #578cad; // just testing this out, TODO change button colors when clicked\n  }\n"]);return J=function(){return n},n}function X(){var n=Object(s.a)(["\n  overflow: hidden;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 7.5vh;\n  max-height: 100px;\n  width: 100vw;\n  background-color: #96bff6;\n  z-index: 10;\n  display: flex;\n  padding: 15px;\n  align-items: center;\n  justify-content: space-between;\n\n  .desktop {\n    @media only screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  .mobile {\n    display: none;\n\n    @media only screen and (max-width: 768px) {\n      display: inline;\n    }\n  }\n"]);return X=function(){return n},n}var Z=function(){var n=Object(j.b)(),e=Object(j.c)((function(n){return n.viewState})).dropDown;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(Y,{className:"mobile",onClick:function(){return n(function(n){return{type:"DROP_DOWN",visible:!n}}(e))},children:Object(r.jsx)(T.a,{size:25,color:"white"})}),Object(r.jsxs)(nn,{children:[Object(r.jsx)($,{children:Object(r.jsx)(Q,{src:"Eaubot-full.svg"})}),Object(r.jsx)("h2",{className:"desktop",children:"Eau-bot"})]}),Object(r.jsxs)(K,{children:[Object(r.jsx)(tn,{className:"desktop",children:Object(r.jsx)(F,{})}),Object(r.jsx)(Y,{onClick:function(){navigator.geolocation.getCurrentPosition((function(e){n(h(16)),n(f({lat:e.coords.latitude,lng:e.coords.longitude})),n(p({lat:e.coords.latitude,lng:e.coords.longitude}))}))},children:Object(r.jsx)(k.Icon,{icon:E.compass,size:window.innerWidth>768?40:30})})]})]}),Object(r.jsxs)(en,{className:"mobile",view:e,children:[Object(r.jsx)(D,{}),Object(r.jsx)(F,{})]})]})},q=b.b.div(X()),Y=b.b.button(J()),K=b.b.div(B()),Q=b.b.img(W()),$=b.b.div(G()),nn=b.b.div(U()),en=b.b.div(V(),(function(n){return n.view?"visible":"hidden"})),tn=b.b.div(I()),rn=t(51),an=function(n,e,t,r){if(n===t&&e===r)return 0;var i=Math.PI*n/180,a=Math.PI*t/180,o=e-r,c=Math.PI*o/180,s=Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos(c);return s>1&&(s=1),s=60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515,s*=1.609344},on=t(67);function cn(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return cn=function(){return n},n}function sn(){var n=Object(s.a)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n"]);return sn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.15);\n  padding: 8px;\n  border-radius: 50%;\n  margin: 0 10px 0 10px;\n\n  @media only screen and (max-width: 768px) {\n    padding: 5px;\n    margin: 0 5px 0 5px;\n  }\n"]);return ln=function(){return n},n}function dn(){var n=Object(s.a)(["\n  height: 20px;\n  width: auto;\n\n  @media only screen and (max-width: 768px) {\n    height: 15px;\n  }\n"]);return dn=function(){return n},n}function un(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-start;\n  border-radius: 15px;\n  align-items: center;\n  padding: 2.5px;\n  margin: 5px 10px 5px 10px;\n  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);\n  min-width: 200px;\n\n  span {\n    font-size: 12px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 2.5px;\n\n    span {\n      font-size: 12px;\n    }\n  }\n"]);return un=function(){return n},n}function bn(){var n=Object(s.a)(["\n\n*{\n    font-family: 'Roboto', sans-serif;\n}\n\n@media only screen and (max-width: 768px){\n    \n    span {\n        font-size: 12px;\n    }\n    h1{\n        font-size: 20px;\n    }\n    h2{\n    font-size: 16px;\n    }\n    p{\n        font-size:12px;\n    }\n}\n\n.languageToggle {\n    \n    span{\n        font-size: 12px;\n        font-weight: bold;\n    }\n\n}\n"]);return bn=function(){return n},n}var jn=Object(b.a)(bn()),pn=b.b.div(un()),fn=b.b.img(dn()),xn=b.b.div(ln()),gn=b.b.div(sn()),hn=b.b.div(cn()),On=jn;function vn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: flex-start;\n  overflow: scroll;\n  height: fit-content;\n  width: 100%;\n"]);return vn=function(){return n},n}var mn=function(){var n=Object(j.c)((function(n){return n.viewState})),e=n.currentLocation,t=n.selected,i=t.intersection,a=t.proximit\u00e9,o=t.nom_parc_lieu,c=t.note,s=t.lat,l=t.lng,d=Object(j.c)((function(n){return n.viewState})).language,u=null;if(e){var b=an(e.lat,e.lng,s,l).toFixed(3);u=b>1?"".concat(b," km"):"".concat(1e3*b," m")}return Object(r.jsxs)(yn,{children:[Object(r.jsxs)(pn,{style:{backgroundColor:"#B4DC69"},"data-tip":"fran\xe7ais"===d?"Nom du parc ou lieu":"Park or location name",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/park.svg",alt:"park location icon"})}),Object(r.jsx)(hn,{children:Object(r.jsx)("span",{children:o})})]}),a&&Object(r.jsxs)(pn,{style:{backgroundColor:"orange"},"data-tip":"fran\xe7ais"===d?"\xc0 proximit\xe9":"Proximity to",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/proximity.svg",alt:"map proximity icon"})}),Object(r.jsxs)(hn,{children:[Object(r.jsx)("span",{children:a})," "]})]}),e&&Object(r.jsxs)(pn,{style:{backgroundColor:"orange"},"data-tip":"fran\xe7ais"===d?"Distance approximative":"Approximate distance",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/distance.svg",alt:"distance between two points icon"})}),Object(r.jsxs)(hn,{children:[Object(r.jsx)("span",{children:u})," "]})]}),c&&Object(r.jsxs)(pn,{style:{backgroundColor:"orange"},"data-tip":"fran\xe7ais"===d?"Remarque":"Note",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/note.svg",alt:"note pad icon"})}),Object(r.jsxs)(hn,{children:[Object(r.jsx)("span",{children:c})," "]})]}),i&&Object(r.jsxs)(pn,{style:{backgroundColor:"yellow"},"data-tip":"Intersection",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/intersection.svg",alt:"road intersection icon"})}),Object(r.jsxs)(hn,{children:[Object(r.jsx)("span",{children:i})," "]})]}),Object(r.jsx)(on.a,{})]})},yn=b.b.div(vn()),wn=t(65),Tn=t(64),kn=t.n(Tn),En=function(){var n=Object(u.a)(d.a.mark((function n(e,t,r,i){var a,o,c,s,l,u,b,j,p;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),Object.values(t).forEach((function(n){n.borough===r.arrondissement&&(a=t[n.id])})),o=i.data,c=i.date,s=r.\u00e9tat,l={method:"PATCH",body:JSON.stringify({data:o,date:c,"\xe9tat":s}),headers:{Accept:"application/json","Content-Type":"application/json"}},n.next=7,fetch("/fountain/".concat(r._id),l);case 7:return u=n.sent,n.next=10,u.json();case 10:return u=n.sent,n.next=13,fetch("/fountain/".concat(r._id));case 13:return b=n.sent,n.next=16,b.json();case 16:return b=n.sent,j={method:"POST",body:JSON.stringify({feedback:i,fountainData:r,boroughInfo:a}),headers:{Accept:"application/json","Content-Type":"application/json"}},n.next=20,fetch("/posttweet",j);case 20:return p=n.sent,n.next=23,p.json();case 23:return p=n.sent,n.abrupt("return",{patch:u,post:p,fountain:b});case 25:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}();function _n(){var n=Object(s.a)(["\n  margin-top: 5px;\n  background-color: #3f51b5;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  padding: 2.5px;\n  border-radius: 5px;\n  border: none;\n\n  :active,\n  :disabled {\n    background-color: #e0e0e0;\n  }\n"]);return _n=function(){return n},n}function Cn(){var n=Object(s.a)([""]);return Cn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n  color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n\n  span {\n    font-size: 12px;\n  }\n"]);return Sn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n"]);return Nn=function(){return n},n}var Ln=Object(_.a)((function(n){return{formControl:{margin:n.spacing(1),minWidth:250},selectEmpty:{marginTop:n.spacing(2)}}})),Mn=function(){var n=Ln(),e=Object(j.c)((function(n){return n.viewState})),t=e.language,a=e.selected,o=e.currentLocation,c=Object(i.useState)({}),s=Object(wn.a)(c,2),l=s[0],d=s[1],u=Object(j.b)(),b=null;return o&&(b=an(o.lat,o.lng,a.lat,a.lng).toFixed(3)),Object(r.jsx)(zn,{children:Object(r.jsx)(Pn,{onSubmit:function(n){En(n,v,a,l),u(g(null))},children:Object(r.jsxs)(N.a,{className:n.formControl,children:[Object(r.jsx)(C.a,{shrink:!0,id:"feedbackLabel",children:"fran\xe7ais"===t?"Donnez votre avis":"Share your feedback"}),Object(r.jsxs)(L.a,{labelId:"select feedback",id:"select feedback",value:l.data,onChange:function(n){d({data:n.target.value,date:kn()().format("D/MM/YY")})},displayEmpty:!0,className:n.selectEmpty,children:[Object(r.jsx)(S.a,{value:"",children:Object(r.jsx)("em",{})}),Object.values(m).map((function(n){return Object(r.jsxs)(S.a,{value:n,children:["fran\xe7ais"===t?n.FR:n.EN," ",n.rating]},n.id)}))]}),Object(r.jsx)(An,{type:"submit",disabled:b>1||!l||!o,children:"fran\xe7ais"===t?"Valider":"Submit"}),b>1&&Object(r.jsx)(Dn,{children:Object(r.jsxs)("span",{children:[Object(r.jsx)(rn.a,{})," ","fran\xe7ais"===t?"Vous \xeates trop loin":"You are too far away"]})})]})})})},zn=b.b.div(Nn()),Dn=b.b.div(Sn()),Pn=b.b.form(Cn()),An=b.b.button(_n());function Rn(){var n=Object(s.a)(["\n  overflow: scroll;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return Rn=function(){return n},n}function Hn(){var n=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);\n  margin: 10px 0 10px 0;\n"]);return Hn=function(){return n},n}function Fn(){var n=Object(s.a)(["\n  padding: 20px 0 20px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Fn=function(){return n},n}var In=function(){var n=Object(j.c)((function(n){return n.viewState})),e=n.language,t=n.selected,i=Object(y.c)({googleMapsApiKey:"AIzaSyDqcFkvxc2nQU5TxrwnpVH_0UM5oNODkz4",libraries:["places"]},[]),a=i.isLoaded;return i.loadError?"Error Loading Maps":a?t?Object(r.jsxs)(Vn,{children:[Object(r.jsx)("h1",{children:t.arrondissement}),Object(r.jsx)(mn,{}),Object(r.jsx)(Un,{children:Object(r.jsx)(y.a,{mapContainerStyle:{width:"100%",height:"30vh",zoomControl:!1},center:{lat:+t.lat,lng:+t.lng},options:O,zoom:17,children:Object(r.jsx)(y.b,{position:{lat:+t.lat,lng:+t.lng},icon:{url:"Eaubot-full.svg",scaledSize:new window.google.maps.Size(35.4,54.2),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(17.7,54.2)}})})}),Object(r.jsx)(Gn,{children:t.\u00e9tat?t.\u00e9tat.map((function(n){return Object(r.jsxs)(pn,{style:{backgroundColor:"#96BFF6"},"data-tip":"fran\xe7ais"===e?"\xc9tat":"Condition",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/rating.svg",alt:"rating icon"})}),Object(r.jsx)(hn,{children:Object(r.jsx)("span",{children:n})})]})})):Object(r.jsxs)(pn,{style:{backgroundColor:"#96BFF6"},"data-tip":"fran\xe7ais"===e?"\xc9tat":"Condition",children:[Object(r.jsx)(xn,{children:Object(r.jsx)(fn,{src:"/rating.svg",alt:"rating icon"})}),Object(r.jsx)("span",{children:"fran\xe7ais"===e?"Pas d'avis, encore":"No Ratings yet"})]})}),Object(r.jsx)(Mn,{})]}):Object(r.jsx)("div",{children:"loading"}):"Loading Maps"},Vn=b.b.div(Fn()),Un=b.b.div(Hn()),Gn=b.b.div(Rn());function Wn(){var n=Object(s.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Wn=function(){return n},n}function Bn(){var n=Object(s.a)(["\n  border: none;\n  border-radius: 50%;\n  background-color: transparent;\n  position: relative;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n\n  :active {\n    background-color: #578cad;\n  }\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(s.a)(["\n  background-color: white;\n  border-radius: 15px;\n  width: 50%;\n  min-height: 450px;\n  box-shadow: 10px 10px 10px 3px rgba(0, 0, 0, 0.5);\n\n  @media only screen and (max-width: 768px) {\n    width: 80%;\n  }\n"]);return Jn=function(){return n},n}function Xn(){var n=Object(s.a)(["\n  visibility: ",";\n"]);return Xn=function(){return n},n}var Zn=function(){var n=Object(j.b)(),e=Object(j.c)((function(n){return n.viewState})).selected;return Object(r.jsx)(qn,{visible:e,children:Object(r.jsx)(gn,{children:Object(r.jsxs)(Yn,{children:[Object(r.jsxs)(Qn,{children:[Object(r.jsx)(Kn,{onClick:function(){n(g(null))},children:Object(r.jsx)(rn.b,{size:30})}),Object(r.jsx)(F,{})]}),Object(r.jsx)(In,{})]})})})},qn=b.b.div(Xn(),(function(n){return n.visible?"visible":"hidden"})),Yn=b.b.div(Jn()),Kn=b.b.button(Bn()),Qn=b.b.div(Wn()),$n=t(66);function ne(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  height: 15vh;\n  padding: 15px;\n  background-color: #96bff6;\n\n  @media only screen and (max-width: 768px) {\n    justify-content: center;\n    height: 7.5vh;\n\n    .desktop {\n      display: none;\n    }\n  }\n"]);return ne=function(){return n},n}var ee=function(){return Object(r.jsxs)(te,{children:[Object(r.jsx)(D,{}),Object(r.jsx)($n.a,{screenName:"eau_bot"})]})},te=b.b.div(ne());function re(){var n=Object(s.a)([""]);return re=function(){return n},n}var ie=function(){var n=Object(j.b)(),e=function(){var e=Object(u.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/all");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n(x(r.data));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){n(f({lat:e.coords.latitude,lng:e.coords.longitude}))})),e()}),[]),Object(r.jsxs)(ae,{children:[Object(r.jsx)(Z,{}),Object(r.jsx)(On,{}),Object(r.jsx)(w,{}),Object(r.jsx)(Zn,{}),Object(r.jsx)(ee,{})]})},ae=b.b.div(re()),oe=t(40),ce=t(20),se={dropDown:!1,language:"fran\xe7ais",center:{lat:45.534811216839316,lng:-73.61851604929831},selected:null,fountainData:[],zoom:16,currentLocation:null},le=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DROP_DOWN":return Object(ce.a)(Object(ce.a)({},n),{},{dropDown:e.visible});case"SET_CENTER":return Object(ce.a)(Object(ce.a)({},n),{},{center:e.center});case"SET_CURRENT_LOCATION":return Object(ce.a)(Object(ce.a)({},n),{},{currentLocation:e.currentLocation});case"SET_FOUNTAIN_DATA":return Object(ce.a)(Object(ce.a)({},n),{},{fountainData:e.fountainData});case"SET_SELECTED":return Object(ce.a)(Object(ce.a)({},n),{},{selected:e.selected});case"SET_LANGUAGE":return Object(ce.a)(Object(ce.a)({},n),{},{language:e.language});case"SET_ZOOM":return Object(ce.a)(Object(ce.a)({},n),{},{zoom:e.zoom});default:return n}},de=Object(oe.b)({viewState:le}),ue=Object(oe.c)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(j.a,{store:ue,children:Object(r.jsx)(ie,{})})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.4e6d3852.chunk.js.map