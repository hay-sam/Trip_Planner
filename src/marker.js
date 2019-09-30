const mapboxgl = require("mapbox-gl")

module.exports = function markerFactory (type, LngLat) {

const marker = document.createElement('div')

markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";

if (type === 'hotel') {
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
}

if (type === 'restaurant') {
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
}

if (type === 'activity') {
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
}

new mapboxgl.Marker(marker).setLngLat(LngLat)

}
