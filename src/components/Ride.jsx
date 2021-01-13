import PropTypes from 'prop-types';
import { PureComponent, useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { IoMdPin } from 'react-icons/io';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const pins = [
  { name: 'ville', latitude: 37.79, longitude: -122.42 },
  { name: 'ville', latitude: 37.78, longitude: -122.41 },
  { name: 'ville', latitude: 37.77, longitude: -122.43 },
];

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  render() {
    const { data } = this.props;
    return data.map((city) => (
      <Marker
        key={city.name}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <IoMdPin style={{ color: 'red', fontSize: '2em' }} />
      </Marker>
    ));
  }
}

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
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
      <Markers data={pins} />
    </MapGL>
  );
}
Markers.defaultProps = {
  data: [],
};

Markers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
};

export default Map;

// import { Container, Row } from 'reactstrap';

// function Ride() {
//   return (
//     <Container>
//       <Row className="d-flex justify-content-center">
//         <h1>Ride</h1>
//       </Row>
//     </Container>
//   );
// }

// export default Ride;
