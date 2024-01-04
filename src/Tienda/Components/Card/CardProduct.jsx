
import Card from "react-bootstrap/Card";
import { Button, Row, Col } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CardProduct=(props)=> {
  const {addItemToCart} =useContext(CartContext)
    return (
      <>
      <Card
        style={{ width: "auto", background: "#FDFEFE" }}
        className="card mt-2 mx-1 px-2 cardProd"
      >
       <Link to={`/Product/${props.product.id}`}><Card.Img
          variant="top"
          src={props.img}
          className="mx-auto"
        /></Link> 
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className="fs-6 text-center fw-bolder ">
           {props.name.substring(0,30)}...
          </Card.Title>
          <Card.Text className="d-flex flex-column justify-content-center align-items-center">
            <Row className="text-center text-danger fs-8 w-100">
              <Col style={{fontSize:"20px"}} className="fw-bold">S/.{props.desc}.00</Col>
              <Col className="my-1 text-dark text-decoration-line-through small">
                S/.{props.price}.00
              </Col>
            </Row>
            <Row>
              <div className="text-warning">
                <i className="fa fa-star me-1" aria-hidden="true"></i>
                <i className="fa fa-star me-1" aria-hidden="true"></i>
                <i className="fa fa-star me-1" aria-hidden="true"></i>
                <i className="fa fa-star-half-o me-1" aria-hidden="true"></i>
                <i className="fa fa-star-o me-1" aria-hidden="true"></i>
              </div>
            </Row>
            <Button className="mt-2 btn btn-success w-100" onClick={()=>addItemToCart(props.product)}>Comprar</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
    );
  }
export default CardProduct;
