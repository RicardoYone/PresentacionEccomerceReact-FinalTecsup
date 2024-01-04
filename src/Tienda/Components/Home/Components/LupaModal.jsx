import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ImageGallaryComponent from '../ImageGallaryComponent';

export const LupaModal = (prod) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <i className="iconCard fa fa-search-plus fa-2x" aria-hidden="true" onClick={handleShow} style={{ color: "black" }}></i>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered className="d-flex justify-content-center align-content-center"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{prod.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ImageGallaryComponent images={prod.images}/> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}