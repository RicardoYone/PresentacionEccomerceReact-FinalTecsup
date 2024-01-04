import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import ModalEnvio from "../Envio/ModalEnvio";
import { Container, Col, Row, Breadcrumb, Table } from "react-bootstrap";
export const Carshopping = () => {
  const { deleteItemToCart, addItemToCart, deleteProductToCart } =
    useContext(CartContext);
  const { cartItem } = useContext(CartContext);
  const total=cartItem.reduce(
    (previous,current)=>previous + current.cantidad * current.descuento,0
  );

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Breadcrumb className="mt-2">
            <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item active> Carrito de compras </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="border-bottom align-items-center shadow-sm bg-white w-100 mx-1 py-2">
        {" "}
        <Col lg={6}>
          {" "}
          <h4>CARRITO DE COMPRAS</h4>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={9} className="my-3">
          <div className="card">
            <div className="container">
              <Table responsive hover className="text-center">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th className="d-none d-lg-table-cell"></th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                {cartItem.map((prod, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <img
                          src={prod.images[0]}
                          width="90"
                          className="rounded"
                          alt="..."
                        />
                      </td>
                      <td className="d-none d-md-table-cell">
                        <Link
                          to="/product/detail"
                          className="text-start text-decoration-none"
                        >
                          <p style={{ color: "black" }}>{prod.title}</p>
                        </Link>
                      </td>
                      <td>
                        <p className="fw-bold">
                          {" "}
                          <span>S/.</span>
                          {prod.descuento}
                        </p>
                        <small className="text-muted text-decoration-line-through">
                          <p>
                            {" "}
                            <span>S/.</span>
                            {prod.price}
                          </p>
                        </small>
                      </td>
                      <td>
                        <div className="d-flex justify-content-md-evenly flex-column flex-md-row w-75 align-items-center justify-content-center">
                          <button
                            onClick={() => deleteItemToCart(prod)}
                            className="btn btn-outline-success"
                            type="button"
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <input                          
                            type="text"
                            readOnly
                            className="form-control "
                            value={prod.cantidad}
                          />
                          <button
                            onClick={() => addItemToCart(prod)}
                            className="btn btn-outline-success"
                            type="button"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <var className="h6">
                          <span>S/.</span>
                          {prod.cantidad * prod.descuento}
                        </var>
                      </td>
                      <td>
                        <button
                          className="btn text-success"
                          onClick={() => deleteProductToCart(prod)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-md-6 col-12 d-md-block d-none">
                  <Link className="btn btn-success" to="/">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    <span className="mx-2">Continuar Comprando</span>
                  </Link>
                </div>
                <div className="col-md-6">
                  <ModalEnvio/>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3} className="mt-3">
          <Row>
            <div className="card mb-3">
              <div className="card-body d-flex flex-column  align-items-center">
                <label className="me-auto">¿Tienes un Cupón?</label>
                <input
                  type="text"
                  className="form-control my-2"
                  placeholder="Ingresa el código"
                />
                <button className="btn btn-outline-success w-100">
                  {" "}
                  Aplicar
                </button>
              </div>
            </div>
          </Row>
          <Row>
            <div className="card">
              <div className="card-header fw-bold text-center bg-white">
                <span className="">RESUMEN DE TU PEDIDO</span>
              </div>
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Subotal:</dt>
                  <dd className="col-6 text-end">S/{total}.</dd>
                  <dt className="col-6 text-success">Envío:</dt>
                  <dd className="col-6 text-success text-end">Gratis</dd>
                  <dt className="col-6 text-success">
                    Cupón: <span className="small text-muted"></span>{" "}
                  </dt>
                  <dd className="col-6 text-success text-end">S/.0</dd>
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end h4">
                    <span>S/.{total}</span>
                  </dd>
                  <Link to="/checkout">
                    <button className="btn btn-success w-100 mt-3">
                      {" "}
                      Procesar Compra
                    </button>
                  </Link>
                </dl>
              </div>
              <div></div>
            </div>
            <p className="text-center">
              <img
                src="https://ladyrecords.net/wp-content/uploads/2020/12/compra-segura.png"
                alt="..."
                width={200}
              />
            </p>
            <hr />
            <div
              style={{ fontSize: "20px", color: "#808B96" }}
              className="pt-1 d-flex flex-column align-items-center d-md-block"
            >
              <div>
                <i className="fa fa-shield" aria-hidden="true"></i>
                <a
                  style={{
                    color: "#808B96",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                  className="mx-2"
                >
                  Protección al comprador
                </a>
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <a
                  style={{
                    color: "#808B96",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                  className="mx-2"
                >
                  Asesoría Telefónica: 560-0123
                </a>
              </div>
              <div>
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <a
                  style={{
                    color: "#808B96",
                    fontSize: "16px",
                    textDecoration: "none",
                  }}
                  className="mx-2"
                >
                  Descarga nuestra App
                </a>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
