import { Col, Row, Form } from "react-bootstrap";
import { agregarProd } from "../../helpers/ProductsApi";
import { MenuAdmin } from "../Admin/MenuAdmin";

export const AddProduct = () => {
    const AddProduct = (e) => {
        e.preventDefault();
        const title = document.querySelector("#nombreProd").value,
            description = document.querySelector("#desProd").value,
            caracteristicas = document.querySelector("#caracProd").value,
            SKU = document.querySelector("#skuProd").value,
            price = document.querySelector("#prodPre").value,
            descuento = document.querySelector("#prodDesc").value,
            imagenes = document.querySelector("#proUrl").value
        let id = Math.ceil(Math.random() * 100000);
        if(id <= 100 ){
            id = Math.ceil(Math.random() * 100000);
        }
        const data = {
            MaxVent: 0,
            SKU,
            View: 0,
            caracteristicas,
            category_id: 1,
            description,
            descuento,
            id:id,
            images: [
                imagenes,
            ],
            price,
            subcategoria: 3,
            title
        }
        agregarProd(data)
    }
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
                            <h4>AGREGAR PRODUCTO</h4>
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
                                            <h4>Nuevo Producto</h4>
                                        </div>
                                    </div>
                                </div>
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
                                                    <option value="1">Tecnologias</option>
                                                    <option value="2">Hogar</option>
                                                    <option value="3">Celulares</option>
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
                                                    <option value="4"></option>
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
                                        <div className="btn btn-success float-end my-2 " onClick={AddProduct}>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                            <span className="mx-2">Agregar Producto</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary float-end m-2">
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                                <span className="mx-2">Cancelar</span>
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};