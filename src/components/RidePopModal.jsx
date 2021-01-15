import React, { useState } from 'react';
// import { IoMdPin } from 'react-icons/io';
import { Popup } from 'react-map-gl';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

function RidePinPop({ pins }) {
  return pins.map((city) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
      <>
        <Popup
          latitude={parseFloat(city.lat, 10)}
          longitude={parseFloat(city.long, 10)}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
          sortByDepth
        >
          <Button onClick={toggle}>
            <img src={city.media} alt={city.label} width="50px" height="50px" />
          </Button>
        </Popup>
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{city.label}</ModalHeader>
            <img src={city.media} alt={city.label} />
            <ModalBody>{city.summary}</ModalBody>
          </Modal>
        </div>
      </>
    );
  });
}

export default React.memo(RidePinPop);
