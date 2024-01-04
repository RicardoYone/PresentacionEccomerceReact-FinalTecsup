const axios = require('axios').default;
export const categoryApi = (id="") =>{
    return axios.get(`https://tienda-75f88-default-rtdb.firebaseio.com/Category/${id}.json`)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      }) 
  }
