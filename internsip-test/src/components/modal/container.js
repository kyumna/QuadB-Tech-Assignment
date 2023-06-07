import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from './Bform'

function Example() {
    const [show, setShow] = useState(false);
   
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
               Book Your Ticket 
            </Button>

            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title style={{color:'black'}}>Enter Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form close={handleClose}></Form></Modal.Body>
               
            </Modal>
        </>
    );
}

export default Example;