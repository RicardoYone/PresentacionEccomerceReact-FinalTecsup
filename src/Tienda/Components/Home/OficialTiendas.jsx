import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "../../../assets/Home.css";

export const OficialTiendas = () => {
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
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <Container>
      <Row className="mt-5">
        <h3 className="mb-4">TIENDAS OFICIALES </h3>
      </Row>
      <Row>
        <div>
          <Slider {...settings} className="borderTiendas">
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/2c24dd9106767__289x388px_xiaomi1.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/44e8dee7c628__desktop_sis1_lenovo.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/28f63d65c01a1__desktop_sis1_adidas.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/3d98bda18054__on_sists_lapasus_pe.jpg"></img>
            </div>
            <div>
              <img src="https://i.linio.com/cms/ace06972-0133-11ed-8d9e-56ba5f1eb965.webp"></img>
            </div>
            <div>
              <img src="https://i.linio.com/cms/621f225a-fef1-11ec-8ce6-c2533916a67f.webp"></img>
            </div>
            <div>
              <img src="https://i.linio.com/cms/ddc6d114-fef1-11ec-b38a-c2533916a67f.webp"></img>
            </div>
            <div>
              <img src="https://i.linio.com/cms/52c3e9e6-b22d-11ec-9861-96196405f863.webp"></img>
            </div>
          </Slider>
        </div>       
      </Row>
      <Row className="my-5">
        <h3 className="mb-3">¡NO LO PIENSES MÁS!</h3>
        <Slider {...settings} className="borderTiendas">
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/2f2143fcd995f__bt_app_laptops_generico_semana_app.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/260a03eaf0368__375x375px_consolas1.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/bc9b5fc91b6f__375x375px_videojuegos.jpg"></img>
            </div>            
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/321f341e101d3__375x375px_sillas.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/28744030009ba__375x375px_monitores.jpg"></img>
            </div>
            <div>
              <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/25805a030953e__375x375px_accesorios.jpg"></img>
            </div>           
          </Slider>
      </Row>
    </Container>
  );
};
