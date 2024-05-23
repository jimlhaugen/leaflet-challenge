
//  Create a map object
let myMap = L.map("map", {
  center: [
    40.09, -105.71
  ],
  zoom: 4.5,})

// Add a tile layer
let topo = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);


// Store our API endpoint as queryUrl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";


// Perform a GET request to the query URL
d3.json(queryUrl).then(function (data) {
  console.log(data.features);

  createFeatures(data.features);

});

// Loop through the each object (each key-pair found within curly brackets)
// of the features array (found within the scquare brackets)  

function createFeatures(quakeData){   // quakeData is data.features read from the data
  let quakeMarkers = [];  // initial markers 
  for (i=0;i<quakeData.length;i++){   // iterate each object of the features array
      lat = quakeData[i].geometry.coordinates[1];   // appears second under coordinates
      long = quakeData[i].geometry.coordinates[0];  // appears first under coordinates
      depth = quakeData[i].geometry.coordinates[2]; // appears third under coordinates
      magnitude = quakeData[i].properties.mag;
      circleMarker = L.circle([lat,long], {
        stroke: true,
        fillOpacity: 1,
        weight: 1,
        color: 'black',
        fillColor: getColor(depth),
        radius: magnitude * 15000   // radius of marker is proportional magnitude;
                                    // multiplier 15,000 provides a nice visual presentation
      })
        // Marker info Info about the earthquake includes the place (properties.place), 
        // magnitude (properties.mag), depth, and time (properties.time)
      .bindPopup    // info window appears pops up upon click of marker
      (`<h3>${quakeData[i].properties.place}</h3>
      <p>
      Magnitude: ${magnitude}<br> 
      Depth: ${depth}<br>
      Time: ${Date(quakeData[i].properties.time)}<br>
      </p>`)
      .addTo(myMap);
  };
};

  // Colors determined using https://www.imgcolorpicker.com/ from image in the instructions
function getColor(depth) {
  if (depth > 90) {
    return 'rgb(255,95,101)'  // 
  } else if (depth > 70) {
    return 'rgb(252,163,93)'
  } else if (depth > 50) {
    return 'rgb(253,183,42)'
  } else if (depth > 30) {
    return 'rgb(247,219,17)'
  } else if (depth > 10) {
    return 'rgb(220,244,0)'
  } else {
    return 'rgb(163,246,0)'
  }
};


const legend = L.control({ position: 'bottomright' });
  
// console.log(Square1)
  legend.onAdd = function () {
  
    let div = L.DomUtil.create('div', 'legend');
    let depths = ['-10 - 10', '10 - 30', '30 - 50', '50 - 70', '70 - 90', '90+'];
    let colors = ['#a3f600', '#dcf400', '#f7db11', '#fdb72a', '#fca35d', '#ff5f65'];

    for(let i = 0; i < depths.length; i++) {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i>" + depths[i] + "<br>";
    }

    return div;
  };

  legend.addTo(myMap);
// };

// createLegend(myMap);
