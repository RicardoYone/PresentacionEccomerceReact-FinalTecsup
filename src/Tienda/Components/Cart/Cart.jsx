import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../Context/CartContext';
import { CarroCate } from './CarroCate';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import  Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Style.css'
import { CartItems } from './CartItems';
export const Cart = () => {
  const[productsLength,setProductsLength]=useState(0);
  const style = {width:400, };
  const {cartItem}=useContext(CartContext);
  useEffect(()=>{
    setProductsLength(
      cartItem.reduce((previous, current)=>previous + current.cantidad,0)
      )
  },[cartItem])
  const total=cartItem.reduce(
    (previous,current)=>previous + current.cantidad * current.descuento,0
  );
  return (
  
       <OverlayTrigger       
          trigger="click"
          key='bottom'
          placement='bottom'
          overlay={
            <Popover id={`popover-positioned-bottom`} className="items-banner">
              <Popover.Header style={style} as="h3">{`Productos`}</Popover.Header>
               {productsLength>0 ?
                (
                  <Popover.Body style={style}>
                    { cartItem.map((prod,index)=>
                     <CartItems   key={index} value={prod}/>
                     ) }
                     <div className='d-flex align-items-center pt-3 '>
                     <Link to='cart'><button className="btn btn-outline-success">Ir al Carrito</button></Link> 
                     <strong className='ms-auto h5'>Total:  S/.{total}</strong>                     
                     </div>
                     
                  </Popover.Body>
                ):
                (
                  <Popover.Body>
                    <strong>Aun no tiene productos en el carrito </strong> 
                  </Popover.Body>
                )}
            </Popover>
          }
        >
          <span className="position-relative inline-block cursor-pointer">
      <CarroCate/>
      {productsLength>0 ? (<span className="position-absolute top-0 right-0  carro2 bg-danger ">{productsLength}</span>):(<span className="position-absolute top-0 right-0  carro bg-danger "></span>)}
      </span>
        </OverlayTrigger>
       
   
  )
}
