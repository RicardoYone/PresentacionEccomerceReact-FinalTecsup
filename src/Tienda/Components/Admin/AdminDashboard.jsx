import { Col, Row, Card, Modal, Table } from "react-bootstrap";
import {MenuAdmin} from "../Admin/MenuAdmin";
import { Navigate } from "react-router-dom";

export const AdminDashboard = () => {
  let storage = JSON.parse(localStorage.getItem("logeado"))
    console.log(storage)
  return (
    <>
     {(storage === null) ? <Navigate to="/" replace={true} />:
      <Row>
        <Col md={2}>
          <MenuAdmin />
        </Col>
        <Col xs={10} className="mx-auto">
          <Row className="container mx-auto border-bottom border-success align-items-center shadow-sm bg-white w-100 py-2">
            {" "}
            <Col lg={6}>
              {" "}
              <h4>TELETUBIES STORE</h4>
            </Col>
          </Row>
          <Row className="container mx-auto my-5">
            <Col lg={4} className="wrap mb-1">
              <div className="card w-100 border-success border-5">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-success rounded h-100 w-100 d-flex justify-content-center align-items-center border-success">
                        <i className="fa fa-usd h2" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Ventas</Row>
                      <Row className="h3 text-danger">S/.124 000</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-1">
              <div className="card w-100 border-warning">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-warning rounded h-100 w-100 d-flex justify-content-center align-items-center mb-1">
                        <i className="fa fa-truck fs-1" aria-hidden="true"></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Ordenes</Row>
                      <Row className="h3 text-danger">87790</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="card w-100 border-info border-5">
                <div className="card-body">
                  <Row>
                    <Col>
                      <div className="border bg-info rounded h-100 w-100 d-flex justify-content-center align-items-center border-info mb-1">
                        <i
                          className="fa fa-shopping-basket fs-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Col>
                    <Col>
                      <Row className="h5">Total de Productos</Row>
                      <Row className="h3 text-danger">5678</Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="w-100 mt-5">
            <h4>Estadísticas de ventas:</h4>
            <img
              className="mx-auto w-75 my-3"
              src="https://cdn.exceltotal.com/0103/graficos-combinados-en-excel-01.png"
            ></img>
          </Row>
          <Row className="w-100 mt-4">
            <h4>Últimas Ventas:</h4>
            <div className="mx-auto my-4">
              <Table hover striped>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Compra</th>
                    <th>Cantidad de productos</th>
                    <th>Usuario</th>
                    <th>S/.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </Col>
      </Row>}
    </>
  );
};
