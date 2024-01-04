import React from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row, Breadcrumb, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { agregarPedido } from "../../helpers/pedido";
import { useNavigate } from "react-router-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export const Pagos = () => {
    /*Traer datos de Local*/
    let datos = JSON.parse(localStorage.getItem("carro"))
    let TotalFinal = 0;
    let bandera = false
    let navigate=useNavigate();
    let total = datos.map((total) => {
        TotalFinal += (total.cantidad * total.descuento)
    })
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: `${TotalFinal}`,
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        if(actions.order.capture() !== null){
            pedido()
            Swal.fire(
            'Buen Trabajo!',
            'Pedido Realizado con Exito!',
            'success'
        )
        navigate("/compraExitosa", { replace: true });
        }else{
            alert("error")
        }

    }

    const pedido = () => {
        const correo = document.querySelector("#correo").value,
            telefono = document.querySelector("#telefono").value,
            nombre = document.querySelector("#nombre").value,
            direc1 = document.querySelector("#direc1").value,
            direc2 = document.querySelector("#direc2").value,
            departamento = document.querySelector("#departamento").value,
            provin = document.querySelector("#provin").value,
            distri = document.querySelector("#distri").value
            let fecha = new Date()
            const data = {
                correo, 
                telefono,
                nombre,
                direc1,
                direc2,
                departamento,
                provin,
                distri,
                estado: "pendiente",
                fecha,
                productos: datos,
            }
            agregarPedido(data)
    }
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Breadcrumb className="mt-2">
                        <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item active> Procesar Pago </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className="border-bottom align-items-center shadow-sm bg-white w-100 mx-1 py-2">
                <Col lg={6}>
                    <h4>PROCESAR PAGO</h4>
                </Col>
            </Row>
            <Row className="container mx-auto">
                <Col lg={8}>
                    <form>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Información de Contacto</span>
                                </Card.Header>
                                <Card.Body className="row">
                                    <div className="col-md-6 mt-1">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Correo electronico"
                                            id="correo"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-1">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Teléfono"
                                            id="telefono"
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Información de Envío</span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className="row">
                                        <div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Nombres Completos"
                                                id="nombre"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-md-6 mb-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dirección 1"
                                                id="direc1"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-1">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dirección 2"
                                                id="direc2"
                                            />
                                        </div>
                                    </Card.Text>
                                    <Card.Text className="row">
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Departamento"
                                                id="departamento"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Provincia"
                                                id="provin"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Distrito"
                                                id="distri"
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row>
                            <Card className=" my-3 border-success">
                                <Card.Header className="bg-success text-white">
                                    <span>Metodo de Pago</span>
                                </Card.Header>
                                <Card.Body>                               
                                     <Card.Text className="row">
                                        <div className="">
                                            <PayPalButton
                                                createOrder={(data, actions) => createOrder(data, actions)}
                                                onApprove={(data, actions) => onApprove(data, actions)}
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </form>
                </Col>
                <Col lg={4}>
                    <Card className=" my-3 border-success">
                        <Card.Header className="text-success">
                            <span className="fw-bold">Detalle de la Compra</span>
                        </Card.Header>
                        <Card.Body className="">
                            <Card.Text className="row border-bottom">
                                <div className="col-8">
                                    <span>Producto</span>
                                </div>
                                <div className="col-4">
                                    <span>Costo</span>
                                </div>
                            </Card.Text>                            
                                {
                                    datos.map((items) => (
                                        <Card.Text className="row border-bottom">
                                            <div className="col-8 mt-2">
                                                <span className="">{items.title}</span>
                                            </div>
                                            <div className="col-4">
                                                <span className="">S/. {items.cantidad * items.descuento}</span>
                                        </div>
                                    </Card.Text>                                       
                                    ))
                                }
                            <Card.Footer>
                                <div className="row">
                                    <div className="col-8">
                                        <span className="fw-bold">TOTAL</span>
                                    </div>
                                    <div className="col-4">
                                        <span className="fw-bold">S/. {TotalFinal}</span>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};