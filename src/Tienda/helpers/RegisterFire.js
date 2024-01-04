import axios from 'axios';
export const RegisteFire = (dataToSave) =>{
    const {Correo, Contraseña, Apellido, Nombre, uid, accessToken, proveedor, fechaCreacion, Avatar } = dataToSave
    axios.post('https://tienda-75f88-default-rtdb.firebaseio.com/Usuarios.json', {
        Correo,
        Contraseña,
        Apellido,
        Nombre,
        uid,
        accessToken,
        proveedor,
        fechaCreacion,
        Avatar
      })
      .then(function (response) {
       
      })
      .catch(function (error) {
       
    });
}   


export const TraerUsuario = (uid) =>{
  return axios.get('https://tienda-75f88-default-rtdb.firebaseio.com/Usuarios.json?orderBy="uid"'+'&'+"equalTo="+`"${uid}"`)
  .then(function (response) {
   return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}

