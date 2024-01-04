import { Col, Row, Card, Modal, Table } from "react-bootstrap";
import {MenuAdmin} from "../Admin/MenuAdmin";


export const AddCategoria = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <MenuAdmin />
        </Col>

        <Col xs={10}>
          <Row className="border-bottom border-success align-items-center shadow-sm bg-white w-100 py-2">
            {" "}
            <Col lg={6}>
              {" "}
              <h4>AGREGAR CATEGORIA</h4>
            </Col>
          </Row>
          <Row className="container mx-auto my-5">
            <Col>
              <div className="card border-success">
                <div
                  className="card-header border-success"
                  style={{
                    backgroundImage:
                      "url(https://static.vecteezy.com/system/resources/previews/001/884/507/large_2x/abstract-green-water-color-background-illustration-texture-for-design-free-photo.jpg)",
                  }}
                >
                  <div className="">
                    <div className="d-flex flex-column align-items-center">
                      <h4>Nueva Categoria</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Row className="mb-3 w-100">
                    <Col lg={2}>
                      <label className="form-label">Nombre de la Categoria:</label>
                    </Col>
                    <Col lg={10}>
                      <input
                        type="text"
                        className="form-control border-success border-success"
                      ></input>
                    </Col>
                  </Row>
                  <Row className="mb-3 w-100">
                    <Col lg={2}>
                      <label className="form-label">Referencia:</label>
                    </Col>
                    <Col lg={10}>
                      <textarea
                        className="form-control border-success"
                        placeholder=""
                        style={{ height: "100px" }}
                      ></textarea>
                    </Col>
                  </Row>
                  <Row className="mb-3 w-100">
                    <Col lg={2}>
                      <label className="form-label">Sub Categorias:</label>
                    </Col>
                    <Col lg={10}>
                      <textarea
                        className="form-control border-success"
                        placeholder=""
                        style={{ height: "100px" }}
                      ></textarea>
                    </Col>
                  </Row>                 
                </div>
                <div className="card-footer py-2">
                  <div className="btn btn-success float-end">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span className="mx-2">Agregar Categoria</span>
                  </div>
                  <div>
                    <button className="btn btn-secondary float-end mx-2">
                      <i className="fa fa-times" aria-hidden="true"></i>
                      <span className="mx-2">Cancelar</span>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

