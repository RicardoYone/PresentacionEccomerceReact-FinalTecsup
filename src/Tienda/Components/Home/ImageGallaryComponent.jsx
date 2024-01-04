
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageGallaryComponent = ({images}) => {

    return (
        <div>

            <Carousel interval="5000" transitionTime="1000">
                {
                    images.map((imagenes,i) => (
                        <div key={i}>
                            <img src={imagenes} />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )

}
export default ImageGallaryComponent; 