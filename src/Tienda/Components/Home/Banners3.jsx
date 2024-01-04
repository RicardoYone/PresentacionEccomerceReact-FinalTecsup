import {Row, Col, Container} from "react-bootstrap";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import "../../../assets/Home.css";

export const Banners3 = () => {

    const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,      
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3,
                infinite: true,                
              },
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3,
                infinite: true,                
              },
            },
             {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
                dots: false,
               },
             },
             {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true,
                dots: false,
               },
             },
          ],
        };

  return (
    <Container>
    <Container className="mt-3">
        <Row  className="my-2 ">
          <div className="d-flex align-items-center">
            <h3 className="me-2">Tecnología</h3>
              <Link to="/Category/1" className="text-verde">
                ver mas...
              </Link>
          </div>
           
        </Row>
        <Row  className="borderImg text-center pb-4 " >
            <Col lg={6} >
            <img src="https://www.shopstar.pe/arquivos/22_07_CelebraPeru_desktop_mosaico2_tecnologia_wacom.jpg?v=637941162966800000"></img>
            </Col>
            <Col lg={6} className="margen">
            <img src="https://www.shopstar.pe/arquivos/22_07_CelebraPeru_desktop_mosaico2_tecnologia_equipos.jpg?v=637941162977130000"></img>
            </Col>
        </Row>
        <Row className="borderImg2">
        <div>
          <Slider {...settings} className="">
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_Consolas.jpg"></img>            
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_monitor.jpg?v=637941217048830000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_logitech.jpg?v=637941217047400000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_TV.jpg?v=637941217051000000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_smartphone.jpg?v=637941217049900000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_wacom.jpg?v=637941217051930000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/25_07_CelebraPeru_desktop_carruselX4_tecnologia_altavozb.jpg?v=637943763241830000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/21_07_CelebraPeru_desktop_carruselX4_tecnologia_GOPRO.jpg?v=637941217046500000"></img>
            </div>
          </Slider>
        </div>      
        </Row>
    </Container>
    <Container className="mt-3">
        <Row  className="my-2">
            <div className="d-flex align-items-center">
            <h3 className="me-2">Hogar</h3>
              <Link to="/Category/2" className="text-verde">
                ver mas...
              </Link>
          </div>
        </Row>
        <Row  className="borderImg text-center pb-4">
            <Col lg={6}>
            <img src="https://www.shopstar.pe/arquivos/22-07-HomeRegular-desktop-Mosaicox2-electro-lavadoras.jpg?v=637941217140700000"></img>
            </Col>
            <Col lg={6} className="margen">
            <img src="https://www.shopstar.pe/arquivos/22-07-HomeRegular-desktop-Mosaicox2-electro-deshumedecedores.jpg?v=637941217139600000"></img>
            </Col>
        </Row>
        <Row className="borderImg2">
        <div>
          <Slider {...settings} className="gap-1">
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen6.jpg?v=637941301800930000"></img>            
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen4.jpg?v=637941301801270000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen8.jpg?v=637941301803770000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen10.jpg?v=637941301807200000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen7.jpg?v=637941301803300000"></img>
            </div>
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen3.png?v=637941301798430000"></img>
            </div>            
            <div>
            <img src="https://www.shopstar.pe/arquivos/CelebraPeru-electro-imagen5.jpg?v=637941301801400000"></img>
            </div>
          </Slider>
        </div>      
        </Row>
    </Container>
    <Container className="mt-3">
        <Row  className="my-2">
        <div className="d-flex align-items-center">
            <h3 className="me-3">Moda</h3>
              <Link to="/Category/2" className="text-verde">
                ver mas...
              </Link>
          </div>
        </Row>
        <Row  className="borderImg text-center pb-4">
            <Col lg={6}>
            <img src="https://shopstar.pe/arquivos/22_07_CelebraPeru_desktop_mosaico2_moda_casacas.jpg?v=637941217128000000"></img>
            </Col>
            <Col lg={6} className="margen">
            <img src="https://shopstar.pe/arquivos/22_07_CelebraPeru_desktop_mosaico2_moda_relojes.jpg?v=637941217129270000"></img>
            </Col>
        </Row>
        <Row className="borderImg2 text-center">
        <div>
          <Slider {...settings} >
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_chompas.jpg?v=637941217075270000"></img>            
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_poleras.jpg?v=637941217078700000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_jeans.jpg?v=637941217076500000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_bolsos.jpg?v=637941217074000000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_blusas.jpg?v=637941217073070000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_polos.jpg?v=637941217080570000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/22_07_Celebraperu_desktop_carrusel_moda_billeteras.jpg?v=637941217071800000"></img>
            </div>
            <div>
            <img src="https://shopstar.pe/arquivos/25_07_Celebraperu_desktop_carrusel_moda_lentesrayban2.jpg?v=637943751857170000"></img>
            </div>
          </Slider>
        </div>      
        </Row>
    </Container>

    </Container>
    
     );
    };