import React, { useEffect, useState } from 'react'
import { productApi } from '../../helpers/ProductsApi'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Search = ({prod}) => {
    const[product,setProduct]=useState([])
    const fetchProducList = async  () => {
        const listProduc =await  productApi().then((pro)=>pro);   
        if (prod) {
          filtrar(listProduc);
        }
      };

      const filtrar = async (dato) => {
        let rsultado = dato
          .map((nombre) => nombre)
          .filter((inf) => {
            if (inf.title.toLowerCase().includes(prod.toLowerCase())) {
              return inf;
            }
          });
          setProduct(rsultado);
      };
    
      useEffect(() => {
        if (prod.length>2){
        fetchProducList();}
        else{
            if(prod==="")
            setProduct([]);
        }
        
      }, [prod]);

   
  return (
    <Container className='py-3 scrol' >
   { product.map((value,i)=>(
    <Link to={`Product/${value.id}`} key={i} className="text-decoration-none cursor-pointer">
        <Card  className='flex-row   '>
            <Card.Img className='img-cart p-2 '
                variant="top"
                src={value.images[0]}
            />
            <Card.Body  >
                <Card.Title className='fs-6' > {value.title}</Card.Title>
            </Card.Body>
        </Card>
        </Link>
    ))}
    </Container>
  )
}
