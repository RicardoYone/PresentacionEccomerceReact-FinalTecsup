import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { categoryApi } from '../../helpers/CategoryApi';
import { NavLink } from 'react-router-dom';

export const Categoryfilters=({id})=>{
    const[subcate,setSubcate]=useState([])
    useEffect(()=>{
        categoryApi(id-1).then((categ)=>setSubcate(categ.subcategorias))
    },[id])
      // route that it links to is currently selected.
    let activeStyle = {
        'fontWeight': 'bold',
      color: '#198754',
    };
    return(
        <>
            <Col lg={3}>
                <h4>Subcategorias</h4>
                <ListGroup variant="flush bg-white">
                    {
                        subcate.map((subcategori, index)=>(
                            
                                <ListGroup.Item className='cursor-pointer ' key={index}>
                                    <NavLink to={`/Category/${id}/${subcategori.id}`}  className='text-decoration-none' 
                                    style={({ isActive }) =>isActive ? activeStyle  : undefined} >
                                    {subcategori.name} 
                                    </NavLink> 
                                </ListGroup.Item>
                        ))
                    }
                    
                </ListGroup>
             </Col>
                   
        </> 
    )
}