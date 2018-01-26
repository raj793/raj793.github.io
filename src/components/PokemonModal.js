import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap/lib/';

const PokemonModal = ({openModal, closeModal, showModal, pokemon}) => {

    return(
        <ButtonToolbar>

        <Modal
          show={showModal}
          onHide={closeModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    )
}

export default PokemonModal;