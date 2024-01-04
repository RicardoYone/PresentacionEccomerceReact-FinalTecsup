import Accordion from "react-bootstrap/Accordion";
import ImageGallaryComponent from "../Home/ImageGallaryComponent"; 
import { Row, Col, Container, Table, ProgressBar } from "react-bootstrap";
import { CarrouselCategori } from "../Home/CarrouselCategori";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productApi } from "../../helpers/ProductsApi";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import ModalEnvio from "../Envio/ModalEnvio";

const Product = () => {
   const {id}=useParams()
   const[product,setProduct]=useState([])


   const{addItemToCart}=useContext(CartContext);
   useEffect(()=>{
       productApi().then((produc)=>setProduct(Object.values(produc).map((prod)=>prod)
       .filter((produccate)=>produccate.id==(id))))
   },[id])
  
  return (

    <Container >

      {product.map((dato,i)=>
        <Row className="mx-auto my-3" key={i}>
        
        
          <Col lg={7} className="me-3">
          <Row>
            <div className="container bg-white">
             <ImageGallaryComponent images={dato.images} />
            </div>
          </Row>
          <Row className="d-md-block d-none ">
            <Accordion defaultActiveKey={["2"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Características destacadas
                </Accordion.Header>
                <Accordion.Body className="bg-white">
                  <div>
                    <ul>
                      <li style={{ listStyle: "circle" }}>Tipo:Laptop Gamer</li>
                      <li style={{ listStyle: "circle" }}>
                        Modelo:IdeaPad Gaming 3i
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tamaño de pantalla:15.6"
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Definición:Full HD
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Resolución de pantalla:1920 x 1080
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Pantalla táctil:No
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tasa de refreso:60Hz
                      </li>
                      <li style={{ listStyle: "circle" }}>Costado:24.9 cm</li>
                      <li style={{ listStyle: "circle" }}>Alto:2.49 cm</li>
                      <li style={{ listStyle: "circle" }}>Ancho:35.9 cm</li>
                      <li style={{ listStyle: "circle" }}>Peso (kg):2.2 kg</li>
                      <li style={{ listStyle: "circle" }}>
                        Marca de procesador:INTEL
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Procesador:10300H - 10th Generación
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Velocidad de procesador:2.5 GHz
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Velocidad máxima:4.5 GHz
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Núcleos de procesador:4
                      </li>
                      <li style={{ listStyle: "circle" }}>Memoria RAM:8 GB</li>
                      <li style={{ listStyle: "circle" }}>
                        Memoria ampliable:Hasta 16GB
                      </li>
                      <li style={{ listStyle: "circle" }}>Memoria Optane:No</li>
                      <li style={{ listStyle: "circle" }}>
                        Tipo de gráficos:DEDICADO
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Marca tarjeta gráfica:NVIDIA
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tarjeta gráfica:GTX 1650
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Memoria Gráfica:4 GB
                      </li>
                      <li style={{ listStyle: "circle" }}>Capacidad:1 TB DD</li>
                      <li style={{ listStyle: "circle" }}>
                        Disco duro (DD):Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Disco estado sólido (SSD):No
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Permite segunda unidad:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Permite reemplazo:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Wi-Fi:Si</li>
                      <li style={{ listStyle: "circle" }}>HDMI:Si</li>
                      <li style={{ listStyle: "circle" }}>Puertos USB:3</li>
                      <li style={{ listStyle: "circle" }}>
                        Entrada micrófono:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Puerto de red:Si</li>
                      <li style={{ listStyle: "circle" }}>Conexión VGA:No</li>
                      <li style={{ listStyle: "circle" }}>Bluetooth:Si</li>
                      <li style={{ listStyle: "circle" }}>
                        Sistema operativo:Windows 10 Home, Español
                      </li>
                      <li style={{ listStyle: "circle" }}>Garantía:1 año</li>
                      <li style={{ listStyle: "circle" }}>
                        Teclado iluminado:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Teclado númerico:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Unidad óptica:No</li>
                      <li style={{ listStyle: "circle" }}>Cámara web:Si</li>
                      <li style={{ listStyle: "circle" }}>
                        Información adicional:Teclado en español, Color Onyx
                        Black
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="">
                  Detalle de producto
                </Accordion.Header>
                <Accordion.Body className="bg-white">
                  <Table striped bordered hover className="text-center">
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Color</th>
                        <th>Tamaño de la pantalla (pulg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>LE060EL0XSH5FLPE</td>
                        <td>Negro</td>
                        <td>15.6</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>Modelo</th>
                        <th>Garantía del producto</th>
                        <th>Memoria RAM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>81Y40000LM</td>
                        <td>12 meses</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>Peso (kg)</th>
                        <th>Condición del producto</th>
                        <th>Sistema operativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2.2</td>
                        <td>Nuevo</td>
                        <td>Windows 10 Home</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div>
                    <h4 className="my-3">Descripcion</h4>
                    <p>
                      Ahora podrás disfrutar más de tus videojuegos con la
                      laptop IdeaPad Gaming 3i, un portátil sumamente potente
                      que brinda la velocidad que buscabas. Tiene un excelente
                      desempeño gracias a su procesador Intel Core i5. Sus 8GB
                      de memoria RAM y su 1TB de capacidad son suficientes para
                      almacenar todo lo que deseas sin volver lenta tu laptop.
                      Tiene una pantalla de 15.6" Full HD que ofrece imágenes
                      nítidas de colores vivos que te harán vivir una
                      experiencia diferente de juego. Además, su sonido
                      envolvente le dará más realismo. ¡No lo pienses más y
                      aprovecha esta oportunidad!
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Reseñas del producto</Accordion.Header>
                <Accordion.Body className="bg-white">
                  <Table borderless size="sm" className="d-md-block d-none">
                    <tbody className="text-center">
                      <tr>
                        <td className="" style={{ width: "20%" }} rowSpan={6}>
                          <p style={{ fontSize: "60px" }}>4.5</p>
                          <div style={{ fontSize: "20px", color: "#FFAB00" }}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          5
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={77} />
                        </td>
                        <td>49</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          4
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={14} />
                        </td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          3
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={6} />
                        </td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          2
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={1.5} />
                        </td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          1
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={0} />
                        </td>
                        <td>0</td>
                      </tr>                     
                    </tbody>
                  </Table>                  
                  <Table borderless size="sm" className="d-md-none d-block">
                    <tbody >
                      <tr>
                        <td className="" style={{ width: "20%" }} rowSpan={6}>
                          <p className="text-center" style={{ fontSize: "60px" }}>4.5</p>
                          </td>
                          <td>
                          <div className="mt-3 mx-3" style={{ fontSize: "20px", color: "#FFAB00" }}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            <p style={{ fontSize: "20px", color: "#000000" }}>63 reseñas</p>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          </Col>
        <Col lg={4}>
          <div>
            <h3>
            {dato.title}
            </h3>
            <div className="my-1">
              <span>
                
                <span style={{ color: "#FFAB00" }} className="mx-3">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <a
                    href="#"
                    className="mx-3 fw-bold"
                    style={{ color: "#39A945" }}
                  >
                    <u>66 reseñas</u>
                  </a>
                </span>
              </span>
            </div>
            <div className="">
              <div className="discontinuado">
                <span style={{ color: "#AAAFAA" }}>
                  <s>S/{dato.price}.00 </s>
                </span>{" "}
                - 9%
              </div>
              <div
                style={{ color: "#EA2840", fontSize: "25px" }}
                className="fw-bold"
              >
                S/ {dato.descuento}.00
              </div>
              <p>Precio exclusivo en web.</p>
            </div>
            <div className="border rounded-4 p-2">
              <div
                className="my-1"
                style={{ color: "#39A945", fontSize: "25px" }}
              >
                <i className="fa fa-truck" aria-hidden="true"></i>
                <span className="mx-2 fw-bold">Envio Gratis</span>
              </div>
              <div>
                <p>
                  Recibelo el{" "}
                  <span style={{ color: "#39A945" }}>8 de agosto</span> en Lima,
                  San Isidro
                </p>
              </div>
              <div>
                <i
                  style={{ fontSize: "20px" }}
                  className="fa fa-building m-2"
                  aria-hidden="true"
                ></i>
                <h5 className="d-inline my-2">Recógelo gratis en tienda</h5>
                
                 <ModalEnvio/>
                
              </div>
            </div>
            <div className="my-3">
              <div className="d-flex py-2">
                <div className="">
                <select
                    className="form-select"
                    aria-label=".form-select-lg example"
                  >
                    
                    <option value="1" defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">6</option>
                  </select>
                </div>
                <div className="">
                  <button className="btn btn-success mx-2 " onClick={()=>addItemToCart(dato)}>
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{ fontSize: "23px", color: "#808B96" }}
              className="border-top pt-3"
            >
              <div>
                <i className="fa fa-shield" aria-hidden="true"></i>
                <a
                  style={{ color: "#808B96", fontSize: "20px", textDecoration:"none"}}
                  className="mx-2"
                >
                  Protección al comprador
                </a>
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                <a
                  style={{ color: "#808B96", fontSize: "20px" , textDecoration:"none"}}
                  className="mx-2"
                >
                  Asesoría Telefónica: (01) 560-0123
                </a>
              </div>
              <div>
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <a
                  style={{ color: "#808B96", fontSize: "20px", textDecoration:"none"}}
                  className="mx-2"
                >
                  Descarga nuestra App
                </a>
              </div>
            </div>
          </div>
        </Col>

      </Row>)
      }

      <Row className="d-block d-md-none ">
            <Accordion defaultActiveKey={["2"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Características destacadas
                </Accordion.Header>
                <Accordion.Body className="bg-white">
                  <div>
                    <ul>
                      <li style={{ listStyle: "circle" }}>Tipo:Laptop Gamer</li>
                      <li style={{ listStyle: "circle" }}>
                        Modelo:IdeaPad Gaming 3i
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tamaño de pantalla:15.6"
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Definición:Full HD
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Resolución de pantalla:1920 x 1080
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Pantalla táctil:No
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tasa de refreso:60Hz
                      </li>
                      <li style={{ listStyle: "circle" }}>Costado:24.9 cm</li>
                      <li style={{ listStyle: "circle" }}>Alto:2.49 cm</li>
                      <li style={{ listStyle: "circle" }}>Ancho:35.9 cm</li>
                      <li style={{ listStyle: "circle" }}>Peso (kg):2.2 kg</li>
                      <li style={{ listStyle: "circle" }}>
                        Marca de procesador:INTEL
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Procesador:10300H - 10th Generación
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Velocidad de procesador:2.5 GHz
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Velocidad máxima:4.5 GHz
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Núcleos de procesador:4
                      </li>
                      <li style={{ listStyle: "circle" }}>Memoria RAM:8 GB</li>
                      <li style={{ listStyle: "circle" }}>
                        Memoria ampliable:Hasta 16GB
                      </li>
                      <li style={{ listStyle: "circle" }}>Memoria Optane:No</li>
                      <li style={{ listStyle: "circle" }}>
                        Tipo de gráficos:DEDICADO
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Marca tarjeta gráfica:NVIDIA
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Tarjeta gráfica:GTX 1650
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Memoria Gráfica:4 GB
                      </li>
                      <li style={{ listStyle: "circle" }}>Capacidad:1 TB DD</li>
                      <li style={{ listStyle: "circle" }}>
                        Disco duro (DD):Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Disco estado sólido (SSD):No
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Permite segunda unidad:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Permite reemplazo:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Wi-Fi:Si</li>
                      <li style={{ listStyle: "circle" }}>HDMI:Si</li>
                      <li style={{ listStyle: "circle" }}>Puertos USB:3</li>
                      <li style={{ listStyle: "circle" }}>
                        Entrada micrófono:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Puerto de red:Si</li>
                      <li style={{ listStyle: "circle" }}>Conexión VGA:No</li>
                      <li style={{ listStyle: "circle" }}>Bluetooth:Si</li>
                      <li style={{ listStyle: "circle" }}>
                        Sistema operativo:Windows 10 Home, Español
                      </li>
                      <li style={{ listStyle: "circle" }}>Garantía:1 año</li>
                      <li style={{ listStyle: "circle" }}>
                        Teclado iluminado:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>
                        Teclado númerico:Si
                      </li>
                      <li style={{ listStyle: "circle" }}>Unidad óptica:No</li>
                      <li style={{ listStyle: "circle" }}>Cámara web:Si</li>
                      <li style={{ listStyle: "circle" }}>
                        Información adicional:Teclado en español, Color Onyx
                        Black
                      </li>
                    </ul>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="">
                  Detalle de producto
                </Accordion.Header>
                <Accordion.Body className="bg-white">
                  <Table striped bordered hover className="text-center">
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Color</th>
                        <th>Tamaño de la pantalla (pulg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>LE060EL0XSH5FLPE</td>
                        <td>Negro</td>
                        <td>15.6</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>Modelo</th>
                        <th>Garantía del producto</th>
                        <th>Memoria RAM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>81Y40000LM</td>
                        <td>12 meses</td>
                        <td>8</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th>Peso (kg)</th>
                        <th>Condición del producto</th>
                        <th>Sistema operativo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2.2</td>
                        <td>Nuevo</td>
                        <td>Windows 10 Home</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div>
                    <h4 className="my-3">Descripcion</h4>
                    <p>
                      Ahora podrás disfrutar más de tus videojuegos con la
                      laptop IdeaPad Gaming 3i, un portátil sumamente potente
                      que brinda la velocidad que buscabas. Tiene un excelente
                      desempeño gracias a su procesador Intel Core i5. Sus 8GB
                      de memoria RAM y su 1TB de capacidad son suficientes para
                      almacenar todo lo que deseas sin volver lenta tu laptop.
                      Tiene una pantalla de 15.6" Full HD que ofrece imágenes
                      nítidas de colores vivos que te harán vivir una
                      experiencia diferente de juego. Además, su sonido
                      envolvente le dará más realismo. ¡No lo pienses más y
                      aprovecha esta oportunidad!
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Reseñas del producto</Accordion.Header>
                <Accordion.Body className="bg-white">
                  <Table borderless size="sm" className="d-md-block d-none">
                    <tbody className="text-center">
                      <tr>
                        <td className="" style={{ width: "20%" }} rowSpan={6}>
                          <p style={{ fontSize: "60px" }}>4.5</p>
                          <div style={{ fontSize: "20px", color: "#FFAB00" }}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          5
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={77} />
                        </td>
                        <td>49</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          4
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={14} />
                        </td>
                        <td>9</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          3
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={6} />
                        </td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          2
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={1.5} />
                        </td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td style={{ width: "8%" }}>
                          1
                          <i
                            style={{ fontSize: "20px", color: "#FFAB00" }}
                            className="fa fa-star"
                            aria-hidden="true"
                          ></i>
                        </td>
                        <td style={{ width: "80%" }}>
                          <ProgressBar variant="success" now={0} />
                        </td>
                        <td>0</td>
                      </tr>                     
                    </tbody>
                  </Table>                  
                  <Table borderless size="sm" className="d-md-none d-block">
                    <tbody >
                      <tr>
                        <td className="" style={{ width: "20%" }} rowSpan={6}>
                          <p className="text-center" style={{ fontSize: "60px" }}>4.5</p>
                          </td>
                          <td>
                          <div className="mt-3 mx-3" style={{ fontSize: "20px", color: "#FFAB00" }}>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            <p style={{ fontSize: "20px", color: "#000000" }}>63 reseñas</p>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
      <Row>
        <CarrouselCategori/>
      </Row>
    </Container>
  );
};

export default Product;