import "../../../assets/Footer.css";
import cmr from "./img/cmr.png";
import pefectivo from "./img/pefectivo.png";
import AppGallery from "./img/AppGallery.png";
import AppStore from "./img/AppStore.png";
import GooglePlay from "./img/GooglePlay.png";
import libro from "./img/libro.png";
import Accordion from "react-bootstrap/Accordion";import Swal from "sweetalert2";
 

function Footer() {
  const correoAgregado = () => {
    Swal.fire({
      title:'Tu registro fue Exitoso!',
      icon: 'success',
      button:'Aceptar',    
    });
  };

  return (
    <footer>      
      <div className="main">
        <div className="row py-4">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <p className="h5 fw-bold text-center text-md-start">
              ¡SUSCRÍBETE A NUESTRO NEWSLETTER!
            </p>
          </div>
          <form className="col-lg-9 col-md-6 col-sm-12 col-12 row my-2">
            <div className="col-lg-6 col-12">
              <input
                type="email"
                required="required"
                placeholder="Suscríbete con tu email"
                className="row form-control"
              />
              <div className="d-flex align-items-center">
                <label className="my-2">
                  <input type="checkbox" required="required" />
                  <span className="small">
                    Acepto{" "}
                    <a className="" href="#">
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a className="" href="#">
                      Política de Privacidad y Tratamiento de Datos Personales
                    </a>
                  </span>
                </label>
              </div>
              <div className=" mt-2">
                <label className="">
                  <input type="checkbox" required="required" />
                  <span className="small">
                    Autorizo el uso de mi información para{" "}
                    <a className="" href="#">
                      fines adicionales
                    </a>
                  </span>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-2">
              <button onClick={()=>correoAgregado()}
                type="submit"
                className="btn btn-block btn-sm btn-secondary col-12"
              >
                Ofertas para hombre
              </button>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-2">
              <button onClick={()=>correoAgregado()}
                type="submit"
                className="btn btn-block btn-sm btn-secondary col-12"
              >
                Ofertas para mujer
              </button>
            </div>
          </form>
        </div>
        <div className="m-pagos d-flex row col-12">
          <div className="d-flex col-6 flex-fill">
            <div className="d-md-flex m-2 flex-fill justify-content-">
              <div className="d-lg-flex flex-fill justify-content-evenly">
                <div className="text-lg-center py-lg-3 px-lg-4 me-2">
                  <div className="col-xl-12 d-none d-lg-block">
                    <img className="f-icon" src={cmr} alt="" style={{height: "30px"}}/>
                  </div>
                  <div className="col-xl-12 col-lg-3 txt-mpagos">
                    CMR Falabella
                  </div>
                </div>
                <div className="text-lg-center py-lg-3 px-lg-5 me-2">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-cc-paypal fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-3 txt-mpagos">Paypal</div>
                </div>
              </div>
              <div className="d-lg-flex flex-fill justify-content-evenly">
                <div className="text-lg-center py-lg-3 px-lg-5 me-2">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-3 txt-mpagos">Visa</div>
                </div>
                <div className="text-lg-center py-lg-3 px-lg-4 me-2">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-3 txt-mpagos">
                    MasterCard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex col-6 ">
            <div className="d-md-flex m-2 flex-fill ">
              <div className="d-lg-flex flex-fill justify-content-evenly">
                <div className="text-lg-center py-lg-3 px-lg-4">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-cc-amex fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-8 txt-mpagos">
                    American Express
                  </div>
                </div>
                <div className="text-lg-center py-lg-3 px-lg-4 ">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-cc-diners-club fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-8 txt-mpagos">
                    Diners Club
                  </div>
                </div>
              </div>
              <div className="d-lg-flex flex-fill justify-content-evenly">
                <div className="text-lg-center py-lg-3 px-lg-4">
                  <div className="col-xl-12 d-none d-lg-block">
                    <i className="fa fa-money fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-xl-12 col-lg-8 txt-mpagos">
                    Depósito online o en agencia
                  </div>
                </div>
                <div className="text-lg-center py-lg-3 px-lg-4 ">
                  <div className="col-xl-12 d-none d-lg-block">
                    <img className="f-icon" src={pefectivo} alt="" style={{height: "30px"}}/>
                  </div>
                  <div className="col-xl-12 col-lg-8 txt-mpagos">
                    Pago Efectivo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-sm-12">
            <div className="row d-lg-block d-none my-4">
              <div className="row">
                <div className="col-md-3 col-sm-12 block">
                  <div className="">ACERCA DE TELETUBIES STORE</div>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">Historia</a>
                    <a href="#">Ayuda</a>
                    <a href="#">
                      Nuevos Términos de Uso y Condiciones de Entrega
                    </a>
                    <a href="#">Protección de Propiedad Intelectual</a>
                    <a href="#">Envío en 24 horas</a>
                    <a href="#">Programas de Lealtad</a>
                    <a href="#">Vuélvete un Afiliado</a>
                    <a href="#">Trabaja con nosotros</a>
                    <a href="#">Canal de Integridad</a>
                    <a href="#">Directorio</a>
                    <a href="#">Login</a>
                    <a href="#">Legales</a>
                    <a href="#">Grupo Falabella</a>
                    <a href="#">Developers</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div>SERVICIO AL CLIENTE</div>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Contacto</a>
                    <a href="#">Formas de Pago</a>
                    <a href="#">Política de Garantía y Devoluciones</a>
                    <a href="#">Aviso de Privacidad</a>
                    <a href="#">
                      Política de venta de productos internacionales
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="footer-nav-title">PUNTOS DE VENTA</div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex flex-column fmenu">
                      <a href="#">Colombia</a>
                      <a href="#">Chile</a>
                      <a href="#">México</a>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column fmenu">
                      <a href="/">Perú</a>
                      <a href="#">Falabella</a>
                      <a href="#">Sodimac</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                  <div className="">NOVEDADES</div>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">CMR days</a>
                    <a href="#">Días Naranja</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Blog Linio</a>
                    <a href="#">Price Index</a>
                  </div>
                </div>
              </div>
            </div>
            <Accordion
              className="d-block d-lg-none my-3"
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>ACERCA DE TELETUBIES STORE</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">Historia</a>
                    <a href="#">Ayuda</a>
                    <a href="#">
                      Nuevos Términos de Uso y Condiciones de Entrega
                    </a>
                    <a href="#">Protección de Propiedad Intelectual</a>
                    <a href="#">Envío en 24 horas</a>
                    <a href="#">Programas de Lealtad</a>
                    <a href="#">Vuélvete un Afiliado</a>
                    <a href="#">Trabaja con nosotros</a>
                    <a href="#">Canal de Integridad</a>
                    <a href="#">Directorio</a>
                    <a href="#">Login</a>
                    <a href="#">Legales</a>
                    <a href="#">Grupo Falabella</a>
                    <a href="#">Developers</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>SERVICIO AL CLIENTE</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Contacto</a>
                    <a href="#">Formas de Pago</a>
                    <a href="#">Política de Garantía y Devoluciones</a>
                    <a href="#">Aviso de Privacidad</a>
                    <a href="#">
                      Política de venta de productos internacionales
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>PUNTOS DE VENTA</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">Colombia</a>
                    <a href="#">Chile</a>
                    <a href="#">México</a>
                    <a href="/">Perú</a>
                    <a href="#">Falabella</a>
                    <a href="#">Sodimac</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>NOVEDADES</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-column fmenu">
                    <a href="#">CMR days</a>
                    <a href="#">Días Naranja</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Blog Linio</a>
                    <a href="#">Price Index</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-3 col-sm-12 siguenos">
            <div className="row">
              <div className="medida col-12 col-lg-12 col-md-4 d-flex align-items-center justify-content-center">
                <div className=" col-lg-6 text-lg-center p-3">SIGUENOS</div>
                <div className="col-lg-6 mx-xl-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Siguenos en Facebook"              
                  >
                    <i className="icon fa fa-facebook" aria-hidden="true"></i>                    
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    title="Siguenos en Twitter"
                  >
                    <i className="icon fa fa-twitter" aria-hidden="true"></i>                    
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    title="Siguenos en Youtube"
                  >
                    <i className="icon fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-md-8 justify-content-sm-evenly">
                <div className=" my-2 d-lg-block d-md-flex align-items-center">
                  <a href="#" className="d-block text-center">
                    <img className="icon-app my-1" src={GooglePlay} alt="" />
                  </a>
                  <a href="#" className="d-block text-center">
                    <img className="icon-app my-1" src={AppStore} alt="" />
                  </a>
                  <a href="#" className="d-block text-center">
                    <img className="icon-app my-1" src={AppGallery} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center my-3">
              <a className="col-12 text-center" target="_blank" href="/#">
                <img className="icon-libro" src={libro} alt="" />
              </a>
              <i className="col-md-12 col-12 mt-3"></i>
              <div className="col-12 text-center text-lg-start">
                © 2022 Teletubies Store | Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;