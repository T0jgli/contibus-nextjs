(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[831],{3340:function(e,l,a){"use strict";var r=a(5318),n=a(862);l.Z=void 0;var t=n(a(7294)),s=(0,r(a(2108)).default)(t.createElement("path",{d:"M7 14l5-5 5 5z"}),"ArrowDropUp");l.Z=s},5996:function(e,l,a){"use strict";var r=a(5318),n=a(862);l.Z=void 0;var t=n(a(7294)),s=(0,r(a(2108)).default)(t.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");l.Z=s},6831:function(e,l,a){"use strict";a.r(l);var r=a(5893),n=a(809),t=a.n(n),s=a(2447),o=a(6265),i=a(7294),c=a(9669),d=a.n(c),u=a(6463),m=a(3340),p=a(6562),h=a(6546),f=a(6653),x=a(868),j=a(7812),v=a(8131),g=a(3147),b=a(9226),y=a(5996),k=a(1163);function N(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?N(Object(a),!0).forEach((function(l){(0,o.Z)(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}var z={name:"",phone:"",email:"",uticel:"",koltseg:"",indulas:"",erkezes:"",seat:"def",selectedbus:null,newsletter:!1,comment:"",file:null,accept:!1,loading:!1};l.default=function(){var e,l=(0,b.I0)(),a=(0,k.useRouter)(),n=(0,i.useState)(w(w({},z),{},{selectedbus:(null===(e=a.query)||void 0===e?void 0:e.selectedbus)||null})),o=n[0],c=n[1],N=(0,i.useState)(!1),O=N[0],S=N[1],T=function(){var e=(0,s.Z)(t().mark((function e(a){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o.accept){e.next=5;break}return l((0,g.NV)({snackbar:{open:!0,type:"error",hu:"K\xe9rj\xfck, el\u0151bb fogadja el az adatv\xe9delmi szerz\u0151d\xe9st!",en:"Please accept the privacy policy first!"}})),S(!0),e.abrupt("return");case 5:if("def"!==o.seat){e.next=8;break}return l((0,g.NV)({snackbar:{open:!0,type:"error",hu:"K\xe9rj\xfck v\xe1lasszon f\xe9r\u0151helyet!",en:"Please select suitable seats!"}})),e.abrupt("return");case 8:if(!(new Date(o.indulas).toLocaleDateString()>new Date(o.erkezes).toLocaleDateString())){e.next=12;break}return l((0,g.NV)({snackbar:{open:!0,type:"error",hu:"T\xe9nyleg hamarabb akar vissza\xe9rkezni, mint elindulni?",en:"Do you really want to get back sooner than you leave?"}})),c(w(w({},o),{},{indulas:"",erkezes:""})),e.abrupt("return");case 12:c(w(w({},o),{},{loading:!0})),d()({method:"POST",url:"/api/offer",data:o}).then((function(e){200==e.status?(c(z),window.scrollTo(0,0),l((0,g.NV)({snackbar:{open:!0,type:"success",hu:"Sikeresen elk\xfcldve! Munkat\xe1rsunk hamarosan felveszi \xd6nnel a kapcsolatot.",en:"Successfully sent! We will contact you shortly."}}))):(window.scrollTo(0,0),l((0,g.NV)({snackbar:{open:!0,type:"error",hu:e.data.error,en:e.data.error}})))}));case 14:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("img",{src:"/img/3.jpg",className:"img-fluid mx-auto d-none logo",width:"220px",id:"contibus-logo",alt:"logo"}),(0,r.jsx)("div",{className:"width-75 row mx-auto pt-5",children:(0,r.jsx)("div",{className:"mb-4 col",children:(0,r.jsxs)("div",{className:"card rounded",children:[(0,r.jsx)(u.uXt,{id:"offerheader",className:"elegant-color-dark rounded white-text text-center py-4",children:(0,r.jsxs)("h4",{className:"mb-0",children:[(0,r.jsx)(u.vml,{icon:"caret-down",className:"px-2"}),"en"===a.locale?"BUS OFFER REQUEST":"AUT\xd3BUSZ AJ\xc1NLAT K\xc9R\xc9S",(0,r.jsx)(u.vml,{className:"px-2",icon:"caret-down"})]})}),(0,r.jsx)(u.H7W,{className:"rounded",children:(0,r.jsxs)("form",{onSubmit:T,children:[(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsxs)("div",{className:"form-row my-4",children:[(0,r.jsxs)("div",{className:"form-group position-relative col-lg-6",children:[(0,r.jsx)("label",{htmlFor:"name",children:"en"===a.locale?"Customer name *":"Megrendel\u0151 neve *"}),(0,r.jsx)("input",{type:"text",name:"name",className:"form-control",required:!0,value:o.name,"aria-label":"N\xe9v",onChange:function(e){return c(w(w({},o),{},{name:e.target.value}))}})]}),(0,r.jsxs)("div",{className:"form-group position-relative col-lg-6",children:[(0,r.jsx)("label",{htmlFor:"phone",children:"en"===a.locale?"Phone number *":"Telefonsz\xe1m *"}),(0,r.jsx)("input",{type:"num",name:"phone","aria-label":"Telefon",className:"form-control",value:o.phone,onChange:function(e){return c(w(w({},o),{},{phone:e.target.value}))},required:!0})]})]})}),(0,r.jsxs)(v.pT,{triggerOnce:!0,children:[(0,r.jsx)("div",{className:"form-row my-4",children:(0,r.jsxs)("div",{className:"form-group position-relative col",children:[(0,r.jsx)("label",{htmlFor:"email",children:"en"===a.locale?"Email address *":"Email c\xedm *"}),(0,r.jsx)("input",{type:"email",name:"email","aria-label":"Email",className:"form-control",value:o.email,onChange:function(e){return c(w(w({},o),{},{email:e.target.value}))},required:!0})]})}),(0,r.jsx)("hr",{className:"my-5 elegant-color-dark",style:{opacity:"0.2"}})]}),(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsxs)("div",{className:"form-row my-4",children:[(0,r.jsxs)("div",{lg:"6",className:"form-group position-relative col-lg-6",children:[(0,r.jsx)("label",{htmlFor:"uticel",children:"en"===a.locale?"Destination *":"\xdatic\xe9l *"}),(0,r.jsx)("input",{type:"text",name:"uticel","aria-label":"\xdatic\xe9l",value:o.uticel,onChange:function(e){return c(w(w({},o),{},{uticel:e.target.value}))},className:"form-control",required:!0})]}),(0,r.jsxs)("div",{lg:"6",className:"form-group position-relative col-lg-6",children:[(0,r.jsx)("label",{htmlFor:"km",children:"en"===a.locale?"Planned budget *":"Tervezett k\xf6lts\xe9gkeret *"}),(0,r.jsx)("input",{type:"text",name:"koltseg","aria-label":"K\xf6lts\xe9gkeret",value:o.koltseg,onChange:function(e){return c(w(w({},o),{},{koltseg:e.target.value}))},className:"form-control",required:!0})]})]})}),(0,r.jsxs)(v.pT,{triggerOnce:!0,children:[(0,r.jsxs)("div",{className:"form-row my-4",children:[(0,r.jsxs)("div",{className:"form-group position-relative col",children:[(0,r.jsx)("label",{htmlFor:"indulasdate",children:"en"===a.locale?"Departure day *":"Indul\xe1s napja *"}),(0,r.jsx)("input",{type:"date",name:"indulasdate","aria-label":"Indul\xe1s napja",min:(new Date).toISOString().split("T")[0],className:"form-control",value:o.indulas,onChange:function(e){c(w(w({},o),{},{indulas:e.target.value}))},required:!0})]}),(0,r.jsxs)("div",{className:"form-group position-relative col",children:[(0,r.jsx)("label",{htmlFor:"erkezesdate",children:"en"===a.locale?"Date of arrival *":"\xc9rkez\xe9s napja *"}),(0,r.jsx)("input",{type:"date",name:"erkezesdate","aria-label":"\xc9rkez\xe9s napja",min:(new Date).toISOString().split("T")[0],className:"form-control",value:o.erkezes,onChange:function(e){return c(w(w({},o),{},{erkezes:e.target.value}))},required:!0})]})]}),(0,r.jsx)("hr",{className:"my-5 elegant-color-dark",style:{opacity:"0.2"}})]}),(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsx)("div",{className:"form-row my-4",children:(0,r.jsxs)("div",{className:"form-group position-relative col",children:[(0,r.jsx)("label",{htmlFor:"seatsselect",children:"en"===a.locale?"Seats *":"F\xe9r\u0151hely *"}),(0,r.jsxs)("select",{className:"form-control",name:"ferohely","aria-label":"F\xe9r\u0151hely",required:!0,value:o.seat,onChange:function(e){return c(w(w({},o),{},{seat:e.target.value}))},children:[(0,r.jsx)("option",{value:"def",children:"en"===a.locale?"Please select...":"K\xe9rj\xfck v\xe1lasszon..."}),(0,r.jsxs)("option",{value:"1-8",children:["1-8 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"9-17",children:["9-17 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"18-21",children:["18-21 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"22-28",children:["22-28 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"29-34",children:["29-34 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"35-48",children:["35-48 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"49-51",children:["49-51 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"52-56",children:["52-56 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"57-59",children:["57-59 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"60-68",children:["60-68 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"69-70",children:["69-70 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"71-74",children:["71-74 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"75-78",children:["75-78 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"79-80",children:["79-80 ","en"===a.locale?"people":"f\u0151"]}),(0,r.jsxs)("option",{value:"81-83",children:["81-83 ","en"===a.locale?"people":"f\u0151"]})]})]})})}),(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsx)("div",{className:"form-row my-4",children:(0,r.jsxs)("div",{className:"form-group position-relative col",children:[(0,r.jsx)("label",{htmlFor:"comment",children:"en"===a.locale?"Short description *":"R\xf6vid le\xedr\xe1s (h\xe1ny nap, honnan/hova, utaz\xe1s jellege) *"}),(0,r.jsx)("textarea",{className:"form-control",name:"desc","aria-label":"Le\xedr\xe1s",value:o.comment,onChange:function(e){return c(w(w({},o),{},{comment:e.target.value}))},rows:"5",required:!0}),(0,r.jsx)("small",{className:"form-text text-muted text-center",children:"en"===a.locale?"If you find our offer favorable, please order in email. Sending a request for a quote - and the response to it - is not considered an order!":"Amennyiben aj\xe1nlatunkat kedvez\u0151nek tal\xe1lja, \xedr\xe1sban k\xe9rj\xfck megrendelni. Az aj\xe1nlat k\xe9r\xe9s - \xe9s az arra kapott v\xe1lasz - elk\xfcld\xe9se nem tekinthet\u0151 megrendel\xe9snek!"})]})})}),(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsx)("div",{className:"form-row my-4",children:(0,r.jsx)(p.Z,{className:"px-md-3 px-2",children:(0,r.jsx)(h.Z,{control:(0,r.jsx)(f.Z,{color:"primary",style:{color:"black"},checked:o.newsletter,onChange:function(){return c(w(w({},o),{},{newsletter:!o.newsletter}))}}),label:"en"===a.locale?"Subscribe to newsletter":"Feliratkoz\xe1s a h\xedrlev\xe9lre"})})})}),(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsx)("div",{className:"form-row my-4",children:(0,r.jsxs)(p.Z,{className:"px-md-3 px-2",children:[(0,r.jsx)(h.Z,{control:(0,r.jsx)(f.Z,{color:"primary",style:{color:"black"},checked:o.accept,onChange:function(){c(w(w({},o),{},{accept:!o.accept})),O&&S(!1)}}),label:"en"===a.locale?(0,r.jsxs)(r.Fragment,{children:["I accept the"," ",(0,r.jsx)("a",{target:"_blank",href:"/files/adatvedelmi_nyilatkozat.pdf",className:"privacytext font-weight-bolder",children:"privacy policy"}),"!"]}):(0,r.jsxs)(r.Fragment,{children:["Elfogadom az"," ",(0,r.jsx)("a",{target:"_blank",href:"/files/adatvedelmi_nyilatkozat.pdf",className:"privacytext font-weight-bolder",children:"adatv\xe9delmi t\xe1j\xe9koztat\xf3t"}),"!"]})}),(0,r.jsx)(m.Z,{className:O?"visible pr-1":"invisible pr-1",style:{color:"red"}})]})})}),o.selectedbus&&(0,r.jsx)(v.pT,{triggerOnce:!0,children:(0,r.jsxs)("h4",{className:"grey-text flex-center flex-column flex-md-row text-center mb-5 mx-auto",children:["en"===a.locale?"Selected bus: ":"Kiv\xe1lasztott busz: ",(0,r.jsx)("span",{className:"font-weight-bolder pl-2 pt-2 pt-md-0",children:o.selectedbus}),(0,r.jsx)(x.ZP,{title:"en"===a.locale?"Remove":"Elt\xe1vol\xedt\xe1s",children:(0,r.jsx)(j.Z,{className:"mt-md-0 mt-2",onClick:function(){c(w(w({},o),{},{selectedbus:null}))},children:(0,r.jsx)(y.Z,{})})})]})}),(0,r.jsx)(v.pT,{direction:"up",children:(0,r.jsx)(u.$vH,{color:"dark",outline:!0,disabled:o.loading,style:{minWidth:"200px"},id:"formsubmitbtn",type:"submit",className:"roundedbtn float-center mx-auto mt-3 mb-3 font-weight-bolder btn-block w-25",children:o.loading?(0,r.jsx)("div",{className:"d-flex p-0 m-0 justify-content-center animated zoomIn",children:(0,r.jsx)("div",{className:"spinner-border p-0 m-0",role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})}):"en"===a.locale?"Send \xbb":"K\xfcld\xe9s \xbb"})})]})})]})})})]})})}},2447:function(e,l,a){"use strict";function r(e,l,a,r,n,t,s){try{var o=e[t](s),i=o.value}catch(c){return void a(c)}o.done?l(i):Promise.resolve(i).then(r,n)}function n(e){return function(){var l=this,a=arguments;return new Promise((function(n,t){var s=e.apply(l,a);function o(e){r(s,n,t,o,i,"next",e)}function i(e){r(s,n,t,o,i,"throw",e)}o(void 0)}))}}a.d(l,{Z:function(){return n}})}}]);