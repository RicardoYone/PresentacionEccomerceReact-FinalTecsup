import { Col, Row, Table } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import { useEffect, useState, useContext } from "react";
import { eliminarProduct, productApi } from "../../helpers/ProductsApi";
import { MenuAdmin } from "../Admin/MenuAdmin";
export const VerCompras = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi().then((produc) => setProducts(produc))
  }, [])
  let nuevo = []
  for (let clave in products) {
    nuevo.push(products[clave])
  }

  const columns = [
    {
      name: "title",
      label: "Nombre",
      options: {
       filter: true,
       sort: false,
      }
    },
    {
     name: "SKU",
     label: "SKU",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "category_id",
      label: "category_id",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "descuento",
      label: "descuento",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "images",
      label: "images",
      options: {
        customBodyRender: (label) => {
          return (
            <>
            <img src={label[0]} width={60} />
            </>
          )
        },
        sort: false,
      }
    },
     {
      name: "price",
      label: "price",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "id",
      label: "Borrar",
      options: {
        customBodyRender: (id) => {
          return (
            <>
            <button className="btn btn-danger" onClick={()=>borrarProduct(id)}>Borrar</button>
            </>
          )
        },
        sort: false,
      }
     }
   ];
  const data = [];
  for (let clave in products){
    data.push(products[clave])
  }

  const options = {
    filterType: 'checkbox',
  };

  



  const borrarProduct = (id) => {
    for (const property in products) {
      if (products[property].id === id) {
        eliminarProduct(property)
      }
    }
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
              <h4>PRODUCTOS</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="my-5 mx-auto">
              <MUIDataTable
                title={"Listar Productos"}
                data={data}
                columns={columns}
                options={options}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
