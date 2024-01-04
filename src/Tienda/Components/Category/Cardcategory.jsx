import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import useLocalStorage from "use-local-storage";
import { CategoriaItems } from "./CategoriesItems";
import { Categoryfilters } from "./Category-filters";
import { Container, Dropdown } from "react-bootstrap";
import '../../../assets/style.css'


export const Cardcategory = ({id}) => {
  const defaultModo = "grid";
  const [tipo, setTipo] = useLocalStorage(
    "vista",
    defaultModo ? "grid" : "lista"
  );

  const handleVistaGrid = () => {
    const newVista = "lista";
    setTipo(newVista);
  };
  const handleVista = () => {
    const newVista = "grid";
    setTipo(newVista);
  };
 
  return (
    <>
      <Container fluid className="w-100 mt-4">
        <Row>
            <img
              src="https://mercury.vteximg.com.br/arquivos/ids/4680630/27_12_desktop_newhome_banner_tecnologia.jpg"
              alt=""
              className="w-100"
            />
        </Row>
        <Row className="border align-items-center shadow-sm bg-white w-100 mx-1 py-2">
          {" "}
          <Col lg={6}>
            {" "}
            <h4>CELULARES Y SMARTPHONES / SAMSUNG</h4>
          </Col>
          <Col lg={4} md={8} sm={8} xs={8}>
            <Row>
              <Col sm={3} xs={3} className="">
                <NavDropdown title="Marca" id="navbarScrollingDropdown">
                  <NavDropdown.Item className="Flecha" href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* muestra la line horizontal */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>               
              </Col>
              <Col sm={3} xs={3}>
                <NavDropdown title="Precio" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* muestra la line horizontal */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col sm={3} xs={3}>
                <NavDropdown title="Ordenar" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  {/* muestra la line horizontal */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Row>
          </Col>
          <Col lg={2} md={4} sm={4} xs={4}>
            <Row className="align-items-center">
              <Col xs={12} className=" d-flex justify-content-end ">
                <span className="me-3 cursor-pointer" onClick={handleVista}>
                  <i className="fa fa-th-large fa-2x " aria-hidden="true"></i>
                </span>
                <span className="cursor-pointer " onClick={handleVistaGrid}>
                  <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Categoryfilters id={id} />
          <Col lg={9}>
            <CategoriaItems tipo={tipo} id={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
