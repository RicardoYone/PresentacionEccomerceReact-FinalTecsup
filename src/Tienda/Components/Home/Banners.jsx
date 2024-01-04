import Carousel from 'react-bootstrap/Carousel';
import "../../../assets/Home.css";
export const Banners = () => {
  return (
    <Carousel  className="carrouselPrin h-100">
      <Carousel.Item>        
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-01.jpg" className="w-100 image_full" alt="First slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-02.jpg" className="w-100 image_med" alt="First slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-03.jpg" className="w-100 image_mobile" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>        
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-01z.jpg" className=" w-100 image_full" alt="Second slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-02.jpg" className=" w-100 image_med" alt="Second slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-03.jpg" className=" w-100 image_mobile" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>        
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-01.jpg" className=" w-100 image_full" alt="Third slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-02.jpg" className=" w-100 image_med" alt="Third slide"/>
        <img src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-03.jpg" className=" w-100 image_mobile" alt="Third slide"/>
      </Carousel.Item>      
    </Carousel>
  );
};
