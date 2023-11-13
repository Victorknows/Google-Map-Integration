// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
import Adress from './Adress';
function App() {
  // mapboxgl.accessToken = 'pk.eyJ1Ijoibm9ubmllLWdhdGhvbmkiLCJhIjoiY2xvbzlwNXYxMzNqeDJscndxbmI2eTkzMCJ9.BbIACXxO5Dye7k4gZLgz-g';

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(36.817223);
  // const [lat, setLat] = useState(-1.286389);
  // const [zoom, setZoom] = useState(9);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
    
  //   // Create default markers
  //   // map.current((feature) =>
      
  //   // );
  //   // new mapboxgl.Marker().setLngLat(getCoordinates("SRID=4326;POINT (-9.419645 7.4856489)")).addTo(map)

  //   console.log(getCoordinates("SRID=4326;POINT (-9.419645 7.4856489)"))
  //   return () => map.remove();
  // }, []);
  // function getCoordinates(point) {

  //   let a = point.indexOf("(")
  //   let b = point.lastIndexOf(")")
  //   let d = point.slice(a + 1, b)
  //   let co = d.split(" ").map(l=> {
  //     return parseFloat(l)
  //   })

  //   return co
  // }

 

  return (
    <div>
    {/* //   <div ref={mapContainer} className="map-container" /> */}
      <Adress/>
  
    </div>
  );


}

export default App;
