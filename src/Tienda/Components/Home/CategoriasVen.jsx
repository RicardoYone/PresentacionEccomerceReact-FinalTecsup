import { Container , Col, Row} from "react-bootstrap";
import "../../../assets/Home.css"

export const CategoriasVen = () => {
  return (
    <div style={{ background: "#F2F2F2" }}>
      <Container>
        <Row className="textVent">
          <Col xs={12} md={4} className="py-2 py-md-3 borderVent" style={{borderRight: "2px solid #DEDDDC"}}>
            <div>
              <div className="d-flex align-items-center justify-content-center animate__animated animate__jackInTheBox info">
                <i className="textVent iconVent fa fa-truck fa-5x me-3" aria-hidden="true"></i>
                <p className="textVent padding-margin" style={{width: "270px"}}>
                  Entrega de mercancías al día siguiente a su domicilio u
                  oficina
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="py-2 py-md-3 borderVent" style={{borderRight: "2px solid #DEDDDC"}}>
          <div>
              <div className="d-flex align-items-center justify-content-center mt-2 animate__animated animate__jackInTheBox info">
                <i className="fa fa-credit-card fa-4x me-3 iconVent" aria-hidden="true"></i>
                <p className="padding-margin" style={{width: "270px"}}>
                    Cómodo pago con tarjetas bancarias, efectivo y crédito
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="py-2 py-md-3 borderVent">
          <div>
              <div className="d-flex align-items-center justify-content-center mt-2 animate__animated animate__jackInTheBox info ">
                <i className="fa fa-gift fa-4x me-3 iconVent" aria-hidden="true"></i>
                <p className="padding-margin" style={{width: "270px"}}>
                Elija un regalo y obtenga descuentos como: ¡una tarjeta de regalo!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
