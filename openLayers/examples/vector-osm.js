"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2788],{63434:function(e,t,r){var n=r(41376),o=r(12739),a=r(25691),i=r(5265),u=r(75469),s=r(85528),f=r(42865),c=r(17985),l=r(12810),p=r(32275),w=r(28082),d=r(32025);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=[null],P=(0,w.C5)(Z,{nd:function(e,t){t[t.length-1].ndrefs.push(e.getAttribute("ref"))},tag:_}),O=(0,w.C5)(Z,{node:function(e,t){var r=t[0],n=t[t.length-1],a=e.getAttribute("id"),i=[parseFloat(e.getAttribute("lon")),parseFloat(e.getAttribute("lat"))];n.nodes[a]=i;var s=(0,w.O)({tags:{}},j,e,t);if(!(0,p.xb)(s.tags)){var f=new u.Z(i);(0,d.fI)(f,!1,r);var c=new o.Z(f);void 0!==a&&c.setId(a),c.setProperties(s.tags,!0),n.features.push(c)}},way:function(e,t){var r=e.getAttribute("id"),n=(0,w.O)({id:r,ndrefs:[],tags:{}},P,e,t);t[t.length-1].ways.push(n)}}),k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(f,e);var t,r,n,u=h(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this)).dataProjection=(0,l.U2)("EPSG:4326"),e}return t=f,(r=[{key:"readFeaturesFromNode",value:function(e,t){var r=this.getReadOptions(e,t);if("osm"==e.localName){for(var n=(0,w.O)({nodes:{},ways:[],features:[]},O,e,[r]),u=0;u<n.ways.length;u++){for(var f=n.ways[u],l=[],p=0,y=f.ndrefs.length;p<y;p++){var g=n.nodes[f.ndrefs[p]];(0,c.l7)(l,g)}var b=void 0;b=f.ndrefs[0]==f.ndrefs[f.ndrefs.length-1]?new s.ZP(l,a.Z.XY,[l.length]):new i.Z(l,a.Z.XY),(0,d.fI)(b,!1,r);var h=new o.Z(b);void 0!==f.id&&h.setId(f.id),h.setProperties(f.tags,!0),n.features.push(h)}if(n.features)return n.features}return[]}}])&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(f.Z),j=(0,w.C5)(Z,{tag:_});function _(e,t){t[t.length-1].tags[e.getAttribute("k")]=e.getAttribute("v")}var x=k,E=r(95783),S=r(54354),A=r(31998),R=r(69039),T=r(720),C=r(77975),F=r(77138),I=r(41372),z=r(42010),M=r(2383),B=null,X={amenity:{parking:new R.ZP({stroke:new T.Z({color:"rgba(170, 170, 170, 1.0)",width:1}),fill:new C.Z({color:"rgba(170, 170, 170, 0.3)"})})},building:{".*":new R.ZP({zIndex:100,stroke:new T.Z({color:"rgba(246, 99, 79, 1.0)",width:1}),fill:new C.Z({color:"rgba(246, 99, 79, 0.3)"})})},highway:{service:new R.ZP({stroke:new T.Z({color:"rgba(255, 255, 255, 1.0)",width:2})}),".*":new R.ZP({stroke:new T.Z({color:"rgba(255, 255, 255, 1.0)",width:3})})},landuse:{"forest|grass|allotments":new R.ZP({stroke:new T.Z({color:"rgba(140, 208, 95, 1.0)",width:1}),fill:new C.Z({color:"rgba(140, 208, 95, 0.3)"})})},natural:{tree:new R.ZP({image:new F.Z({radius:2,fill:new C.Z({color:"rgba(140, 208, 95, 1.0)"}),stroke:null})})}},G=new E.Z({format:new x,loader:function(e,t,r,n,o){var a=(0,l.$A)(e,r,"EPSG:4326"),i=new XMLHttpRequest;i.open("POST","https://overpass-api.de/api/interpreter"),i.addEventListener("load",(function(){var e=(new x).readFeatures(i.responseText,{featureProjection:B.getView().getProjection()});G.addFeatures(e),n(e)})),i.addEventListener("error",o);var u="(node("+a[1]+","+Math.max(a[0],-180)+","+a[3]+","+Math.min(a[2],180)+");rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;";i.send(u)},strategy:M.VW}),L=new I.Z({source:G,style:function(e){for(var t in X){var r=e.get(t);if(void 0!==r)for(var n in X[t])if(new RegExp(n).test(r))return X[t][n]}return null}}),D=new z.Z({source:new A.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})});B=new n.Z({layers:[D,L],target:document.getElementById("map"),view:new S.ZP({center:[739218,5906096],maxZoom:19,zoom:17})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(63434)}]);
//# sourceMappingURL=vector-osm.js.map