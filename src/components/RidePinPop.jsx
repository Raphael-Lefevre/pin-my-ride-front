import React, { useState } from 'react';
import { IoMdPin } from 'react-icons/io';
import { Marker, Popup } from 'react-map-gl';

function RidePinPop({ pins }) {
  return pins.map((city) => {
    const [showPopup, setShowPopup] = useState(true);
    const handleShowPopup = () => {
      const nextShowPopup = showPopup;
      setShowPopup(!nextShowPopup);
    };

    return (
      <>
        <Marker
          key={city.id}
          longitude={city.longitude}
          latitude={city.latitude}
        >
          <IoMdPin
            onClick={handleShowPopup}
            style={{ color: 'red', fontSize: '2em' }}
          />
        </Marker>
        {showPopup && (
          <Popup
            latitude={city.latitude}
            longitude={city.longitude}
            closeButton
            closeOnClick={false}
            onClose={handleShowPopup}
            anchor="top"
          >
            <div>You are here</div>
          </Popup>
        )}
      </>
    );
  });
}

export default React.memo(RidePinPop);
