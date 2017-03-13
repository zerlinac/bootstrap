var map = L.map('mapContainer').setView([40.689021, -74.018397], 12);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

map.scrollWheelZoom.disable()

L.marker([40.738107, -73.879215]).addTo(map)
  .bindPopup('Elmhurst')

L.marker([40.628772, -74.029068]).addTo(map)
  .bindPopup('Bay Ridge')

L.marker([40.737850, -73.978825]).addTo(map)
  .bindPopup('Kips Bay')

L.marker([40.572419, -74.093762]).addTo(map)
  .bindPopup('Midland Beach');




// begin event handlers for buttons

$('.queens').on('click', function() {
  map.flyTo([40.738107, -73.879215], 13)
});

$('.manhattan').on('click', function() {
  map.flyTo([40.737850, -73.978825], 13)
});

$('.staten-island').on('click', function() {
  map.flyTo([40.572419, -74.093762], 13)
});

$('.brooklyn').on('click', function() {
  map.flyTo([40.628772, -74.029068], 13)
});

// reset view
$('.reset').on('click', function() {
  map.flyTo([40.689021, -74.018397], 12);
});
