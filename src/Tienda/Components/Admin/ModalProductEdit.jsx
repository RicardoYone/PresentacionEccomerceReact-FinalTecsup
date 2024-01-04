import React from "react";
import { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export const ModalProductEdit = () => {
    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn text-success" onClick={handleShow}>
                  <i className="fa fa-pencil mx-2" aria-hidden="true"></i>
            </button>


            <Modal show={show} onHide={handleClose}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                                    <div className="card-body">
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Título del Producto:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success border-success"
                                                    id="nombreProd"
                                                ></input>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Descripción:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <textarea
                                                    className="form-control border-success"
                                                    placeholder=""
                                                    style={{ height: "100px" }}
                                                    id="desProd"
                                                ></textarea>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Características:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success border-success"
                                                    id="caracProd"
                                                ></input>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">SKU:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success border-success"
                                                    id="skuProd"
                                                ></input>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Precio Normal:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success"
                                                    id="prodPre"
                                                ></input>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">
                                                    Precio con Descuento:
                                                </label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success"
                                                    id="prodDesc"
                                                ></input>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Categoría:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <select className="form-select border-success">
                                                    <option selected>Selecciona una Categoria</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">Sub Categoría:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <select className="form-select border-success">
                                                    <option selected>Selecciona una Sub Categoria</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3 w-100">
                                            <Col lg={2}>
                                                <label className="form-label">URL de Imagen:</label>
                                            </Col>
                                            <Col lg={10}>
                                                <input
                                                    type="text"
                                                    className="form-control border-success"
                                                    id="proUrl"
                                                ></input>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card-footer">
                                        <div className="btn btn-success float-end my-2 ">
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <span className="mx-2">Actualizar Producto</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary float-end m-2">
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                                <span className="mx-2" onClick={handleClose}>Cancelar</span>
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                </Modal.Body>                
            </Modal>
        </>
    );
};

