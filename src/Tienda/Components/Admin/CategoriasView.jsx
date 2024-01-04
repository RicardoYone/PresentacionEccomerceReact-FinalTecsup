import { Col, Row, Table } from "react-bootstrap";
import {MenuAdmin} from "../Admin/MenuAdmin";
import { useState  } from "react";


export const CategoriasView = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);




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
              <h4>CATEGORIAS</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="my-5 mx-auto">
              <Table responsive hover className="text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>SUB CATEGORIAS</th>                                    
                    <th></th>
                  </tr>
                </thead>
                {/*{cartItem.map((prod, index) => (*/}
                {products.map((prod) => (
                  <tbody key={prod.id}>
                    <tr>
                      <td>
                        <span>{prod.category_id}</span>
                      </td>                      
                      <td>                        
                          <p className="text-start">{prod.title}</p>                        
                      </td>
                      <td>                        
                          <p className="text-start">{prod.subcategoria}</p>                        
                      </td>                                            
                      <td>
                      <div className="d-flex ">
                        <button className="btn text-success">
                        <i className="fa fa-pencil mx-2" aria-hidden="true"></i>
                        </button>
                        <button className="btn text-success">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>              
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};