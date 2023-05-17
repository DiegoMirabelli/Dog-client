import axios from "axios";
export const A_Z = 'A_Z';
export const Z_A = 'Z_A';
export const WEIGHT_MAX = 'WEIGHT_MAX';
export const WEIGHT_MIN = 'WEIGHT_MIN';

// export function getDogs() {
//     return async (dispatch) => {
//       try {
//           var dog = await axios('http://localhost:3001/dogs');
//           return dispatch({
//               type: 'GET_DOGS',
//               payload: dog.data
             
//           })
//       } catch (error) {
//           console.log(error);
//       }
  
//   }
//   }
export function getDogs() {
  return async (dispatch) => {
    try {
        var dog = await axios('/dogs');
        return dispatch({
            type: 'GET_DOGS',
            payload: dog.data
           
        })
    } catch (error) {
        console.log(error);
    }

}
}
  
  
  // export function getTemperaments() {
  //   return async function (dispatch) {
  //     try {
  //       var res = await axios.get("http://localhost:3001/temperaments");
  //       return dispatch({
  //         type: 'GET_TEMPERAMENTS',
  //         payload: res.data
  //       });
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };
  // }
  export function getTemperaments() {
    return async function (dispatch) {
      try {
        var res = await axios.get("/temperaments");
        return dispatch({
          type: 'GET_TEMPERAMENTS',
          payload: res.data
        });
      } catch (error) {
        alert(error);
      }
    };
  }
  
  // export const getByName = (name)=> async dispatch => {
  //   try{
  //     await axios.get('http://localhost:3001/dogs?name='+ name)
  //     .then((response) => {
  //         dispatch({
  //             type: 'GET_BY_NAME',
  //             payload: response.data
  //         })
  //     })
  //  } catch (error) { 
  //     return alert("Raza no encontrada")
  //  }
  // }
  export const getByName = (name)=> async dispatch => {
    try{
      await axios.get('/dogs?name='+ name)
      .then((response) => {
          dispatch({
              type: 'GET_BY_NAME',
              payload: response.data
          })
      })
   } catch (error) { 
      return alert("Raza no encontrada")
   }
  }

  // export function getDetail(id){
  //   return async function (dispatch){
  //     try {
  //       const idDog = await axios("http://localhost:3001/dogs/" + id)
  //       return dispatch({
  //         type: "GET_DETAIL", 
  //         payload: idDog.data
  //       })
    
  //     } catch (error) {
  //       console.log(error)
  //     }
  //    }
  //   }
  export function getDetail(id){
    return async function (dispatch){
      try {
        const idDog = await axios("/dogs/" + id)
        return dispatch({
          type: "GET_DETAIL", 
          payload: idDog.data
        })
    
      } catch (error) {
        console.log(error)
      }
     }
    }
  
  // export const getByTemperaments = () => async dispatch =>{
  //   try{
  //       await axios.get('http://localhost:3001/temperaments')
  //       .then((response) => {
  //           dispatch({
  //               type: 'GET_BY_TEMPERAMENTS',
  //               payload: response.data
  //           })            
  //       })
  //   } catch (error){
  //       return (error)
  //   }
  // }
  export const getByTemperaments = () => async dispatch =>{
    try{
        await axios.get('/temperaments')
        .then((response) => {
            dispatch({
                type: 'GET_BY_TEMPERAMENTS',
                payload: response.data
            })            
        })
    } catch (error){
        return (error)
    }
  }
  
  export function filterBy(payload){
    return{
        type: 'FILTER_BY',
        payload
    }
  }
  
  
  export function filterTemperament(payload){
    return{
        type: 'FILTER_TEMPERAMENT',
        payload
    }
  }
  export function orderBy(order) {
    return function (dispatch) {
      dispatch({ type: 'ORDER_BY', payload: order });
      };
  }
  
  export function clean(){
    return function(dispatch){
      dispatch({type:'CLEAN'})
    }
  }

  // export function postDog(payload) {
  //   return async function(dispatch){
  //     const post = await axios.post("http://localhost:3001/dogs/createDog", payload)
  //     return dispatch({
  //       type: 'POST_DOG',
  //       payload: post 
  //     })
  //   }
  // } 
  export function postDog(payload) {
    return async function(dispatch){
      const post = await axios.post("/dogs/createDog", payload)
      return dispatch({
        type: 'POST_DOG',
        payload: post 
      })
    }
  }
  