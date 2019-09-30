console.log('hi')

const mapboxgl = require("mapbox-gl");

const markerFactory = require("./marker")

mapboxgl.accessToken = 'pk.eyJ1IjoibWxlZXdvbjEiLCJhIjoiY2sxNm04d3d0MDBwNDNibzlqeGQ3OWNqNSJ9.KWxMKo0lJFfGIRaUSfAmHQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div')

markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map)


