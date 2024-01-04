import Swal from "sweetalert2";

const axios = require("axios").default;

export const productApi = () => {
  return axios
    .get("https://tienda-75f88-default-rtdb.firebaseio.com/Products.json")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const agregarProd = (data) => {
  axios
    .post("https://tienda-75f88-default-rtdb.firebaseio.com/Products.json", {
      MaxVent: data.MaxVent,
      SKU: data.SKU,
      View: data.View,
      caracteristicas: data.caracteristicas,
      category_id: data.category_id,
      description: data.description,
      descuento: data.descuento,
      id: data.id,
      images: data.images,
      price: data.price,
      subcategoria: data.subcategoria,
      title: data.title
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const eliminarProduct = (id) =>{

    return axios.delete(`https://tienda-75f88-default-rtdb.firebaseio.com/Products/${id}.json`)
    .then(function (response) {
      Swal.fire({
        title: 'Estas seguro de eliminar el producto?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Se borro el producto con exito!',
            'El producto ha sido eliminado',
            'success'
          )
          setTimeout(()=>{
            window.location.replace("/admin/ProductsView");
          }, 1000)
        }
      })
      
    })
    .catch(function (error) {
      console.log(error);
    });

}