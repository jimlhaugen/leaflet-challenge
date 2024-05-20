
// // Creating our initial map object:
// // We set the longitude, latitude, and starting zoom level.
// // This gets inserted into the div with an id of "map".
// let myMap = L.map("map", {
//     center: [45.52, -122.67],
//     zoom: 13
//   });
  
//   // Adding a tile layer (the background map image) to our map:
//   // We use the addTo() method to add objects to our map.
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
// // Creating a new marker:
// // We pass in some initial options, and then add the marker to the map by using the addTo() method.
// let marker = L.marker([45.52, -122.67], {
//     draggable: true,
//     title: "My First Marker"
//   }).addTo(myMap);


// // Adding a tile layer (the background map image) to our map:
// // We use the addTo() method to add objects to our map.
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
// // Creating a n
  
/////////////////////////// Marker only

//   // Binding a popup to our marker
//   marker.bindPopup("Hello There!");

// An array containing each city's name, location, and population
let myMap1 = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3
  });

  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap1);

// Set base URL
base_url = "https://api.geoapify.com/v2/places"

  
long1 = -138.9859
lat1 =59.987 

lat2 = 38.8315010070801
long2 = -122.801330566406

lat3 = 33.8154984
long3 = -117.5393295

lat4 = 34.071
long4 = -116.7853333

lat5 = 51.7326666666667
long5 = -178.671666666667


let cities = [{
    location: [lat1, long1],
    name: "M 1.3 - 64 km NE of Yakutat, Alaska",
    depth: 0
  },
  {
    location: [lat2, long2],
    name: "M 0.8 - 7 km WNW of Cobb, CA", base_url,
    depth: 2.46000003814697
  },
  {
    location: [lat3, long3],
    name: "M 1.5 - 7 km SSE of Corona, CA",
    depth: 17.7
  },
  {
    location: [lat4, long4],
    name: "17 km N of Cabazon, CA",
    depth: 13.35
  },
  {
    location: [lat5, long5],
    name: "M 0.9 - 141 km W of Adak, Alaska",
    depth: 12.48
  }
  ];
  
  
/////////////////////////// Marker with annotations


  // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    L.marker(city.location)
      .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Depth ${city.depth.toLocaleString()}</h3>`)
      .addTo(myMap1);
  }
  
// Create a circle, and pass in some initial options.
L.circle([lat1, long1], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap1);

// Create a Polygon, and pass in some initial options.
L.polygon([
  [lat1, long1],
  [lat2, long2],
  [lat3, long3]
], {
  color: "yellow",
  fillColor: "yellow",
  fillOpacity: 0.75
}).addTo(myMap1);

// The coordinates for each point to use in the polyline
let line = [
  [lat2, long2],
  [lat3, long3],
  [lat4, long4],
  [lat5, long5]
];

// Create a polyline by using the line coordinates, and pass in some initial options.
L.polyline([
  [lat2, long2],
  [lat3, long3]
], {
  color: "black",
  weight: 3,
  stroke: true
}).addTo(myMap1);

// Create a rectangle, and pass in some initial options.
L.rectangle([
  [lat2, long2],
  [lat3, long3],
], {
  color: "black",
  weight: 3,
  stroke: true
}).addTo(myMap1);

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("leaflet-arc",[],e):"object"==typeof exports?exports["leaflet-arc"]=e():t["leaflet-arc"]=e()}(this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var s=r[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function s(t,e){if(!t.geometries[0]||!t.geometries[0].coords[0])return[];var r=function(){var r=e.lng-t.geometries[0].coords[0][0]-360;return{v:t.geometries.map(function(t){return r+=360,t.coords.map(function(t){return L.latLng([t[1],t[0]+r])})}).reduce(function(t,e){return t.concat(e)})}}();return"object"===("undefined"==typeof r?"undefined":n(r))?r.v:void 0}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=r(2),h=o(a),p=function(t){return{x:t.lng,y:t.lat}};if(!L)throw new Error("Leaflet is not defined");L.Polyline.Arc=function(t,e,r){var o=L.latLng(t),n=L.latLng(e),a=i({vertices:10,offset:10},r),u=new h["default"].GreatCircle(p(o),p(n)),c=u.Arc(a.vertices,{offset:a.offset}),f=s(c,o);return L.polyline(f,a)}},function(t,e){"use strict";var r=Math.PI/180,o=180/Math.PI,s=function(t,e){this.lon=t,this.lat=e,this.x=r*t,this.y=r*e};s.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)},s.prototype.antipode=function(){var t=-1*this.lat,e=this.lon<0?180+this.lon:(180-this.lon)*-1;return new s(e,t)};var i=function(){this.coords=[],this.length=0};i.prototype.move_to=function(t){this.length++,this.coords.push(t)};var n=function(t){this.properties=t||{},this.geometries=[]};n.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(1==this.geometries.length)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var t=[],e=0;e<this.geometries.length;e++)t.push(this.geometries[e].coords);return{geometry:{type:"MultiLineString",coordinates:t},type:"Feature",properties:this.properties}},n.prototype.wkt=function(){for(var t="",e="LINESTRING(",r=function(t){e+=t[0]+" "+t[1]+","},o=0;o<this.geometries.length;o++){if(0===this.geometries[o].coords.length)return"LINESTRING(empty)";var s=this.geometries[o].coords;s.forEach(r),t+=e.substring(0,e.length-1)+")"}return t};var a=function(t,e,r){if(!t||void 0===t.x||void 0===t.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!e||void 0===e.x||void 0===e.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new s(t.x,t.y),this.end=new s(e.x,e.y),this.properties=r||{};var o=this.start.x-this.end.x,i=this.start.y-this.end.y,n=Math.pow(Math.sin(i/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(o/2),2);if(this.g=2*Math.asin(Math.sqrt(n)),this.g==Math.PI)throw new Error("it appears "+t.view()+" and "+e.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+t+" and "+e)};if(a.prototype.interpolate=function(t){var e=Math.sin((1-t)*this.g)/Math.sin(this.g),r=Math.sin(t*this.g)/Math.sin(this.g),s=e*Math.cos(this.start.y)*Math.cos(this.start.x)+r*Math.cos(this.end.y)*Math.cos(this.end.x),i=e*Math.cos(this.start.y)*Math.sin(this.start.x)+r*Math.cos(this.end.y)*Math.sin(this.end.x),n=e*Math.sin(this.start.y)+r*Math.sin(this.end.y),a=o*Math.atan2(n,Math.sqrt(Math.pow(s,2)+Math.pow(i,2))),h=o*Math.atan2(i,s);return[h,a]},a.prototype.Arc=function(t,e){var r=[];if(!t||t<=2)r.push([this.start.lon,this.start.lat]),r.push([this.end.lon,this.end.lat]);else for(var o=1/(t-1),s=0;s<t;++s){var a=o*s,h=this.interpolate(a);r.push(h)}for(var p=!1,u=0,c=e&&e.offset?e.offset:10,f=180-c,l=-180+c,d=360-c,y=1;y<r.length;++y){var g=r[y-1][0],v=r[y][0],M=Math.abs(v-g);M>d&&(v>f&&g<l||g>f&&v<l)?p=!0:M>u&&(u=M)}var m=[];if(p&&u<c){var w=[];m.push(w);for(var x=0;x<r.length;++x){var b=parseFloat(r[x][0]);if(x>0&&Math.abs(b-r[x-1][0])>d){var L=parseFloat(r[x-1][0]),S=parseFloat(r[x-1][1]),j=parseFloat(r[x][0]),E=parseFloat(r[x][1]);if(L>-180&&L<l&&180==j&&x+1<r.length&&r[x-1][0]>-180&&r[x-1][0]<l){w.push([-180,r[x][1]]),x++,w.push([r[x][0],r[x][1]]);continue}if(L>f&&L<180&&j==-180&&x+1<r.length&&r[x-1][0]>f&&r[x-1][0]<180){w.push([180,r[x][1]]),x++,w.push([r[x][0],r[x][1]]);continue}if(L<l&&j>f){var F=L;L=j,j=F;var C=S;S=E,E=C}if(L>f&&j<l&&(j+=360),L<=180&&j>=180&&L<j){var G=(180-L)/(j-L),I=G*E+(1-G)*S;w.push([r[x-1][0]>f?180:-180,I]),w=[],w.push([r[x-1][0]>f?-180:180,I]),m.push(w)}else w=[],m.push(w);w.push([b,r[x][1]])}else w.push([r[x][0],r[x][1]])}}else{var N=[];m.push(N);for(var A=0;A<r.length;++A)N.push([r[A][0],r[A][1]])}for(var P=new n(this.properties),_=0;_<m.length;++_){var O=new i;P.geometries.push(O);for(var q=m[_],R=0;R<q.length;++R)O.move_to(q[R])}return P},"undefined"!=typeof t&&"undefined"!=typeof t.exports)t.exports.Coord=s,t.exports.Arc=n,t.exports.GreatCircle=a;else{var h={};h.Coord=s,h.Arc=n,h.GreatCircle=a}},function(t,e,r){"use strict";t.exports=r(1)}])});
//# sourceMappingURL=leaflet-arc.min.js.map
// npm install --save leaflet-arc
// Create a polyline by using the line coordinates, and pass in some initial options.
L.polyline.Arc([
  [lat2, long2],
  [lat3, long3]
], {
  color: 'red',
  vertices: 200
}).addTo(map1);


  

 // https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson