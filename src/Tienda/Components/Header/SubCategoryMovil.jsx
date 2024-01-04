import { NavLink,Link } from "react-router-dom";
import { CarroCate } from "../Cart/CarroCate";
import { Cart } from "../Cart/Cart";
export const SubCategoryMovil = (props) => {
  let activeStyle = {
    'fontWeight': 'bold',
  color: '#198754',
};
const storage =  JSON.parse(localStorage.getItem("logeado"));
    const CerrarSesion = () => {
        localStorage.removeItem("logeado")
        window.location.replace('/');
    }

  return (
    <>
    <div className="bg-white h-full overflow-y-auto d-block d-md-none h-max">
        <div className="container bg-verde py-2 mb-2"></div>
        <ul className="px-0">
         {props.data.map((categorias,i)=>(
            <li key={i} className=" text-dark  ">
              <NavLink 
                         to={`/Category/${categorias.id}`}
                          className="py-2 text-sm  d-flex align-items-center lista-menu text-decoration-none "
                          style={({ isActive }) =>
                                    isActive ? activeStyle  : undefined
                                    } 
                        >
                <span className="flex justify-center w-9 text-dark px-3">
                  {/* icono */}
                  <i className="fa fa-shopping-bag  text-verde" aria-hidden="true"></i>
                </span>
                {/*   catgoria */}
                {categorias.name} 
              </NavLink>
             </li>
          ))} 

        </ul>
        <p className="text-dark px-6 my-2">Usuario</p>
        {
          storage === null || storage === [] ? (
            <>
            <Link to="/Login" className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu ">
              <span className="d-flex justify-content-center w-9">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </span>
              Login
            </Link>
            <Link  className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu " to="/Register">
            <span className="d-flex justify-content-center w-9">
            <i className="fa fa-sign-in" aria-hidden="true"></i>
            </span>
              Register

              </Link>
        </>
          ) : (
            <>
           <Link to="account/userProfile" className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu ">
                 <span className="d-flex justify-content-center w-9">    
                 <i className="fa fa-user-o" aria-hidden="true"></i>
                  </span>
                  {storage.displayName.split(" ", [1])}
            </Link>
            <button onClick={CerrarSesion}
              className="btn bg-verde text-primary padding-margin px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu"
              >
              <span className="d-flex justify-content-center w-9">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              </span>
              Cerrar Sesion
              </button>
             </> 
          )
        }
          <div className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu ">
          <span className="d-flex justify-content-center w-9">
          <Link to='/cart'> <CarroCate/></Link>
            </span>
          </div>
            
        
      </div>
    </> 
  );
};
