import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../assets/categoryitem.css" 
import CardProduct from '../Card/CardProduct';
import CardProductHorizontal from '../Card/CardProductHorizontal';
import { useState, useEffect } from 'react';
import { productApi } from '../../helpers/ProductsApi';
import { useParams } from 'react-router-dom';

export const CategoriaItems=(props)=>{
    const {idsub}  = useParams();
    const[product,setProduct]=useState([])
    useEffect(()=>{
        if(idsub){
            productApi().then((produc)=>setProduct(Object.values(produc).map((prod)=>prod)
            .filter((produccate)=>produccate.category_id==(props.id) && produccate.subcategoria==(idsub))))
        }
        else{
            productApi().then((produc)=>setProduct(Object.values(produc).map((prod)=>prod)
            .filter((produccate)=>produccate.category_id==(props.id))))
        } 
    },[props.id, idsub])
    return(
        < >
          <Row lg={4} md={3} sm={2} xs={2}>  
      
            {
                product.map((variant,index)=>(
                props.tipo === 'grid'?
                <Col  className='mb-2' key={index}>
                    <CardProduct  product={variant} img={variant.images[0]} name={variant.title} price={variant.price} desc={variant.descuento}/>                    
                </Col>:
                <Col xs={12} sm={12} md={12} lg={12} xl={12}  className='mb-2' key={index}>
                  <CardProductHorizontal product={variant} img={variant.images[0]} name={variant.title} price={variant.price} desc={variant.descuento}/>  
                </Col>
                ))
             }                    
            </Row>   
            {/*
           
                : */}           
        </>
    )
}