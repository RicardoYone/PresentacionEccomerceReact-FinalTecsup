import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../../Context/CartContext';
export const CartItems = ({value}) => {
    const {deleteProductToCart}=useContext(CartContext); 
  return (
    <Card className='flex-row'>
        <Card.Img className='img-cart py-2 '
            variant="top"
            src={value.images[0]}
        />
         <Card.Body  >
            <Card.Title className='fs-6 w-75' > {`${value.title.substring(0,35)}.....`}</Card.Title>
            <Card.Text>
                <Row>
                    <Col xs={9}>
                        <div className="price-del"><span>Precio: S/{(value.descuento)}</span></div>
                        <div className="text-danger">Cantidad: {value.cantidad}</div>
                        <div className="fw-bold"><span>Total: S/{(value.descuento)*(value.cantidad)}</span></div>
                    </Col>
                    <Col xs={2}>
                    <button className='btn ' onClick={()=>deleteProductToCart(value)}><i className="fa fa-times text-danger"   aria-hidden="true"></i> </button>                               
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
