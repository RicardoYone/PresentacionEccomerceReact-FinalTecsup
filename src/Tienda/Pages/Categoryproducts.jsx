import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { Cardcategory } from '../Components/Category/Cardcategory';
import { Navcategory } from '../Components/Category/Navcategory';
export const Categoryproducts=()=>{
    const { id } = useParams();
    return(
        <>
        <Container>
            <Navcategory/>
            <Cardcategory id={id} />
        </Container>
        </>
    )
}