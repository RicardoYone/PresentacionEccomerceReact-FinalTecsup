import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const UserProfile = () => {
  const storage = JSON.parse(localStorage.getItem("logeado"));

  return (
    <>
      {storage === null ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Row
          className="container mx-auto"
          style={{ height: "82vh", marginTop: "3.5rem" }}
        >
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="card border-success">
              <div
                className="card-header border-success"
                style={{
                  backgroundImage:
                    "url(https://static.vecteezy.com/system/resources/previews/001/884/507/large_2x/abstract-green-water-color-background-illustration-texture-for-design-free-photo.jpg)",
                }}
              >
                <div className="">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      alt="Avatar"
                      width={100}
                      className="rounded-circle my-2"
                      src={storage.photoURL}
                    />
                    <h2 className="my-2">{storage.displayName.split([5])}</h2>
                  </div>
                </div>
                <NavLink
                  to="/account/EditUserProfile"
                  className="float-end btn btn-dark "
                  type="button"
                >
                  <i className="fa fa-pencil mx-2" aria-hidden="true"></i>
                  Editar
                </NavLink>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Correo:</label>
                  <input
                    type="email"
                    disabled
                    className="form-control border-success border-success"
                    value={storage.email}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Dirección:</label>
                  {storage.address ? (
                    <input
                      disabled
                      type="text"
                      className="form-control border-success"
                      value={storage.address}
                    ></input>
                  ) : (
                    <input
                      type="text"
                      disabled
                      className="form-control border-success"
                      value={"Dirección no ingresada"}
                    ></input>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Celular:</label>

                  {storage.mobile ? (
                    <input
                      disabled
                      type="email"
                      className="form-control border-success"
                      value={storage.mobile.value}
                    ></input>
                  ) : (
                    <input
                      disabled
                      type="email"
                      className="form-control border-success"
                      value={"Número no ingresado"}
                    ></input>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
