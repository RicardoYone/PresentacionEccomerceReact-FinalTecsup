import { Container, Col, Row, Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";


export const CompraExitosa = () => {
    const { cartItem } = useContext(CartContext);
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header style={{ height: "10rem" }}>
              <div className="d-flex align-items-center justify-content-center h-100">
                <i
                  className="fa fa-check-circle-o text-success"
                  style={{ fontSize: "4rem" }}
                  aria-hidden="true"
                ></i>
                <span className="mx-2 h3">Tu pedido ha sido confirmado</span>
              </div>
            </Card.Header>
            <Card.Body className="row">
              <Card.Text className="col-md-8">
                <p>
                  Hola <span className="fw-bold">Martin!</span> Estamos
                  preparando tu pedido para enviártelo cuanto antes. Tan pronto
                  sea enviado, te notificaremos por correo Electrónico. A partir
                  de hoy empezamos a contar el tiempo de entrega de tu pedido.
                  Los tiempos de entrega se cuentan en días hábiles. A
                  continuación puedes revisar la fecha estimada de entrega de tu
                  compra.
                </p>
                <span className="btn">
                  <u>Quiero saber mas...</u>
                </span>
              </Card.Text>
              <Card.Text className="col-md-4">
                <Card>
                  <Card.Header className="bg-success">
                  <i className="text-warning fa fa-exclamation-triangle" aria-hidden="true"></i>
                    <span className="mx-2 h5">Información Importante</span>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text style={{ fontSize: "1rem" }}>
                      <Row>
                        <Col lg={7}>
                          <span>Pedido Confirmado:</span>
                        </Col>
                        <Col lg={5}>
                          <span>01/08/2022</span>
                        </Col>
                      </Row>
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1rem" }}>
                      <Row>
                        <Col lg={7}>
                          <span>Pedido Registrado:</span>
                        </Col>
                        <Col lg={5}>
                          <span>01/08/2022</span>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Header>
              <div className="">
              <i className="fa fa-list-alt h3" aria-hidden="true"></i>
                <span className="mx-2 h3">Detalle del Pedido</span>
              </div>
            </Card.Header>
            <Card.Body className="row">
             <Card.Text className="">                
             {cartItem.map((prod, index) => (
                  <div key={index}>
                    <Row className="border-bottom py-1">
                        <Col className="col-md-2 col-4">
                        <img
                          src={prod.images[0]}
                          width="90"
                          className="rounded m-auto"
                          alt="..."
                        />
                        </Col>
                        <Col className="col-md-7 col-5">
                        <p style={{ color: "black", fontSize:"1rem" }}>{prod.title}</p> 
                        <p style={{ color: "black", fontSize:"1rem" }}>
                            {" "}
                            <span>Cantidad: </span>
                            {prod.cantidad}
                          </p>                       
                        </Col>
                        <Col className="text-end col-md-3 col-3">
                            
                        <p style={{ color: "black", fontSize:"1.2rem" }}>
                            {" "}
                            <span>S/.</span>
                            {prod.cantidad * prod.descuento}
                          </p>                        
                        </Col>
                    </Row>                                           
                  </div>))}
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={6} className="mb-3">
          <Card>
            <Card.Header className="bg-success">
              <div className="">
                <span className="mx-2 h5">Datos de Envío</span>
              </div>
            </Card.Header >
            <Card.Body className="row">
              <Card.Text>
                <p>
                  Nombre Completo: <span className="fw-bold">Martin</span>
                </p>
                <p>
                  Dirección de Envío:{" "}
                  <span className="fw-bold">
                    Av. República de Panama 3157 - San Isidro - Lima
                  </span>
                </p>
                <p>
                  Número de Teléfono: <span className="fw-bold">946588124</span>
                </p>
                <p>
                  Correo Electronica:{" "}
                  <span className="fw-bold">mtineo@gmail.com</span>
                </p>
                <p>
                  Fecha de Entrega:{" "}
                  <span className="fw-bold">08/08/2022</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3" md={6}>
          <Card>
            <Card.Header className="bg-success">
              <span className="mx-2 h5">Resumen de Pedido</span>
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ fontSize: "1rem" }}>
                <Row className="py-2">
                  <Col lg={7}>
                    <span>SubTotal:</span>
                  </Col>
                  <Col lg={5}>
                    <span>S/. </span>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text style={{ fontSize: "1rem" }}>
              <Row className="py-2 border-bottom">
                  <Col lg={7}>
                    <span>Costo de Envío:</span>
                  </Col>
                  <Col lg={5}>
                    <span>S/. 0</span>
                  </Col>
                </Row>
              </Card.Text>
              <Card.Text style={{ fontSize: "1rem" }}>
                <Row className="py-2">
                  <Col lg={7}>
                    <span className="h5">Total:</span>
                  </Col>
                  <Col lg={5}>
                    <span className="h5">S/. 0</span>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
