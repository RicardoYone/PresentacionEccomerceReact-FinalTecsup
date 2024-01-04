import Swal from "sweetalert2";

const axios = require("axios").default;
export const agregarPedido = (data) => {
    axios
      .post("https://tienda-75f88-default-rtdb.firebaseio.com/Pedidos.json", {
            nombre: data.nombre,
            corre: data.correo,
            telefono: data.telefono,
            direccion1: data.direc1,
            direccion2: data.direc2,
            departamento: data.departamento,
            provincia: data.provin,
            distrito: data.distrito,
            estado: data.estado,
            fecha: data.fecha,
            productos: data.productos

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };