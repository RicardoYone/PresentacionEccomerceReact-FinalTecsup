import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { useEffect, useState,useContext } from "react";
import { productApi } from "../../helpers/ProductsApi";
import Button from "react-bootstrap/Button";
import { CartContext } from '../../../Context/CartContext';
import { LupaModal } from "./Components/LupaModal";
import { Link } from "react-router-dom";
export const CarrouselCategori = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true); 
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false, 
    nextArrow: false,
    prevArrow: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const {addItemToCart} =useContext(CartContext)

  const [products, setProduct] = useState([])

  useEffect(()=>{
    productApi().then((produc)=>setProduct(Object.values(produc).map((prod)=>prod)
       .filter((produccate)=>produccate.MaxVent>10)))
  },[])

  
  return (
    <Container className="mt-5">
       <span className="fw-bold mx-2 my-2">PRODUCTOS DESTACADOS</span>
       <i className="fa fa-star text-warning" aria-hidden="true"></i>
      <Slider {...settings} className="">
        {
        products.map(prod=>(
          <div id="prod" key={prod.id}>
          <Card
            style={{ width: "auto",height:"400",  background: "#FDFEFE" }}
            className="card mt-2 mx-1 px-2 cardProd cursor-pointer"
          >
          <Link to={`/Product/${prod.id}`}>
            <Card.Img
              variant="top"
              src={prod.images[0]}
              style={{ width: "170px", height: "182px" }}
              alt={prod.title}
              className="mx-auto" onClick={handleShow}
            />
          </Link>  
           <Card.Body>
              <Card.Title className="fs-6 text-center fw-bolder">
              {`${prod.title.substring(0,30)}.....`}
              </Card.Title>
              <Card.Text className="d-flex flex-column justify-content-center">
                <p className="text-center text-danger fs-8">
                  <span className="fw-bold">S/. {prod.descuento}</span>
                  <span className="ms-3 text-dark text-decoration-line-through small">
                  S/. {prod.price}
                  </span>
                </p>
                <Button  onClick={() => addItemToCart(prod)}  >
                  Agregar al carrito
                </Button>
              </Card.Text>
              <Card.Footer className="footerCard">
                <div className="d-flex justify-content-evenly padding-margin align-items-center">
                  <div className="d-flex justify-content-center align-items-center">
                  <LupaModal  {...prod}/>
                    
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      className="iconCard fa fa-heart fa-2x"
                      aria-hidden="true" style={{color:"#DC4D7B"}}                      
                    ></i>
                  </div>
                </div>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
        ))
        }
      </Slider>
    </Container>
  );
};
