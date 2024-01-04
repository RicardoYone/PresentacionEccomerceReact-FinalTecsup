import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom"; 
import '../../../assets/UserLogin.css';


export const MenuAdmin = () => {
  const storage = JSON.parse(localStorage.getItem("logeado"));
  return (
    
      <div>
        <Navbar bg="light">
          <Container>
            <p style={{fontSize:"30px", fontWeight:"bold", borderBottom:"1px solid #808B96"}}>Bienvenid@ {storage.displayName.split([" "],[1])}</p>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/Dashboard">Dashboard </NavLink>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/ProductsView">Productos</NavLink>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/AddProduct">Agregar Producto</NavLink>
          </Container>
        </Navbar>        
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/CategoriasView">Categorias</NavLink>
          </Container>
        </Navbar>    
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/AddCategoria">Agregar Categoria</NavLink>
          </Container>
        </Navbar>     
        <Navbar bg="light">
          <Container>
            <NavLink to="/admin/PedidosView">Pedidos</NavLink>
          </Container>
        </Navbar>        
        <Navbar bg="light" style={{borderTop:"1px solid #808B96"}}>
          <Container>
            <NavLink to="#">Configuración</NavLink>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <NavLink to="#">Cerrar Sesión</NavLink>
          </Container>
        </Navbar>      
      </div>
  );
};
