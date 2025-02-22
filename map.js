mapboxgl.accessToken = 'pk.eyJ1IjoidGFtbXlsaWFuZyIsImEiOiJjbTdmZHRkOW0wb2dqMmtvZ21iNWY4MGl6In0.EdWuYRYuNNLsPTCMUSiCFw';
// Initialize the map
const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map will render
    style: 'mapbox://styles/mapbox/streets-v12', // Map style
    center: [-71.09415, 42.36027], // [longitude, latitude]
    zoom: 12, // Initial zoom level
    minZoom: 5, // Minimum allowed zoom
    maxZoom: 18 // Maximum allowed zoom
});

map.on('load', () => { 
    map.addSource('boston_route', {
        type: 'geojson',
        data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson?...'
      });
    map.addLayer({
    id: 'bike-lanes',
    type: 'line',
    source: 'boston_route',
    paint: {
    'line-color': '#32D400',  // A bright green using hex code
    'line-width': 4,          // Thicker lines
    'line-opacity': 0.6       // Slightly less transparent
    }
    });
    map.addSource('cambridge_route', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson'
      });
    map.addLayer({
    id: 'bike-lanes',
    type: 'line',
    source: 'cambridge_route',
    paint: {
    'line-color': '#32D400',  // A bright green using hex code
    'line-width': 4,          // Thicker lines
    'line-opacity': 0.6       // Slightly less transparent
    }
    });
});
  

