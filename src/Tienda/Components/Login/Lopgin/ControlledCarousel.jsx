import Carousel from 'react-bootstrap/Carousel';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function ControlledCarousel() {
  
  return (
    <Carousel className="carrusel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/1b/60/22/1b602231a05c7a50fec7ebe8979035ae.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>Encuentra todo lo que buscas</h4>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://atrevete.pe/blog/wp-content/uploads/2020/09/custom-ecommerce-website-development-vector-image.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h4>Se aceptan todos los medios de pago</h4>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/08/17/19/52/shopping-3613689_960_720.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h4>Accede muy pronto desde nuestra App</h4>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://o2web.es/wp-content/uploads/2020/08/ecommerce.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h4>Compra seguro</h4>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.designseogroup.com/wp-content/uploads/2021/11/In-no-time-pana.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h4>Recibe tus productos en el menor tiempo posible</h4>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;