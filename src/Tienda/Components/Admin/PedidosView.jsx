import { Col, Row, Table} from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import { eliminarProduct, productApi } from "../../helpers/ProductsApi";
import { MenuAdmin } from "./MenuAdmin";

export const PedidosView = () => { 
 
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
              <h4>PEDIDOS</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="my-5 mx-auto">
              <Table responsive hover className="text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODUCTOS</th>
                    <th>CANTIDAD</th>
                    <th>USUARIO</th>                    
                    <th>s/.</th>
                    <th>ESTADO DE ENTREGA</th>                    
                    <th></th>
                  </tr>
                </thead>             
                  <tbody>
                    <tr>
                      <td>
                        <span></span>
                      </td>
                      <td>
                        <img
                          src=""
                          width="90"
                          className="rounded"
                          alt="..."
                        />
                      </td>
                      <td>
                        <span></span>
                      </td>
                      <td>                        
                          <p className="text-start"></p>                        
                      </td>
                      <td>
                      <p>S/.</p>
                      </td>
                      <td>
                         <span>S/.</span>
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
              </Table>              
            </Col>
          </Row>
        </Col>
      </Row>              
    </>
  );
};
