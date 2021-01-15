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
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  });
}

export default React.memo(RidePinPop);
