import axios from 'axios';
import { useEffect, useState } from 'react';
import MapGL from 'react-map-gl';
import { Container } from 'reactstrap';
import RidePopModal from './RidePopModal';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function RideMap() {
  const [ridePins, setRidePins] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/v0/rides/1/pins').then((responses) => {
      const newRidePins = responses.data;
      setRidePins(newRidePins);
    });
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 40.01,
    longitude: -100.01,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  return (
    <Container>
      <MapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {ridePins && <RidePopModal pins={ridePins} />}
      </MapGL>
    </Container>
  );
}

export default RideMap;
