import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
export const SubCategory = (props) => {
  let activeStyle = {
    'fontWeight': 'bold',
  color: '#198754',
};
const{Subcategory,ide}=props;
  return (
    <>
      <div>
      {
          Subcategory  ?(
           
          <Container className='py-3'>
            <Row >
              <Col lg={4} >
                <p className="text-lg font-bold text-center text-primary mb-3  ">
                  SubCategorias
                </p>
                <ul>
              { Subcategory.map(subcategorias=>(
                  <li key={subcategorias.id} className="py-2">
                  <NavLink to={`/Category/${ide}/${subcategorias.id}`} className=' subcatergoria-menu text-decoration-none' 
                      style={({ isActive }) =>isActive ? activeStyle  : undefined } >
                      {subcategorias.name}
                  </NavLink>             
              </li>
                  ))
              }
                </ul>
              </Col>

              <Col lg={8} >
                <Row lg={2} md={2} sm={2} xs={2}>
                { Subcategory.map(subcategorias=>(
                
                      <Col key={subcategorias.id}> 
                      <img
                        className=" h-64 w-100 subcategoria cajasBanner mb-3"
                        src={subcategorias.image}
                        alt={subcategorias.name}
                      /> </Col>
                ))
                } </Row>
              </Col>
            </Row>
        </Container>): 
        <>
          <Container className='py-3'>
          <Row >
          <Col lg={12}>
            <div
              style={{ background: "#B26AF3", height: "51px" }}
              className="align-items-center"
            >
              <h2 className="text-center text-white pt-2">¡SOLO X 24 HORAS!</h2>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bannerPeque d-flex">
              <div style={{ width: "50%" }}>
                <div className="imgCir">
                  <img
                    src="https://i.linio.com/p/69c60d0c79499e1eb412d93adca607bf-product.jpg"
                    alt=""
                    width={120}
                    className="proimg"
                  />
                </div>
              </div>
              <div className="text-white mt-3 cajasBanner">
                <span className="fs-5 fw-bold">Audífonos Bluetooth</span>
                <br></br>
                <span className="fs-5">On Ear Sony WH-CH510</span>
                <br></br>
                <span className="fs-5 fw-bold">S/ 109.00</span>
                <br></br>
                <span className="fs-3 fw-bold text-dark">S/ 99.00</span>
                <br></br>
                <img
                  src="https://dynamic-yield.linio.com//api/scripts/8767678/images/eeb14ea9917f__cmr_unica.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="bannerPeque d-flex">
              <div style={{ width: "50%" }}>
                <div className="imgCir">
                  <img
                    src="https://i.linio.com/p/e4bb3015b845c7945bcc0572befbadb2-product.jpg"
                    alt=""
                    width={120}
                    className="proimg"
                  />
                </div>
              </div>
              <div className="text-white mt-3 cajasBanner">
                <span className="fs-4 fw-bold">TV LED 55" UHD</span>
                <br></br>
                <span className="fs-5">LG 4K Thinq Ai 2022</span>
                <br></br>
                <span className="fs-5 fw-bold">S/ 2,799.00</span>
                <br></br>
                <span className="fs-3 fw-bold text-dark">S/ 1,499.00</span>
                <br></br>
                <img
                  src="https://dynamic-yield.linio.com//api/scripts/8767678/images/eeb14ea9917f__cmr_unica.png"
                  alt=""
                />
              </div>
            </div>
          </Col>

         <h3 className="mb-4">TIENDAS OFICIALES </h3>
                <Col lg={4}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/21ff359b07112__sis_ts_redragon.jpg" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/fc3a5e405c96__sis_ts_samsung-1.jpg" alt="" />
                </Col>
                <Col lg={4}>
                    <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/195a9e447ac91__sis_ts_huawei2-1.jpg" alt="" />
                </Col>
        
      </Row>
           
          </Container>
        </>
        }
        
      </div>
    </>
  );
};