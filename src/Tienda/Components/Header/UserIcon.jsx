import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
export const UserIcon=()=>{

    const storage =  JSON.parse(localStorage.getItem("logeado"));
    const CerrarSesion = () => {
        localStorage.removeItem("logeado")
        window.location.replace('/');
    }

    return(
      <div className="mx-6 relative text-white  d-none d-md-block ">
      <NavDropdown
        title={
          storage === null || storage === [] ? (
            <i className="fa fa-user-circle fa-2x" aria-hidden="false"></i>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <h5 className="mx-1">
                {storage.displayName.split(" ", [1])}
              </h5>
              <img
                src={storage.photoURL}
                alt=""
                className="rounded-circle mx-1"
                width={50}
              />
            </div>
          )
        }
      >
        {storage == null ? (
          <>
            <NavDropdown.Item>
              <Link to="/Login">Login</Link>
            </NavDropdown.Item>
            {/* muestra la line horizontal */}
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/Register">Register</Link>
            </NavDropdown.Item>
          </>
        ) : (
          <>
            <NavDropdown.Item>
              <Link to="account/userProfile">Ver Perfil</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/admin/Dashboard">Admin</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/Login">Ver Compras</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <button
                className="dropdown-item text-primary padding-margin"
                onClick={CerrarSesion}
              >
                Cerrar Sesion
              </button>
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </div>
    )
}