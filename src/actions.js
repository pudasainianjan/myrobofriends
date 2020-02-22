import {
         CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING, 
         REQUEST_ROBOTS_SUCCESS, 
         REQUEST_ROBOTS_FAILED 
} from './constants.js';



export const setSearchField = (text) => ({    //returning an object
    // console.log(text)
    // return {
    type: CHANGE_SEARCH_FIELD,   
    payload: text  
    
})
/*here action setSearchField is going to take text which is what user inputs and its going 
to return and object that has a type of CHANGE_SEARCH_FIELD  so thats the action thats being
 taken and payload is a common name in redux, means we re sending whatever data is needed to go on to the reducer */    
 
 

 export const requestRobots = () => (dispatch) => {
     dispatch({ type: REQUEST_ROBOTS_PENDING})
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then( data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
     .catch( error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))   //if there is some errors
 }