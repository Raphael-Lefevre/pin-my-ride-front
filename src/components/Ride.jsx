import { useState } from 'react';
import MapGL from 'react-map-gl';
import RidePinPop from './RidePinPop';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const ridePins = [
  { id: '1', latitude: 37.79, longitude: -122.42 },
  { id: '2', latitude: 37.78, longitude: -122.41 },
  { id: '3', latitude: 37.77, longitude: -122.43 },
];

function RideMap() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <RidePinPop pins={ridePins} />
    </MapGL>
  );
}

export default RideMap;
