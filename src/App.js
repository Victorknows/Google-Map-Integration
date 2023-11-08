import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
function App() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoibm9ubmllLWdhdGhvbmkiLCJhIjoiY2xvbzlwNXYxMzNqeDJscndxbmI2eTkzMCJ9.BbIACXxO5Dye7k4gZLgz-g';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(36.817223);
  const [lat, setLat] = useState(-1.286389);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    
    // // Create a new marker.
    const marker = new mapboxgl.Marker()
      .setLngLat([-1.290394, 36.816583])
      .addTo(map);
    // Set marker options.

  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );


}

export default App;
